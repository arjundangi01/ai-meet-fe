import Cookies from "js-cookie";
import { COOKIES } from "../enum/common";
import { USER_ROLES } from "../types";

export const setAuthCookies = (token: string) => {
  Cookies.set(COOKIES.AUTH_TOKEN, token);
  Cookies.set(COOKIES.USER_TYPE, USER_ROLES.USER);
};

export const removeAuthCookies = () => {
  Cookies.remove(COOKIES.AUTH_TOKEN);
  Cookies.remove(COOKIES.USER_TYPE);
};
