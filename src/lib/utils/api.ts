import { env } from "@/env.mjs";
import axios, { type AxiosError } from "axios";
import Cookie from "js-cookie";
import { clearCookies } from "@/app/(auth)/_utils/helpers";
import { isClient } from "./is-client";
import { COOKIES } from "../types";

const apiUrl = env.NEXT_PUBLIC_API_URL;

const HEADERS = {
  "Content-Type": "application/json",
};

const apiClient = axios.create({
  baseURL: apiUrl,
  headers: {
    ...HEADERS,
  },
});

apiClient.interceptors.request.use((request) => {
  if (isClient) {
    const token = Cookie.get(COOKIES.AUTH_TOKEN);
    if (token) {
      request.headers = request.headers || {};
      request.headers.Authorization = `Bearer ${token}`;
    }
  }

  return request;
});

// Response interceptor
export type ErrorResponseType = {
  message: string;
};

apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: AxiosError<ErrorResponseType>) => {
    const status = error?.response?.status;
    const errorMessage = error?.response?.data?.message?.toLowerCase() || "";

    // Check for 401 status and token-related errors
    if (status === 401 && errorMessage.includes("invalid token")) {
      clearCookies();

      // Redirect to signin page
      if (isClient) {
        window.location.href = "/signin";
      }
    }

    // Reject the promise with the error so it can be handled by the calling code
    return Promise.reject(error);
  }
);

export { apiClient, apiUrl };
