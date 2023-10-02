import mongoose from "mongoose";

const AdminBidSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  bidAmount: {
    type: Number,
    required: true,
  },
  bidSecurityAmount: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

export default mongoose.model("AdminBid", AdminBidSchema);
