import InventoryMovement from '../entities/inventoryMovement';

export interface IInventoryMovementRepository {
  findAll(page: number, pageSize: number): Promise<InventoryMovement[]>;
  findById(id: string): Promise<InventoryMovement | null>;
  create(data: InventoryMovement): Promise<void>;
  update(data: InventoryMovement): Promise<void>;
  delete(data: InventoryMovement): Promise<void>;
}
