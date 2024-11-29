import expect from "../libs/expect.js";
import {
  getIndustry,
  getIndustryName,
  getJobrole,
  getJobroleById,
  getJobroleExactName,
  getJobroleName,
  getSkillName,
  getSwtool,
  getSwtoolById,
} from "../apis/referensi.api.js";
import {
  industry_single_schema,
  jobrole_params_schema,
  jobrole_single_schema,
} from "../schemas/referensi.schema.js";

describe("/referensi/industry -Industry Resource-", function () {
  it("Check response status code - /industry", async function () {
    const res = await getIndustry();

    expect(res.status).to.equal(200);
    expect(res.data).to.be.jsonSchema(industry_all_schema);
  });

  it("Check response status code - /industry/{name}", async function () {
    const res = await getIndustryName("Banking");

    expect(res.status).to.equal(200);
    expect(res.data).to.be.jsonSchema(industry_single_schema);
  });
});

describe("/referensi/jobrole -Job Role Resource-", function () {
  it("Check response status code - /jobrole", async function () {
    const res = await getJobrole({ page: 2, q: 3, size: 2 });

    expect(res.status).to.equal(200);
    expect(res.data).to.be.jsonSchema(jobrole_params_schema);
  });

  it("Check response status code - /jobrole/byid", async function () {
    const res = await getJobroleById(5);

    expect(res.status).to.equal(200);
    expect(res.data).to.be.jsonSchema(jobrole_single_schema);
  });

  it("Check response status code - /jobrole/exact/{name}", async function () {
    const res = await getJobroleExactName("IT Support");

    expect(res.status).to.equal(200);
    expect(res.data).to.be.jsonSchema(jobrole_single_schema);
  });

  // it("Check response status code - /jobrole/{industry}/{name}", async function () {});
  it("Check response status code - /jobrole/{name}", async function () {
    const res = await getJobroleName("Cloud Engineer");

    expect(res.status).to.equal(200);
    expect(res.data).to.be.jsonSchema(jobrole_single_schema);
  });
});

describe("/referensi/skill - Skill Resource-", function () {
  // it("Check response status code - /skill/{industry}/{name}", async function () {
  //   const res = await getSkillIndustryName
  // });

  it("Check response status code - /skill/{name}", async function () {
    const res = await getSkillName("Banking");

    expect(res.status).to.equal(200);
    expect(res.data).to.be.jsonSchema(jobrole_single_schema);
  });
});

describe("/referensi/swtool - Software Tool Resource-", function () {
  it("Check response status code - /swtool", async function () {
    const res = await getSwtool({ page: 1, q: "a", size: 8 });

    expect(res.status).to.equal(200);
    expect(res.data).to.be.jsonSchema(jobrole_params_schema);
  });

  it("Check response status code - /swtool/byid", async function () {
    const res = await getSwtoolById(3);

    expect(res.status).to.equal(200);
    expect(res.data).to.be.jsonSchema(jobrole_single_schema);
  });

  it("Check response status code - /swtool/{name}", async function () {
    const res = await getSwtoolName("Adobe");

    expect(res.status).to.equal(200);
    expect(res.data).to.be.jsonSchema(jobrole_single_schema);
  });
});
