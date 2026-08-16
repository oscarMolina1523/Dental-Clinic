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
  }, 

  // ============================================================
  // CHANGE PRICE
  // ============================================================

  TreatmentCatalogPriceRequest: {
    type: "object",

    required: [
      "price"
    ],

    properties: {

      price: {
        type: "number",
        format: "double",
        minimum: 0,
        example: 750,
        description: "New base price for the treatment"
      }
    }
  },

  // ============================================================
  // CHANGE DURATION
  // ============================================================

  TreatmentCatalogDurationRequest: {
    type: "object",

    required: [
      "minutes"
    ],

    properties: {

      minutes: {
        type: "integer",
        minimum: 1,
        example: 60,
        description: "New estimated duration in minutes"
      }
    }
  }
};
