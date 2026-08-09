export const TreatmentPlanDetailPaths = {
  "/treatmentPlanDetail": {
    get: {
      summary: "Get all TreatmentPlanDetail",
      tags: ["TreatmentPlanDetail"],
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
          description: "List of TreatmentPlanDetail",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: { $ref: "#/components/schemas/TreatmentPlanDetail" }
              }
            }
          }
        }
      }
    },
    post: {
      summary: "Create TreatmentPlanDetail",
      tags: ["TreatmentPlanDetail"],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: { $ref: "#/components/schemas/TreatmentPlanDetailRequest" }
          }
        }
      },
      responses: {
        201: {
          description: "TreatmentPlanDetail created"
        }
      }
    }
  },

  "/treatmentPlanDetail/{id}": {
    get: {
      summary: "Get TreatmentPlanDetail by id",
      tags: ["TreatmentPlanDetail"],
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
          description: "TreatmentPlanDetail found",
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/TreatmentPlanDetail" }
            }
          }
        },
        404: {
          description: "Not found"
        }
      }
    },

    put: {
      summary: "Update TreatmentPlanDetail",
      tags: ["TreatmentPlanDetail"],
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
            schema: { $ref: "#/components/schemas/TreatmentPlanDetailRequest" }
          }
        }
      },
      responses: {
        200: {
          description: "TreatmentPlanDetail updated"
        },
        404: {
          description: "Not found"
        }
      }
    },

    delete: {
      summary: "Delete TreatmentPlanDetail",
      tags: ["TreatmentPlanDetail"],
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
          description: "TreatmentPlanDetail deleted"
        },
        404: {
          description: "Not found"
        }
      }
    }
  }
};
