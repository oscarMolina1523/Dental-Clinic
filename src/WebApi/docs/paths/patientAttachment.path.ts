export const PatientAttachmentPaths = {
  "/patientAttachment": {
    get: {
      summary: "Get all PatientAttachment",
      tags: ["PatientAttachment"],
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
          description: "List of PatientAttachment",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: { $ref: "#/components/schemas/PatientAttachment" }
              }
            }
          }
        }
      }
    },
    post: {
      summary: "Create PatientAttachment",
      tags: ["PatientAttachment"],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: { $ref: "#/components/schemas/PatientAttachmentRequest" }
          }
        }
      },
      responses: {
        201: {
          description: "PatientAttachment created"
        }
      }
    }
  },

  "/patientAttachment/{id}": {
    get: {
      summary: "Get PatientAttachment by id",
      tags: ["PatientAttachment"],
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
          description: "PatientAttachment found",
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/PatientAttachment" }
            }
          }
        },
        404: {
          description: "Not found"
        }
      }
    },

    put: {
      summary: "Update PatientAttachment",
      tags: ["PatientAttachment"],
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
            schema: { $ref: "#/components/schemas/PatientAttachmentRequest" }
          }
        }
      },
      responses: {
        200: {
          description: "PatientAttachment updated"
        },
        404: {
          description: "Not found"
        }
      }
    },

    delete: {
      summary: "Delete PatientAttachment",
      tags: ["PatientAttachment"],
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
          description: "PatientAttachment deleted"
        },
        404: {
          description: "Not found"
        }
      }
    }
  }
};
