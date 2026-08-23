import DentalChartDetail from "../../Domain/entities/dentalChartDetail";
import { DentalChartDetailsStatus } from "../../Domain/types/dentalChartDetailsStatus.enum";
import { DentalChartDetailDto } from './../dtos/dentalChartDetail.dto';

export interface IDentalChartDetailService {
  findAll(page: number, pageSize: number): Promise<DentalChartDetail[]>;
  findById(id: string): Promise<DentalChartDetail | null>;
  create(data: DentalChartDetailDto): Promise<DentalChartDetail>;
  update(id: string, data: DentalChartDetailDto): Promise<DentalChartDetail | null>;

  updateStatus(
    id: string,
    toothStatus: DentalChartDetailsStatus
  ): Promise<DentalChartDetail | null>;

  updateNotes(
    id: string,
    notes: string
  ): Promise<DentalChartDetail | null>;
  delete(id: string): Promise<void>;
}
