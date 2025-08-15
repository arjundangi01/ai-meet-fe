"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Video,
  Upload,
  User,
  HelpCircle,
  Settings,
  Clock,
  FileText,
} from "lucide-react";
import { APP_ROUTES } from "@/lib/constants/app-routes";

const sidebarItems = [
  {
    title: "Dashboard",
    href: APP_ROUTES.USER.DASHBOARD,
    icon: LayoutDashboard,
  },
  {
    title: "All Meetings",
    href: APP_ROUTES.USER.MEETINGS,
    icon: Video,
  },
  {
    title: "Recent",
    href: "/meetings?filter=recent",
    icon: Clock,
  },

  {
    title: "Profile",
    href: APP_ROUTES.USER.PROFILE,
    icon: User,
  },
  {
    title: "Settings",
    href: APP_ROUTES.USER.SETTINGS,
    icon: Settings,
  },
  {
    title: "Support",
    href: APP_ROUTES.USER.SUPPORT,
    icon: HelpCircle,
  },
];

interface SidebarProps {
  className?: string;
}

export default function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname();

  return (
    <div className={cn("pb-12 w-64", className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <div className="space-y-1">
            {sidebarItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center rounded-lg px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors",
                  pathname === item.href
                    ? "bg-accent text-accent-foreground"
                    : "transparent"
                )}
              >
                <item.icon className="mr-2 h-4 w-4" />
                <span>{item.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
