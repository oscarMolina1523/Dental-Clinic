import express from "express";
import { container } from "tsyringe";
import { InvoiceController } from "../controllers/invoice.controller";

const router = express.Router();
const controller = container.resolve(InvoiceController);

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

router.post(
    "/:id/payment/remove",
    controller.removePayment
);


// ============================================================
// TOTAL
// ============================================================

router.put(
    "/:id/total",
    controller.changeTotal
);


// ============================================================
// STATUS
// ============================================================

router.post(
    "/:id/cancel",
    controller.cancel
);

export default router;
