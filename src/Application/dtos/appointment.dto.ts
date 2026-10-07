import { AppointmentStatus } from "../../Domain/types/appointmentStatus.enum";

export interface AppointmentDto {
  patientId: string;
  patientFullName: string;
  dentistId: string;
  dentistFullName: string;
  dentistSpeciality: string;

  treatmentPlanId?: string;
  treatmentId?: string;

  allergies?: string;
  symptoms?: string;
  diagnosis?: string;
  clinicalNotes?: string;
  
  startAppointmentTime: Date;
  endAppointmentTime: Date;
  reason: string;
  status: AppointmentStatus;
  cancelationNotes: string;
  reminderSent: boolean;
  createdAt: Date;
  isInvoiced: boolean;
  isClinicalProgressRegistered: boolean;
}
