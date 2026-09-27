import express from "express";
import {
  createClinicalProgressOrchestrator,
} from "../controllers/clinicalProgressOrchestrator.controller";

const router = express.Router();

router.post(
  "/",
  createClinicalProgressOrchestrator
);

export default router;