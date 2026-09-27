export const ClinicalProgressOrchestratorPaths = {

  // ============================================================
  // CLINICAL PROGRESS ORCHESTRATOR
  // ============================================================

  "/clinicalProgressOrchestrator": {


      // ==========================================================
      // GET ALL
      // ==========================================================

      get: {

        summary: "Get All Clinical Progress",

        description:
          "Returns all clinical progress records with their related medical prescription, dental chart, and patient attachment.",

        tags: [
          "Clinical Progress Orchestrator"
        ],

        responses: {

          200: {

            description:
              "Clinical progress records retrieved successfully.",

            content: {

              "application/json": {

                schema: {

                  type: "array",

                  items: {

                    $ref:
                      "#/components/schemas/ClinicalProgressOrchestrator"

                  }

                }

              }

            }

          },

          500: {

            description:
              "Internal server error."

          }

        }

    },


    post: {

      summary: "Create Clinical Progress",
      description:
        "Creates a clinical progress and optionally creates the related medical prescription, dental chart, and patient attachment in a single request.",

      tags: [
        "Clinical Progress Orchestrator"
      ],

      requestBody: {

        required: true,

        content: {

          "application/json": {

            schema: {
              $ref:
                "#/components/schemas/CreateClinicalProgressOrchestratorRequest"
            }

          }
        }
      },

      responses: {

        201: {

          description:
            "Clinical progress and related information created successfully.",

          content: {

            "application/json": {

              schema: {
                $ref:
                  "#/components/schemas/ClinicalProgressOrchestrator"
              }

            }
          }
        },

        400: {

          description:
            "Invalid clinical progress data."

        },

        500: {

          description:
            "Internal server error."

        }
      }
    }
  }
};