import ClinicalProgres from "../../Domain/entities/clinicalProgres";
import DentalChart from "../../Domain/entities/dentalChart";
import PatientAttachment from "../../Domain/entities/patientAttachment";
import { CreateClinicalProgressOrchestratorDto } from "../dtos/clinicalProgressOrchestrator.dto";
import { DentalChartWithDetails } from "./dentalChartOrchestrator.interface";
import { MedicalPrescriptionWithDetails } from "./medicalPrescriptionOrchestrator";

export interface ClinicalProgressOrchestratorResult {
  clinicalProgress: ClinicalProgres;

  medicalPrescription:
  | MedicalPrescriptionWithDetails
  | null;

  dentalChart:
  | DentalChartWithDetails
  | null;

  patientAttachment:
  | PatientAttachment
  | null;
}

export interface IClinicalProgressOrchestratorService {

  create(
    data: CreateClinicalProgressOrchestratorDto
  ): Promise<ClinicalProgressOrchestratorResult>;

  getAll(): Promise<ClinicalProgressOrchestratorResult[]>;

  getByPatientId(
    patientId: string
  ): Promise<ClinicalProgressOrchestratorResult[]>;
}