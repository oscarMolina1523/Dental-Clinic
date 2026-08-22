export const PaymentPlanPaths = {
  "/paymentPlan": {
    get: {
      summary: "Get all PaymentPlan",
      tags: ["PaymentPlan"],
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
          description: "List of PaymentPlan",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: { $ref: "#/components/schemas/PaymentPlan" }
              }
            }
          }
        }
      }
    },
    post: {
      summary: "Create PaymentPlan",
      tags: ["PaymentPlan"],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: { $ref: "#/components/schemas/PaymentPlanRequest" }
          }
        }
      },
      responses: {
        201: {
          description: "PaymentPlan created"
        }
      }
    }
  },

  "/paymentPlan/{id}": {
    get: {
      summary: "Get PaymentPlan by id",
      tags: ["PaymentPlan"],
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
          description: "PaymentPlan found",
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/PaymentPlan" }
            }
          }
        },
        404: {
          description: "Not found"
        }
      }
    },

    put: {
      summary: "Update PaymentPlan",
      tags: ["PaymentPlan"],
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
            schema: { $ref: "#/components/schemas/PaymentPlanRequest" }
          }
        }
      },
      responses: {
        200: {
          description: "PaymentPlan updated"
        },
        404: {
          description: "Not found"
        }
      }
    },

    delete: {
      summary: "Delete PaymentPlan",
      tags: ["PaymentPlan"],
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
          description: "PaymentPlan deleted"
        },
        404: {
          description: "Not found"
        }
      }
    }
  },
   "/paymentPlan/{id}/activate": {
    post: {
      summary: "Activate PaymentPlan",
      description:
        "Changes the payment plan status from PENDING to ACTIVE.",
      tags: ["PaymentPlan"],
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
          description: "PaymentPlan activated successfully",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/PaymentPlan"
              }
            }
          }
        },
        400: {
          description: "PaymentPlan cannot be activated"
        },
        404: {
          description: "PaymentPlan not found"
        }
      }
    }
  },

  "/paymentPlan/{id}/complete": {
    post: {
      summary: "Complete PaymentPlan",
      description:
        "Changes the payment plan status from ACTIVE to COMPLETED.",
      tags: ["PaymentPlan"],
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
          description: "PaymentPlan completed successfully",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/PaymentPlan"
              }
            }
          }
        },
        400: {
          description: "PaymentPlan cannot be completed"
        },
        404: {
          description: "PaymentPlan not found"
        }
      }
    }
  },

  "/paymentPlan/{id}/cancel": {
    post: {
      summary: "Cancel PaymentPlan",
      description:
        "Changes the payment plan status to CANCELLED.",
      tags: ["PaymentPlan"],
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
          description: "PaymentPlan cancelled successfully",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/PaymentPlan"
              }
            }
          }
        },
        400: {
          description: "PaymentPlan cannot be cancelled"
        },
        404: {
          description: "PaymentPlan not found"
        }
      }
    }
  },

  "/paymentPlan/{id}/installment-amount": {
    get: {
      summary: "Get installment amount",
      description:
        "Returns the amount that must be paid for each installment according to the payment plan.",
      tags: ["PaymentPlan"],
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
          description: "Installment amount calculated successfully",
          content: {
            "application/json": {
              schema: {
                type: "number",
                example: 250
              }
            }
          }
        },
        404: {
          description: "PaymentPlan not found"
        }
      }
    }
  }
};
