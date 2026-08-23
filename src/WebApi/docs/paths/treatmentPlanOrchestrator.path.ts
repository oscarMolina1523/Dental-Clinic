export const TreatmentPlanOrchestratorPaths = {

  "/treatmentPlanOrchestrator": {

    post: {

      summary: "Create Treatment Plan with Details",

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
          description: "Invalid request"
        },

        500: {
          description: "Internal server error"
        }

      }

    }

  }

};