export const PatientSchemas = {
  PatientRequest: {
    type: "object",
    required: [
      
        "patientCode",
      
        "image",
      
        "name",
      
        "lastName",
      
        "idCard",
      
        "birthdate",
      
        "gender",
      
        "phoneNumber",
      
        "email",
      
        "address",
      
        "emergencyContactName",
      
        "emergencyContactPhone",
      
        "maritalStatus",
      
        "active",
      
        "createdAt",
      
        "updatedAt"
      
    ],
    properties: {
      
      patientCode: { type: "string" },
      
      image: { type: "string" },
      
      name: { type: "string" },
      
      lastName: { type: "string" },
      
      idCard: { type: "string" },
      
      birthdate: { type: "string" },
      
      gender: { type: "string" },
      
      phoneNumber: { type: "string" },
      
      email: { type: "string" },
      
      address: { type: "string" },
      
      emergencyContactName: { type: "string" },
      
      emergencyContactPhone: { type: "string" },
      
      maritalStatus: { type: "string" },
      
      active: { type: "string" },
      
      createdAt: { type: "string" },
      
      updatedAt: { type: "string" },
      
    }
  },

  Patient: {
    type: "object",
    properties: {
      id: { type: "string" },
      
      patientCode: { type: "string" },
      
      image: { type: "string" },
      
      name: { type: "string" },
      
      lastName: { type: "string" },
      
      idCard: { type: "string" },
      
      birthdate: { type: "string" },
      
      gender: { type: "string" },
      
      phoneNumber: { type: "string" },
      
      email: { type: "string" },
      
      address: { type: "string" },
      
      emergencyContactName: { type: "string" },
      
      emergencyContactPhone: { type: "string" },
      
      maritalStatus: { type: "string" },
      
      active: { type: "string" },
      
      createdAt: { type: "string" },
      
      updatedAt: { type: "string" },
      
    }
  },

  ChangePhoneNumberRequest: {
    type: "object",
    required: [
      "phoneNumber"
    ],
    properties: {
      phoneNumber: {
        type: "string",
        example: "+50588888888"
      }
    }
  },

  ChangeEmailRequest: {
    type: "object",
    required: [
      "email"
    ],
    properties: {
      email: {
        type: "string",
        format: "email",
        example: "patient@example.com"
      }
    }
  },

  ChangeAddressRequest: {
    type: "object",
    required: [
      "address"
    ],
    properties: {
      address: {
        type: "string",
        example: "Jinotepe, Carazo"
      }
    }
  },

  EmergencyContactRequest: {
    type: "object",
    required: [
      "name",
      "phone"
    ],
    properties: {

      name: {
        type: "string",
        example: "Juan Molina"
      },

      phone: {
        type: "string",
        example: "+50587777777"
      }
    }
  },

  ChangeImageRequest: {
    type: "object",
    required: [
      "image"
    ],
    properties: {
      image: {
        type: "string",
        example: "https://example.com/patient.jpg"
      }
    }
  }
};
