export const UserSchemas = {
  UserRequest: {
    type: "object",
    required: [
      
        "roleId",
      
        "fullName",
      
        "image",
      
        "email",
      
        "password",
      
        "phoneNumber",
      
        "membershipNumber",
      
        "active",
      
        "createdAt",
      
        "updatedAt"
      
    ],
    properties: {
      
      roleId: { type: "string" },
      
      fullName: { type: "string" },
      
      image: { type: "string" },
      
      email: { type: "string" },
      
      password: { type: "string" },
      
      phoneNumber: { type: "string" },
      
      membershipNumber: { type: "string" },
      
      active: { type: "string" },
      
      createdAt: { type: "string" },
      
      updatedAt: { type: "string" },
      
    }
  },

  User: {
    type: "object",
    properties: {
      id: { type: "string" },
      
      roleId: { type: "string" },
      
      fullName: { type: "string" },
      
      image: { type: "string" },
      
      email: { type: "string" },
      
      password: { type: "string" },
      
      phoneNumber: { type: "string" },
      
      membershipNumber: { type: "string" },
      
      active: { type: "string" },
      
      createdAt: { type: "string" },
      
      updatedAt: { type: "string" },
      
    }
  }
};
