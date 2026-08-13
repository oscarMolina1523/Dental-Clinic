export const SupplierSchemas = {
  SupplierRequest: {
    type: "object",
    required: [
      
        "name",
      
        "contact",
      
        "phone",
      
        "email"
      
    ],
    properties: {
      
      name: { type: "string" },
      
      contact: { type: "string" },
      
      phone: { type: "string" },
      
      email: { type: "string" },
      
    }
  },

  Supplier: {
    type: "object",
    properties: {
      id: { type: "string" },
      
      name: { type: "string" },
      
      contact: { type: "string" },
      
      phone: { type: "string" },
      
      email: { type: "string" },
      
    }
  }
};
