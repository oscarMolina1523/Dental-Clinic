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
  },

  // ============================================================
  // CHANGE QUANTITY
  // ============================================================

  TreatmentPlanDetailQuantityRequest: {
    type: "object",

    required: [
      "quantity"
    ],

    properties: {

      quantity: {
        type: "number",
        minimum: 0,
        exclusiveMinimum: true,
        example: 3,
        description:
          "Nueva cantidad. El subtotal será recalculado automáticamente."
      }
    }
  },


  // ============================================================
  // CHANGE TOOTH
  // ============================================================

  TreatmentPlanDetailToothRequest: {
    type: "object",

    required: [
      "toothNumber"
    ],

    properties: {

      toothNumber: {
        type: "integer",
        minimum: 1,
        example: 16,
        description:
          "Nuevo número de diente."
      }
    }
  }
};
