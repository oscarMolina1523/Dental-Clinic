import BaseModel from "./base.model";

export default class Date extends BaseModel {
  patientId: string;
  dentistId: string;
  startDateTime: Date;
  endDateTime: Date;
  reason: string;
  status: string;
  cancelationNotes: string;
  reminderSent: boolean;
  createdAt: Date;

  constructor({
    id,
    patientId,
    dentistId,
    startDateTime,
    endDateTime,
    reason,
    status,
    cancelationNotes,
    reminderSent,
    createdAt,
  }: {
    id: string;
    patientId: string;
    dentistId: string;
    startDateTime: Date;
    endDateTime: Date;
    reason: string;
    status: string;
    cancelationNotes: string;
    reminderSent: boolean;
    createdAt: Date;
  }) {
    super(id);
    this.patientId = patientId;
    this.dentistId = dentistId;
    this.startDateTime = startDateTime;
    this.endDateTime = endDateTime;
    this.reason = reason;
    this.status = status;
    this.cancelationNotes = cancelationNotes;
    this.reminderSent = reminderSent;
    this.createdAt = createdAt;
  }
}
