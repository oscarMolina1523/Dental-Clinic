import BaseModel from "./base.model";

export default class TreatmentPlanDetail extends BaseModel {
  planId: string;
  treatmentId: string;
  toothNumber: number;
  quantity: number;
  unitPrice: number;
  subtotal: number;
  status: string;

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
    status: string;
  }) {
    super(id);
    this.planId = planId;
    this.treatmentId = treatmentId;
    this.toothNumber = toothNumber;
    this.quantity = quantity;
    this.unitPrice = unitPrice;
    this.subtotal = subtotal;
    this.status = status;
  }
}
