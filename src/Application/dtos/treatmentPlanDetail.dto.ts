import { TreatmentPlanDetailStatus } from "../../Domain/types/treatmentPlanStatus.enum";

export interface TreatmentPlanDetailDto {
  planId: string;
  treatmentId: string;
  toothNumber: number;
  quantity: number;
  unitPrice: number;
  subtotal: number;
  status: TreatmentPlanDetailStatus;
}
