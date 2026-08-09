import { inject, injectable } from "tsyringe";
import { Request, Response } from "express";
import { IDateService } from './../../Application/interfaces/date.service.interface';

@injectable()
export class DateController {

  private readonly _dateService: IDateService;

  constructor(@inject("IDateService") service: IDateService) {
    this._dateService = service;
  }

  getAll= async (req: Request, res: Response)=> {
    const page = Number(req.query.page) || 1;
    const pageSize = Number(req.query.pageSize) || 100;
    const result = await this._dateService.findAll(page, pageSize);
    res.json(result);
  }

  create= async (req: Request, res: Response)=> {
    const result = await this._dateService.create(req.body);
    res.status(201).json(result);
  }

  getById= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    const result = await this._dateService.findById(id);
    res.json(result);
  }

  update= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    const result = await this._dateService.update(id, req.body);
    res.json(result);
  }

  delete= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    await this._dateService.delete(id);
    res.status(204).send();
  }
}
