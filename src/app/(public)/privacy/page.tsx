import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Video,
  Shield,
  Lock,
  Eye,
  Database,
  Globe,
  Mail,
  ArrowLeft,
  FileText,
  Users,
  Clock,
} from "lucide-react";
import Link from "next/link";
import { APP_ROUTES } from "@/lib/constants/app-routes";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-2 rounded-lg">
                <Video className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                MeetingAI
              </span>
            </Link>
            <div className="flex items-center space-x-4">
              <Link href="/login">
                <Button variant="outline">Login</Button>
              </Link>
              <Link href="/signup">
                <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                  Try Free
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>

        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <Shield className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your privacy is important to us. This policy explains how we
            collect, use, and protect your information.
          </p>
          <p className="text-sm text-gray-500 mt-4">
            Last updated: January 15, 2024
          </p>
        </div>

        {/* Quick Overview */}
        <Card className="mb-8 border-blue-200 bg-blue-50">
          <CardHeader>
            <CardTitle className="text-blue-900 flex items-center">
              <Eye className="h-5 w-5 mr-2" />
              Privacy at a Glance
            </CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <Lock className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <h3 className="font-semibold text-blue-900">Encrypted Storage</h3>
              <p className="text-sm text-blue-800">
                All data encrypted with AES-256
              </p>
            </div>
            <div className="text-center">
              <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <h3 className="font-semibold text-blue-900">No Data Selling</h3>
              <p className="text-sm text-blue-800">
                We never sell your personal data
              </p>
            </div>
            <div className="text-center">
              <Globe className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <h3 className="font-semibold text-blue-900">GDPR Compliant</h3>
              <p className="text-sm text-blue-800">
                Full compliance with privacy laws
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Main Content */}
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Database className="h-5 w-5 mr-2" />
                Information We Collect
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Account Information
                </h3>
                <p className="text-gray-600">
                  When you create an account, we collect your name, email
                  address, and company information. This information is used to
                  provide and personalize our services.
                </p>
              </div>
              <Separator />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Meeting Data
                </h3>
                <p className="text-gray-600">
                  We process meeting recordings, audio files, and video files
                  that you upload to generate transcripts and summaries. This
                  content is stored securely and is only accessible to you and
                  authorized team members.
                </p>
              </div>
              <Separator />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Usage Analytics
                </h3>
                <p className="text-gray-600">
                  We collect anonymized usage data to improve our services,
                  including feature usage, performance metrics, and error logs.
                  This data cannot be used to identify individual users.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Lock className="h-5 w-5 mr-2" />
                How We Use Your Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    Provide and maintain our AI meeting assistant services
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    Generate accurate transcripts and intelligent summaries
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    Improve our AI algorithms and service quality
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    Send important service updates and notifications
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    Provide customer support and technical assistance
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="h-5 w-5 mr-2" />
                Data Security & Protection
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Encryption</h3>
                <p className="text-gray-600">
                  All data is encrypted in transit using TLS 1.3 and at rest
                  using AES-256 encryption. Your meeting recordings and
                  transcripts are stored in secure, SOC2-compliant data centers.
                </p>
              </div>
              <Separator />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Access Controls
                </h3>
                <p className="text-gray-600">
                  We implement strict access controls and authentication
                  mechanisms. Only authorized personnel can access systems
                  containing personal data, and all access is logged and
                  monitored.
                </p>
              </div>
              <Separator />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Data Retention
                </h3>
                <p className="text-gray-600">
                  Meeting data is retained for as long as your account is
                  active. You can delete individual meetings or your entire
                  account at any time. Deleted data is permanently removed
                  within 30 days.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Globe className="h-5 w-5 mr-2" />
                Your Rights & Choices
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Access & Portability
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Request a copy of your personal data in a machine-readable
                    format.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Correction
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Update or correct any inaccurate personal information.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Deletion</h3>
                  <p className="text-gray-600 text-sm">
                    Request deletion of your personal data and account.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Opt-out</h3>
                  <p className="text-gray-600 text-sm">
                    Unsubscribe from marketing communications at any time.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                Contact Us
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                If you have any questions about this Privacy Policy or our data
                practices, please contact us:
              </p>
              <div className="space-y-2 text-sm">
                <p>
                  <strong>Email:</strong> arjundangi.dev@gmail.com
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer CTA */}
        <div className="text-center mt-12 p-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl text-white">
          <h2 className="text-2xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-blue-100 mb-6">
            Join thousands of teams using AI to make their meetings more
            productive
          </p>
          <Link href={APP_ROUTES.SIGNUP}>
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100"
            >
              Start Free Trial
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
