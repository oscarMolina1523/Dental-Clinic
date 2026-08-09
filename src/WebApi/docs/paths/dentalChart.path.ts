export const DentalChartPaths = {
  "/dentalChart": {
    get: {
      summary: "Get all DentalChart",
      tags: ["DentalChart"],
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
          description: "List of DentalChart",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: { $ref: "#/components/schemas/DentalChart" }
              }
            }
          }
        }
      }
    },
    post: {
      summary: "Create DentalChart",
      tags: ["DentalChart"],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: { $ref: "#/components/schemas/DentalChartRequest" }
          }
        }
      },
      responses: {
        201: {
          description: "DentalChart created"
        }
      }
    }
  },

  "/dentalChart/{id}": {
    get: {
      summary: "Get DentalChart by id",
      tags: ["DentalChart"],
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
          description: "DentalChart found",
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/DentalChart" }
            }
          }
        },
        404: {
          description: "Not found"
        }
      }
    },

    put: {
      summary: "Update DentalChart",
      tags: ["DentalChart"],
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
            schema: { $ref: "#/components/schemas/DentalChartRequest" }
          }
        }
      },
      responses: {
        200: {
          description: "DentalChart updated"
        },
        404: {
          description: "Not found"
        }
      }
    },

    delete: {
      summary: "Delete DentalChart",
      tags: ["DentalChart"],
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
          description: "DentalChart deleted"
        },
        404: {
          description: "Not found"
        }
      }
    }
  }
};
