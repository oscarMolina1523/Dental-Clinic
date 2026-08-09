export const MedicalPrescriptionDetailPaths = {
  "/medicalPrescriptionDetail": {
    get: {
      summary: "Get all MedicalPrescriptionDetail",
      tags: ["MedicalPrescriptionDetail"],
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
          description: "List of MedicalPrescriptionDetail",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: { $ref: "#/components/schemas/MedicalPrescriptionDetail" }
              }
            }
          }
        }
      }
    },
    post: {
      summary: "Create MedicalPrescriptionDetail",
      tags: ["MedicalPrescriptionDetail"],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: { $ref: "#/components/schemas/MedicalPrescriptionDetailRequest" }
          }
        }
      },
      responses: {
        201: {
          description: "MedicalPrescriptionDetail created"
        }
      }
    }
  },

  "/medicalPrescriptionDetail/{id}": {
    get: {
      summary: "Get MedicalPrescriptionDetail by id",
      tags: ["MedicalPrescriptionDetail"],
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
          description: "MedicalPrescriptionDetail found",
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/MedicalPrescriptionDetail" }
            }
          }
        },
        404: {
          description: "Not found"
        }
      }
    },

    put: {
      summary: "Update MedicalPrescriptionDetail",
      tags: ["MedicalPrescriptionDetail"],
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
            schema: { $ref: "#/components/schemas/MedicalPrescriptionDetailRequest" }
          }
        }
      },
      responses: {
        200: {
          description: "MedicalPrescriptionDetail updated"
        },
        404: {
          description: "Not found"
        }
      }
    },

    delete: {
      summary: "Delete MedicalPrescriptionDetail",
      tags: ["MedicalPrescriptionDetail"],
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
          description: "MedicalPrescriptionDetail deleted"
        },
        404: {
          description: "Not found"
        }
      }
    }
  }
};
