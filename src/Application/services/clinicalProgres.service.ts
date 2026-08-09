import { inject, injectable } from "tsyringe";
import { IClinicalProgresService } from "../interfaces/clinicalProgres.service.interface";
import { IClinicalProgresRepository } from "../../Domain/repositories/clinicalProgresRepository.interface";
import { ClinicalProgresDto } from "../dtos/clinicalProgres.dto";
import ClinicalProgres from "../../Domain/entities/clinicalProgres";
import { generateId } from "../../shared/utils/generateId";

@injectable()
export class ClinicalProgresService implements IClinicalProgresService {
  private readonly _clinicalProgresRepository: IClinicalProgresRepository;

  constructor(@inject("IClinicalProgresRepository") repository: IClinicalProgresRepository) {
    this._clinicalProgresRepository = repository;
  }
  
  async findAll(page: number = 1, pageSize: number = 100): Promise<ClinicalProgres[]> {
    return await this._clinicalProgresRepository.findAll(page, pageSize);
  }
  
  async findById(id: string) : Promise<ClinicalProgres | null> {
    return await this._clinicalProgresRepository.findById(id);
  }
  
  async create(data: ClinicalProgresDto): Promise<ClinicalProgres> {
    const newData: ClinicalProgres = {
      ...data,
      id: generateId(), 
    }
    await this._clinicalProgresRepository.create(newData);
    return newData;
  }

  async update(id: string, data: ClinicalProgresDto): Promise<ClinicalProgres | null> {
    const existing = await this._clinicalProgresRepository.findById(id);
    if (!existing) {
      return null;
    }

    const newData: ClinicalProgres = {
      ...data,
      id,
    }
    await this._clinicalProgresRepository.update(newData);
    return newData;
  }

  async delete(id: string) : Promise<void> {
    const existing = await this._clinicalProgresRepository.findById(id);
    if (!existing) {
      return ;
    }
    return await this._clinicalProgresRepository.delete(existing);
  }
}
