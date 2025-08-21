"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Play, CheckCircle, ArrowRight, Mic, Search } from "lucide-react";
import Link from "next/link";
import { APP_ROUTES } from "@/lib/constants/app-routes";
import LovedByTeams from "./components/loved-by-teams";
import Footer from "./components/footer";
import Stats from "./components/stats";
import Feature from "./components/feature";
import NavBar from "./components/nav-bar";
import HeroSection from "./components/hero-section";
import CTASection from "./components/cta-section";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Navigation */}
      <NavBar />

      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <Feature />

      {/* Stats Section */}
      {/* <Stats /> */}

      {/* Testimonials */}
      {/* <LovedByTeams /> */}

      {/* CTA Section */}
      <CTASection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
