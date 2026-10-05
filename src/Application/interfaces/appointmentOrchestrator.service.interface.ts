import Appointment from "../../Domain/entities/appointment";
import TreatmentCatalog from "../../Domain/entities/treatmentCatalog";
import TreatmentPlan from "../../Domain/entities/treatmentPlan";
import TreatmentPlanDetail from "../../Domain/entities/treatmentPlanDetail";
import { AppointmentDto } from "../dtos/appointment.dto";
import { TreatmentCatalogDto } from "../dtos/treatmentCatalog.dto";
import { TreatmentPlanDto } from "../dtos/treatmentPlan.dto";
import { TreatmentPlanDetailDto } from "../dtos/treatmentPlanDetail.dto";

export interface AppointmentWithDetails {
  appointment: Appointment;

  treatment: TreatmentCatalog | null;

  treatmentPlan: TreatmentPlan | null;

  treatmentPlanDetails: TreatmentPlanDetail[];
}

export interface CreateAppointmentOrchestratorDto {
  appointment: AppointmentDto;

  treatment?: TreatmentCatalogDto;

  treatmentPlan?: {
    data: TreatmentPlanDto;
    details: TreatmentPlanDetailDto[];
  };
}

export interface IAppointmentOrchestratorService {

  create(
    data: CreateAppointmentOrchestratorDto
  ): Promise<AppointmentWithDetails>;

  getAll(): Promise<AppointmentWithDetails[]>;

  getById(
    id: string
  ): Promise<AppointmentWithDetails | null>;

  update(
    id: string,
    data: CreateAppointmentOrchestratorDto
  ): Promise<AppointmentWithDetails | null>;

  delete(
    id: string
  ): Promise<boolean>;
}