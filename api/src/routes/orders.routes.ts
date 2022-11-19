import { Router } from "express";
import { OrdersController } from "../controllers/OrdersController";

const ordersController = new OrdersController();
const ordersRoutes = Router();

ordersRoutes.get("/", ordersController.listProducts);

ordersRoutes.post("/", ordersController.createOrder);

ordersRoutes.patch("/:orderId", ordersController.updateOrder);

ordersRoutes.delete("/:orderId", ordersController.deleteOrder);

export { ordersRoutes };
