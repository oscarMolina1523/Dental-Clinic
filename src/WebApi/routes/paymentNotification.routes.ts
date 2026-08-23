import express from "express";
import { container } from "tsyringe";
import { PaymentNotificationController } from "../controllers/paymentNotification.controller";

const router = express.Router();
const controller = container.resolve(PaymentNotificationController);

router.post("/", controller.create);
router.get("/", controller.getAll);
router.get("/:id", controller.getById);
router.put("/:id", controller.update);
router.delete("/:id", controller.delete);

// ============================================================
// UPDATE STATUS
// ============================================================

router.patch(
  "/:id/status",
  controller.updateStatus
);

// ============================================================
// RESCHEDULE
// ============================================================

router.patch(
  "/:id/reschedule",
  controller.reschedule
);

// ============================================================
// MARK AS SENT
// ============================================================

router.patch(
  "/:id/send",
  controller.markAsSent
);

// ============================================================
// MARK AS FAILED
// ============================================================

router.patch(
  "/:id/fail",
  controller.markAsFailed
);

// ============================================================
// CANCEL
// ============================================================

router.patch(
  "/:id/cancel",
  controller.cancel
);

export default router;
