import React from "react";
import { Search, Zap, BarChart3, TrendingUp, Settings } from "lucide-react";
import Navbar from "./Navbar";

const FEATURE_TAGS = [
  { icon: Zap, label: "Solar Panel" },
  { icon: BarChart3, label: "Monitoring" },
  { icon: TrendingUp, label: "Savings Upto 50%" },
  { icon: Settings, label: "Easy Install" },
];

const STATS = [
  { value: "10K+", label: "Businesses" },
  { value: "50+", label: "Cities" },
  { value: "99.9%", label: "Uptime" },
  { value: "24/7", label: "Support" },
];

const PRODUCTS = [
  {
    name: "Solar Panel",
    desc: "High-efficiency panels for maximum energy output",
    color: "from-amber-100 to-orange-50",
  },
  {
    name: "Energy Monitor",
    desc: "Real-time tracking of your energy consumption",
    color: "from-sky-100 to-blue-50",
  },
  {
    name: "Battery Storage",
    desc: "Store excess energy for later use",
    color: "from-violet-100 to-purple-50",
  },
];

const HeroSection = () => {
  return (
    <div className="relative min-h-screen bg-gray-50">
      <Navbar />

      <main className="relative pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 text-gray-600 text-sm font-medium mb-8 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Trusted by 10k+ Businesses
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight tracking-tight mb-6">
            Power Your Future With
            <span className="block text-indigo-600">Solar</span>
          </h1>

          {/* Subtext */}
          <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed mb-10">
            Clean energy solutions for your home and business.
            Save money and reduce your carbon footprint.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center mb-12">
            <button className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gray-900 text-white font-semibold text-sm hover:bg-gray-800 transition-all duration-300 shadow-lg shadow-gray-900/20">
              Explore Products
            </button>
            <button className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-gray-300 text-gray-700 font-semibold text-sm hover:bg-white hover:border-gray-400 transition-all duration-300">
              How It Works?
            </button>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto flex items-center gap-3 bg-white rounded-full border border-gray-200 shadow-sm px-2 py-2 mb-10">
            <div className="flex items-center gap-2 flex-1 px-4">
              <Search className="w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Explore Our Solutions..."
                className="w-full text-sm text-gray-700 placeholder-gray-400 bg-transparent outline-none"
              />
            </div>
            <button className="px-6 py-2.5 rounded-full bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 transition-all duration-300 whitespace-nowrap">
              Get a Free Consultation
            </button>
          </div>

          {/* Feature Tags */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
            {FEATURE_TAGS.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 text-sm font-medium text-gray-700 shadow-sm"
              >
                <Icon className="w-4 h-4 text-indigo-500" />
                {label}
              </div>
            ))}
          </div>
        </div>

        {/* Stats Bar */}
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {STATS.map(({ value, label }) => (
            <div key={label} className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-gray-900">{value}</p>
              <p className="text-sm text-gray-500 mt-1">{label}</p>
            </div>
          ))}
        </div>

        {/* Product Cards */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {PRODUCTS.map(({ name, desc, color }) => (
            <div
              key={name}
              className="rounded-2xl bg-white border border-gray-200 shadow-sm overflow-hidden hover:shadow-md transition-all duration-300"
            >
              <div className={`h-44 bg-gradient-to-br ${color} flex items-center justify-center`}>
                <div className="w-16 h-16 rounded-2xl bg-white/60 backdrop-blur-sm flex items-center justify-center shadow-sm">
                  <span className="text-2xl font-bold text-gray-700">{name.charAt(0)}</span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{name}</h3>
                <p className="text-sm text-gray-500 mb-4">{desc}</p>
                <button className="text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-colors duration-300">
                  View Products →
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default HeroSection;
