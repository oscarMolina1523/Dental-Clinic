import { inject, injectable } from "tsyringe";
import { IMedicalPrescriptionService } from "../interfaces/medicalPrescription.service.interface";
import { IMedicalPrescriptionRepository } from "../../Domain/repositories/medicalPrescriptionRepository.interface";
import { MedicalPrescriptionDto } from "../dtos/medicalPrescription.dto";
import MedicalPrescription from "../../Domain/entities/medicalPrescription";
import { generateId } from "../../shared/utils/generateId";

@injectable()
export class MedicalPrescriptionService implements IMedicalPrescriptionService {
  private readonly _medicalPrescriptionRepository: IMedicalPrescriptionRepository;

  constructor(@inject("IMedicalPrescriptionRepository") repository: IMedicalPrescriptionRepository) {
    this._medicalPrescriptionRepository = repository;
  }
  
  async findAll(page: number = 1, pageSize: number = 100): Promise<MedicalPrescription[]> {
    return await this._medicalPrescriptionRepository.findAll(page, pageSize);
  }
  
  async findById(id: string) : Promise<MedicalPrescription | null> {
    return await this._medicalPrescriptionRepository.findById(id);
  }
  
  async create(data: MedicalPrescriptionDto): Promise<MedicalPrescription> {
    const newData: MedicalPrescription = {
      ...data,
      id: generateId(), 
    }
    await this._medicalPrescriptionRepository.create(newData);
    return newData;
  }

  async update(id: string, data: MedicalPrescriptionDto): Promise<MedicalPrescription | null> {
    const existing = await this._medicalPrescriptionRepository.findById(id);
    if (!existing) {
      return null;
    }

    const newData: MedicalPrescription = {
      ...data,
      id,
    }
    await this._medicalPrescriptionRepository.update(newData);
    return newData;
  }

  async delete(id: string) : Promise<void> {
    const existing = await this._medicalPrescriptionRepository.findById(id);
    if (!existing) {
      return ;
    }
    return await this._medicalPrescriptionRepository.delete(existing);
  }
}
