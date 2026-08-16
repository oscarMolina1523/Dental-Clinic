import { TreatmentPlanStatus } from "../types/treatmentPlanStatus.enum";
import BaseModel from "./base.model";

export default class TreatmentPlan extends BaseModel {
  patientId: string;
  dentistId: string;
  code: string;
  private status: TreatmentPlanStatus;
  private totalAmount: number; // Subtotal de todos los TreatmentPlanDetail
  private discount: number;    // Descuento aplicado al plan
  createdAt: Date;

  constructor({
    id,
    patientId,
    dentistId,
    code,
    status,
    totalAmount,
    discount,
    createdAt,
  }: {
    id: string;
    patientId: string;
    dentistId: string;
    code: string;
    status: TreatmentPlanStatus;
    totalAmount: number;
    discount: number;
    createdAt: Date;
  }) {
    super(id);

    if (!patientId) {
      throw new Error("El paciente es obligatorio");
    }

    if (!dentistId) {
      throw new Error("El odontólogo es obligatorio");
    }

    if (!code) {
      throw new Error("El código del plan es obligatorio");
    }

    if (totalAmount < 0) {
      throw new Error("El subtotal no puede ser negativo");
    }

    if (discount < 0) {
      throw new Error("El descuento no puede ser negativo");
    }

    if (discount > totalAmount) {
      throw new Error(
        "El descuento no puede superar el subtotal"
      );
    }

    this.patientId = patientId;
    this.dentistId = dentistId;
    this.code = code;
    this.status = status;
    this.totalAmount = totalAmount;
    this.discount = discount;
    this.createdAt = createdAt;
  }

  get currentStatus(): TreatmentPlanStatus {
    return this.status;
  }

  //retorna el monto total pero sin descuento por eso es subtotal del total
  get subtotal(): number {
    return this.totalAmount;
  }

  //descuento aplicado actualmente
  get currentDiscount(): number {
    return this.discount;
  }

  //retorna el verdadero total con el descuento hecho
  get finalAmount(): number {
    return this.totalAmount - this.discount;
  }

  // Actualizar subtotal calculado desde los detalles
  setSubtotal(amount: number): void {
    if (amount < 0) {
      throw new Error(
        "El subtotal no puede ser negativo"
      );
    }

    if (this.discount > amount) {
      throw new Error(
        "El subtotal no puede ser menor que el descuento aplicado"
      );
    }

    this.totalAmount = amount;
  }

  // Aplicar descuento
  applyDiscount(discount: number): void {
    if (discount < 0) {
      throw new Error(
        "El descuento no puede ser negativo"
      );
    }

    if (discount > this.totalAmount) {
      throw new Error(
        "El descuento no puede superar el subtotal"
      );
    }

    this.discount = discount;
  }

  // Eliminar descuento
  removeDiscount(): void {
    this.discount = 0;
  }

  changeStatus(status: TreatmentPlanStatus): void {

    if (!this.canChangeStatus(status)) {
      throw new Error(
        `No se puede cambiar el estado de ${this.status} a ${status}`
      );
    }

    this.status = status;
  }

  //se encarga de validar los estados de donde se puede
  //mover hacia cuales, ej: de draft solo se puede mover a proposed o cancelled
  //asi se evita que se abra un plan que ya esta completado o cancelado
  //y cosas asi
  private canChangeStatus(
    newStatus: TreatmentPlanStatus
  ): boolean {

    const transitions: Record<
      TreatmentPlanStatus,
      TreatmentPlanStatus[]
    > = {

      [TreatmentPlanStatus.DRAFT]: [
        TreatmentPlanStatus.PROPOSED,
        TreatmentPlanStatus.CANCELLED
      ],

      [TreatmentPlanStatus.PROPOSED]: [
        TreatmentPlanStatus.ACCEPTED,
        TreatmentPlanStatus.CANCELLED
      ],

      [TreatmentPlanStatus.ACCEPTED]: [
        TreatmentPlanStatus.IN_PROGRESS,
        TreatmentPlanStatus.CANCELLED
      ],

      [TreatmentPlanStatus.IN_PROGRESS]: [
        TreatmentPlanStatus.COMPLETED,
        TreatmentPlanStatus.CANCELLED
      ],

      [TreatmentPlanStatus.COMPLETED]: [],

      [TreatmentPlanStatus.CANCELLED]: []
    };

    return transitions[this.status].includes(newStatus);
  }

  //operaciones de negocio para ir pasando de un estado a otro
  propose(): void {
    this.changeStatus(
      TreatmentPlanStatus.PROPOSED
    );
  }

  accept(): void {
    this.changeStatus(
      TreatmentPlanStatus.ACCEPTED
    );
  }

  start(): void {
    this.changeStatus(
      TreatmentPlanStatus.IN_PROGRESS
    );
  }

  complete(): void {

    if (this.finalAmount < 0) {
      throw new Error(
        "El monto final no puede ser negativo"
      );
    }

    this.changeStatus(
      TreatmentPlanStatus.COMPLETED
    );
  }

  cancel(): void {

    if (
      this.status === TreatmentPlanStatus.COMPLETED
    ) {
      throw new Error(
        "Un plan completado no puede cancelarse"
      );
    }

    this.status =
      TreatmentPlanStatus.CANCELLED;
  }
}
