import { Router } from "express";
import { productsController } from "../controllers/products/products.controller.js";

const router = Router();

router.get('/', productsController.getAllProducts);// no funca

router.get('/:pid', productsController.getProductById);

router.post('/', productsController.addProduct);

router.put('/:pid', productsController.updateProduct);

router.delete('/:pid', productsController.productDelete);


export default router