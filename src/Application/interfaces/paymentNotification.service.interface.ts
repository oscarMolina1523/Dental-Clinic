import PaymentNotification from "../../Domain/entities/paymentNotification";
import { PaymentNotificationDto } from './../dtos/paymentNotification.dto';

export interface IPaymentNotificationService {
  findAll(page: number, pageSize: number): Promise<PaymentNotification[]>;
  findById(id: string): Promise<PaymentNotification | null>;
  create(data: PaymentNotificationDto): Promise<PaymentNotification>;
  update(id: string, data: PaymentNotificationDto): Promise<PaymentNotification | null>;
  delete(id: string): Promise<void>;
}
