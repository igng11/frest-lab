import { Router } from "express";
import { HomeController } from "../controllers/home.controller.js";

const router = Router();

//esta ruta trae los productos que luego se renderizan en el fetch de /home.hbs
router.get("/getProductsMongo", HomeController.getHomeProducts);
router.get("/home", HomeController.getStartProducts);

export {router as homeRouters}