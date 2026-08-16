import { Router } from "express";
import { container } from "tsyringe";
import { InvoicePaymentController } from "../controllers/invoicePayment.controller";

const router = Router();

const controller =
  container.resolve(InvoicePaymentController);


// Crear factura.
// Puede venir con pago inicial o sin pago.
router.post(
  "/",
  controller.create.bind(controller)
);


// Agregar un nuevo pago a una factura existente.
router.post(
  "/:invoiceId/payments",
  controller.addPayment.bind(controller)
);

export default router;