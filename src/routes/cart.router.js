import { Router } from "express";
//falta importar las funciones del controller

const router = Router()

router.post('/', CreateCart)

router.post('/:cid', addProduct)

router.delete('/:cid/products/:pid', productDelete)

router.put('/:cid', getCartById)

router.put('/:cid/products/:pid', updateProduct)

router.delete('/:cid', cartDeleted)

export default router