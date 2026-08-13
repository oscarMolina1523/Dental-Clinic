export const MeasurementUnitPaths = {
  "/measurementUnit": {
    get: {
      summary: "Get all MeasurementUnit",
      tags: ["MeasurementUnit"],
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
          description: "List of MeasurementUnit",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: { $ref: "#/components/schemas/MeasurementUnit" }
              }
            }
          }
        }
      }
    },
    post: {
      summary: "Create MeasurementUnit",
      tags: ["MeasurementUnit"],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: { $ref: "#/components/schemas/MeasurementUnitRequest" }
          }
        }
      },
      responses: {
        201: {
          description: "MeasurementUnit created"
        }
      }
    }
  },

  "/measurementUnit/{id}": {
    get: {
      summary: "Get MeasurementUnit by id",
      tags: ["MeasurementUnit"],
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
          description: "MeasurementUnit found",
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/MeasurementUnit" }
            }
          }
        },
        404: {
          description: "Not found"
        }
      }
    },

    put: {
      summary: "Update MeasurementUnit",
      tags: ["MeasurementUnit"],
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
            schema: { $ref: "#/components/schemas/MeasurementUnitRequest" }
          }
        }
      },
      responses: {
        200: {
          description: "MeasurementUnit updated"
        },
        404: {
          description: "Not found"
        }
      }
    },

    delete: {
      summary: "Delete MeasurementUnit",
      tags: ["MeasurementUnit"],
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
          description: "MeasurementUnit deleted"
        },
        404: {
          description: "Not found"
        }
      }
    }
  }
};
