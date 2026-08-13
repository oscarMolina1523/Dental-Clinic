export const CategoryPaths = {
  "/category": {
    get: {
      summary: "Get all Category",
      tags: ["Category"],
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
          description: "List of Category",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: { $ref: "#/components/schemas/Category" }
              }
            }
          }
        }
      }
    },
    post: {
      summary: "Create Category",
      tags: ["Category"],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: { $ref: "#/components/schemas/CategoryRequest" }
          }
        }
      },
      responses: {
        201: {
          description: "Category created"
        }
      }
    }
  },

  "/category/{id}": {
    get: {
      summary: "Get Category by id",
      tags: ["Category"],
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
          description: "Category found",
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/Category" }
            }
          }
        },
        404: {
          description: "Not found"
        }
      }
    },

    put: {
      summary: "Update Category",
      tags: ["Category"],
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
            schema: { $ref: "#/components/schemas/CategoryRequest" }
          }
        }
      },
      responses: {
        200: {
          description: "Category updated"
        },
        404: {
          description: "Not found"
        }
      }
    },

    delete: {
      summary: "Delete Category",
      tags: ["Category"],
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
          description: "Category deleted"
        },
        404: {
          description: "Not found"
        }
      }
    }
  }
};
