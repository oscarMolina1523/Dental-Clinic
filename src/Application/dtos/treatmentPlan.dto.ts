export interface TreatmentPlanDto {
  patientId: string;
  dentistId: string;
  code: string;
  status: string;
  totalAmount: number;
  discount: number;
  createdAt: Date;
}
