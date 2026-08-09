export const TreatmentCatalogPaths = {
  "/treatmentCatalog": {
    get: {
      summary: "Get all TreatmentCatalog",
      tags: ["TreatmentCatalog"],
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
          description: "List of TreatmentCatalog",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: { $ref: "#/components/schemas/TreatmentCatalog" }
              }
            }
          }
        }
      }
    },
    post: {
      summary: "Create TreatmentCatalog",
      tags: ["TreatmentCatalog"],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: { $ref: "#/components/schemas/TreatmentCatalogRequest" }
          }
        }
      },
      responses: {
        201: {
          description: "TreatmentCatalog created"
        }
      }
    }
  },

  "/treatmentCatalog/{id}": {
    get: {
      summary: "Get TreatmentCatalog by id",
      tags: ["TreatmentCatalog"],
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
          description: "TreatmentCatalog found",
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/TreatmentCatalog" }
            }
          }
        },
        404: {
          description: "Not found"
        }
      }
    },

    put: {
      summary: "Update TreatmentCatalog",
      tags: ["TreatmentCatalog"],
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
            schema: { $ref: "#/components/schemas/TreatmentCatalogRequest" }
          }
        }
      },
      responses: {
        200: {
          description: "TreatmentCatalog updated"
        },
        404: {
          description: "Not found"
        }
      }
    },

    delete: {
      summary: "Delete TreatmentCatalog",
      tags: ["TreatmentCatalog"],
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
          description: "TreatmentCatalog deleted"
        },
        404: {
          description: "Not found"
        }
      }
    }
  }
};
