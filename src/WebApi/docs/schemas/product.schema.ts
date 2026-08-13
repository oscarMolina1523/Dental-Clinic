export const ProductSchemas = {
  ProductRequest: {
    type: "object",
    required: [
      
        "barcode",
      
        "name",
      
        "description",
      
        "category_id",
      
        "measurement_unit_id"
      
    ],
    properties: {
      
      barcode: { type: "string" },
      
      name: { type: "string" },
      
      description: { type: "string" },
      
      category_id: { type: "string" },
      
      measurement_unit_id: { type: "string" },
      
    }
  },

  Product: {
    type: "object",
    properties: {
      id: { type: "string" },
      
      barcode: { type: "string" },
      
      name: { type: "string" },
      
      description: { type: "string" },
      
      category_id: { type: "string" },
      
      measurement_unit_id: { type: "string" },
      
    }
  }
};
