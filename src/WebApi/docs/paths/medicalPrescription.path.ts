export const MedicalPrescriptionPaths = {
  "/medicalPrescription": {
    get: {
      summary: "Get all MedicalPrescription",
      tags: ["MedicalPrescription"],
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
          description: "List of MedicalPrescription",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: { $ref: "#/components/schemas/MedicalPrescription" }
              }
            }
          }
        }
      }
    },
    post: {
      summary: "Create MedicalPrescription",
      tags: ["MedicalPrescription"],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: { $ref: "#/components/schemas/MedicalPrescriptionRequest" }
          }
        }
      },
      responses: {
        201: {
          description: "MedicalPrescription created"
        }
      }
    }
  },

  "/medicalPrescription/{id}": {
    get: {
      summary: "Get MedicalPrescription by id",
      tags: ["MedicalPrescription"],
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
          description: "MedicalPrescription found",
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/MedicalPrescription" }
            }
          }
        },
        404: {
          description: "Not found"
        }
      }
    },

    put: {
      summary: "Update MedicalPrescription",
      tags: ["MedicalPrescription"],
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
            schema: { $ref: "#/components/schemas/MedicalPrescriptionRequest" }
          }
        }
      },
      responses: {
        200: {
          description: "MedicalPrescription updated"
        },
        404: {
          description: "Not found"
        }
      }
    },

    delete: {
      summary: "Delete MedicalPrescription",
      tags: ["MedicalPrescription"],
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
          description: "MedicalPrescription deleted"
        },
        404: {
          description: "Not found"
        }
      }
    }
  }
};
