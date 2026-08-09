export const DentalChartDetailSchemas = {
  DentalChartDetailRequest: {
    type: "object",
    required: [
      
        "dentalChartId",
      
        "toothNumber",
      
        "face",
      
        "toothStatus",
      
        "notes"
      
    ],
    properties: {
      
      dentalChartId: { type: "string" },
      
      toothNumber: { type: "number" },
      
      face: { type: "string" },
      
      toothStatus: { type: "string" },
      
      notes: { type: "string" },
      
    }
  },

  DentalChartDetail: {
    type: "object",
    properties: {
      id: { type: "string" },
      
      dentalChartId: { type: "string" },
      
      toothNumber: { type: "number" },
      
      face: { type: "string" },
      
      toothStatus: { type: "string" },
      
      notes: { type: "string" },
      
    }
  }
};
