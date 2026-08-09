export const PatientPaths = {
  "/patient": {
    get: {
      summary: "Get all Patient",
      tags: ["Patient"],
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
          description: "List of Patient",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: { $ref: "#/components/schemas/Patient" }
              }
            }
          }
        }
      }
    },
    post: {
      summary: "Create Patient",
      tags: ["Patient"],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: { $ref: "#/components/schemas/PatientRequest" }
          }
        }
      },
      responses: {
        201: {
          description: "Patient created"
        }
      }
    }
  },

  "/patient/{id}": {
    get: {
      summary: "Get Patient by id",
      tags: ["Patient"],
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
          description: "Patient found",
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/Patient" }
            }
          }
        },
        404: {
          description: "Not found"
        }
      }
    },

    put: {
      summary: "Update Patient",
      tags: ["Patient"],
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
            schema: { $ref: "#/components/schemas/PatientRequest" }
          }
        }
      },
      responses: {
        200: {
          description: "Patient updated"
        },
        404: {
          description: "Not found"
        }
      }
    },

    delete: {
      summary: "Delete Patient",
      tags: ["Patient"],
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
          description: "Patient deleted"
        },
        404: {
          description: "Not found"
        }
      }
    }
  }
};
