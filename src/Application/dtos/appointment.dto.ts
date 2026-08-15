export interface AppointmentDto {
  patientId: string;
  dentistId: string;
  startAppointmentTime: Date;
  endAppointmentTime: Date;
  reason: string;
  status: string;
  cancelationNotes: string;
  reminderSent: boolean;
  createdAt: Date;
}
