import { useSearchParams } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";
import Link from "next/link";

export default function AuthError() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");

  const getErrorMessage = () => {
    switch (error) {
      case "calendar_access_required":
        return {
          title: "Calendar Access Required",
          description:
            "Calendar access is required for the meeting assistant to work. Please allow access to proceed.",
          action: "Try Again",
        };
      default:
        return {
          title: "Authentication Error",
          description: "Something went wrong during sign-in. Please try again.",
          action: "Try Again",
        };
    }
  };

  const errorInfo = getErrorMessage();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-rose-100">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
            <AlertCircle className="h-6 w-6 text-red-600" />
          </div>
          <CardTitle className="text-2xl font-bold text-red-900">
            {errorInfo.title}
          </CardTitle>
          <CardDescription className="text-red-700">
            {errorInfo.description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Link href="/auth/signin">
            <Button className="w-full" variant="destructive">
              {errorInfo.action}
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
