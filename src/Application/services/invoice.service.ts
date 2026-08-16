import { inject, injectable } from "tsyringe";
import { IInvoiceService } from "../interfaces/invoice.service.interface";
import { IInvoiceRepository } from "../../Domain/repositories/invoiceRepository.interface";
import { InvoiceDto } from "../dtos/invoice.dto";
import Invoice from "../../Domain/entities/invoice";
import { generateId } from "../../shared/utils/generateId";
import { generateEntityCode } from "../../Infrastructure/utils/codeGenerator";
import { InvoiceStatus } from "../../Domain/types/invoicesStatus.enum";

@injectable()
export class InvoiceService implements IInvoiceService {
  private readonly _invoiceRepository: IInvoiceRepository;

  constructor(@inject("IInvoiceRepository") repository: IInvoiceRepository) {
    this._invoiceRepository = repository;
  }

  async findAll(page: number = 1, pageSize: number = 100): Promise<Invoice[]> {
    return await this._invoiceRepository.findAll(page, pageSize);
  }

  async findById(id: string): Promise<Invoice | null> {
    return await this._invoiceRepository.findById(id);
  }

  async create(data: InvoiceDto): Promise<Invoice> {
    const invoiceCode = generateEntityCode({
      prefix: "INV",
      date: new Date(),
      uniqueId: data.patientId.substring(0, 8) // Corta los primeros 8 caracteres del ID del paciente
    });

    const newData: Invoice = new Invoice({
      ...data,
      invoiceNumber: invoiceCode,
      id: generateId(),
      // Una factura nueva empieza sin pagos
      paidAmount: 0,

      // Se calcula automáticamente
      pendingAmount: data.totalAmount,

      // Una factura nueva empieza pendiente
      status: InvoiceStatus.PENDING
    })
    await this._invoiceRepository.create(newData);
    return newData;
  }

  async update(id: string, data: InvoiceDto): Promise<Invoice | null> {
    const existing = await this._invoiceRepository.findById(id);
    if (!existing) {
      return null;
    }

    existing.changeTotal(data.totalAmount);
    await this._invoiceRepository.update(existing);
    return existing;
  }

  async delete(id: string): Promise<void> {
    const existing = await this._invoiceRepository.findById(id);
    if (!existing) {
      return;
    }
    return await this._invoiceRepository.delete(existing);
  }

  // ============================================================
  // PAYMENT
  // ============================================================

  async addPayment(
    id: string,
    amount: number
  ): Promise<Invoice | null> {

    const existing =
      await this._invoiceRepository.findById(id);

    if (!existing) {
      return null;
    }

    existing.addPayment(amount);

    await this._invoiceRepository.update(existing);

    return existing;
  }


  async removePayment(
    id: string,
    amount: number
  ): Promise<Invoice | null> {

    const existing =
      await this._invoiceRepository.findById(id);

    if (!existing) {
      return null;
    }

    existing.removePayment(amount);

    await this._invoiceRepository.update(existing);

    return existing;
  }


  // ============================================================
  // TOTAL
  // ============================================================

  async changeTotal(
    id: string,
    amount: number
  ): Promise<Invoice | null> {

    const existing =
      await this._invoiceRepository.findById(id);

    if (!existing) {
      return null;
    }

    existing.changeTotal(amount);

    await this._invoiceRepository.update(existing);

    return existing;
  }


  // ============================================================
  // CANCEL
  // ============================================================

  async cancel(
    id: string
  ): Promise<Invoice | null> {

    const existing =
      await this._invoiceRepository.findById(id);

    if (!existing) {
      return null;
    }

    existing.cancel();

    await this._invoiceRepository.update(existing);

    return existing;
  }
}
