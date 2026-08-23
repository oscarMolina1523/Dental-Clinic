import DentalChart from "../../Domain/entities/dentalChart";
import DentalChartDetail from "../../Domain/entities/dentalChartDetail";
import { DentalChartDto } from "../dtos/dentalChart.dto";
import { DentalChartDetailDto } from "../dtos/dentalChartDetail.dto";

export interface DentalChartWithDetails {
  dentalChart: DentalChart;
  details: DentalChartDetail[];
}

export interface IDentalChartOrchestratorService {

  // ============================================================
  // GET COMPLETE DENTAL CHART
  // ============================================================

  getById(
    id: string
  ): Promise<DentalChartWithDetails | null>;

  // ============================================================
  // CREATE COMPLETE DENTAL CHART
  // ============================================================

  create(
    data: DentalChartDto,
    details: DentalChartDetailDto[]
  ): Promise<DentalChartWithDetails>;

  // ============================================================
  // UPDATE COMPLETE DENTAL CHART
  // ============================================================

  update(
    id: string,
    data: DentalChartDto,
    details: DentalChartDetailDto[]
  ): Promise<DentalChartWithDetails | null>;

  // ============================================================
  // DELETE COMPLETE DENTAL CHART
  // ============================================================

  delete(
    id: string
  ): Promise<void>;
}