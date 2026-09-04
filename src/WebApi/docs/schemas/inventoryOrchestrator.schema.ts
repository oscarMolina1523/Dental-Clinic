export const InventoryOrchestratorSchemas = {

  // ============================================================
  // CREATE LOTE
  // ============================================================

  CreateInventoryLoteRequest: {
    type: "object",
    required: [
      "productId",
      "productName",
      "supplierId",
      "loteNumber",
      "quantity",
      "entryDate",
      "userId"
    ],
    properties: {

      productId: {
        type: "string",
        example: "product-123"
      },

      productName: {
        type: "string",
        example: "cafe"
      },

      supplierId: {
        type: "string",
        example: "supplier-123"
      },

      loteNumber: {
        type: "string",
        example: "LOT-2026-001"
      },

      quantity: {
        type: "number",
        example: 100
      },

      dueDate: {
        type: "string",
        format: "date-time",
        nullable: true,
        example: "2027-08-22T00:00:00.000Z"
      },

      entryDate: {
        type: "string",
        format: "date-time",
        example: "2026-08-22T00:00:00.000Z"
      },

      userId: {
        type: "string",
        example: "user-123"
      },

      observation: {
        type: "string",
        nullable: true,
        example: "Ingreso inicial del producto"
      }
    }
  },


  // ============================================================
  // STOCK OPERATION
  // ============================================================

  InventoryLoteStockRequest: {
    type: "object",
    required: [
      "quantity",
      "userId"
    ],
    properties: {

      quantity: {
        type: "number",
        example: 25
      },

      userId: {
        type: "string",
        example: "user-123"
      },

      observation: {
        type: "string",
        nullable: true,
        example: "Reposición de inventario"
      }
    }
  },


  // ============================================================
  // EXPIRE LOTE
  // ============================================================

  ExpireInventoryLoteRequest: {
    type: "object",
    required: [
      "userId"
    ],
    properties: {

      userId: {
        type: "string",
        example: "user-123"
      },

      observation: {
        type: "string",
        nullable: true,
        example: "Producto retirado por vencimiento"
      }
    }
  },


  // ============================================================
  // RESPONSE
  // ============================================================

  InventoryOrchestratorResponse: {
    type: "object",
    properties: {

      inventory: {
        $ref: "#/components/schemas/Inventory"
      },

      lote: {
        $ref: "#/components/schemas/InventoryLote"
      },

      movement: {
        $ref: "#/components/schemas/InventoryMovement"
      }
    }
  },


  // ============================================================
  // INVENTORY
  // ============================================================

  Inventory: {
    type: "object",
    properties: {

      id: {
        type: "string"
      },

      productId: {
        type: "string"
      },

      productName: {
        type: "string"
      },

      minimumStock: {
        type: "number"
      }
    }
  },


  // ============================================================
  // INVENTORY LOTE
  // ============================================================

  InventoryLote: {
    type: "object",
    properties: {

      id: {
        type: "string"
      },

      productId: {
        type: "string"
      },

      productName: {
        type: "string"
      },

      supplierId: {
        type: "string"
      },

      loteNumber: {
        type: "string"
      },

      quantity: {
        type: "number"
      },

      dueDate: {
        type: "string",
        format: "date-time",
        nullable: true
      },

      entryDate: {
        type: "string",
        format: "date-time"
      }
    }
  },


  // ============================================================
  // INVENTORY MOVEMENT
  // ============================================================

  InventoryMovement: {
    type: "object",
    properties: {

      id: {
        type: "string"
      },

      productId: {
        type: "string"
      },

      type: {
        type: "string",
        enum: [
          "ENTRY",
          "EXIT",
          "ADJUSTMENT_IN",
          "ADJUSTMENT_OUT",
          "RETURN",
          "LOSS",
          "EXPIRED"
        ]
      },

      quantity: {
        type: "number"
      },

      userId: {
        type: "string"
      },

      observation: {
        type: "string"
      }
    }
  }
};