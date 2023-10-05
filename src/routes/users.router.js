import { Router } from "express";
//importar funciones desde controllers

const router = Router();

router.post('/singup', localSingup)

//crear ruta de la estrategia de passport-gitHub


export default router