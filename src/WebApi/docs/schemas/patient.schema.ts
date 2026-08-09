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
  }
};
