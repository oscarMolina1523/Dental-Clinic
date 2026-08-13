import BaseModel from "./base.model";

export default class InventoryMovement extends BaseModel {
  productId: string;
  type: string;
  quantity: number;
  userId: string;
  observation: string;

  constructor({
    id,
    productId,
    type,
    quantity,
    userId,
    observation,
  }: {
    id: string;
    productId: string;
    type: string;
    quantity: number;
    userId: string;
    observation: string;
  }) {
    super(id);
    this.productId = productId;
    this.type = type;
    this.quantity = quantity;
    this.userId = userId;
    this.observation = observation;
  }
}
