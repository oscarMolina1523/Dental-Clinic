import { inject, injectable } from "tsyringe";
import { IInventoryMovementService } from "../interfaces/inventoryMovement.service.interface";
import { IInventoryMovementRepository } from "../../Domain/repositories/inventoryMovementRepository.interface";
import { InventoryMovementDto } from "../dtos/inventoryMovement.dto";
import InventoryMovement from "../../Domain/entities/inventoryMovement";
import { generateId } from "../../shared/utils/generateId";

@injectable()
export class InventoryMovementService implements IInventoryMovementService {
  private readonly _inventoryMovementRepository: IInventoryMovementRepository;

  constructor(@inject("IInventoryMovementRepository") repository: IInventoryMovementRepository) {
    this._inventoryMovementRepository = repository;
  }
  
  async findAll(page: number = 1, pageSize: number = 100): Promise<InventoryMovement[]> {
    return await this._inventoryMovementRepository.findAll(page, pageSize);
  }
  
  async findById(id: string) : Promise<InventoryMovement | null> {
    return await this._inventoryMovementRepository.findById(id);
  }
  
  async create(data: InventoryMovementDto): Promise<InventoryMovement> {
    const newData: InventoryMovement = {
      ...data,
      id: generateId(), 
    }
    await this._inventoryMovementRepository.create(newData);
    return newData;
  }

  async update(id: string, data: InventoryMovementDto): Promise<InventoryMovement | null> {
    const existing = await this._inventoryMovementRepository.findById(id);
    if (!existing) {
      return null;
    }

    const newData: InventoryMovement = {
      ...data,
      id,
    }
    await this._inventoryMovementRepository.update(newData);
    return newData;
  }

  async delete(id: string) : Promise<void> {
    const existing = await this._inventoryMovementRepository.findById(id);
    if (!existing) {
      return ;
    }
    return await this._inventoryMovementRepository.delete(existing);
  }
}
