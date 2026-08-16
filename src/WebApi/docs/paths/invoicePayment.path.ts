export const InvoicePaymentPaths = {

  // ============================================================
  // CREATE INVOICE + OPTIONAL PAYMENT
  // ============================================================

  "/invoice-payments": {

    post: {
      summary: "Create invoice with optional initial payment",
      tags: ["InvoicePayment"],

      requestBody: {
        required: true,

        content: {
          "application/json": {
            schema: {
              $ref:
                "#/components/schemas/CreateInvoiceWithPaymentRequest"
            }
          }
        }
      },

      responses: {

        201: {
          description:
            "Invoice created successfully with or without initial payment",

          content: {
            "application/json": {
              schema: {
                $ref:
                  "#/components/schemas/InvoicePaymentResponse"
              }
            }
          }
        },

        400: {
          description: "Invalid invoice or payment data"
        }
      }
    }
  },


  // ============================================================
  // ADD PAYMENT TO EXISTING INVOICE
  // ============================================================

  "/invoice-payments/{invoiceId}/payments": {

    post: {

      summary: "Add payment to an existing invoice",
      tags: ["InvoicePayment"],

      parameters: [

        {
          name: "invoiceId",
          in: "path",
          required: true,

          schema: {
            type: "string"
          },

          description:
            "ID of the invoice to which the payment will be added"
        }
      ],

      requestBody: {
        required: true,

        content: {
          "application/json": {
            schema: {
              $ref:
                "#/components/schemas/AddPaymentToInvoiceRequest"
            }
          }
        }
      },

      responses: {

        201: {
          description:
            "Payment registered and invoice updated",

          content: {
            "application/json": {
              schema: {
                $ref:
                  "#/components/schemas/InvoicePaymentAddResponse"
              }
            }
          }
        },

        400: {
          description:
            "Invalid payment or payment exceeds invoice pending amount"
        },

        404: {
          description:
            "Invoice not found"
        }
      }
    }
  }
};