"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { CATEGORIES } from "@/data/products";

// Official Crescent V Logo from Brand Guidelines
export function ValaraLogo({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} style={{ display: "block" }}>
      <defs>
        <radialGradient id="orbGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#F4D4C2"/>
          <stop offset="60%" stopColor="#E8B29A"/>
          <stop offset="100%" stopColor="#70534B"/>
        </radialGradient>
      </defs>
      {/* Outer breathing rings */}
      <circle cx="100" cy="100" r="92" fill="none" stroke="#E8B29A" strokeWidth="0.5" opacity="0.4"/>
      <circle cx="100" cy="100" r="78" fill="none" stroke="#8FA89B" strokeWidth="0.5" opacity="0.3"/>
      {/* Left crescent of the V */}
      <path d="M 50 50 Q 70 110, 100 140 Q 90 100, 65 60 Z" fill="#E8B29A" opacity="0.95"/>
      {/* Right crescent of the V */}
      <path d="M 150 50 Q 130 110, 100 140 Q 110 100, 135 60 Z" fill="#8FA89B" opacity="0.95"/>
      {/* Central converging orb */}
      <circle cx="100" cy="140" r="9" fill="url(#orbGrad)"/>
      {/* Apex highlight */}
      <circle cx="100" cy="140" r="3" fill="#F7F2EC" opacity="0.6"/>
    </svg>
  );
}

