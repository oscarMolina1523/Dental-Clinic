export const AppointmentPaths = {

  // ============================================================
  // APPOINTMENTS
  // ============================================================

  "/appointment": {

    get: {
      summary: "Get all Appointment",
      tags: ["Appointment"],

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
          description: "List of appointments",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: {
                  $ref: "#/components/schemas/Appointment"
                }
              }
            }
          }
        }
      }
    },

    post: {
      summary: "Create Appointment",
      tags: ["Appointment"],

      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/AppointmentRequest"
            }
          }
        }
      },

      responses: {
        201: {
          description: "Appointment created",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Appointment"
              }
            }
          }
        }
      }
    }
  },


  // ============================================================
  // APPOINTMENT BY ID
  // ============================================================

  "/appointment/{id}": {

    get: {
      summary: "Get Appointment by id",
      tags: ["Appointment"],

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
          description: "Appointment found",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Appointment"
              }
            }
          }
        },

        404: {
          description: "Appointment not found"
        }
      }
    },


    put: {
      summary: "Update Appointment",
      tags: ["Appointment"],

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
              $ref: "#/components/schemas/AppointmentRequest"
            }
          }
        }
      },

      responses: {
        200: {
          description: "Appointment updated",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Appointment"
              }
            }
          }
        },

        404: {
          description: "Appointment not found"
        }
      }
    },


    delete: {
      summary: "Delete Appointment",
      tags: ["Appointment"],

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
        204: {
          description: "Appointment deleted"
        },

        404: {
          description: "Appointment not found"
        }
      }
    }
  },


  // ============================================================
  // APPOINTMENT STATE
  // ============================================================

  "/appointment/{id}/confirm": {

    post: {
      summary: "Confirm Appointment",
      description: "Changes a scheduled appointment to confirmed status.",
      tags: ["Appointment"],

      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          schema: {
            type: "string"
          },
          description: "Appointment ID"
        }
      ],

      responses: {
        200: {
          description: "Appointment confirmed",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Appointment"
              }
            }
          }
        },

        404: {
          description: "Appointment not found"
        },

        400: {
          description: "Appointment cannot be confirmed"
        }
      }
    }
  },


  "/appointment/{id}/start": {

    post: {
      summary: "Start Appointment",
      description: "Starts an appointment that has been confirmed.",
      tags: ["Appointment"],

      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          schema: {
            type: "string"
          },
          description: "Appointment ID"
        }
      ],

      responses: {
        200: {
          description: "Appointment started",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Appointment"
              }
            }
          }
        },

        404: {
          description: "Appointment not found"
        },

        400: {
          description: "Appointment cannot be started"
        }
      }
    }
  },


  "/appointment/{id}/complete": {

    post: {
      summary: "Complete Appointment",
      description: "Completes an appointment that is currently in progress.",
      tags: ["Appointment"],

      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          schema: {
            type: "string"
          },
          description: "Appointment ID"
        }
      ],

      responses: {
        200: {
          description: "Appointment completed",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Appointment"
              }
            }
          }
        },

        404: {
          description: "Appointment not found"
        },

        400: {
          description: "Appointment cannot be completed"
        }
      }
    }
  },


  "/appointment/{id}/cancel": {

    post: {
      summary: "Cancel Appointment",
      description: "Cancels an appointment and records the cancellation reason.",
      tags: ["Appointment"],

      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          schema: {
            type: "string"
          },
          description: "Appointment ID"
        }
      ],

      requestBody: {
        required: true,

        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/AppointmentCancellationRequest"
            }
          }
        }
      },

      responses: {
        200: {
          description: "Appointment cancelled",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Appointment"
              }
            }
          }
        },

        404: {
          description: "Appointment not found"
        },

        400: {
          description: "Appointment cannot be cancelled"
        }
      }
    }
  },


  "/appointment/{id}/no-show": {

    post: {
      summary: "Mark Appointment as No Show",
      description: "Marks a confirmed appointment as not attended by the patient.",
      tags: ["Appointment"],

      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          schema: {
            type: "string"
          },
          description: "Appointment ID"
        }
      ],

      responses: {
        200: {
          description: "Appointment marked as no-show",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Appointment"
              }
            }
          }
        },

        404: {
          description: "Appointment not found"
        },

        400: {
          description: "Appointment cannot be marked as no-show"
        }
      }
    }
  },


  // ============================================================
  // REMINDER
  // ============================================================

  "/appointment/{id}/reminder-sent": {

    post: {
      summary: "Mark Appointment Reminder as Sent",
      description: "Marks the appointment reminder as sent.",
      tags: ["Appointment"],

      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          schema: {
            type: "string"
          },
          description: "Appointment ID"
        }
      ],

      responses: {
        200: {
          description: "Reminder marked as sent",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Appointment"
              }
            }
          }
        },

        404: {
          description: "Appointment not found"
        }
      }
    }
  },


  // ============================================================
  // INFORMATION
  // ============================================================

  "/appointment/{id}/duration": {

    get: {
      summary: "Get Appointment Duration",
      description: "Returns the appointment duration in minutes.",
      tags: ["Appointment"],

      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          schema: {
            type: "string"
          },
          description: "Appointment ID"
        }
      ],

      responses: {
        200: {
          description: "Appointment duration",
          content: {
            "application/json": {
              schema: {
                type: "integer",
                example: 30
              }
            }
          }
        },

        404: {
          description: "Appointment not found"
        }
      }
    }
  },


  "/appointment/{id}/cancelled": {

    get: {
      summary: "Check if Appointment is Cancelled",
      description: "Returns whether the appointment is cancelled.",
      tags: ["Appointment"],

      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          schema: {
            type: "string"
          },
          description: "Appointment ID"
        }
      ],

      responses: {
        200: {
          description: "Cancellation status",
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
          description: "Appointment not found"
        }
      }
    }
  },


  "/appointment/{id}/completed": {

    get: {
      summary: "Check if Appointment is Completed",
      description: "Returns whether the appointment is completed.",
      tags: ["Appointment"],

      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          schema: {
            type: "string"
          },
          description: "Appointment ID"
        }
      ],

      responses: {
        200: {
          description: "Completion status",
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
          description: "Appointment not found"
        }
      }
    }
  },


  "/appointment/{id}/pending": {

    get: {
      summary: "Check if Appointment is Pending",
      description: "Returns whether the appointment is pending.",
      tags: ["Appointment"],

      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          schema: {
            type: "string"
          },
          description: "Appointment ID"
        }
      ],

      responses: {
        200: {
          description: "Pending status",
          content: {
            "application/json": {
              schema: {
                type: "boolean",
                example: true
              }
            }
          }
        },

        404: {
          description: "Appointment not found"
        }
      }
    }
  }
};