import {
  getPcaItem,
  getPcaItemById,
  getPcaItemByIdPcid,
  getPcaSubItem,
  getPcaSubItemAll,
  getPcaSubItemId,
  getPcaSubItemSizeNumber,
  getPcaSupport,
  getPcaSupportGet,
  getProject,
  getProjectAllPending,
  getProjectId,
} from "../apis/project.api.js";
import expect from "../libs/expect.js";
import {
  pcaItem_all_schema,
  pcaItem_single_schema,
  pcaSubItem_all_schema,
  pcaSubItem_single_schema,
  pcaSubItemAll_single_schema,
  pcaSupport_all_schema,
  project_all_schema,
  project_single_schema,
} from "../schemas/project.schema.js";

describe("/project/pac - Project Costing API-", function () {
  it("check status code - /pca", async function () {
    const res = await getProject();

    expect(res.status).to.equal(200);
    expect(res.data).to.be.jsonschema(project_all_schema);
  });

  it("check status code - /pca/allpending/{creator}/{size}/{number}", async function () {
    const res = await getProjectAllPending("c", 2, 1);

    expect(res.status).to.equal(200);
    expect(res.data).to.be.jsonschema(project_all_schema);
  });

  it("check status code - /pca/{id}", async function () {
    const res = await getProjectId(13);

    expect(res.status).to.equal(200);
    expect(res.data).to.be.jsonschema(project_single_schema);
  });

  it("check status code - /pca/{size}/{number}", async function () {
    const res = await getProject(2, 1);

    expect(res.status).to.equal(200);
    expect(res.data).to.be.jsonschema(project_all_schema);
  });
});

describe("/project/pcaitem - Project Costing Item API-", function () {
  it("check status code - /pcaitem", async function () {
    const res = await getPcaItem();

    expect(res.status).to.equal(200);
    expect(res.data).to.be.jsonschema(pcaItem_all_schema);
  });

  it("check status code - /pcaitem/byid/{projectCostingId}/{itemNumber}", async function () {
    const res = await getPcaItemById(17, 1);

    expect(res.status).to.equal(200);
    expect(res.data).to.be.jsonschema(pcaItem_single_schema);
  });

  it("check status code - /pcaitem/byidpcid/{projectCostingId}/{size}/{number}", async function () {
    const res = await getPcaItemByIdPcid(19, 2, 1);

    expect(res.status).to.equal(200);
    expect(res.data).to.be.jsonschema(pcaItem_single_schema);
  });

  it("check status code - /pcaitem/{id}", async function () {
    const res = await getPcaItem(17, "", "");

    expect(res.status).to.equal(200);
    expect(res.data).to.be.jsonschema(pcaItem_all_schema);
  });
  it("check status code - /pcaitem/{size}/{number}", async function () {
    const res = await getPcaItem(" ", 2, 1);

    expect(res.status).to.equal(200);
    expect(res.data).to.be.jsonschema(pcaItem_all_schema);
  });
});

describe("/project/pcasubitem - Project Costing Sub-Item API-", function () {
  it("check status code - /pcasubitem", async function () {
    const res = await getPcaSubItem();

    expect(res.status).to.equal(200);
    expect(res.data).to.be.jsonschema(pcaSubItem_all_schema);
  });

  it("check status code - /pcasubitem/all/{projectCostingId}", async function () {
    const res = await getPcaSubItemAll(21, "", "");

    expect(res.status).to.equal(200);
    expect(res.data).to.be.jsonschema(pcaSubItemAll_single_schema);
  });

  it("check status code - /pcasubitem/all/{projectCostingId}/{size}/{number}", async function () {
    const res = await getPcaSubItemAll(21, 2, 1);

    expect(res.status).to.equal(200);
    expect(res.data).to.be.jsonschema(pcaSubItemAll_single_schema);
  });

  it("check status code - /pcasubitem/all/{projectCostingId}/{size}/{number}", async function () {
    const res = await getPcaSubItemAll(21, 2, 1);

    expect(res.status).to.equal(200);
    expect(res.data).to.be.jsonschema(pcaSubItemAll_single_schema);
  });

  it("check status code - /pcasubitem/{id}", async function () {
    const res = await getPcaSubItemId(19);

    expect(res.status).to.equal(200);
    expect(res.data).to.be.jsonschema(pcaSubItemAll_single_schema);
  });

  it("check status code - /pcasubitem/{projectCostingId}/{itemNumber}/{subItemName}", async function () {
    const res = await getPcaSubItem(18, 1, "Angular Developer");

    expect(res.status).to.equal(200);
    expect(res.data).to.be.jsonschema(pcaSubItem_single_schema);
  });

  it("check status code - /pcasubitem/{size}/{number}", async function () {
    const res = await getPcaSubItemSizeNumber(3, 2);

    expect(res.status).to.equal(200);
    expect(res.data).to.be.jsonschema(pcaSubItem_all_schema);
  });
});

describe("/project/pca-supportdoc - Project Costing Support Document API-", function () {
  it("check status code - /pca-supportdoc", async function () {
    const res = await getPcaSupport();

    expect(res.status).to.equal(200);
    expect(res.data).to.be.jsonschema(pcaSupport_all_schema);
  });

  it("check status code - /pca-supportdoc/get/{tenantId}/{attachmentId}", async function () {
    const res = await getPcaSupportGet(1, 135);

    expect(res.status).to.equal(200);
  });

  it("check status code - /pca-supportdoc/{id}", async function () {
    const res = await getPcaSupport(2, "", "");

    expect(res.status).to.equal(200);
  });

  it("check status code - /pca-supportdoc/{size}/{number}", async function () {
    const res = await getPcaSupport("", 3, 2);

    expect(res.status).to.equal(200);
  });
});
