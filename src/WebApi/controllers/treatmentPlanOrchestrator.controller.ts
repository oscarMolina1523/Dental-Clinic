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


    const result =
      await this._treatmentPlanOrchestrator.create(
        treatmentPlanData,
        details
      );


    res.status(201).json(result);
  };
}