import Installment from "../../Domain/entities/installment";
import Invoice from "../../Domain/entities/invoice";
import Payment from "../../Domain/entities/payment";
import PaymentPlan from "../../Domain/entities/paymentPlan";
import { PaymentMethods } from "../../Domain/types/paymentMethods.enum";
import { PaymentPlanDetailsResponse } from "../dtos/response/paymentPlanOrchestrator";

export interface IPaymentPlanOrchestratorService {
    createPaymentPlan(data: {
        invoiceId: string;
        numberOfInstallments: number;
        frequencyDays: number;
        interestRate: number;
        lateFreePercentage: number;
        gracePeriodDays: number;
        firstDueDate?: Date;
    }): Promise<{
        paymentPlan: PaymentPlan;
        installments: Installment[];
    }>;

    getPaymentPlanById(
        id: string
    ): Promise<PaymentPlanDetailsResponse>;

    registerPayment(data: {
        installmentId: string;
        amount: number;
        paymentMethod: PaymentMethods;
        transactionReference: string;
        servedBy: string;
        paymentDate: string;
    }): Promise<{
        payment: Payment;
        installment: Installment;
    }>;

    cancelPaymentPlan(
        invoiceId: string
    ): Promise<{
        invoice: Invoice;
        paymentPlan: PaymentPlan;
        installments: Installment[];
    }>;
}