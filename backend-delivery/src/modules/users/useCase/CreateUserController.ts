import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
 async handle(req: Request, res: Response) {
  const { name, email, password, password_confirm } = req.body;

  const createUserUseCase = new CreateUserUseCase();

  const result = await createUserUseCase.execute({ name, email, password, password_confirm });

  return res.status(201).json(result);
 }
}