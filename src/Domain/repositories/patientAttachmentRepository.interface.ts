import PatientAttachment from '../entities/patientAttachment';

export interface IPatientAttachmentRepository {
  findAll(page: number, pageSize: number): Promise<PatientAttachment[]>;
  findById(id: string): Promise<PatientAttachment | null>;
  create(data: PatientAttachment): Promise<void>;
  update(data: PatientAttachment): Promise<void>;
  delete(data: PatientAttachment): Promise<void>;
}
