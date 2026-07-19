import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#050505]">
      <Navbar />
      {/* Push content below the fixed navbar */}
      <main className="pt-20 lg:pt-24">
        <HeroSection />
      </main>
    </div>
  );
};

export default HomePage;
