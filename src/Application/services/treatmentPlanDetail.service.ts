import { inject, injectable } from "tsyringe";
import { ITreatmentPlanDetailService } from "../interfaces/treatmentPlanDetail.service.interface";
import { ITreatmentPlanDetailRepository } from "../../Domain/repositories/treatmentPlanDetailRepository.interface";
import { TreatmentPlanDetailDto } from "../dtos/treatmentPlanDetail.dto";
import TreatmentPlanDetail from "../../Domain/entities/treatmentPlanDetail";
import { generateId } from "../../shared/utils/generateId";

@injectable()
export class TreatmentPlanDetailService implements ITreatmentPlanDetailService {
  private readonly _treatmentPlanDetailRepository: ITreatmentPlanDetailRepository;

  constructor(@inject("ITreatmentPlanDetailRepository") repository: ITreatmentPlanDetailRepository) {
    this._treatmentPlanDetailRepository = repository;
  }
  
  async findAll(page: number = 1, pageSize: number = 100): Promise<TreatmentPlanDetail[]> {
    return await this._treatmentPlanDetailRepository.findAll(page, pageSize);
  }
  
  async findById(id: string) : Promise<TreatmentPlanDetail | null> {
    return await this._treatmentPlanDetailRepository.findById(id);
  }
  
  async create(data: TreatmentPlanDetailDto): Promise<TreatmentPlanDetail> {
    const newData: TreatmentPlanDetail = {
      ...data,
      id: generateId(), 
    }
    await this._treatmentPlanDetailRepository.create(newData);
    return newData;
  }

  async update(id: string, data: TreatmentPlanDetailDto): Promise<TreatmentPlanDetail | null> {
    const existing = await this._treatmentPlanDetailRepository.findById(id);
    if (!existing) {
      return null;
    }

    const newData: TreatmentPlanDetail = {
      ...data,
      id,
    }
    await this._treatmentPlanDetailRepository.update(newData);
    return newData;
  }

  async delete(id: string) : Promise<void> {
    const existing = await this._treatmentPlanDetailRepository.findById(id);
    if (!existing) {
      return ;
    }
    return await this._treatmentPlanDetailRepository.delete(existing);
  }
}
