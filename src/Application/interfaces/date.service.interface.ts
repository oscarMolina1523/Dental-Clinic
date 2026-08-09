import Date from "../../Domain/entities/date";
import { DateDto } from './../dtos/date.dto';

export interface IDateService {
  findAll(page: number, pageSize: number): Promise<Date[]>;
  findById(id: string): Promise<Date | null>;
  create(data: DateDto): Promise<Date>;
  update(id: string, data: DateDto): Promise<Date | null>;
  delete(id: string): Promise<void>;
}
