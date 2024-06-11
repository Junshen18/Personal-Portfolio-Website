import dynamic from "next/dynamic";
import React from "react";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";
import EmailSection from "../components/EmailSection";
import Footer from "../components/Footer";
import AchievementsSection from "../components/AchievementsSection";
import Background from "@/components/Background";

//Server: not found error handler
const HeroSection = dynamic(() => import("../components/HeroSection"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col blobs">
      <Background />

      <main>
        <HeroSection />
        <AchievementsSection />
        <AboutMe />
        <Projects />
        <EmailSection />
      </main>
      <Footer />
    </div>
  );
}
