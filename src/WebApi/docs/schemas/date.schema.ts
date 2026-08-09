export const DateSchemas = {
  DateRequest: {
    type: "object",
    required: [
      
        "patientId",
      
        "dentistId",
      
        "startDateTime",
      
        "endDateTime",
      
        "reason",
      
        "status",
      
        "cancelationNotes",
      
        "reminderSent",
      
        "createdAt"
      
    ],
    properties: {
      
      patientId: { type: "string" },
      
      dentistId: { type: "string" },
      
      startDateTime: { type: "string" },
      
      endDateTime: { type: "string" },
      
      reason: { type: "string" },
      
      status: { type: "string" },
      
      cancelationNotes: { type: "string" },
      
      reminderSent: { type: "string" },
      
      createdAt: { type: "string" },
      
    }
  },

  Date: {
    type: "object",
    properties: {
      id: { type: "string" },
      
      patientId: { type: "string" },
      
      dentistId: { type: "string" },
      
      startDateTime: { type: "string" },
      
      endDateTime: { type: "string" },
      
      reason: { type: "string" },
      
      status: { type: "string" },
      
      cancelationNotes: { type: "string" },
      
      reminderSent: { type: "string" },
      
      createdAt: { type: "string" },
      
    }
  }
};
