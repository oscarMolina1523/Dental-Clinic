import express from "express";
import {
  createClinicalProgressOrchestrator,
  getAllClinicalProgressOrchestrator,
  getClinicalProgressOrchestratorByPatientId,
} from "../controllers/clinicalProgressOrchestrator.controller";

const router = express.Router();

router.post(
  "/",
  createClinicalProgressOrchestrator
);

router.get(
  "/",
  getAllClinicalProgressOrchestrator
);

router.get(
  "/patient/:patientId",
  getClinicalProgressOrchestratorByPatientId
);

export default router;