import { inject, injectable } from "tsyringe";
import { ISupplierService } from "../interfaces/supplier.service.interface";
import { ISupplierRepository } from "../../Domain/repositories/supplierRepository.interface";
import { SupplierDto } from "../dtos/supplier.dto";
import Supplier from "../../Domain/entities/supplier";
import { generateId } from "../../shared/utils/generateId";

@injectable()
export class SupplierService implements ISupplierService {
  private readonly _supplierRepository: ISupplierRepository;

  constructor(@inject("ISupplierRepository") repository: ISupplierRepository) {
    this._supplierRepository = repository;
  }
  
  async findAll(page: number = 1, pageSize: number = 100): Promise<Supplier[]> {
    return await this._supplierRepository.findAll(page, pageSize);
  }
  
  async findById(id: string) : Promise<Supplier | null> {
    return await this._supplierRepository.findById(id);
  }
  
  async create(data: SupplierDto): Promise<Supplier> {
    const newData: Supplier = {
      ...data,
      id: generateId(), 
    }
    await this._supplierRepository.create(newData);
    return newData;
  }

  async update(id: string, data: SupplierDto): Promise<Supplier | null> {
    const existing = await this._supplierRepository.findById(id);
    if (!existing) {
      return null;
    }

    const newData: Supplier = {
      ...data,
      id,
    }
    await this._supplierRepository.update(newData);
    return newData;
  }

  async delete(id: string) : Promise<void> {
    const existing = await this._supplierRepository.findById(id);
    if (!existing) {
      return ;
    }
    return await this._supplierRepository.delete(existing);
  }
}
