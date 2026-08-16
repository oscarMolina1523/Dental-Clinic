import TreatmentPlanDetail from "../../Domain/entities/treatmentPlanDetail";
import { TreatmentPlanDetailDto } from './../dtos/treatmentPlanDetail.dto';

export interface ITreatmentPlanDetailService {
  findAll(page: number, pageSize: number): Promise<TreatmentPlanDetail[]>;
  findById(id: string): Promise<TreatmentPlanDetail | null>;
  create(data: TreatmentPlanDetailDto): Promise<TreatmentPlanDetail>;
  update(id: string, data: TreatmentPlanDetailDto): Promise<TreatmentPlanDetail | null>;
  delete(id: string): Promise<void>;

  changeQuantity(
    id: string,
    quantity: number
  ): Promise<TreatmentPlanDetail | null>;

  changeTooth(
    id: string,
    toothNumber: number
  ): Promise<TreatmentPlanDetail | null>;

  start(
    id: string
  ): Promise<TreatmentPlanDetail | null>;

  complete(
    id: string
  ): Promise<TreatmentPlanDetail | null>;

  cancel(
    id: string
  ): Promise<TreatmentPlanDetail | null>;
}
