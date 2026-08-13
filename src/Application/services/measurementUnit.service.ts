import { inject, injectable } from "tsyringe";
import { IMeasurementUnitService } from "../interfaces/measurementUnit.service.interface";
import { IMeasurementUnitRepository } from "../../Domain/repositories/measurementUnitRepository.interface";
import { MeasurementUnitDto } from "../dtos/measurementUnit.dto";
import MeasurementUnit from "../../Domain/entities/measurementUnit";
import { generateId } from "../../shared/utils/generateId";

@injectable()
export class MeasurementUnitService implements IMeasurementUnitService {
  private readonly _measurementUnitRepository: IMeasurementUnitRepository;

  constructor(@inject("IMeasurementUnitRepository") repository: IMeasurementUnitRepository) {
    this._measurementUnitRepository = repository;
  }
  
  async findAll(page: number = 1, pageSize: number = 100): Promise<MeasurementUnit[]> {
    return await this._measurementUnitRepository.findAll(page, pageSize);
  }
  
  async findById(id: string) : Promise<MeasurementUnit | null> {
    return await this._measurementUnitRepository.findById(id);
  }
  
  async create(data: MeasurementUnitDto): Promise<MeasurementUnit> {
    const newData: MeasurementUnit = {
      ...data,
      id: generateId(), 
    }
    await this._measurementUnitRepository.create(newData);
    return newData;
  }

  async update(id: string, data: MeasurementUnitDto): Promise<MeasurementUnit | null> {
    const existing = await this._measurementUnitRepository.findById(id);
    if (!existing) {
      return null;
    }

    const newData: MeasurementUnit = {
      ...data,
      id,
    }
    await this._measurementUnitRepository.update(newData);
    return newData;
  }

  async delete(id: string) : Promise<void> {
    const existing = await this._measurementUnitRepository.findById(id);
    if (!existing) {
      return ;
    }
    return await this._measurementUnitRepository.delete(existing);
  }
}
