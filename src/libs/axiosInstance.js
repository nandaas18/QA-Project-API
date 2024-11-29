import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://siska.nunukan.pass-pdam.com",
  headers: {
    "X-TenantID": "9999",
  },
});

export default axiosInstance;
