import Installment from "../../Domain/entities/installment";
import Payment from "../../Domain/entities/payment";
import PaymentPlan from "../../Domain/entities/paymentPlan";
import { PaymentMethods } from "../../Domain/types/paymentMethods.enum";

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
}