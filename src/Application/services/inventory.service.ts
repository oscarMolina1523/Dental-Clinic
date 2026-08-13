import { inject, injectable } from "tsyringe";
import { IInventoryService } from "../interfaces/inventory.service.interface";
import { IInventoryRepository } from "../../Domain/repositories/inventoryRepository.interface";
import { InventoryDto } from "../dtos/inventory.dto";
import Inventory from "../../Domain/entities/inventory";
import { generateId } from "../../shared/utils/generateId";

@injectable()
export class InventoryService implements IInventoryService {
  private readonly _inventoryRepository: IInventoryRepository;

  constructor(@inject("IInventoryRepository") repository: IInventoryRepository) {
    this._inventoryRepository = repository;
  }
  
  async findAll(page: number = 1, pageSize: number = 100): Promise<Inventory[]> {
    return await this._inventoryRepository.findAll(page, pageSize);
  }
  
  async findById(id: string) : Promise<Inventory | null> {
    return await this._inventoryRepository.findById(id);
  }
  
  async create(data: InventoryDto): Promise<Inventory> {
    const newData: Inventory = {
      ...data,
      id: generateId(), 
    }
    await this._inventoryRepository.create(newData);
    return newData;
  }

  async update(id: string, data: InventoryDto): Promise<Inventory | null> {
    const existing = await this._inventoryRepository.findById(id);
    if (!existing) {
      return null;
    }

    const newData: Inventory = {
      ...data,
      id,
    }
    await this._inventoryRepository.update(newData);
    return newData;
  }

  async delete(id: string) : Promise<void> {
    const existing = await this._inventoryRepository.findById(id);
    if (!existing) {
      return ;
    }
    return await this._inventoryRepository.delete(existing);
  }
}
