import DentalChart from '../entities/dentalChart';

export interface IDentalChartRepository {
  findAll(page: number, pageSize: number): Promise<DentalChart[]>;
  findById(id: string): Promise<DentalChart | null>;
  create(data: DentalChart): Promise<void>;
  update(data: DentalChart): Promise<void>;
  delete(data: DentalChart): Promise<void>;
}
