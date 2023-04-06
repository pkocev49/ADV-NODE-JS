import { Router } from "express";
import productRouter from "../routes/productsRoutes.js";
import orderRouter from "../routes/ordersRoutes.js";
import costumerRouter from "../routes/costumerRoutes.js";
const router = Router();

router.get("/", (req, res) => {
  console.log("Server is live");
});
router.use("/products", productRouter);
router.use("/orders", orderRouter);
router.use("/costumers", costumerRouter);
export default router;
