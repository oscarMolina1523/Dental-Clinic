export const MedicalPrescriptionOrchestratorSchemas = {

  // ============================================================
  // CREATE MEDICAL PRESCRIPTION
  // ============================================================

  CreateMedicalPrescriptionRequest: {

    type: "object",

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
          "date",
          "generalInstructions"
        ],

        properties: {

          patientId: {

            type: "string",

            example: "patient-123"

          },
          patientFullName: {

            type: "string",

            example: "Patient name"

          },

          dentistId: {

            type: "string",

            example: "dentist-123"

          },
          dentistFullName: {

            type: "string",

            example: "Dentist Name"

          },

          date: {

            type: "string",

            format: "date-time",

            example:
              "2026-09-09T15:30:00.000Z"

          },

          generalInstructions: {

            type: "string",

            example:
              "Tomar abundante agua y mantener reposo."

          }

        }

      },


      details: {

        type: "array",

        items: {

          $ref:
            "#/components/schemas/MedicalPrescriptionDetailRequest"

        }

      }

    }

  },


  // ============================================================
  // UPDATE MEDICAL PRESCRIPTION
  // ============================================================

  UpdateMedicalPrescriptionRequest: {

    type: "object",

    required: [
      "data",
      "details"
    ],

    properties: {

      data: {

        type: "object",

        required: [
          "patientId",
          "dentistId",
          "date",
          "generalInstructions"
        ],

        properties: {

          patientId: {

            type: "string",

            example: "patient-123"

          },
          patientFullName: {

            type: "string",

            example: "Patient name"

          },

          dentistId: {

            type: "string",

            example: "dentist-123"

          },
          dentistFullName: {

            type: "string",

            example: "Dentist Name"

          },

          date: {

            type: "string",

            format: "date-time",

            example:
              "2026-09-09T15:30:00.000Z"

          },

          generalInstructions: {

            type: "string",

            example:
              "Tomar abundante agua y mantener reposo."

          }

        }

      },


      details: {

        type: "array",

        items: {

          $ref:
            "#/components/schemas/MedicalPrescriptionDetailRequest"

        }

      }

    }

  },


  // ============================================================
  // MEDICAL PRESCRIPTION DETAIL REQUEST
  // ============================================================

  MedicalPrescriptionDetailRequest: {

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

        example:
          "Amoxicilina 500mg"

      },

      dose: {

        type: "string",

        example:
          "1 cápsula"

      },

      frequency: {

        type: "string",

        example:
          "Cada 8 horas"

      },

      duration: {

        type: "string",

        example:
          "7 días"

      }

    }

  },


  // ============================================================
  // RESPONSE
  // ============================================================

  MedicalPrescriptionOrchestratorResponse: {

    type: "object",

    properties: {

      medicalPrescription: {

        $ref:
          "#/components/schemas/MedicalPrescription"

      },

      details: {

        type: "array",

        items: {

          $ref:
            "#/components/schemas/MedicalPrescriptionDetail"

        }

      }

    }

  },


  // ============================================================
  // MEDICAL PRESCRIPTION
  // ============================================================

  MedicalPrescription: {

    type: "object",

    properties: {

      id: {

        type: "string",

        example:
          "medical-prescription-123"

      },

      patientId: {

        type: "string",

        example:
          "patient-123"

      },

      dentistId: {

        type: "string",

        example:
          "dentist-123"

      },

      date: {

        type: "string",

        format: "date-time",

        example:
          "2026-09-09T15:30:00.000Z"

      },

      generalInstructions: {

        type: "string",

        example:
          "Tomar abundante agua y mantener reposo."

      }

    }

  },


  // ============================================================
  // MEDICAL PRESCRIPTION DETAIL
  // ============================================================

  MedicalPrescriptionDetail: {

    type: "object",

    properties: {

      id: {

        type: "string",

        example:
          "medical-prescription-detail-123"

      },

      medicalPrescriptionId: {

        type: "string",

        example:
          "medical-prescription-123"

      },

      medicine: {

        type: "string",

        example:
          "Amoxicilina 500mg"

      },

      dose: {

        type: "string",

        example:
          "1 cápsula"

      },

      frequency: {

        type: "string",

        example:
          "Cada 8 horas"

      },

      duration: {

        type: "string",

        example:
          "7 días"

      }

    }

  }

};