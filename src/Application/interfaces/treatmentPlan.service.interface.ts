import TreatmentPlan from "../../Domain/entities/treatmentPlan";
import { TreatmentPlanStatus } from "../../Domain/types/treatmentPlanStatus.enum";
import { TreatmentPlanDto } from './../dtos/treatmentPlan.dto';

export interface ITreatmentPlanService {
  findAll(page: number, pageSize: number): Promise<TreatmentPlan[]>;
  findById(id: string): Promise<TreatmentPlan | null>;
  create(data: TreatmentPlanDto): Promise<TreatmentPlan>;
  update(id: string, data: TreatmentPlanDto): Promise<TreatmentPlan | null>;
  delete(id: string): Promise<void>;

  // Estados

  changeStatus(
    id: string,
    status: TreatmentPlanStatus
  ): Promise<TreatmentPlan | null>;

  propose(
    id: string
  ): Promise<TreatmentPlan | null>;

  accept(
    id: string
  ): Promise<TreatmentPlan | null>;

  start(
    id: string
  ): Promise<TreatmentPlan | null>;

  complete(
    id: string
  ): Promise<TreatmentPlan | null>;

  cancel(
    id: string
  ): Promise<TreatmentPlan | null>;

  // Dinero

  setSubtotal(
    id: string,
    amount: number
  ): Promise<TreatmentPlan | null>;

  applyDiscount(
    id: string,
    discount: number
  ): Promise<TreatmentPlan | null>;

  removeDiscount(
    id: string
  ): Promise<TreatmentPlan | null>;
}
