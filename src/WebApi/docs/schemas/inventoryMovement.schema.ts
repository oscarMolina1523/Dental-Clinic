export const InventoryMovementSchemas = {
  InventoryMovementRequest: {
    type: "object",
    required: [
      
        "productId",

        "productName",
      
        "type",
      
        "quantity",
      
        "userId",
      
        "observation"
      
    ],
    properties: {
      
      productId: { type: "string" },

      productName: { type: "string" },
      
      type: { type: "string" },
      
      quantity: { type: "number" },
      
      userId: { type: "string" },
      
      observation: { type: "string" },
      
    }
  },

  InventoryMovement: {
    type: "object",
    properties: {
      id: { type: "string" },
      
      productId: { type: "string" },
      
      productName: { type: "string" },
      
      type: { type: "string" },
      
      quantity: { type: "number" },
      
      userId: { type: "string" },
      
      observation: { type: "string" },
      
    }
  }
};
