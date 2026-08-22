export const InventoryOrchestratorPaths = {

  // ============================================================
  // CREATE LOTE
  // ============================================================

  "/inventoryOrchestrator/lotes": {

    post: {
      summary: "Create inventory lot",
      description:
        "Creates a new inventory lot, increases the general inventory stock and registers the inventory movement.",
      tags: ["Inventory Orchestrator"],

      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              $ref:
                "#/components/schemas/CreateInventoryLoteRequest"
            }
          }
        }
      },

      responses: {

        201: {
          description:
            "Inventory lot created, inventory stock increased and movement registered.",

          content: {
            "application/json": {
              schema: {
                $ref:
                  "#/components/schemas/InventoryOrchestratorResponse"
              }
            }
          }
        },

        400: {
          description: "Invalid inventory lot data"
        },

        404: {
          description:
            "Inventory for the specified product was not found"
        }
      }
    }
  },


  // ============================================================
  // INCREASE LOT
  // ============================================================

  "/inventoryOrchestrator/lotes/{id}/increase": {

    post: {
      summary: "Increase inventory lot stock",

      description:
        "Increases the stock of a specific lot, increases the general product inventory and registers an ENTRY movement.",

      tags: ["Inventory Orchestrator"],

      parameters: [
        {
          name: "id",
          in: "path",
          required: true,

          schema: {
            type: "string"
          },

          description:
            "Inventory lot identifier"
        }
      ],

      requestBody: {
        required: true,

        content: {
          "application/json": {
            schema: {
              $ref:
                "#/components/schemas/InventoryLoteStockRequest"
            }
          }
        }
      },

      responses: {

        200: {
          description:
            "Lot stock increased, general inventory updated and movement registered.",

          content: {
            "application/json": {
              schema: {
                $ref:
                  "#/components/schemas/InventoryOrchestratorResponse"
              }
            }
          }
        },

        400: {
          description:
            "Invalid quantity or business rule violation"
        },

        404: {
          description:
            "Inventory lot or product inventory not found"
        }
      }
    }
  },


  // ============================================================
  // DECREASE LOT
  // ============================================================

  "/inventoryOrchestrator/lotes/{id}/decrease": {

    post: {
      summary: "Decrease inventory lot stock",

      description:
        "Decreases the stock of a specific lot, decreases the general product inventory and registers an EXIT movement.",

      tags: ["Inventory Orchestrator"],

      parameters: [
        {
          name: "id",
          in: "path",
          required: true,

          schema: {
            type: "string"
          },

          description:
            "Inventory lot identifier"
        }
      ],

      requestBody: {
        required: true,

        content: {
          "application/json": {
            schema: {
              $ref:
                "#/components/schemas/InventoryLoteStockRequest"
            }
          }
        }
      },

      responses: {

        200: {
          description:
            "Lot stock decreased, general inventory updated and movement registered.",

          content: {
            "application/json": {
              schema: {
                $ref:
                  "#/components/schemas/InventoryOrchestratorResponse"
              }
            }
          }
        },

        400: {
          description:
            "Invalid quantity, insufficient stock or expired lot"
        },

        404: {
          description:
            "Inventory lot or product inventory not found"
        }
      }
    }
  },


  // ============================================================
  // EXPIRE LOT
  // ============================================================

  "/inventoryOrchestrator/lotes/{id}/expire": {

    post: {
      summary: "Remove expired inventory lot",

      description:
        "Removes the remaining stock from an expired lot, decreases the general product inventory and registers an EXPIRED movement.",

      tags: ["Inventory Orchestrator"],

      parameters: [
        {
          name: "id",
          in: "path",
          required: true,

          schema: {
            type: "string"
          },

          description:
            "Inventory lot identifier"
        }
      ],

      requestBody: {
        required: true,

        content: {
          "application/json": {
            schema: {
              $ref:
                "#/components/schemas/ExpireInventoryLoteRequest"
            }
          }
        }
      },

      responses: {

        200: {
          description:
            "Expired lot removed from stock and expiration movement registered.",

          content: {
            "application/json": {
              schema: {
                $ref:
                  "#/components/schemas/InventoryOrchestratorResponse"
              }
            }
          }
        },

        400: {
          description:
            "Lot has not expired or has no remaining stock"
        },

        404: {
          description:
            "Inventory lot or product inventory not found"
        }
      }
    }
  }
};