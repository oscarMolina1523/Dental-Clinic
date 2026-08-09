import { inject, injectable } from "tsyringe";
import { Request, Response } from "express";
import { ITreatmentPlanDetailService } from './../../Application/interfaces/treatmentPlanDetail.service.interface';

@injectable()
export class TreatmentPlanDetailController {

  private readonly _treatmentPlanDetailService: ITreatmentPlanDetailService;

  constructor(@inject("ITreatmentPlanDetailService") service: ITreatmentPlanDetailService) {
    this._treatmentPlanDetailService = service;
  }

  getAll= async (req: Request, res: Response)=> {
    const page = Number(req.query.page) || 1;
    const pageSize = Number(req.query.pageSize) || 100;
    const result = await this._treatmentPlanDetailService.findAll(page, pageSize);
    res.json(result);
  }

  create= async (req: Request, res: Response)=> {
    const result = await this._treatmentPlanDetailService.create(req.body);
    res.status(201).json(result);
  }

  getById= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    const result = await this._treatmentPlanDetailService.findById(id);
    res.json(result);
  }

  update= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    const result = await this._treatmentPlanDetailService.update(id, req.body);
    res.json(result);
  }

  delete= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    await this._treatmentPlanDetailService.delete(id);
    res.status(204).send();
  }
}
