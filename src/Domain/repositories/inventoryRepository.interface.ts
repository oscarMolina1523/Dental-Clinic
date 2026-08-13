import Inventory from '../entities/inventory';

export interface IInventoryRepository {
  findAll(page: number, pageSize: number): Promise<Inventory[]>;
  findById(id: string): Promise<Inventory | null>;
  create(data: Inventory): Promise<void>;
  update(data: Inventory): Promise<void>;
  delete(data: Inventory): Promise<void>;
}
