export const AppointmentPaths = {
  "/appointment": {
    get: {
      summary: "Get all Appointment",
      tags: ["Appointment"],
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
          description: "List of Appointment",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: { $ref: "#/components/schemas/Appointment" }
              }
            }
          }
        }
      }
    },
    post: {
      summary: "Create Appointment",
      tags: ["Appointment"],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: { $ref: "#/components/schemas/AppointmentRequest" }
          }
        }
      },
      responses: {
        201: {
          description: "Appointment created"
        }
      }
    }
  },

  "/appointment/{id}": {
    get: {
      summary: "Get Appointment by id",
      tags: ["Appointment"],
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
          description: "Appointment found",
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/Appointment" }
            }
          }
        },
        404: {
          description: "Not found"
        }
      }
    },

    put: {
      summary: "Update Appointment",
      tags: ["Appointment"],
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
            schema: { $ref: "#/components/schemas/AppointmentRequest" }
          }
        }
      },
      responses: {
        200: {
          description: "Appointment updated"
        },
        404: {
          description: "Not found"
        }
      }
    },

    delete: {
      summary: "Delete Appointment",
      tags: ["Appointment"],
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
          description: "Appointment deleted"
        },
        404: {
          description: "Not found"
        }
      }
    }
  }
};
