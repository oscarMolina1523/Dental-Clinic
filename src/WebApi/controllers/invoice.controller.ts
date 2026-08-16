import { inject, injectable } from "tsyringe";
import { Request, Response } from "express";
import { IInvoiceService } from './../../Application/interfaces/invoice.service.interface';

@injectable()
export class InvoiceController {

  private readonly _invoiceService: IInvoiceService;

  constructor(@inject("IInvoiceService") service: IInvoiceService) {
    this._invoiceService = service;
  }

  getAll = async (req: Request, res: Response) => {
    const page = Number(req.query.page) || 1;
    const pageSize = Number(req.query.pageSize) || 100;
    const result = await this._invoiceService.findAll(page, pageSize);
    res.json(result);
  }

  create = async (req: Request, res: Response) => {
    const result = await this._invoiceService.create(req.body);
    res.status(201).json(result);
  }

  getById = async (req: Request, res: Response) => {
    const id = req.params.id as string;
    const result = await this._invoiceService.findById(id);
    res.json(result);
  }

  update = async (req: Request, res: Response) => {
    const id = req.params.id as string;
    const result = await this._invoiceService.update(id, req.body);
    res.json(result);
  }

  delete = async (req: Request, res: Response) => {
    const id = req.params.id as string;
    await this._invoiceService.delete(id);
    res.status(204).send();
  }

  // ============================================================
  // PAYMENT
  // ============================================================

  addPayment = async (
    req: Request,
    res: Response
  ) => {

    const id =
      req.params.id as string;

    const amount =
      Number(req.body.amount);

    const result =
      await this._invoiceService.addPayment(
        id,
        amount
      );

    res.json(result);
  };


  removePayment = async (
    req: Request,
    res: Response
  ) => {

    const id =
      req.params.id as string;

    const amount =
      Number(req.body.amount);

    const result =
      await this._invoiceService.removePayment(
        id,
        amount
      );

    res.json(result);
  };


  // ============================================================
  // TOTAL
  // ============================================================

  changeTotal = async (
    req: Request,
    res: Response
  ) => {

    const id =
      req.params.id as string;

    const amount =
      Number(req.body.amount);

    const result =
      await this._invoiceService.changeTotal(
        id,
        amount
      );

    res.json(result);
  };


  // ============================================================
  // STATUS
  // ============================================================

  cancel = async (
    req: Request,
    res: Response
  ) => {

    const id =
      req.params.id as string;

    const result =
      await this._invoiceService.cancel(id);

    res.json(result);
  };
}
