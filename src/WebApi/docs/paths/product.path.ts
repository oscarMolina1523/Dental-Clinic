export const ProductPaths = {
  "/product": {
    get: {
      summary: "Get all Product",
      tags: ["Product"],
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
          description: "List of Product",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: { $ref: "#/components/schemas/Product" }
              }
            }
          }
        }
      }
    },
    post: {
      summary: "Create Product",
      tags: ["Product"],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: { $ref: "#/components/schemas/ProductRequest" }
          }
        }
      },
      responses: {
        201: {
          description: "Product created"
        }
      }
    }
  },

  "/product/{id}": {
    get: {
      summary: "Get Product by id",
      tags: ["Product"],
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
          description: "Product found",
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/Product" }
            }
          }
        },
        404: {
          description: "Not found"
        }
      }
    },

    put: {
      summary: "Update Product",
      tags: ["Product"],
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
            schema: { $ref: "#/components/schemas/ProductRequest" }
          }
        }
      },
      responses: {
        200: {
          description: "Product updated"
        },
        404: {
          description: "Not found"
        }
      }
    },

    delete: {
      summary: "Delete Product",
      tags: ["Product"],
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
          description: "Product deleted"
        },
        404: {
          description: "Not found"
        }
      }
    }
  }
};