export default function Navigation() {
  const pathname = usePathname();
  const [showAnnounce, setShowAnnounce] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveMenu(null);
  }, [pathname]);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const isHome = pathname === "/";
  const isNavbarDark = isHome && !scrolled;

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Announcement Bar */}
      {showAnnounce && (
        <div className="bg-[#E8B29A] text-[#0B0A09] text-xs py-2.5 px-4 flex justify-between items-center transition-all duration-300 border-b border-white/10">
          <div className="flex items-center justify-center gap-2 w-full text-center">
            <span className="font-semibold uppercase tracking-wider flex items-center gap-1 font-sans text-xs">
              <Sparkles className="h-3 w-3 inline text-[#0B0A09]/80" /> PRECISION COMPOUND SOURCING:
            </span>
            <span className="font-sans font-medium text-xs text-[#0B0A09]/90">Clinical-grade compounded peptides & cellular nutrition, shipped cold-packed.</span>
          </div>
          <button 
            onClick={() => setShowAnnounce(false)}
            className="text-[#0B0A09]/60 hover:text-[#0B0A09] transition-colors"
            aria-label="Close announcement"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      )}

      {/* Main Navbar */}
      <nav className={`w-full transition-all duration-300 ${
        scrolled 
          ? "glass-panel-dark py-3 text-[#F7F2EC] shadow-lg border-b border-white/10" 
          : "bg-transparent border-b border-white/10 py-5 text-white"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Logo with VALARA Rx display weights */}
          <Link href="/" className="flex items-center gap-3 group">
            <ValaraLogo className="h-9 w-9 transition-transform duration-500 group-hover:rotate-[360deg]" />
            <div>
              <span className="font-sans text-xl font-extralight tracking-[0.18em] block leading-none text-white">
                VALARA<span className="font-semibold text-xs tracking-normal align-super ml-1 text-[#E8B29A]">R<span className="text-[#8FA89B]">x</span></span>
              </span>
              <span className="text-[8px] uppercase tracking-[0.4em] block mt-1 font-sans text-white/60">Precision · Restoration · Longevity</span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            {/* Treatments Megamenu Trigger */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveMenu("treatments")}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button className={`flex items-center gap-1 text-sm font-semibold tracking-wide py-2 transition-colors focus:outline-none text-white/80 hover:text-white ${
                pathname.startsWith("/treatments") || pathname.startsWith("/categories") 
                  ? "text-white border-b-2 border-[#E8B29A]" 
                  : ""
              }`}>
                Treatments <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${activeMenu === "treatments" ? "rotate-180" : ""}`} />
              </button>

              {/* Mega Menu */}
              {activeMenu === "treatments" && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full w-[800px] glass-panel-dark rounded-2xl shadow-xl p-8 grid grid-cols-4 gap-6 animate-fade-up z-50 text-white">
                  <div className="col-span-3 grid grid-cols-3 gap-6 border-r border-white/10 pr-6">
                    <div className="col-span-3">
                      <h4 className="text-xs uppercase tracking-widest text-white/40 font-bold mb-3 font-sans">Therapies by Category</h4>
                    </div>
                    {CATEGORIES.map((cat) => (
                      <Link 
                        key={cat.id} 
                        href={`/categories/${cat.slug}`}
                        className="group p-3 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5"
                      >
                        <span className="block font-serif text-sm font-semibold text-white group-hover:text-[#E8B29A] transition-colors">
                          {cat.name}
                        </span>
                        <span className="block text-xs text-white/60 mt-1 line-clamp-2">
                          {cat.description}
                        </span>
                      </Link>
                    ))}
                  </div>

                  <div className="col-span-1 flex flex-col justify-between p-2">
                    <div>
                      <h4 className="text-xs uppercase tracking-widest text-white/40 font-bold mb-3 font-sans">Quick Links</h4>
                      <Link 
                        href="/treatments" 
                        className="block font-serif text-sm font-semibold text-white/95 hover:text-[#E8B29A] py-2 transition-colors border-b border-white/10"
                      >
                        All Treatments
                      </Link>
                      <Link 
                        href="/safety-information" 
                        className="block font-serif text-sm font-semibold text-white/95 hover:text-[#E8B29A] py-2 transition-colors border-b border-white/10"
                      >
                        Safety Hub
                      </Link>
                    </div>
                    
                    <div className="bg-white/5 rounded-xl p-4 mt-4 border border-white/10">
                      <span className="flex items-center gap-1 text-[10px] font-semibold uppercase text-white mb-1 font-sans">
                        <ShieldCheck className="h-3.5 w-3.5 text-[#8FA89B]" /> Safe & Certified
                      </span>
                      <p className="text-[11px] text-white/60 leading-relaxed font-sans">
                        All treatments require a board-certified physician consult before dispensing.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link 
              href="/knowledge" 
              className={`text-sm font-semibold tracking-wide transition-colors text-white/80 hover:text-white ${
                pathname.startsWith("/knowledge") 
                  ? "text-white border-b-2 border-[#E8B29A]" 
                  : ""
              }`}
            >
              Knowledge
            </Link>

            <Link 
              href="/how-it-works" 
              className={`text-sm font-semibold tracking-wide transition-colors text-white/80 hover:text-white ${
                pathname === "/how-it-works" 
                  ? "text-white border-b-2 border-[#E8B29A]" 
                  : ""
              }`}
            >
              How It Works
            </Link>

            <Link 
              href="/about" 
              className={`text-sm font-semibold tracking-wide transition-colors text-white/80 hover:text-white ${
                pathname === "/about" 
                  ? "text-white border-b-2 border-[#E8B29A]" 
                  : ""
              }`}
            >
              About
            </Link>

            <Link 
              href="/contact" 
              className={`text-sm font-semibold tracking-wide transition-colors text-white/80 hover:text-white ${
                pathname === "/contact" 
                  ? "text-white border-b-2 border-[#E8B29A]" 
                  : ""
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Desktop Right Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <Link 
              href="/intake" 
              className="px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-sm flex items-center gap-1 bg-[#E8B29A] text-[#0B0A09] hover:bg-white hover:text-[#0B0A09]"
            >
              Verify Eligibility <ArrowRight className="h-3 w-3" />
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="p-2 focus:outline-none transition-colors text-white hover:text-[#E8B29A]"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[110px] glass-panel-dark z-40 p-6 overflow-y-auto lg:hidden animate-fade-up text-white">
          <div className="flex flex-col gap-6">
            <div className="border-b border-white/10 pb-4">
              <span className="text-xs uppercase tracking-widest text-white/40 font-bold block mb-4 font-sans">
                Treatments By Category
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {CATEGORIES.map((cat) => (
                  <Link
                    key={cat.id}
                    href={`/categories/${cat.slug}`}
                    className="p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 font-serif font-semibold text-sm text-[#F7F2EC] hover:text-[#E8B29A] transition-colors"
                  >
                    {cat.name}
                  </Link>
                ))}
                <Link
                  href="/treatments"
                  className="p-3 bg-[#E8B29A]/10 border border-[#E8B29A]/30 rounded-xl font-serif font-semibold text-sm text-[#E8B29A] text-center"
                >
                  All Treatments
                </Link>
              </div>
            </div>

            <div className="flex flex-col gap-4 text-base font-serif font-medium text-white/90">
              <Link href="/knowledge" className="py-2 border-b border-white/10 hover:text-[#E8B29A] transition-colors">
                Knowledge Base
              </Link>
              <Link href="/how-it-works" className="py-2 border-b border-white/10 hover:text-[#E8B29A] transition-colors">
                How It Works
              </Link>
              <Link href="/about" className="py-2 border-b border-white/10 hover:text-[#E8B29A] transition-colors">
                About Valara Rx
              </Link>
              <Link href="/contact" className="py-2 border-b border-white/10 hover:text-[#E8B29A] transition-colors">
                Contact
              </Link>
              <Link href="/safety-information" className="py-2 border-b border-white/10 hover:text-[#E8B29A] transition-colors">
                Safety Hub
              </Link>
            </div>

            <Link
              href="/intake"
              className="w-full text-center py-4 rounded-full text-sm font-semibold uppercase tracking-wider bg-[#E8B29A] text-[#0B0A09] hover:bg-white hover:text-[#0B0A09] transition-colors shadow-sm mt-4 flex items-center justify-center gap-1"
            >
              Verify Eligibility <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
