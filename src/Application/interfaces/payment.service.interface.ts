import Payment from "../../Domain/entities/payment";
import { PaymentDto } from './../dtos/payment.dto';

export interface IPaymentService {
  findAll(page: number, pageSize: number): Promise<Payment[]>;
  findById(id: string): Promise<Payment | null>;
  create(data: PaymentDto): Promise<Payment>;
  update(id: string, data: PaymentDto): Promise<Payment | null>;
  delete(id: string): Promise<void>;
}
