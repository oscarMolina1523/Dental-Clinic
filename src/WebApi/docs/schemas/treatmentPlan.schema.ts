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
  },

  // ============================================================
  // SET SUBTOTAL
  // ============================================================
  TreatmentPlanSubtotalRequest: {

    type: "object",

    required: [
      "amount"
    ],

    properties: {

      amount: {
        type: "number",
        format: "double",
        minimum: 0,
        example: 1500,
        description:
          "Subtotal calculated from all treatment plan details"
      }

    }
  },


  // ============================================================
  // APPLY DISCOUNT
  // ============================================================

  TreatmentPlanDiscountRequest: {

    type: "object",

    required: [
      "discount"
    ],

    properties: {

      discount: {
        type: "number",
        format: "double",
        minimum: 0,
        example: 100,
        description:
          "Discount amount to apply to the treatment plan"
      }

    }
  }
};
