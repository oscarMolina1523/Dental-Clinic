import { inject, injectable } from "tsyringe";
import Invoice from "../../Domain/entities/invoice";
import Payment from "../../Domain/entities/payment";
import { InvoiceStatus } from "../../Domain/types/invoicesStatus.enum";
import { generateId } from "../../shared/utils/generateId";
import { generateEntityCode } from "../../Infrastructure/utils/codeGenerator";
import { AddPaymentToInvoiceDto, CreateInvoiceWithPaymentDto } from "../dtos/invoicePayment.dto";
import { IInvoiceRepository } from "../../Domain/repositories/invoiceRepository.interface";
import { IPaymentRepository } from "../../Domain/repositories/paymentRepository.interface";

@injectable()
export class InvoicePaymentService {

    constructor(
        @inject("IInvoiceRepository")
        private readonly invoiceRepository: IInvoiceRepository,

        @inject("IPaymentRepository")
        private readonly paymentRepository: IPaymentRepository
    ) { }

    // ============================================================
    // CREATE INVOICE + INITIAL PAYMENT
    // ============================================================


    async create(
        data: CreateInvoiceWithPaymentDto
    ): Promise<{
        invoice: Invoice;
        payment: Payment | null;
    }> {

        const { invoice: invoiceData, payment } = data;

        const totalAmount = invoiceData.totalAmount;

        const paidAmount = payment?.amount ?? 0;

        if (paidAmount > totalAmount) {
            throw new Error(
                "El pago inicial no puede superar el total de la factura"
            );
        }

        const pendingAmount =
            totalAmount - paidAmount;

        let status: InvoiceStatus;

        if (paidAmount === 0) {
            status = InvoiceStatus.PENDING;
        }
        else if (paidAmount < totalAmount) {
            status = InvoiceStatus.PARTIALLY_PAID;
        }
        else {
            status = InvoiceStatus.PAID;
        }

        const invoiceCode = generateEntityCode({
            prefix: "INV",
            date: new Date(),
            uniqueId: invoiceData.patientId.substring(0, 8)
        });

        const invoice = new Invoice({
            ...invoiceData,
            id: generateId(),
            invoiceNumber: invoiceCode,
            paidAmount,
            pendingAmount,
            status
        });

        await this.invoiceRepository.create(invoice);

        let createdPayment: Payment | null = null;

        if (payment && payment.amount > 0) {
            //insertar datos completos en la entidad
            createdPayment = new Payment({
                ...payment,
                id: generateId(),
                invoice_id: invoice.id,
                installment_id: payment.installment_id ?? "", // Evita el error de undefined si no es opcional
            });


            //  Pasar la entidad instanciada al repositorio
            await this.paymentRepository.create(createdPayment);
        }

        return {
            invoice,
            payment: createdPayment
        };
    }

    // ============================================================
    // ADD PAYMENT TO EXISTING INVOICE
    // ============================================================

    async addPayment(
        data: AddPaymentToInvoiceDto
    ): Promise<{
        invoice: Invoice;
        payment: Payment;
    }> {

        const invoice =
            await this.invoiceRepository.findById(
                data.invoiceId
            );

        if (!invoice) {
            throw new Error(
                "La factura no existe"
            );
        }

        /*
         * PRIMERO modificamos la entidad Invoice.
         *
         * Aquí Invoice valida:
         *
         * - que no esté cancelada
         * - que el monto sea > 0
         * - que no supere el pendiente
         * - recalcula pendingAmount
         * - recalcula status
         */
        invoice.addPayment(data.amount);

        /*
         * Si llegamos aquí significa que
         * el pago es válido.
         */

        const payment =
            new Payment({
                id: generateId(),

                invoice_id: invoice.id,

                amount: data.amount,

                payment_method:
                    data.payment_method,

                transaction_reference:
                    data.transaction_reference ?? "",

                served_by:
                    data.served_by,

                payment_date:
                    data.payment_date,

                installment_id:
                    data.installment_id ?? ""
            });

        /*
         * Persistimos ambas cosas.
         */

        await this.invoiceRepository.update(
            invoice
        );

        await this.paymentRepository.create(
            payment
        );

        return {
            invoice,
            payment
        };
    }
}