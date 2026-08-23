import { inject, injectable } from "tsyringe";
import { Request, Response } from "express";
import { IDentalChartOrchestratorService } from "../../Application/interfaces/dentalChartOrchestrator.interface";

@injectable()
export class DentalChartOrchestratorController {

  private readonly _dentalChartOrchestratorService:
    IDentalChartOrchestratorService;

  constructor(
    @inject("IDentalChartOrchestratorService")
    service: IDentalChartOrchestratorService
  ) {
    this._dentalChartOrchestratorService = service;
  }

  // ============================================================
  // GET COMPLETE DENTAL CHART
  // ============================================================

  getById = async (
    req: Request,
    res: Response
  ) => {

    const id = req.params.id as string;

    const result =
      await this._dentalChartOrchestratorService.getById(id);

    if (!result) {
      res.status(404).json({
        message: "Ficha dental no encontrada"
      });

      return;
    }

    res.json(result);
  };

  // ============================================================
  // CREATE COMPLETE DENTAL CHART
  // ============================================================

  create = async (
    req: Request,
    res: Response
  ) => {

    const {
      dentalChart,
      details
    } = req.body;

    const result =
      await this._dentalChartOrchestratorService.create(
        dentalChart,
        details
      );

    res.status(201).json(result);
  };

  // ============================================================
  // UPDATE COMPLETE DENTAL CHART
  // ============================================================

  update = async (
    req: Request,
    res: Response
  ) => {

    const id = req.params.id as string;

    const {
      dentalChart,
      details
    } = req.body;

    const result =
      await this._dentalChartOrchestratorService.update(
        id,
        dentalChart,
        details
      );

    if (!result) {
      res.status(404).json({
        message: "Ficha dental no encontrada"
      });

      return;
    }

    res.json(result);
  };

  // ============================================================
  // DELETE COMPLETE DENTAL CHART
  // ============================================================

  delete = async (
    req: Request,
    res: Response
  ) => {

    const id = req.params.id as string;

    const existing =
      await this._dentalChartOrchestratorService.getById(id);

    if (!existing) {
      res.status(404).json({
        message: "Ficha dental no encontrada"
      });

      return;
    }

    await this._dentalChartOrchestratorService.delete(id);

    res.status(204).send();
  };
}