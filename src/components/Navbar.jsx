import { useState } from "react";
import { Menu, X, ShoppingCart, User, ChevronDown } from "lucide-react";

const NAV_LINKS = ["Home", "Products", "Categories", "About"];

export default function SkyMartNavbar() {
  const [activeLink, setActiveLink] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className="fixed top-0 left-0 right-0 z-50 py-3"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="rounded-2xl border border-white/10 bg-[#0b0b0b]/90 backdrop-blur-xl px-6 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
          <div className="flex items-center justify-between">
            {/* Brand */}
            <a href="#" aria-label="SkyMart home" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-lime-400 to-lime-500 flex items-center justify-center shadow-lg shadow-lime-500/25 group-hover:shadow-lime-500/40 transition-shadow duration-300">
                <span className="text-black font-black text-base tracking-tight">S</span>
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                Sky<span className="text-lime-400">Mart</span>
              </span>
            </a>

            {/* Desktop Links */}
            <ul className="hidden md:flex items-center gap-1">
              {NAV_LINKS.map((label) => {
                const isActive = activeLink === label;
                return (
                  <li key={label}>
                    <button
                      onClick={() => setActiveLink(label)}
                      className={`px-4 py-2 text-sm font-medium rounded-xl transition-all duration-300 ${
                        isActive
                          ? "text-lime-400 bg-lime-400/10"
                          : "text-gray-400 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      {label}
                    </button>
                  </li>
                );
              })}
            </ul>

            {/* Desktop Right */}
            <div className="hidden md:flex items-center gap-3">
              {/* Cart Button */}
              <button
                aria-label="Shopping cart"
                className="relative p-2.5 rounded-xl text-gray-400 hover:text-lime-400 hover:bg-white/5 transition-all duration-300 group"
              >
                <ShoppingCart className="w-5 h-5" strokeWidth={1.8} />
                <span className="absolute -top-0.5 -right-0.5 flex items-center justify-center min-w-[1.1rem] min-h-[1.1rem] text-[10px] font-bold text-black bg-lime-400 rounded-full leading-none px-1 group-hover:scale-110 transition-transform duration-300">
                  3
                </span>
              </button>

              {/* Login Button */}
              <button className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/10 text-gray-300 text-sm font-medium hover:bg-white/5 hover:text-white hover:border-white/20 transition-all duration-300">
                <User className="w-4 h-4" />
                Login
              </button>

              {/* Get Started */}
              <button className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-lime-400 text-black text-sm font-semibold hover:bg-lime-300 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-[0_0_20px_-4px_rgba(166,255,60,0.3)] hover:shadow-[0_0_30px_-4px_rgba(166,255,60,0.5)]">
                Get Started
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>

            {/* Mobile Hamburger */}
            <button
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((o) => !o)}
              className="md:hidden p-2 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-300"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ease-in-out ${
          menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 pt-2">
          <div className="rounded-2xl border border-white/10 bg-[#0b0b0b]/95 backdrop-blur-xl px-4 py-4 shadow-[0_8px_32px_rgba(0,0,0,0.4)] flex flex-col gap-1">
            {NAV_LINKS.map((label) => {
              const isActive = activeLink === label;
              return (
                <button
                  key={label}
                  onClick={() => {
                    setActiveLink(label);
                    setMenuOpen(false);
                  }}
                  className={`px-4 py-3 rounded-xl text-sm font-medium text-left transition-all duration-300 ${
                    isActive
                      ? "bg-lime-400/10 text-lime-400"
                      : "text-gray-400 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {label}
                </button>
              );
            })}

            <div className="pt-3 border-t border-white/10 flex flex-col gap-3">
              <button className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-white/10 text-gray-300 text-sm font-medium hover:bg-white/5 hover:text-white transition-all duration-300">
                <User className="w-4 h-4" />
                Login
              </button>
              <button className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-lime-400 text-black text-sm font-semibold hover:bg-lime-300 transition-all duration-300 shadow-[0_0_20px_-4px_rgba(166,255,60,0.3)]">
                Get Started
              </button>
              <button
                aria-label="Shopping cart"
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-white/10 text-gray-400 text-sm font-medium hover:bg-white/5 hover:text-white transition-all duration-300"
              >
                <ShoppingCart className="w-4 h-4" />
                Cart (3)
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
