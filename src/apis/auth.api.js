import axiosInstance from "../libs/axiosInstance.js";

function auth(credential) {
  return axiosInstance.post("/auth/auth/login", credential);
}

export function authLogin() {
  const credential = {
    username: "dummy@prosigmaka.com",
    password: "dummypsm",
  };

  return auth(credential);
}
