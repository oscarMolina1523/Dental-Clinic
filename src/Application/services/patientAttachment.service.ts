import { inject, injectable } from "tsyringe";
import { IPatientAttachmentService } from "../interfaces/patientAttachment.service.interface";
import { IPatientAttachmentRepository } from "../../Domain/repositories/patientAttachmentRepository.interface";
import { PatientAttachmentDto } from "../dtos/patientAttachment.dto";
import PatientAttachment from "../../Domain/entities/patientAttachment";
import { generateId } from "../../shared/utils/generateId";

@injectable()
export class PatientAttachmentService implements IPatientAttachmentService {
  private readonly _patientAttachmentRepository: IPatientAttachmentRepository;

  constructor(@inject("IPatientAttachmentRepository") repository: IPatientAttachmentRepository) {
    this._patientAttachmentRepository = repository;
  }
  
  async findAll(page: number = 1, pageSize: number = 100): Promise<PatientAttachment[]> {
    return await this._patientAttachmentRepository.findAll(page, pageSize);
  }
  
  async findById(id: string) : Promise<PatientAttachment | null> {
    return await this._patientAttachmentRepository.findById(id);
  }
  
  async create(data: PatientAttachmentDto): Promise<PatientAttachment> {
    const newData: PatientAttachment = {
      ...data,
      id: generateId(), 
    }
    await this._patientAttachmentRepository.create(newData);
    return newData;
  }

  async update(id: string, data: PatientAttachmentDto): Promise<PatientAttachment | null> {
    const existing = await this._patientAttachmentRepository.findById(id);
    if (!existing) {
      return null;
    }

    const newData: PatientAttachment = {
      ...data,
      id,
    }
    await this._patientAttachmentRepository.update(newData);
    return newData;
  }

  async delete(id: string) : Promise<void> {
    const existing = await this._patientAttachmentRepository.findById(id);
    if (!existing) {
      return ;
    }
    return await this._patientAttachmentRepository.delete(existing);
  }
}
