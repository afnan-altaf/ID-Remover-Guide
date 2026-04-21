import React from "react";
import HeroScene from "@/components/HeroScene";
import StepsSection from "@/components/StepsSection";
import HowItWorks from "@/components/HowItWorks";
import FeaturesSection from "@/components/FeaturesSection";
import GitHubSection from "@/components/GitHubSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground scanline overflow-hidden selection:bg-primary selection:text-background font-mono">
      <HeroScene />
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-24 flex flex-col gap-32">
        <StepsSection />
        <HowItWorks />
        <FeaturesSection />
        <GitHubSection />
      </div>
      <Footer />
    </div>
  );
}
