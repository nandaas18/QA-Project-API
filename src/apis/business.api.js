import axiosInstance from "../libs/axiosInstance.js";

export function authLogin(credential) {
  return axiosInstance.post("/auth/auth.login", credential);
}

export function authAutoLogin() {
  const credential = {
    username: "dummy@prosigmaka.com",
    password: "dummypsm",
  };

  return authLogin(credential);
}

export function getQuotation() {
  return axiosInstance.get("/business/quotation");
}

export function getAllSizeNumber(size, number) {
  return axiosInstance.get("/business/quotation/all/" + size + number);
}

export function getAllPending(creator, size, number) {
  return axiosInstance.get(
    "/business/quotation/allpending/" + creator + size + number
  );
}

export function getByCompanyHeader(companyHeaderId, size, number) {
  return axiosInstance.get(
    "/business/quotation/bycompanyheader/" + companyHeaderId + size + number
  );
}

export function getQuoId(id) {
  return axiosInstance.get("/business/quotation/" + id);
}

export function getSizeNumber(size, number) {
  return axiosInstance.get("/business/quotation/" + size + number);
}

export function getQuoItem() {
  return axiosInstance.get("/business/quotation-item");
}

export function getByQuoId(size, number) {
  return axiosInstance.get(
    "/business/quotation-item/byquotationid/" + size + number
  );
}

export function getQuoDetail(quotationid, number) {
  return axiosInstance.get(
    "/business/quotation-item/detail/" + quotationid + number
  );
}

export function getQuoItemId(id) {
  return axiosInstance.get("/business/quotation-item/" + id);
}

export function getQuoItemSizeNumber(size, number) {
  return axiosInstance.get("/business/quotation-item/" + size + number);
}

export function getTac() {
  return axiosInstance.get("/business/tac");
}

export function getTacId(id) {
  return axiosInstance.get("/business/tac/" + id);
}

export function getTacSizeNumber(size, number) {
  return axiosInstance.get("/business/tac/" + size + number);
}
