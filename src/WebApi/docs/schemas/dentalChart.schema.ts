export const DentalChartSchemas = {
  DentalChartRequest: {
    type: "object",
    required: [

      "patientId",

      "evaluationDate",

      "dentistId",

      "observations"

    ],
    properties: {

      patientId: { type: "string" },

      evaluationDate: { type: "string" },

      dentistId: { type: "string" },

      observations: { type: "string" },

    }
  },

  DentalChart: {
    type: "object",
    properties: {
      id: { type: "string" },

      patientId: { type: "string" },

      evaluationDate: { type: "string" },

      dentistId: { type: "string" },

      observations: { type: "string" },

    }
  },

  // ============================================================
  // UPDATE OBSERVATIONS
  // ============================================================

  DentalChartObservationsRequest: {
    type: "object",
    required: [
      "observations"
    ],
    properties: {
      observations: {
        type: "string",
        example: "Paciente presenta sensibilidad en pieza 16."
      }
    }
  },

};
