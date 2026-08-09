import { inject, injectable } from "tsyringe";
import { Request, Response } from "express";
import { ITreatmentPlanService } from './../../Application/interfaces/treatmentPlan.service.interface';

@injectable()
export class TreatmentPlanController {

  private readonly _treatmentPlanService: ITreatmentPlanService;

  constructor(@inject("ITreatmentPlanService") service: ITreatmentPlanService) {
    this._treatmentPlanService = service;
  }

  getAll= async (req: Request, res: Response)=> {
    const page = Number(req.query.page) || 1;
    const pageSize = Number(req.query.pageSize) || 100;
    const result = await this._treatmentPlanService.findAll(page, pageSize);
    res.json(result);
  }

  create= async (req: Request, res: Response)=> {
    const result = await this._treatmentPlanService.create(req.body);
    res.status(201).json(result);
  }

  getById= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    const result = await this._treatmentPlanService.findById(id);
    res.json(result);
  }

  update= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    const result = await this._treatmentPlanService.update(id, req.body);
    res.json(result);
  }

  delete= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    await this._treatmentPlanService.delete(id);
    res.status(204).send();
  }
}
