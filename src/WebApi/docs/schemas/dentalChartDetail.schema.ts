export const DentalChartDetailSchemas = {

  DentalChartDetailRequest: {
    type: "object",
    required: [
      "dentalChartId",
      "toothNumber",
      "face",
      "toothStatus",
      "notes"
    ],
    properties: {

      dentalChartId: {
        type: "string",
        example: "dental-chart-001"
      },

      toothNumber: {
        type: "integer",
        example: 11,
        description: "Número de pieza dental según nomenclatura FDI"
      },

      face: {
        type: "string",
        example: "O"
      },

      toothStatus: {
        type: "string",
        example: "HEALTHY"
      },

      notes: {
        type: "string",
        example: "Pieza dental en buen estado"
      }

    }
  },

  DentalChartDetailStatusRequest: {
    type: "object",
    required: [
      "toothStatus"
    ],
    properties: {

      toothStatus: {
        type: "string",
        example: "CARIES",
        description: "Nuevo estado de la pieza dental"
      }

    }
  },

  DentalChartDetailNotesRequest: {
    type: "object",
    required: [
      "notes"
    ],
    properties: {

      notes: {
        type: "string",
        example: "Se observa sensibilidad en la pieza dental"
      }

    }
  },

  DentalChartDetail: {
    type: "object",
    properties: {

      id: {
        type: "string",
        example: "detail-001"
      },

      dentalChartId: {
        type: "string",
        example: "dental-chart-001"
      },

      toothNumber: {
        type: "integer",
        example: 11
      },

      face: {
        type: "string",
        example: "O"
      },

      toothStatus: {
        type: "string",
        example: "HEALTHY"
      },

      notes: {
        type: "string",
        example: "Pieza dental en buen estado"
      }

    }
  }
};