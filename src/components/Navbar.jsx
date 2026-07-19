import { useState } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";

const NAV_LINKS = ["Product", "About", "Support", "Pricing"];

export default function SkyMartNavbar() {
  const [activeLink, setActiveLink] = useState("Product");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className="fixed top-0 left-0 right-0 z-50 py-4 bg-white/90 backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Brand */}
          <a href="#" aria-label="SkyMart home" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-600 to-sky-500 flex items-center justify-center">
              <span className="text-white font-bold text-sm">S</span>
            </div>
            <span className="text-xl font-bold text-gray-900 tracking-tight">
              SkyMart
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
                    className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                      isActive
                        ? "text-gray-900 bg-gray-100"
                        : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"
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
            <button
              aria-label="Shopping cart"
              className="relative p-2 rounded-lg text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-all duration-300"
            >
              <ShoppingCart className="w-5 h-5" strokeWidth={1.8} />
              <span className="absolute -top-0.5 -right-0.5 flex items-center justify-center min-w-[1rem] min-h-[1rem] text-[10px] font-bold text-white bg-indigo-600 rounded-full leading-none px-1">
                3
              </span>
            </button>

            <button className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition-all duration-300">
              Login
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-all duration-300"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ease-in-out ${
          menuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pt-4 pb-6 flex flex-col gap-1">
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
                    ? "bg-gray-100 text-gray-900"
                    : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                }`}
              >
                {label}
              </button>
            );
          })}

          <div className="mt-3 flex items-center gap-3">
            <button className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition-all duration-300">
              Login
            </button>
            <button
              aria-label="Shopping cart"
              className="relative p-3 rounded-xl text-gray-500 hover:bg-gray-100 transition-all duration-300"
            >
              <ShoppingCart className="w-5 h-5" strokeWidth={1.8} />
              <span className="absolute top-1 right-1 flex items-center justify-center min-w-[1rem] min-h-[1rem] text-[10px] font-bold text-white bg-indigo-600 rounded-full leading-none px-1">
                3
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
