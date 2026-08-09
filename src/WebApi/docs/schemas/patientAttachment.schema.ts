export const PatientAttachmentSchemas = {
  PatientAttachmentRequest: {
    type: "object",
    required: [
      
        "patientId",
      
        "fileType",
      
        "fileUrl",
      
        "fileName",
      
        "description",
      
        "uploadedBy",
      
        "createdAt"
      
    ],
    properties: {
      
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
