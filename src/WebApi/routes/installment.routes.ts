import express from "express";
import { container } from "tsyringe";
import { InstallmentController } from "../controllers/installment.controller";

const router = express.Router();
const controller = container.resolve(InstallmentController);

router.post("/", controller.create);
router.get("/", controller.getAll);
router.get("/:id", controller.getById);
router.put("/:id", controller.update);
router.delete("/:id", controller.delete);

// ============================================================
// PAYMENT
// ============================================================

router.post(
  "/:id/payment",
  controller.addPayment
);

// ============================================================
// LATE FEE
// ============================================================

router.post(
  "/:id/late-fee",
  controller.addLateFee
);

// ============================================================
// STATUS
// ============================================================

router.post(
  "/:id/overdue",
  controller.markAsOverdue
);

router.post(
  "/:id/cancel",
  controller.cancel
);

// ============================================================
// CALCULATIONS
// ============================================================

router.get(
  "/:id/total-amount",
  controller.getTotalAmount
);

router.get(
  "/:id/pending-amount",
  controller.getPendingAmount
);

router.get(
  "/:id/is-paid",
  controller.isPaid
);

export default router;
