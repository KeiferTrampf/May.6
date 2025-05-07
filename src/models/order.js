import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "name is required"],
  },
  order: {
    type: [String],
    required: [true, "order is required"],
    default: [],
  },
  isReady: {
    type: Boolean,
    required: true,
    default: false,
  },
  receiptId: String,
});

export default mongoose.model("order", orderSchema);
