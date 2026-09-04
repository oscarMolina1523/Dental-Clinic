import BaseModel from "./base.model";

export default class InventoryLote extends BaseModel {
  productId: string;
  productName: string;
  supplierId: string;
  loteNumber: string;
  private quantity: number;
  dueDate: Date | null;
  entryDate: Date;

  constructor({
    id,
    productId,
    productName,
    supplierId,
    loteNumber,
    quantity,
    dueDate,
    entryDate,
  }: {
    id: string;
    productId: string;
    productName: string;
    supplierId: string;
    loteNumber: string;
    quantity: number;
    dueDate: Date | string | null;
    entryDate: Date | string;
  }) {
    super(id);

    if (!productId) {
      throw new Error(
        "El producto es obligatorio"
      );
    }

    if (!supplierId) {
      throw new Error(
        "El proveedor es obligatorio"
      );
    }

    if (!loteNumber || loteNumber.trim().length === 0) {
      throw new Error(
        "El número de lote es obligatorio"
      );
    }

    if (quantity < 0) {
      throw new Error(
        "La cantidad del lote no puede ser negativa"
      );
    }

    const normalizedEntryDate =
      entryDate instanceof Date
        ? entryDate
        : new Date(entryDate);

    const normalizedDueDate =
      dueDate === null
        ? null
        : dueDate instanceof Date
          ? dueDate
          : new Date(dueDate);

     if (
      isNaN(
        normalizedEntryDate.getTime()
      )
    ) {
      throw new Error(
        "La fecha de entrada no es válida"
      );
    }

    if (!entryDate) {
      throw new Error(
        "La fecha de entrada es obligatoria"
      );
    }

    // Solo validamos dueDate si existe
    if (
      normalizedDueDate !== null &&
      isNaN(
        normalizedDueDate.getTime()
      )
    ) {
      throw new Error(
        "La fecha de vencimiento no es válida"
      );
    }

    // Solo comparamos fechas si existe vencimiento
    if (
      dueDate !== null &&
      dueDate < entryDate
    ) {
      throw new Error(
        "La fecha de vencimiento no puede ser anterior a la fecha de entrada"
      );
    }

    this.productId = productId;
    this.productName = productName;
    this.supplierId = supplierId;
    this.loteNumber = loteNumber;
    this.quantity = quantity;
    this.dueDate = normalizedDueDate;
    this.entryDate = normalizedEntryDate;
  }

  get currentQuantity(): number {
    return this.quantity;
  }

  /**
   * Aumenta la cantidad disponible del lote.
   *
   * Ejemplo:
   *
   * lote = 100
   * increase(50)
   *
   * lote = 150
   */
  increase(quantity: number): void {

    if (quantity <= 0) {
      throw new Error(
        "La cantidad a aumentar debe ser mayor que cero"
      );
    }

    if (!Number.isFinite(quantity)) {
      throw new Error(
        "La cantidad debe ser un número válido"
      );
    }

    this.quantity += quantity;
  }

  /**
   * Disminuye la cantidad disponible del lote.
   *
   * No permite retirar más unidades
   * de las existentes.
   */
  decrease(quantity: number): void {

    if (this.isExpired) {
      throw new Error(
        "No se puede retirar inventario de un lote vencido"
      );
    }


    if (quantity <= 0) {
      throw new Error(
        "La cantidad a disminuir debe ser mayor que cero"
      );
    }

    if (!Number.isFinite(quantity)) {
      throw new Error(
        "La cantidad debe ser un número válido"
      );
    }

    if (quantity > this.quantity) {
      throw new Error(
        "No hay suficiente cantidad disponible en el lote"
      );
    }

    this.quantity -= quantity;
  }

  // ============================================================
  // EXPIRATION
  // ============================================================

  /**
   * Determina si el lote ya está vencido.
   */
  get isExpired(): boolean {

    if (this.dueDate === null) {
      return false;
    }

    return new Date() > this.dueDate;
  }

  /**
   * Determina si el lote todavía está vigente.
   */
  get isValid(): boolean {

    return !this.isExpired;
  }

  /**
   * Determina si el lote está agotado.
   */
  get isEmpty(): boolean {

    return this.quantity === 0;
  }

  /**
   * Determina si el lote tiene existencia disponible.
   */
  get hasStock(): boolean {

    return this.quantity > 0;
  }

  /**
   * Cantidad de días restantes para que expire.
   *
   * Si ya expiró devuelve 0.
   */
  get daysUntilExpiration(): number | null {

    if (this.dueDate === null) {
      return null;
    }

    const now = new Date();

    const difference =
      this.dueDate.getTime() - now.getTime();

    if (difference <= 0) {
      return 0;
    }

    return Math.ceil(
      difference / (1000 * 60 * 60 * 24)
    );
  }
}
