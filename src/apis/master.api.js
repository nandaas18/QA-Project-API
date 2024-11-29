import axiosInstance from "../libs/axiosInstance.js";

export function getCompany() {
  return axiosInstance.get("/master/companycontact");
}

export function getCompanyId(id) {
  return axiosInstance.get("/master/companycontact/" + id);
}

export function getCompanyD() {
  return axiosInstance.get("/master/companyd");
}

export function getCompanyDId(id) {
  return axiosInstance.get("/master/companyd/" + id);
}

export function getCompanyH() {
  return axiosInstance.get("/master/companyh");
}

export function getCompanyHId(id) {
  return axiosInstance.get("/master/companyh" + id);
}

export function getConfig(name, user) {
  return axiosInstance.get("/master/config/" + name + user);
}

export function getConfigId(id) {
  return axiosInstance.get("/master/config/" + id);
}

export function getConfigList(size, number) {
  return axiosInstance.get("/master/config/list" + size + number);
}

export function getReference(type) {
  return axiosInstance.get("/master/reference/" + type);
}

export function getCompdocA(tenantId, id) {
  return axiosInstance.get("/master/compdoc/a/" + tenantId + id);
}

export function getCompdocId(id) {
  return axiosInstance.get("/master/compdoc/bycompanyheaderid/" + id);
}

export function getCompdoc(tenantId, id) {
  return axiosInstance.get("/master/compdoc/" + tenantId + id);
}

export function getInviting(userId) {
  return axiosInstance.get("/master/invitinguser/" + userId);
}

export function getSalgradeById(type, id) {
  return axiosInstance.get("/master/salgrade/byid/" + type + id);
}

export function getSalgrade(type, nominal) {
  return axiosInstance.get("/master/salgrade/byid/" + type + nominal);
}

export function getService() {
  return axiosInstance.get("/master/service");
}
