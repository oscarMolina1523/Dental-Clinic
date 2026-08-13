import BaseModel from "./base.model";

export default class PaymentNotification extends BaseModel {
  installmentId: string;
  patientId: string;
  scheduledDate: Date;
  sendAt: Date;
  notificationType: string;
  channel: string;
  status: string;

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
    notificationType: string;
    channel: string;
    status: string;
  }) {
    super(id);
    this.installmentId = installmentId;
    this.patientId = patientId;
    this.scheduledDate = scheduledDate;
    this.sendAt = sendAt;
    this.notificationType = notificationType;
    this.channel = channel;
    this.status = status;
  }
}
