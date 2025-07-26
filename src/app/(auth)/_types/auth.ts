import { IUser } from "@/lib/types/uset";

export interface IOAuthUser {
  name: string;
  email: string;
  accessToken: string;
  oauth: string;
  firebaseUid: string;
  idToken: string;
}

export type CookiesDataType = {
  accessToken: string;
  user: {
    role: string;
  };
};

export type ISignupResponse = {
  accessToken: string;
  user: IUser;
};

export interface PasswordCheckList {
  minLength: boolean;
  hasUpperLower: boolean;
  hasNumber: boolean;
  hasSpecialChar: boolean;
}
