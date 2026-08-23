import { AppointmentStatus } from "../../Domain/types/appointmentStatus.enum";

export interface AppointmentDto {
  patientId: string;
  dentistId: string;
  startAppointmentTime: Date;
  endAppointmentTime: Date;
  reason: string;
  status: AppointmentStatus;
  cancelationNotes: string;
  reminderSent: boolean;
  createdAt: Date;
}
