import { inject, injectable } from "tsyringe";
import { IDiseaseService } from "../interfaces/disease.service.interface";
import { IDiseaseRepository } from "../../Domain/repositories/diseaseRepository.interface";
import { DiseaseDto } from "../dtos/disease.dto";
import Disease from "../../Domain/entities/disease";
import { generateId } from "../../shared/utils/generateId";

@injectable()
export class DiseaseService implements IDiseaseService {
  private readonly _diseaseRepository: IDiseaseRepository;

  constructor(@inject("IDiseaseRepository") repository: IDiseaseRepository) {
    this._diseaseRepository = repository;
  }
  
  async findAll(page: number = 1, pageSize: number = 100): Promise<Disease[]> {
    return await this._diseaseRepository.findAll(page, pageSize);
  }
  
  async findById(id: string) : Promise<Disease | null> {
    return await this._diseaseRepository.findById(id);
  }
  
  async create(data: DiseaseDto): Promise<Disease> {
    const newData: Disease = {
      ...data,
      id: generateId(), 
    }
    await this._diseaseRepository.create(newData);
    return newData;
  }

  async update(id: string, data: DiseaseDto): Promise<Disease | null> {
    const existing = await this._diseaseRepository.findById(id);
    if (!existing) {
      return null;
    }

    const newData: Disease = {
      ...data,
      id,
    }
    await this._diseaseRepository.update(newData);
    return newData;
  }

  async delete(id: string) : Promise<void> {
    const existing = await this._diseaseRepository.findById(id);
    if (!existing) {
      return ;
    }
    return await this._diseaseRepository.delete(existing);
  }
}
