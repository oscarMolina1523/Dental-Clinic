import { inject, injectable } from "tsyringe";
import { Request, Response } from "express";
import { IPaymentPlanService } from './../../Application/interfaces/paymentPlan.service.interface';

@injectable()
export class PaymentPlanController {

  private readonly _paymentPlanService: IPaymentPlanService;

  constructor(@inject("IPaymentPlanService") service: IPaymentPlanService) {
    this._paymentPlanService = service;
  }

  getAll= async (req: Request, res: Response)=> {
    const page = Number(req.query.page) || 1;
    const pageSize = Number(req.query.pageSize) || 100;
    const result = await this._paymentPlanService.findAll(page, pageSize);
    res.json(result);
  }

  create= async (req: Request, res: Response)=> {
    const result = await this._paymentPlanService.create(req.body);
    res.status(201).json(result);
  }

  getById= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    const result = await this._paymentPlanService.findById(id);
    res.json(result);
  }

  update= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    const result = await this._paymentPlanService.update(id, req.body);
    res.json(result);
  }

  delete= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    await this._paymentPlanService.delete(id);
    res.status(204).send();
  }
}
