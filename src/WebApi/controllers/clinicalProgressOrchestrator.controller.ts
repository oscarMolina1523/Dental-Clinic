import { Request, Response } from "express";
import { container } from "tsyringe";

import {
  IClinicalProgressOrchestratorService,
} from "../../Application/interfaces/clinicalProgressOrchestrator.interface";

export const createClinicalProgressOrchestrator =
  async (
    req: Request,
    res: Response
  ) => {

    try {

      const service =
        container.resolve<IClinicalProgressOrchestratorService>(
          "IClinicalProgressOrchestratorService"
        );

      const result =
        await service.create(req.body);

      return res.status(201).json(result);

    } catch (error) {

      return res.status(500).json({
        message:
          error instanceof Error
            ? error.message
            : "No se pudo crear el progreso clínico."
      });
    }
  };


export const getAllClinicalProgressOrchestrator =
  async (
    req: Request,
    res: Response
  ) => {

    try {

      const service =
        container.resolve<IClinicalProgressOrchestratorService>(
          "IClinicalProgressOrchestratorService"
        );

      const result =
        await service.getAll();

      return res.status(200).json(result);

    } catch (error) {

      return res.status(500).json({
        message:
          error instanceof Error
            ? error.message
            : "No se pudieron obtener los progresos clínicos."
      });
    }
  };

export const getClinicalProgressOrchestratorByPatientId =
  async (
    req: Request,
    res: Response
  ) => {

    try {

      const patientId = req.params.patientId;

      if (typeof patientId !== "string") {
        return res.status(400).json({
          message: "El patientId no es válido."
        });
      }

      const service =
        container.resolve<IClinicalProgressOrchestratorService>(
          "IClinicalProgressOrchestratorService"
        );

      const result =
        await service.getByPatientId(
          patientId
        );

      return res.status(200).json(result);

    } catch (error) {

      return res.status(500).json({
        message:
          error instanceof Error
            ? error.message
            : "No se pudieron obtener los progresos clínicos del paciente."
      });
    }
  };