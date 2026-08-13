export const InventoryLoteSchemas = {
  InventoryLoteRequest: {
    type: "object",
    required: [
      
        "productId",
      
        "supplierId",
      
        "loteNumber",
      
        "quantity",
      
        "dueDate",
      
        "entryDate"
      
    ],
    properties: {
      
      productId: { type: "string" },
      
      supplierId: { type: "string" },
      
      loteNumber: { type: "string" },
      
      quantity: { type: "number" },
      
      dueDate: { type: "string" },
      
      entryDate: { type: "string" },
      
    }
  },

  InventoryLote: {
    type: "object",
    properties: {
      id: { type: "string" },
      
      productId: { type: "string" },
      
      supplierId: { type: "string" },
      
      loteNumber: { type: "string" },
      
      quantity: { type: "number" },
      
      dueDate: { type: "string" },
      
      entryDate: { type: "string" },
      
    }
  }
};
