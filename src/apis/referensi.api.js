import axiosInstance from "../libs/axiosInstance.js";
import { authLogin } from "./auth.api.js";

export async function getIndustry() {
  const auth = await authLogin();

  const access_token = await auth.data.access_token;

  const res = await axiosInstance.get(`/referensi/industry`, {
    headers: {
      "X-TenantID": 9999,
      Authorization: `Bearer ${access_token}`,
    },
  });

  return res;
}

export async function getIndustryName(name) {
  const auth = await authLogin();

  const access_token = await auth.data.access_token;

  const res = await axiosInstance.get(`/referensi/industry/${name}`, {
    headers: {
      "X-TenantID": 9999,
      Authorization: `Bearer ${access_token}`,
    },
  });

  return res;
}

export async function getJobrole(params = {}) {
  const auth = await authLogin();

  const access_token = await auth.data.access_token;

  const res = await axiosInstance.get(`/referensi/jobrole/${params}`, {
    headers: {
      "X-TenantID": 9999,
      Authorization: `Bearer ${access_token}`,
    },
  });

  return res;
}

export async function getJobroleById(id) {
  const auth = await authLogin();

  const access_token = await auth.data.access_token;

  const res = await axiosInstance.get(`/referensi/jobrole/${id}`, {
    headers: {
      "X-TenantID": 9999,
      Authorization: `Bearer ${access_token}`,
    },
  });

  return res;
}

export async function getJobroleExactName(name) {
  const auth = await authLogin();

  const access_token = await auth.data.access_token;

  const res = await axiosInstance.get(`/referensi/jobrole/exact/${name}`, {
    headers: {
      "X-TenantID": 9999,
      Authorization: `Bearer ${access_token}`,
    },
  });

  return res;
}

export async function getJobroleName(name) {
  const auth = await authLogin();

  const access_token = await auth.data.access_token;

  const res = await axiosInstance.get(`/referensi/jobrole/${name}`, {
    headers: {
      "X-TenantID": 9999,
      Authorization: `Bearer ${access_token}`,
    },
  });

  return res;
}

export async function getSkillIndustryName(industry, name) {
  const auth = await authLogin();

  const access_token = await auth.data.access_token;

  const res = await axiosInstance.get(`/referensi/skill/${industry}/${name}`, {
    headers: {
      "X-TenantID": 9999,
      Authorization: `Bearer ${access_token}`,
    },
  });

  return res;
}

export async function getSkillName(name) {
  const auth = await authLogin();

  const access_token = await auth.data.access_token;

  const res = await axiosInstance.get(`/referensi/skill/${name}`, {
    headers: {
      "X-TenantID": 9999,
      Authorization: `Bearer ${access_token}`,
    },
  });

  return res;
}

export async function getSwtool(params = {}) {
  const auth = await authLogin();

  const access_token = await auth.data.access_token;

  const res = await axiosInstance.get(`/referensi/swtool/${params}`, {
    headers: {
      "X-TenantID": 9999,
      Authorization: `Bearer ${access_token}`,
    },
  });

  return res;
}

export async function getSwtoolById(id) {
  const auth = await authLogin();

  const access_token = await auth.data.access_token;

  const res = await axiosInstance.get(`/referensi/swtool/${id}`, {
    headers: {
      "X-TenantID": 9999,
      Authorization: `Bearer ${access_token}`,
    },
  });

  return res;
}

export async function getSwtoolName(name) {
  const auth = await authLogin();

  const access_token = await auth.data.access_token;

  const res = await axiosInstance.get(`/referensi/swtool/${name}`, {
    headers: {
      "X-TenantID": 9999,
      Authorization: `Bearer ${access_token}`,
    },
  });

  return res;
}
