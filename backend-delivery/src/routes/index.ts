import { Router } from 'express';
import { userRoutes } from './user.routes';
import { productsRoutes } from './product.routes';
import { orderRoutes } from './order.routes';

const routes = Router();

routes.use("/users", userRoutes);
routes.use("/products", productsRoutes);
routes.use("/orders", orderRoutes)

export { routes };