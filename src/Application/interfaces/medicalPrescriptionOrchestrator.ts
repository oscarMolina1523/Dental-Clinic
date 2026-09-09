import MedicalPrescription from "../../Domain/entities/medicalPrescription";
import MedicalPrescriptionDetail from "../../Domain/entities/medicalPrescriptionDetail";

import { MedicalPrescriptionDto } from "../dtos/medicalPrescription.dto";
import { MedicalPrescriptionDetailDto } from "../dtos/medicalPrescriptionDetail.dto";

export interface MedicalPrescriptionWithDetails {
  medicalPrescription: MedicalPrescription;
  details: MedicalPrescriptionDetail[];
}

export interface IMedicalPrescriptionOrchestratorService {

  getById(
    id: string
  ): Promise<MedicalPrescriptionWithDetails | null>;

  create(
    data: MedicalPrescriptionDto,
    details: MedicalPrescriptionDetailDto[]
  ): Promise<MedicalPrescriptionWithDetails>;

  update(
    id: string,
    data: MedicalPrescriptionDto,
    details: MedicalPrescriptionDetailDto[]
  ): Promise<MedicalPrescriptionWithDetails | null>;

  delete(
    id: string
  ): Promise<void>;
}