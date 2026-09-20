import express from "express";
import { container } from "tsyringe";

import {
  PaymentPlanOrchestratorController
} from "../controllers/paymentPlanOrchestrator.controller";

const router = express.Router();

const controller =
  container.resolve(
    PaymentPlanOrchestratorController
  );

// ============================================================
// PAYMENT PLAN
// ============================================================

// Obtiene el plan, factura, cuotas, pagos y resumen
router.get(
  "/:id",
  controller.getPaymentPlanById
);

// Crea el plan y todas sus cuotas
router.post(
  "/",
  controller.createPaymentPlan
);

// ============================================================
// PAYMENT
// ============================================================

// Registra un pago sobre una cuota
router.post(
  "/payment",
  controller.registerPayment
);

router.delete(
  "/cancel/:invoiceId",
  controller.cancelPaymentPlan
);

export default router;