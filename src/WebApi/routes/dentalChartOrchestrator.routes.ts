import express from "express";
import { container } from "tsyringe";
import { DentalChartOrchestratorController } from "../controllers/dentalChartOrchestrator.controller";

const router = express.Router();

const controller =
  container.resolve(
    DentalChartOrchestratorController
  );

// ============================================================
// CREATE COMPLETE DENTAL CHART
// ============================================================

router.post(
  "/",
  controller.create
);

// ============================================================
// GET COMPLETE DENTAL CHART
// ============================================================

router.get(
  "/:id",
  controller.getById
);

// ============================================================
// UPDATE COMPLETE DENTAL CHART
// ============================================================

router.put(
  "/:id",
  controller.update
);

// ============================================================
// DELETE COMPLETE DENTAL CHART
// ============================================================

router.delete(
  "/:id",
  controller.delete
);

export default router;