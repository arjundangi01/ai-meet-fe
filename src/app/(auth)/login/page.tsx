"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { Button } from "@/src/components/ui/button";
import { Separator } from "@/src/components/ui/separator";
import {
  Video,
  ArrowRight,
  Shield,
  Users,
  Zap,
  CheckCircle,
  Star,
  Clock,
  FileText,
  Mic,
} from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";
import Image from "next/image";

const features = [
  {
    icon: <Mic className="h-5 w-5" />,
    title: "AI Transcription",
    description: "Get accurate transcripts with 99% accuracy",
  },
  {
    icon: <FileText className="h-5 w-5" />,
    title: "Smart Summaries",
    description: "Automatically generate key insights",
  },
  {
    icon: <Clock className="h-5 w-5" />,
    title: "Save Time",
    description: "Reduce meeting overhead by 50%",
  },
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "VP of Product at TechCorp",
    content:
      "MeetingAI has transformed how we handle our weekly standups. The AI summaries are incredibly accurate.",
    avatar:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
  },
  {
    name: "Michael Chen",
    role: "Engineering Manager",
    content:
      "No more manual note-taking! The transcripts are perfect and the action items are automatically extracted.",
    avatar:
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
  },
];

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);

  const handleGoogleLogin = async () => {
    setIsLoading(true);
    // Simulate Google OAuth flow
    setTimeout(() => {
      toast.success("Welcome back!");
      window.location.href = "/dashboard";
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left Column - Login Form */}
          <div className="flex flex-col justify-center">
            {/* Logo */}
            <div className="text-center mb-8">
              <Link href="/" className="inline-flex items-center space-x-2">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-3 rounded-xl">
                  <Video className="h-8 w-8 text-white" />
                </div>
                <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  MeetingAI
                </span>
              </Link>
            </div>

            <Card className="shadow-2xl border-0 max-w-md mx-auto w-full">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-3xl font-bold text-gray-900">
                  Welcome back
                </CardTitle>
                <p className="text-gray-600 mt-2 text-lg">
                  Sign in to access your meeting insights
                </p>
              </CardHeader>

              <CardContent className="space-y-6 px-8 pb-8">
                {/* Google Login Button */}
                <Button
                  onClick={handleGoogleLogin}
                  disabled={isLoading}
                  className="w-full h-14 bg-white hover:bg-gray-50 text-gray-900 border-2 border-gray-200 shadow-lg hover:shadow-xl transition-all duration-200"
                  variant="outline"
                >
                  <svg className="w-6 h-6 mr-3" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  <span className="text-lg font-medium">
                    {isLoading ? "Signing you in..." : "Continue with Google"}
                  </span>
                  {!isLoading && <ArrowRight className="ml-2 h-5 w-5" />}
                </Button>

                <div className="text-center">
                  <p className="text-sm text-gray-600">
                    Don&apos;t have an account?{" "}
                    <Link
                      href="/signup"
                      className="text-blue-600 hover:text-blue-500 font-semibold"
                    >
                      Sign up for free
                    </Link>
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Trust Indicators */}
            <div className="mt-8 text-center max-w-md mx-auto">
              <p className="text-sm text-gray-500 mb-4">
                Trusted by teams worldwide
              </p>
              <div className="flex justify-center space-x-6 text-gray-400">
                <div className="flex items-center space-x-1">
                  <Shield className="h-4 w-4" />
                  <span className="text-xs">SOC2 Compliant</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Users className="h-4 w-4" />
                  <span className="text-xs">10K+ Teams</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Zap className="h-4 w-4" />
                  <span className="text-xs">99% Uptime</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Features & Testimonials */}
          <div className="space-y-12">
            {/* Features */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Why teams choose MeetingAI
              </h2>
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg flex items-center justify-center text-blue-600 flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-lg">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">
                Join thousands of satisfied users
              </h3>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold">50K+</div>
                  <div className="text-blue-100">Meetings Processed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">99%</div>
                  <div className="text-blue-100">Accuracy Rate</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">30%</div>
                  <div className="text-blue-100">Time Saved</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">24/7</div>
                  <div className="text-blue-100">Support</div>
                </div>
              </div>
            </div>

            {/* Security Badge */}
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="flex items-center justify-center mb-3">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Enterprise-Grade Security
              </h4>
              <p className="text-sm text-gray-600">
                Your data is protected with bank-level encryption and SOC2
                compliance
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
