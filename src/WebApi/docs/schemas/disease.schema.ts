export const DiseaseSchemas = {
  DiseaseRequest: {
    type: "object",
    required: [
      
        "name",
      
        "description"
      
    ],
    properties: {
      
      name: { type: "string" },
      
      description: { type: "string" },
      
    }
  },

  Disease: {
    type: "object",
    properties: {
      id: { type: "string" },
      
      name: { type: "string" },
      
      description: { type: "string" },
      
    }
  }
};
