import { ClinicalProgresDto } from "./clinicalProgres.dto";
import { MedicalPrescriptionDto } from "./medicalPrescription.dto";
import { MedicalPrescriptionDetailDto } from "./medicalPrescriptionDetail.dto";
import { DentalChartDto } from "./dentalChart.dto";
import { DentalChartDetailDto } from "./dentalChartDetail.dto";
import { PatientAttachmentDto } from "./patientAttachment.dto";

export interface CreateClinicalProgressOrchestratorDto {
  clinicalProgress: ClinicalProgresDto;

  medicalPrescription?: {
    data: MedicalPrescriptionDto;
    details: MedicalPrescriptionDetailDto[];
  };

  dentalChart?: {
    dentalChart: DentalChartDto;
    details: DentalChartDetailDto[];
  };

  patientAttachment?: PatientAttachmentDto;
}