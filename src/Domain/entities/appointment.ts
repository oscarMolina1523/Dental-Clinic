import BaseModel from "./base.model";

export default class Appointment extends BaseModel {
  patientId: string;
  dentistId: string;
  startAppointmentTime: Date;
  endAppointmentTime: Date;
  reason: string;
  status: string;
  cancelationNotes: string;
  reminderSent: boolean;
  createdAt: Date;

  constructor({
    id,
    patientId,
    dentistId,
    startAppointmentTime,
    endAppointmentTime,
    reason,
    status,
    cancelationNotes,
    reminderSent,
    createdAt,
  }: {
    id: string;
    patientId: string;
    dentistId: string;
    startAppointmentTime: Date;
    endAppointmentTime: Date;
    reason: string;
    status: string;
    cancelationNotes: string;
    reminderSent: boolean;
    createdAt: Date;
  }) {
    super(id);
    this.patientId = patientId;
    this.dentistId = dentistId;
    this.startAppointmentTime = startAppointmentTime;
    this.endAppointmentTime = endAppointmentTime;
    this.reason = reason;
    this.status = status;
    this.cancelationNotes = cancelationNotes;
    this.reminderSent = reminderSent;
    this.createdAt = createdAt;
  }
}
