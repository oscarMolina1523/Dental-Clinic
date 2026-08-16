import { InvoiceStatus } from "../../Domain/types/invoicesStatus.enum";

export interface InvoiceDto {
  patientId: string;
  treatmentPlanId: string;
  invoiceNumber: string;
  totalAmount: number;
  paidAmount: number;
  pendingAmount: number;
  status: InvoiceStatus;
}
