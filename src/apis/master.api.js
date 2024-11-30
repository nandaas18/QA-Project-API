import axiosInstance from "../libs/axiosInstance.js";
import { authLogin } from "./auth.api.js";

export async function getCompany() {
  const auth = await authLogin();

  const access_token = await auth.data.access_token;

  const res = await axiosInstance.get(`/master/companycontact`, {
    headers: {
      "X-TenantID": 9999,
      Authorization: `Bearer ${access_token}`,
    },
  });

  return res;
}

export async function getCompanyId(id) {
  const auth = await authLogin();

  const access_token = await auth.data.access_token;

  const res = await axiosInstance.get(`/master/companycontact/${id}`, {
    headers: {
      "X-TenantID": 9999,
      Authorization: `Bearer ${access_token}`,
    },
  });

  return res;
}

export async function getCompanyD() {
  const auth = await authLogin();

  const access_token = await auth.data.access_token;

  const res = await axiosInstance.get(`/master/companyd`, {
    headers: {
      "X-TenantID": 9999,
      Authorization: `Bearer ${access_token}`,
    },
  });

  return res;
}

export async function getCompanyDId(id) {
  const auth = await authLogin();

  const access_token = await auth.data.access_token;

  const res = await axiosInstance.get(`/master/companyd/${id}`, {
    headers: {
      "X-TenantID": 9999,
      Authorization: `Bearer ${access_token}`,
    },
  });

  return res;
}

export async function getCompanyH() {
  const auth = await authLogin();

  const access_token = await auth.data.access_token;

  const res = await axiosInstance.get(`/master/companyh`, {
    headers: {
      "X-TenantID": 9999,
      Authorization: `Bearer ${access_token}`,
    },
  });

  return res;
}

export async function getCompanyHId(id) {
  const auth = await authLogin();

  const access_token = await auth.data.access_token;

  const res = await axiosInstance.get(`/master/companyh/${id}`, {
    headers: {
      "X-TenantID": 9999,
      Authorization: `Bearer ${access_token}`,
    },
  });

  return res;
}

export async function getConfig(name, user) {
  const auth = await authLogin();

  const access_token = await auth.data.access_token;

  const res = await axiosInstance.get(`/master/config/${name}/${user}`, {
    headers: {
      "X-TenantID": 9999,
      Authorization: `Bearer ${access_token}`,
    },
  });

  return res;
}

export async function getConfigId(id) {
  const auth = await authLogin();

  const access_token = await auth.data.access_token;

  const res = await axiosInstance.get(`/master/config/${id}`, {
    headers: {
      "X-TenantID": 9999,
      Authorization: `Bearer ${access_token}`,
    },
  });

  return res;
}

export async function getConfigList(size, number) {
  const auth = await authLogin();

  const access_token = await auth.data.access_token;

  const res = await axiosInstance.get(`/master/config/list/${size}/${number}`, {
    headers: {
      "X-TenantID": 9999,
      Authorization: `Bearer ${access_token}`,
    },
  });

  return res;
}

export async function getReference(type) {
  const auth = await authLogin();

  const access_token = await auth.data.access_token;

  const res = await axiosInstance.get(`/master/reference/${type}`, {
    headers: {
      "X-TenantID": 9999,
      Authorization: `Bearer ${access_token}`,
    },
  });

  return res;
}

export async function getCompdocA(tenantId, id) {
  const auth = await authLogin();

  const access_token = await auth.data.access_token;

  const res = await axiosInstance.get(`/master/compdoc/a/${tenantId}${id}`, {
    headers: {
      "X-TenantID": 9999,
      Authorization: `Bearer ${access_token}`,
    },
  });

  return res;
}

export async function getCompdocId(id) {
  const auth = await authLogin();

  const access_token = await auth.data.access_token;

  const res = await axiosInstance.get(
    `/master/compdoc/bycompanyheaderid/${id}`,
    {
      headers: {
        "X-TenantID": 9999,
        Authorization: `Bearer ${access_token}`,
      },
    }
  );

  return res;
}

export async function getCompdoc(tenantId, id) {
  const auth = await authLogin();

  const access_token = await auth.data.access_token;

  const res = await axiosInstance.get(`/master/compdoc/${tenantId}/${id}`, {
    headers: {
      "X-TenantID": 9999,
      Authorization: `Bearer ${access_token}`,
    },
  });

  return res;
}

export async function getInviting(userId) {
  const auth = await authLogin();

  const access_token = await auth.data.access_token;

  const res = await axiosInstance.get(`/master/invitinguser/${userId}`, {
    headers: {
      "X-TenantID": 9999,
      Authorization: `Bearer ${access_token}`,
    },
  });

  return res;
}

export async function getSalgradeById(type, id) {
  const auth = await authLogin();

  const access_token = await auth.data.access_token;

  const res = await axiosInstance.get(`/master/salgrade/byid/${type}/${id}`, {
    headers: {
      "X-TenantID": 9999,
      Authorization: `Bearer ${access_token}`,
    },
  });

  return res;
}

export async function getSalgrade(type, nominal) {
  const auth = await authLogin();

  const access_token = await auth.data.access_token;

  const res = await axiosInstance.get(
    `/master/salgrade/byid/${type}/${nominal}`,
    {
      headers: {
        "X-TenantID": 9999,
        Authorization: `Bearer ${access_token}`,
      },
    }
  );

  return res;
}

export async function getService() {
  const auth = await authLogin();

  const access_token = await auth.data.access_token;

  const res = await axiosInstance.get(`/master/service`, {
    headers: {
      "X-TenantID": 9999,
      Authorization: `Bearer ${access_token}`,
    },
  });

  return res;
}
