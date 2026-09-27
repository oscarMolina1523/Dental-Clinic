import express from "express";
import {
  createClinicalProgressOrchestrator,
  getAllClinicalProgressOrchestrator,
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

export default router;