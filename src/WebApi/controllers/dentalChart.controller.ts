import { inject, injectable } from "tsyringe";
import { Request, Response } from "express";
import { IDentalChartService } from './../../Application/interfaces/dentalChart.service.interface';

@injectable()
export class DentalChartController {

  private readonly _dentalChartService: IDentalChartService;

  constructor(@inject("IDentalChartService") service: IDentalChartService) {
    this._dentalChartService = service;
  }

  getAll = async (req: Request, res: Response) => {
    const page = Number(req.query.page) || 1;
    const pageSize = Number(req.query.pageSize) || 100;
    const result = await this._dentalChartService.findAll(page, pageSize);
    res.json(result);
  }

  create = async (req: Request, res: Response) => {
    const result = await this._dentalChartService.create(req.body);
    res.status(201).json(result);
  }

  getById = async (req: Request, res: Response) => {
    const id = req.params.id as string;
    const result = await this._dentalChartService.findById(id);
    res.json(result);
  }

  update = async (req: Request, res: Response) => {
    const id = req.params.id as string;
    const result = await this._dentalChartService.update(id, req.body);
    res.json(result);
  }

  updateObservations = async (
    req: Request,
    res: Response
  ) => {

    const id = req.params.id as string;

    const { observations } = req.body;

    const result =
      await this._dentalChartService.updateObservations(
        id,
        observations
      );

    res.json(result);
  };

  delete = async (req: Request, res: Response) => {
    const id = req.params.id as string;
    await this._dentalChartService.delete(id);
    res.status(204).send();
  }
}
