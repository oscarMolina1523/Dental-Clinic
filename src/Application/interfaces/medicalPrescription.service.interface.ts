import MedicalPrescription from "../../Domain/entities/medicalPrescription";
import { MedicalPrescriptionDto } from './../dtos/medicalPrescription.dto';

export interface IMedicalPrescriptionService {
  findAll(page: number, pageSize: number): Promise<MedicalPrescription[]>;
  findById(id: string): Promise<MedicalPrescription | null>;
  create(data: MedicalPrescriptionDto): Promise<MedicalPrescription>;
  update(id: string, data: MedicalPrescriptionDto): Promise<MedicalPrescription | null>;
  delete(id: string): Promise<void>;
}
