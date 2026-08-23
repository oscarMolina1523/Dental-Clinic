import { PaymentNotificationChannel, PaymentNotificationStatus, PaymentNotificationType } from "../../Domain/types/paymentNotificationStatus.enum";

export interface PaymentNotificationDto {
  installmentId: string;
  patientId: string;
  scheduledDate: Date;
  sendAt: Date;
  notificationType: PaymentNotificationType;
  channel: PaymentNotificationChannel;
  status: PaymentNotificationStatus;
}
