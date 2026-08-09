export const RoleSchemas = {
  RoleRequest: {
    type: "object",
    required: [
      
        "name",
      
        "description",
      
        "createdAt"
      
    ],
    properties: {
      
      name: { type: "string" },
      
      description: { type: "string" },
      
      createdAt: { type: "string" },
      
    }
  },

  Role: {
    type: "object",
    properties: {
      id: { type: "string" },
      
      name: { type: "string" },
      
      description: { type: "string" },
      
      createdAt: { type: "string" },
      
    }
  }
};
