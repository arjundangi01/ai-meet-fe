import { APP_ROUTES } from "@/lib/constants/app-routes";
import { Button } from "@/components/ui/button";
import React from "react";
import Link from "next/link";
import { Video } from "lucide-react";

const NavBar = () => {
  return (
    <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-2 rounded-lg">
              <Video className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              ReplayAI
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <Link href={APP_ROUTES.LOGIN}>
              <Button variant="outline">Login</Button>
            </Link>
            <Link href={APP_ROUTES.SIGNUP}>
              <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                Try Free
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
