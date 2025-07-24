"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Play,
  FileText,
  Zap,
  Shield,
  Users,
  Clock,
  CheckCircle,
  Star,
  ArrowRight,
  Mic,
  Video,
  Search,
} from "lucide-react";
import Link from "next/link";
import { APP_ROUTES } from "@/lib/constants/app-routes";
import Image from "next/image";

const features = [
  {
    icon: <Mic className="h-8 w-8" />,
    title: "AI Transcription",
    description:
      "Get accurate transcripts of your meetings with 99% accuracy using advanced AI technology.",
  },
  {
    icon: <FileText className="h-8 w-8" />,
    title: "Smart Summaries",
    description:
      "Automatically generate concise summaries with key decisions and action items.",
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: "Key Highlights",
    description:
      "Extract important moments and insights from your meetings instantly.",
  },
  {
    icon: <Search className="h-8 w-8" />,
    title: "Searchable Archive",
    description:
      "Find any meeting content quickly with powerful search across all your recordings.",
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Team Collaboration",
    description:
      "Share meeting insights and collaborate on action items with your team.",
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Enterprise Security",
    description:
      "Bank-level encryption and compliance with SOC2, GDPR, and HIPAA standards.",
  },
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "VP of Product",
    company: "TechCorp",
    content:
      "This tool has revolutionized how we handle meetings. No more manual note-taking!",
    avatar:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
  },
  {
    name: "Michael Chen",
    role: "Engineering Manager",
    company: "StartupXYZ",
    content:
      "The AI summaries are incredibly accurate. Saves us hours every week.",
    avatar:
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
  },
  {
    name: "Emily Rodriguez",
    role: "Operations Director",
    company: "ScaleUp Inc",
    content:
      "Perfect for keeping track of decisions and ensuring nothing falls through the cracks.",
    avatar:
      "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
  },
];

export default function LandingPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-2 rounded-lg">
                <Video className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                MeetingAI
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

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div
              className={`transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <Badge
                variant="secondary"
                className="mb-6 px-4 py-2 text-sm font-medium"
              >
                <Star className="h-4 w-4 mr-2" />
                Trusted by 10,000+ teams worldwide
              </Badge>
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Let AI attend your{" "}
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  meetings
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                Transform your meetings into actionable insights with AI-powered
                transcription, summaries, and highlights. Never miss important
                details again.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link href="/dashboard">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 px-8 py-4 text-lg"
                  >
                    Start Free Trial
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="px-8 py-4 text-lg"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </Button>
              </div>
            </div>

            {/* Demo Video/Image Placeholder */}
            <div
              className={`transition-all duration-1000 delay-300 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="bg-gradient-to-r from-blue-100 to-indigo-100 rounded-2xl p-8 max-w-4xl mx-auto shadow-2xl">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="text-left space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <Mic className="h-4 w-4 text-blue-600" />
                      </div>
                      <div className="flex-1 h-3 bg-gray-200 rounded animate-pulse"></div>
                    </div>
                    <div className="ml-11 space-y-2">
                      <div className="h-2 bg-gray-100 rounded w-3/4"></div>
                      <div className="h-2 bg-gray-100 rounded w-1/2"></div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                      </div>
                      <span className="text-sm text-gray-600">
                        AI Summary Generated
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Everything you need for smarter meetings
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Powerful AI features to transform how your team collaborates and
              makes decisions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-2 hover:border-blue-200 transition-all duration-300 hover:shadow-lg"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">99%</div>
              <div className="text-blue-100">Transcription Accuracy</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50K+</div>
              <div className="text-blue-100">Meetings Processed</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">30%</div>
              <div className="text-blue-100">Time Saved</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Loved by teams everywhere
            </h2>
            <p className="text-xl text-gray-600">
              See what our customers have to say about MeetingAI
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic">
                    &quot;{testimonial.content}&quot;
                  </p>
                  <div className="flex items-center">
                    <Image
                      width={40}
                      height={40}
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-10 h-10 rounded-full mr-3"
                    />
                    <div>
                      <div className="font-semibold text-gray-900">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-500">
                        {testimonial.role}, {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Ready to transform your meetings?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of teams already using MeetingAI to make their
            meetings more productive
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/dashboard">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 px-8 py-4 text-lg"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="px-8 py-4 text-lg">
              Contact Sales
            </Button>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-2 rounded-lg">
                  <Video className="h-6 w-6 text-white" />
                </div>
                <span className="text-2xl font-bold">MeetingAI</span>
              </div>
              <p className="text-gray-400">
                AI-powered meeting assistant for modern teams
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    API
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Privacy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 MeetingAI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
