import { inject, injectable } from "tsyringe";
import { Request, Response } from "express";
import { IDentalChartDetailService } from './../../Application/interfaces/dentalChartDetail.service.interface';
import { DentalChartDetailsStatus } from "../../Domain/types/dentalChartDetailsStatus.enum";

@injectable()
export class DentalChartDetailController {

  private readonly _dentalChartDetailService: IDentalChartDetailService;

  constructor(@inject("IDentalChartDetailService") service: IDentalChartDetailService) {
    this._dentalChartDetailService = service;
  }

  getAll = async (req: Request, res: Response) => {
    const page = Number(req.query.page) || 1;
    const pageSize = Number(req.query.pageSize) || 100;
    const result = await this._dentalChartDetailService.findAll(page, pageSize);
    res.json(result);
  }

  create = async (req: Request, res: Response) => {
    const result = await this._dentalChartDetailService.create(req.body);
    res.status(201).json(result);
  }

  getById = async (req: Request, res: Response) => {
    const id = req.params.id as string;
    const result = await this._dentalChartDetailService.findById(id);
    res.json(result);
  }

  update = async (req: Request, res: Response) => {
    const id = req.params.id as string;
    const result = await this._dentalChartDetailService.update(id, req.body);
    res.json(result);
  }

  // ============================================================
  // UPDATE STATUS
  // ============================================================

  updateStatus = async (
    req: Request,
    res: Response
  ) => {

    const id =
      req.params.id as string;

    const toothStatus =
      req.body.toothStatus as DentalChartDetailsStatus;

    const result =
      await this._dentalChartDetailService.updateStatus(
        id,
        toothStatus
      );

    res.json(result);
  };

  // ============================================================
  // UPDATE NOTES
  // ============================================================

  updateNotes = async (
    req: Request,
    res: Response
  ) => {

    const id =
      req.params.id as string;

    const notes =
      req.body.notes as string;

    const result =
      await this._dentalChartDetailService.updateNotes(
        id,
        notes
      );

    res.json(result);
  };

  delete = async (req: Request, res: Response) => {
    const id = req.params.id as string;
    await this._dentalChartDetailService.delete(id);
    res.status(204).send();
  }
}
