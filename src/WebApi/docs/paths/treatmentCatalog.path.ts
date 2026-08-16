export const TreatmentCatalogPaths = {
  "/treatmentCatalog": {
    get: {
      summary: "Get all TreatmentCatalog",
      tags: ["TreatmentCatalog"],
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
          description: "List of TreatmentCatalog",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: { $ref: "#/components/schemas/TreatmentCatalog" }
              }
            }
          }
        }
      }
    },
    post: {
      summary: "Create TreatmentCatalog",
      tags: ["TreatmentCatalog"],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: { $ref: "#/components/schemas/TreatmentCatalogRequest" }
          }
        }
      },
      responses: {
        201: {
          description: "TreatmentCatalog created"
        }
      }
    }
  },

  "/treatmentCatalog/{id}": {
    get: {
      summary: "Get TreatmentCatalog by id",
      tags: ["TreatmentCatalog"],
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
          description: "TreatmentCatalog found",
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/TreatmentCatalog" }
            }
          }
        },
        404: {
          description: "Not found"
        }
      }
    }
    ,

    put: {
      summary: "Update TreatmentCatalog",
      tags: ["TreatmentCatalog"],
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
            schema: { $ref: "#/components/schemas/TreatmentCatalogRequest" }
          }
        }
      },
      responses: {
        200: {
          description: "TreatmentCatalog updated"
        },
        404: {
          description: "Not found"
        }
      }
    },

    delete: {
      summary: "Delete TreatmentCatalog",
      tags: ["TreatmentCatalog"],
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
          description: "TreatmentCatalog deleted"
        },
        404: {
          description: "Not found"
        }
      }
    }
  },

  // ============================================================
  // CHANGE PRICE
  // ============================================================

  "/treatmentCatalog/{id}/price": {

    put: {

      summary: "Change treatment price",

      description:
        "Changes the base price of an existing treatment. The price must be zero or greater.",

      tags: ["TreatmentCatalog"],

      parameters: [

        {
          name: "id",
          in: "path",
          required: true,

          schema: {
            type: "string"
          },

          description: "Treatment catalog ID"
        }
      ],

      requestBody: {

        required: true,

        content: {
          "application/json": {

            schema: {
              $ref: "#/components/schemas/TreatmentCatalogPriceRequest"
            }
          }
        }
      },

      responses: {

        200: {
          description: "Treatment price updated",

          content: {
            "application/json": {

              schema: {
                $ref: "#/components/schemas/TreatmentCatalog"
              }
            }
          }
        },

        400: {
          description: "Invalid price"
        },

        404: {
          description: "TreatmentCatalog not found"
        }
      }
    }
  },

  // ============================================================
  // CHANGE DURATION
  // ============================================================

  "/treatmentCatalog/{id}/duration": {

    put: {

      summary: "Change treatment duration",

      description:
        "Changes the estimated duration of an existing treatment. Duration must be greater than zero.",

      tags: ["TreatmentCatalog"],

      parameters: [

        {
          name: "id",
          in: "path",
          required: true,

          schema: {
            type: "string"
          },

          description: "Treatment catalog ID"
        }
      ],

      requestBody: {

        required: true,

        content: {
          "application/json": {

            schema: {
              $ref: "#/components/schemas/TreatmentCatalogDurationRequest"
            }
          }
        }
      },

      responses: {

        200: {
          description: "Treatment duration updated",

          content: {
            "application/json": {

              schema: {
                $ref: "#/components/schemas/TreatmentCatalog"
              }
            }
          }
        },

        400: {
          description: "Invalid duration"
        },

        404: {
          description: "TreatmentCatalog not found"
        }
      }
    }
  },

  // ============================================================
  // ACTIVATE
  // ============================================================

  "/treatmentCatalog/{id}/activate": {

    post: {

      summary: "Activate treatment",
      description:
        "Activates the treatment so it can be used in new treatment plans.",

      tags: ["TreatmentCatalog"],

      parameters: [

        {
          name: "id",
          in: "path",
          required: true,

          schema: {
            type: "string"
          },

          description: "Treatment catalog ID"
        }
      ],

      responses: {

        200: {
          description: "Treatment activated",

          content: {
            "application/json": {

              schema: {
                $ref: "#/components/schemas/TreatmentCatalog"
              }
            }
          }
        },

        404: {
          description: "TreatmentCatalog not found"
        }
      }
    }
  },

  // ============================================================
  // DEACTIVATE
  // ============================================================

  "/treatmentCatalog/{id}/deactivate": {

    post: {

      summary: "Deactivate treatment",
      description:
        "Deactivates the treatment so it cannot be selected for new treatment plans.",

      tags: ["TreatmentCatalog"],

      parameters: [

        {
          name: "id",
          in: "path",
          required: true,

          schema: {
            type: "string"
          },

          description: "Treatment catalog ID"
        }
      ],

      responses: {

        200: {
          description: "Treatment deactivated",

          content: {
            "application/json": {

              schema: {
                $ref: "#/components/schemas/TreatmentCatalog"
              }
            }
          }
        },

        404: {
          description: "TreatmentCatalog not found"
        }
      }
    }
  }
};
