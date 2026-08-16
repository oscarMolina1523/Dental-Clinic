import BaseModel from "./base.model";

export default class PaymentPlan extends BaseModel {
  invoiceId: string;
  totalAmount: number;
  numberOfInstallments: number;
  frequencyDays: number;
  interestRate: number;
  lateFreePercentage: number;
  gracePeriodDays: number;
  status: string;

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
    status: string;
  }) {
    super(id);
    this.invoiceId = invoiceId;
    this.totalAmount = totalAmount;
    this.numberOfInstallments = numberOfInstallments;
    this.frequencyDays = frequencyDays;
    this.interestRate = interestRate;
    this.lateFreePercentage = lateFreePercentage;
    this.gracePeriodDays = gracePeriodDays;
    this.status = status;
  }
}
