export const InstallmentPaths = {
  "/installment": {
    get: {
      summary: "Get all Installment",
      tags: ["Installment"],
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
          description: "List of Installment",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: { $ref: "#/components/schemas/Installment" }
              }
            }
          }
        }
      }
    },
    post: {
      summary: "Create Installment",
      tags: ["Installment"],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: { $ref: "#/components/schemas/InstallmentRequest" }
          }
        }
      },
      responses: {
        201: {
          description: "Installment created"
        }
      }
    }
  },

  "/installment/{id}": {
    get: {
      summary: "Get Installment by id",
      tags: ["Installment"],
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
          description: "Installment found",
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/Installment" }
            }
          }
        },
        404: {
          description: "Not found"
        }
      }
    },

    put: {
      summary: "Update Installment",
      tags: ["Installment"],
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
            schema: { $ref: "#/components/schemas/InstallmentRequest" }
          }
        }
      },
      responses: {
        200: {
          description: "Installment updated"
        },
        404: {
          description: "Not found"
        }
      }
    },

    delete: {
      summary: "Delete Installment",
      tags: ["Installment"],
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
          description: "Installment deleted"
        },
        404: {
          description: "Not found"
        }
      }
    }
  }
};
