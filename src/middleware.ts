import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { COOKIES, USER_ROLES } from "@/lib/types";
import { APP_ROUTES } from "./lib/constants/app-routes";

interface Permissions {
  [endpoint: string]: string[];
}

const permissions: Permissions = {
  "profile-settings": [
    USER_ROLES.AUTHOR,
    USER_ROLES.ADMIN,
    USER_ROLES.SUPER_ADMIN,
  ],
};

function checkAuthorization(
  request: NextRequest,
  requiredRoles: string[]
): boolean {
  const userType = request.cookies.get(COOKIES.USER_TYPE)?.value || "";
  return requiredRoles.includes(userType);
}

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const publicPaths = [
    // AppRouts.auth.signIn,
    // AppRouts.auth.signUp,
    // AppRouts.auth.forgotPassword,
    APP_ROUTES.HOME,
  ];
  const isPublicPath = publicPaths.includes(path as typeof APP_ROUTES.HOME);
  const token = request.cookies.get(COOKIES.AUTH_TOKEN)?.value || "";
  const userType = request.cookies.get(COOKIES.USER_TYPE)?.value || "";

  // const Redirect = () => {
  //   if (token) {
  //     switch (userType) {
  //       case USER_ROLES.SUPER_ADMIN:
  //         return NextResponse.redirect(
  //           new URL(AppRouts.superAdmin.dashboard, request.url)
  //         );
  //       case USER_ROLES.ADMIN:
  //         return NextResponse.redirect(
  //           new URL(AppRouts.admin.dashboard, request.url)
  //         );
  //       case USER_ROLES.READER:
  //         return NextResponse.redirect(new URL(AppRouts.home, request.url));
  //       case USER_ROLES.AUTHOR:
  //         return NextResponse.redirect(
  //           new URL(AppRouts.author.dashboard, request.url)
  //         );
  //     }
  //   }
  //   return NextResponse.redirect(new URL(AppRouts.home, request.url));
  // };

  // if (token && isPublicPath) {
  //   return Redirect();
  // }

  // if (!token && !isPublicPath) {
  //   return Redirect();
  // }

  // if (
  //   (token &&
  //     path.startsWith("/super-admin") &&
  //     userType !== USER_ROLES.SUPER_ADMIN) ||
  //   (token && path.startsWith("/admin") && userType !== USER_ROLES.ADMIN) ||
  //   (token && path.startsWith("/author") && userType !== USER_ROLES.AUTHOR)
  // ) {
  //   return Redirect();
  // }

  // const pathSegments = path.split("/");
  // const endpoint = pathSegments.length >= 3 ? pathSegments[2] : null;

  // const allowedRoles = endpoint ? permissions[endpoint] : undefined;
  // if (allowedRoles && !checkAuthorization(request, allowedRoles)) {
  //   return Redirect();
  // }

  if (path !== APP_ROUTES.HOME) {
    return NextResponse.redirect(new URL(APP_ROUTES.HOME, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/signin",
    "/signup",
    "/",
    "/pricing",
    "/about",
    "/terms",
    "/privacy",
    "/cookies",
    "/features",
    "/admin/:path*",
    "/super-admin/:path*",
    "/user/:path*",
    "/system/:path*",
    "/author/:path*",
  ],
};
