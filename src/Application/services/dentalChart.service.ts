import { inject, injectable } from "tsyringe";
import { IDentalChartService } from "../interfaces/dentalChart.service.interface";
import { IDentalChartRepository } from "../../Domain/repositories/dentalChartRepository.interface";
import { DentalChartDto } from "../dtos/dentalChart.dto";
import DentalChart from "../../Domain/entities/dentalChart";
import { generateId } from "../../shared/utils/generateId";

@injectable()
export class DentalChartService implements IDentalChartService {
  private readonly _dentalChartRepository: IDentalChartRepository;

  constructor(@inject("IDentalChartRepository") repository: IDentalChartRepository) {
    this._dentalChartRepository = repository;
  }
  
  async findAll(page: number = 1, pageSize: number = 100): Promise<DentalChart[]> {
    return await this._dentalChartRepository.findAll(page, pageSize);
  }
  
  async findById(id: string) : Promise<DentalChart | null> {
    return await this._dentalChartRepository.findById(id);
  }
  
  async create(data: DentalChartDto): Promise<DentalChart> {
    const newData: DentalChart = {
      ...data,
      id: generateId(), 
    }
    await this._dentalChartRepository.create(newData);
    return newData;
  }

  async update(id: string, data: DentalChartDto): Promise<DentalChart | null> {
    const existing = await this._dentalChartRepository.findById(id);
    if (!existing) {
      return null;
    }

    const newData: DentalChart = {
      ...data,
      id,
    }
    await this._dentalChartRepository.update(newData);
    return newData;
  }

  async delete(id: string) : Promise<void> {
    const existing = await this._dentalChartRepository.findById(id);
    if (!existing) {
      return ;
    }
    return await this._dentalChartRepository.delete(existing);
  }
}
