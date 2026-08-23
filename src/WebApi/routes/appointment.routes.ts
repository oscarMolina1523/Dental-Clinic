import express from "express";
import { container } from "tsyringe";
import { AppointmentController } from "../controllers/appointment.controller";

const router = express.Router();
const controller = container.resolve(AppointmentController);

router.post("/", controller.create);
router.get("/", controller.getAll);
router.get("/:id", controller.getById);
router.put("/:id", controller.update);
router.delete("/:id", controller.delete);

// ============================================================
// APPOINTMENT STATE
// ============================================================

router.post(
    "/:id/confirm",
    controller.confirm
);

router.post(
    "/:id/start",
    controller.start
);

router.post(
    "/:id/complete",
    controller.complete
);

router.post(
    "/:id/cancel",
    controller.cancel
);

router.post(
    "/:id/no-show",
    controller.markAsNoShow
);

// ============================================================
// REMINDER
// ============================================================

router.post(
    "/:id/reminder-sent",
    controller.markReminderAsSent
);

// ============================================================
// INFORMATION
// ============================================================

router.get(
    "/:id/duration",
    controller.getDurationInMinutes
);

router.get(
    "/:id/cancelled",
    controller.isCancelled
);

router.get(
    "/:id/completed",
    controller.isCompleted
);

router.get(
    "/:id/pending",
    controller.isPending
);


export default router;
