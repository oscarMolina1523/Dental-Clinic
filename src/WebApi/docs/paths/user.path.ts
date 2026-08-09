export const UserPaths = {
  "/user": {
    get: {
      summary: "Get all User",
      tags: ["User"],
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
          description: "List of User",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: { $ref: "#/components/schemas/User" }
              }
            }
          }
        }
      }
    },
    post: {
      summary: "Create User",
      tags: ["User"],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: { $ref: "#/components/schemas/UserRequest" }
          }
        }
      },
      responses: {
        201: {
          description: "User created"
        }
      }
    }
  },

  "/user/{id}": {
    get: {
      summary: "Get User by id",
      tags: ["User"],
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
          description: "User found",
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/User" }
            }
          }
        },
        404: {
          description: "Not found"
        }
      }
    },

    put: {
      summary: "Update User",
      tags: ["User"],
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
            schema: { $ref: "#/components/schemas/UserRequest" }
          }
        }
      },
      responses: {
        200: {
          description: "User updated"
        },
        404: {
          description: "Not found"
        }
      }
    },

    delete: {
      summary: "Delete User",
      tags: ["User"],
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
          description: "User deleted"
        },
        404: {
          description: "Not found"
        }
      }
    }
  }
};
