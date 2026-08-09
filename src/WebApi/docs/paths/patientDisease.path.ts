export const PatientDiseasePaths = {
  "/patientDisease": {
    get: {
      summary: "Get all PatientDisease",
      tags: ["PatientDisease"],
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
          description: "List of PatientDisease",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: { $ref: "#/components/schemas/PatientDisease" }
              }
            }
          }
        }
      }
    },
    post: {
      summary: "Create PatientDisease",
      tags: ["PatientDisease"],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: { $ref: "#/components/schemas/PatientDiseaseRequest" }
          }
        }
      },
      responses: {
        201: {
          description: "PatientDisease created"
        }
      }
    }
  },

  "/patientDisease/{id}": {
    get: {
      summary: "Get PatientDisease by id",
      tags: ["PatientDisease"],
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
          description: "PatientDisease found",
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/PatientDisease" }
            }
          }
        },
        404: {
          description: "Not found"
        }
      }
    },

    put: {
      summary: "Update PatientDisease",
      tags: ["PatientDisease"],
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
            schema: { $ref: "#/components/schemas/PatientDiseaseRequest" }
          }
        }
      },
      responses: {
        200: {
          description: "PatientDisease updated"
        },
        404: {
          description: "Not found"
        }
      }
    },

    delete: {
      summary: "Delete PatientDisease",
      tags: ["PatientDisease"],
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
          description: "PatientDisease deleted"
        },
        404: {
          description: "Not found"
        }
      }
    }
  }
};
