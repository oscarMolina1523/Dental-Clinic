import { AppointmentStatus } from "../../Domain/types/appointmentStatus.enum";

export interface AppointmentDto {
  patientId: string;
  patientFullName: string;
  dentistId: string;
  dentistFullName: string;
  startAppointmentTime: Date;
  endAppointmentTime: Date;
  reason: string;
  status: AppointmentStatus;
  cancelationNotes: string;
  reminderSent: boolean;
  createdAt: Date;
}
