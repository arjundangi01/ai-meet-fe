"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { Button } from "@/src/components/ui/button";
import { Badge } from "@/src/components/ui/badge";
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
  Globe,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";

const benefits = [
  {
    icon: <CheckCircle className="h-5 w-5 text-green-600" />,
    title: "Free 14-day trial",
    description: "No credit card required",
  },
  {
    icon: <CheckCircle className="h-5 w-5 text-green-600" />,
    title: "Unlimited meetings",
    description: "Process as many meetings as you need",
  },
  {
    icon: <CheckCircle className="h-5 w-5 text-green-600" />,
    title: "AI-powered insights",
    description: "Get smart summaries and action items",
  },
  {
    icon: <CheckCircle className="h-5 w-5 text-green-600" />,
    title: "Team collaboration",
    description: "Share insights with your team",
  },
];

const pricingFeatures = [
  "Unlimited meeting recordings",
  "AI transcription & summaries",
  "Advanced search & filters",
  "Team collaboration tools",
  "Export to PDF, Word, etc.",
  "Priority customer support",
  "Enterprise-grade security",
  "API access & integrations",
];

const companies = [
  { name: "TechCorp", logo: "🏢" },
  { name: "StartupXYZ", logo: "🚀" },
  { name: "InnovateCo", logo: "💡" },
  { name: "ScaleUp", logo: "📈" },
  { name: "BuildFast", logo: "⚡" },
  { name: "GrowthLab", logo: "🧪" },
];

export default function SignupPage() {
  const [isLoading, setIsLoading] = useState(false);

  const handleGoogleSignup = async () => {
    setIsLoading(true);
    // Simulate Google OAuth flow
    setTimeout(() => {
      toast.success("Account created successfully! Welcome to MeetingAI!");
      window.location.href = "/dashboard";
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left Column - Signup Form */}
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
                <div className="flex justify-center mb-4">
                  <Badge
                    variant="secondary"
                    className="px-4 py-2 text-sm font-medium"
                  >
                    <Sparkles className="h-4 w-4 mr-2" />
                    Free 14-day trial
                  </Badge>
                </div>
                <CardTitle className="text-3xl font-bold text-gray-900">
                  Start your free trial
                </CardTitle>
                <p className="text-gray-600 mt-2 text-lg">
                  Join thousands of teams using AI for better meetings
                </p>
              </CardHeader>

              <CardContent className="space-y-6 px-8 pb-8">
                {/* Google Signup Button */}
                <Button
                  onClick={handleGoogleSignup}
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
                    {isLoading
                      ? "Creating your account..."
                      : "Sign up with Google"}
                  </span>
                  {!isLoading && <ArrowRight className="ml-2 h-5 w-5" />}
                </Button>

                {/* Benefits */}
                <div className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      {benefit.icon}
                      <div>
                        <span className="font-medium text-gray-900">
                          {benefit.title}
                        </span>
                        <span className="text-gray-600 text-sm">
                          {" "}
                          - {benefit.description}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="text-center">
                  <p className="text-sm text-gray-600">
                    Already have an account?{" "}
                    <Link
                      href="/login"
                      className="text-blue-600 hover:text-blue-500 font-semibold"
                    >
                      Sign in
                    </Link>
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Trust Indicators */}
            <div className="mt-8 text-center max-w-md mx-auto">
              <p className="text-sm text-gray-500 mb-4">
                Trusted by innovative teams
              </p>
              <div className="flex justify-center space-x-6 text-gray-400">
                <div className="flex items-center space-x-1">
                  <Shield className="h-4 w-4" />
                  <span className="text-xs">Enterprise Security</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Globe className="h-4 w-4" />
                  <span className="text-xs">Global Scale</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Zap className="h-4 w-4" />
                  <span className="text-xs">Lightning Fast</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Features & Social Proof */}
          <div className="space-y-12">
            {/* What's Included */}
            {/* <div className="bg-white rounded-2xl p-8 shadow-lg border">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                What&apos;s included in your trial
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {pricingFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>No credit card required.</strong> Start your free
                  trial today and upgrade anytime.
                </p>
              </div>
            </div> */}

            {/* Success Stories */}
            {/* <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Success by the numbers
              </h3>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold">10,000+</div>
                  <div className="text-green-100">Active Teams</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">2M+</div>
                  <div className="text-green-100">Meetings Processed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">50%</div>
                  <div className="text-green-100">Time Saved</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">4.9/5</div>
                  <div className="text-green-100">User Rating</div>
                </div>
              </div>
            </div> */}

            {/* Feature Highlight */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Why teams love MeetingAI
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center text-blue-600 flex-shrink-0">
                    <Mic className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-lg mb-2">
                      AI-Powered Transcription
                    </h4>
                    <p className="text-gray-600">
                      Get 99% accurate transcripts in real-time with speaker
                      identification and timestamps.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl flex items-center justify-center text-purple-600 flex-shrink-0">
                    <FileText className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-lg mb-2">
                      Smart Summaries
                    </h4>
                    <p className="text-gray-600">
                      Automatically extract key decisions, action items, and
                      important moments from every meeting.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-100 to-red-100 rounded-xl flex items-center justify-center text-orange-600 flex-shrink-0">
                    <Users className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-lg mb-2">
                      Team Collaboration
                    </h4>
                    <p className="text-gray-600">
                      Share insights, comment on transcripts, and collaborate on
                      action items with your team.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Security & Compliance */}
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-center justify-center mb-4">
                <Shield className="h-10 w-10 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-900 text-center mb-3">
                Enterprise-Grade Security
              </h4>
              <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 text-center">
                <div>SOC2 Type II</div>
                <div>GDPR Compliant</div>
                <div>256-bit Encryption</div>
                <div>HIPAA Ready</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
