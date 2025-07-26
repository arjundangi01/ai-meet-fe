import type firebase from "firebase/compat/app";

export enum COOKIES {
  AUTH_TOKEN = "authToken",
  USER_TYPE = "userType",
  COMPANY_REF = "companyRef",
  IS_ADMIN_PATH = "isAdminPath",
  NEXT_LOCALE = "NEXT_LOCALE",
}

export enum USER_ROLES {
  AUTHOR = "AUTHOR",
  READER = "READER",
  ADMIN = "ADMIN",
  SUPER_ADMIN = "SUPER_ADMIN",
}

export type firebaseResponse = {
  credential: firebase.auth.AuthCredential | null;
  user: {
    displayName: string;
    uid: string;
    email: string;
  };
};
