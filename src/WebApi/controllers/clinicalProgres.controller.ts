import { inject, injectable } from "tsyringe";
import { Request, Response } from "express";
import { IClinicalProgresService } from './../../Application/interfaces/clinicalProgres.service.interface';

@injectable()
export class ClinicalProgresController {

  private readonly _clinicalProgresService: IClinicalProgresService;

  constructor(@inject("IClinicalProgresService") service: IClinicalProgresService) {
    this._clinicalProgresService = service;
  }

  getAll= async (req: Request, res: Response)=> {
    const page = Number(req.query.page) || 1;
    const pageSize = Number(req.query.pageSize) || 100;
    const result = await this._clinicalProgresService.findAll(page, pageSize);
    res.json(result);
  }

  create= async (req: Request, res: Response)=> {
    const result = await this._clinicalProgresService.create(req.body);
    res.status(201).json(result);
  }

  getById= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    const result = await this._clinicalProgresService.findById(id);
    res.json(result);
  }

  update= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    const result = await this._clinicalProgresService.update(id, req.body);
    res.json(result);
  }

  delete= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    await this._clinicalProgresService.delete(id);
    res.status(204).send();
  }
}
