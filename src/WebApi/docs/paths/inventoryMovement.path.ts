export const InventoryMovementPaths = {
  "/inventoryMovement": {
    get: {
      summary: "Get all InventoryMovement",
      tags: ["InventoryMovement"],
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
          description: "List of InventoryMovement",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: { $ref: "#/components/schemas/InventoryMovement" }
              }
            }
          }
        }
      }
    },
    post: {
      summary: "Create InventoryMovement",
      tags: ["InventoryMovement"],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: { $ref: "#/components/schemas/InventoryMovementRequest" }
          }
        }
      },
      responses: {
        201: {
          description: "InventoryMovement created"
        }
      }
    }
  },

  "/inventoryMovement/{id}": {
    get: {
      summary: "Get InventoryMovement by id",
      tags: ["InventoryMovement"],
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
          description: "InventoryMovement found",
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/InventoryMovement" }
            }
          }
        },
        404: {
          description: "Not found"
        }
      }
    },

    put: {
      summary: "Update InventoryMovement",
      tags: ["InventoryMovement"],
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
            schema: { $ref: "#/components/schemas/InventoryMovementRequest" }
          }
        }
      },
      responses: {
        200: {
          description: "InventoryMovement updated"
        },
        404: {
          description: "Not found"
        }
      }
    },

    delete: {
      summary: "Delete InventoryMovement",
      tags: ["InventoryMovement"],
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
          description: "InventoryMovement deleted"
        },
        404: {
          description: "Not found"
        }
      }
    }
  }
};
