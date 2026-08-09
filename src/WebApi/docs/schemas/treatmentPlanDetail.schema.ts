export const TreatmentPlanDetailSchemas = {
  TreatmentPlanDetailRequest: {
    type: "object",
    required: [
      
        "planId",
      
        "treatmentId",
      
        "toothNumber",
      
        "quantity",
      
        "unitPrice",
      
        "subtotal",
      
        "status"
      
    ],
    properties: {
      
      planId: { type: "string" },
      
      treatmentId: { type: "string" },
      
      toothNumber: { type: "number" },
      
      quantity: { type: "number" },
      
      unitPrice: { type: "number" },
      
      subtotal: { type: "number" },
      
      status: { type: "string" },
      
    }
  },

  TreatmentPlanDetail: {
    type: "object",
    properties: {
      id: { type: "string" },
      
      planId: { type: "string" },
      
      treatmentId: { type: "string" },
      
      toothNumber: { type: "number" },
      
      quantity: { type: "number" },
      
      unitPrice: { type: "number" },
      
      subtotal: { type: "number" },
      
      status: { type: "string" },
      
    }
  }
};
