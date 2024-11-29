export const industry_single_schema = {
  type: "object",
  properties: {
    status: { type: "number" },
    message: { type: "string" },
    data: [
      {
        id: { type: "number" },
        name: { type: "string" },
      },
    ],
  },
};

export const industry_all_schema = {
  type: "array",
  items: industry_single_schema,
};

export const jobrole_params_schema = {
  type: "object",
  properties: {
    status: { type: "number" },
    message: { type: "string" },
    data: {
      recordCount: { type: "number" },
      pageNumber: { type: "number" },
      pagesAvailable: { type: "number" },
      pageSize: { type: "number" },
      firstIndex: { type: "number" },
      lastIndex: { type: "number" },
      items: [
        {
          id: { type: "number" },
          name: { type: "string" },
          htag: { type: "number" },
        },
      ],
    },
  },
};

export const jobrole_single_schema = {
  type: "object",
  properties: {
    status: { type: "number" },
    message: { type: "string" },
    data: {
      id: { type: "number" },
      name: { type: "string" },
      htag: { type: "number" },
    },
  },
};
