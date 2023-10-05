import { Router } from "express";

const router = Router();

router.get('/', renderBodyHome)

router.get('/realtimeproducts', renderRealTimeProducts)

router.get('/login', renderLogin)

router.get('/singup', renderSingup)

router.get('/adminHome', renderAdminHome)

router.get('/clientHome', renderClientHome)

export default router