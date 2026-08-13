import { inject, injectable } from "tsyringe";
import { Request, Response } from "express";
import { IMeasurementUnitService } from './../../Application/interfaces/measurementUnit.service.interface';

@injectable()
export class MeasurementUnitController {

  private readonly _measurementUnitService: IMeasurementUnitService;

  constructor(@inject("IMeasurementUnitService") service: IMeasurementUnitService) {
    this._measurementUnitService = service;
  }

  getAll= async (req: Request, res: Response)=> {
    const page = Number(req.query.page) || 1;
    const pageSize = Number(req.query.pageSize) || 100;
    const result = await this._measurementUnitService.findAll(page, pageSize);
    res.json(result);
  }

  create= async (req: Request, res: Response)=> {
    const result = await this._measurementUnitService.create(req.body);
    res.status(201).json(result);
  }

  getById= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    const result = await this._measurementUnitService.findById(id);
    res.json(result);
  }

  update= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    const result = await this._measurementUnitService.update(id, req.body);
    res.json(result);
  }

  delete= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    await this._measurementUnitService.delete(id);
    res.status(204).send();
  }
}
