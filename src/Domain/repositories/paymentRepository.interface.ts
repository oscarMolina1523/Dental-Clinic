import Payment from '../entities/payment';

export interface IPaymentRepository {
  findAll(page: number, pageSize: number): Promise<Payment[]>;
  findById(id: string): Promise<Payment | null>;
  create(data: Payment): Promise<void>;
  update(data: Payment): Promise<void>;
  delete(data: Payment): Promise<void>;
}
