import express from "express";

import { container } from "tsyringe";

import {
  MedicalPrescriptionOrchestratorController
} from "../controllers/medicalPrescriptionOrchestrator.controller";


const router = express.Router();


const controller =
  container.resolve(
    MedicalPrescriptionOrchestratorController
  );


// ============================================================
// MEDICAL PRESCRIPTION BUSINESS OPERATIONS
// ============================================================


// Obtener receta médica completa

router.get(
  "/:id",
  controller.getById
);


// Crear receta médica completa

router.post(
  "/",
  controller.create
);


// Actualizar receta médica completa

router.put(
  "/:id",
  controller.update
);


// Eliminar receta médica completa

router.delete(
  "/:id",
  controller.delete
);


export default router;