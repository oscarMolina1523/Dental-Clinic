export interface MedicalPrescriptionDto {
  clinicalProgressId:string;
  patientId: string;
  patientFullName: string;
  dentistId: string;
  dentistFullName: string;
  date: Date;
  generalInstructions: string;
}
