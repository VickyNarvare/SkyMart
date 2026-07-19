import React from "react";
import { ArrowRight, ShoppingBag, Sparkles, Package } from "lucide-react";
import { useNavigate, useParams } from "react-router";

const HomePage = () => {
    const link = useNavigate();
    return (
        <div className="relative max-w-7xl mx-auto mt-8 rounded-4xl border border-white/15 bg-[#0b0b0b] overflow-hidden px-6 md:px-12 lg:px-16 py-16">
            {/* Grid Background */}
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
                        GOOD MORNING 👋
                    </div>
                    <h1 className="hero-fade-in-delay-1 font-black text-4xl sm:text-5xl lg:text-7xl leading-tight text-white">
                        Welcome back, <span className="text-lime-400">Vicky!</span>
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
                                <p className="text-5xl md:text-6xl font-black text-lime-400">
                                    20+
                                </p>
                                <p className="text-gray-400 text-sm md:text-base mt-2">
                                    Products Available
                                </p>
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
                                <p className="text-5xl md:text-6xl font-black text-white">
                                    Free
                                </p>
                                <p className="text-gray-500 text-sm md:text-base mt-2">
                                    Delivery on ₹999+
                                </p>
                            </div>
                            <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                                <ShoppingBag className="w-6 h-6 text-white/70" />
                            </div>
                        </div>
                        <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-linear-to-br from-white/5 to-transparent pointer-events-none" />
                    </div>
                </div>
            </div>
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
