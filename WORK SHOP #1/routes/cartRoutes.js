import { Router } from "express";
import CartController from "../controllers/cartController.js";
const cartControlle = new CartController();
const cartRouter = Router();
cartRouter.get("/", cartControlle.getAllCartItems);
cartRouter.post("/", cartControlle.addToCart);

export default cartRouter;
