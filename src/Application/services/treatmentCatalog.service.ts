import { inject, injectable } from "tsyringe";
import { ITreatmentCatalogService } from "../interfaces/treatmentCatalog.service.interface";
import { ITreatmentCatalogRepository } from "../../Domain/repositories/treatmentCatalogRepository.interface";
import { TreatmentCatalogDto } from "../dtos/treatmentCatalog.dto";
import TreatmentCatalog from "../../Domain/entities/treatmentCatalog";
import { generateId } from "../../shared/utils/generateId";

@injectable()
export class TreatmentCatalogService implements ITreatmentCatalogService {
  private readonly _treatmentCatalogRepository: ITreatmentCatalogRepository;

  constructor(@inject("ITreatmentCatalogRepository") repository: ITreatmentCatalogRepository) {
    this._treatmentCatalogRepository = repository;
  }
  
  async findAll(page: number = 1, pageSize: number = 100): Promise<TreatmentCatalog[]> {
    return await this._treatmentCatalogRepository.findAll(page, pageSize);
  }
  
  async findById(id: string) : Promise<TreatmentCatalog | null> {
    return await this._treatmentCatalogRepository.findById(id);
  }
  
  async create(data: TreatmentCatalogDto): Promise<TreatmentCatalog> {
    const newData: TreatmentCatalog = {
      ...data,
      id: generateId(), 
    }
    await this._treatmentCatalogRepository.create(newData);
    return newData;
  }

  async update(id: string, data: TreatmentCatalogDto): Promise<TreatmentCatalog | null> {
    const existing = await this._treatmentCatalogRepository.findById(id);
    if (!existing) {
      return null;
    }

    const newData: TreatmentCatalog = {
      ...data,
      id,
    }
    await this._treatmentCatalogRepository.update(newData);
    return newData;
  }

  async delete(id: string) : Promise<void> {
    const existing = await this._treatmentCatalogRepository.findById(id);
    if (!existing) {
      return ;
    }
    return await this._treatmentCatalogRepository.delete(existing);
  }
}
