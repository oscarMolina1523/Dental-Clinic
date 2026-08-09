export const MedicalPrescriptionDetailSchemas = {
  MedicalPrescriptionDetailRequest: {
    type: "object",
    required: [
      
        "medicalPrescriptionId",
      
        "medicine",
      
        "dose",
      
        "frequency",
      
        "duration"
      
    ],
    properties: {
      
      medicalPrescriptionId: { type: "string" },
      
      medicine: { type: "string" },
      
      dose: { type: "string" },
      
      frequency: { type: "string" },
      
      duration: { type: "string" },
      
    }
  },

  MedicalPrescriptionDetail: {
    type: "object",
    properties: {
      id: { type: "string" },
      
      medicalPrescriptionId: { type: "string" },
      
      medicine: { type: "string" },
      
      dose: { type: "string" },
      
      frequency: { type: "string" },
      
      duration: { type: "string" },
      
    }
  }
};
