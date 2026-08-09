import { inject, injectable } from "tsyringe";
import { IPatientService } from "../interfaces/patient.service.interface";
import { IPatientRepository } from "../../Domain/repositories/patientRepository.interface";
import { PatientDto } from "../dtos/patient.dto";
import Patient from "../../Domain/entities/patient";
import { generateId } from "../../shared/utils/generateId";

@injectable()
export class PatientService implements IPatientService {
  private readonly _patientRepository: IPatientRepository;

  constructor(@inject("IPatientRepository") repository: IPatientRepository) {
    this._patientRepository = repository;
  }
  
  async findAll(page: number = 1, pageSize: number = 100): Promise<Patient[]> {
    return await this._patientRepository.findAll(page, pageSize);
  }
  
  async findById(id: string) : Promise<Patient | null> {
    return await this._patientRepository.findById(id);
  }
  
  async create(data: PatientDto): Promise<Patient> {
    const newData: Patient = {
      ...data,
      id: generateId(), 
    }
    await this._patientRepository.create(newData);
    return newData;
  }

  async update(id: string, data: PatientDto): Promise<Patient | null> {
    const existing = await this._patientRepository.findById(id);
    if (!existing) {
      return null;
    }

    const newData: Patient = {
      ...data,
      id,
    }
    await this._patientRepository.update(newData);
    return newData;
  }

  async delete(id: string) : Promise<void> {
    const existing = await this._patientRepository.findById(id);
    if (!existing) {
      return ;
    }
    return await this._patientRepository.delete(existing);
  }
}
