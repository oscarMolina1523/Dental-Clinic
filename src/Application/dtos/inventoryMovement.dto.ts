import { InventoryMovementStatus } from "../../Domain/types/inventoryMovementsStatus.enum";

export interface InventoryMovementDto {
  productId: string;
  type: InventoryMovementStatus;
  quantity: number;
  userId: string;
  observation: string;
}
