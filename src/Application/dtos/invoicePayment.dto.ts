import { PaymentMethods } from "../../Domain/types/paymentMethods.enum";
import { InvoiceDto } from "./invoice.dto";

export interface CreateInvoiceWithPaymentDto {
  invoice: InvoiceDto;

  payment?: {
    amount: number;
    payment_method: PaymentMethods;
    transaction_reference?: string;
    served_by: string;
    payment_date: string;
    installment_id?: string; //hace referncia a cuotas
  };
}

export interface AddPaymentToInvoiceDto {
  invoiceId: string;
  
  amount: number;
  payment_method: PaymentMethods;
  transaction_reference?: string;
  served_by: string;
  payment_date: string;
  installment_id?: string;
}