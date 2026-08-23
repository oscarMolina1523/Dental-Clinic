import { inject, injectable } from "tsyringe";
import { IDentalChartDetailService } from "../interfaces/dentalChartDetail.service.interface";
import { IDentalChartDetailRepository } from "../../Domain/repositories/dentalChartDetailRepository.interface";
import { DentalChartDetailDto } from "../dtos/dentalChartDetail.dto";
import DentalChartDetail from "../../Domain/entities/dentalChartDetail";
import { generateId } from "../../shared/utils/generateId";
import { DentalChartDetailsStatus } from "../../Domain/types/dentalChartDetailsStatus.enum";

@injectable()
export class DentalChartDetailService implements IDentalChartDetailService {
  private readonly _dentalChartDetailRepository: IDentalChartDetailRepository;

  constructor(@inject("IDentalChartDetailRepository") repository: IDentalChartDetailRepository) {
    this._dentalChartDetailRepository = repository;
  }
  
  async findAll(page: number = 1, pageSize: number = 100): Promise<DentalChartDetail[]> {
    return await this._dentalChartDetailRepository.findAll(page, pageSize);
  }
  
  async findById(id: string) : Promise<DentalChartDetail | null> {
    return await this._dentalChartDetailRepository.findById(id);
  }
  
  async create(data: DentalChartDetailDto): Promise<DentalChartDetail> {
    const newData: DentalChartDetail = new DentalChartDetail({
      ...data,
      id: generateId(), 
    })
    await this._dentalChartDetailRepository.create(newData);
    return newData;
  }

  async update(id: string, data: DentalChartDetailDto): Promise<DentalChartDetail | null> {
    const existing = await this._dentalChartDetailRepository.findById(id);
    if (!existing) {
      return null;
    }

    existing.update({ toothNumber: data.toothNumber, face: data.face, toothStatus: data.toothStatus, notes: data.notes, });

    await this._dentalChartDetailRepository.update(existing);
    return existing;
  }

  // ============================================================
  // UPDATE STATUS
  // ============================================================

  async updateStatus(
    id: string,
    toothStatus: DentalChartDetailsStatus
  ): Promise<DentalChartDetail | null> {

    const existing =
      await this._dentalChartDetailRepository.findById(id);

    if (!existing) {
      return null;
    }

    // ============================================================
    // DOMAIN
    // ============================================================

    existing.updateStatus(toothStatus);

    // ============================================================
    // PERSISTENCE
    // ============================================================

    await this._dentalChartDetailRepository.update(existing);

    return existing;
  }

  // ============================================================
  // UPDATE NOTES
  // ============================================================

  async updateNotes(
    id: string,
    notes: string
  ): Promise<DentalChartDetail | null> {

    const existing =
      await this._dentalChartDetailRepository.findById(id);

    if (!existing) {
      return null;
    }

    // ============================================================
    // DOMAIN
    // ============================================================

    existing.updateNotes(notes);

    // ============================================================
    // PERSISTENCE
    // ============================================================

    await this._dentalChartDetailRepository.update(existing);

    return existing;
  }

  async delete(id: string) : Promise<void> {
    const existing = await this._dentalChartDetailRepository.findById(id);
    if (!existing) {
      return ;
    }
    return await this._dentalChartDetailRepository.delete(existing);
  }
}
