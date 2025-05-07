import Order from "../models/order.js";

let receiptNo = 1;

// Get all
const getAllOrders = async () => {
  return await Order.find().lean();
};

// Get one
const getOrderByReceiptId = async (receiptId) => {
  return await Order.findOne({ receiptId: receiptId });
};

// Create one
const createOrder = async ({ name, order }) => {
  receiptNo += 1;
  return await Order.create({ name, order, receiptId: receiptNo.toString() });
};

// Delete one
const deleteOrder = async (receiptId) => {
  return await Order.deleteOne({ receipt_id: receiptId });
};

// Update one
const updateOrder = async ({ id, order, name, isReady }) => {
  return await Order.findOneAndUpdate(
    { receiptId: id },
    { order, name, isReady },
    { new: true }
  );
};

export default {
  getAllOrders,
  getOrderByReceiptId,
  createOrder,
  deleteOrder,
  updateOrder,
};
