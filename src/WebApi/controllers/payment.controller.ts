import { inject, injectable } from "tsyringe";
import { Request, Response } from "express";
import { IPaymentService } from './../../Application/interfaces/payment.service.interface';

@injectable()
export class PaymentController {

  private readonly _paymentService: IPaymentService;

  constructor(@inject("IPaymentService") service: IPaymentService) {
    this._paymentService = service;
  }

  getAll= async (req: Request, res: Response)=> {
    const page = Number(req.query.page) || 1;
    const pageSize = Number(req.query.pageSize) || 100;
    const result = await this._paymentService.findAll(page, pageSize);
    res.json(result);
  }

  create= async (req: Request, res: Response)=> {
    const result = await this._paymentService.create(req.body);
    res.status(201).json(result);
  }

  getById= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    const result = await this._paymentService.findById(id);
    res.json(result);
  }

  update= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    const result = await this._paymentService.update(id, req.body);
    res.json(result);
  }

  delete= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    await this._paymentService.delete(id);
    res.status(204).send();
  }
}
