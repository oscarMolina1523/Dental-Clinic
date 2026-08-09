import { inject, injectable } from "tsyringe";
import { ITreatmentPlanService } from "../interfaces/treatmentPlan.service.interface";
import { ITreatmentPlanRepository } from "../../Domain/repositories/treatmentPlanRepository.interface";
import { TreatmentPlanDto } from "../dtos/treatmentPlan.dto";
import TreatmentPlan from "../../Domain/entities/treatmentPlan";
import { generateId } from "../../shared/utils/generateId";

@injectable()
export class TreatmentPlanService implements ITreatmentPlanService {
  private readonly _treatmentPlanRepository: ITreatmentPlanRepository;

  constructor(@inject("ITreatmentPlanRepository") repository: ITreatmentPlanRepository) {
    this._treatmentPlanRepository = repository;
  }
  
  async findAll(page: number = 1, pageSize: number = 100): Promise<TreatmentPlan[]> {
    return await this._treatmentPlanRepository.findAll(page, pageSize);
  }
  
  async findById(id: string) : Promise<TreatmentPlan | null> {
    return await this._treatmentPlanRepository.findById(id);
  }
  
  async create(data: TreatmentPlanDto): Promise<TreatmentPlan> {
    const newData: TreatmentPlan = {
      ...data,
      id: generateId(), 
    }
    await this._treatmentPlanRepository.create(newData);
    return newData;
  }

  async update(id: string, data: TreatmentPlanDto): Promise<TreatmentPlan | null> {
    const existing = await this._treatmentPlanRepository.findById(id);
    if (!existing) {
      return null;
    }

    const newData: TreatmentPlan = {
      ...data,
      id,
    }
    await this._treatmentPlanRepository.update(newData);
    return newData;
  }

  async delete(id: string) : Promise<void> {
    const existing = await this._treatmentPlanRepository.findById(id);
    if (!existing) {
      return ;
    }
    return await this._treatmentPlanRepository.delete(existing);
  }
}
