import express from "express";

import { container } from "tsyringe";

import {
  TreatmentPlanOrchestratorController
} from "../controllers/treatmentPlanOrchestrator.controller";


const router = express.Router();

const controller =
  container.resolve(
    TreatmentPlanOrchestratorController
  );


router.post(
  "/",
  controller.create
);


export default router;