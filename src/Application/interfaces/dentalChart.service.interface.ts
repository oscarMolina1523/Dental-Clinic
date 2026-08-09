import DentalChart from "../../Domain/entities/dentalChart";
import { DentalChartDto } from './../dtos/dentalChart.dto';

export interface IDentalChartService {
  findAll(page: number, pageSize: number): Promise<DentalChart[]>;
  findById(id: string): Promise<DentalChart | null>;
  create(data: DentalChartDto): Promise<DentalChart>;
  update(id: string, data: DentalChartDto): Promise<DentalChart | null>;
  delete(id: string): Promise<void>;
}
