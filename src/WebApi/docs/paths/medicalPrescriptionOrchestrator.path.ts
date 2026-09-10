export const MedicalPrescriptionOrchestratorPaths = {

    // ============================================================
  // GET ALL COMPLETE MEDICAL PRESCRIPTIONS
  // ============================================================

  "/medicalPrescriptionOrchestrator": {

    get: {

      summary: "Get all complete medical prescriptions",

      description:
        "Returns all medical prescriptions together with their associated details.",

      tags: ["Medical Prescription Orchestrator"],

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
            "Number of medical prescriptions per page"
        }

      ],

      responses: {

        200: {

          description:
            "Medical prescriptions retrieved successfully.",

          content: {

            "application/json": {

              schema: {

                type: "array",

                items: {

                  $ref:
                    "#/components/schemas/MedicalPrescriptionOrchestratorResponse"

                }

              }

            }

          }

        },

        400: {

          description:
            "Invalid pagination parameters"

        }

      }

    },


    // ============================================================
    // CREATE COMPLETE MEDICAL PRESCRIPTION
    // ============================================================

    post: {

      summary: "Create complete medical prescription",

      description:
        "Creates a medical prescription and all of its associated details.",

      tags: ["Medical Prescription Orchestrator"],

      requestBody: {

        required: true,

        content: {

          "application/json": {

            schema: {

              $ref:
                "#/components/schemas/CreateMedicalPrescriptionRequest"

            }

          }

        }

      },

      responses: {

        201: {

          description:
            "Medical prescription and its details created successfully.",

          content: {

            "application/json": {

              schema: {

                $ref:
                  "#/components/schemas/MedicalPrescriptionOrchestratorResponse"

              }

            }

          }

        },

        400: {

          description:
            "Invalid medical prescription data"

        }

      }

    }

  },

  // ============================================================
  // GET COMPLETE MEDICAL PRESCRIPTION
  // ============================================================

  "/medicalPrescriptionOrchestrator/{id}": {

    get: {

      summary: "Get complete medical prescription",

      description:
        "Returns a medical prescription together with all of its associated details.",

      tags: ["Medical Prescription Orchestrator"],

      parameters: [

        {
          name: "id",

          in: "path",

          required: true,

          schema: {
            type: "string"
          },

          description:
            "Medical prescription identifier"
        }

      ],

      responses: {

        200: {

          description:
            "Medical prescription and its details retrieved successfully.",

          content: {

            "application/json": {

              schema: {

                $ref:
                  "#/components/schemas/MedicalPrescriptionOrchestratorResponse"

              }

            }

          }

        },

        404: {

          description:
            "Medical prescription not found"

        },

        400: {

          description:
            "Invalid medical prescription identifier"

        }

      }

    },


    // ============================================================
    // UPDATE COMPLETE MEDICAL PRESCRIPTION
    // ============================================================

    put: {

      summary: "Update complete medical prescription",

      description:
        "Updates a medical prescription and creates or updates its associated details.",

      tags: ["Medical Prescription Orchestrator"],

      parameters: [

        {
          name: "id",

          in: "path",

          required: true,

          schema: {
            type: "string"
          },

          description:
            "Medical prescription identifier"
        }

      ],

      requestBody: {

        required: true,

        content: {

          "application/json": {

            schema: {

              $ref:
                "#/components/schemas/UpdateMedicalPrescriptionRequest"

            }

          }

        }

      },

      responses: {

        200: {

          description:
            "Medical prescription and its details updated successfully.",

          content: {

            "application/json": {

              schema: {

                $ref:
                  "#/components/schemas/MedicalPrescriptionOrchestratorResponse"

              }

            }

          }

        },

        400: {

          description:
            "Invalid medical prescription data"

        },

        404: {

          description:
            "Medical prescription not found"

        }

      }

    },


    // ============================================================
    // DELETE COMPLETE MEDICAL PRESCRIPTION
    // ============================================================

    delete: {

      summary: "Delete complete medical prescription",

      description:
        "Deletes a medical prescription and all of its associated details.",

      tags: ["Medical Prescription Orchestrator"],

      parameters: [

        {
          name: "id",

          in: "path",

          required: true,

          schema: {
            type: "string"
          },

          description:
            "Medical prescription identifier"
        }

      ],

      responses: {

        204: {

          description:
            "Medical prescription and its details deleted successfully."

        },

        400: {

          description:
            "Invalid medical prescription identifier"

        },

        404: {

          description:
            "Medical prescription not found"

        }

      }

    }

  },

};