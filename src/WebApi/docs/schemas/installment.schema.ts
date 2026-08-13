export const InstallmentSchemas = {
  InstallmentRequest: {
    type: "object",
    required: [
      
        "paymentPlanId",
      
        "installmentNumber",
      
        "dueDate",
      
        "amount",
      
        "lateFeeAmount",
      
        "paidAmount",
      
        "status"
      
    ],
    properties: {
      
      paymentPlanId: { type: "string" },
      
      installmentNumber: { type: "number" },
      
      dueDate: { type: "string" },
      
      amount: { type: "number" },
      
      lateFeeAmount: { type: "number" },
      
      paidAmount: { type: "number" },
      
      status: { type: "string" },
      
    }
  },

  Installment: {
    type: "object",
    properties: {
      id: { type: "string" },
      
      paymentPlanId: { type: "string" },
      
      installmentNumber: { type: "number" },
      
      dueDate: { type: "string" },
      
      amount: { type: "number" },
      
      lateFeeAmount: { type: "number" },
      
      paidAmount: { type: "number" },
      
      status: { type: "string" },
      
    }
  }
};
