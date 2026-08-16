export const InvoiceSchemas = {
  InvoiceRequest: {
    type: "object",
    required: [
      
        "patientId",
      
        "treatmentPlanId",
      
        "invoiceNumber",
      
        "totalAmount",
      
        "paidAmount",
      
        "pendingAmount",
      
        "status"
      
    ],
    properties: {
      
      patientId: { type: "string" },
      
      treatmentPlanId: { type: "string" },
      
      invoiceNumber: { type: "string" },
      
      totalAmount: { type: "number" },
      
      paidAmount: { type: "number" },
      
      pendingAmount: { type: "number" },
      
      status: { type: "string" },
      
    }
  },

  Invoice: {
    type: "object",
    properties: {
      id: { type: "string" },
      
      patientId: { type: "string" },
      
      treatmentPlanId: { type: "string" },
      
      invoiceNumber: { type: "string" },
      
      totalAmount: { type: "number" },
      
      paidAmount: { type: "number" },
      
      pendingAmount: { type: "number" },
      
      status: { type: "string" },
      
    }
  },

  // ============================================================
  // PAYMENT
  // ============================================================

  InvoicePaymentRequest: {
    type: "object",

    required: [
      "amount"
    ],

    properties: {

      amount: {
        type: "number",
        format: "double",
        minimum: 0.01,
        example: 500,
        description: "Monto del pago que se aplicará a la factura."
      }
    }
  },

};
