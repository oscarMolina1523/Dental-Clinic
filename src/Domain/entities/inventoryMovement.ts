import { InventoryMovementStatus } from "../types/inventoryMovementsStatus.enum";
import BaseModel from "./base.model";

export default class InventoryMovement extends BaseModel {
  productId: string;
  productName: string;
  type: InventoryMovementStatus;
  private quantity: number;
  userId: string;
  observation: string;

  constructor({
    id,
    productId,
    productName,
    type,
    quantity,
    userId,
    observation,
  }: {
    id: string;
    productId: string;
    productName: string;
    type: InventoryMovementStatus;
    quantity: number;
    userId: string;
    observation: string;
  }) {
    super(id);

     if (!productId) {
      throw new Error(
        "El producto es obligatorio"
      );
    }

    if (!type) {
      throw new Error(
        "El tipo de movimiento es obligatorio"
      );
    }

    if (!Number.isFinite(quantity)) {
      throw new Error(
        "La cantidad debe ser un número válido"
      );
    }

    if (quantity <= 0) {
      throw new Error(
        "La cantidad debe ser mayor que cero"
      );
    }

    if (!userId) {
      throw new Error(
        "El usuario es obligatorio"
      );
    }

    if (
      observation !== undefined &&
      observation !== null &&
      typeof observation !== "string"
    ) {
      throw new Error(
        "La observación debe ser un texto válido"
      );
    }

    this.productId = productId;
    this.productName = productName;
    this.type = type;
    this.quantity = quantity;
    this.userId = userId;
    this.observation = observation?.trim() ?? "";
  }

  // ============================================================
  // INFORMATION
  // ============================================================

  get currentQuantity(): number {
    return this.quantity;
  }
}
