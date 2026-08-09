import { inject, injectable } from "tsyringe";
import { IPatientDiseaseService } from "../interfaces/patientDisease.service.interface";
import { IPatientDiseaseRepository } from "../../Domain/repositories/patientDiseaseRepository.interface";
import { PatientDiseaseDto } from "../dtos/patientDisease.dto";
import PatientDisease from "../../Domain/entities/patientDisease";
import { generateId } from "../../shared/utils/generateId";

@injectable()
export class PatientDiseaseService implements IPatientDiseaseService {
  private readonly _patientDiseaseRepository: IPatientDiseaseRepository;

  constructor(@inject("IPatientDiseaseRepository") repository: IPatientDiseaseRepository) {
    this._patientDiseaseRepository = repository;
  }
  
  async findAll(page: number = 1, pageSize: number = 100): Promise<PatientDisease[]> {
    return await this._patientDiseaseRepository.findAll(page, pageSize);
  }
  
  async findById(id: string) : Promise<PatientDisease | null> {
    return await this._patientDiseaseRepository.findById(id);
  }
  
  async create(data: PatientDiseaseDto): Promise<PatientDisease> {
    const newData: PatientDisease = {
      ...data,
      id: generateId(), 
    }
    await this._patientDiseaseRepository.create(newData);
    return newData;
  }

  async update(id: string, data: PatientDiseaseDto): Promise<PatientDisease | null> {
    const existing = await this._patientDiseaseRepository.findById(id);
    if (!existing) {
      return null;
    }

    const newData: PatientDisease = {
      ...data,
      id,
    }
    await this._patientDiseaseRepository.update(newData);
    return newData;
  }

  async delete(id: string) : Promise<void> {
    const existing = await this._patientDiseaseRepository.findById(id);
    if (!existing) {
      return ;
    }
    return await this._patientDiseaseRepository.delete(existing);
  }
}
