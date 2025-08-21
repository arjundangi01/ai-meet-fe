import {
  type PasswordCheckList,
  type CookiesDataType,
} from "@/app/(auth)/_types/auth";
import Cookies from "js-cookie";
import { COOKIES, USER_ROLES } from "@/lib/types";
import { APP_ROUTES } from "@/lib/constants/app-routes";

export const isPasswordValid = (password: string): boolean => {
  const passwordRegex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  return passwordRegex.test(password);
};

export const passwordChecklist = (password: string): PasswordCheckList => {
  return {
    minLength: password.length >= 8,
    hasUpperLower: /[a-z]/.test(password) && /[A-Z]/.test(password),
    hasNumber: /\d/.test(password),
    hasSpecialChar: /[@#$%^&*_?!8/]/.test(password),
  };
};

export function redirectUser(userType: string) {
  switch (userType) {
    case USER_ROLES.USER:
      return APP_ROUTES.USER.DASHBOARD;
    case USER_ROLES.ADMIN:
      return APP_ROUTES.ADMIN.DASHBOARD;
    default:
      return APP_ROUTES.LOGIN;
  }
}

export function setCookies(data: CookiesDataType) {
  const token = data.accessToken;
  Cookies.set(COOKIES.AUTH_TOKEN, token, { expires: 1 });
  Cookies.set(COOKIES.USER_TYPE, data.user.role, { expires: 1 });
}

export function clearCookies() {
  Cookies.remove(COOKIES.AUTH_TOKEN);
  Cookies.remove(COOKIES.USER_TYPE);
}
