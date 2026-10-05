import express from "express";

import { container } from "tsyringe";

import {
  AppointmentOrchestratorController
} from "../controllers/appointmentOrchestrator.controller";


const router = express.Router();


const controller =
  container.resolve(
    AppointmentOrchestratorController
  );


// ============================================================
// APPOINTMENT BUSINESS OPERATIONS
// ============================================================


// GET ALL
router.get(
  "/",
  controller.getAll
);


// GET APPOINTMENT COMPLETE
router.get(
  "/:id",
  controller.getById
);


// CREATE APPOINTMENT COMPLETE
router.post(
  "/",
  controller.create
);


// UPDATE APPOINTMENT COMPLETE
router.put(
  "/:id",
  controller.update
);


// DELETE APPOINTMENT COMPLETE
router.delete(
  "/:id",
  controller.delete
);


export default router;