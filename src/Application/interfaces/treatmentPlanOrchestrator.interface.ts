import TreatmentPlan from "../../Domain/entities/treatmentPlan";
import TreatmentPlanDetail from "../../Domain/entities/treatmentPlanDetail";
import { TreatmentPlanDto } from "../dtos/treatmentPlan.dto";
import { TreatmentPlanDetailDto } from "../dtos/treatmentPlanDetail.dto";

export interface CreateTreatmentPlanResult {
  treatmentPlan: TreatmentPlan;
  details: TreatmentPlanDetail[];
}

export interface ITreatmentPlanOrchestratorService {

  create(
    treatmentPlanData: TreatmentPlanDto,
    details: TreatmentPlanDetailDto[]
  ): Promise<CreateTreatmentPlanResult>;
}