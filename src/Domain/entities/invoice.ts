import { InvoiceStatus } from "../types/invoicesStatus.enum";
import BaseModel from "./base.model";

export default class Invoice extends BaseModel {
  patientId: string;
  treatmentPlanId: string;
  invoiceNumber: string;
  private totalAmount: number;
  private paidAmount: number;
  private pendingAmount: number;
  private status: InvoiceStatus;

  constructor({
    id,
    patientId,
    treatmentPlanId,
    invoiceNumber,
    totalAmount,
    paidAmount,
    pendingAmount,
    status,
  }: {
    id: string;
    patientId: string;
    treatmentPlanId: string;
    invoiceNumber: string;
    totalAmount: number;
    paidAmount: number;
    pendingAmount: number;
    status: InvoiceStatus;
  }) {
    super(id);

    if (!patientId) {
      throw new Error(
        "El paciente es obligatorio"
      );
    }

    if (!treatmentPlanId) {
      throw new Error(
        "El plan de tratamiento es obligatorio"
      );
    }

    if (!invoiceNumber) {
      throw new Error(
        "El número de factura es obligatorio"
      );
    }

    if (totalAmount < 0) {
      throw new Error(
        "El total de la factura no puede ser negativo"
      );
    }

    if (paidAmount < 0) {
      throw new Error(
        "El monto pagado no puede ser negativo"
      );
    }

    if (paidAmount > totalAmount) {
      throw new Error(
        "El monto pagado no puede superar el total de la factura"
      );
    }

    const calculatedPending =
      totalAmount - paidAmount;

    if (pendingAmount !== calculatedPending) {
      throw new Error(
        "El monto pendiente no coincide con el total y el monto pagado"
      );
    }

    if (status === InvoiceStatus.PAID && paidAmount !== totalAmount) {
      throw new Error(
        "Una factura pagada debe tener el total pagado"
      );
    }

    if (
      status === InvoiceStatus.PENDING &&
      paidAmount !== 0
    ) {
      throw new Error(
        "Una factura pendiente no puede tener pagos registrados"
      );
    }

    this.patientId = patientId;
    this.treatmentPlanId = treatmentPlanId;
    this.invoiceNumber = invoiceNumber;
    this.totalAmount = totalAmount;
    this.paidAmount = paidAmount;
    this.pendingAmount = pendingAmount;
    this.status = status;
  }

  get currentTotalAmount(): number {
    return this.totalAmount;
  }

  get currentPaidAmount(): number {
    return this.paidAmount;
  }

  get currentPendingAmount(): number {
    return this.pendingAmount;
  }

  get currentStatus(): InvoiceStatus {
    return this.status;
  }

  // ============================================================
  // PAYMENT
  // ============================================================

  addPayment(amount: number): void {

    if (this.status === InvoiceStatus.CANCELLED) {
      throw new Error(
        "No se pueden registrar pagos en una factura cancelada"
      );
    }

    if (amount <= 0) {
      throw new Error(
        "El monto del pago debe ser mayor que cero"
      );
    }

    if (amount > this.pendingAmount) {
      throw new Error(
        "El pago no puede superar el monto pendiente"
      );
    }

    this.paidAmount += amount;

    this.recalculatePending();

    this.updateStatus();
  }


  removePayment(amount: number): void {

    if (this.status === InvoiceStatus.CANCELLED) {
      throw new Error(
        "No se pueden modificar pagos de una factura cancelada"
      );
    }

    if (amount <= 0) {
      throw new Error(
        "El monto a retirar debe ser mayor que cero"
      );
    }

    if (amount > this.paidAmount) {
      throw new Error(
        "No se puede retirar más dinero del que ha sido pagado"
      );
    }

    this.paidAmount -= amount;

    this.recalculatePending();

    this.updateStatus();
  }


  private recalculatePending(): void {

    this.pendingAmount =
      this.totalAmount - this.paidAmount;
  }


  private updateStatus(): void {
    this.status = this.calculateStatus();
  }

  private calculateStatus(): InvoiceStatus {

    if (this.paidAmount === 0) {
      return InvoiceStatus.PENDING;
    }

    if (this.paidAmount < this.totalAmount) {
      return InvoiceStatus.PARTIALLY_PAID;
    }

    return InvoiceStatus.PAID;
  }

  // ============================================================
  // TOTAL
  // ============================================================

  changeTotal(amount: number): void {

    if (this.status === InvoiceStatus.CANCELLED) {
      throw new Error(
        "No se puede modificar una factura cancelada"
      );
    }

    if (amount < 0) {
      throw new Error(
        "El total no puede ser negativo"
      );
    }

    if (amount < this.paidAmount) {
      throw new Error(
        "El nuevo total no puede ser menor que el monto ya pagado"
      );
    }

    this.totalAmount = amount;

    this.recalculatePending();

    this.updateStatus();
  }


  // ============================================================
  // CANCEL
  // ============================================================

  cancel(): void {

    if (this.status === InvoiceStatus.CANCELLED) {
      throw new Error(
        "La factura ya está cancelada"
      );
    }

    if (this.status === InvoiceStatus.PAID) {
      throw new Error(
        "Una factura pagada no puede cancelarse"
      );
    }

    this.status =
      InvoiceStatus.CANCELLED;
  }
}
