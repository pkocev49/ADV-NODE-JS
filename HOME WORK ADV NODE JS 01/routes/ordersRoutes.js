import { Router } from "express";
import OrdersController from "../controllers/ordersController.js";

const ordersController = new OrdersController();
const orderRouter = Router();

orderRouter.get("/", ordersController.getAllOrders);
orderRouter.get("/:id", ordersController.getOrderById);
orderRouter.post("/", ordersController.addOrder);
orderRouter.delete("/:id", ordersController.deleteOrder);
export default orderRouter;
