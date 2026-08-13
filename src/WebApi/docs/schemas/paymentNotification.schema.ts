export const PaymentNotificationSchemas = {
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
      
      installmentId: { type: "string" },
      
      patientId: { type: "string" },
      
      scheduledDate: { type: "string" },
      
      sendAt: { type: "string" },
      
      notificationType: { type: "string" },
      
      channel: { type: "string" },
      
      status: { type: "string" },
      
    }
  },

  PaymentNotification: {
    type: "object",
    properties: {
      id: { type: "string" },
      
      installmentId: { type: "string" },
      
      patientId: { type: "string" },
      
      scheduledDate: { type: "string" },
      
      sendAt: { type: "string" },
      
      notificationType: { type: "string" },
      
      channel: { type: "string" },
      
      status: { type: "string" },
      
    }
  }
};
