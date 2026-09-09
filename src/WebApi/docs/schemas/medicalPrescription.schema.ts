export const MedicalPrescriptionSchemas = {
  MedicalPrescriptionRequest: {
    type: "object",
    required: [
      
        "patientId",

        "patientFullName",
      
        "dentistId",

        "dentistFullName",
      
        "date",
      
        "generalInstructions"
      
    ],
    properties: {
      
      patientId: { type: "string" },

      patientFullName: { type: "string" },
      
      dentistId: { type: "string" },

      dentistFullName: { type: "string" },
      
      date: { type: "string" },
      
      generalInstructions: { type: "string" },
      
    }
  },

  MedicalPrescription: {
    type: "object",
    properties: {
      id: { type: "string" },
      
      patientId: { type: "string" },

      patientFullName: { type: "string" },
      
      dentistId: { type: "string" },

      dentistFullName: { type: "string" },
      
      date: { type: "string" },
      
      generalInstructions: { type: "string" },
      
    }
  }
};
