import InventoryLote from "../../Domain/entities/inventoryLote";
import { InventoryLoteDto } from './../dtos/inventoryLote.dto';

export interface IInventoryLoteService {
  findAll(page: number, pageSize: number): Promise<InventoryLote[]>;
  findById(id: string): Promise<InventoryLote | null>;
  create(data: InventoryLoteDto): Promise<InventoryLote>;
  update(id: string, data: InventoryLoteDto): Promise<InventoryLote | null>;
  delete(id: string): Promise<void>;

  // ============================================================
  // STOCK
  // ============================================================

  increaseStock(
    id: string,
    quantity: number
  ): Promise<InventoryLote | null>;

  decreaseStock(
    id: string,
    quantity: number
  ): Promise<InventoryLote | null>;

  // ============================================================
  // INFORMATION
  // ============================================================

  getQuantity(
    id: string
  ): Promise<number | null>;

  isExpired(
    id: string
  ): Promise<boolean | null>;

  isValid(
    id: string
  ): Promise<boolean | null>;

  isEmpty(
    id: string
  ): Promise<boolean | null>;

  hasStock(
    id: string
  ): Promise<boolean | null>;

  getDaysUntilExpiration(
    id: string
  ): Promise<number | null>;
}
