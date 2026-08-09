import TreatmentPlanDetail from '../entities/treatmentPlanDetail';

export interface ITreatmentPlanDetailRepository {
  findAll(page: number, pageSize: number): Promise<TreatmentPlanDetail[]>;
  findById(id: string): Promise<TreatmentPlanDetail | null>;
  create(data: TreatmentPlanDetail): Promise<void>;
  update(data: TreatmentPlanDetail): Promise<void>;
  delete(data: TreatmentPlanDetail): Promise<void>;
}
