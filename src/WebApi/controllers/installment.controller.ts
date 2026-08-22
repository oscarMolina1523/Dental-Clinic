import { inject, injectable } from "tsyringe";
import { Request, Response } from "express";
import { IInstallmentService } from './../../Application/interfaces/installment.service.interface';

@injectable()
export class InstallmentController {

  private readonly _installmentService: IInstallmentService;

  constructor(@inject("IInstallmentService") service: IInstallmentService) {
    this._installmentService = service;
  }

  getAll= async (req: Request, res: Response)=> {
    const page = Number(req.query.page) || 1;
    const pageSize = Number(req.query.pageSize) || 100;
    const result = await this._installmentService.findAll(page, pageSize);
    res.json(result);
  }

  create= async (req: Request, res: Response)=> {
    const result = await this._installmentService.create(req.body);
    res.status(201).json(result);
  }

  getById= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    const result = await this._installmentService.findById(id);
    res.json(result);
  }

  update= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    const result = await this._installmentService.update(id, req.body);
    res.json(result);
  }

  delete= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    await this._installmentService.delete(id);
    res.status(204).send();
  }

  // ============================================================
  // PAYMENT
  // ============================================================

  addPayment = async (
    req: Request,
    res: Response
  ): Promise<Response> => {

    try {

      const id = req.params.id as string;
      const amount = Number(req.body.amount);

      const result =
        await this._installmentService.addPayment(
          id,
          amount
        );

      return res.json({
        message: "Pago registrado correctamente",
        data: result
      });

    } catch (error: any) {

      return res.status(400).json({
        message: error.message
      });
    }
  };

  // ============================================================
  // LATE FEE
  // ============================================================

  addLateFee = async (
    req: Request,
    res: Response
  ): Promise<Response> => {

    try {

      const id = req.params.id as string;
      const amount = Number(req.body.amount);

      const result =
        await this._installmentService.addLateFee(
          id,
          amount
        );

      return res.json({
        message: "Mora agregada correctamente",
        data: result
      });

    } catch (error: any) {

      return res.status(400).json({
        message: error.message
      });
    }
  };

  // ============================================================
  // STATUS
  // ============================================================

  markAsOverdue = async (
    req: Request,
    res: Response
  ): Promise<Response> => {

    try {

      const id = req.params.id as string;

      const result =
        await this._installmentService.markAsOverdue(
          id
        );

      return res.json({
        message: "Cuota marcada como vencida",
        data: result
      });

    } catch (error: any) {

      return res.status(400).json({
        message: error.message
      });
    }
  };

  cancel = async (
    req: Request,
    res: Response
  ): Promise<Response> => {

    try {

      const id = req.params.id as string;

      const result =
        await this._installmentService.cancel(id);

      return res.json({
        message: "Cuota cancelada correctamente",
        data: result
      });

    } catch (error: any) {

      return res.status(400).json({
        message: error.message
      });
    }
  };

  // ============================================================
  // CALCULATIONS
  // ============================================================

  getTotalAmount = async (
    req: Request,
    res: Response
  ): Promise<Response> => {

    const id = req.params.id as string;

    const result =
      await this._installmentService.getTotalAmount(
        id
      );

    return res.json({
      totalAmount: result
    });
  };

  getPendingAmount = async (
    req: Request,
    res: Response
  ): Promise<Response> => {

    const id = req.params.id as string;

    const result =
      await this._installmentService.getPendingAmount(
        id
      );

    return res.json({
      pendingAmount: result
    });
  };

  isPaid = async (
    req: Request,
    res: Response
  ): Promise<Response> => {

    const id = req.params.id as string;

    const result =
      await this._installmentService.isPaid(id);

    return res.json({
      isPaid: result
    });
  };
}
