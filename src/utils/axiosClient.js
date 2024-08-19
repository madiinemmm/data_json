import { original } from "@reduxjs/toolkit";
import axios from "axios";

let mainURL = "https://json-api.uz/api/project/mytestapp";

export const axiosClient = axios.create({
  baseURL: mainURL,
});

axios.interceptors.request.use((req) => {
  const token = window.localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const errorObject = error.config;
    try {
      if (error.response.status == 403 && !errorObject._retry) {
        errorObject._retry = true;

        const refresh_token = window.localStorage.getItem("refresh_token");

        const { data } = await axios.post(mainURL + "/auth/refresh-token", {
          refresh_token,
        });

        window.localStorage.setItem("refresh_acces", data.acces_token);

        return axiosClient(originalRequest);
      }
    } catch (error) {}
  }
);
