export const TreatmentPlanOrchestratorPaths = {

  // ============================================================
  // GET ALL COMPLETE TREATMENT PLANS
  // ============================================================

  "/treatmentPlanOrchestrator": {

    get: {

      summary: "Get all complete treatment plans",

      description:
        "Returns all treatment plans together with their associated details.",

      tags: [
        "Treatment Plan Orchestrator"
      ],

      parameters: [

        {
          name: "page",

          in: "query",

          required: false,

          schema: {
            type: "integer",
            default: 1,
            minimum: 1
          },

          description:
            "Page number"

        },

        {
          name: "pageSize",

          in: "query",

          required: false,

          schema: {
            type: "integer",
            default: 100,
            minimum: 1
          },

          description:
            "Number of treatment plans per page"

        }

      ],

      responses: {

        200: {

          description:
            "Treatment plans retrieved successfully.",

          content: {

            "application/json": {

              schema: {

                type: "array",

                items: {

                  $ref:
                    "#/components/schemas/TreatmentPlanOrchestratorResponse"

                }

              }

            }

          }

        },

        400: {

          description:
            "Invalid pagination parameters"

        },

        500: {

          description:
            "Internal server error"

        }

      }

    },


    // ============================================================
    // CREATE COMPLETE TREATMENT PLAN
    // ============================================================

    post: {

      summary: "Create Treatment Plan with Details",

      description:
        "Creates a treatment plan and all of its associated details.",

      tags: [
        "Treatment Plan Orchestrator"
      ],

      requestBody: {

        required: true,

        content: {

          "application/json": {

            schema: {

              $ref:
                "#/components/schemas/TreatmentPlanOrchestratorRequest"

            }

          }

        }

      },

      responses: {

        201: {

          description:
            "Treatment Plan and its details created",

          content: {

            "application/json": {

              schema: {

                $ref:
                  "#/components/schemas/TreatmentPlanOrchestratorResponse"

              }

            }

          }

        },

        400: {

          description:
            "Invalid request"

        },

        500: {

          description:
            "Internal server error"

        }

      }

    }

  },

   // ============================================================
  // DELETE COMPLETE TREATMENT PLAN
  // ============================================================

  "/treatmentPlanOrchestrator/{id}": {

    delete: {

      summary: "Delete Treatment Plan",

      description:
        "Deletes a treatment plan and all of its associated details using the treatment plan ID.",

      tags: [
        "Treatment Plan Orchestrator"
      ],

      parameters: [

        {

          name: "id",

          in: "path",

          required: true,

          description:
            "Treatment plan ID",

          schema: {

            type: "string"

          },

          example:
            "plan-123"

        }

      ],

      responses: {

        200: {

          description:
            "Treatment plan deleted successfully.",

          content: {

            "application/json": {

              schema: {

                type: "object",

                properties: {

                  message: {

                    type: "string",

                    example:
                      "Treatment plan eliminado correctamente."

                  }

                }

              }

            }

          }

        },

        400: {

          description:
            "Treatment plan ID is required."

        },

        404: {

          description:
            "Treatment plan not found."

        },

        500: {

          description:
            "Internal server error."

        }

      }

    }

  }

};