export const PaymentNotificationSchemas = {

  // ============================================================
  // CREATE / UPDATE
  // ============================================================

  PaymentNotificationRequest: {
    type: "object",
    required: [
      "installmentId",
      "patientId",
      "scheduledDate",
      "sendAt",
      "notificationType",
      "channel",
      "status"
    ],
    properties: {

      installmentId: {
        type: "string",
        example: "a8f32c91d4e56781"
      },

      patientId: {
        type: "string",
        example: "f535be14eb026967"
      },

      scheduledDate: {
        type: "string",
        format: "date-time",
        example: "2026-08-25T00:00:00.000Z"
      },

      sendAt: {
        type: "string",
        format: "date-time",
        example: "2026-08-24T09:00:00.000Z"
      },

      notificationType: {
        type: "string",
        example: "PAYMENT_REMINDER"
      },

      channel: {
        type: "string",
        example: "WHATSAPP"
      },

      status: {
        type: "string",
        example: "PENDING"
      }
    }
  },

  // ============================================================
  // UPDATE STATUS
  // ============================================================

  PaymentNotificationStatusRequest: {
    type: "object",
    required: [
      "status"
    ],
    properties: {

      status: {
        type: "string",
        example: "SENT"
      }
    }
  },

  // ============================================================
  // RESCHEDULE
  // ============================================================

  PaymentNotificationRescheduleRequest: {
    type: "object",
    required: [
      "sendAt"
    ],
    properties: {

      sendAt: {
        type: "string",
        format: "date-time",
        example: "2026-08-26T10:00:00.000Z"
      }
    }
  },

  // ============================================================
  // RESPONSE
  // ============================================================

  PaymentNotification: {
    type: "object",
    properties: {

      id: {
        type: "string",
        example: "7f42a9d31bc45678"
      },

      installmentId: {
        type: "string",
        example: "a8f32c91d4e56781"
      },

      patientId: {
        type: "string",
        example: "f535be14eb026967"
      },

      scheduledDate: {
        type: "string",
        format: "date-time",
        example: "2026-08-25T00:00:00.000Z"
      },

      sendAt: {
        type: "string",
        format: "date-time",
        example: "2026-08-24T09:00:00.000Z"
      },

      notificationType: {
        type: "string",
        example: "PAYMENT_REMINDER"
      },

      channel: {
        type: "string",
        example: "WHATSAPP"
      },

      status: {
        type: "string",
        example: "PENDING"
      }
    }
  }
};