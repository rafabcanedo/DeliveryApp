import { User } from "@prisma/client";
import { prisma } from "../../../../prisma/client";

export class GetAllUserUseCase {
 async execute(): Promise<User[]> {
  const users = await prisma.user.findMany({
   include: {
    product_rent: {
     select: {
      product: {
       select: {
        name: true,
        price: true,
       },
      },
     },
    },
   },
  });

  return users;
 }
}