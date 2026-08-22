import express from "express";
import { container } from "tsyringe";
import { InventoryOrchestratorController } from "../controllers/InventoryOrchestrator.controller";

const router = express.Router();

const controller =
  container.resolve(InventoryOrchestratorController);


// ============================================================
// LOT BUSINESS OPERATIONS
// ============================================================

// Crear lote
router.post(
  "/lotes",
  controller.createLote
);


// Aumentar existencia de un lote
router.post(
  "/lotes/:id/increase",
  controller.increaseLoteStock
);


// Disminuir existencia de un lote
router.post(
  "/lotes/:id/decrease",
  controller.decreaseLoteStock
);


// Retirar lote vencido
router.post(
  "/lotes/:id/expire",
  controller.expireLote
);


export default router;