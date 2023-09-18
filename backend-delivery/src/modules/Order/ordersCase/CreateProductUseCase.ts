import { AppError } from "../../../errors/AppError";
import { prisma } from "../../../prisma/client";
import { CreateOrderDTO } from "../dtos/CreateOrderDTO";

export class CreateOrderUseCase {
 async execute({ userId, productId, totalPrice, nameUser, addressUser }: CreateOrderDTO): Promise<void> {
  const orderExists = await prisma.order.findUnique({
  where: {
    id: productId,
  }
  });

  if (!orderExists) {
    throw new AppError("Order does not exists!")
  }

  const orderAlreadyRented = await prisma.order.findFirst({
   where: {
    productId
   }
  });

  if(orderAlreadyRented) {
    throw new AppError("Order already rented!")
  }

  const userExists = await prisma.user.findUnique({
    where: {
     id: userId
    }
  });

  if (!userExists) {
    throw new AppError("User does not exists!")
  }

  await prisma.order.create({
    data: {
     productId,
     userId,
     totalPrice,
     nameUser,
     addressUser,
    }
  })
 }
}