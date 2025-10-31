import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/database';

export async function GET() {
  try {
    // Test database connection
    await connectDB();
    
    return NextResponse.json({
      status: 'OK',
      message: 'Server is healthy and database is connected',
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    return NextResponse.json({
      status: 'ERROR',
      message: 'Database connection failed',
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}
