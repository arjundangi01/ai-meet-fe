"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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
import GoogleButton from "./components/google-button";
import FeatureHighlight from "./components/feature-highlight";
import { APP_ROUTES } from "@/lib/constants/app-routes";
import BetaNotice from "./components/beta-notice";

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
                  ReplayAI
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
                <GoogleButton />

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
                      href={APP_ROUTES.LOGIN}
                      className="text-blue-600 hover:text-blue-500 font-semibold"
                    >
                      Sign in
                    </Link>
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* <BetaNotice /> */}

            {/* Trust Indicators */}
            {/* <div className="mt-8 text-center max-w-md mx-auto">
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
            </div> */}
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
            <FeatureHighlight />

            {/* Security & Compliance */}
            {/* <div className="bg-gray-50 rounded-xl p-6">
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
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
