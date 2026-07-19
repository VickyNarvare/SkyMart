import { useState } from "react";
import { Menu, X, ShoppingCart, User, ChevronDown, LogOut } from "lucide-react";
import { NavLink, useNavigate } from "react-router";

const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Products", path: "/products" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const link = useNavigate();
  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="border-b border-white/6 bg-[#0b0b0b]/80 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={() => link("/")}
              aria-label="SkyMart home"
              className="flex items-center gap-2.5 group"
            >
              <div className="w-9 h-9 rounded-xl bg-linear-to-br from-lime-400 to-lime-500 flex items-center justify-center shadow-lg shadow-lime-500/25 group-hover:shadow-lime-500/40 transition-shadow duration-300">
                <span className="text-black font-black text-base tracking-tight">
                  S
                </span>
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                Sky<span className="text-lime-400">Mart</span>
              </span>
            </button>
            <ul className="hidden md:flex items-center gap-1">
              {NAV_LINKS.map((e) => (
                <NavLink key={e.path} to={e.path}>
                  {() => (
                    <button
                      className={
                        "px-4 py-2 text-sm font-medium rounded-xl transition-all duration-300 text-gray-400 hover:bg-white/5 hover:text-white"
                      }
                    >
                      {e.label}
                    </button>
                  )}
                </NavLink>
              ))}
            </ul>
            <div className="hidden md:flex items-center gap-3">
              <button className="flex items-center gap-2 px-3 py-2 rounded-xl border border-white/10 hover:bg-white/5 hover:border-white/20 transition-all duration-300 group">
                <div className="w-8 h-8 rounded-lg bg-linear-to-br from-lime-400 to-lime-500 flex items-center justify-center shadow-sm shadow-lime-500/20 group-hover:shadow-lime-500/30 transition-shadow">
                  <span className="text-black font-black text-sm">V</span>
                </div>
                <div className="text-left">
                  <p className="text-white text-sm font-medium leading-tight">
                    Vicky
                  </p>
                </div>
              </button>
              <button
                aria-label="Shopping cart"
                className="relative p-2.5 rounded-xl text-gray-400 hover:text-lime-400 hover:bg-white/5 transition-all duration-300 group"
              >
                <ShoppingCart className="w-5 h-5" strokeWidth={1.8} />
                <span className="absolute -top-0.5 -right-0.5 flex items-center justify-center min-w-[1.1rem] min-h-[1.1rem] text-[10px] font-bold text-black bg-lime-400 rounded-full leading-none px-1 group-hover:scale-110 transition-transform duration-300">
                  3
                </span>
              </button>

              <button
                aria-label="Shopping cart"
                className="relative p-2.5 rounded-xl text-gray-400 hover:text-lime-400 hover:bg-white/5 transition-all duration-300 group"
              >
                <LogOut className="w-5 h-5" strokeWidth={1.8} />
              </button>
            </div>
            <button
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((o) => !o)}
              className="md:hidden p-2 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-300"
            >
              {menuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>3
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ease-in-out border-b border-white/6 bg-[#0b0b0b]/95 backdrop-blur-xl ${
          menuOpen ? "max-h-125 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
          {/* {NAV_LINKS.map((label) => {
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
          })} */}

          <div className="mt-3 pt-3 border-t border-white/10 flex flex-col gap-3">
            <button className="flex items-center gap-3 px-4 py-3 rounded-xl border border-white/10 hover:bg-white/5 transition-all duration-300">
              <div className="w-9 h-9 rounded-xl bg-linear-to-br from-lime-400 to-lime-500 flex items-center justify-center shadow-sm shadow-lime-500/20">
                <span className="text-black font-black text-sm">V</span>
              </div>
              <div className="text-left">
                <p className="text-white text-sm font-medium leading-tight">
                  Vicky
                </p>
                <p className="text-gray-500 text-xs leading-tight">
                  View Profile
                </p>
              </div>
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
    </nav>
  );
};

export default Navbar;
