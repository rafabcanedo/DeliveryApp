import { User } from "@prisma/client";
import { prisma } from "../../../prisma/client";
import { CreateUserDTO } from "../dtos/CreateUserDTO";
import { AppError } from "../../../errors/AppError";

export class CreateUserUseCase {
 async execute({ name, email, password, password_confirm }: CreateUserDTO): Promise<User> {
  const userAlreadyExists = await prisma.user.findUnique({
   where: {
    email
   }
  });

  if (userAlreadyExists) {
   throw new AppError("User already exists!")
  }

  const user = await prisma.user.create({
   data: {
    name,
    email,
    password,
    password_confirm
   }
  });

  return user;
 }
}