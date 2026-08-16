import { inject, injectable } from "tsyringe";
import { ITreatmentPlanDetailService } from "../interfaces/treatmentPlanDetail.service.interface";
import { ITreatmentPlanDetailRepository } from "../../Domain/repositories/treatmentPlanDetailRepository.interface";
import { TreatmentPlanDetailDto } from "../dtos/treatmentPlanDetail.dto";
import TreatmentPlanDetail from "../../Domain/entities/treatmentPlanDetail";
import { generateId } from "../../shared/utils/generateId";
import { TreatmentPlanDetailStatus } from "../../Domain/types/treatmentPlanStatus.enum";

@injectable()
export class TreatmentPlanDetailService implements ITreatmentPlanDetailService {
  private readonly _treatmentPlanDetailRepository: ITreatmentPlanDetailRepository;

  constructor(@inject("ITreatmentPlanDetailRepository") repository: ITreatmentPlanDetailRepository) {
    this._treatmentPlanDetailRepository = repository;
  }

  async findAll(page: number = 1, pageSize: number = 100): Promise<TreatmentPlanDetail[]> {
    return await this._treatmentPlanDetailRepository.findAll(page, pageSize);
  }

  async findById(id: string): Promise<TreatmentPlanDetail | null> {
    return await this._treatmentPlanDetailRepository.findById(id);
  }

  async create(data: TreatmentPlanDetailDto): Promise<TreatmentPlanDetail> {
    const newData: TreatmentPlanDetail = new TreatmentPlanDetail({
      ...data,
      id: generateId(),
      status: TreatmentPlanDetailStatus.PENDING
    })
    await this._treatmentPlanDetailRepository.create(newData);
    return newData;
  }

  async update(id: string, data: TreatmentPlanDetailDto): Promise<TreatmentPlanDetail | null> {
    const existing = await this._treatmentPlanDetailRepository.findById(id);
    if (!existing) {
      return null;
    }

    existing.changeTooth(data.toothNumber);
    existing.changeQuantity(data.quantity);
    
    await this._treatmentPlanDetailRepository.update(existing);
    return existing;
  }

  async delete(id: string): Promise<void> {
    const existing = await this._treatmentPlanDetailRepository.findById(id);
    if (!existing) {
      return;
    }
    return await this._treatmentPlanDetailRepository.delete(existing);
  }

  //QUANTITY
  async changeQuantity(
    id: string,
    quantity: number
  ): Promise<TreatmentPlanDetail | null> {

    const existing =
      await this._treatmentPlanDetailRepository.findById(id);

    if (!existing) {
      return null;
    }

    existing.changeQuantity(quantity);

    await this._treatmentPlanDetailRepository.update(existing);

    return existing;
  }

  //DIENTE
  async changeTooth(
    id: string,
    toothNumber: number
  ): Promise<TreatmentPlanDetail | null> {

    const existing =
      await this._treatmentPlanDetailRepository.findById(id);

    if (!existing) {
      return null;
    }

    existing.changeTooth(toothNumber);

    await this._treatmentPlanDetailRepository.update(existing);

    return existing;
  }

  //STATUS
  async start(
    id: string
  ): Promise<TreatmentPlanDetail | null> {

    const existing =
      await this._treatmentPlanDetailRepository.findById(id);

    if (!existing) {
      return null;
    }

    existing.start();

    await this._treatmentPlanDetailRepository.update(existing);

    return existing;
  }

  async complete(
    id: string
  ): Promise<TreatmentPlanDetail | null> {

    const existing =
      await this._treatmentPlanDetailRepository.findById(id);

    if (!existing) {
      return null;
    }

    existing.complete();

    await this._treatmentPlanDetailRepository.update(existing);

    return existing;
  }

  async cancel(
    id: string
  ): Promise<TreatmentPlanDetail | null> {

    const existing =
      await this._treatmentPlanDetailRepository.findById(id);

    if (!existing) {
      return null;
    }

    existing.cancel();

    await this._treatmentPlanDetailRepository.update(existing);

    return existing;
  }
}
