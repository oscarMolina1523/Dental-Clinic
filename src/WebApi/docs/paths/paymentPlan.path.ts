export const PaymentPlanPaths = {
  "/paymentPlan": {
    get: {
      summary: "Get all PaymentPlan",
      tags: ["PaymentPlan"],
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
          description: "List of PaymentPlan",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: { $ref: "#/components/schemas/PaymentPlan" }
              }
            }
          }
        }
      }
    },
    post: {
      summary: "Create PaymentPlan",
      tags: ["PaymentPlan"],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: { $ref: "#/components/schemas/PaymentPlanRequest" }
          }
        }
      },
      responses: {
        201: {
          description: "PaymentPlan created"
        }
      }
    }
  },

  "/paymentPlan/{id}": {
    get: {
      summary: "Get PaymentPlan by id",
      tags: ["PaymentPlan"],
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
          description: "PaymentPlan found",
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/PaymentPlan" }
            }
          }
        },
        404: {
          description: "Not found"
        }
      }
    },

    put: {
      summary: "Update PaymentPlan",
      tags: ["PaymentPlan"],
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
            schema: { $ref: "#/components/schemas/PaymentPlanRequest" }
          }
        }
      },
      responses: {
        200: {
          description: "PaymentPlan updated"
        },
        404: {
          description: "Not found"
        }
      }
    },

    delete: {
      summary: "Delete PaymentPlan",
      tags: ["PaymentPlan"],
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
          description: "PaymentPlan deleted"
        },
        404: {
          description: "Not found"
        }
      }
    }
  }
};
