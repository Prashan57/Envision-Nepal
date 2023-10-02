import mongoose from "mongoose";

const UserBidSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  bidAmount: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  PAN: {
    type: Number,
    required: true,
  },
});

export default mongoose.model("UserBid", UserBidSchema);
