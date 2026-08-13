export const InventorySchemas = {
  InventoryRequest: {
    type: "object",
    required: [
      
        "productId",
      
        "currentStock",
      
        "minimumStock"
      
    ],
    properties: {
      
      productId: { type: "string" },
      
      currentStock: { type: "number" },
      
      minimumStock: { type: "number" },
      
    }
  },

  Inventory: {
    type: "object",
    properties: {
      id: { type: "string" },
      
      productId: { type: "string" },
      
      currentStock: { type: "number" },
      
      minimumStock: { type: "number" },
      
    }
  }
};
