import { PaymentNotificationChannel, PaymentNotificationStatus, PaymentNotificationType } from "../types/paymentNotificationStatus.enum";
import BaseModel from "./base.model";

export default class PaymentNotification extends BaseModel {
  installmentId: string;
  patientId: string;
  scheduledDate: Date;
  sendAt: Date;
  notificationType: PaymentNotificationType;
  channel: PaymentNotificationChannel;
  status: PaymentNotificationStatus;

  constructor({
    id,
    installmentId,
    patientId,
    scheduledDate,
    sendAt,
    notificationType,
    channel,
    status,
  }: {
    id: string;
    installmentId: string;
    patientId: string;
    scheduledDate: Date;
    sendAt: Date;
    notificationType: PaymentNotificationType;
    channel: PaymentNotificationChannel;
    status: PaymentNotificationStatus;
  }) {
    super(id);

    // ============================================================
    // INSTALLMENT
    // ============================================================

    if (
      !installmentId ||
      installmentId.trim().length === 0
    ) {
      throw new Error(
        "La cuota es obligatoria"
      );
    }

    // ============================================================
    // PATIENT
    // ============================================================

    if (
      !patientId ||
      patientId.trim().length === 0
    ) {
      throw new Error(
        "El paciente es obligatorio"
      );
    }

    // ============================================================
    // SCHEDULED DATE
    // ============================================================

    if (!scheduledDate) {
      throw new Error(
        "La fecha programada de pago es obligatoria"
      );
    }

    const normalizedScheduledDate =
      scheduledDate instanceof Date
        ? scheduledDate
        : new Date(scheduledDate);

    if (
      isNaN(
        normalizedScheduledDate.getTime()
      )
    ) {
      throw new Error(
        "La fecha programada de pago no es válida"
      );
    }

    // ============================================================
    // SEND AT
    // ============================================================

    if (!sendAt) {
      throw new Error(
        "La fecha de envío es obligatoria"
      );
    }

    const normalizedSendAt =
      sendAt instanceof Date
        ? sendAt
        : new Date(sendAt);

    if (
      isNaN(
        normalizedSendAt.getTime()
      )
    ) {
      throw new Error(
        "La fecha de envío no es válida"
      );
    }

    // ============================================================
    // SEND DATE RULE
    // ============================================================

    if (
      normalizedSendAt >
      normalizedScheduledDate
    ) {
      throw new Error(
        "La fecha de envío no puede ser posterior a la fecha programada de pago"
      );
    }

    // ============================================================
    // NOTIFICATION TYPE
    // ============================================================

    if (!notificationType) {
      throw new Error(
        "El tipo de notificación es obligatorio"
      );
    }

    if (
      !Object.values(
        PaymentNotificationType
      ).includes(notificationType)
    ) {
      throw new Error(
        "El tipo de notificación no es válido"
      );
    }

    // ============================================================
    // CHANNEL
    // ============================================================

    if (!channel) {
      throw new Error(
        "El canal de notificación es obligatorio"
      );
    }

    if (
      !Object.values(
        PaymentNotificationChannel
      ).includes(channel)
    ) {
      throw new Error(
        "El canal de notificación no es válido"
      );
    }

    // ============================================================
    // STATUS
    // ============================================================

    if (!status) {
      throw new Error(
        "El estado de la notificación es obligatorio"
      );
    }

    if (
      !Object.values(
        PaymentNotificationStatus
      ).includes(status)
    ) {
      throw new Error(
        "El estado de la notificación no es válido"
      );
    }

    this.installmentId =
      installmentId.trim();

    this.patientId =
      patientId.trim();

    this.scheduledDate =
      normalizedScheduledDate;

    this.sendAt =
      normalizedSendAt;

    this.notificationType =
      notificationType;

    this.channel =
      channel;

    this.status =
      status;
  }

  get isPending(): boolean {

    return (
      this.status ===
      PaymentNotificationStatus.PENDING
    );
  }

  get isSent(): boolean {

    return (
      this.status ===
      PaymentNotificationStatus.SENT
    );
  }

  get isFailed(): boolean {

    return (
      this.status ===
      PaymentNotificationStatus.FAILED
    );
  }

  get isCancelled(): boolean {

    return (
      this.status ===
      PaymentNotificationStatus.CANCELLED
    );
  }

  // ============================================================
  // SCHEDULE
  // ============================================================

  /**
   * Indica si la notificación ya está lista
   * para ser enviada, es decir la fecha es hoy.
   */
  get isReadyToSend(): boolean {

    return (
      this.isPending &&
      new Date() >= this.sendAt
    );
  }

  /**
   * Indica si todavía no ha llegado
   * el momento de enviar la notificación.
   */
  get isScheduled(): boolean {

    return (
      this.isPending &&
      new Date() < this.sendAt
    );
  }

  /**
   * Indica si la fecha programada
   * ya pasó.
   */
  get isOverdue(): boolean {

    return (
      new Date() >
      this.scheduledDate
    );
  }

  // ============================================================
  // BUSINESS RULES
  // ============================================================

