import Invoice from "../../Domain/entities/invoice";
import Payment from "../../Domain/entities/payment";
import { 
  AddPaymentToInvoiceDto, 
  CreateInvoiceWithPaymentDto 
} from "../dtos/invoicePayment.dto";

export interface IInvoicePaymentService {
  create(data: CreateInvoiceWithPaymentDto): Promise<{
    invoice: Invoice;
    payment: Payment | null;
  }>;

  addPayment(data: AddPaymentToInvoiceDto): Promise<{
    invoice: Invoice;
    payment: Payment;
  }>;
}