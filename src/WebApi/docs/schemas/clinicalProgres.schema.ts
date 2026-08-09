export const ClinicalProgresSchemas = {
  ClinicalProgresRequest: {
    type: "object",
    required: [
      
        "patientId",
      
        "dateId",
      
        "dentistId",
      
        "diagnosis",
      
        "treatmentId",
      
        "observations",
      
        "registrationDate"
      
    ],
    properties: {
      
      patientId: { type: "string" },
      
      dateId: { type: "string" },
      
      dentistId: { type: "string" },
      
      diagnosis: { type: "string" },
      
      treatmentId: { type: "string" },
      
      observations: { type: "string" },
      
      registrationDate: { type: "string" },
      
    }
  },

  ClinicalProgres: {
    type: "object",
    properties: {
      id: { type: "string" },
      
      patientId: { type: "string" },
      
      dateId: { type: "string" },
      
      dentistId: { type: "string" },
      
      diagnosis: { type: "string" },
      
      treatmentId: { type: "string" },
      
      observations: { type: "string" },
      
      registrationDate: { type: "string" },
      
    }
  }
};
