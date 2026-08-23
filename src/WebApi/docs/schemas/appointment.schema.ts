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

      patientId: {
        type: "string",
        example: "patient-123"
      },

      dentistId: {
        type: "string",
        example: "dentist-456"
      },

      startAppointmentTime: {
        type: "string",
        format: "date-time",
        example: "2026-08-22T09:00:00.000Z"
      },

      endAppointmentTime: {
        type: "string",
        format: "date-time",
        example: "2026-08-22T09:30:00.000Z"
      },

      reason: {
        type: "string",
        example: "Consulta general"
      },

      status: {
        type: "string",
        example: "SCHEDULED"
      },

      cancelationNotes: {
        type: "string",
        example: ""
      },

      reminderSent: {
        type: "boolean",
        example: false
      },

      createdAt: {
        type: "string",
        format: "date-time",
        example: "2026-08-22T08:00:00.000Z"
      }
    }
  },

  Appointment: {
    type: "object",
    properties: {

      id: {
        type: "string",
        example: "appointment-123"
      },

      patientId: {
        type: "string",
        example: "patient-123"
      },

      dentistId: {
        type: "string",
        example: "dentist-456"
      },

      startAppointmentTime: {
        type: "string",
        format: "date-time",
        example: "2026-08-22T09:00:00.000Z"
      },

      endAppointmentTime: {
        type: "string",
        format: "date-time",
        example: "2026-08-22T09:30:00.000Z"
      },

      reason: {
        type: "string",
        example: "Consulta general"
      },

      status: {
        type: "string",
        example: "SCHEDULED"
      },

      cancelationNotes: {
        type: "string",
        example: ""
      },

      reminderSent: {
        type: "boolean",
        example: false
      },

      createdAt: {
        type: "string",
        format: "date-time",
        example: "2026-08-22T08:00:00.000Z"
      }
    }
  }
};