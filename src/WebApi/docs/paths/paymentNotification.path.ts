export const PaymentNotificationPaths = {
  "/paymentNotification": {
    get: {
      summary: "Get all PaymentNotification",
      tags: ["PaymentNotification"],
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
          description: "List of PaymentNotification",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: { $ref: "#/components/schemas/PaymentNotification" }
              }
            }
          }
        }
      }
    },
    post: {
      summary: "Create PaymentNotification",
      tags: ["PaymentNotification"],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: { $ref: "#/components/schemas/PaymentNotificationRequest" }
          }
        }
      },
      responses: {
        201: {
          description: "PaymentNotification created"
        }
      }
    }
  },

  "/paymentNotification/{id}": {
    get: {
      summary: "Get PaymentNotification by id",
      tags: ["PaymentNotification"],
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
          description: "PaymentNotification found",
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/PaymentNotification" }
            }
          }
        },
        404: {
          description: "Not found"
        }
      }
    },

    put: {
      summary: "Update PaymentNotification",
      tags: ["PaymentNotification"],
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
            schema: { $ref: "#/components/schemas/PaymentNotificationRequest" }
          }
        }
      },
      responses: {
        200: {
          description: "PaymentNotification updated"
        },
        404: {
          description: "Not found"
        }
      }
    },

    delete: {
      summary: "Delete PaymentNotification",
      tags: ["PaymentNotification"],
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
          description: "PaymentNotification deleted"
        },
        404: {
          description: "Not found"
        }
      }
    }
  }
};
