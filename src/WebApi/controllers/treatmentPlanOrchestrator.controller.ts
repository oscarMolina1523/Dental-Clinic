import { inject, injectable } from "tsyringe";
import { Request, Response } from "express";

import {
  ITreatmentPlanOrchestratorService
} from "../../Application/interfaces/treatmentPLanOrchestrator.interface";


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