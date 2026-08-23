export const PaymentPlanOrchestratorPaths = {

  // ============================================================
  // CREATE PAYMENT PLAN
  // ============================================================

  "/paymentPlanOrchestrator": {

    post: {

      summary:
        "Create payment plan with its installments",

      description:
        "Creates a payment plan using the total amount of the specified invoice and automatically generates all installments according to the requested number and frequency.",

      tags: [
        "PaymentPlanOrchestrator"
      ],

      requestBody: {

        required: true,

        content: {

          "application/json": {

            schema: {

              $ref:
                "#/components/schemas/CreatePaymentPlanRequest"

            }
          }
        }
      },

      responses: {

        201: {

          description:
            "Payment plan and installments created successfully",

          content: {

            "application/json": {

              schema: {

                $ref:
                  "#/components/schemas/CreatePaymentPlanResponse"

              }
            }
          }
        },

        400: {

          description:
            "Invalid payment plan data"

        },

        404: {

          description:
            "Invoice not found"

        }
      }
    }
  },


  // ============================================================
  // REGISTER PAYMENT
  // ============================================================

  "/paymentPlanOrchestrator/payment": {

    post: {

      summary:
        "Register payment for an installment",

      description:
        "Registers a payment, updates the corresponding installment and returns both the payment record and the updated installment.",

      tags: [
        "PaymentPlanOrchestrator"
      ],

      requestBody: {

        required: true,

        content: {

          "application/json": {

            schema: {

              $ref:
                "#/components/schemas/RegisterInstallmentPaymentRequest"

            }
          }
        }
      },

      responses: {

        201: {

          description:
            "Payment registered and installment updated successfully",

          content: {

            "application/json": {

              schema: {

                $ref:
                  "#/components/schemas/RegisterInstallmentPaymentResponse"

              }
            }
          }
        },

        400: {

          description:
            "Invalid payment or payment exceeds the pending installment amount"

        },

        404: {

          description:
            "Installment not found"

        }
      }
    }
  }

};