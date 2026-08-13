import InventoryMovement from "../../Domain/entities/inventoryMovement";
import { InventoryMovementDto } from './../dtos/inventoryMovement.dto';

export interface IInventoryMovementService {
  findAll(page: number, pageSize: number): Promise<InventoryMovement[]>;
  findById(id: string): Promise<InventoryMovement | null>;
  create(data: InventoryMovementDto): Promise<InventoryMovement>;
  update(id: string, data: InventoryMovementDto): Promise<InventoryMovement | null>;
  delete(id: string): Promise<void>;
}
