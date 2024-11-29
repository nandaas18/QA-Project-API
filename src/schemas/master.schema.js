export const company_single_schema = {
  type: "object",
  properties: {
    status: { type: "number" },
    message: { type: "string" },
    data: [
      {
        id: { type: "number" },
        companyHeaderId: { type: "number" },
        companyDetailId: { type: "number" },
        salutation: { type: "string" },
        companyDetailName: { type: "string" },
        name: { type: "string" },
        division: { type: "string" },
        phone: { type: "string" },
        email: { type: "string" },
        mainContact: true,
      },
    ],
  },
};

export const company_all_schema = {
  type: "array",
  items: company_single_schema,
};

export const companyD_single_schema = {
  type: "object",
  properties: {
    status: { type: "number" },
    message: { type: "string" },
    data: [
      {
        id: { type: "number" },
        companyHeaderId: { type: "number" },
        name: { type: "string" },
        deskripsi: { type: "string" },
        address: { type: "string" },
        mainAddress: { type: "boolean" },
        type: { type: "string" },
      },
    ],
  },
};

export const companyD_all_schema = {
  type: "array",
  items: companyD_single_schema,
};

export const companyH_single_schema = {
  type: "object",
  properties: {
    status: { type: "number" },
    message: { type: "string" },
    data: [
      {
        tenantId: { type: "string" },
        id: { type: "number" },
        name: { type: "string" },
        nameForMailing: { type: "string" },
        initial: { type: "string" },
        industries: [
          {
            companyHeaderId: { type: "number" },
            industryId: { type: "number" },
            industryName: { type: "string" },
          },
        ],
      },
    ],
  },
};

export const companyH_all_schema = {
  type: "array",
  items: companyH_single_schema,
};

export const config_single_schema = {
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
          name: { type: "string" },
          user: { type: "string" },
          value: { type: "string" },
        },
      ],
    },
  },
};

export const config_all_schema = {
  object: "array",
  items: config_single_schema,
};

export const reference_single_schema = {
  type: "object",
  properties: {
    status: { type: "number" },
    message: { type: "string" },
    data: {
      type: { type: "string" },
      list: [
        {
          code: { type: "string" },
          name: { type: "string" },
        },
      ],
    },
  },
};

export const compdoc_single_schema = {
  type: "object",
  properties: {
    status: { type: "number" },
    message: { type: "string" },
    data: [
      {
        companyHeaderId: { type: "number" },
        companyDetailId: { type: "number" },
        attachmentId: { type: "number" },
        filename: { type: "string" },
        description: { type: "string" },
        category: { type: "string" },
      },
    ],
  },
};

export const inviting_single_schema = {
  type: "object",
  properties: {
    userId: { type: "string" },
    nickName: { type: "string" },
  },
};

export const salgrade_single_schema = {
  type: "object",
  properties: {
    status: { type: "number" },
    message: { type: "string" },
    data: {
      id: { type: "number" },
      jenis: { type: "string" },
      minSal: { type: "number" },
      maxSal: { type: "number" },
      minGPPercentage: { type: "number" },
      minSales: { type: "number" },
      minGP: { type: "number" },
    },
  },
};

export const service_single_schema = {
  type: "object",
  properties: {
    status: { type: "number" },
    message: { type: "string" },
    data: [
      {
        id: { type: "string" },
        name: { type: "string" },
      },
    ],
  },
};
