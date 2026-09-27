export const ClinicalProgressOrchestratorPaths = {

  // ============================================================
  // CLINICAL PROGRESS ORCHESTRATOR
  // ============================================================

  "/clinicalProgressOrchestrator": {

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