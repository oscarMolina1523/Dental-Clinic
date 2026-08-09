export const TreatmentPlanPaths = {
  "/treatmentPlan": {
    get: {
      summary: "Get all TreatmentPlan",
      tags: ["TreatmentPlan"],
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
          description: "List of TreatmentPlan",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: { $ref: "#/components/schemas/TreatmentPlan" }
              }
            }
          }
        }
      }
    },
    post: {
      summary: "Create TreatmentPlan",
      tags: ["TreatmentPlan"],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: { $ref: "#/components/schemas/TreatmentPlanRequest" }
          }
        }
      },
      responses: {
        201: {
          description: "TreatmentPlan created"
        }
      }
    }
  },

  "/treatmentPlan/{id}": {
    get: {
      summary: "Get TreatmentPlan by id",
      tags: ["TreatmentPlan"],
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
          description: "TreatmentPlan found",
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/TreatmentPlan" }
            }
          }
        },
        404: {
          description: "Not found"
        }
      }
    },

    put: {
      summary: "Update TreatmentPlan",
      tags: ["TreatmentPlan"],
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
            schema: { $ref: "#/components/schemas/TreatmentPlanRequest" }
          }
        }
      },
      responses: {
        200: {
          description: "TreatmentPlan updated"
        },
        404: {
          description: "Not found"
        }
      }
    },

    delete: {
      summary: "Delete TreatmentPlan",
      tags: ["TreatmentPlan"],
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
          description: "TreatmentPlan deleted"
        },
        404: {
          description: "Not found"
        }
      }
    }
  }
};
