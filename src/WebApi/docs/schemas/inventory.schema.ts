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

      productName: { type: "string" },

      currentStock: { type: "number" },

      minimumStock: { type: "number" },

    }
  },

  Inventory: {
    type: "object",
    properties: {
      id: { type: "string" },

      productId: { type: "string" },

      productName: { type: "string" },

      currentStock: { type: "number" },

      minimumStock: { type: "number" },

    }
  },

  InventoryQuantityRequest: {
    type: "object",
    required: ["quantity"],
    properties: {
      quantity: {
        type: "number",
        format: "double",
        example: 10,
        minimum: 0.01
      }
    }
  }
};
