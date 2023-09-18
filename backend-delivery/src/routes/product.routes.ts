import { Router } from "express";
import { CreateProductController } from "../modules/products/productsCase/CreateProductController";
import { GetAllProductsController } from "../modules/Order/GetAllProducts/GetAllProductsController";

const createProductController = new CreateProductController();
const getAllProductsController = new GetAllProductsController();

const productsRoutes = Router();

productsRoutes.post("/", createProductController.handle);
productsRoutes.get("/allproducts", getAllProductsController.handle);

export { productsRoutes };