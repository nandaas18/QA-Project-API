import axiosInstance from "../libs/axiosInstance.js";
import { authLogin } from "./auth.api.js";

export async function getProject(size, number) {
  const auth = await authLogin();

  const access_token = await auth.data.access_token;

  const res = await axiosInstance.get(`/project/pca/${size}/${number}`, {
    headers: {
      "X-TenantID": 9999,
      Authorization: `Bearer ${access_token}`,
    },
  });

  return res;
}

export async function getProjectAllPending(creator, size, number) {
  const auth = await authLogin();

  const access_token = await auth.data.access_token;

  const res = await axiosInstance.get(
    `/project/pca/allpending/${creator}/${size}/${number}`,
    {
      headers: {
        "X-TenantID": 9999,
        Authorization: `Bearer ${access_token}`,
      },
    }
  );

  return res;
}

export async function getProjectId(id) {
  const auth = await authLogin();

  const access_token = await auth.data.access_token;

  const res = await axiosInstance.get(`/project/pca/${id}`, {
    headers: {
      "X-TenantID": 9999,
      Authorization: `Bearer ${access_token}`,
    },
  });

  return res;
}

export async function getPcaItem(id, size, number) {
  const auth = await authLogin();

  const access_token = await auth.data.access_token;

  const res = await axiosInstance.get(
    `/project/pcaitem/${id}/${size}/${number}`,
    {
      headers: {
        "X-TenantID": 9999,
        Authorization: `Bearer ${access_token}`,
      },
    }
  );

  return res;
}

export async function getPcaItemById(projectCostingId, itemNumber) {
  const auth = await authLogin();

  const access_token = await auth.data.access_token;

  const res = await axiosInstance.get(
    `/project/pcaitem/byid/${projectCostingId}/${itemNumber}`,
    {
      headers: {
        "X-TenantID": 9999,
        Authorization: `Bearer ${access_token}`,
      },
    }
  );

  return res;
}

export async function getPcaItemByIdPcid(projectCostingId, size, number) {
  const auth = await authLogin();

  const access_token = await auth.data.access_token;

  const res = await axiosInstance.get(
    `/project/pcaitem/byidpcid/${projectCostingId}/${size}/${number}`,
    {
      headers: {
        "X-TenantID": 9999,
        Authorization: `Bearer ${access_token}`,
      },
    }
  );

  return res;
}

export async function getPcaSubItem(projectCostingId, itemNumber, subItemName) {
  const auth = await authLogin();

  const access_token = await auth.data.access_token;

  const res = await axiosInstance.get(
    `/project/pcasubitem/${projectCostingId}/${itemNumber}/${subItemName}`,
    {
      headers: {
        "X-TenantID": 9999,
        Authorization: `Bearer ${access_token}`,
      },
    }
  );

  return res;
}

export async function getPcaSubItemAll(projectCostingId, size, number) {
  const auth = await authLogin();

  const access_token = await auth.data.access_token;

  const res = await axiosInstance.get(
    `/project/pcasubitem/all/${projectCostingId}/${size}/${number}`,
    {
      headers: {
        "X-TenantID": 9999,
        Authorization: `Bearer ${access_token}`,
      },
    }
  );

  return res;
}

export async function getPcaSubItemId(id) {
  const auth = await authLogin();

  const access_token = await auth.data.access_token;

  const res = await axiosInstance.get(`/project/pcasubitem/${id}`, {
    headers: {
      "X-TenantID": 9999,
      Authorization: `Bearer ${access_token}`,
    },
  });

  return res;
}

export async function getPcaSubItemSizeNumber(size, number) {
  const auth = await authLogin();

  const access_token = await auth.data.access_token;

  const res = await axiosInstance.get(`/project/pcasubitem/${size}/${number}`, {
    headers: {
      "X-TenantID": 9999,
      Authorization: `Bearer ${access_token}`,
    },
  });

  return res;
}

export async function getPcaSupport(size, number) {
  const auth = await authLogin();

  const access_token = await auth.data.access_token;

  const res = await axiosInstance.get(
    `/project/pca-supportdoc/${id}/${size}/${number}`,
    {
      headers: {
        "X-TenantID": 9999,
        Authorization: `Bearer ${access_token}`,
      },
    }
  );

  return res;
}

export async function getPcaSupportGet(tenantId, attachmentId) {
  const auth = await authLogin();

  const access_token = await auth.data.access_token;

  const res = await axiosInstance.get(
    `/project/pca-supportdoc/get/${tenantId}/${attachmentId}`,
    {
      headers: {
        "X-TenantID": 9999,
        Authorization: `Bearer ${access_token}`,
      },
    }
  );

  return res;
}
