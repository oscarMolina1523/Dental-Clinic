import express from "express";
import { container } from "tsyringe";
import { PaymentPlanController } from "../controllers/paymentPlan.controller";

const router = express.Router();
const controller = container.resolve(PaymentPlanController);

router.post("/", controller.create);
router.get("/", controller.getAll);
router.get("/:id", controller.getById);
router.put("/:id", controller.update);
router.delete("/:id", controller.delete);

// Activar plan
router.post(
  "/:id/activate",
  controller.activate
);


// Completar plan
router.post(
  "/:id/complete",
  controller.complete
);


// Cancelar plan
router.post(
  "/:id/cancel",
  controller.cancel
);

// Obtener monto de cada cuota
router.get(
  "/:id/installment-amount",
  controller.getInstallmentAmount
);


export default router;
