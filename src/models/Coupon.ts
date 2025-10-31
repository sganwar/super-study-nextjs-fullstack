import mongoose from 'mongoose';

const couponSchema = new mongoose.Schema({
  coupon_code: {
    type: String,
    required: true,
    unique: true,
    index: true
  },
  payment_id: {
    type: String,
    default: null,
    sparse: true,  
  },
  is_coupon_issued: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

export default mongoose.models.Coupon || mongoose.model('Coupon', couponSchema);
