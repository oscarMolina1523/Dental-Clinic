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
  // GET PAYMENT PLAN BY ID
  // ============================================================

  getPaymentPlanById = async (
    req: Request,
    res: Response
  ) => {

    const { id } = req.params;

    if (!id || Array.isArray(id)) {
      return res.status(400).json({
        message: "El ID del plan de pago es requerido"
      });
    }

    try{

      const result =
        await this._paymentPlanOrchestratorService
          .getPaymentPlanById(id);
  
      return res.status(200).json(result);

    } catch (error) {
      return res.status(400).json({
        message:
          error instanceof Error
            ? error.message
            : "No se pudo obtener el detalle de este plan de pago"
      });
    }
  };

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

    try{

      const result =
        await this._paymentPlanOrchestratorService
          .registerPayment(req.body);
  
      return res.status(201).json(result);
    
    }catch (error) {
      return res.status(400).json({
        message:
          error instanceof Error
            ? error.message
            : "No se pudo crear el detalle de este plan de pago"
      });
    }
  };

}