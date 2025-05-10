import { Router } from "express";
import orderController from "./controllers/orderController.js";
import searchController from "./controllers/searchController.js";
import userController from "./controllers/userController.js";

// import { searchOrder } from "./handlers/search.js";

export const router = Router();

// Order
router.get("/order", orderController.getOrders);
router.delete("/order/:receipt_id", orderController.deleteOrder);
router.post("/order", orderController.createOrder);
router.get("/order/:receipt_id", orderController.getOrderByReceiptId);
router.put("/order/:receipt_id", orderController.updateOrder);
router.post("/user", userController.createUser);
router.post("/login", userController.loginUser);

// Search
// router.get("/search", searchController.search);
