import { inject, injectable } from "tsyringe";
import { IMedicalPrescriptionDetailService } from "../interfaces/medicalPrescriptionDetail.service.interface";
import { IMedicalPrescriptionDetailRepository } from "../../Domain/repositories/medicalPrescriptionDetailRepository.interface";
import { MedicalPrescriptionDetailDto } from "../dtos/medicalPrescriptionDetail.dto";
import MedicalPrescriptionDetail from "../../Domain/entities/medicalPrescriptionDetail";
import { generateId } from "../../shared/utils/generateId";

@injectable()
export class MedicalPrescriptionDetailService implements IMedicalPrescriptionDetailService {
  private readonly _medicalPrescriptionDetailRepository: IMedicalPrescriptionDetailRepository;

  constructor(@inject("IMedicalPrescriptionDetailRepository") repository: IMedicalPrescriptionDetailRepository) {
    this._medicalPrescriptionDetailRepository = repository;
  }
  
  async findAll(page: number = 1, pageSize: number = 100): Promise<MedicalPrescriptionDetail[]> {
    return await this._medicalPrescriptionDetailRepository.findAll(page, pageSize);
  }
  
  async findById(id: string) : Promise<MedicalPrescriptionDetail | null> {
    return await this._medicalPrescriptionDetailRepository.findById(id);
  }
  
  async create(data: MedicalPrescriptionDetailDto): Promise<MedicalPrescriptionDetail> {
    const newData: MedicalPrescriptionDetail = {
      ...data,
      id: generateId(), 
    }
    await this._medicalPrescriptionDetailRepository.create(newData);
    return newData;
  }

  async update(id: string, data: MedicalPrescriptionDetailDto): Promise<MedicalPrescriptionDetail | null> {
    const existing = await this._medicalPrescriptionDetailRepository.findById(id);
    if (!existing) {
      return null;
    }

    const newData: MedicalPrescriptionDetail = {
      ...data,
      id,
    }
    await this._medicalPrescriptionDetailRepository.update(newData);
    return newData;
  }

  async delete(id: string) : Promise<void> {
    const existing = await this._medicalPrescriptionDetailRepository.findById(id);
    if (!existing) {
      return ;
    }
    return await this._medicalPrescriptionDetailRepository.delete(existing);
  }
}
