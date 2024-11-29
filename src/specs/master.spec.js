import { expect } from "chai";
import {
  getCompany,
  getCompanyD,
  getCompanyDId,
  getCompanyH,
  getCompanyHId,
  getCompanyId,
  getCompdoc,
  getCompdocA,
  getCompdocId,
  getConfig,
  getConfigId,
  getConfigList,
  getInviting,
  getReference,
  getSalgrade,
  getSalgradeById,
  getService,
} from "../apis/master.api.js";
import {
  company_all_schema,
  company_single_schema,
  companyD_all_schema,
  companyD_single_schema,
  companyH_all_schema,
  companyH_single_schema,
  compdoc_single_schema,
  config_all_schema,
  inviting_single_schema,
  reference_single_schema,
  salgrade_single_schema,
  service_single_schema,
} from "../schemas/master.schema.js";

describe("/master/companycontact - Company Contact Resource", function () {
  it("check status code - /companycontact", async function () {
    const res = await getCompany();

    expect(res.status).to.equal(200);
    expect(res.data).to.be.jsonschema(company_all_schema);
  });

  it("check status code - /companycontact/{id}", async function () {
    const res = await getCompanyId(96);

    expect(res.data).to.equal(200);
    expect(res.data).to.be.jsonschema(company_single_schema);
  });
});

describe("/master/companyd - Company Detail Resource", function () {
  it("check status code - /companyd", async function () {
    const res = await getCompanyD();

    expect(res.status).to.equal(200);
    expect(res.data).to.be.jsonschema(companyD_all_schema);
  });

  it("check status code - /companyd/{id}", async function () {
    const res = await getCompanyDId(28);

    expect(res.status).to.equal(200);
    expect(res.data).to.be.jsonschema(companyD_single_schema);
  });
});

describe("/master/companyh - Company Header Resource", function () {
  it("check status code - /companyh", async function () {
    const res = await getCompanyH();

    expect(res.status).to.equal(200);
    expect(res.data).to.be.jsonschema(companyH_all_schema);
  });

  it("check status code - /companyh/{id}", async function () {
    const res = await getCompanyHId(50);

    expect(res.status).to.equal(200);
    expect(res.data).to.be.jsonschema(companyH_single_schema);
  });
});

describe("/master/config - Config API", function () {
  it("check status code - /config", async function () {
    const res = await getConfig();

    expect(res.status).to.equal(200);
    expect(res.data).to.be.jsonschema(config_all_schema);
  });

  it("check status code - /config/list/{size}/{number}", async function () {
    const res = await getConfigList(3, 1);

    expect(res.status).to.equal(200);
    expect(res.data).to.be.jsonschema(config_all_schema);
  });

  it("check status code - /config/{id}", async function () {
    const res = await getConfigId(2);

    expect(res.status).to.equal(200);
    expect(res.data).to.be.jsonschema(config_all_schema);
  });

  it("check status code - /config/{name}/{user}", async function () {
    const res = await getConfig("rth.recipients.bcc", "_ALL");

    expect(res.status).to.equal(200);
    expect(res.data).to.be.jsonschema(config_all_schema);
  });
});

describe("/master/reference - Reference API", function () {
  it("check status code - /reference/{type}", async function () {
    const res = await getReference();

    expect(res.status).to.equal(200);
    expect(res.data).to.be.jsonschema(reference_single_schema);
  });
});

describe("/master/compdoc - Company Document Resource", function () {
  it("check status code - /compdoc/a/{tenantId}/{id}", async function () {
    const res = await getCompdocA(2, 2);

    expect(res.status).to.equal(200);
  });

  it("check status code - /compdoc/bycompanyheaderid/{id}", async function () {
    const res = await getCompdocId(16);

    expect(res.status).to.equal(200);
    expect(res.data).to.be.jsonschema(compdoc_single_schema);
  });

  it("check status code - /compdoc/{tenantId}/{id}", async function () {
    const res = await getCompdoc(3, 2);

    expect(res.status).to.equal(200);
  });
});

describe("/master/invitinguser - Inviting User Resource", function () {
  it("check status code - /invitinguser/{userId}", async function () {
    const res = await getInviting(16);

    expect(res.status).to.equal(200);
    expect(res.data).to.be.jsonschema(inviting_single_schema);
  });
});

describe("/master/salgrade - Salary Grade Resource", function () {
  it("check status code - /salgrade/byid/{type}/{id}", async function () {
    const res = await getSalgradeById("RECRUITMENT_SALARY_GRADE", 2);

    expect(res.status).to.equal(200);
    expect(res.data).to.be.jsonschema(salgrade_single_schema);
  });

  it("check status code - /salgrade/{type}/{nominal}", async function () {
    const res = await getSalgrade("SALES_SALARY_GRADE", 1);

    expect(res.status).to.equal(200);
    expect(res.data).to.be.jsonschema(salgrade_single_schema);
  });
});

describe("/master/service - Service Resource", function () {
  it("check status code - /service", async function () {
    const res = await getService();

    expect(res.status).to.equal(200);
    expect(res.data).to.be.jsonschema(service_single_schema);
  });
});
