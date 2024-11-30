import axiosInstance from "../libs/axiosInstance.js";
import { authLogin } from "./auth.api.js";

export async function getQuotation() {
  const auth = await authLogin();

  const access_token = await auth.data.access_token;

  const res = await axiosInstance.get(`/business/quotation`, {
    headers: {
      "X-TenantID": 9999,
      Authorization: `Bearer ${access_token}`,
    },
  });

  return res;
}

export async function getAllSizeNumber(size, number) {
  const auth = await authLogin();

  const access_token = await auth.data.access_token;

  const res = await axiosInstance.get(
    `/business/quotation/all/${size}/${number}`,
    {
      headers: {
        "X-tenantID": 9999,
        Authorization: `Bearer ${access_token}`,
      },
    }
  );

  return res;
}

export async function getAllPending(creator = null, size, number) {
  const auth = await authLogin();

  const access_token = await auth.data.access_token;

  const res = await axiosInstance.get(
    `/business/quotation/allpending/${creator}/${size}/${number}`,
    {
      headers: {
        "X-TenantID": 9999,
        Authorization: `Bearer ${access_token}`,
      },
    }
  );

  return res;
}

export async function getByCompanyHeader(companyHeaderId, size, number) {
  const auth = await authLogin();

  const access_token = await auth.data.access_token;

  const res = await axiosInstance.get(
    `/business/quotation/bycompanyheader/${companyHeaderId}/${size}/${number}`,
    {
      headers: {
        "X-TenantID": 9999,
        Authorization: `Bearer ${access_token}`,
      },
    }
  );

  return res;
}

export async function getQuoId(id) {
  const auth = await authLogin();

  const access_token = await auth.data.access_token;

  const res = await axiosInstance.get(`/business/quotation/${id}`, {
    headers: {
      "X-TenantID": 9999,
      Authorization: `Bearer ${access_token}`,
    },
  });

  return res;
}

export async function getSizeNumber(size, number) {
  const auth = await authLogin();

  const access_token = await auth.data.access_token;

  const res = await axiosInstance.get(`/business/quotation/${size}/${number}`, {
    headers: {
      "X-TenantID": 9999,
      Authorization: `Bearer ${access_token}`,
    },
  });

  return res;
}

export async function getQuoItem() {
  const auth = await authLogin();

  const access_token = await auth.data.access_token;

  const res = await axiosInstance.get(`/business/quotation-item`, {
    headers: {
      "X-TenantID": 9999,
      Authorization: `Bearer ${access_token}`,
    },
  });

  return res;
}

export async function getByQuoId(size, number) {
  const auth = await authLogin();

  const access_token = await auth.data.access_token;

  const res = await axiosInstance.get(
    `/business/quotation-item/byquotationid/${size}/${number}`,
    {
      headers: {
        "X-TenantID": 9999,
        Authorization: `Bearer ${access_token}`,
      },
    }
  );

  return res;
}

export async function getQuoDetail(quotationid, number) {
  const auth = await authLogin();

  const access_token = await auth.data.access_token;

  const res = await axiosInstance.get(
    `/business/quotation-item/detail/${quotationid}/${number}`,
    {
      headers: {
        "X-TenantID": 9999,
        Authorization: `Bearer ${access_token}`,
      },
    }
  );

  return res;
}

export async function getQuoItemId(id) {
  const auth = await authLogin();

  const access_token = await auth.data.access_token;

  const res = await axiosInstance.get(`/business/quotation-item/${id}`, {
    headers: {
      "X-TenantID": 9999,
      Authorization: `Bearer ${access_token}`,
    },
  });

  return res;
}

export async function getQuoItemSizeNumber(size, number) {
  const auth = await authLogin();

  const access_token = await auth.data.access_token;

  const res = await axiosInstance.get(
    `/business/quotation-item/${size}/${number}`,
    {
      headers: {
        "X-TenantID": 9999,
        Authorization: `Bearer ${access_token}`,
      },
    }
  );

  return res;
}

export async function getTac() {
  const auth = await authLogin();

  const access_token = await auth.data.access_token;

  const res = await axiosInstance.get(`/business/tac`, {
    headers: {
      "X-TenantID": 9999,
      Authorization: `Bearer ${access_token}`,
    },
  });

  return res;
}

export async function getTacId(id) {
  const auth = await authLogin();

  const access_token = await auth.data.access_token;

  const res = await axiosInstance.get(`/business/tac/${id}`, {
    headers: {
      "X-TenantID": 9999,
      Authorization: `Bearer ${access_token}`,
    },
  });

  return res;
}

export async function getTacSizeNumber(size, number) {
  const auth = await authLogin();

  const access_token = await auth.data.access_token;

  const res = await axiosInstance.get(`/business/tac/${size}/${number}`, {
    headers: {
      "X-TenantID": 9999,
      Authorization: `Bearer ${access_token}`,
    },
  });

  return res;
}
