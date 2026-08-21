import { PaymentPlanStatus } from "../types/paymentPlanStatus.enum";
import BaseModel from "./base.model";

export default class PaymentPlan extends BaseModel {
  invoiceId: string;
  private totalAmount: number; //total que se pacto a pagar con el porcentaje de interes aplicado
  private numberOfInstallments: number;
  private frequencyDays: number; //cada cuantos dias vence una cuota
  private interestRate: number; //solo guarda el interes pactado
  private lateFreePercentage: number;
  private gracePeriodDays: number;
  private status: PaymentPlanStatus;

  constructor({
    id,
    invoiceId,
    totalAmount,
    numberOfInstallments,
    frequencyDays,
    interestRate,
    lateFreePercentage,
    gracePeriodDays,
    status,
  }: {
    id: string;
    invoiceId: string;
    totalAmount: number;
    numberOfInstallments: number;
    frequencyDays: number;
    interestRate: number;
    lateFreePercentage: number;
    gracePeriodDays: number;
    status: PaymentPlanStatus;
  }) {
    super(id);

    if (!invoiceId) {
      throw new Error(
        "La factura es obligatoria"
      );
    }

    if (totalAmount <= 0) {
      throw new Error(
        "El monto total debe ser mayor que cero"
      );
    }

    if (numberOfInstallments <= 0) {
      throw new Error(
        "Debe existir al menos una cuota"
      );
    }

    if (frequencyDays <= 0) {
      throw new Error(
        "La frecuencia de pago debe ser mayor que cero"
      );
    }

    if (interestRate < 0) {
      throw new Error(
        "La tasa de interés no puede ser negativa"
      );
    }

    if (
      lateFreePercentage < 0 ||
      lateFreePercentage > 100
    ) {
      throw new Error(
        "El porcentaje de tolerancia debe estar entre 0 y 100"
      );
    }

    if (gracePeriodDays < 0) {
      throw new Error(
        "El período de gracia no puede ser negativo"
      );
    }

    this.invoiceId = invoiceId;
    this.totalAmount = totalAmount;
    this.numberOfInstallments = numberOfInstallments;
    this.frequencyDays = frequencyDays;
    this.interestRate = interestRate;
    this.lateFreePercentage = lateFreePercentage;
    this.gracePeriodDays = gracePeriodDays;
    this.status = status;
  }

  get currentTotalAmount(): number {
    return this.totalAmount;
  }

  get currentNumberOfInstallments(): number {
    return this.numberOfInstallments;
  }

  get currentFrequencyDays(): number {
    return this.frequencyDays;
  }

  get currentInterestRate(): number {
    return this.interestRate;
  }

  get currentLateFreePercentage(): number {
    return this.lateFreePercentage;
  }

  get currentGracePeriodDays(): number {
    return this.gracePeriodDays;
  }

  get currentStatus(): PaymentPlanStatus {
    return this.status;
  }

  // ============================================================
  // CALCULATIONS
  // ============================================================

  //retorna el pago total de cada cuota cuanto debe ser
  get installmentAmount(): number {
    return this.totalAmount / this.numberOfInstallments;
  }

  // ============================================================
  // STATUS
  // ============================================================

  activate(): void {
    if (this.status === PaymentPlanStatus.CANCELLED) {
      throw new Error(
        "No se puede activar un plan cancelado"
      );
    }

    if (this.status === PaymentPlanStatus.COMPLETED) {
      throw new Error(
        "El plan ya está completado"
      );
    }

    if (this.status === PaymentPlanStatus.ACTIVE) {
      throw new Error(
        "El plan ya está activo"
      );
    }

    this.status = PaymentPlanStatus.ACTIVE;
  }

  complete(): void {
    if (this.status === PaymentPlanStatus.CANCELLED) {
      throw new Error(
        "Un plan cancelado no puede completarse"
      );
    }

    if (this.status !== PaymentPlanStatus.ACTIVE) {
      throw new Error(
        "Solo un plan activo puede completarse"
      );
    }

    this.status = PaymentPlanStatus.COMPLETED;
  }

  cancel(): void {
    if (this.status === PaymentPlanStatus.CANCELLED) {
      throw new Error(
        "El plan ya está cancelado"
      );
    }

    if (this.status === PaymentPlanStatus.COMPLETED) {
      throw new Error(
        "Un plan completado no puede cancelarse"
      );
    }

    this.status = PaymentPlanStatus.CANCELLED;
  }

  // ============================================================
  // CONFIGURATION
  // ============================================================

  changeNumberOfInstallments(
    numberOfInstallments: number
  ): void {

    this.ensurePending();

    if (numberOfInstallments <= 0) {
      throw new Error(
        "Debe existir al menos una cuota"
      );
    }

    this.numberOfInstallments =
      numberOfInstallments;
  }

  changeFrequency(
    frequencyDays: number
  ): void {

    this.ensurePending();

    if (frequencyDays <= 0) {
      throw new Error(
        "La frecuencia debe ser mayor que cero"
      );
    }

    this.frequencyDays = frequencyDays;
  }

  changeInterestRate(
    interestRate: number
  ): void {

    this.ensurePending();

    if (interestRate < 0) {
      throw new Error(
        "La tasa de interés no puede ser negativa"
      );
    }

    this.interestRate = interestRate;
  }

  changeGracePeriod(
    gracePeriodDays: number
  ): void {

    this.ensurePending();

    if (gracePeriodDays < 0) {
      throw new Error(
        "El período de gracia no puede ser negativo"
      );
    }

    this.gracePeriodDays = gracePeriodDays;
  }

  changeLateFreePercentage(
    percentage: number
  ): void {

    this.ensurePending();

    if (
      percentage < 0 ||
      percentage > 100
    ) {
      throw new Error(
        "El porcentaje debe estar entre 0 y 100"
      );
    }

    this.lateFreePercentage = percentage;
  }


  // ============================================================
  // BUSINESS RULES
  // ============================================================

  private ensurePending(): void {
    if (this.status !== PaymentPlanStatus.PENDING) {
      throw new Error(
        "Las condiciones del plan solo pueden modificarse mientras esté pendiente"
      );
    }
  }
}
