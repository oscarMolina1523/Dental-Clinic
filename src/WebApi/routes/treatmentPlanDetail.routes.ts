import express from "express";
import { container } from "tsyringe";
import { TreatmentPlanDetailController } from "../controllers/treatmentPlanDetail.controller";

const router = express.Router();
const controller = container.resolve(TreatmentPlanDetailController);

router.post("/", controller.create);
router.get("/", controller.getAll);
router.get("/:id", controller.getById);
router.put("/:id", controller.update);
router.delete("/:id", controller.delete);

router.put("/:id/quantity", controller.changeQuantity);

router.put("/:id/tooth", controller.changeTooth);

router.post("/:id/start", controller.start);

router.post("/:id/complete", controller.complete);

router.post("/:id/cancel", controller.cancel);

export default router;
