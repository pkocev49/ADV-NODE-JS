import { Router } from "express";
import CostumerController from "../controllers/costumerController.js";

const costumerController = new CostumerController();
const costumerRouter = Router();

costumerRouter.get("/", costumerController.getAllCostumers);
costumerRouter.get("/:id", costumerController.getCostumerById);
costumerRouter.post("/", costumerController.addCostumer);
costumerRouter.patch("/:id", costumerController.updateCostumer);
costumerRouter.delete("/:id", costumerController.deleteCostumer);
export default costumerRouter;
