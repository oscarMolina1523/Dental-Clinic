export const TreatmentPlanSchemas = {
  TreatmentPlanRequest: {
    type: "object",
    required: [
      
        "patientId",
      
        "dentistId",
      
        "code",
      
        "status",
      
        "totalAmount",
      
        "discount",
      
        "createdAt"
      
    ],
    properties: {
      
      patientId: { type: "string" },
      
      dentistId: { type: "string" },
      
      code: { type: "string" },
      
      status: { type: "string" },
      
      totalAmount: { type: "number" },
      
      discount: { type: "number" },
      
      createdAt: { type: "string" },
      
    }
  },

  TreatmentPlan: {
    type: "object",
    properties: {
      id: { type: "string" },
      
      patientId: { type: "string" },
      
      dentistId: { type: "string" },
      
      code: { type: "string" },
      
      status: { type: "string" },
      
      totalAmount: { type: "number" },
      
      discount: { type: "number" },
      
      createdAt: { type: "string" },
      
    }
  }
};
