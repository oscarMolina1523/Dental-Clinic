import PatientAttachment from "../../Domain/entities/patientAttachment";
import { PatientAttachmentDto } from './../dtos/patientAttachment.dto';

export interface IPatientAttachmentService {
  findAll(page: number, pageSize: number): Promise<PatientAttachment[]>;
  findById(id: string): Promise<PatientAttachment | null>;
  create(data: PatientAttachmentDto): Promise<PatientAttachment>;
  update(id: string, data: PatientAttachmentDto): Promise<PatientAttachment | null>;
  delete(id: string): Promise<void>;
}
