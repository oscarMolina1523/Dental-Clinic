export const AppointmentSchemas = {
  AppointmentRequest: {
    type: "object",
    required: [
      
        "patientId",
      
        "dentistId",
      
        "startAppointmentTime",
      
        "endAppointmentTime",
      
        "reason",
      
        "status",
      
        "cancelationNotes",
      
        "reminderSent",
      
        "createdAt"
      
    ],
    properties: {
      
      patientId: { type: "string" },
      
      dentistId: { type: "string" },
      
      startAppointmentTime: { type: "string" },
      
      endAppointmentTime: { type: "string" },
      
      reason: { type: "string" },
      
      status: { type: "string" },
      
      cancelationNotes: { type: "string" },
      
      reminderSent: { type: "string" },
      
      createdAt: { type: "string" },
      
    }
  },

  Appointment: {
    type: "object",
    properties: {
      id: { type: "string" },
      
      patientId: { type: "string" },
      
      dentistId: { type: "string" },
      
      startAppointmentTime: { type: "string" },
      
      endAppointmentTime: { type: "string" },
      
      reason: { type: "string" },
      
      status: { type: "string" },
      
      cancelationNotes: { type: "string" },
      
      reminderSent: { type: "string" },
      
      createdAt: { type: "string" },
      
    }
  }
};
