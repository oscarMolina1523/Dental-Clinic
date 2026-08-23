import { DentalChartDetailsStatus } from "../../Domain/types/dentalChartDetailsStatus.enum";

export interface DentalChartDetailDto {
  dentalChartId: string;
  toothNumber: number;
  face: string;
  toothStatus: DentalChartDetailsStatus;
  notes: string;
}
