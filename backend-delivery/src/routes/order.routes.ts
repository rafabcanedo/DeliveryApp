import { Router } from "express";
import { CreateOrderController } from "../modules/Order/ordersCase/CreateOrderController";

const createOrderController = new CreateOrderController();

const orderRoutes = Router();

orderRoutes.post("/", createOrderController.handle)

export { orderRoutes };