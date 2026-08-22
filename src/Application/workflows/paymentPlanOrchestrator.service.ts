import { inject, injectable } from "tsyringe";

import { IInvoiceService } from "../interfaces/invoice.service.interface";
import { IPaymentPlanService } from "../interfaces/paymentPlan.service.interface";
import { IInstallmentService } from "../interfaces/installment.service.interface";
import { IPaymentService } from "../interfaces/payment.service.interface";

import PaymentPlan from "../../Domain/entities/paymentPlan";
import Installment from "../../Domain/entities/installment";
import Payment from "../../Domain/entities/payment";

import { InstallmentStatus } from "../../Domain/types/installmentStatus.enum";
import { PaymentPlanStatus } from "../../Domain/types/paymentPlanStatus.enum";
import { PaymentMethods } from "../../Domain/types/paymentMethods.enum";
import { IPaymentPlanOrchestratorService } from "../interfaces/paymentPlanOrchestrator.interface";

@injectable()
export class PaymentPlanOrchestratorService implements IPaymentPlanOrchestratorService {

    constructor(

        @inject("IInvoiceService")
        private readonly _invoiceService: IInvoiceService,

        @inject("IPaymentPlanService")
        private readonly _paymentPlanService: IPaymentPlanService,

        @inject("IInstallmentService")
        private readonly _installmentService: IInstallmentService,

        @inject("IPaymentService")
        private readonly _paymentService: IPaymentService

    ) { }

    // ============================================================
    // CREATE PAYMENT PLAN
    // ============================================================

    async createPaymentPlan(data: {
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
    }> {

        // ----------------------------------------------------------
        // 1. Buscar factura
        // ----------------------------------------------------------

        const invoice =
            await this._invoiceService.findById(data.invoiceId);

        if (!invoice) {
            throw new Error(
                "La factura no existe"
            );
        }

        // ----------------------------------------------------------
        // 2. Obtener total de la factura
        // ----------------------------------------------------------

        const invoiceTotal =
            invoice.currentTotalAmount;

        if (invoiceTotal <= 0) {
            throw new Error(
                "La factura debe tener un monto mayor que cero"
            );
        }

        // ----------------------------------------------------------
        // 3. Calcular total del plan
        // ----------------------------------------------------------

        //aca se hace un calculo para saber el monto que se va sumar al total original
        //ejemplo :
        // Factura = $1,000
        //Interés = 10%
        //al hacer el calculo el interes daria: 100 y ese monto en la siguientes lineas
        //se le suma al total
        const interestAmount =
            invoiceTotal *
            (data.interestRate / 100);

        const paymentPlanTotal =
            invoiceTotal + interestAmount;

        // ----------------------------------------------------------
        // 4. Crear PaymentPlan
        // ----------------------------------------------------------

        const paymentPlan =
            await this._paymentPlanService.create({

                invoiceId: data.invoiceId,

                totalAmount: paymentPlanTotal,

                numberOfInstallments:
                    data.numberOfInstallments,

                frequencyDays:
                    data.frequencyDays,

                interestRate:
                    data.interestRate,

                lateFreePercentage:
                    data.lateFreePercentage,

                gracePeriodDays:
                    data.gracePeriodDays,

                status: PaymentPlanStatus.PENDING

            });

        // ----------------------------------------------------------
        // 5. Calcular monto de cada cuota
        // ----------------------------------------------------------

        const installmentAmount =
            paymentPlan.installmentAmount;

        // ----------------------------------------------------------
        // 6. Crear cuotas
        // ----------------------------------------------------------

        const installments: Installment[] = [];

        const firstDueDate =
            data.firstDueDate
                ? new Date(data.firstDueDate)
                : new Date();

        for (
            let i = 1;
            i <= data.numberOfInstallments;
            i++
        ) {

            const dueDate = new Date(firstDueDate);

            dueDate.setDate(
                dueDate.getDate() +
                (data.frequencyDays * (i - 1))
            );

            const installment =
                await this._installmentService.create({

                    paymentPlanId:
                        paymentPlan.id,

                    installmentNumber:
                        i,

                    dueDate,

                    amount:
                        installmentAmount,

                    lateFeeAmount:
                        0,

                    paidAmount:
                        0,

                    status:
                        InstallmentStatus.PENDING

                });

            installments.push(installment);
        }

        return {
            paymentPlan,
            installments
        };
    }

    // ============================================================
    // REGISTER PAYMENT
    // ============================================================

    async registerPayment(data: {
        installmentId: string;
        amount: number;
        paymentMethod: PaymentMethods;
        transactionReference: string;
        servedBy: string;
        paymentDate: string;
    }): Promise<{
        payment: Payment;
        installment: Installment;
    }> {

        // ----------------------------------------------------------
        // 1. Buscar cuota
        // ----------------------------------------------------------

        const installment =
            await this._installmentService.findById(
                data.installmentId
            );

        if (!installment) {
            throw new Error(
                "La cuota no existe"
            );
        }

        // ----------------------------------------------------------
        // 2. Obtener plan
        // ----------------------------------------------------------

        const paymentPlan =
            await this._paymentPlanService.findById(
                installment.paymentPlanId
            );

        if (!paymentPlan) {
            throw new Error(
                "El plan de pago asociado no existe"
            );
        }

        // ----------------------------------------------------------
        // 3. Registrar pago en la cuota
        // ----------------------------------------------------------

        const updatedInstallment =
            await this._installmentService.addPayment(
                data.installmentId,
                data.amount
            );

        if (!updatedInstallment) {
            throw new Error(
                "No fue posible actualizar la cuota"
            );
        }

        // ----------------------------------------------------------
        // 4. Registrar Payment
        // ----------------------------------------------------------

        const payment =
            await this._paymentService.create({

                invoice_id:
                    paymentPlan.invoiceId,

                amount:
                    data.amount,

                payment_method:
                    data.paymentMethod,

                transaction_reference:
                    data.transactionReference,

                served_by:
                    data.servedBy,

                payment_date:
                    data.paymentDate,

                installment_id:
                    data.installmentId

            });

        return {
            payment,
            installment: updatedInstallment
        };
    }
}