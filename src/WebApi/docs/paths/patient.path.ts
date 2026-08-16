export const PatientPaths = {
  "/patient": {
    get: {
      summary: "Get all Patient",
      tags: ["Patient"],
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
          description: "List of Patient",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: { $ref: "#/components/schemas/Patient" }
              }
            }
          }
        }
      }
    },
    post: {
      summary: "Create Patient",
      tags: ["Patient"],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: { $ref: "#/components/schemas/PatientRequest" }
          }
        }
      },
      responses: {
        201: {
          description: "Patient created"
        }
      }
    }
  },

  "/patient/{id}": {
    get: {
      summary: "Get Patient by id",
      tags: ["Patient"],
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
          description: "Patient found",
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/Patient" }
            }
          }
        },
        404: {
          description: "Not found"
        }
      }

    }
  },

  put: {
    summary: "Update Patient",
    tags: ["Patient"],
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
          schema: { $ref: "#/components/schemas/PatientRequest" }
        }
      }
    },
    responses: {
      200: {
        description: "Patient updated"
      },
      404: {
        description: "Not found"
      }
    }
  },

  delete: {
    summary: "Delete Patient",
    tags: ["Patient"],
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
        description: "Patient deleted"
      },
      404: {
        description: "Not found"
      }
    }
  },

  "/patient/{id}/phone": {

    put: {
      summary: "Change Patient phone number",
      tags: ["Patient"],

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
              $ref:
                "#/components/schemas/ChangePhoneNumberRequest"
            }
          }
        }
      },

      responses: {

        200: {
          description: "Phone number updated",

          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Patient"
              }
            }
          }
        },

        404: {
          description: "Patient not found"
        }
      }
    }
  },

  "/patient/{id}/email": {

    put: {
      summary: "Change Patient email",
      tags: ["Patient"],

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
              $ref:
                "#/components/schemas/ChangeEmailRequest"
            }
          }
        }
      },

      responses: {

        200: {
          description: "Email updated",

          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Patient"
              }
            }
          }
        },

        404: {
          description: "Patient not found"
        }
      }
    }
  },

  "/patient/{id}/address": {

    put: {
      summary: "Change Patient address",
      tags: ["Patient"],

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
              $ref:
                "#/components/schemas/ChangeAddressRequest"
            }
          }
        }
      },

      responses: {

        200: {
          description: "Address updated",

          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Patient"
              }
            }
          }
        },

        404: {
          description: "Patient not found"
        }
      }
    }
  },

  "/patient/{id}/emergency-contact": {

    put: {
      summary: "Update Patient emergency contact",
      tags: ["Patient"],

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
              $ref:
                "#/components/schemas/EmergencyContactRequest"
            }
          }
        }
      },

      responses: {

        200: {
          description: "Emergency contact updated",

          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Patient"
              }
            }
          }
        },

        404: {
          description: "Patient not found"
        }
      }
    }
  },

  "/patient/{id}/image": {

    put: {
      summary: "Change Patient image",
      tags: ["Patient"],

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
              $ref:
                "#/components/schemas/ChangeImageRequest"
            }
          }
        }
      },

      responses: {

        200: {
          description: "Image updated",

          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Patient"
              }
            }
          }
        },

        404: {
          description: "Patient not found"
        }
      }
    }
  },

  "/patient/{id}/activate": {

    post: {
      summary: "Activate Patient",
      tags: ["Patient"],

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
          description: "Patient activated",

          content: {
            "application/json": {
              schema: {
                type: "object",

                properties: {
                  message: {
                    type: "string",
                    example:
                      "Paciente activado correctamente"
                  },

                  data: {
                    $ref: "#/components/schemas/Patient"
                  }
                }
              }
            }
          }
        },

        404: {
          description: "Patient not found"
        }
      }
    }
  },

  "/patient/{id}/deactivate": {

    post: {
      summary: "Deactivate Patient",
      tags: ["Patient"],

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
          description: "Patient deactivated",

          content: {
            "application/json": {
              schema: {
                type: "object",

                properties: {

                  message: {
                    type: "string",
                    example:
                      "Paciente desactivado correctamente"
                  },

                  data: {
                    $ref: "#/components/schemas/Patient"
                  }
                }
              }
            }
          }
        },

        404: {
          description: "Patient not found"
        }
      }
    }
  }
}
