import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/database';
import { razorpay } from '@/lib/razorpay';
import { checkRateLimit } from '@/lib/rate-limit';
import Coupon from '@/models/Coupon';
import mongoose from 'mongoose';

interface CouponDocument {
  _id: mongoose.Types.ObjectId;
  coupon_code: string;
  payment_id: string | null;
  is_coupon_issued: boolean;
  __v: number;
}

interface RazorpayError {
  error: {
    code: string;
    description: string;
  };
}

// Type guard to check if error is a Razorpay error
function isRazorpayError(error: unknown): error is RazorpayError {
  const errorObj = error as Record<string, unknown>;
  const errorError = errorObj?.error as Record<string, unknown>;
  
  return (
    typeof errorObj === 'object' &&
    errorObj !== null &&
    'error' in errorObj &&
    typeof errorError === 'object' &&
    errorError !== null &&
    'code' in errorError
  );
}

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ paymentId: string }> }
) {
  const { paymentId } = await context.params;

  // Rate limiting check
  const rateLimitResult = checkRateLimit(request);
  if (!rateLimitResult.success) {
    return NextResponse.json({
      success: false,
      message: rateLimitResult.message
    }, { status: 429 });
  }

  let session: mongoose.ClientSession | null = null;

  try {
    // 1. Verify payment with Razorpay
    const payment = await razorpay.payments.fetch(paymentId);

    if (!payment || !['authorized', 'captured'].includes(payment.status)) {
      return NextResponse.json({
        success: false,
        message: 'Invalid or incomplete payment.',
      }, { status: 400 });
    }

    // 2. Ensure DB connection
    await connectDB();

    // 3. Check if coupon already exists for this payment
    const existingCoupon = await Coupon.findOne({ payment_id: paymentId }).lean() as CouponDocument | null;
    
    if (existingCoupon) {
      if (!existingCoupon.is_coupon_issued) {
        await Coupon.updateOne(
          { _id: existingCoupon._id },
          { $set: { is_coupon_issued: true } }
        );
      }
      return NextResponse.json({
        success: true,
        message: 'Coupon already assigned.',
        coupon: existingCoupon.coupon_code,
      });
    }

    // 4. Reserve a new coupon atomically
    session = await mongoose.startSession();
    session.startTransaction();

    const reservedCoupon = await Coupon.findOneAndUpdate(
      { payment_id: null, is_coupon_issued: false },
      { $set: { payment_id: paymentId } },
      {
        new: true,
        session,
        sort: { _id: 1 },
      }
    ) as CouponDocument | null;

    if (!reservedCoupon) {
      await session.abortTransaction();
      return NextResponse.json({
        success: false,
        message: 'Unlucky! We are temporarily out of coupon codes. Your payment was successful, please contact support with your payment ID to receive your coupon.',
      }, { status: 503 });
    }

    await session.commitTransaction();

    // 5. Mark coupon as issued
    await Coupon.updateOne(
      { _id: reservedCoupon._id },
      { $set: { is_coupon_issued: true } }
    );

    return NextResponse.json({
      success: true,
      message: 'Coupon assigned instantly!',
      coupon: reservedCoupon.coupon_code,
    });

  } catch (error: unknown) {
    if (session) {
      await session.abortTransaction();
    }

    console.error('❌ Instant coupon assignment error:', error);

    // Handle Razorpay errors using type guard
    if (isRazorpayError(error) && error.error.code === 'BAD_REQUEST_ERROR') {
      return NextResponse.json({
        success: false,
        message: 'Invalid payment ID.',
      }, { status: 400 });
    }

    // Handle other errors
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    
    return NextResponse.json({
      success: false,
      message: 'Failed to assign coupon. Please try again later.',
      error: process.env.NODE_ENV === 'development' ? errorMessage : undefined
    }, { status: 500 });
  } finally {
    if (session) {
      session.endSession();
    }
  }
}