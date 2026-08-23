import Inventory from "../../Domain/entities/inventory";
import InventoryLote from "../../Domain/entities/inventoryLote";
import InventoryMovement from "../../Domain/entities/inventoryMovement";

export interface IInventoryOrchestratorService {

  // ============================================================
  // CREATE LOT
  // ============================================================

  createLote(data: {
    productId: string;
    supplierId: string;
    loteNumber: string;
    quantity: number;
    dueDate: Date | null;
    entryDate: Date;
    userId: string;
    observation?: string;
  }): Promise<{
    inventory: Inventory;
    lote: InventoryLote;
    movement: InventoryMovement;
  }>;


  // ============================================================
  // INCREASE LOT
  // ============================================================

  increaseLoteStock(
    loteId: string,
    quantity: number,
    userId: string,
    observation?: string
  ): Promise<{
    inventory: Inventory;
    lote: InventoryLote;
    movement: InventoryMovement;
  }>;


  // ============================================================
  // DECREASE LOT
  // ============================================================

  decreaseLoteStock(
    loteId: string,
    quantity: number,
    userId: string,
    observation?: string
  ): Promise<{
    inventory: Inventory;
    lote: InventoryLote;
    movement: InventoryMovement;
  }>;


  // ============================================================
  // EXPIRED
  // ============================================================

  expireLote(
    loteId: string,
    userId: string,
    observation?: string
  ): Promise<{
    inventory: Inventory;
    lote: InventoryLote;
    movement: InventoryMovement;
  }>;
}