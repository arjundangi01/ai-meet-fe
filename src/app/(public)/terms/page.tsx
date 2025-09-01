import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Video,
  FileText,
  Scale,
  Shield,
  CreditCard,
  Users,
  ArrowLeft,
  AlertTriangle,
  CheckCircle,
  Mail,
  Globe,
} from "lucide-react";
import Link from "next/link";
import { APP_ROUTES } from "@/lib/constants/app-routes";

export default function TermsOfServicePage() {
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
            <Scale className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Terms of Service
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            These terms govern your use of MeetingAI and outline our mutual
            responsibilities.
          </p>
          <p className="text-sm text-gray-500 mt-4">
            Last updated: January 15, 2024
          </p>
        </div>

        {/* Key Points Overview */}
        <Card className="mb-8 border-green-200 bg-green-50">
          <CardHeader>
            <CardTitle className="text-green-900 flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              Key Points Summary
            </CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-green-900 mb-2">
                ✅ What You Get
              </h3>
              <ul className="text-sm text-green-800 space-y-1">
                <li>• AI-powered meeting transcription</li>
                <li>• Unlimited meeting uploads</li>
                <li>• Secure data storage</li>
                <li>• 24/7 customer support</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-green-900 mb-2">
                📋 Your Responsibilities
              </h3>
              <ul className="text-sm text-green-800 space-y-1">
                <li>• Use service lawfully and ethically</li>
                <li>• Respect others&apos; privacy rights</li>
                <li>• Keep account credentials secure</li>
                <li>• Comply with applicable laws</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Main Content */}
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>1. Acceptance of Terms</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                By accessing or using MeetingAI (&quot;Service&quot;), you agree
                to be bound by these Terms of Service (&quot;Terms&quot;). If
                you disagree with any part of these terms, you may not access
                the Service.
              </p>
              <p className="text-gray-600">
                These Terms apply to all visitors, users, and others who access
                or use the Service. We reserve the right to update these Terms
                at any time, and continued use of the Service constitutes
                acceptance of any changes.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>2. Description of Service</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                MeetingAI is an AI-powered platform that provides:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>
                    Automated transcription of meeting recordings with speaker
                    identification
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>
                    AI-generated summaries and key takeaways from meeting
                    content
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>
                    Secure storage and organization of meeting data and insights
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>
                    Team collaboration tools for sharing and discussing meeting
                    outcomes
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>3. User Accounts and Responsibilities</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Account Creation
                </h3>
                <p className="text-gray-600">
                  You must provide accurate and complete information when
                  creating an account. You are responsible for maintaining the
                  security of your account credentials.
                </p>
              </div>
              <Separator />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Acceptable Use
                </h3>
                <p className="text-gray-600">
                  You agree to use the Service only for lawful purposes and in
                  accordance with these Terms. You may not use the Service to
                  upload content that violates others&apos; privacy rights or
                  contains illegal material.
                </p>
              </div>
              <Separator />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Content Ownership
                </h3>
                <p className="text-gray-600">
                  You retain ownership of all content you upload to the Service.
                  By uploading content, you grant us a limited license to
                  process and analyze it for the purpose of providing our
                  services.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <CreditCard className="h-5 w-5 mr-2" />
                4. Billing and Payments
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Free Trial</h3>
                <p className="text-gray-600">
                  We offer a 14-day free trial with full access to all features.
                  No credit card is required to start your trial. The trial
                  automatically expires without any charges.
                </p>
              </div>
              <Separator />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Subscription Plans
                </h3>
                <p className="text-gray-600">
                  Paid subscriptions are billed monthly or annually in advance.
                  All fees are non-refundable except as required by law. You may
                  cancel your subscription at any time.
                </p>
              </div>
              <Separator />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Price Changes
                </h3>
                <p className="text-gray-600">
                  We may change our pricing with 30 days&apos; notice. Price
                  changes will not affect your current billing cycle but will
                  apply to subsequent renewals.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <AlertTriangle className="h-5 w-5 mr-2" />
                5. Limitations and Disclaimers
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Service Availability
                </h3>
                <p className="text-gray-600">
                  While we strive for 99.9% uptime, we cannot guarantee
                  uninterrupted service. We may perform maintenance that
                  temporarily affects service availability.
                </p>
              </div>
              <Separator />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  AI Accuracy
                </h3>
                <p className="text-gray-600">
                  Our AI transcription and summary features are highly accurate
                  but not perfect. You should review AI-generated content for
                  accuracy before making important decisions.
                </p>
              </div>
              <Separator />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Limitation of Liability
                </h3>
                <p className="text-gray-600">
                  Our liability is limited to the amount you paid for the
                  Service in the 12 months preceding any claim. We are not
                  liable for indirect, incidental, or consequential damages.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>6. Termination</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Either party may terminate this agreement at any time. Upon
                termination:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>
                    Your access to the Service will be immediately suspended
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>
                    You will have 30 days to download your data before permanent
                    deletion
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>
                    All outstanding fees become immediately due and payable
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                7. Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                For questions about these Terms of Service, please contact us:
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
          <h2 className="text-2xl font-bold mb-4">
            Questions about our terms?
          </h2>
          <p className="text-blue-100 mb-6">
            Our legal team is here to help clarify any questions you may have
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={APP_ROUTES.SIGNUP}>
              <Button
                size="lg"
                variant="outline"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                Start Free Trial
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
