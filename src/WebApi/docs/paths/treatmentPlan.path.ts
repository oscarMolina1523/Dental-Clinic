export const TreatmentPlanPaths = {
  "/treatmentPlan": {
    get: {
      summary: "Get all TreatmentPlan",
      tags: ["TreatmentPlan"],
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
          description: "List of TreatmentPlan",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: { $ref: "#/components/schemas/TreatmentPlan" }
              }
            }
          }
        }
      }
    },
    post: {
      summary: "Create TreatmentPlan",
      tags: ["TreatmentPlan"],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: { $ref: "#/components/schemas/TreatmentPlanRequest" }
          }
        }
      },
      responses: {
        201: {
          description: "TreatmentPlan created"
        }
      }
    }
  },

  "/treatmentPlan/{id}": {
    get: {
      summary: "Get TreatmentPlan by id",
      tags: ["TreatmentPlan"],
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
          description: "TreatmentPlan found",
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/TreatmentPlan" }
            }
          }
        },
        404: {
          description: "Not found"
        }
      }
    },

    put: {
      summary: "Update TreatmentPlan",
      tags: ["TreatmentPlan"],
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
            schema: { $ref: "#/components/schemas/TreatmentPlanRequest" }
          }
        }
      },
      responses: {
        200: {
          description: "TreatmentPlan updated"
        },
        404: {
          description: "Not found"
        }
      }
    },

    delete: {
      summary: "Delete TreatmentPlan",
      tags: ["TreatmentPlan"],
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
          description: "TreatmentPlan deleted"
        },
        404: {
          description: "Not found"
        }
      }
    }
  },

  // ============================================================
  // MONEY
  // ============================================================

  "/treatmentPlan/{id}/subtotal": {

    put: {
      summary: "Set treatment plan subtotal",
      description:
        "Updates the subtotal of the treatment plan. The subtotal should be calculated from its treatment plan details.",
      tags: ["TreatmentPlan"],
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
              $ref: "#/components/schemas/TreatmentPlanSubtotalRequest"
            }
          }
        }
      },
      responses: {
        200: {
          description: "Subtotal updated",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/TreatmentPlan"
              }
            }
          }
        },
        400: {
          description: "Invalid subtotal"
        },
        404: {
          description: "Treatment Plan not found"
        }
      }
    }
  },

  "/treatmentPlan/{id}/discount": {

    put: {
      summary: "Apply discount to treatment plan",
      tags: ["TreatmentPlan"],
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
              $ref: "#/components/schemas/TreatmentPlanDiscountRequest"
            }
          }
        }
      },
      responses: {
        200: {
          description: "Discount applied",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/TreatmentPlan"
              }
            }
          }
        },
        400: {
          description: "Invalid discount"
        },
        404: {
          description: "Treatment Plan not found"
        }
      }
    },

    delete: {
      summary: "Remove treatment plan discount",
      tags: ["TreatmentPlan"],
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
          description: "Discount removed",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/TreatmentPlan"
              }
            }
          }
        },
        404: {
          description: "Treatment Plan not found"
        }
      }
    }
  },

  // ============================================================
  // STATUS
  // ============================================================

  "/treatmentPlan/{id}/propose": {

    post: {
      summary: "Propose treatment plan",
      description:
        "Changes the treatment plan status from DRAFT to PROPOSED.",
      tags: ["TreatmentPlan"],
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
          description: "Treatment Plan proposed",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/TreatmentPlan"
              }
            }
          }
        },
        400: {
          description: "Invalid status transition"
        },
        404: {
          description: "Treatment Plan not found"
        }
      }
    }
  },

  "/treatmentPlan/{id}/accept": {

    post: {
      summary: "Accept treatment plan",
      description:
        "Changes the treatment plan status from PROPOSED to ACCEPTED.",
      tags: ["TreatmentPlan"],
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
          description: "Treatment Plan accepted",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/TreatmentPlan"
              }
            }
          }
        },
        400: {
          description: "Invalid status transition"
        },
        404: {
          description: "Treatment Plan not found"
        }
      }
    }
  },

  "/treatmentPlan/{id}/start": {

    post: {
      summary: "Start treatment plan",
      description:
        "Changes the treatment plan status from ACCEPTED to IN_PROGRESS.",
      tags: ["TreatmentPlan"],
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
          description: "Treatment Plan started",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/TreatmentPlan"
              }
            }
          }
        },
        400: {
          description: "Invalid status transition"
        },
        404: {
          description: "Treatment Plan not found"
        }
      }
    }
  },

  "/treatmentPlan/{id}/complete": {

    post: {
      summary: "Complete treatment plan",
      description:
        "Changes the treatment plan status from IN_PROGRESS to COMPLETED.",
      tags: ["TreatmentPlan"],
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
          description: "Treatment Plan completed",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/TreatmentPlan"
              }
            }
          }
        },
        400: {
          description: "Invalid status transition"
        },
        404: {
          description: "Treatment Plan not found"
        }
      }
    }
  },

  "/treatmentPlan/{id}/cancel": {

    post: {
      summary: "Cancel treatment plan",
      description:
        "Cancels the treatment plan if it has not already been completed.",
      tags: ["TreatmentPlan"],
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
          description: "Treatment Plan cancelled",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/TreatmentPlan"
              }
            }
          }
        },
        400: {
          description: "Treatment Plan cannot be cancelled"
        },
        404: {
          description: "Treatment Plan not found"
        }
      }
    }
  },

  TreatmentPlanSubtotalRequest: {
    type: "object",

    required: [
      "amount"
    ],

    properties: {

      amount: {
        type: "number",
        format: "double",
        minimum: 0,
        example: 1500,
        description:
          "Subtotal calculated from all treatment plan details."
      }
    }
  },


  // ============================================================
  // DISCOUNT
  // ============================================================

  TreatmentPlanDiscountRequest: {
    type: "object",

    required: [
      "discount"
    ],

    properties: {

      discount: {
        type: "number",
        format: "double",
        minimum: 0,
        example: 100,
        description:
          "Discount amount applied to the treatment plan."
      }
    }
  }
};
