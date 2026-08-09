export interface DateDto {
  patientId: string;
  dentistId: string;
  startDateTime: Date;
  endDateTime: Date;
  reason: string;
  status: string;
  cancelationNotes: string;
  reminderSent: boolean;
  createdAt: Date;
}
