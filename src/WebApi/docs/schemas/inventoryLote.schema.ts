export const InventoryLoteSchemas = {
  InventoryLoteRequest: {
    type: "object",
    required: [
      
        "productId",

        "productName",
      
        "supplierId",
      
        "loteNumber",
      
        "quantity",
      
        "entryDate"
      
    ],
    properties: {
      
      productId: { type: "string" },

      productName: { type: "string" },
      
      supplierId: { type: "string" },
      
      loteNumber: { type: "string" },
      
      quantity: { type: "number" },
      
      dueDate: { type: "string" , nullable: true,},
      
      entryDate: { type: "string" },
      
    }
  },

  InventoryLote: {
    type: "object",
    properties: {
      id: { type: "string" },
      
      productId: { type: "string" },

      productName: { type: "string" },
      
      supplierId: { type: "string" },
      
      loteNumber: { type: "string" },
      
      quantity: { type: "number" },
      
      dueDate: { type: "string" , nullable: true,},
      
      entryDate: { type: "string" },
      
    }
  },

   // ============================================================
  // STOCK
  // ============================================================

  InventoryLoteStockRequest: {

    type: "object",

    required: [
      "quantity"
    ],

    properties: {

      quantity: {
        type: "number",
        format: "double",
        minimum: 0.01,
        example: 25
      }
    }
  },


  // ============================================================
  // QUANTITY RESPONSE
  // ============================================================

  InventoryLoteQuantityResponse: {

    type: "number",

    format: "double",

    example: 75
  },


  // ============================================================
  // BOOLEAN RESPONSE
  // ============================================================

  InventoryLoteBooleanResponse: {

    type: "boolean",

    example: true
  },


  // ============================================================
  // DAYS UNTIL EXPIRATION
  // ============================================================

  InventoryLoteDaysUntilExpirationResponse: {

    type: "integer",

    example: 45
  }

};
