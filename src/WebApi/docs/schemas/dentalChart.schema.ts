export const DentalChartSchemas = {
  DentalChartRequest: {
    type: "object",
    required: [

      "patientId",
      "clinicalProgressId",

      "evaluationDate",

      "dentistId",

      "observations"

    ],
    properties: {

      clinicalProgressId: { type: "string" },
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

      clinicalProgressId: { type: "string" },
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
