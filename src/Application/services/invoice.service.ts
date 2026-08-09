import { inject, injectable } from "tsyringe";
import { IInvoiceService } from "../interfaces/invoice.service.interface";
import { IInvoiceRepository } from "../../Domain/repositories/invoiceRepository.interface";
import { InvoiceDto } from "../dtos/invoice.dto";
import Invoice from "../../Domain/entities/invoice";
import { generateId } from "../../shared/utils/generateId";

@injectable()
export class InvoiceService implements IInvoiceService {
  private readonly _invoiceRepository: IInvoiceRepository;

  constructor(@inject("IInvoiceRepository") repository: IInvoiceRepository) {
    this._invoiceRepository = repository;
  }
  
  async findAll(page: number = 1, pageSize: number = 100): Promise<Invoice[]> {
    return await this._invoiceRepository.findAll(page, pageSize);
  }
  
  async findById(id: string) : Promise<Invoice | null> {
    return await this._invoiceRepository.findById(id);
  }
  
  async create(data: InvoiceDto): Promise<Invoice> {
    const newData: Invoice = {
      ...data,
      id: generateId(), 
    }
    await this._invoiceRepository.create(newData);
    return newData;
  }

  async update(id: string, data: InvoiceDto): Promise<Invoice | null> {
    const existing = await this._invoiceRepository.findById(id);
    if (!existing) {
      return null;
    }

    const newData: Invoice = {
      ...data,
      id,
    }
    await this._invoiceRepository.update(newData);
    return newData;
  }

  async delete(id: string) : Promise<void> {
    const existing = await this._invoiceRepository.findById(id);
    if (!existing) {
      return ;
    }
    return await this._invoiceRepository.delete(existing);
  }
}
