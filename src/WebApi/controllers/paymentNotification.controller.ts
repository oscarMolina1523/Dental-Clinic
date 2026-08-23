import { inject, injectable } from "tsyringe";
import { Request, Response } from "express";
import { IPaymentNotificationService } from './../../Application/interfaces/paymentNotification.service.interface';
import { PaymentNotificationStatus } from "../../Domain/types/paymentNotificationStatus.enum";

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

  // ============================================================
  // UPDATE STATUS
  // ============================================================

  updateStatus = async (
    req: Request,
    res: Response
  ) => {

    const id =
      req.params.id as string;

    const status =
      req.body.status as PaymentNotificationStatus;

    const result =
      await this._paymentNotificationService.updateStatus(
        id,
        status
      );

    res.json(result);
  }

  // ============================================================
  // RESCHEDULE
  // ============================================================

  reschedule = async (
    req: Request,
    res: Response
  ) => {

    const id =
      req.params.id as string;

    const sendAt =
      req.body.sendAt;

    const result =
      await this._paymentNotificationService.reschedule(
        id,
        sendAt
      );

    res.json(result);
  }

  // ============================================================
  // MARK AS SENT
  // ============================================================

  markAsSent = async (
    req: Request,
    res: Response
  ) => {

    const id =
      req.params.id as string;

    const result =
      await this._paymentNotificationService.markAsSent(
        id
      );

    res.json(result);
  }

  // ============================================================
  // MARK AS FAILED
  // ============================================================

  markAsFailed = async (
    req: Request,
    res: Response
  ) => {

    const id =
      req.params.id as string;

    const result =
      await this._paymentNotificationService.markAsFailed(
        id
      );

    res.json(result);
  }

  // ============================================================
  // CANCEL
  // ============================================================

  cancel = async (
    req: Request,
    res: Response
  ) => {

    const id =
      req.params.id as string;

    const result =
      await this._paymentNotificationService.cancel(
        id
      );

    res.json(result);
  }
}
