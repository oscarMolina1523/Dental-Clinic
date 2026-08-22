import { InstallmentStatus } from "../../Domain/types/installmentStatus.enum";

export interface InstallmentDto {
  paymentPlanId: string;
  installmentNumber: number;
  dueDate: Date;
  amount: number;
  lateFeeAmount: number;
  paidAmount: number;
  status: InstallmentStatus;
}
