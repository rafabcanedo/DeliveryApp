import { Request, Response } from "express";
import { CreateProductUseCase } from "./CreateProductUseCase";

export class CreateProductController {
 async handle(req: Request, res: Response) {
  const { name, image, description, price, stock } = req.body;

  const createUserUseCase = new CreateProductUseCase();

  const result = await createUserUseCase.execute({ name, image, description, price, stock });

  return res.status(201).json(result);
 }
}