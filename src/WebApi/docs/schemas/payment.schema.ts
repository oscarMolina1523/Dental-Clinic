export const PaymentSchemas = {
  PaymentRequest: {
    type: "object",
    required: [
      
        "invoice_id",
      
        "amount",
      
        "payment_method",
      
        "transaction_reference",
      
        "served_by",
      
        "payment_date",
      
        "installment_id"
      
    ],
    properties: {
      
      invoice_id: { type: "string" },
      
      amount: { type: "number" },
      
      payment_method: { type: "string" },
      
      transaction_reference: { type: "string" },
      
      served_by: { type: "string" },
      
      payment_date: { type: "string" },
      
      installment_id: { type: "string" },
      
    }
  },

  Payment: {
    type: "object",
    properties: {
      id: { type: "string" },
      
      invoice_id: { type: "string" },
      
      amount: { type: "number" },
      
      payment_method: { type: "string" },
      
      transaction_reference: { type: "string" },
      
      served_by: { type: "string" },
      
      payment_date: { type: "string" },
      
      installment_id: { type: "string" },
      
    }
  }
};
