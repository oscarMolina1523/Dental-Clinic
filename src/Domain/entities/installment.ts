import BaseModel from "./base.model";

export default class Installment extends BaseModel {
  paymentPlanId: string;
  installmentNumber: number;
  dueDate: Date;
  amount: number;
  lateFeeAmount: number;
  paidAmount: number;
  status: string;

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
    status: string;
  }) {
    super(id);
    this.paymentPlanId = paymentPlanId;
    this.installmentNumber = installmentNumber;
    this.dueDate = dueDate;
    this.amount = amount;
    this.lateFeeAmount = lateFeeAmount;
    this.paidAmount = paidAmount;
    this.status = status;
  }
}
