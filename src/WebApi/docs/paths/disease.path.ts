export const DiseasePaths = {
  "/disease": {
    get: {
      summary: "Get all Disease",
      tags: ["Disease"],
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
          description: "List of Disease",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: { $ref: "#/components/schemas/Disease" }
              }
            }
          }
        }
      }
    },
    post: {
      summary: "Create Disease",
      tags: ["Disease"],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: { $ref: "#/components/schemas/DiseaseRequest" }
          }
        }
      },
      responses: {
        201: {
          description: "Disease created"
        }
      }
    }
  },

  "/disease/{id}": {
    get: {
      summary: "Get Disease by id",
      tags: ["Disease"],
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
          description: "Disease found",
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/Disease" }
            }
          }
        },
        404: {
          description: "Not found"
        }
      }
    },

    put: {
      summary: "Update Disease",
      tags: ["Disease"],
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
            schema: { $ref: "#/components/schemas/DiseaseRequest" }
          }
        }
      },
      responses: {
        200: {
          description: "Disease updated"
        },
        404: {
          description: "Not found"
        }
      }
    },

    delete: {
      summary: "Delete Disease",
      tags: ["Disease"],
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
          description: "Disease deleted"
        },
        404: {
          description: "Not found"
        }
      }
    }
  }
};
