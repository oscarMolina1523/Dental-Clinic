import InventoryLote from "../../Domain/entities/inventoryLote";
import { InventoryLoteDto } from './../dtos/inventoryLote.dto';

export interface IInventoryLoteService {
  findAll(page: number, pageSize: number): Promise<InventoryLote[]>;
  findById(id: string): Promise<InventoryLote | null>;
  create(data: InventoryLoteDto): Promise<InventoryLote>;
  update(id: string, data: InventoryLoteDto): Promise<InventoryLote | null>;
  delete(id: string): Promise<void>;
}
