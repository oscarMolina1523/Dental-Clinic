export const ClinicalProgressOrchestratorSchemas = {

  // ============================================================
  // CREATE CLINICAL PROGRESS ORCHESTRATOR REQUEST
  // ============================================================

  CreateClinicalProgressOrchestratorRequest: {
    type: "object",

    required: [
      "clinicalProgress"
    ],

    properties: {

      // --------------------------------------------------------
      // CLINICAL PROGRESS
      // --------------------------------------------------------

      clinicalProgress: {
        type: "object",

        required: [
          "patientId",
          "dateId",
          "dentistId",
          "diagnosis",
          "treatmentId",
          "observations",
          "registrationDate"
        ],

        properties: {

          patientId: {
            type: "string",
            example: "patient-123"
          },

          dateId: {
            type: "string",
            example: "appointment-123"
          },

          dentistId: {
            type: "string",
            example: "dentist-456"
          },

          diagnosis: {
            type: "string",
            example: "Caries dental"
          },

          treatmentId: {
            type: "string",
            example: "treatment-789"
          },

          observations: {
            type: "string",
            example: "Paciente presenta sensibilidad dental."
          },

          registrationDate: {
            type: "string",
            format: "date-time",
            example: "2026-09-27T18:00:00.000Z"
          }
        }
      },

      // --------------------------------------------------------
      // MEDICAL PRESCRIPTION
      // --------------------------------------------------------

      medicalPrescription: {
        type: "object",

        required: [
          "data",
          "details"
        ],

        properties: {

          data: {
            type: "object",

            required: [
              "clinicalProgressId",
              "generalInstructions"
            ],

            properties: {

              clinicalProgressId: {
                type: "string",
                example: ""
              },

              generalInstructions: {
                type: "string",
                example: "Tomar abundante agua y evitar alimentos muy fríos."
              }
            }
          },

          details: {
            type: "array",

            items: {
              type: "object",

              required: [
                "medicine",
                "dose",
                "frequency",
                "duration"
              ],

              properties: {

                medicine: {
                  type: "string",
                  example: "Amoxicilina"
                },

                dose: {
                  type: "string",
                  example: "500 mg"
                },

                frequency: {
                  type: "string",
                  example: "Cada 8 horas"
                },

                duration: {
                  type: "string",
                  example: "7 días"
                }
              }
            }
          }
        }
      },

      // --------------------------------------------------------
      // DENTAL CHART
      // --------------------------------------------------------

      dentalChart: {
        type: "object",

        required: [
          "dentalChart",
          "details"
        ],

        properties: {

          dentalChart: {
            type: "object",

            required: [
              "clinicalProgressId",
              "patientId",
              "evaluationDate",
              "dentistId",
              "observations"
            ],

            properties: {

              clinicalProgressId: {
                type: "string",
                example: ""
              },

              patientId: {
                type: "string",
                example: "patient-123"
              },

              evaluationDate: {
                type: "string",
                format: "date-time",
                example: "2026-09-27T18:00:00.000Z"
              },

              dentistId: {
                type: "string",
                example: "dentist-456"
              },

              observations: {
                type: "string",
                example: "Se observa caries en pieza dental 16."
              }
            }
          },

          details: {
            type: "array",

            items: {
              type: "object",

              required: [
                "dentalChartId",
                "toothNumber",
                "face",
                "toothStatus",
                "notes"
              ],

              properties: {

                dentalChartId: {
                  type: "string",
                  example: ""
                },

                toothNumber: {
                  type: "integer",
                  example: 16
                },

                face: {
                  type: "string",
                  example: "Oclusal"
                },

                toothStatus: {
                  type: "string",
                  example: "CARIES",
                  enum: [
                    "HEALTHY",
                    "CARIES",
                    "FILLED",
                    "FRACTURED",
                    "WORN",
                    "MISSING",
                    "EXTRACTED",
                    "ROOT_CANAL_TREATED",
                    "CROWN",
                    "IMPLANT",
                    "BRIDGE",
                    "PROSTHETIC",
                    "IMPACTED",
                    "MOBILE",
                    "INFECTED",
                    "ABSCESS",
                    "PERIODONTAL_AFFECTATION",
                    "SENSITIVITY",
                    "DISCOLORATION",
                    "DEVELOPMENTAL_ANOMALY",
                    "OTHER"
                  ]
                },

                notes: {
                  type: "string",
                  example: "Caries profunda en superficie oclusal."
                }
              }
            }
          }
        }
      },

      // --------------------------------------------------------
      // PATIENT ATTACHMENT
      // --------------------------------------------------------

      patientAttachment: {
        type: "object",

        required: [
          "clinicalProgressId",
          "fileType",
          "fileName",
          "fileUrl",
          "uploadedBy"
        ],

        properties: {

          clinicalProgressId: {
            type: "string",
            example: ""
          },

          fileType: {
            type: "string",
            example: "PDF"
          },

          fileName: {
            type: "string",
            example: "radiografia-dental.pdf"
          },

          fileUrl: {
            type: "string",
            example: "https://storage.example.com/radiografia-dental.pdf"
          },

          uploadedBy: {
            type: "string",
            example: "dentist-456"
          }
        }
      }
    }
  },

  // ============================================================
  // RESPONSE
  // ============================================================

  ClinicalProgressOrchestrator: {
    type: "object",

    properties: {

      clinicalProgress: {
        type: "object",

        properties: {

          id: {
            type: "string",
            example: "clinical-progress-123"
          },

          patientId: {
            type: "string",
            example: "patient-123"
          },

          dateId: {
            type: "string",
            example: "appointment-123"
          },

          dentistId: {
            type: "string",
            example: "dentist-456"
          },

          diagnosis: {
            type: "string",
            example: "Caries dental"
          },

          treatmentId: {
            type: "string",
            example: "treatment-789"
          },

          observations: {
            type: "string",
            example: "Paciente presenta sensibilidad dental."
          },

          registrationDate: {
            type: "string",
            format: "date-time",
            example: "2026-09-27T18:00:00.000Z"
          }
        }
      },

      medicalPrescription: {
        nullable: true,
        $ref: "#/components/schemas/MedicalPrescriptionWithDetails"
      },

      dentalChart: {
        nullable: true,
        $ref: "#/components/schemas/DentalChartWithDetails"
      },

      patientAttachment: {
        nullable: true,
        $ref: "#/components/schemas/PatientAttachment"
      }
    }
  }
};