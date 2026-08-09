export const DentalChartDetailPaths = {
  "/dentalChartDetail": {
    get: {
      summary: "Get all DentalChartDetail",
      tags: ["DentalChartDetail"],
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
          description: "List of DentalChartDetail",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: { $ref: "#/components/schemas/DentalChartDetail" }
              }
            }
          }
        }
      }
    },
    post: {
      summary: "Create DentalChartDetail",
      tags: ["DentalChartDetail"],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: { $ref: "#/components/schemas/DentalChartDetailRequest" }
          }
        }
      },
      responses: {
        201: {
          description: "DentalChartDetail created"
        }
      }
    }
  },

  "/dentalChartDetail/{id}": {
    get: {
      summary: "Get DentalChartDetail by id",
      tags: ["DentalChartDetail"],
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
          description: "DentalChartDetail found",
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/DentalChartDetail" }
            }
          }
        },
        404: {
          description: "Not found"
        }
      }
    },

    put: {
      summary: "Update DentalChartDetail",
      tags: ["DentalChartDetail"],
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
            schema: { $ref: "#/components/schemas/DentalChartDetailRequest" }
          }
        }
      },
      responses: {
        200: {
          description: "DentalChartDetail updated"
        },
        404: {
          description: "Not found"
        }
      }
    },

    delete: {
      summary: "Delete DentalChartDetail",
      tags: ["DentalChartDetail"],
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
          description: "DentalChartDetail deleted"
        },
        404: {
          description: "Not found"
        }
      }
    }
  }
};
