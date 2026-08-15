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
    },

    "/user/{id}/email": {

      put: {
        summary: "Change User Email",
        tags: ["User"],

        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            schema: {
              type: "string"
            },
            description: "User ID"
          }
        ],

        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/ChangeEmailRequest"
              }
            }
          }
        },

        responses: {
          200: {
            description: "Email updated",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/User"
                }
              }
            }
          },

          400: {
            description: "Invalid email"
          },

          404: {
            description: "User not found"
          }
        }
      }
    },

    "/user/{id}/phone": {

      put: {
        summary: "Change User Phone Number",
        tags: ["User"],

        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            schema: {
              type: "string"
            },
            description: "User ID"
          }
        ],

        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/ChangePhoneNumberRequest"
              }
            }
          }
        },

        responses: {
          200: {
            description: "Phone number updated",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/User"
                }
              }
            }
          },

          404: {
            description: "User not found"
          }
        }
      }
    },

    "/user/{id}/password": {

      put: {
        summary: "Change User Password",
        tags: ["User"],

        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            schema: {
              type: "string"
            },
            description: "User ID"
          }
        ],

        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/ChangePasswordRequest"
              }
            }
          }
        },

        responses: {
          200: {
            description: "Password updated",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    message: {
                      type: "string",
                      example: "Contraseña actualizada correctamente"
                    }
                  }
                }
              }
            }
          },

          400: {
            description: "Current password is incorrect"
          },

          404: {
            description: "User not found"
          }
        }
      }
    },

    "/user/{id}/role": {

      put: {
        summary: "Change User Role",
        tags: ["User"],

        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            schema: {
              type: "string"
            },
            description: "User ID"
          }
        ],

        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/ChangeRoleRequest"
              }
            }
          }
        },

        responses: {
          200: {
            description: "Role updated",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/User"
                }
              }
            }
          },

          404: {
            description: "User not found"
          }
        }
      }
    },

    "/user/{id}/activate": {

      post: {
        summary: "Activate User",
        tags: ["User"],

        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            schema: {
              type: "string"
            },
            description: "User ID"
          }
        ],

        responses: {
          200: {
            description: "User activated",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/User"
                }
              }
            }
          },

          404: {
            description: "User not found"
          }
        }
      }
    },

    "/user/{id}/deactivate": {

      post: {
        summary: "Deactivate User",
        tags: ["User"],

        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            schema: {
              type: "string"
            },
            description: "User ID"
          }
        ],

        responses: {
          200: {
            description: "User deactivated",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/User"
                }
              }
            }
          },

          404: {
            description: "User not found"
          }
        }
      }
    }
  }
};
