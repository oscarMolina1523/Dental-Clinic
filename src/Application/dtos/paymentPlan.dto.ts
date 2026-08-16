export interface PaymentPlanDto {
  invoiceId: string;
  totalAmount: number;
  numberOfInstallments: number;
  frequencyDays: number;
  interestRate: number;
  lateFreePercentage: number;
  gracePeriodDays: number;
  status: string;
}
