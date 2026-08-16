import { Request, Response } from "express";
import { inject, injectable } from "tsyringe";
import {
  IInvoicePaymentService
} from "../../Application/interfaces/invoicePayment.service.interface";
import {
  AddPaymentToInvoiceDto,
  CreateInvoiceWithPaymentDto
} from "../../Application/dtos/invoicePayment.dto";

@injectable()
export class InvoicePaymentController {

  constructor(
    @inject("IInvoicePaymentService")
    private readonly _invoicePaymentService: IInvoicePaymentService
  ) {}

  // ============================================================
  // CREAR FACTURA + PAGO INICIAL OPCIONAL
  // ============================================================

  async create(
    req: Request,
    res: Response
  ): Promise<Response> {

    try {

      const data: CreateInvoiceWithPaymentDto = req.body;

      const result =
        await this._invoicePaymentService.create(data);

      return res.status(201).json({
        message: result.payment
          ? "Factura y pago creados correctamente"
          : "Factura creada correctamente sin pago inicial",

        invoice: result.invoice,

        payment: result.payment
      });

    } catch (error: any) {

      return res.status(400).json({
        message: error.message
      });
    }
  }


  // ============================================================
  // AGREGAR PAGO A UNA FACTURA EXISTENTE
  // ============================================================

  async addPayment(
    req: Request,
    res: Response
  ): Promise<Response> {

    try {

      const { invoiceId } = req.params;

      if (!invoiceId) {
        return res.status(400).json({
          message: "El invoiceId es obligatorio"
        });
      }

      const data: AddPaymentToInvoiceDto = {
        ...req.body,

        // El ID viene de la URL
        invoiceId
      };

      const result =
        await this._invoicePaymentService.addPayment(data);

      return res.status(201).json({
        message: "Pago registrado correctamente",

        invoice: result.invoice,

        payment: result.payment
      });

    } catch (error: any) {

      return res.status(400).json({
        message: error.message
      });
    }
  }
}