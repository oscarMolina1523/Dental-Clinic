import { inject, injectable } from "tsyringe";
import { Request, Response } from "express";
import { IDiseaseService } from './../../Application/interfaces/disease.service.interface';

@injectable()
export class DiseaseController {

  private readonly _diseaseService: IDiseaseService;

  constructor(@inject("IDiseaseService") service: IDiseaseService) {
    this._diseaseService = service;
  }

  getAll= async (req: Request, res: Response)=> {
    const page = Number(req.query.page) || 1;
    const pageSize = Number(req.query.pageSize) || 100;
    const result = await this._diseaseService.findAll(page, pageSize);
    res.json(result);
  }

  create= async (req: Request, res: Response)=> {
    const result = await this._diseaseService.create(req.body);
    res.status(201).json(result);
  }

  getById= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    const result = await this._diseaseService.findById(id);
    res.json(result);
  }

  update= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    const result = await this._diseaseService.update(id, req.body);
    res.json(result);
  }

  delete= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    await this._diseaseService.delete(id);
    res.status(204).send();
  }
}
