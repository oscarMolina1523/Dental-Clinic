export const AppointmentOrchestratorPaths = {

  // ============================================================
  // APPOINTMENT ORCHESTRATOR
  // ============================================================

  "/appointmentOrchestrator": {

    // ==========================================================
    // GET ALL
    // ==========================================================

    get: {

      summary: "Get All Appointments",

      description:
        "Returns all appointments with their related treatment catalog information or treatment plan and its details.",

      tags: [
        "Appointment Orchestrator"
      ],

      responses: {

        200: {

          description:
            "Appointments retrieved successfully.",

          content: {

            "application/json": {

              schema: {

                type: "array",

                items: {

                  $ref:
                    "#/components/schemas/AppointmentOrchestrator"

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


    // ==========================================================
    // CREATE
    // ==========================================================

    post: {

      summary: "Create Appointment",

      description:
        "Creates an appointment. The appointment can reference an existing treatment from the treatment catalog or create a new treatment plan with its details. An appointment cannot contain both a treatment and a treatment plan.",

      tags: [
        "Appointment Orchestrator"
      ],

      requestBody: {

        required: true,

        content: {

          "application/json": {

            schema: {

              $ref:
                "#/components/schemas/CreateAppointmentOrchestratorRequest"

            }

          }

        }

      },

      responses: {

        201: {

          description:
            "Appointment created successfully.",

          content: {

            "application/json": {

              schema: {

                $ref:
                  "#/components/schemas/AppointmentOrchestrator"

              }

            }

          }

        },

        400: {

          description:
            "Invalid appointment data or treatment/treatment plan conflict."

        },

        500: {

          description:
            "Internal server error."

        }

      }

    }

  },


  // ============================================================
  // GET / UPDATE / DELETE BY ID
  // ============================================================

  "/appointmentOrchestrator/{id}": {

    // ==========================================================
    // GET BY ID
    // ==========================================================

    get: {

      summary: "Get Appointment By ID",

      description:
        "Returns a complete appointment with its related treatment catalog information or treatment plan and its details.",

      tags: [
        "Appointment Orchestrator"
      ],

      parameters: [

        {

          name: "id",

          in: "path",

          required: true,

          description:
            "Unique identifier of the appointment.",

          schema: {

            type: "string"

          }

        }

      ],

      responses: {

        200: {

          description:
            "Appointment retrieved successfully.",

          content: {

            "application/json": {

              schema: {

                $ref:
                  "#/components/schemas/AppointmentOrchestrator"

              }

            }

          }

        },

        404: {

          description:
            "Appointment not found."

        },

        500: {

          description:
            "Internal server error."

        }

      }

    },


    // ==========================================================
    // UPDATE
    // ==========================================================

    put: {

      summary: "Update Appointment",

      description:
        "Updates an appointment. When a treatment plan is provided, the existing treatment plan referenced by the appointment is updated together with its details. Treatment catalog records are not modified.",

      tags: [
        "Appointment Orchestrator"
      ],

      parameters: [

        {

          name: "id",

          in: "path",

          required: true,

          description:
            "Unique identifier of the appointment.",

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
                "#/components/schemas/CreateAppointmentOrchestratorRequest"

            }

          }

        }

      },

      responses: {

        200: {

          description:
            "Appointment updated successfully.",

          content: {

            "application/json": {

              schema: {

                $ref:
                  "#/components/schemas/AppointmentOrchestrator"

              }

            }

          }

        },

        400: {

          description:
            "Invalid appointment data."

        },

        404: {

          description:
            "Appointment not found."

        },

        500: {

          description:
            "Internal server error."

        }

      }

    },


    // ==========================================================
    // DELETE
    // ==========================================================

    delete: {

      summary: "Delete Appointment",

      description:
        "Deletes an appointment. If the appointment has an associated treatment plan, its details and the treatment plan are also deleted. Treatment catalog records are not deleted.",

      tags: [
        "Appointment Orchestrator"
      ],

      parameters: [

        {

          name: "id",

          in: "path",

          required: true,

          description:
            "Unique identifier of the appointment.",

          schema: {

            type: "string"

          }

        }

      ],

      responses: {

        204: {

          description:
            "Appointment deleted successfully."

        },

        404: {

          description:
            "Appointment not found."

        },

        500: {

          description:
            "Internal server error."

        }

      }

    }

  }

};