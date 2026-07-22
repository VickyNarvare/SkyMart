import React, { useContext } from "react";
import {
    ArrowRight, ShoppingBag, Sparkles, Package,
    Smartphone, Shirt, Home, Gamepad2, Watch, Heart,
    Truck, ShieldCheck, HeadphonesIcon, Star, Zap
} from "lucide-react";
import { useNavigate } from "react-router";
import { UserContext } from "../context/userContext";
const FEATURES = [
    { icon: Truck, title: "Free Shipping", desc: "On orders over $99", color: "text-lime-400" },
    { icon: ShieldCheck, title: "Secure Checkout", desc: "SSL encrypted payment", color: "text-blue-400" },
    { icon: HeadphonesIcon, title: "24/7 Support", desc: "Always here to help", color: "text-purple-400" },
    { icon: Zap, title: "Lightning Fast", desc: "Same-day dispatch", color: "text-amber-400" },
];

const HomePage = () => {
    const link = useNavigate();
    const { singleUserData } = useContext(UserContext)
    return (
        <div className="space-y-16 md:space-y-24 pb-16 md:pb-24">
            <div className="relative max-w-7xl mx-auto mt-8 rounded-4xl border border-white/15 bg-[#0b0b0b] overflow-hidden px-6 md:px-12 lg:px-16 py-16">

                <div
                    className="pointer-events-none absolute inset-0 opacity-4"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-linear(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
                        backgroundSize: "60px 60px",
                    }}
                />
                <div className="pointer-events-none absolute -top-32 -left-32 w-125 h-125 rounded-full bg-lime-500/20 blur-[120px]" />
                <div className="pointer-events-none absolute top-1/2 -translate-y-1/2 -right-32 w-100 h-100 rounded-full bg-lime-500/10 blur-[100px]" />
                <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_150px_rgba(0,0,0,0.6)]" />
                <div className="pointer-events-none absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-lime-400/5 blur-[80px]" />
                <div className="pointer-events-none absolute top-20 right-20 w-60 h-60 rounded-full bg-white/2 blur-[60px]" />

                <div className="relative z-10 flex flex-col lg:flex-row gap-12 lg:gap-8 items-center">
                    <div className="w-full lg:w-[70%] space-y-8">
                        <div className="hero-fade-in inline-flex items-center gap-2 uppercase tracking-[4px] text-lime-400 font-medium text-sm">
                            <Sparkles className="w-4 h-4" />
                            Hey User 👋
                        </div>
                        <h1 className="hero-fade-in-delay-1 font-black text-4xl sm:text-5xl lg:text-7xl leading-tight text-white">
                            Welcome back, <span className="text-lime-400">{singleUserData?.userName || "Explorer"}!</span>
                        </h1>
                        <p className="hero-fade-in-delay-2 text-gray-400 text-lg sm:text-xl leading-relaxed max-w-150">
                            Discover today's picks — hand-curated products across electronics,
                            fashion, home essentials, and more.
                        </p>
                        <div className="hero-fade-in-delay-3 flex flex-col sm:flex-row items-center gap-4 pt-4">
                            <button
                                onClick={() => link("/products")}
                                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-lime-400 text-black font-semibold rounded-2xl px-8 py-4 text-base hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 shadow-[0_0_30px_-6px_rgba(166,255,60,0.35)] hover:shadow-[0_0_40px_-4px_rgba(166,255,60,0.55)]"
                            >
                                Shop Now
                                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                            </button>
                            <button
                                onClick={() => link("/products")}
                                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-white/10 text-white font-semibold rounded-2xl px-8 py-4 text-base hover:bg-white/5 transition-all duration-300"
                            >
                                <ShoppingBag className="w-5 h-5" />
                                View All Products
                            </button>
                        </div>
                    </div>

                    <div className="hero-fade-in-delay-4 w-full lg:w-[30%] flex flex-row lg:flex-col gap-4">
                        <div className="flex-1 lg:flex-none group relative rounded-3xl border border-white/8 bg-white/4 backdrop-blur-xl p-6 md:p-8 transition-all duration-300 hover:border-lime-400/30 hover:shadow-[0_0_40px_-8px_rgba(166,255,60,0.2)] animate-[float_6s_ease-in-out_infinite]">
                            <div className="flex items-start justify-between">
                                <div>
                                    <p className="text-5xl md:text-6xl font-black text-lime-400">20+</p>
                                    <p className="text-gray-400 text-sm md:text-base mt-2">Products Available</p>
                                </div>
                                <div className="p-3 rounded-2xl bg-lime-400/10 border border-lime-400/20">
                                    <Package className="w-6 h-6 text-lime-400" />
                                </div>
                            </div>
                            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-linear-to-br from-lime-400/5 to-transparent pointer-events-none" />
                        </div>
                        <div className="flex-1 lg:flex-none group relative rounded-3xl border border-white/8 bg-white/2 backdrop-blur-xl p-6 md:p-8 transition-all duration-300 hover:border-white/20 hover:shadow-[0_0_40px_-8px_rgba(255,255,255,0.1)] animate-[float_6s_ease-in-out_infinite_1s]">
                            <div className="flex items-start justify-between">
                                <div>
                                    <p className="text-5xl md:text-6xl font-black text-white">Free</p>
                                    <p className="text-gray-500 text-sm md:text-base mt-2">Delivery on $99+</p>
                                </div>
                                <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                                    <ShoppingBag className="w-6 h-6 text-white/70" />
                                </div>
                            </div>
                            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-linear-to-br from-white/5 to-transparent pointer-events-none" />
                        </div>
                    </div>
                </div>
            </div>
            <section className="max-w-7xl mx-auto px-6">
                <div className="relative rounded-4xl border border-white/10 bg-[#0b0b0b] overflow-hidden px-8 md:px-16 py-14">
                    <div className="pointer-events-none absolute -top-40 -right-40 w-80 h-80 rounded-full bg-lime-500/5 blur-[100px]" />
                    <div className="pointer-events-none absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-white/2 blur-[80px]" />

                    <div className="relative z-10">
                        <div className="text-center mb-12">
                            <span className="inline-flex items-center gap-2 uppercase tracking-[3px] text-lime-400 font-medium text-xs mb-3">
                                <Star className="w-3.5 h-3.5" />
                                Why SkyMart
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-white">
                                Built for <span className="text-lime-400">You</span>
                            </h2>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {FEATURES.map((feature) => {
                                const Icon = feature.icon;
                                return (
                                    <div
                                        key={feature.title}
                                        className="group rounded-2xl border border-white/8 bg-white/4 backdrop-blur-xl p-6 text-center transition-all duration-300 hover:border-white/15 hover:bg-white/5"
                                    >
                                        <div className={`inline-flex p-3.5 rounded-xl bg-[#111] border border-white/10 mb-4 transition-all duration-300 group-hover:scale-110 group-hover:border-${feature.color.replace('text-', '')}/30`}>
                                            <Icon className={`w-6 h-6 ${feature.color}`} strokeWidth={1.6} />
                                        </div>
                                        <h3 className="text-white font-semibold text-base">{feature.title}</h3>
                                        <p className="text-gray-500 text-sm mt-1">{feature.desc}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-6">
                <div className="relative rounded-4xl border border-white/10 bg-linear-to-br from-[#0b0b0b] via-[#0f0f0f] to-[#0b0b0b] overflow-hidden px-8 md:px-16 py-14">
                    <div className="pointer-events-none absolute top-1/2 -translate-y-1/2 -left-20 w-60 h-60 rounded-full bg-lime-500/10 blur-[100px]" />
                    <div className="pointer-events-none absolute top-1/2 -translate-y-1/2 -right-20 w-60 h-60 rounded-full bg-amber-500/8 blur-[100px]" />

                    <div className="relative z-10 flex flex-col lg:flex-row items-center gap-10">
                        <div className="flex-1 space-y-5">
                            <span className="inline-flex items-center gap-2 uppercase tracking-[3px] text-lime-400 font-medium text-xs">
                                <Zap className="w-3.5 h-3.5" />
                                Limited Offer
                            </span>
                            <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
                                Flash Sale — <br />
                                <span className="text-transparent bg-clip-text bg-linear-to-r from-lime-400 to-amber-400">
                                    Up to 60% Off
                                </span>
                            </h2>
                            <p className="text-gray-400 text-base md:text-lg max-w-lg">
                                Grab the hottest deals before they're gone. Electronics, fashion, and more at unbeatable prices.
                            </p>
                            <div className="flex items-center gap-4">
                                <button
                                    onClick={() => link("/products")}
                                    className="inline-flex items-center gap-2 bg-lime-400 text-black font-semibold rounded-2xl px-7 py-3.5 text-sm hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 shadow-[0_0_30px_-6px_rgba(166,255,60,0.3)] hover:shadow-[0_0_40px_-4px_rgba(166,255,60,0.5)]"
                                >
                                    Shop the Sale
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                                <button className="text-gray-400 text-sm hover:text-white transition-colors">
                                    Ends soon →
                                </button>
                            </div>
                        </div>
                        <div className="flex-1 max-w-xs w-full">
                            <div className="grid grid-cols-2 gap-3">
                                {[
                                    { label: "Electronics", pct: "60%" },
                                    { label: "Fashion", pct: "50%" },
                                    { label: "Home", pct: "40%" },
                                    { label: "Accessories", pct: "55%" },
                                ].map((deal) => (
                                    <div
                                        key={deal.label}
                                        className="rounded-2xl border border-white/8 bg-white/4 backdrop-blur-xl p-5 text-center hover:border-lime-400/20 transition-all duration-300"
                                    >
                                        <p className="text-2xl md:text-3xl font-black text-lime-400">{deal.pct}</p>
                                        <p className="text-gray-400 text-xs mt-1">off {deal.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-6">
                <div className="relative rounded-4xl border border-white/10 bg-linear-to-r from-lime-500/10 via-lime-400/5 to-transparent overflow-hidden px-8 md:px-16 py-14 text-center">
                    <div className="pointer-events-none absolute -top-20 -left-20 w-80 h-80 rounded-full bg-lime-400/8 blur-[100px]" />
                    <div className="relative z-10 max-w-2xl mx-auto space-y-5">
                        <ShoppingBag className="w-10 h-10 text-lime-400 mx-auto" strokeWidth={1.5} />
                        <h2 className="text-3xl md:text-4xl font-bold text-white">
                            Ready to level up your <span className="text-lime-400">shopping</span> experience?
                        </h2>
                        <p className="text-gray-400 text-base">
                            Join thousands of happy customers and get access to exclusive deals, early drops, and会员 perks.
                        </p>
                        <button
                            onClick={() => link("/products")}
                            className="inline-flex items-center gap-2 bg-lime-400 text-black font-semibold rounded-2xl px-8 py-4 text-base hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 shadow-[0_0_30px_-6px_rgba(166,255,60,0.35)]"
                        >
                            Start Shopping
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </section>

            <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes fadeSlideUp {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .hero-fade-in {
          animation: fadeSlideUp 0.7s ease-out forwards;
        }
        .hero-fade-in-delay-1 {
          animation: fadeSlideUp 0.7s ease-out 0.15s forwards;
          opacity: 0;
        }
        .hero-fade-in-delay-2 {
          animation: fadeSlideUp 0.7s ease-out 0.3s forwards;
          opacity: 0;
        }
        .hero-fade-in-delay-3 {
          animation: fadeSlideUp 0.7s ease-out 0.45s forwards;
          opacity: 0;
        }
        .hero-fade-in-delay-4 {
          animation: fadeSlideUp 0.7s ease-out 0.6s forwards;
          opacity: 0;
        }
      `}</style>
        </div>
    );
};

export default HomePage;
