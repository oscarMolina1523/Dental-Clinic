export const MeasurementUnitSchemas = {
  MeasurementUnitRequest: {
    type: "object",
    required: [
      
        "name",
      
        "abreviation"
      
    ],
    properties: {
      
      name: { type: "string" },
      
      abreviation: { type: "string" },
      
    }
  },

  MeasurementUnit: {
    type: "object",
    properties: {
      id: { type: "string" },
      
      name: { type: "string" },
      
      abreviation: { type: "string" },
      
    }
  }
};
