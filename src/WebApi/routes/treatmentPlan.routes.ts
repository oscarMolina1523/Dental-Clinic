import express from "express";
import { container } from "tsyringe";
import { TreatmentPlanController } from "../controllers/treatmentPlan.controller";

const router = express.Router();
const controller = container.resolve(TreatmentPlanController);

router.post("/", controller.create);
router.get("/", controller.getAll);
router.get("/:id", controller.getById);
router.put("/:id", controller.update);
router.delete("/:id", controller.delete);

router.post("/:id/propose", controller.propose);
router.post("/:id/accept", controller.accept);
router.post("/:id/start", controller.start);
router.post("/:id/complete", controller.complete);
router.post("/:id/cancel", controller.cancel);

router.put("/:id/subtotal", controller.setSubtotal);

router.put("/:id/discount", controller.applyDiscount);
router.delete("/:id/discount", controller.removeDiscount);

export default router;
