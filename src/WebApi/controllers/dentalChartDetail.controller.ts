import { inject, injectable } from "tsyringe";
import { Request, Response } from "express";
import { IDentalChartDetailService } from './../../Application/interfaces/dentalChartDetail.service.interface';

@injectable()
export class DentalChartDetailController {

  private readonly _dentalChartDetailService: IDentalChartDetailService;

  constructor(@inject("IDentalChartDetailService") service: IDentalChartDetailService) {
    this._dentalChartDetailService = service;
  }

  getAll= async (req: Request, res: Response)=> {
    const page = Number(req.query.page) || 1;
    const pageSize = Number(req.query.pageSize) || 100;
    const result = await this._dentalChartDetailService.findAll(page, pageSize);
    res.json(result);
  }

  create= async (req: Request, res: Response)=> {
    const result = await this._dentalChartDetailService.create(req.body);
    res.status(201).json(result);
  }

  getById= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    const result = await this._dentalChartDetailService.findById(id);
    res.json(result);
  }

  update= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    const result = await this._dentalChartDetailService.update(id, req.body);
    res.json(result);
  }

  delete= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    await this._dentalChartDetailService.delete(id);
    res.status(204).send();
  }
}
