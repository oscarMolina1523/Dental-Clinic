import DentalChartDetail from '../entities/dentalChartDetail';

export interface IDentalChartDetailRepository {
  findAll(page: number, pageSize: number): Promise<DentalChartDetail[]>;
  findById(id: string): Promise<DentalChartDetail | null>;
  create(data: DentalChartDetail): Promise<void>;
  update(data: DentalChartDetail): Promise<void>;
  delete(data: DentalChartDetail): Promise<void>;
}
