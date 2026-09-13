import { inject, injectable } from "tsyringe";
import { Request, Response } from "express";

import {
  ITreatmentPlanOrchestratorService
} from "../../Application/interfaces/treatmentPlanOrchestrator.interface";


@injectable()
export class TreatmentPlanOrchestratorController {

  private readonly _treatmentPlanOrchestrator:
    ITreatmentPlanOrchestratorService;


  constructor(
    @inject("ITreatmentPlanOrchestratorService")
    orchestrator: ITreatmentPlanOrchestratorService
  ) {
    this._treatmentPlanOrchestrator = orchestrator;
  }

  getAll = async (req: Request, res: Response) => {

    try {

      const page =
        Number(req.query.page) || 1;

      const pageSize =
        Number(req.query.pageSize) || 100;


      const result =
        await this._treatmentPlanOrchestrator.getAll(
          page,
          pageSize
        );


      return res.json(result);

    } catch (error) {

      return res.status(400).json({
        message:
          error instanceof Error
            ? error.message
            : "No se pudieron obtener los planes de tratamientos"
      });
    }
  };

  create = async (
    req: Request,
    res: Response
  ) => {

    const {
      details,
      ...treatmentPlanData
    } = req.body;

    try {

      const result =
        await this._treatmentPlanOrchestrator.create(
          treatmentPlanData,
          details
        );


      return res.status(201).json(result);

    } catch (error) {

      return res.status(400).json({
        message:
          error instanceof Error
            ? error.message
            : "No se pudo crear el plan de tratamientos"
      });
    };
  }

  delete = async (req: Request, res: Response) => {

    try {

      const { id } = req.params;


      // Validar que sea un string
      if (typeof id !== "string" || !id.trim()) {

        return res.status(400).json({

          message: "El planId es requerido."

        });
      }

      await this._treatmentPlanOrchestrator.delete(id);


      return res.status(200).json({

        message: "Treatment plan eliminado correctamente."

      });

    } catch (error) {

      console.error(
        "Error deleting treatment plan:",
        error
      );


      return res.status(500).json({

        message: "Error al eliminar el treatment plan."

      });

    }
  }
}