import Inventory from "../../Domain/entities/inventory";
import { InventoryDto } from './../dtos/inventory.dto';

export interface IInventoryService {
  findAll(page: number, pageSize: number): Promise<Inventory[]>;
  findById(id: string): Promise<Inventory | null>;

  findByProduct(id: string): Promise<Inventory | null>;
  
  create(data: InventoryDto): Promise<Inventory>;
  update(id: string, data: InventoryDto): Promise<Inventory | null>;
  delete(id: string): Promise<void>;

  increaseStock(
    id: string,
    quantity: number
  ): Promise<Inventory | null>;

  decreaseStock(
    id: string,
    quantity: number
  ): Promise<Inventory | null>
}
