import { TreatmentPlanStatus } from "../../Domain/types/treatmentPlanStatus.enum";

export interface TreatmentPlanDto {
  patientId: string;
  dentistId: string;
  code: string;
  status: TreatmentPlanStatus;
  totalAmount: number;
  discount: number;
  createdAt: Date;
}
