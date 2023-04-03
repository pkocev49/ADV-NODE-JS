import { Router } from "express";
import productRouter from "../routes/productRoutes.js";
import cartRouter from "../routes/cartRoutes.js";
const router = Router();
router.get("/", (req, res) => {
  res.send("Server is live.");
});

// Here add the rest of the routes or routers
router.use("/products", productRouter);
router.use("/cart", cartRouter);

export default router;
