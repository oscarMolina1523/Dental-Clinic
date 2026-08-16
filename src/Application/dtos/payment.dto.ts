import { PaymentMethods } from "../../Domain/types/paymentMethods.enum";

export interface PaymentDto {
  invoice_id: string;
  amount: number;
  payment_method: PaymentMethods;
  transaction_reference: string;
  served_by: string;
  payment_date: string;
  installment_id: string;
}
