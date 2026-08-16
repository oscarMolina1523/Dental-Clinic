export const TreatmentPlanDetailPaths = {
  "/treatmentPlanDetail": {
    get: {
      summary: "Get all TreatmentPlanDetail",
      tags: ["TreatmentPlanDetail"],
      parameters: [
        {
          name: "page",
          in: "query",
          required: false,
          schema: {
            type: "integer",
            example: 1
          },
          description: "Page number"
        },
        {
          name: "pageSize",
          in: "query",
          required: false,
          schema: {
            type: "integer",
            example: 100
          },
          description: "Number of records per page"
        }
      ],
      responses: {
        200: {
          description: "List of TreatmentPlanDetail",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: { $ref: "#/components/schemas/TreatmentPlanDetail" }
              }
            }
          }
        }
      }
    },
    post: {
      summary: "Create TreatmentPlanDetail",
      tags: ["TreatmentPlanDetail"],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: { $ref: "#/components/schemas/TreatmentPlanDetailRequest" }
          }
        }
      },
      responses: {
        201: {
          description: "TreatmentPlanDetail created"
        }
      }
    }
  },

  "/treatmentPlanDetail/{id}": {
    get: {
      summary: "Get TreatmentPlanDetail by id",
      tags: ["TreatmentPlanDetail"],
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          schema: { type: "string" }
        }
      ],
      responses: {
        200: {
          description: "TreatmentPlanDetail found",
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/TreatmentPlanDetail" }
            }
          }
        },
        404: {
          description: "Not found"
        }
      }
    },

    put: {
      summary: "Update TreatmentPlanDetail",
      tags: ["TreatmentPlanDetail"],
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          schema: { type: "string" }
        }
      ],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: { $ref: "#/components/schemas/TreatmentPlanDetailRequest" }
          }
        }
      },
      responses: {
        200: {
          description: "TreatmentPlanDetail updated"
        },
        404: {
          description: "Not found"
        }
      }
    },

    delete: {
      summary: "Delete TreatmentPlanDetail",
      tags: ["TreatmentPlanDetail"],
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          schema: { type: "string" }
        }
      ],
      responses: {
        204: {
          description: "TreatmentPlanDetail deleted"
        },
        404: {
          description: "Not found"
        }
      }
    }
  },

  // ============================================================
  // QUANTITY
  // ============================================================

  "/treatmentPlanDetail/{id}/quantity": {

    put: {

      summary: "Change treatment plan detail quantity",

      description:
        "Changes the quantity of the treatment detail and automatically recalculates its subtotal.",

      tags: ["TreatmentPlanDetail"],

      parameters: [

        {
          name: "id",
          in: "path",
          required: true,

          schema: {
            type: "string",
            example: "detail-001"
          }
        }

      ],

      requestBody: {

        required: true,

        content: {
          "application/json": {

            schema: {
              $ref:
                "#/components/schemas/TreatmentPlanDetailQuantityRequest"
            }

          }
        }
      },

      responses: {

        200: {

          description:
            "Quantity changed and subtotal recalculated",

          content: {
            "application/json": {

              schema: {
                $ref:
                  "#/components/schemas/TreatmentPlanDetail"
              }

            }
          }
        },

        400: {
          description:
            "Quantity must be greater than zero"
        },

        404: {
          description:
            "TreatmentPlanDetail not found"
        }
      }
    }
  },


  // ============================================================
  // TOOTH
  // ============================================================

  "/treatmentPlanDetail/{id}/tooth": {

    put: {

      summary: "Change treatment plan detail tooth",

      description:
        "Changes the tooth number associated with the treatment detail.",

      tags: ["TreatmentPlanDetail"],

      parameters: [

        {
          name: "id",
          in: "path",
          required: true,

          schema: {
            type: "string",
            example: "detail-001"
          }
        }

      ],

      requestBody: {

        required: true,

        content: {
          "application/json": {

            schema: {
              $ref:
                "#/components/schemas/TreatmentPlanDetailToothRequest"
            }

          }
        }
      },

      responses: {

        200: {

          description: "Tooth number changed",

          content: {
            "application/json": {

              schema: {
                $ref:
                  "#/components/schemas/TreatmentPlanDetail"
              }

            }
          }
        },

        400: {
          description:
            "Tooth number must be greater than zero"
        },

        404: {
          description:
            "TreatmentPlanDetail not found"
        }
      }
    }
  },


  // ============================================================
  // START
  // ============================================================

  "/treatmentPlanDetail/{id}/start": {

    post: {

      summary: "Start treatment plan detail",

      description:
        "Changes the detail status from PENDING to IN_PROGRESS.",

      tags: ["TreatmentPlanDetail"],

      parameters: [

        {
          name: "id",
          in: "path",
          required: true,

          schema: {
            type: "string",
            example: "detail-001"
          }
        }

      ],

      responses: {

        200: {

          description: "TreatmentPlanDetail started",

          content: {
            "application/json": {

              schema: {
                $ref:
                  "#/components/schemas/TreatmentPlanDetail"
              }

            }
          }
        },

        400: {
          description:
            "Invalid status transition"
        },

        404: {
          description:
            "TreatmentPlanDetail not found"
        }
      }
    }
  },


  // ============================================================
  // COMPLETE
  // ============================================================

  "/treatmentPlanDetail/{id}/complete": {

    post: {

      summary: "Complete treatment plan detail",

      description:
        "Changes the detail status from IN_PROGRESS to COMPLETED.",

      tags: ["TreatmentPlanDetail"],

      parameters: [

        {
          name: "id",
          in: "path",
          required: true,

          schema: {
            type: "string",
            example: "detail-001"
          }
        }

      ],

      responses: {

        200: {

          description:
            "TreatmentPlanDetail completed",

          content: {
            "application/json": {

              schema: {
                $ref:
                  "#/components/schemas/TreatmentPlanDetail"
              }

            }
          }
        },

        400: {
          description:
            "Invalid status transition"
        },

        404: {
          description:
            "TreatmentPlanDetail not found"
        }
      }
    }
  },


  // ============================================================
  // CANCEL
  // ============================================================

  "/treatmentPlanDetail/{id}/cancel": {

    post: {

      summary: "Cancel treatment plan detail",

      description:
        "Changes the detail status to CANCELLED.",

      tags: ["TreatmentPlanDetail"],

      parameters: [

        {
          name: "id",
          in: "path",
          required: true,

          schema: {
            type: "string",
            example: "detail-001"
          }
        }

      ],

      responses: {

        200: {

          description:
            "TreatmentPlanDetail cancelled",

          content: {
            "application/json": {

              schema: {
                $ref:
                  "#/components/schemas/TreatmentPlanDetail"
              }

            }
          }
        },

        400: {
          description:
            "Invalid status transition"
        },

        404: {
          description:
            "TreatmentPlanDetail not found"
        }
      }
    }
  }

};
