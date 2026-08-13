import { inject, injectable } from "tsyringe";
import { IInstallmentService } from "../interfaces/installment.service.interface";
import { IInstallmentRepository } from "../../Domain/repositories/installmentRepository.interface";
import { InstallmentDto } from "../dtos/installment.dto";
import Installment from "../../Domain/entities/installment";
import { generateId } from "../../shared/utils/generateId";

@injectable()
export class InstallmentService implements IInstallmentService {
  private readonly _installmentRepository: IInstallmentRepository;

  constructor(@inject("IInstallmentRepository") repository: IInstallmentRepository) {
    this._installmentRepository = repository;
  }
  
  async findAll(page: number = 1, pageSize: number = 100): Promise<Installment[]> {
    return await this._installmentRepository.findAll(page, pageSize);
  }
  
  async findById(id: string) : Promise<Installment | null> {
    return await this._installmentRepository.findById(id);
  }
  
  async create(data: InstallmentDto): Promise<Installment> {
    const newData: Installment = {
      ...data,
      id: generateId(), 
    }
    await this._installmentRepository.create(newData);
    return newData;
  }

  async update(id: string, data: InstallmentDto): Promise<Installment | null> {
    const existing = await this._installmentRepository.findById(id);
    if (!existing) {
      return null;
    }

    const newData: Installment = {
      ...data,
      id,
    }
    await this._installmentRepository.update(newData);
    return newData;
  }

  async delete(id: string) : Promise<void> {
    const existing = await this._installmentRepository.findById(id);
    if (!existing) {
      return ;
    }
    return await this._installmentRepository.delete(existing);
  }
}
