export const DentalChartOrchestratorSchemas = {

  // ============================================================
  // CREATE / UPDATE REQUEST
  // ============================================================

  DentalChartOrchestratorRequest: {
    type: "object",
    required: [
      "dentalChart",
      "details"
    ],
    properties: {

      dentalChart: {
        type: "object",
        required: [
          "patientId",
          "evaluationDate",
          "dentistId",
          "observations"
        ],
        properties: {

          patientId: {
            type: "string"
          },

          evaluationDate: {
            type: "string",
            format: "date-time"
          },

          dentistId: {
            type: "string"
          },

          observations: {
            type: "string"
          }

        }
      },

      details: {
        type: "array",
        items: {
          type: "object",
          required: [
            "toothNumber",
            "face",
            "toothStatus",
            "notes"
          ],
          properties: {

            toothNumber: {
              type: "integer"
            },

            face: {
              type: "string"
            },

            toothStatus: {
              type: "string"
            },

            notes: {
              type: "string"
            }

          }
        }
      }

    }
  },

  // ============================================================
  // COMPLETE DENTAL CHART RESPONSE
  // ============================================================

  DentalChartWithDetails: {
    type: "object",
    properties: {

      dentalChart: {
        $ref: "#/components/schemas/DentalChart"
      },

      details: {
        type: "array",
        items: {
          $ref: "#/components/schemas/DentalChartDetail"
        }
      }

    }
  }
};