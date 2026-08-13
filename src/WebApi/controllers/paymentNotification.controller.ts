import { inject, injectable } from "tsyringe";
import { Request, Response } from "express";
import { IPaymentNotificationService } from './../../Application/interfaces/paymentNotification.service.interface';

@injectable()
export class PaymentNotificationController {

  private readonly _paymentNotificationService: IPaymentNotificationService;

  constructor(@inject("IPaymentNotificationService") service: IPaymentNotificationService) {
    this._paymentNotificationService = service;
  }

  getAll= async (req: Request, res: Response)=> {
    const page = Number(req.query.page) || 1;
    const pageSize = Number(req.query.pageSize) || 100;
    const result = await this._paymentNotificationService.findAll(page, pageSize);
    res.json(result);
  }

  create= async (req: Request, res: Response)=> {
    const result = await this._paymentNotificationService.create(req.body);
    res.status(201).json(result);
  }

  getById= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    const result = await this._paymentNotificationService.findById(id);
    res.json(result);
  }

  update= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    const result = await this._paymentNotificationService.update(id, req.body);
    res.json(result);
  }

  delete= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    await this._paymentNotificationService.delete(id);
    res.status(204).send();
  }
}
