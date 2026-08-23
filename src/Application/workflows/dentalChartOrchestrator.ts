import { inject, injectable } from "tsyringe";
import { IDentalChartService } from "../interfaces/dentalChart.service.interface";
import { IDentalChartDetailService } from "../interfaces/dentalChartDetail.service.interface";
import { DentalChartDto } from "../dtos/dentalChart.dto";
import { DentalChartDetailDto } from "../dtos/dentalChartDetail.dto";
import DentalChartDetail from "../../Domain/entities/dentalChartDetail";
import { DentalChartWithDetails, IDentalChartOrchestratorService } from "../interfaces/dentalChartOrchestrator.interface";

@injectable()
export class DentalChartOrchestratorService
  implements IDentalChartOrchestratorService {

  private readonly _dentalChartService: IDentalChartService;

  private readonly _dentalChartDetailService: IDentalChartDetailService;

  constructor(
    @inject("IDentalChartService")
    dentalChartService: IDentalChartService,

    @inject("IDentalChartDetailService")
    dentalChartDetailService: IDentalChartDetailService
  ) {
    this._dentalChartService =
      dentalChartService;

    this._dentalChartDetailService =
      dentalChartDetailService;
  }

  // ============================================================
  // GET COMPLETE DENTAL CHART
  // ============================================================

  async getById(
    id: string
  ): Promise<DentalChartWithDetails | null> {

    const dentalChart =
      await this._dentalChartService.findById(id);

    if (!dentalChart) {
      return null;
    }

    const details =
      await this._dentalChartDetailService.findAll(
        1,
        1000
      );

    const dentalChartDetails =
      details.filter(
        detail =>
          detail.dentalChartId === dentalChart.id
      );

    return {
      dentalChart,
      details: dentalChartDetails
    };
  }

  // ============================================================
  // CREATE COMPLETE DENTAL CHART
  // ============================================================

  async create(
    data: DentalChartDto,
    details: DentalChartDetailDto[]
  ): Promise<DentalChartWithDetails> {

    // ------------------------------------------------------------
    // CREATE DENTAL CHART
    // ------------------------------------------------------------

    const dentalChart =
      await this._dentalChartService.create(data);

    // ------------------------------------------------------------
    // CREATE DETAILS
    // ------------------------------------------------------------

    const createdDetails: DentalChartDetail[] = [];

    for (const detail of details) {

      const createdDetail =
        await this._dentalChartDetailService.create({
          ...detail,
          dentalChartId: dentalChart.id
        });

      createdDetails.push(
        createdDetail
      );
    }

    return {
      dentalChart,
      details: createdDetails
    };
  }

  // ============================================================
  // UPDATE COMPLETE DENTAL CHART
  // ============================================================

  async update(
    id: string,
    data: DentalChartDto,
    details: DentalChartDetailDto[]
  ): Promise<DentalChartWithDetails | null> {

    // ------------------------------------------------------------
    // UPDATE DENTAL CHART
    // ------------------------------------------------------------

    const dentalChart =
      await this._dentalChartService.update(
        id,
        data
      );

    if (!dentalChart) {
      return null;
    }

    // ------------------------------------------------------------
    // GET EXISTING DETAILS
    // ------------------------------------------------------------

    const existingDetails =
      await this._dentalChartDetailService.findAll(
        1,
        1000
      );

    const currentDetails =
      existingDetails.filter(
        detail =>
          detail.dentalChartId === id
      );

    // ------------------------------------------------------------
    // UPDATE / CREATE DETAILS
    // ------------------------------------------------------------

    const updatedDetails: DentalChartDetail[] = [];

    for (const detail of details) {

      /*
       * Si posteriormente el DTO incluye "id",
       * aquí podremos determinar si es UPDATE
       * o CREATE.
       */

      const existingDetail =
        currentDetails.find(
          existing =>
            existing.toothNumber ===
              detail.toothNumber &&
            existing.face ===
              detail.face
        );

      if (existingDetail) {

        const updated =
          await this._dentalChartDetailService.update(
            existingDetail.id,
            {
              ...detail,
              dentalChartId: id
            }
          );

        if (updated) {
          updatedDetails.push(updated);
        }

      } else {

        const created =
          await this._dentalChartDetailService.create({
            ...detail,
            dentalChartId: id
          });

        updatedDetails.push(created);
      }
    }

    return {
      dentalChart,
      details: updatedDetails
    };
  }

  // ============================================================
  // DELETE COMPLETE DENTAL CHART
  // ============================================================

  async delete(
    id: string
  ): Promise<void> {

    const dentalChart =
      await this._dentalChartService.findById(id);

    if (!dentalChart) {
      return;
    }

    // ------------------------------------------------------------
    // GET DETAILS
    // ------------------------------------------------------------

    const details =
      await this._dentalChartDetailService.findAll(
        1,
        1000
      );

    const dentalChartDetails =
      details.filter(
        detail =>
          detail.dentalChartId === id
      );

    // ------------------------------------------------------------
    // DELETE DETAILS
    // ------------------------------------------------------------

    for (const detail of dentalChartDetails) {

      await this._dentalChartDetailService.delete(
        detail.id
      );
    }

    // ------------------------------------------------------------
    // DELETE DENTAL CHART
    // ------------------------------------------------------------

    await this._dentalChartService.delete(id);
  }
}