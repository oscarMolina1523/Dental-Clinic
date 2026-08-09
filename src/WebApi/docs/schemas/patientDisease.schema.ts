export const PatientDiseaseSchemas = {
  PatientDiseaseRequest: {
    type: "object",
    required: [
      
        "patientId",
      
        "diseaseId",
      
        "observations"
      
    ],
    properties: {
      
      patientId: { type: "string" },
      
      diseaseId: { type: "string" },
      
      observations: { type: "string" },
      
    }
  },

  PatientDisease: {
    type: "object",
    properties: {
      id: { type: "string" },
      
      patientId: { type: "string" },
      
      diseaseId: { type: "string" },
      
      observations: { type: "string" },
      
    }
  }
};
