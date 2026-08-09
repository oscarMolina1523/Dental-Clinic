export const InvoicePaths = {
  "/invoice": {
    get: {
      summary: "Get all Invoice",
      tags: ["Invoice"],
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
          description: "List of Invoice",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: { $ref: "#/components/schemas/Invoice" }
              }
            }
          }
        }
      }
    },
    post: {
      summary: "Create Invoice",
      tags: ["Invoice"],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: { $ref: "#/components/schemas/InvoiceRequest" }
          }
        }
      },
      responses: {
        201: {
          description: "Invoice created"
        }
      }
    }
  },

  "/invoice/{id}": {
    get: {
      summary: "Get Invoice by id",
      tags: ["Invoice"],
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
          description: "Invoice found",
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/Invoice" }
            }
          }
        },
        404: {
          description: "Not found"
        }
      }
    },

    put: {
      summary: "Update Invoice",
      tags: ["Invoice"],
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
            schema: { $ref: "#/components/schemas/InvoiceRequest" }
          }
        }
      },
      responses: {
        200: {
          description: "Invoice updated"
        },
        404: {
          description: "Not found"
        }
      }
    },

    delete: {
      summary: "Delete Invoice",
      tags: ["Invoice"],
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
          description: "Invoice deleted"
        },
        404: {
          description: "Not found"
        }
      }
    }
  }
};
