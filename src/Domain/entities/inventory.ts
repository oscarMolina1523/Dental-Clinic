import BaseModel from "./base.model";

export default class Inventory extends BaseModel {
  productId: string;
  private currentStock: number;
  minimumStock: number;

  constructor({
    id,
    productId,
    currentStock,
    minimumStock,
  }: {
    id: string;
    productId: string;
    currentStock: number;
    minimumStock: number;
  }) {
    super(id);
    this.productId = productId;
    this.currentStock = currentStock;
    this.minimumStock = minimumStock;
  }

  //obtener cantidad de stock actual
  get quantity(): number {
    return this.currentStock;
  }

  //incrementar la cantidad de stock qeu tenemos
  increase(quantity: number): void {

    if (quantity <= 0) {
      throw new Error(
        "La cantidad debe ser mayor que cero"
      );
    }

    this.currentStock += quantity;
  }

  //disminuir la cantidad de stock
  decrease(quantity: number): void {

    if (quantity <= 0) {
      throw new Error(
        "La cantidad debe ser mayor que cero"
      );
    }

    if (quantity > this.currentStock) {
      throw new Error(
        "No hay suficiente inventario"
      );
    }

    this.currentStock -= quantity;
  }

}
