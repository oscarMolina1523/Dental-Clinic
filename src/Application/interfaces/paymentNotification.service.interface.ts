import PaymentNotification from "../../Domain/entities/paymentNotification";
import { PaymentNotificationStatus } from "../../Domain/types/paymentNotificationStatus.enum";
import { PaymentNotificationDto } from './../dtos/paymentNotification.dto';

export interface IPaymentNotificationService {
  findAll(page: number, pageSize: number): Promise<PaymentNotification[]>;
  findById(id: string): Promise<PaymentNotification | null>;
  create(data: PaymentNotificationDto): Promise<PaymentNotification>;
  update(id: string, data: PaymentNotificationDto): Promise<PaymentNotification | null>;
  delete(id: string): Promise<void>;

  updateStatus(
    id: string,
    status: PaymentNotificationStatus
  ): Promise<PaymentNotification | null>;

  reschedule(
    id: string,
    sendAt: Date | string
  ): Promise<PaymentNotification | null>;

  markAsSent(
    id: string
  ): Promise<PaymentNotification | null>;

  markAsFailed(
    id: string
  ): Promise<PaymentNotification | null>;

  cancel(
    id: string
  ): Promise<PaymentNotification | null>;
}
