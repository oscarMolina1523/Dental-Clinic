export const PatientAttachmentSchemas = {
  PatientAttachmentRequest: {
    type: "object",
    required: [
      
        "clinicalProgressId",
        "patientId",
      
        "fileType",
      
        "fileUrl",
      
        "fileName",
      
        "description",
      
        "uploadedBy",
      
        "createdAt"
      
    ],
    properties: {
      
      clinicalProgressId: { type: "string" },
      patientId: { type: "string" },
      
      fileType: { type: "string" },
      
      fileUrl: { type: "string" },
      
      fileName: { type: "string" },
      
      description: { type: "string" },
      
      uploadedBy: { type: "string" },
      
      createdAt: { type: "string" },
      
    }
  },

  PatientAttachment: {
    type: "object",
    properties: {
      id: { type: "string" },
      
      clinicalProgressId: { type: "string" },
      patientId: { type: "string" },
      
      fileType: { type: "string" },
      
      fileUrl: { type: "string" },
      
      fileName: { type: "string" },
      
      description: { type: "string" },
      
      uploadedBy: { type: "string" },
      
      createdAt: { type: "string" },
      
    }
  }
};