  update({
    scheduledDate,
    sendAt,
    notificationType,
    channel,
  }: {
    scheduledDate: Date | string;
    sendAt: Date | string;
    notificationType: PaymentNotificationType;
    channel: PaymentNotificationChannel;
  }): void {

    // ============================================================
    // SCHEDULED DATE
    // ============================================================

    if (!scheduledDate) {
      throw new Error(
        "La fecha programada de pago es obligatoria"
      );
    }

    const normalizedScheduledDate =
      scheduledDate instanceof Date
        ? scheduledDate
        : new Date(scheduledDate);

    if (
      isNaN(
        normalizedScheduledDate.getTime()
      )
    ) {
      throw new Error(
        "La fecha programada de pago no es válida"
      );
    }

    // ============================================================
    // SEND AT
    // ============================================================

    if (!sendAt) {
      throw new Error(
        "La fecha de envío es obligatoria"
      );
    }

    const normalizedSendAt =
      sendAt instanceof Date
        ? sendAt
        : new Date(sendAt);

    if (
      isNaN(
        normalizedSendAt.getTime()
      )
    ) {
      throw new Error(
        "La fecha de envío no es válida"
      );
    }

    // ============================================================
    // DATE RULE
    // ============================================================

    if (
      normalizedSendAt >
      normalizedScheduledDate
    ) {
      throw new Error(
        "La fecha de envío no puede ser posterior a la fecha programada de pago"
      );
    }

    // ============================================================
    // NOTIFICATION TYPE
    // ============================================================

    if (
      !Object.values(
        PaymentNotificationType
      ).includes(notificationType)
    ) {
      throw new Error(
        "El tipo de notificación no es válido"
      );
    }

    // ============================================================
    // CHANNEL
    // ============================================================

    if (
      !Object.values(
        PaymentNotificationChannel
      ).includes(channel)
    ) {
      throw new Error(
        "El canal de notificación no es válido"
      );
    }

    // ============================================================
    // UPDATE
    // ============================================================

    this.scheduledDate =
      normalizedScheduledDate;

    this.sendAt =
      normalizedSendAt;

    this.notificationType =
      notificationType;

    this.channel =
      channel;
  }

  // ============================================================
  // STATUS
  // ============================================================

  updateStatus(
    status: PaymentNotificationStatus
  ): void {

    if (!status) {
      throw new Error(
        "El estado de la notificación es obligatorio"
      );
    }

    if (
      !Object.values(
        PaymentNotificationStatus
      ).includes(status)
    ) {
      throw new Error(
        "El estado de la notificación no es válido"
      );
    }

    // ============================================================
    // BUSINESS RULES
    // ============================================================

    if (
      this.isSent &&
      status === PaymentNotificationStatus.PENDING
    ) {
      throw new Error(
        "Una notificación enviada no puede volver a pendiente"
      );
    }

    if (
      this.isCancelled &&
      status !== PaymentNotificationStatus.PENDING
    ) {
      throw new Error(
        "Una notificación cancelada no puede cambiar a este estado"
      );
    }

    this.status = status;
  }

  // ============================================================
  // RESCHEDULE
  // ============================================================

  reschedule(
    sendAt: Date | string
  ): void {

    if (
      this.isSent
    ) {
      throw new Error(
        "Una notificación enviada no puede ser reprogramada"
      );
    }

    if (
      this.isCancelled
    ) {
      throw new Error(
        "Una notificación cancelada no puede ser reprogramada"
      );
    }

    if (!sendAt) {
      throw new Error(
        "La fecha de envío es obligatoria"
      );
    }

    const normalizedSendAt =
      sendAt instanceof Date
        ? sendAt
        : new Date(sendAt);

    if (
      isNaN(
        normalizedSendAt.getTime()
      )
    ) {
      throw new Error(
        "La fecha de envío no es válida"
      );
    }

    if (
      normalizedSendAt >
      this.scheduledDate
    ) {
      throw new Error(
        "La fecha de envío no puede ser posterior a la fecha programada de pago"
      );
    }

    this.sendAt =
      normalizedSendAt;

    this.status =
      PaymentNotificationStatus.PENDING;
  }

  // ============================================================
  // SEND
  // ============================================================

  markAsSent(): void {

    if (
      this.isCancelled
    ) {
      throw new Error(
        "Una notificación cancelada no puede ser enviada"
      );
    }

    if (
      this.isSent
    ) {
      throw new Error(
        "La notificación ya fue enviada"
      );
    }

    this.status =
      PaymentNotificationStatus.SENT;
  }

  // ============================================================
  // FAILED
  // ============================================================

  markAsFailed(): void {

    if (
      this.isCancelled
    ) {
      throw new Error(
        "Una notificación cancelada no puede marcarse como fallida"
      );
    }

    if (
      this.isSent
    ) {
      throw new Error(
        "Una notificación enviada no puede marcarse como fallida"
      );
    }

    this.status =
      PaymentNotificationStatus.FAILED;
  }

  // ============================================================
  // CANCEL
  // ============================================================

  cancel(): void {

    if (
      this.isSent
    ) {
      throw new Error(
        "Una notificación enviada no puede ser cancelada"
      );
    }

    if (
      this.isCancelled
    ) {
      throw new Error(
        "La notificación ya está cancelada"
      );
    }

    this.status =
      PaymentNotificationStatus.CANCELLED;
  }
}
