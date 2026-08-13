import InventoryLote from '../entities/inventoryLote';

export interface IInventoryLoteRepository {
  findAll(page: number, pageSize: number): Promise<InventoryLote[]>;
  findById(id: string): Promise<InventoryLote | null>;
  create(data: InventoryLote): Promise<void>;
  update(data: InventoryLote): Promise<void>;
  delete(data: InventoryLote): Promise<void>;
}
