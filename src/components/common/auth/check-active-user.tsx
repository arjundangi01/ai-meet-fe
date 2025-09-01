"use client";

import { clearCookies } from "@/app/(auth)/_utils/helpers";
import Navbar from "@/components/layout/navbar/navbar";
import Sidebar from "@/components/layout/sidebar";
import { useMe } from "@/hooks/useUser";
import { APP_ROUTES } from "@/lib/constants/app-routes";
import useAuthStore from "@/store/auth-store";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useCallback } from "react";
import Spinner from "../spinner";

export default function CheckActiveStatus({
  children,
}: {
  children: React.ReactNode;
}) {
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

  if (isLoading || !isSuccess || isError)
    return (
      <div className="flex items-center justify-center h-screen">
        <Spinner />
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex">
        <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0 md:top-16">
          <Sidebar className="flex-1 bg-white border-r" />
        </div>
        <div className="md:pl-64 flex-1">
          <main className="p-6">{children}</main>
        </div>
      </div>
    </div>
  );
}
