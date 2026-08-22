import { inject, injectable } from "tsyringe";
import { Request, Response } from "express";
import { IPaymentPlanOrchestratorService } from "../../Application/interfaces/paymentPlanOrchestrator.interface";

@injectable()
export class PaymentPlanOrchestratorController {

  private readonly _paymentPlanOrchestratorService:
    IPaymentPlanOrchestratorService;

  constructor(
    @inject("IPaymentPlanOrchestratorService")
    service: IPaymentPlanOrchestratorService
  ) {
    this._paymentPlanOrchestratorService = service;
  }

  // ============================================================
  // CREATE PAYMENT PLAN
  // ============================================================

  createPaymentPlan = async (
    req: Request,
    res: Response
  ) => {

    const result =
      await this._paymentPlanOrchestratorService
        .createPaymentPlan(req.body);

    res.status(201).json(result);
  };


  // ============================================================
  // REGISTER PAYMENT
  // ============================================================

  registerPayment = async (
    req: Request,
    res: Response
  ) => {

    const result =
      await this._paymentPlanOrchestratorService
        .registerPayment(req.body);

    res.status(201).json(result);
  };

}