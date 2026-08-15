import express from "express";
import { container } from "tsyringe";
import { InventoryController } from "../controllers/inventory.controller";

const router = express.Router();
const controller = container.resolve(InventoryController);

//CRUD operations
router.post("/", controller.create);
router.get("/", controller.getAll);
router.get("/:id", controller.getById);
router.put("/:id", controller.update);
router.delete("/:id", controller.delete);

// Business operations
router.post("/:id/increase", controller.increaseStock);
router.post("/:id/decrease", controller.decreaseStock);

export default router;
