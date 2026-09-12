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

  }

};