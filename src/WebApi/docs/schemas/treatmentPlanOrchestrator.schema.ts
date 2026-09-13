export const TreatmentPlanOrchestratorSchemas = {

  TreatmentPlanOrchestratorRequest: {
    type: "object",

    required: [
      "patientId",
      "patientFullName",
      "dentistId",
      "dentistFullName",
      "details"
    ],

    properties: {

      patientId: {
        type: "string",
        example: "patient-123"
      },
      patientFullName: {
        type: "string",
        example: "patient-123"
      },

      dentistId: {
        type: "string",
        example: "dentist-456"
      },
      dentistFullName: {
        type: "string",
        example: "dentist-456"
      },

      status: {
        type: "string",
        example: "DRAFT"
      },

      totalAmount: {
        type: "number",
        example: 0
      },

      discount: {
        type: "number",
        example: 0
      },

      details: {
        type: "array",

        items: {
          type: "object",

          required: [
            "planId",
            "treatmentId",
            "treatmentName",
            "toothNumber",
            "quantity",
            "unitPrice",
            "subtotal",
            "status"
          ],

          properties: {

            treatmentId: {
              type: "string",
              example: "treatment-123"
            },
            treatmentName: {
              type: "string",
              example: "treatment-123"
            },

            toothNumber: {
              type: "integer",
              example: 11
            },

            quantity: {
              type: "integer",
              example: 1
            },

            unitPrice: {
              type: "number",
              example: 500
            },

            subtotal: {
              type: "number",
              example: 500
            },

            status: {
              type: "string",
              example: "PENDING"
            }

          }
        }
      }
    }
  },


  TreatmentPlanOrchestratorResponse: {
    type: "object",

    properties: {

      treatmentPlan: {
        type: "object",

        properties: {

          id: {
            type: "string",
            example: "plan-123"
          },

          patientId: {
            type: "string",
            example: "patient-123"
          },
          patientFullName: {
            type: "string",
            example: "patient-123"
          },

          dentistId: {
            type: "string",
            example: "dentist-456"
          },
          dentistFullName: {
            type: "string",
            example: "dentist-456"
          },

          status: {
            type: "string",
            example: "DRAFT"
          },

          totalAmount: {
            type: "number",
            example: 1100
          },

          discount: {
            type: "number",
            example: 0
          },

        }
      },

      details: {
        type: "array",

        items: {
          type: "object",

          properties: {

            id: {
              type: "string",
              example: "detail-123"
            },

            treatmentId: {
              type: "string",
              example: "treatment-123"
            },
            treatmentName: {
              type: "string",
              example: "treatment-123"
            },

            toothNumber: {
              type: "integer",
              example: 11
            },

            quantity: {
              type: "integer",
              example: 1
            },

            unitPrice: {
              type: "number",
              example: 500
            },

            subtotal: {
              type: "number",
              example: 500
            },

            status: {
              type: "string",
              example: "PENDING"
            }

          }
        }
      }
    }
  }
};