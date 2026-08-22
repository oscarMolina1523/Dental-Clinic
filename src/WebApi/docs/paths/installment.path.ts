export const InstallmentPaths = {
  "/installment": {
    get: {
      summary: "Get all Installment",
      tags: ["Installment"],
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
          description: "List of Installment",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: { $ref: "#/components/schemas/Installment" }
              }
            }
          }
        }
      }
    },
    post: {
      summary: "Create Installment",
      tags: ["Installment"],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: { $ref: "#/components/schemas/InstallmentRequest" }
          }
        }
      },
      responses: {
        201: {
          description: "Installment created"
        }
      }
    }
  },

  "/installment/{id}": {
    get: {
      summary: "Get Installment by id",
      tags: ["Installment"],
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
          description: "Installment found",
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/Installment" }
            }
          }
        },
        404: {
          description: "Not found"
        }
      }
    },

    put: {
      summary: "Update Installment",
      tags: ["Installment"],
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
            schema: { $ref: "#/components/schemas/InstallmentRequest" }
          }
        }
      },
      responses: {
        200: {
          description: "Installment updated"
        },
        404: {
          description: "Not found"
        }
      }
    },

    delete: {
      summary: "Delete Installment",
      tags: ["Installment"],
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
          description: "Installment deleted"
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

  "/installment/{id}/payment": {

    post: {
      summary: "Add payment to an installment",
      tags: ["Installment"],
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          schema: {
            type: "string"
          },
          description: "Installment id"
        }
      ],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/InstallmentPaymentRequest"
            }
          }
        }
      },
      responses: {
        200: {
          description: "Payment added successfully",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Installment"
              }
            }
          }
        },
        400: {
          description: "Invalid payment"
        },
        404: {
          description: "Installment not found"
        }
      }
    }

  },

  // ============================================================
  // LATE FEE
  // ============================================================

  "/installment/{id}/late-fee": {

    post: {
      summary: "Add late fee to an installment",
      tags: ["Installment"],
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          schema: {
            type: "string"
          },
          description: "Installment id"
        }
      ],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/InstallmentLateFeeRequest"
            }
          }
        }
      },
      responses: {
        200: {
          description: "Late fee added successfully",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Installment"
              }
            }
          }
        },
        400: {
          description: "Invalid late fee"
        },
        404: {
          description: "Installment not found"
        }
      }
    }

  },

  // ============================================================
  // STATUS
  // ============================================================

  "/installment/{id}/overdue": {

    post: {
      summary: "Mark installment as overdue",
      tags: ["Installment"],
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
          description: "Installment marked as overdue",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Installment"
              }
            }
          }
        },
        400: {
          description: "Installment cannot be marked as overdue"
        },
        404: {
          description: "Installment not found"
        }
      }
    }

  },

  "/installment/{id}/cancel": {

    post: {
      summary: "Cancel installment",
      tags: ["Installment"],
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
          description: "Installment cancelled",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Installment"
              }
            }
          }
        },
        400: {
          description: "Installment cannot be cancelled"
        },
        404: {
          description: "Installment not found"
        }
      }
    }

  },

  // ============================================================
  // CALCULATIONS
  // ============================================================

  "/installment/{id}/total-amount": {

    get: {
      summary: "Get total amount of an installment",
      tags: ["Installment"],
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
          description: "Total amount of the installment",
          content: {
            "application/json": {
              schema: {
                type: "number",
                example: 270
              }
            }
          }
        },
        404: {
          description: "Installment not found"
        }
      }
    }

  },

  "/installment/{id}/pending-amount": {

    get: {
      summary: "Get pending amount of an installment",
      tags: ["Installment"],
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
          description: "Pending amount of the installment",
          content: {
            "application/json": {
              schema: {
                type: "number",
                example: 120
              }
            }
          }
        },
        404: {
          description: "Installment not found"
        }
      }
    }

  },

  "/installment/{id}/is-paid": {

    get: {
      summary: "Check if an installment is fully paid",
      tags: ["Installment"],
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
          description: "Payment status",
          content: {
            "application/json": {
              schema: {
                type: "boolean",
                example: false
              }
            }
          }
        },
        404: {
          description: "Installment not found"
        }
      }
    }

  }

};
