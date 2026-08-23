export const DentalChartOrchestratorPaths = {

  // ============================================================
  // CREATE COMPLETE DENTAL CHART
  // ============================================================

  "/dentalChartOrchestrator": {

    post: {
      summary: "Create complete DentalChart",
      tags: ["DentalChartOrchestrator"],

      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              $ref:
                "#/components/schemas/DentalChartOrchestratorRequest"
            }
          }
        }
      },

      responses: {

        201: {
          description: "DentalChart created successfully",
          content: {
            "application/json": {
              schema: {
                $ref:
                  "#/components/schemas/DentalChartWithDetails"
              }
            }
          }
        }

      }
    }

  },

  // ============================================================
  // GET COMPLETE DENTAL CHART
  // ============================================================

  "/dentalChartOrchestrator/{id}": {

    get: {

      summary: "Get complete DentalChart by id",
      tags: ["DentalChartOrchestrator"],

      parameters: [

        {
          name: "id",
          in: "path",
          required: true,
          schema: {
            type: "string"
          }
        }

      ],

      responses: {

        200: {
          description: "Complete DentalChart found",
          content: {
            "application/json": {
              schema: {
                $ref:
                  "#/components/schemas/DentalChartWithDetails"
              }
            }
          }
        },

        404: {
          description: "DentalChart not found"
        }

      }

    },

    // ============================================================
    // UPDATE COMPLETE DENTAL CHART
    // ============================================================

    put: {

      summary: "Update complete DentalChart",
      tags: ["DentalChartOrchestrator"],

      parameters: [

        {
          name: "id",
          in: "path",
          required: true,
          schema: {
            type: "string"
          }
        }

      ],

      requestBody: {

        required: true,

        content: {

          "application/json": {

            schema: {
              $ref:
                "#/components/schemas/DentalChartOrchestratorRequest"
            }

          }

        }

      },

      responses: {

        200: {
          description: "Complete DentalChart updated",
          content: {
            "application/json": {
              schema: {
                $ref:
                  "#/components/schemas/DentalChartWithDetails"
              }
            }
          }
        },

        404: {
          description: "DentalChart not found"
        }

      }

    },

    // ============================================================
    // DELETE COMPLETE DENTAL CHART
    // ============================================================

    delete: {

      summary: "Delete complete DentalChart",
      tags: ["DentalChartOrchestrator"],

      parameters: [

        {
          name: "id",
          in: "path",
          required: true,
          schema: {
            type: "string"
          }
        }

      ],

      responses: {

        204: {
          description: "Complete DentalChart deleted"
        },

        404: {
          description: "DentalChart not found"
        }

      }

    }

  }

};