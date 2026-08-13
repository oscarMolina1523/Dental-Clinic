import PaymentNotification from '../entities/paymentNotification';

export interface IPaymentNotificationRepository {
  findAll(page: number, pageSize: number): Promise<PaymentNotification[]>;
  findById(id: string): Promise<PaymentNotification | null>;
  create(data: PaymentNotification): Promise<void>;
  update(data: PaymentNotification): Promise<void>;
  delete(data: PaymentNotification): Promise<void>;
}
