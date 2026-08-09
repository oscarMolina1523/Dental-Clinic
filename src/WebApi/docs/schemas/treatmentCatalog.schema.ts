export const TreatmentCatalogSchemas = {
  TreatmentCatalogRequest: {
    type: "object",
    required: [
      
        "code",
      
        "name",
      
        "description",
      
        "basePrice",
      
        "estimatedDurationMinutes",
      
        "active"
      
    ],
    properties: {
      
      code: { type: "string" },
      
      name: { type: "string" },
      
      description: { type: "string" },
      
      basePrice: { type: "number" },
      
      estimatedDurationMinutes: { type: "string" },
      
      active: { type: "string" },
      
    }
  },

  TreatmentCatalog: {
    type: "object",
    properties: {
      id: { type: "string" },
      
      code: { type: "string" },
      
      name: { type: "string" },
      
      description: { type: "string" },
      
      basePrice: { type: "number" },
      
      estimatedDurationMinutes: { type: "string" },
      
      active: { type: "string" },
      
    }
  }
};
