import { inject, injectable } from "tsyringe";
import { IInventoryLoteService } from "../interfaces/inventoryLote.service.interface";
import { IInventoryLoteRepository } from "../../Domain/repositories/inventoryLoteRepository.interface";
import { InventoryLoteDto } from "../dtos/inventoryLote.dto";
import InventoryLote from "../../Domain/entities/inventoryLote";
import { generateId } from "../../shared/utils/generateId";

@injectable()
export class InventoryLoteService implements IInventoryLoteService {
  private readonly _inventoryLoteRepository: IInventoryLoteRepository;

  constructor(@inject("IInventoryLoteRepository") repository: IInventoryLoteRepository) {
    this._inventoryLoteRepository = repository;
  }
  
  async findAll(page: number = 1, pageSize: number = 100): Promise<InventoryLote[]> {
    return await this._inventoryLoteRepository.findAll(page, pageSize);
  }
  
  async findById(id: string) : Promise<InventoryLote | null> {
    return await this._inventoryLoteRepository.findById(id);
  }
  
  async create(data: InventoryLoteDto): Promise<InventoryLote> {
    const newData: InventoryLote = {
      ...data,
      id: generateId(), 
    }
    await this._inventoryLoteRepository.create(newData);
    return newData;
  }

  async update(id: string, data: InventoryLoteDto): Promise<InventoryLote | null> {
    const existing = await this._inventoryLoteRepository.findById(id);
    if (!existing) {
      return null;
    }

    const newData: InventoryLote = {
      ...data,
      id,
    }
    await this._inventoryLoteRepository.update(newData);
    return newData;
  }

  async delete(id: string) : Promise<void> {
    const existing = await this._inventoryLoteRepository.findById(id);
    if (!existing) {
      return ;
    }
    return await this._inventoryLoteRepository.delete(existing);
  }
}
