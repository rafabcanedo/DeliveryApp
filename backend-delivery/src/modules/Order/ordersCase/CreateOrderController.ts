import { Request, Response } from "express";
import { CreateOrderUseCase } from "./CreateProductUseCase";

export class CreateOrderController {
 async handle(req: Request, res: Response) {
  const { userId, productId, totalPrice, nameUser, addressUser } = req.body;

  const createOrderUseCase = new CreateOrderUseCase();

  await createOrderUseCase.execute({ userId, productId, totalPrice, nameUser, addressUser });

  return res.status(201).send();
 }
}