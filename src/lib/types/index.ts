import type firebase from "firebase/compat/app";

export enum COOKIES {
  AUTH_TOKEN = "authToken",
  USER_TYPE = "userType",
  COMPANY_REF = "companyRef",
  IS_ADMIN_PATH = "isAdminPath",
  NEXT_LOCALE = "NEXT_LOCALE",
}

export enum USER_ROLES {
  ADMIN = "ADMIN",
  USER = "USER",
}

export type firebaseResponse = {
  credential: firebase.auth.AuthCredential | null;
  user: {
    displayName: string;
    uid: string;
    email: string;
  };
};
