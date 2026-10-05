export const AppointmentOrchestratorSchemas = {

  // ============================================================
  // CREATE APPOINTMENT ORCHESTRATOR REQUEST
  // ============================================================

  CreateAppointmentOrchestratorRequest: {

    type: "object",

    required: [
      "appointment"
    ],

    properties: {

      // --------------------------------------------------------
      // APPOINTMENT
      // --------------------------------------------------------

      appointment: {

        type: "object",

        required: [
          "patientId",
          "patientFullName",
          "dentistId",
          "dentistFullName",
          "dentistSpeciality",
          "startAppointmentTime",
          "endAppointmentTime",
          "reason"
        ],

        properties: {

          patientId: {
            type: "string",
            example: "patient-123"
          },

          patientFullName: {
            type: "string",
            example: "Juan Pérez"
          },

          dentistId: {
            type: "string",
            example: "dentist-456"
          },

          dentistFullName: {
            type: "string",
            example: "Dr. Carlos López"
          },

          dentistSpeciality: {
            type: "string",
            example: "Odontología General"
          },

          treatmentId: {
            type: "string",
            nullable: true,
            example: "treatment-789"
          },

          treatmentPlanId: {
            type: "string",
            nullable: true,
            example: "treatment-plan-123"
          },

          allergies: {
            type: "string",
            nullable: true,
            example: "Alergia a la penicilina"
          },

          symptoms: {
            type: "string",
            nullable: true,
            example: "Dolor en molar superior derecho"
          },

          diagnosis: {
            type: "string",
            nullable: true,
            example: "Caries dental"
          },

          clinicalNotes: {
            type: "string",
            nullable: true,
            example: "Se recomienda tratamiento restaurativo."
          },

          startAppointmentTime: {
            type: "string",
            format: "date-time",
            example: "2026-10-05T15:00:00.000Z"
          },

          endAppointmentTime: {
            type: "string",
            format: "date-time",
            example: "2026-10-05T15:30:00.000Z"
          },

          reason: {
            type: "string",
            example: "Consulta odontológica"
          },

          status: {
            type: "string",
            nullable: true,
            enum: [
              "SCHEDULED",
              "CONFIRMED",
              "IN_PROGRESS",
              "COMPLETED",
              "CANCELLED",
              "NO_SHOW"
            ],
            example: "SCHEDULED"
          },

          cancelationNotes: {
            type: "string",
            nullable: true,
            example: ""
          },

          reminderSent: {
            type: "boolean",
            nullable: true,
            example: false
          }
        }
      },

      // --------------------------------------------------------
      // TREATMENT PLAN
      // --------------------------------------------------------

      treatmentPlan: {

        type: "object",

        nullable: true,

        required: [
          "data",
          "details"
        ],

        properties: {

          data: {

            type: "object",

            required: [
              "patientId",
              "patientFullName",
              "dentistId",
              "dentistFullName",
              "code"
            ],

            properties: {

              patientId: {
                type: "string",
                example: "patient-123"
              },

              patientFullName: {
                type: "string",
                example: "Juan Pérez"
              },

              dentistId: {
                type: "string",
                example: "dentist-456"
              },

              dentistFullName: {
                type: "string",
                example: "Dr. Carlos López"
              },

              code: {
                type: "string",
                example: "PLAN-2026-001"
              },

              status: {
                type: "string",
                example: "DRAFT"
              },

              totalAmount: {
                type: "number",
                example: 2500
              },

              discount: {
                type: "number",
                example: 100
              }
            }
          },

          details: {

            type: "array",

            items: {

              type: "object",

              required: [
                "treatmentId",
                "treatmentName",
                "toothNumber",
                "quantity",
                "unitPrice"
              ],

              properties: {

                id: {
                  type: "string",
                  nullable: true,
                  example: "detail-123"
                },

                planId: {
                  type: "string",
                  nullable: true,
                  example: ""
                },

                treatmentId: {
                  type: "string",
                  example: "treatment-789"
                },

                treatmentName: {
                  type: "string",
                  example: "Restauración dental"
                },

                toothNumber: {
                  type: "integer",
                  example: 16
                },

                quantity: {
                  type: "integer",
                  example: 1
                },

                unitPrice: {
                  type: "number",
                  example: 1500
                },

                subtotal: {
                  type: "number",
                  example: 1500
                },

                status: {
                  type: "string",
                  example: "PENDING"
                }
              }
            }
          }
        }
      }
    }
  },


  // ============================================================
  // RESPONSE
  // ============================================================

  AppointmentOrchestrator: {

    type: "object",

    properties: {

      // --------------------------------------------------------
      // APPOINTMENT
      // --------------------------------------------------------

      appointment: {

        type: "object",

        properties: {

          id: {
            type: "string",
            example: "appointment-123"
          },

          patientId: {
            type: "string",
            example: "patient-123"
          },

          patientFullName: {
            type: "string",
            example: "Juan Pérez"
          },

          dentistId: {
            type: "string",
            example: "dentist-456"
          },

          dentistFullName: {
            type: "string",
            example: "Dr. Carlos López"
          },

          dentistSpeciality: {
            type: "string",
            example: "Odontología General"
          },

          treatmentId: {
            type: "string",
            nullable: true,
            example: "treatment-789"
          },

          treatmentPlanId: {
            type: "string",
            nullable: true,
            example: "treatment-plan-123"
          },

          allergies: {
            type: "string",
            nullable: true,
            example: "Alergia a la penicilina"
          },

          symptoms: {
            type: "string",
            nullable: true,
            example: "Dolor dental"
          },

          diagnosis: {
            type: "string",
            nullable: true,
            example: "Caries dental"
          },

          clinicalNotes: {
            type: "string",
            nullable: true,
            example: "Se recomienda restauración."
          },

          startAppointmentTime: {
            type: "string",
            format: "date-time",
            example: "2026-10-05T15:00:00.000Z"
          },

          endAppointmentTime: {
            type: "string",
            format: "date-time",
            example: "2026-10-05T15:30:00.000Z"
          },

          reason: {
            type: "string",
            example: "Consulta odontológica"
          },

          status: {
            type: "string",
            example: "SCHEDULED"
          },

          cancelationNotes: {
            type: "string",
            nullable: true,
            example: ""
          },

          reminderSent: {
            type: "boolean",
            example: false
          },

          createdAt: {
            type: "string",
            format: "date-time",
            example: "2026-10-04T18:00:00.000Z"
          }
        }
      },


      // --------------------------------------------------------
      // TREATMENT CATALOG
      // --------------------------------------------------------

      treatment: {

        nullable: true,

        type: "object",

        properties: {

          id: {
            type: "string",
            example: "treatment-789"
          },

          code: {
            type: "string",
            example: "REST-001"
          },

          name: {
            type: "string",
            example: "Restauración dental"
          },

          description: {
            type: "string",
            example: "Restauración de pieza dental."
          },

          basePrice: {
            type: "number",
            example: 1500
          },

          estimatedDurationMinutes: {
            type: "integer",
            example: 45
          },

          active: {
            type: "boolean",
            example: true
          }
        }
      },


      // --------------------------------------------------------
      // TREATMENT PLAN
      // --------------------------------------------------------

      treatmentPlan: {

        nullable: true,

        type: "object",

        properties: {

          id: {
            type: "string",
            example: "treatment-plan-123"
          },

          patientId: {
            type: "string",
            example: "patient-123"
          },

          patientFullName: {
            type: "string",
            example: "Juan Pérez"
          },

          dentistId: {
            type: "string",
            example: "dentist-456"
          },

          dentistFullName: {
            type: "string",
            example: "Dr. Carlos López"
          },

          code: {
            type: "string",
            example: "PLAN-2026-001"
          },

          status: {
            type: "string",
            example: "DRAFT"
          },

          totalAmount: {
            type: "number",
            example: 2500
          },

          discount: {
            type: "number",
            example: 100
          },

          createdAt: {
            type: "string",
            format: "date-time",
            example: "2026-10-04T18:00:00.000Z"
          }
        }
      },


      // --------------------------------------------------------
      // TREATMENT PLAN DETAILS
      // --------------------------------------------------------

      treatmentPlanDetails: {

        type: "array",

        items: {

          type: "object",

          properties: {

            id: {
              type: "string",
              example: "detail-123"
            },

            planId: {
              type: "string",
              example: "treatment-plan-123"
            },

            treatmentId: {
              type: "string",
              example: "treatment-789"
            },

            treatmentName: {
              type: "string",
              example: "Restauración dental"
            },

            toothNumber: {
              type: "integer",
              example: 16
            },

            quantity: {
              type: "integer",
              example: 1
            },

            unitPrice: {
              type: "number",
              example: 1500
            },

            subtotal: {
              type: "number",
              example: 1500
            },

            status: {
              type: "string",
              example: "PENDING"
            }
          }
        }
      }
    }
  }
};