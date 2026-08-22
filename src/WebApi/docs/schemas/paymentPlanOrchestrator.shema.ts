export const PaymentPlanOrchestratorSchemas = {

  // ============================================================
  // CREATE PAYMENT PLAN
  // ============================================================

  CreatePaymentPlanRequest: {

    type: "object",

    required: [
      "invoiceId",
      "numberOfInstallments",
      "frequencyDays",
      "interestRate",
      "lateFreePercentage",
      "gracePeriodDays"
    ],

    properties: {

      invoiceId: {
        type: "string",
        example: "invoice-123",
        description:
          "ID de la factura que será financiada"
      },

      numberOfInstallments: {
        type: "integer",
        minimum: 1,
        example: 4,
        description:
          "Cantidad de cuotas en las que se dividirá el total"
      },

      frequencyDays: {
        type: "integer",
        minimum: 1,
        example: 30,
        description:
          "Cantidad de días entre cada cuota"
      },

      interestRate: {
        type: "number",
        format: "double",
        minimum: 0,
        example: 10,
        description:
          "Porcentaje de interés pactado para el plan"
      },

      lateFreePercentage: {
        type: "number",
        format: "double",
        minimum: 0,
        maximum: 100,
        example: 50,
        description:
          "Porcentaje mínimo tolerado para evitar determinadas condiciones de mora"
      },

      gracePeriodDays: {
        type: "integer",
        minimum: 0,
        example: 3,
        description:
          "Cantidad de días de gracia después del vencimiento"
      },

      firstDueDate: {
        type: "string",
        format: "date-time",
        nullable: true,
        example: "2026-09-20T00:00:00.000Z",
        description:
          "Fecha de vencimiento de la primera cuota. Si no se envía, será determinada por el servicio"
      }
    }
  },


  // ============================================================
  // CREATE PAYMENT PLAN RESPONSE
  // ============================================================

  CreatePaymentPlanResponse: {

    type: "object",

    properties: {

      paymentPlan: {
        $ref:
          "#/components/schemas/PaymentPlan"
      },

      installments: {

        type: "array",

        items: {
          $ref:
            "#/components/schemas/Installment"
        }
      }
    }
  },


  // ============================================================
  // REGISTER PAYMENT
  // ============================================================

  RegisterInstallmentPaymentRequest: {

    type: "object",

    required: [
      "installmentId",
      "amount",
      "paymentMethod",
      "transactionReference",
      "servedBy",
      "paymentDate"
    ],

    properties: {

      installmentId: {
        type: "string",
        example: "installment-123",
        description:
          "ID de la cuota a la que se aplicará el pago"
      },

      amount: {
        type: "number",
        format: "double",
        minimum: 0.01,
        example: 275,
        description:
          "Monto que se pagará sobre la cuota"
      },

      paymentMethod: {
        type: "string",
        example: "CASH",
        description:
          "Método utilizado para realizar el pago"
      },

      transactionReference: {
        type: "string",
        example: "TXN-93821",
        description:
          "Referencia externa de la transacción"
      },

      servedBy: {
        type: "string",
        example: "user-123",
        description:
          "Usuario que registra o recibe el pago"
      },

      paymentDate: {
        type: "string",
        format: "date-time",
        example: "2026-09-20T15:00:00.000Z",
        description:
          "Fecha en la que se realizó el pago"
      }
    }
  },


  // ============================================================
  // REGISTER PAYMENT RESPONSE
  // ============================================================

  RegisterInstallmentPaymentResponse: {

    type: "object",

    properties: {

      payment: {
        $ref:
          "#/components/schemas/Payment"
      },

      installment: {
        $ref:
          "#/components/schemas/Installment"
      }
    }
  }

};