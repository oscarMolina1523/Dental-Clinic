import { InventoryMovementStatus } from "../../Domain/types/inventoryMovementsStatus.enum";

export interface InventoryMovementDto {
  productId: string;
  productName: string;
  type: InventoryMovementStatus;
  quantity: number;
  userId: string;
  observation: string;
}
