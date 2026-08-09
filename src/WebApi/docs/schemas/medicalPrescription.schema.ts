export const MedicalPrescriptionSchemas = {
  MedicalPrescriptionRequest: {
    type: "object",
    required: [
      
        "patientId",
      
        "dentistId",
      
        "date",
      
        "generalInstructions"
      
    ],
    properties: {
      
      patientId: { type: "string" },
      
      dentistId: { type: "string" },
      
      date: { type: "string" },
      
      generalInstructions: { type: "string" },
      
    }
  },

  MedicalPrescription: {
    type: "object",
    properties: {
      id: { type: "string" },
      
      patientId: { type: "string" },
      
      dentistId: { type: "string" },
      
      date: { type: "string" },
      
      generalInstructions: { type: "string" },
      
    }
  }
};
