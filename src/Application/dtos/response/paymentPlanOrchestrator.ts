import Installment from "../../../Domain/entities/installment";
import Invoice from "../../../Domain/entities/invoice";
import Payment from "../../../Domain/entities/payment";
import PaymentPlan from "../../../Domain/entities/paymentPlan";

export interface PaymentPlanDetailsResponse {
    paymentPlan: PaymentPlan;
    invoice: Invoice;
    installments: Installment[];
    payments: Payment[];
}