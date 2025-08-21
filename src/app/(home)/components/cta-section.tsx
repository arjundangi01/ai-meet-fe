import { APP_ROUTES } from "@/lib/constants/app-routes";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import React from "react";

const CTASection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Ready to transform your meetings?
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Join ReplayAI to make their meetings more productive
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href={APP_ROUTES.SIGNUP}>
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 px-8 py-4 text-lg"
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
        <p className="text-sm text-gray-500 mt-4">
          No credit card required • 14-day free trial • Cancel anytime
        </p>
      </div>
    </section>
  );
};

export default CTASection;
