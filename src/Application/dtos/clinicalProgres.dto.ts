export interface ClinicalProgresDto {
  patientId: string;
  dateId: string;
  dentistId: string;
  diagnosis: string;
  treatmentId?: string;
  treatmentPlanId?: string;
  observations: string;
  registrationDate: Date;
}
