import axiosInstance from "../libs/axiosInstance.js";

export function getIndustry() {
  return axiosInstance.get("/referensi/industry");
}

export function getIndustryName(name) {
  return axiosInstance.get("/referensi/industry/" + name);
}

export function getJobrole(params = {}) {
  return axiosInstance.get("/referensi/jobrole", { params });
}

export function getJobroleById(id) {
  return axiosInstance.get("/referensi/jobrole" + id);
}

export function getJobroleExactName(name) {
  return axiosInstance.get("/referensi/jobrole/exact" + name);
}

export function getJobroleName(name) {
  return axiosInstance.get("/referensi/jobrole/" + name);
}

export function getSkillIndustryName(industry, name) {
  return axiosInstance.get("/referensi/skill/" + industry + name);
}

export function getSkillName(name) {
  return axiosInstance.get("/referensi/skill/" + name);
}

export function getSwtool(params = {}) {
  return axiosInstance.get("/referensi/swtool", { params });
}

export function getSwtoolById(id) {
  return axiosInstance.get("/referensi/swtool" + id);
}

export function getSwtoolName(name) {
  return axiosInstance.get("/referensi/swtool/" + name);
}
