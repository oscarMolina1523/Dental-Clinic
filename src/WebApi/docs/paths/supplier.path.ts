export const SupplierPaths = {
  "/supplier": {
    get: {
      summary: "Get all Supplier",
      tags: ["Supplier"],
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
          description: "List of Supplier",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: { $ref: "#/components/schemas/Supplier" }
              }
            }
          }
        }
      }
    },
    post: {
      summary: "Create Supplier",
      tags: ["Supplier"],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: { $ref: "#/components/schemas/SupplierRequest" }
          }
        }
      },
      responses: {
        201: {
          description: "Supplier created"
        }
      }
    }
  },

  "/supplier/{id}": {
    get: {
      summary: "Get Supplier by id",
      tags: ["Supplier"],
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
          description: "Supplier found",
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/Supplier" }
            }
          }
        },
        404: {
          description: "Not found"
        }
      }
    },

    put: {
      summary: "Update Supplier",
      tags: ["Supplier"],
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
            schema: { $ref: "#/components/schemas/SupplierRequest" }
          }
        }
      },
      responses: {
        200: {
          description: "Supplier updated"
        },
        404: {
          description: "Not found"
        }
      }
    },

    delete: {
      summary: "Delete Supplier",
      tags: ["Supplier"],
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
          description: "Supplier deleted"
        },
        404: {
          description: "Not found"
        }
      }
    }
  }
};
