export const business_single_schema = {
  type: "object",
  properties: {
    status: { type: "number" },
    message: { type: "string" },
    data: [
      {
        id: { type: "number" },
        nomor: { type: "string" },
        jenis: { type: "string" },
        tanggal: { type: "string" },
        validToDate: { type: "string" },
        reviseFor: { type: "number" },
        reviseForNumber: { type: "string" },
        origin: { type: "number" },
        revisionNumber: { type: "number" },
        clientHeaderId: { type: "number" },
        clientDetailId: { type: "number" },
        clientDetailName: { type: "string" },
        clientDetailAddress: { type: "string" },
        clientContactId: { type: "number" },
        clientContactName: { type: "string" },
        clientHeaderName: { type: "string" },
        clientHeaderMailingName: { type: "string" },
        serviceId: { type: "string" },
        subtotal: { type: "number" },
        note: { type: "string" },
        creator: { type: "string" },
        approval1: { type: "string" },
        approval2: { type: "string" },
        approval3: { type: "string" },
        approval4: { type: "string" },
        approval5: { type: "string" },
        approval1Status: { type: "string" },
        approval2Status: { type: "string" },
        approval3Status: { type: "string" },
        approval4Status: { type: "string" },
        approval5Status: { type: "string" },
        approval1Note: { type: "string" },
        approval2Note: { type: "string" },
        approval3Note: { type: "string" },
        approval4Note: { type: "string" },
        approval5Note: { type: "string" },
        approval1Date: { type: "string" },
        approval2Date: { type: "string" },
        approval3Date: { type: "string" },
        approval4Date: { type: "string" },
        approval5Date: { type: "string" },
        needApproval: { type: "number" },
        needApprovalBy: { type: "string" },
        lastApprovalStatus: { type: "string" },
        manpowerOptys: [
          {
            quotationId: { type: "number" },
            manpowerSolutionOpportunityId: { type: "number" },
          },
        ],
      },
    ],
  },
};

export const business_all_schema = {
  type: "array",
  items: business_single_schema,
};

export const quoItem_single_schema = {
  type: "object",
  properties: {
    status: { type: "number" },
    message: { type: "string" },
    data: [
      {
        quotationId: { type: "number" },
        number: { type: "number" },
        description: { type: "string" },
        unit: { type: "string" },
        unitPrice: { type: "number" },
        quantity: { type: "number" },
        duration: { type: "number" },
        subtotal: { type: "number" },
        note: { type: "string" },
      },
    ],
  },
};

export const quoItem_all_schema = {
  type: "array",
  items: quoItem_single_schema,
};

export const tac_single_schema = {
  type: "object",
  properties: {
    status: { type: "number" },
    message: { type: "string" },
    data: [
      {
        id: { type: "number" },
        jenis: { type: "string" },
        content: { type: "string" },
      },
    ],
  },
};

export const tac_all_schema = {
  type: "array",
  items: tac_single_schema,
};

export const tac_size_number = {
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
          jenis: { type: "string" },
          content: { type: "string" },
        },
      ],
    },
  },
};
