export const CategorySchemas = {
  CategoryRequest: {
    type: "object",
    required: [
      
        "name"
      
    ],
    properties: {
      
      name: { type: "string" },
      
    }
  },

  Category: {
    type: "object",
    properties: {
      id: { type: "string" },
      
      name: { type: "string" },
      
    }
  }
};
