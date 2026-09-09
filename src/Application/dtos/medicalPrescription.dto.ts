export interface MedicalPrescriptionDto {
  patientId: string;
  patientFullName: string;
  dentistId: string;
  dentistFullName: string;
  date: Date;
  generalInstructions: string;
}
