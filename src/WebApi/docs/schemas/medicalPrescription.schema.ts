export const MedicalPrescriptionSchemas = {
  MedicalPrescriptionRequest: {
    type: "object",
    required: [
      
        "clinicalProgressId",
        "patientId",

        "patientFullName",
      
        "dentistId",

        "dentistFullName",
      
        "date",
      
        "generalInstructions"
      
    ],
    properties: {
      
      clinicalProgressId : { type: "string" },
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
      
      clinicalProgressId: { type: "string" },
      patientId: { type: "string" },

      patientFullName: { type: "string" },
      
      dentistId: { type: "string" },

      dentistFullName: { type: "string" },
      
      date: { type: "string" },
      
      generalInstructions: { type: "string" },
      
    }
  }
};
