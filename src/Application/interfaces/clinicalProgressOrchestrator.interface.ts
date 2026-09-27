import { CreateClinicalProgressOrchestratorDto } from "../dtos/clinicalProgressOrchestrator.dto";

export interface ClinicalProgressOrchestratorResult {
  clinicalProgress: any;
  medicalPrescription?: any;
  dentalChart?: any;
  patientAttachment?: any;
}

export interface IClinicalProgressOrchestratorService {

  create(
    data: CreateClinicalProgressOrchestratorDto
  ): Promise<ClinicalProgressOrchestratorResult>;
}