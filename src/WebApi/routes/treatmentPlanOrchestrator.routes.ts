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


  router.get(
  "/",
  controller.getAll
);


router.post(
  "/",
  controller.create
);

router.delete(
  "/:id",
  controller.delete
);


export default router;