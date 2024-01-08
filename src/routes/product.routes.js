import { Router } from "express";
import { ProductsController } from "../controllers/products.controller.js";

const router = Router();

// Ruta PUT /api/products/:pid
// Actualiza un producto por su ID
router.post("/getAll", ProductsController.getProducts);
router.post("/create", ProductsController.createProduct);

export { router as productsRouters }; //aca se exporta la ruta a app.js