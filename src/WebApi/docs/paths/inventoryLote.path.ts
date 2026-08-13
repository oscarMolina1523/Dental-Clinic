export const InventoryLotePaths = {
  "/inventoryLote": {
    get: {
      summary: "Get all InventoryLote",
      tags: ["InventoryLote"],
      parameters: [
        {
          name: "page",
          in: "query",
          required: false,
          schema: {
            type: "integer",
            example: 1
          },
          description: "Page number"
        },
        {
          name: "pageSize",
          in: "query",
          required: false,
          schema: {
            type: "integer",
            example: 100
          },
          description: "Number of records per page"
        }
      ],
      responses: {
        200: {
          description: "List of InventoryLote",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: { $ref: "#/components/schemas/InventoryLote" }
              }
            }
          }
        }
      }
    },
    post: {
      summary: "Create InventoryLote",
      tags: ["InventoryLote"],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: { $ref: "#/components/schemas/InventoryLoteRequest" }
          }
        }
      },
      responses: {
        201: {
          description: "InventoryLote created"
        }
      }
    }
  },

  "/inventoryLote/{id}": {
    get: {
      summary: "Get InventoryLote by id",
      tags: ["InventoryLote"],
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          schema: { type: "string" }
        }
      ],
      responses: {
        200: {
          description: "InventoryLote found",
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/InventoryLote" }
            }
          }
        },
        404: {
          description: "Not found"
        }
      }
    },

    put: {
      summary: "Update InventoryLote",
      tags: ["InventoryLote"],
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          schema: { type: "string" }
        }
      ],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: { $ref: "#/components/schemas/InventoryLoteRequest" }
          }
        }
      },
      responses: {
        200: {
          description: "InventoryLote updated"
        },
        404: {
          description: "Not found"
        }
      }
    },

    delete: {
      summary: "Delete InventoryLote",
      tags: ["InventoryLote"],
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          schema: { type: "string" }
        }
      ],
      responses: {
        204: {
          description: "InventoryLote deleted"
        },
        404: {
          description: "Not found"
        }
      }
    }
  }
};
