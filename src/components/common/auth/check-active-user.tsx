"use client";

import { clearCookies } from "@/app/(auth)/_utils/helpers";
import { useMe } from "@/hooks/useUser";
import { APP_ROUTES } from "@/lib/constants/app-routes";
import useAuthStore from "@/store/auth-store";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useCallback } from "react";

export default function CheckActiveStatus() {
  const { data: userData, isError, isLoading, isSuccess } = useMe();
  const router = useRouter();
  const pathname = usePathname();
  const { setUser } = useAuthStore((state) => state);

  useEffect(() => {
    if (isLoading) return;

    const isInvalid = !isSuccess || isError || !userData?.me;

    if (isInvalid) {
      clearCookies();
      router.replace(APP_ROUTES.LOGIN);
      return;
    } else if (userData?.me) {
      setUser(userData.me);
    }
  }, [isLoading, isSuccess, isError, userData, router, setUser]);

  return null;
}
