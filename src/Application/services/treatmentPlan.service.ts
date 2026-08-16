import { inject, injectable } from "tsyringe";
import { ITreatmentPlanService } from "../interfaces/treatmentPlan.service.interface";
import { ITreatmentPlanRepository } from "../../Domain/repositories/treatmentPlanRepository.interface";
import { TreatmentPlanDto } from "../dtos/treatmentPlan.dto";
import TreatmentPlan from "../../Domain/entities/treatmentPlan";
import { generateId } from "../../shared/utils/generateId";
import { TreatmentPlanStatus } from "../../Domain/types/treatmentPlanStatus.enum";
import { generateEntityCode } from "../../Infrastructure/utils/codeGenerator";

@injectable()
export class TreatmentPlanService implements ITreatmentPlanService {
  private readonly _treatmentPlanRepository: ITreatmentPlanRepository;

  constructor(@inject("ITreatmentPlanRepository") repository: ITreatmentPlanRepository) {
    this._treatmentPlanRepository = repository;
  }

  async findAll(page: number = 1, pageSize: number = 100): Promise<TreatmentPlan[]> {
    return await this._treatmentPlanRepository.findAll(page, pageSize);
  }

  async findById(id: string): Promise<TreatmentPlan | null> {
    return await this._treatmentPlanRepository.findById(id);
  }

  async create(data: TreatmentPlanDto): Promise<TreatmentPlan> {
    const now = new Date();
    const treatmentCode = generateEntityCode({
      prefix: "TRT",
      date: new Date(),
      uniqueId: data.patientId.substring(0, 8) // Corta los primeros 8 caracteres del ID del paciente
    });

    const newData: TreatmentPlan = new TreatmentPlan({
      ...data,
      createdAt: now,
      code: treatmentCode,
      id: generateId(),
    })
    await this._treatmentPlanRepository.create(newData);
    return newData;
  }

  async update(id: string, data: TreatmentPlanDto): Promise<TreatmentPlan | null> {
    const existing = await this._treatmentPlanRepository.findById(id);
    if (!existing) {
      return null;
    }

    const newData: TreatmentPlan = new TreatmentPlan({
      ...data,
      id,
    })

    await this._treatmentPlanRepository.update(newData);
    return newData;
  }

  async delete(id: string): Promise<void> {
    const existing = await this._treatmentPlanRepository.findById(id);
    if (!existing) {
      return;
    }
    return await this._treatmentPlanRepository.delete(existing);
  }

  //MODIFICAR ESTADOS

  async changeStatus(
    id: string,
    status: TreatmentPlanStatus
  ): Promise<TreatmentPlan | null> {

    const existing =
      await this._treatmentPlanRepository.findById(id);

    if (!existing) {
      return null;
    }

    existing.changeStatus(status);

    await this._treatmentPlanRepository.update(existing);

    return existing;
  }

  async propose(
    id: string
  ): Promise<TreatmentPlan | null> {

    const existing =
      await this._treatmentPlanRepository.findById(id);

    if (!existing) {
      return null;
    }

    existing.propose();

    await this._treatmentPlanRepository.update(existing);

    return existing;
  }

  async accept(
    id: string
  ): Promise<TreatmentPlan | null> {

    const existing =
      await this._treatmentPlanRepository.findById(id);

    if (!existing) {
      return null;
    }

    existing.accept();

    await this._treatmentPlanRepository.update(existing);

    return existing;
  }

  async start(
    id: string
  ): Promise<TreatmentPlan | null> {

    const existing =
      await this._treatmentPlanRepository.findById(id);

    if (!existing) {
      return null;
    }

    existing.start();

    await this._treatmentPlanRepository.update(existing);

    return existing;
  }

  async complete(
    id: string
  ): Promise<TreatmentPlan | null> {

    const existing =
      await this._treatmentPlanRepository.findById(id);

    if (!existing) {
      return null;
    }

    existing.complete();

    await this._treatmentPlanRepository.update(existing);

    return existing;
  }

  async cancel(
    id: string
  ): Promise<TreatmentPlan | null> {

    const existing =
      await this._treatmentPlanRepository.findById(id);

    if (!existing) {
      return null;
    }

    existing.cancel();

    await this._treatmentPlanRepository.update(existing);

    return existing;
  }

  //RELACIONADO AL DINERO
  async setSubtotal(
    id: string,
    amount: number
  ): Promise<TreatmentPlan | null> {

    const existing =
      await this._treatmentPlanRepository.findById(id);

    if (!existing) {
      return null;
    }

    existing.setSubtotal(amount);

    await this._treatmentPlanRepository.update(existing);

    return existing;
  }

  async applyDiscount(
    id: string,
    discount: number
  ): Promise<TreatmentPlan | null> {

    const existing =
      await this._treatmentPlanRepository.findById(id);

    if (!existing) {
      return null;
    }

    existing.applyDiscount(discount);

    await this._treatmentPlanRepository.update(existing);

    return existing;
  }

  async removeDiscount(
    id: string
  ): Promise<TreatmentPlan | null> {

    const existing =
      await this._treatmentPlanRepository.findById(id);

    if (!existing) {
      return null;
    }

    existing.removeDiscount();

    await this._treatmentPlanRepository.update(existing);

    return existing;
  }
}
