export const InventoryLotePaths = {
  "/inventoryLote": {
    get: {
      summary: "Get all InventoryLote",
      tags: ["InventoryLote"],
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
          description: "List of InventoryLote",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: { $ref: "#/components/schemas/InventoryLote" }
              }
            }
          }
        }
      }
    },
    post: {
      summary: "Create InventoryLote",
      tags: ["InventoryLote"],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: { $ref: "#/components/schemas/InventoryLoteRequest" }
          }
        }
      },
      responses: {
        201: {
          description: "InventoryLote created"
        }
      }
    }
  },

  "/inventoryLote/{id}": {
    get: {
      summary: "Get InventoryLote by id",
      tags: ["InventoryLote"],
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
          description: "InventoryLote found",
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/InventoryLote" }
            }
          }
        },
        404: {
          description: "Not found"
        }
      }
    },

    put: {
      summary: "Update InventoryLote",
      tags: ["InventoryLote"],
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
            schema: { $ref: "#/components/schemas/InventoryLoteRequest" }
          }
        }
      },
      responses: {
        200: {
          description: "InventoryLote updated"
        },
        404: {
          description: "Not found"
        }
      }
    },

    delete: {
      summary: "Delete InventoryLote",
      tags: ["InventoryLote"],
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
          description: "InventoryLote deleted"
        },
        404: {
          description: "Not found"
        }
      }
    }
  },

  // ============================================================
  // INCREASE STOCK
  // ============================================================

  "/inventoryLote/{id}/increase-stock": {

    post: {

      summary: "Increase inventory lot stock",

      description:
        "Increases the available quantity of an inventory lot.",

      tags: ["InventoryLote"],

      parameters: [

        {
          name: "id",
          in: "path",
          required: true,

          schema: {
            type: "string"
          },

          description:
            "Inventory lot id"
        }
      ],

      requestBody: {

        required: true,

        content: {

          "application/json": {

            schema: {
              $ref:
                "#/components/schemas/InventoryLoteStockRequest"
            }
          }
        }
      },

      responses: {

        200: {

          description:
            "Inventory lot stock increased successfully",

          content: {

            "application/json": {

              schema: {
                $ref:
                  "#/components/schemas/InventoryLote"
              }
            }
          }
        },

        400: {

          description:
            "Invalid quantity"
        },

        404: {

          description:
            "Inventory lot not found"
        }
      }
    }
  },


  // ============================================================
  // DECREASE STOCK
  // ============================================================

  "/inventoryLote/{id}/decrease-stock": {

    post: {

      summary: "Decrease inventory lot stock",

      description:
        "Decreases the available quantity of an inventory lot. The operation cannot exceed the available quantity and cannot be performed on an expired lot.",

      tags: ["InventoryLote"],

      parameters: [

        {
          name: "id",
          in: "path",
          required: true,

          schema: {
            type: "string"
          },

          description:
            "Inventory lot id"
        }
      ],

      requestBody: {

        required: true,

        content: {

          "application/json": {

            schema: {
              $ref:
                "#/components/schemas/InventoryLoteStockRequest"
            }
          }
        }
      },

      responses: {

        200: {

          description:
            "Inventory lot stock decreased successfully",

          content: {

            "application/json": {

              schema: {
                $ref:
                  "#/components/schemas/InventoryLote"
              }
            }
          }
        },

        400: {

          description:
            "Invalid quantity, insufficient stock, or expired inventory lot"
        },

        404: {

          description:
            "Inventory lot not found"
        }
      }
    }
  },


  // ============================================================
  // QUANTITY
  // ============================================================

  "/inventoryLote/{id}/quantity": {

    get: {

      summary: "Get current inventory lot quantity",

      tags: ["InventoryLote"],

      parameters: [

        {
          name: "id",
          in: "path",
          required: true,

          schema: {
            type: "string"
          },

          description:
            "Inventory lot id"
        }
      ],

      responses: {

        200: {

          description:
            "Current quantity of the inventory lot",

          content: {

            "application/json": {

              schema: {
                $ref:
                  "#/components/schemas/InventoryLoteQuantityResponse"
              }
            }
          }
        },

        404: {

          description:
            "Inventory lot not found"
        }
      }
    }
  },


  // ============================================================
  // IS EXPIRED
  // ============================================================

  "/inventoryLote/{id}/is-expired": {

    get: {

      summary: "Check if inventory lot is expired",

      tags: ["InventoryLote"],

      parameters: [

        {
          name: "id",
          in: "path",
          required: true,

          schema: {
            type: "string"
          },

          description:
            "Inventory lot id"
        }
      ],

      responses: {

        200: {

          description:
            "Expiration status of the inventory lot",

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

          description:
            "Inventory lot not found"
        }
      }
    }
  },


  // ============================================================
  // IS VALID
  // ============================================================

  "/inventoryLote/{id}/is-valid": {

    get: {

      summary: "Check if inventory lot is valid",

      description:
        "Returns true when the inventory lot has not expired.",

      tags: ["InventoryLote"],

      parameters: [

        {
          name: "id",
          in: "path",
          required: true,

          schema: {
            type: "string"
          },

          description:
            "Inventory lot id"
        }
      ],

      responses: {

        200: {

          description:
            "Validity status of the inventory lot",

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

          description:
            "Inventory lot not found"
        }
      }
    }
  },


  // ============================================================
  // IS EMPTY
  // ============================================================

  "/inventoryLote/{id}/is-empty": {

    get: {

      summary: "Check if inventory lot is empty",

      tags: ["InventoryLote"],

      parameters: [

        {
          name: "id",
          in: "path",
          required: true,

          schema: {
            type: "string"
          },

          description:
            "Inventory lot id"
        }
      ],

      responses: {

        200: {

          description:
            "Returns whether the inventory lot has zero quantity",

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

          description:
            "Inventory lot not found"
        }
      }
    }
  },


  // ============================================================
  // HAS STOCK
  // ============================================================

  "/inventoryLote/{id}/has-stock": {

    get: {

      summary: "Check if inventory lot has stock",

      tags: ["InventoryLote"],

      parameters: [

        {
          name: "id",
          in: "path",
          required: true,

          schema: {
            type: "string"
          },

          description:
            "Inventory lot id"
        }
      ],

      responses: {

        200: {

          description:
            "Returns whether the inventory lot has available stock",

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

          description:
            "Inventory lot not found"
        }
      }
    }
  },


  // ============================================================
  // DAYS UNTIL EXPIRATION
  // ============================================================

  "/inventoryLote/{id}/days-until-expiration": {

    get: {

      summary:
        "Get days remaining until inventory lot expiration",

      description:
        "Returns the number of days remaining before the inventory lot expires. Returns 0 when the lot has already expired.",

      tags: ["InventoryLote"],

      parameters: [

        {
          name: "id",
          in: "path",
          required: true,

          schema: {
            type: "string"
          },

          description:
            "Inventory lot id"
        }
      ],

      responses: {

        200: {

          description:
            "Number of days remaining until expiration",

          content: {

            "application/json": {

              schema: {
                $ref:
                  "#/components/schemas/InventoryLoteDaysUntilExpirationResponse"
              }
            }
          }
        },

        404: {

          description:
            "Inventory lot not found"
        }
      }
    }
  }
};
