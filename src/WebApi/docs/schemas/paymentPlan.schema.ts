export const PaymentPlanSchemas = {
  PaymentPlanRequest: {
    type: "object",
    required: [
      
        "invoiceId",
      
        "totalAmount",
      
        "numberOfInstallments",
      
        "frequencyDays",
      
        "interestRate",
      
        "lateFreePercentage",
      
        "gracePeriodDays",
      
        "status"
      
    ],
    properties: {
      
      invoiceId: { type: "string" },
      
      totalAmount: { type: "number" },
      
      numberOfInstallments: { type: "number" },
      
      frequencyDays: { type: "number" },
      
      interestRate: { type: "number" },
      
      lateFreePercentage: { type: "number" },
      
      gracePeriodDays: { type: "number" },
      
      status: { type: "string" },
      
    }
  },

  PaymentPlan: {
    type: "object",
    properties: {
      id: { type: "string" },
      
      invoiceId: { type: "string" },
      
      totalAmount: { type: "number" },
      
      numberOfInstallments: { type: "number" },
      
      frequencyDays: { type: "number" },
      
      interestRate: { type: "number" },
      
      lateFreePercentage: { type: "number" },
      
      gracePeriodDays: { type: "number" },
      
      status: { type: "string" },
      
    }
  }
};
