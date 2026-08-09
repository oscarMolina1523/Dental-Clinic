import TreatmentPlan from '../entities/treatmentPlan';

export interface ITreatmentPlanRepository {
  findAll(page: number, pageSize: number): Promise<TreatmentPlan[]>;
  findById(id: string): Promise<TreatmentPlan | null>;
  create(data: TreatmentPlan): Promise<void>;
  update(data: TreatmentPlan): Promise<void>;
  delete(data: TreatmentPlan): Promise<void>;
}
