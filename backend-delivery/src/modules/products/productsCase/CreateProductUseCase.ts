import { Product } from "@prisma/client";
import { prisma } from "../../../prisma/client";
import { AppError } from "../../../errors/AppError";
import { CreateProductsDTO } from "../dtos/CreateProductsDTO";

export class CreateProductUseCase {
 async execute({ name, image, description, price, stock }: CreateProductsDTO): Promise<Product> {
  const productAlreadyExists = await prisma.product.findUnique({
   where: {
    name
   }
  });

  if (productAlreadyExists) {
   throw new AppError("Product already exists!")
  }

  const product = await prisma.product.create({
   data: {
    name,
    image,
    description,
    price,
    stock
   }
  });

  return product;
 }
}