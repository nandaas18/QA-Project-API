import axios from "axios";
import axiosInstance from "../libs/axiosInstance.js";

let authToken = null;

// Fungsi untuk login dan menyimpan token
export async function login() {
  const loginData = {
    username: "dummy@prosigmaka.com",
    password: "dummypsm",
  };

  try {
    const loginResponse = await axios.post(
      "https://siska.nunukan.pass-pdam.com/auth/auth/login",
      loginData
    );
    authToken = loginResponse.data.token; // Ambil token dari response
    console.log("Login berhasil, token:", authToken);

    // Setelah login berhasil, set token di axiosInstance
    axiosInstance.defaults.headers["Authorization"] = `Bearer ${authToken}`;

    return loginResponse; // Mengembalikan response login
  } catch (error) {
    console.error("Login gagal:", error);
    throw error;
  }
}

// Fungsi untuk mendapatkan token jika diperlukan
export function getAuthToken() {
  return authToken;
}

export function getProject(size, number) {
  return axiosInstance.get("/project/pca/" + size + number);
}

export function getProjectAllPending(creator, size, number) {
  return axiosInstance.get(
    "/project/pca/allpending/" + creator + size + number
  );
}

export function getProjectId(id) {
  return axiosInstance.get("/project/pca/" + id);
}

export function getPcaItem(id, size, number) {
  return axiosInstance.get("/project/pcaitem/" + id + size + number);
}

export function getPcaItemById(projectCostingId, itemNumber) {
  return axiosInstance.get(
    "/project/pcaitem/byid/" + projectCostingId + itemNumber
  );
}

export function getPcaItemByIdPcid(projectCostingId, size, number) {
  return axiosInstance.get(
    "/project/pcaitem/byidpcid/" + projectCostingId + size + number
  );
}

export function getPcaSubItem(projectCostingId, itemNumber, subItemName) {
  return axiosInstance.get(
    "/project/pcasubitem/" + projectCostingId + itemNumber + subItemName
  );
}

export function getPcaSubItemAll(projectCostingId, size, number) {
  return axiosInstance.get(
    "/project/pcasubitem/all" + projectCostingId + size + number
  );
}

export function getPcaSubItemId(id) {
  return axiosInstance.get("/project/pcasubitem/" + id);
}

export function getPcaSubItemSizeNumber(size, number) {
  return axiosInstance.get("/project/pcasubitem/" + size + number);
}

export function getPcaSupport(size, number) {
  return axiosInstance.get("/project/pca-supportdoc" + id + size + number);
}

export function getPcaSupportGet(tenantId, attachmentId) {
  return axiosInstance.get(
    "/project/pca-supportdoc/get/" + tenantId + attachmentId
  );
}
