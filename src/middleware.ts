import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { COOKIES, USER_ROLES } from "@/lib/types";
import { APP_ROUTES } from "./lib/constants/app-routes";

interface Permissions {
  [endpoint: string]: string[];
}

const permissions: Permissions = {
  "profile-settings": [USER_ROLES.ADMIN],
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
  const publicPaths = [APP_ROUTES.HOME, APP_ROUTES.LOGIN, APP_ROUTES.SIGNUP];

  const isPublicPath = publicPaths.includes(path as typeof APP_ROUTES.HOME);
  const token = request.cookies.get(COOKIES.AUTH_TOKEN)?.value || "";
  const userType = request.cookies.get(COOKIES.USER_TYPE)?.value || "";

  const Redirect = () => {
    if (token) {
      switch (userType) {
        case USER_ROLES.USER:
          return NextResponse.redirect(
            new URL(APP_ROUTES.USER.DASHBOARD, request.url)
          );
      }
    }
    return NextResponse.redirect(new URL(APP_ROUTES.HOME, request.url));
  };

  if (token && isPublicPath) {
    return Redirect();
  }

  if (!token && !isPublicPath) {
    return Redirect();
  }

  if (
    (token &&
      path.startsWith(APP_ROUTES.ADMIN.ROOT) &&
      userType !== USER_ROLES.ADMIN) ||
    (token &&
      path.startsWith(APP_ROUTES.USER.ROOT) &&
      userType !== USER_ROLES.USER)
  ) {
    return Redirect();
  }

  const pathSegments = path.split("/");
  const endpoint = pathSegments.length >= 3 ? pathSegments[2] : null;

  const allowedRoles = endpoint ? permissions[endpoint] : undefined;
  if (allowedRoles && !checkAuthorization(request, allowedRoles)) {
    return Redirect();
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
    "/user/:path*",
  ],
};
