import Invoice from '../entities/invoice';

export interface IInvoiceRepository {
  findAll(page: number, pageSize: number): Promise<Invoice[]>;
  findById(id: string): Promise<Invoice | null>;
  create(data: Invoice): Promise<void>;
  update(data: Invoice): Promise<void>;
  delete(data: Invoice): Promise<void>;
}
