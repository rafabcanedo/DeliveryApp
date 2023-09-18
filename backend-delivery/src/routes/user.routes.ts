import { Router } from "express";
import { CreateUserController } from "../modules/users/useCase/CreateUserController";
import { GetAllUsersController } from "../modules/users/useCase/GetAllUsers/GetAllUsersController";

const createUserController = new CreateUserController();
const getAllUserController = new GetAllUsersController();

const userRoutes = Router();

userRoutes.post("/", createUserController.handle);
userRoutes.get("/", getAllUserController.handle)

export { userRoutes };