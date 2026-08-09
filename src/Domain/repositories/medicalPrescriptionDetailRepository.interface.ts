import MedicalPrescriptionDetail from '../entities/medicalPrescriptionDetail';

export interface IMedicalPrescriptionDetailRepository {
  findAll(page: number, pageSize: number): Promise<MedicalPrescriptionDetail[]>;
  findById(id: string): Promise<MedicalPrescriptionDetail | null>;
  create(data: MedicalPrescriptionDetail): Promise<void>;
  update(data: MedicalPrescriptionDetail): Promise<void>;
  delete(data: MedicalPrescriptionDetail): Promise<void>;
}
