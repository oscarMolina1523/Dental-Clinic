import BaseModel from "./base.model";

export default class TreatmentPlan extends BaseModel {
  patientId: string;
  dentistId: string;
  code: string;
  status: string;
  totalAmount: number;
  discount: number;
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
    status: string;
    totalAmount: number;
    discount: number;
    createdAt: Date;
  }) {
    super(id);
    this.patientId = patientId;
    this.dentistId = dentistId;
    this.code = code;
    this.status = status;
    this.totalAmount = totalAmount;
    this.discount = discount;
    this.createdAt = createdAt;
  }
}
