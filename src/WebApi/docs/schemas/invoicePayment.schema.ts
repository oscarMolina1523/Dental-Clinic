export const InvoicePaymentSchemas = {

  // ============================================================
  // CREATE INVOICE + OPTIONAL PAYMENT
  // ============================================================

  CreateInvoiceWithPaymentRequest: {
    type: "object",
    required: [
      "invoice"
    ],
    properties: {

      invoice: {
        type: "object",
        required: [
          "patientId",
          "treatmentPlanId",
          "totalAmount"
        ],
        properties: {

          patientId: {
            type: "string",
            example: "patient-123"
          },

          treatmentPlanId: {
            type: "string",
            example: "treatment-plan-123"
          },

          totalAmount: {
            type: "number",
            format: "double",
            example: 1500
          }
        }
      },

      payment: {
        type: "object",
        nullable: true,
        properties: {

          amount: {
            type: "number",
            format: "double",
            example: 500
          },

          payment_method: {
            type: "string",
            example: "CASH"
          },

          transaction_reference: {
            type: "string",
            example: "TXN-93821"
          },

          served_by: {
            type: "string",
            example: "user-123"
          },

          payment_date: {
            type: "string",
            format: "date-time",
            example: "2026-08-16T15:00:00.000Z"
          },

          installment_id: {
            type: "string",
            nullable: true,
            example: "installment-123"
          }
        }
      }
    }
  },


  // ============================================================
  // ADD PAYMENT TO EXISTING INVOICE
  // ============================================================

  AddPaymentToInvoiceRequest: {
    type: "object",
    required: [
      "amount",
      "payment_method",
      "served_by",
      "payment_date"
    ],
    properties: {

      amount: {
        type: "number",
        format: "double",
        example: 300
      },

      payment_method: {
        type: "string",
        example: "CARD"
      },

      transaction_reference: {
        type: "string",
        example: "TXN-93821"
      },

      served_by: {
        type: "string",
        example: "user-123"
      },

      payment_date: {
        type: "string",
        format: "date-time",
        example: "2026-08-20T15:00:00.000Z"
      },

      installment_id: {
        type: "string",
        nullable: true,
        example: "installment-2"
      }
    }
  },


  // ============================================================
  // RESPONSE
  // ============================================================

  InvoicePaymentResponse: {
    type: "object",
    properties: {

      invoice: {
        $ref: "#/components/schemas/Invoice"
      },

      payment: {
        nullable: true,
        oneOf: [
          {
            $ref: "#/components/schemas/Payment"
          },
          {
            type: "null"
          }
        ]
      }
    }
  },


  // ============================================================
  // ADD PAYMENT RESPONSE
  // ============================================================

  InvoicePaymentAddResponse: {
    type: "object",
    properties: {

      invoice: {
        $ref: "#/components/schemas/Invoice"
      },

      payment: {
        $ref: "#/components/schemas/Payment"
      }
    }
  }
};