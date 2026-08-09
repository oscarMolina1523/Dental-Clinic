import Invoice from "../../Domain/entities/invoice";
import { InvoiceDto } from './../dtos/invoice.dto';

export interface IInvoiceService {
  findAll(page: number, pageSize: number): Promise<Invoice[]>;
  findById(id: string): Promise<Invoice | null>;
  create(data: InvoiceDto): Promise<Invoice>;
  update(id: string, data: InvoiceDto): Promise<Invoice | null>;
  delete(id: string): Promise<void>;
}
