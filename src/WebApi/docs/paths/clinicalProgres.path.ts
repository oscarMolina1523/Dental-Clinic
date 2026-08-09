export const ClinicalProgresPaths = {
  "/clinicalProgres": {
    get: {
      summary: "Get all ClinicalProgres",
      tags: ["ClinicalProgres"],
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
          description: "List of ClinicalProgres",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: { $ref: "#/components/schemas/ClinicalProgres" }
              }
            }
          }
        }
      }
    },
    post: {
      summary: "Create ClinicalProgres",
      tags: ["ClinicalProgres"],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: { $ref: "#/components/schemas/ClinicalProgresRequest" }
          }
        }
      },
      responses: {
        201: {
          description: "ClinicalProgres created"
        }
      }
    }
  },

  "/clinicalProgres/{id}": {
    get: {
      summary: "Get ClinicalProgres by id",
      tags: ["ClinicalProgres"],
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
          description: "ClinicalProgres found",
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/ClinicalProgres" }
            }
          }
        },
        404: {
          description: "Not found"
        }
      }
    },

    put: {
      summary: "Update ClinicalProgres",
      tags: ["ClinicalProgres"],
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
            schema: { $ref: "#/components/schemas/ClinicalProgresRequest" }
          }
        }
      },
      responses: {
        200: {
          description: "ClinicalProgres updated"
        },
        404: {
          description: "Not found"
        }
      }
    },

    delete: {
      summary: "Delete ClinicalProgres",
      tags: ["ClinicalProgres"],
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
          description: "ClinicalProgres deleted"
        },
        404: {
          description: "Not found"
        }
      }
    }
  }
};
