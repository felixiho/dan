import axios from "axios";

const url = process.env.NEXT_PUBLIC_APP_API;

const axiosInstance = axios.create({
  baseURL: url,
});

axiosInstance.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem("token");
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

const clientUrl = process.env.NEXT_PUBLIC_APP_API_CLIENT;

export const axiosClientInstance = axios.create({
  baseURL: clientUrl,
});

export default axiosInstance;
