import MedicalPrescription from '../entities/medicalPrescription';

export interface IMedicalPrescriptionRepository {
  findAll(page: number, pageSize: number): Promise<MedicalPrescription[]>;
  findById(id: string): Promise<MedicalPrescription | null>;
  create(data: MedicalPrescription): Promise<void>;
  update(data: MedicalPrescription): Promise<void>;
  delete(data: MedicalPrescription): Promise<void>;
}
