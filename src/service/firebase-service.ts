import type firebase from "firebase/compat/app";
import { firebaseAuth } from "@/config/firebase-config";
import { firebaseResponse } from "@/lib/types";
import { calendarScopes } from "@/lib/constants/common";

export const SignInWithSocialMediaService = async (
  provider: firebase.auth.AuthProvider
) => {
  try {
    const result = await firebaseAuth.signInWithPopup(provider);
    const grantedScopes = (result.additionalUserInfo?.profile as any)
      ?.granted_scopes;
    if (!grantedScopes.includes(calendarScopes)) {
      throw new Error("Calendar access is required.");
    }

    if (result.user) {
      const { displayName, uid, email } = result.user;
      const resolvedUser = {
        displayName: displayName || "",
        uid,
        email: email || "",
      };

      return {
        credential: result.credential,
        user: resolvedUser,
      };
    } else {
      throw new Error("User object is null.");
    }
  } catch (error) {
    console.log("error", error);
    throw error;
  }
};
