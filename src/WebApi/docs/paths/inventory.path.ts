export const InventoryPaths = {
  "/inventory": {
    get: {
      summary: "Get all Inventory",
      tags: ["Inventory"],
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
          description: "List of Inventory",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: { $ref: "#/components/schemas/Inventory" }
              }
            }
          }
        }
      }
    },
    post: {
      summary: "Create Inventory",
      tags: ["Inventory"],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: { $ref: "#/components/schemas/InventoryRequest" }
          }
        }
      },
      responses: {
        201: {
          description: "Inventory created"
        }
      }
    }
  },

  "/inventory/{id}": {
    get: {
      summary: "Get Inventory by id",
      tags: ["Inventory"],
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
          description: "Inventory found",
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/Inventory" }
            }
          }
        },
        404: {
          description: "Not found"
        }
      }
    },

    put: {
      summary: "Update Inventory",
      tags: ["Inventory"],
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
            schema: { $ref: "#/components/schemas/InventoryRequest" }
          }
        }
      },
      responses: {
        200: {
          description: "Inventory updated"
        },
        404: {
          description: "Not found"
        }
      }
    },

    delete: {
      summary: "Delete Inventory",
      tags: ["Inventory"],
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
          description: "Inventory deleted"
        },
        404: {
          description: "Not found"
        }
      }
    }
  }
};
