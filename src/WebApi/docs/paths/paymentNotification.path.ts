export const PaymentNotificationPaths = {

  // ============================================================
  // GET ALL / CREATE
  // ============================================================

  "/paymentNotification": {

    get: {
      summary: "Get all PaymentNotification",
      tags: ["PaymentNotification"],

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
          description: "List of PaymentNotification",

          content: {
            "application/json": {
              schema: {
                type: "array",
                items: {
                  $ref: "#/components/schemas/PaymentNotification"
                }
              }
            }
          }
        }
      }
    },

    post: {
      summary: "Create PaymentNotification",
      tags: ["PaymentNotification"],

      requestBody: {
        required: true,

        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/PaymentNotificationRequest"
            }
          }
        }
      },

      responses: {

        201: {
          description: "PaymentNotification created",

          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/PaymentNotification"
              }
            }
          }
        }
      }
    }
  },

  // ============================================================
  // GET / UPDATE / DELETE
  // ============================================================

  "/paymentNotification/{id}": {

    get: {

      summary: "Get PaymentNotification by id",
      tags: ["PaymentNotification"],

      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          schema: {
            type: "string"
          },
          description: "Payment notification id"
        }
      ],

      responses: {

        200: {
          description: "PaymentNotification found",

          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/PaymentNotification"
              }
            }
          }
        },

        404: {
          description: "PaymentNotification not found"
        }
      }
    },

    put: {

      summary: "Update PaymentNotification",
      tags: ["PaymentNotification"],

      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          schema: {
            type: "string"
          },
          description: "Payment notification id"
        }
      ],

      requestBody: {
        required: true,

        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/PaymentNotificationRequest"
            }
          }
        }
      },

      responses: {

        200: {
          description: "PaymentNotification updated",

          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/PaymentNotification"
              }
            }
          }
        },

        404: {
          description: "PaymentNotification not found"
        }
      }
    },

    delete: {

      summary: "Delete PaymentNotification",
      tags: ["PaymentNotification"],

      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          schema: {
            type: "string"
          },
          description: "Payment notification id"
        }
      ],

      responses: {

        204: {
          description: "PaymentNotification deleted"
        },

        404: {
          description: "PaymentNotification not found"
        }
      }
    }
  },

  // ============================================================
  // UPDATE STATUS
  // ============================================================

  "/paymentNotification/{id}/status": {

    patch: {

      summary: "Update PaymentNotification status",
      tags: ["PaymentNotification"],

      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          schema: {
            type: "string"
          },
          description: "Payment notification id"
        }
      ],

      requestBody: {
        required: true,

        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/PaymentNotificationStatusRequest"
            }
          }
        }
      },

      responses: {

        200: {
          description: "PaymentNotification status updated",

          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/PaymentNotification"
              }
            }
          }
        },

        404: {
          description: "PaymentNotification not found"
        }
      }
    }
  },

  // ============================================================
  // RESCHEDULE
  // ============================================================

  "/paymentNotification/{id}/reschedule": {

    patch: {

      summary: "Reschedule PaymentNotification",
      tags: ["PaymentNotification"],

      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          schema: {
            type: "string"
          },
          description: "Payment notification id"
        }
      ],

      requestBody: {
        required: true,

        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/PaymentNotificationRescheduleRequest"
            }
          }
        }
      },

      responses: {

        200: {
          description: "PaymentNotification rescheduled",

          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/PaymentNotification"
              }
            }
          }
        },

        404: {
          description: "PaymentNotification not found"
        }
      }
    }
  },

  // ============================================================
  // MARK AS SENT
  // ============================================================

  "/paymentNotification/{id}/send": {

    patch: {

      summary: "Mark PaymentNotification as sent",
      tags: ["PaymentNotification"],

      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          schema: {
            type: "string"
          },
          description: "Payment notification id"
        }
      ],

      responses: {

        200: {
          description: "PaymentNotification marked as sent",

          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/PaymentNotification"
              }
            }
          }
        },

        404: {
          description: "PaymentNotification not found"
        }
      }
    }
  },

  // ============================================================
  // MARK AS FAILED
  // ============================================================

  "/paymentNotification/{id}/fail": {

    patch: {

      summary: "Mark PaymentNotification as failed",
      tags: ["PaymentNotification"],

      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          schema: {
            type: "string"
          },
          description: "Payment notification id"
        }
      ],

      responses: {

        200: {
          description: "PaymentNotification marked as failed",

          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/PaymentNotification"
              }
            }
          }
        },

        404: {
          description: "PaymentNotification not found"
        }
      }
    }
  },

  // ============================================================
  // CANCEL
  // ============================================================

  "/paymentNotification/{id}/cancel": {

    patch: {

      summary: "Cancel PaymentNotification",
      tags: ["PaymentNotification"],

      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          schema: {
            type: "string"
          },
          description: "Payment notification id"
        }
      ],

      responses: {

        200: {
          description: "PaymentNotification cancelled",

          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/PaymentNotification"
              }
            }
          }
        },

        404: {
          description: "PaymentNotification not found"
        }
      }
    }
  }
};