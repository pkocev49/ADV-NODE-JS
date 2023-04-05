import { Router } from "express";
import ProductController from "../controllers/productController.js";
const productController = new ProductController();
const productRouter = Router();

productRouter.get("/", productController.getProducts);
productRouter.get("/:id", productController.getProductById);
productRouter.post("/search", productController.getProductByName);
productRouter.post("/", productController.addProduct);
productRouter.patch("/:id", productController.addReview);
export default productRouter;
