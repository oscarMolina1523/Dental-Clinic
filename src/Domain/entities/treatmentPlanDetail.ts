import { TreatmentPlanDetailStatus } from "../types/treatmentPlanStatus.enum";
import BaseModel from "./base.model";

export default class TreatmentPlanDetail extends BaseModel {
  planId: string;
  treatmentId: string;
  private toothNumber: number;
  private quantity: number;
  private unitPrice: number; //almacena el precio del momento que tenia el tratamiento, asi en el futuro cuando aumente el precio este tendra el de ese momento y no se cambiara
  private subtotal: number;
  private status: TreatmentPlanDetailStatus;

  constructor({
    id,
    planId,
    treatmentId,
    toothNumber,
    quantity,
    unitPrice,
    subtotal,
    status,
  }: {
    id: string;
    planId: string;
    treatmentId: string;
    toothNumber: number;
    quantity: number;
    unitPrice: number;
    subtotal: number;
    status: TreatmentPlanDetailStatus;
  }) {
    super(id);
    if (!planId) {
      throw new Error("El plan de tratamiento es obligatorio");
    }

    if (!treatmentId) {
      throw new Error("El tratamiento es obligatorio");
    }

    if (toothNumber <= 0) {
      throw new Error(
        "El número de diente debe ser mayor que cero"
      );
    }

    if (quantity <= 0) {
      throw new Error(
        "La cantidad debe ser mayor que cero"
      );
    }

    if (unitPrice < 0) {
      throw new Error(
        "El precio unitario no puede ser negativo"
      );
    }

    if (subtotal < 0) {
      throw new Error(
        "El subtotal no puede ser negativo"
      );
    }

    //ponemos esta validacion por si en el futuro 
    //alguien se quiere pasar de lanza y poner un subtotal incorrecto
    const calculatedSubtotal =
      quantity * unitPrice;

    if (subtotal !== calculatedSubtotal) {
      throw new Error(
        "El subtotal no coincide con la cantidad y el precio unitario"
      );
    }

    this.planId = planId;
    this.treatmentId = treatmentId;
    this.toothNumber = toothNumber;
    this.quantity = quantity;
    this.unitPrice = unitPrice;
    this.subtotal = subtotal;
    this.status = status;
  }

  get currentToothNumber(): number {
    return this.toothNumber;
  }

  get currentQuantity(): number {
    return this.quantity;
  }

  get currentUnitPrice(): number {
    return this.unitPrice;
  }

  get currentSubtotal(): number {
    return this.subtotal;
  }

  get currentStatus(): TreatmentPlanDetailStatus {
    return this.status;
  }

  //DINERO
  changeQuantity(quantity: number): void {

    if (quantity <= 0) {
      throw new Error(
        "La cantidad debe ser mayor que cero"
      );
    }

    this.quantity = quantity;

    this.recalculateSubtotal();
  }

  private recalculateSubtotal(): void {

    this.subtotal =
      this.quantity * this.unitPrice;
  }

  //DIENTE
  changeTooth(toothNumber: number): void {

    if (toothNumber <= 0) {
      throw new Error(
        "El número de diente debe ser mayor que cero"
      );
    }

    this.toothNumber = toothNumber;
  }

  //STATUS
  changeStatus(
    status: TreatmentPlanDetailStatus
  ): void {

    if (!this.canChangeStatus(status)) {
      throw new Error(
        `No se puede cambiar el estado de ${this.status} a ${status}`
      );
    }

    this.status = status;
  }

  //evitamos que un estado pase por ejemplo de in progresss a pending 
  //ya que no tiene sentido, asi mismo para cada estado
  private canChangeStatus(
    newStatus: TreatmentPlanDetailStatus
  ): boolean {

    const transitions: Record<
      TreatmentPlanDetailStatus,
      TreatmentPlanDetailStatus[]
    > = {

      [TreatmentPlanDetailStatus.PENDING]: [
        TreatmentPlanDetailStatus.IN_PROGRESS,
        TreatmentPlanDetailStatus.CANCELLED
      ],

      [TreatmentPlanDetailStatus.IN_PROGRESS]: [
        TreatmentPlanDetailStatus.COMPLETED,
        TreatmentPlanDetailStatus.CANCELLED
      ],

      [TreatmentPlanDetailStatus.COMPLETED]: [],

      [TreatmentPlanDetailStatus.CANCELLED]: []
    };

    return transitions[this.status].includes(newStatus);
  }

  start(): void {

    this.changeStatus(
      TreatmentPlanDetailStatus.IN_PROGRESS
    );
  }

  complete(): void {

    this.changeStatus(
      TreatmentPlanDetailStatus.COMPLETED
    );
  }

  cancel(): void {

    this.changeStatus(
      TreatmentPlanDetailStatus.CANCELLED
    );
  }
}
