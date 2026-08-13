import Inventory from "../../Domain/entities/inventory";
import { InventoryDto } from './../dtos/inventory.dto';

export interface IInventoryService {
  findAll(page: number, pageSize: number): Promise<Inventory[]>;
  findById(id: string): Promise<Inventory | null>;
  create(data: InventoryDto): Promise<Inventory>;
  update(id: string, data: InventoryDto): Promise<Inventory | null>;
  delete(id: string): Promise<void>;
}
