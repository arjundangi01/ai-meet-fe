import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { env } from "@/env.mjs";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      clientSecret: env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          scope:
            "openid email profile https://www.googleapis.com/auth/calendar.readonly",
          access_type: "offline",
          prompt: "consent",
        },
      },
    }),
  ],
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token;
        token.refreshToken = account.refresh_token;
        token.expiresAt = account.expires_at;
      }
      return token;
    },
    async session({ session, token }) {
      // @ts-ignore
      session.accessToken = token.accessToken as string;
      // @ts-ignore
      session.refreshToken = token.refreshToken as string;
      return session;
    },
  },
  pages: {
    signIn: "/auth/signin",
    error: "/auth/error",
  },
};
