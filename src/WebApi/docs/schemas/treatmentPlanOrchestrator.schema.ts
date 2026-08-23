export const TreatmentPlanOrchestratorSchemas = {

  TreatmentPlanOrchestratorRequest: {
    type: "object",

    required: [
      "patientId",
      "dentistId",
      "details"
    ],

    properties: {

      patientId: {
        type: "string",
        example: "patient-123"
      },

      dentistId: {
        type: "string",
        example: "dentist-456"
      },

      code: {
        type: "string",
        example: ""
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

      createdAt: {
        type: "string",
        format: "date-time",
        example: "2026-08-23T18:00:00.000Z"
      },

      details: {
        type: "array",

        items: {
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

            planId: {
              type: "string",
              example: ""
            },

            treatmentId: {
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

          dentistId: {
            type: "string",
            example: "dentist-456"
          },

          code: {
            type: "string",
            example: "TRT-20260823-PATIENT"
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

          createdAt: {
            type: "string",
            format: "date-time"
          }

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

            planId: {
              type: "string",
              example: "plan-123"
            },

            treatmentId: {
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