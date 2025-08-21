import type firebase from "firebase/compat/app";

export enum COOKIES {
  AUTH_TOKEN = "authToken",
  USER_TYPE = "userType",
  IS_ADMIN_PATH = "isAdminPath",
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
