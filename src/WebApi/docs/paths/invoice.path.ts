export const InvoicePaths = {
  "/invoice": {
    get: {
      summary: "Get all Invoice",
      tags: ["Invoice"],
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
          description: "List of Invoice",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: { $ref: "#/components/schemas/Invoice" }
              }
            }
          }
        }
      }
    },
    post: {
      summary: "Create Invoice",
      tags: ["Invoice"],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: { $ref: "#/components/schemas/InvoiceRequest" }
          }
        }
      },
      responses: {
        201: {
          description: "Invoice created"
        }
      }
    }
  },

  "/invoice/{id}": {
    get: {
      summary: "Get Invoice by id",
      tags: ["Invoice"],
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
          description: "Invoice found",
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/Invoice" }
            }
          }
        },
        404: {
          description: "Not found"
        }
      }
    },

    put: {
      summary: "Update Invoice",
      tags: ["Invoice"],
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
            schema: { $ref: "#/components/schemas/InvoiceRequest" }
          }
        }
      },
      responses: {
        200: {
          description: "Invoice updated"
        },
        404: {
          description: "Not found"
        }
      }
    },

    delete: {
      summary: "Delete Invoice",
      tags: ["Invoice"],
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
          description: "Invoice deleted"
        },
        404: {
          description: "Not found"
        }
      }
    }
  },

  // ============================================================
  // PAYMENT
  // ============================================================

  "/invoice/{id}/payment": {

    post: {

      summary: "Register payment",
      description:
        "Registers a payment against the invoice. The service automatically updates paidAmount, pendingAmount and invoice status.",

      tags: ["Invoice"],

      parameters: [

        {
          name: "id",
          in: "path",
          required: true,

          schema: {
            type: "string"
          },

          example: "invoice-123"
        }
      ],

      requestBody: {

        required: true,

        content: {

          "application/json": {

            schema: {
              $ref: "#/components/schemas/InvoicePaymentRequest"
            },

            example: {
              amount: 500
            }
          }
        }
      },

      responses: {

        200: {

          description: "Payment registered",

          content: {

            "application/json": {

              schema: {
                $ref: "#/components/schemas/Invoice"
              }
            }
          }
        },

        400: {
          description:
            "Invalid payment, payment exceeds pending balance or invoice cannot receive payments"
        },

        404: {
          description: "Invoice not found"
        }
      }
    },


    delete: {

      summary: "Remove payment",
      description:
        "Reverts the payment associated with the invoice and recalculates the paid amount, pending amount and status.",

      tags: ["Invoice"],

      parameters: [

        {
          name: "id",
          in: "path",
          required: true,

          schema: {
            type: "string"
          },

          example: "invoice-123"
        }
      ],

      responses: {

        200: {

          description: "Payment removed",

          content: {

            "application/json": {

              schema: {
                $ref: "#/components/schemas/Invoice"
              }
            }
          }
        },

        400: {
          description: "Payment cannot be removed"
        },

        404: {
          description: "Invoice not found"
        }
      }
    }
  },


  // ============================================================
  // CANCEL
  // ============================================================

  "/invoice/{id}/cancel": {

    post: {

      summary: "Cancel invoice",

      description:
        "Cancels the invoice. A paid or otherwise restricted invoice may not be cancellable depending on the business rules.",

      tags: ["Invoice"],

      parameters: [

        {
          name: "id",
          in: "path",
          required: true,

          schema: {
            type: "string"
          },

          example: "invoice-123"
        }
      ],

      responses: {

        200: {

          description: "Invoice cancelled",

          content: {

            "application/json": {

              schema: {
                $ref: "#/components/schemas/Invoice"
              }
            }
          }
        },

        400: {
          description: "Invoice cannot be cancelled"
        },

        404: {
          description: "Invoice not found"
        }
      }
    }
  }
};
