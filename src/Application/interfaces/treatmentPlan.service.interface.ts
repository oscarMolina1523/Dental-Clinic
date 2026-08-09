import TreatmentPlan from "../../Domain/entities/treatmentPlan";
import { TreatmentPlanDto } from './../dtos/treatmentPlan.dto';

export interface ITreatmentPlanService {
  findAll(page: number, pageSize: number): Promise<TreatmentPlan[]>;
  findById(id: string): Promise<TreatmentPlan | null>;
  create(data: TreatmentPlanDto): Promise<TreatmentPlan>;
  update(id: string, data: TreatmentPlanDto): Promise<TreatmentPlan | null>;
  delete(id: string): Promise<void>;
}
