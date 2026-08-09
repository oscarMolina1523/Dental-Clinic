import Date from '../entities/date';

export interface IDateRepository {
  findAll(page: number, pageSize: number): Promise<Date[]>;
  findById(id: string): Promise<Date | null>;
  create(data: Date): Promise<void>;
  update(data: Date): Promise<void>;
  delete(data: Date): Promise<void>;
}
