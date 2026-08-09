import { inject, injectable } from "tsyringe";
import { IDateService } from "../interfaces/date.service.interface";
import { IDateRepository } from "../../Domain/repositories/dateRepository.interface";
import { DateDto } from "../dtos/date.dto";
import Date from "../../Domain/entities/date";
import { generateId } from "../../shared/utils/generateId";

@injectable()
export class DateService implements IDateService {
  private readonly _dateRepository: IDateRepository;

  constructor(@inject("IDateRepository") repository: IDateRepository) {
    this._dateRepository = repository;
  }
  
  async findAll(page: number = 1, pageSize: number = 100): Promise<Date[]> {
    return await this._dateRepository.findAll(page, pageSize);
  }
  
  async findById(id: string) : Promise<Date | null> {
    return await this._dateRepository.findById(id);
  }
  
  async create(data: DateDto): Promise<Date> {
    const newData: Date = {
      ...data,
      id: generateId(), 
    }
    await this._dateRepository.create(newData);
    return newData;
  }

  async update(id: string, data: DateDto): Promise<Date | null> {
    const existing = await this._dateRepository.findById(id);
    if (!existing) {
      return null;
    }

    const newData: Date = {
      ...data,
      id,
    }
    await this._dateRepository.update(newData);
    return newData;
  }

  async delete(id: string) : Promise<void> {
    const existing = await this._dateRepository.findById(id);
    if (!existing) {
      return ;
    }
    return await this._dateRepository.delete(existing);
  }
}
