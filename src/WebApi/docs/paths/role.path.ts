export const RolePaths = {
  "/role": {
    get: {
      summary: "Get all Role",
      tags: ["Role"],
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
          description: "List of Role",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: { $ref: "#/components/schemas/Role" }
              }
            }
          }
        }
      }
    },
    post: {
      summary: "Create Role",
      tags: ["Role"],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: { $ref: "#/components/schemas/RoleRequest" }
          }
        }
      },
      responses: {
        201: {
          description: "Role created"
        }
      }
    }
  },

  "/role/{id}": {
    get: {
      summary: "Get Role by id",
      tags: ["Role"],
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
          description: "Role found",
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/Role" }
            }
          }
        },
        404: {
          description: "Not found"
        }
      }
    },

    put: {
      summary: "Update Role",
      tags: ["Role"],
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
            schema: { $ref: "#/components/schemas/RoleRequest" }
          }
        }
      },
      responses: {
        200: {
          description: "Role updated"
        },
        404: {
          description: "Not found"
        }
      }
    },

    delete: {
      summary: "Delete Role",
      tags: ["Role"],
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
          description: "Role deleted"
        },
        404: {
          description: "Not found"
        }
      }
    }
  }
};
