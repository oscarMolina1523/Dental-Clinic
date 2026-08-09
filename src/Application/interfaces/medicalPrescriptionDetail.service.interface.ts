import MedicalPrescriptionDetail from "../../Domain/entities/medicalPrescriptionDetail";
import { MedicalPrescriptionDetailDto } from './../dtos/medicalPrescriptionDetail.dto';

export interface IMedicalPrescriptionDetailService {
  findAll(page: number, pageSize: number): Promise<MedicalPrescriptionDetail[]>;
  findById(id: string): Promise<MedicalPrescriptionDetail | null>;
  create(data: MedicalPrescriptionDetailDto): Promise<MedicalPrescriptionDetail>;
  update(id: string, data: MedicalPrescriptionDetailDto): Promise<MedicalPrescriptionDetail | null>;
  delete(id: string): Promise<void>;
}
