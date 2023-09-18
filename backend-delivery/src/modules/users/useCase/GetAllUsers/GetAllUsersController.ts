import { Request, Response } from "express";
import { GetAllUserUseCase } from "./GetAllUsersUseCase";

export class GetAllUsersController {
 async handle(req: Request, res: Response) {

  const getAllUsersUseCase = new GetAllUserUseCase();

  const result = await getAllUsersUseCase.execute();

  return res.status(201).json(result);
 }
}