import { createProduct, getAllProduct, deleteProduct } from "../../../../prisma/product"

export default async function Handler (req:any, res:any) {
    try {

        switch(req.method) {
            case 'POST': {
                const {name, description, price, image} = req.body;

                const newProduct = await createProduct(name, description, price, image);

                return res.status(201).json(newProduct);
            }

            case 'GET': {
                const Products = await getAllProduct();

                return res.status(200).json(Products);
            }

            case 'DELETE': {
                const {id} = req.query;

                await deleteProduct(id);

                return res.status(200).json({message:'Produto deletado com sucesso!'});
            }
        }
        
    } catch (error) {
        
    }
}