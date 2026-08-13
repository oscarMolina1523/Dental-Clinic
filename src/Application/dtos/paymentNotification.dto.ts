export interface PaymentNotificationDto {
  installmentId: string;
  patientId: string;
  scheduledDate: Date;
  sendAt: Date;
  notificationType: string;
  channel: string;
  status: string;
}
