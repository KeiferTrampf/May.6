import orderHandler from "../handlers/order.js";

const getOrders = async (req, res) => {
  const orders = await orderHandler.getAllOrders();
  res.status(200).json(orders);
};

const getOrderByReceiptId = async (req, res) => {
  const receiptId = req.params.receipt_id;
  const order = await orderHandler.getOrderByReceiptId(receiptId);
  res.status(200).json(order);
};

const deleteOrder = async (req, res) => {
  const receiptId = req.params.receipt_id;
  await orderHandler.deleteOrder(receiptId);
  res.status(204).json({ ok: true });
};

const createOrder = async (req, res) => {
  const { name, order } = req.body;
  await orderHandler.createOrder({ name, order });
  res.status(201).json({ ok: true });
};

const updateOrder = async (req, res) => {
  const id = req.params.receipt_id;
  const { order, name, isReady } = req.body;
  console.log("in updateOrder: ", id, order, name, isReady);
  await orderHandler.updateOrder({ id, order, name, isReady });
  res.status(200).json({ data: order });
};

export default {
  getOrders,
  getOrderByReceiptId,
  deleteOrder,
  createOrder,
  updateOrder,
};
