import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createProduct = async (name:any, description:any, price:any, image:any) => {
    const product = await prisma.product.create({ 
        data: {
            name,
            description,
            price,
            image
        }
    })

    return product;
}

export const getAllProduct = async () => {
    const products = await prisma.product.findMany()

    return products;
}

export const deleteProduct = async (id:any) => {
    await prisma.product.delete({
        where:{
            id: id
        }
    })

}