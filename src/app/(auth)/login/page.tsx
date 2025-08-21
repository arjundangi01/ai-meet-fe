"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
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
import GoogleButton from "../signup/components/google-button";
import FeatureHighlight from "../signup/components/feature-highlight";
import { APP_ROUTES } from "@/lib/constants/app-routes";

const features = [
  {
    icon: <Mic className="h-5 w-5" />,
    title: "AI Transcription",
    description: "Get accurate transcripts",
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
      "ReplayAI has transformed how we handle our weekly standups. The AI summaries are incredibly accurate.",
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
                  ReplayAI
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
                <GoogleButton />

                <div className="text-center">
                  <p className="text-sm text-gray-600">
                    Don&apos;t have an account?{" "}
                    <Link
                      href={APP_ROUTES.SIGNUP}
                      className="text-blue-600 hover:text-blue-500 font-semibold"
                    >
                      Sign up for free
                    </Link>
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Trust Indicators */}
            {/* <div className="mt-8 text-center max-w-md mx-auto">
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
            </div> */}
          </div>

          {/* Right Column - Features & Testimonials */}
          <div className="space-y-12">
            {/* Features */}
            <FeatureHighlight />

            {/* Stats */}
            {/* <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
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
            </div> */}

            {/* Security Badge */}
            {/* <div className="bg-gray-50 rounded-xl p-6 text-center">
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
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
