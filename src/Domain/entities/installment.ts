import { InstallmentStatus } from "../types/installmentStatus.enum";
import BaseModel from "./base.model";

export default class Installment extends BaseModel {
  paymentPlanId: string;
  installmentNumber: number;
  dueDate: Date;
  private amount: number;
  private lateFeeAmount: number;//monto por mora
  private paidAmount: number;
  private status: InstallmentStatus;

  constructor({
    id,
    paymentPlanId,
    installmentNumber,
    dueDate,
    amount,
    lateFeeAmount,
    paidAmount,
    status,
  }: {
    id: string;
    paymentPlanId: string;
    installmentNumber: number;
    dueDate: Date;
    amount: number;
    lateFeeAmount: number;
    paidAmount: number;
    status: InstallmentStatus;
  }) {
    super(id);

    if (!paymentPlanId) {
      throw new Error(
        "El plan de pago es obligatorio"
      );
    }

    if (installmentNumber <= 0) {
      throw new Error(
        "El número de cuota debe ser mayor que cero"
      );
    }

    if (!dueDate) {
      throw new Error(
        "La fecha de vencimiento es obligatoria"
      );
    }

    if (amount <= 0) {
      throw new Error(
        "El monto de la cuota debe ser mayor que cero"
      );
    }

    if (lateFeeAmount < 0) {
      throw new Error(
        "El monto de mora no puede ser negativo"
      );
    }

    if (paidAmount < 0) {
      throw new Error(
        "El monto pagado no puede ser negativo"
      );
    }

    if (paidAmount > amount + lateFeeAmount) {
      throw new Error(
        "El monto pagado no puede superar el total de la cuota"
      );
    }

    this.paymentPlanId = paymentPlanId;
    this.installmentNumber = installmentNumber;
    this.dueDate = dueDate;
    this.amount = amount;
    this.lateFeeAmount = lateFeeAmount;
    this.paidAmount = paidAmount;
    this.status = status;
  }

  get currentAmount(): number {
    return this.amount;
  }

  get currentLateFeeAmount(): number {
    return this.lateFeeAmount;
  }

  get currentPaidAmount(): number {
    return this.paidAmount;
  }

  get currentStatus(): InstallmentStatus {
    return this.status;
  }

  // ============================================================
  // CALCULATIONS
  // ============================================================

  /**
   * Total que debe pagarse actualmente por la cuota.
   *
   * Ejemplo:
   *
   * cuota = 250
   * mora = 20
   *
   * total = 270
   */
  get totalAmount(): number {
    return this.amount + this.lateFeeAmount;
  }

  /**
   * Monto que todavía falta pagar.
   */
  get pendingAmount(): number {
    return Math.max(
      0,
      this.totalAmount - this.paidAmount
    );
  }

  /**
   * Determina si la cuota está completamente pagada.
   */
  get isPaid(): boolean {
    return this.paidAmount >= this.totalAmount;
  }

  // ============================================================
  // PAYMENT
  // ============================================================

  addPayment(amount: number): void {

    if (this.status === InstallmentStatus.CANCELLED) {
      throw new Error(
        "No se pueden registrar pagos en una cuota cancelada"
      );
    }

    if (this.status === InstallmentStatus.PAID) {
      throw new Error(
        "La cuota ya está completamente pagada"
      );
    }

    if (amount <= 0) {
      throw new Error(
        "El monto del pago debe ser mayor que cero"
      );
    }

    if (amount > this.pendingAmount) {
      throw new Error(
        "El pago no puede superar el monto pendiente de la cuota"
      );
    }

    this.paidAmount += amount;

    this.updateStatus();
  }

  // ============================================================
  // LATE FEE
  // ============================================================

  addLateFee(amount: number): void {

    if (this.status === InstallmentStatus.CANCELLED) {
      throw new Error(
        "No se puede agregar mora a una cuota cancelada"
      );
    }

    if (this.status === InstallmentStatus.PAID) {
      throw new Error(
        "No se puede agregar mora a una cuota completamente pagada"
      );
    }

    if (amount <= 0) {
      throw new Error(
        "El monto de mora debe ser mayor que cero"
      );
    }

    this.lateFeeAmount += amount;

    this.updateStatus();
  }

  // ============================================================
  // STATUS
  // ============================================================

  markAsOverdue(): void {

    if (this.status === InstallmentStatus.CANCELLED) {
      throw new Error(
        "Una cuota cancelada no puede pasar a mora"
      );
    }

    if (this.status === InstallmentStatus.PAID) {
      throw new Error(
        "Una cuota pagada no puede pasar a mora"
      );
    }

    this.status = InstallmentStatus.OVERDUE;
  }

  cancel(): void {

    if (this.status === InstallmentStatus.CANCELLED) {
      throw new Error(
        "La cuota ya está cancelada"
      );
    }

    if (this.status === InstallmentStatus.PAID) {
      throw new Error(
        "Una cuota pagada no puede cancelarse"
      );
    }

    this.status = InstallmentStatus.CANCELLED;
  }

  // ============================================================
  // BUSINESS RULES
  // ============================================================

  private updateStatus(): void {

    if (this.isPaid) {
      this.status = InstallmentStatus.PAID;
      return;
    }

    if (this.paidAmount > 0) {
      this.status = InstallmentStatus.PARTIALLY_PAID;
      return;
    }

    if (this.status === InstallmentStatus.OVERDUE) {
      return;
    }

    this.status = InstallmentStatus.PENDING;
  }

}
