export enum PaymentNotificationType {
  PAYMENT_DUE = "PAYMENT_DUE", //pago pendiente
  PAYMENT_OVERDUE = "PAYMENT_OVERDUE", //pago vencido
  PAYMENT_REMINDER = "PAYMENT_REMINDER", //recordatorio de pago
  PAYMENT_CONFIRMED = "PAYMENT_CONFIRMED", //pago confirmado
}

export enum PaymentNotificationChannel {
  EMAIL = "EMAIL",
  SMS = "SMS",
  WHATSAPP = "WHATSAPP",
  PUSH = "PUSH",
}

export enum PaymentNotificationStatus {
  PENDING = "PENDING",
  SENT = "SENT",
  FAILED = "FAILED",
  CANCELLED = "CANCELLED",
}