import BaseModel from "./base.model";

export default class Invoice extends BaseModel {
  patientId: string;
  treatmentPlanId: string;
  invoiceNumber: string;
  totalAmount: number;
  paidAmount: number;
  pendingAmount: number;
  status: string;

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
    status: string;
  }) {
    super(id);
    this.patientId = patientId;
    this.treatmentPlanId = treatmentPlanId;
    this.invoiceNumber = invoiceNumber;
    this.totalAmount = totalAmount;
    this.paidAmount = paidAmount;
    this.pendingAmount = pendingAmount;
    this.status = status;
  }
}
