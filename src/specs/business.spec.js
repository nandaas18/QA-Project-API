import expect from "../libs/expect.js";
import {
  getQuotation,
  getAllSizeNumber,
  getByCompanyHeader,
  getAllPending,
  getQuoId,
  getSizeNumber,
  getQuoItem,
  getByQuoId,
  getQuoDetail,
  getQuoItemId,
  getTac,
  getTacId,
  getTacSizeNumber,
  getQuoItemSizeNumber,
} from "../apis/business.api.js";
import {
  business_all_schema,
  business_single_schema,
  quoItem_all_schema,
  quoItem_single_schema,
  tac_all_schema,
  tac_single_schema,
  tac_size_number,
} from "../schemas/business.schema.js";
import axiosInstance from "../libs/axiosInstance.js";

describe("/business/quotation - Quotation API-", function () {
  it("Check response status code - /quotation", async function () {
    const res = await getQuotation();

    expect(res.status).to.equal(200);
    expect(res.data).to.be.jsonschema(business_all_schema);

    return res;
  });

  it("Check response status code - /quotation/all/{size}/{number}", async function () {
    const res = await getAllSizeNumber(3, 2);

    expect(res.status).to.equal(200);
    expect(res.data).to.be.jsonschema(business_all_schema);
  });

  it("Check response status code - /quotation/allpending/{creator}/{size}/{number}", async function () {
    const res = await getAllPending("it", 3, 1);

    expect(res.status).to.equal(200);
    expect(res.data).to.be.jsonschema(business_single_schema);
  });

  it("Check response status code - /quotation/allpending/{size}/{number}", async function () {
    const res = await getAllPending(3, 1);

    expect(res.status).to.equal(200);
    expect(res.data).to.be.jsonschema(business_single_schema);
  });

  it("Check response status code - /quotation/bycompanyheader/{companyHeaderId}/{size}/{number}", async function () {
    const res = await getByCompanyHeader(1, 4, 3);

    expect(res.status).to.equal(200);
    expect(res.data).to.be.jsonschema(business_single_schema);
  });

  it("Check response status code - /quotation/{id}", async function () {
    const res = await axiosInstance.getQuoId(31);

    expect(res.status).to.equal(200);
    expect(res.data).to.be.jsonschema(business_single_schema);
  });

  it("Check response status code - /quotation/{size}/{number}", async function () {
    const res = await getSizeNumber(2, 2);

    expect(res.status).to.equal(200);
    expect(res.data).to.be.jsonschema(business_single_schema);
  });
});

describe("/business/quotation-item - Quotation Item API-", function () {
  it("Check response status code - /quotation-item", async function () {
    const res = await getQuoItem();

    expect(res.status).to.equal(200);
    expect(res.data).to.be.jsonschema(quoItem_all_schema);
  });

  it("Check response status code - /quotation-item/byquotationid/{quotationid}/{size}/{number}", async function () {
    const res = await getByQuoId(35, 1, 1);

    expect(res.status).to.equal(200);
    expect(res.data).to.be.jsonschema(quoItem_single_schema);
  });

  it("Check response status code - /quotation-item/detail/{quotationid}/{number}", async function () {
    const res = await getQuoDetail(30, 1);

    expect(res.status).to.equal(200);
    expect(res.data).to.be.jsonschema(quoItem_single_schema);
  });

  it("Check response status code - /quotation-item/{id}", async function () {
    const res = await getQuoItemId(16);

    expect(res.status).to.equal(200);
    expect(res.data).to.be.jsonschema(quoItem_all_schema);
  });

  it("Check response status code - /quotation-item/{size}/{number}", async function () {
    const res = await getQuoItemSizeNumber(2, 2);

    expect(res.status).to.equal(200);
    expect(res.data).to.be.jsonschema(quoItem_all_schema);
  });
});

describe("/business/tac -Terms and Condition API-", function () {
  it("Check response status code - /tac", async function () {
    const res = await getTac();

    expect(res.status).to.equal(200);
    expect(res.data).to.be.jsonschema(tac_all_schema);
  });

  it("Check response status code - /tac/{id}", async function () {
    const res = await getTacId(3);

    expect(res.status).to.equal(200);
    expect(res.data).to.be.jsonschema(tac_single_schema);
  });

  it("Check response status code - /tac/{size}/{number}", async function () {
    const res = await getTacSizeNumber(1, 1);

    expect(res.status).to.equal(200);
    expect(res.data).to.be.jsonschema(tac_size_number);
  });
});
