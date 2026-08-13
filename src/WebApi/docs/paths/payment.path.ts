export const PaymentPaths = {
  "/payment": {
    get: {
      summary: "Get all Payment",
      tags: ["Payment"],
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
          description: "List of Payment",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: { $ref: "#/components/schemas/Payment" }
              }
            }
          }
        }
      }
    },
    post: {
      summary: "Create Payment",
      tags: ["Payment"],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: { $ref: "#/components/schemas/PaymentRequest" }
          }
        }
      },
      responses: {
        201: {
          description: "Payment created"
        }
      }
    }
  },

  "/payment/{id}": {
    get: {
      summary: "Get Payment by id",
      tags: ["Payment"],
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
          description: "Payment found",
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/Payment" }
            }
          }
        },
        404: {
          description: "Not found"
        }
      }
    },

    put: {
      summary: "Update Payment",
      tags: ["Payment"],
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
            schema: { $ref: "#/components/schemas/PaymentRequest" }
          }
        }
      },
      responses: {
        200: {
          description: "Payment updated"
        },
        404: {
          description: "Not found"
        }
      }
    },

    delete: {
      summary: "Delete Payment",
      tags: ["Payment"],
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
          description: "Payment deleted"
        },
        404: {
          description: "Not found"
        }
      }
    }
  }
};
