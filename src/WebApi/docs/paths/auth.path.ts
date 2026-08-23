import { UserSchemas } from "../schemas/user.schema";

export const AuthPaths = {
  "/auth/login": {
    post: {
      summary: "Authenticate user and obtain token",
      tags: ["Auth"],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              required: ["email", "password"],
              properties: {
                email: { type: "string", example: "usuario@correo.com" },
                password: { type: "string", example: "123456" },
              },
            },
          },
        },
      },
      responses: {
        200: {
          description: "Successful login",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: { type: "string", example: "Successful login" },
                  user: UserSchemas.UserAuthResponse,
                  token: {
                    type: "string",
                    example: "eyJhbGciOiJIUzI1NiIsInR5cCI6...",
                  },
                },
              },
            },
          },
        },
        401: {
          description: "Invalid credentials",
        },
        500: {
          description: "Internal Server Error",
        },
      },
    },
  },
  "/auth/register": {
    post: {
      tags: ["Auth"],
      summary: "Register new user",
      description:
        "Creates a new user in the system and returns its public data.",
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: UserSchemas.UserAuthRequest,
          },
        },
      },
      responses: {
        201: {
          description: "Successfully registered user",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: {
                    type: "string",
                    example: "Successfully registered user",
                  },
                  user: UserSchemas.UserAuthResponse,
                },
              },
            },
          },
        },
        400: {
          description: "Invalid fields or existing user",
        },
        500: {
          description: "Internal Server Error",
        },
      },
    },
  },

  "/auth/logout": {
    post: {
      tags: ["Auth"],
      summary: "Logout user",
      description:
        "Ends the user session.",
      security: [{ BearerAuth: [] }],
      responses: {
        200: {
          description: "Successful logout",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: {
                    type: "string",
                    example: "Successfully logged out",
                  },
                },
              },
            },
          },
        },
      },
    },
  },
};