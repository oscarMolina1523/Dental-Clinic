export const DatePaths = {
  "/date": {
    get: {
      summary: "Get all Date",
      tags: ["Date"],
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
          description: "List of Date",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: { $ref: "#/components/schemas/Date" }
              }
            }
          }
        }
      }
    },
    post: {
      summary: "Create Date",
      tags: ["Date"],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: { $ref: "#/components/schemas/DateRequest" }
          }
        }
      },
      responses: {
        201: {
          description: "Date created"
        }
      }
    }
  },

  "/date/{id}": {
    get: {
      summary: "Get Date by id",
      tags: ["Date"],
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
          description: "Date found",
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/Date" }
            }
          }
        },
        404: {
          description: "Not found"
        }
      }
    },

    put: {
      summary: "Update Date",
      tags: ["Date"],
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
            schema: { $ref: "#/components/schemas/DateRequest" }
          }
        }
      },
      responses: {
        200: {
          description: "Date updated"
        },
        404: {
          description: "Not found"
        }
      }
    },

    delete: {
      summary: "Delete Date",
      tags: ["Date"],
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
          description: "Date deleted"
        },
        404: {
          description: "Not found"
        }
      }
    }
  }
};
