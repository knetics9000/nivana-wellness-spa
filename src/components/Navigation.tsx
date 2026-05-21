"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { CATEGORIES } from "@/data/products";

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

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "shadow-md" : ""}`}>
      {/* Announcement Bar */}
      {showAnnounce && (
        <div className="bg-[#B89968] text-[#F8F4EC] text-xs py-2 px-4 flex justify-between items-center transition-all duration-300">
          <div className="flex items-center justify-center gap-2 w-full text-center">
            <span className="font-semibold uppercase tracking-wider flex items-center gap-1 font-sans">
              <Sparkles className="h-3 w-3 inline" /> Wellness, engineered:
            </span>
            <span>Receive physician-supervised peptide protocols shipped directly to your door.</span>
          </div>
          <button 
            onClick={() => setShowAnnounce(false)}
            className="text-[#F8F4EC]/80 hover:text-[#F8F4EC] transition-colors"
            aria-label="Close announcement"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      )}

      {/* Main Navbar */}
      <nav className={`w-full border-b transition-all duration-300 ${
        scrolled 
          ? "bg-[#F8F4EC]/95 backdrop-blur-md border-[#E2D9C7]/50 py-3" 
          : "bg-[#F8F4EC] border-[#E2D9C7]/20 py-5"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="h-9 w-9 rounded-full bg-[#B89968] flex items-center justify-center text-[#F8F4EC] font-serif font-semibold text-lg shadow-sm group-hover:bg-[#8E7449] transition-colors">
              N
            </div>
            <div>
              <span className="font-serif text-xl font-bold tracking-wider text-[#2A2520] block">NIVANA</span>
              <span className="text-[9px] uppercase tracking-widest text-[#B89968] block -mt-1 font-sans">Wellness Spa</span>
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
              <button className={`flex items-center gap-1 text-sm font-medium tracking-wide text-[#2A2520]/80 hover:text-[#B89968] py-2 transition-colors focus:outline-none ${
                pathname.startsWith("/treatments") || pathname.startsWith("/categories") ? "text-[#B89968] font-semibold" : ""
              }`}>
                Treatments <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${activeMenu === "treatments" ? "rotate-180" : ""}`} />
              </button>

              {/* Mega Menu */}
              {activeMenu === "treatments" && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full w-[800px] bg-[#F8F4EC] border border-[#E2D9C7] rounded-2xl shadow-xl p-8 grid grid-cols-4 gap-6 animate-fade-up z-50">
                  <div className="col-span-3 grid grid-cols-3 gap-6 border-r border-[#E2D9C7]/40 pr-6">
                    <div className="col-span-3">
                      <h4 className="text-xs uppercase tracking-widest text-[#B89968] font-bold mb-3 font-sans">Therapies by Category</h4>
                    </div>
                    {CATEGORIES.map((cat) => (
                      <Link 
                        key={cat.id} 
                        href={`/categories/${cat.slug}`}
                        className="group p-3 rounded-xl hover:bg-[#EFE8DA]/50 transition-colors"
                      >
                        <span className="block font-serif text-sm font-semibold text-[#2A2520] group-hover:text-[#B89968] transition-colors">
                          {cat.name}
                        </span>
                        <span className="block text-xs text-[#2A2520]/60 mt-1 line-clamp-2">
                          {cat.description}
                        </span>
                      </Link>
                    ))}
                  </div>

                  <div className="col-span-1 flex flex-col justify-between p-2">
                    <div>
                      <h4 className="text-xs uppercase tracking-widest text-[#B89968] font-bold mb-3 font-sans">Quick Links</h4>
                      <Link 
                        href="/treatments" 
                        className="block font-serif text-sm font-semibold text-[#2A2520] hover:text-[#B89968] py-2 transition-colors border-b border-[#E2D9C7]/30"
                      >
                        All Treatments
                      </Link>
                      <Link 
                        href="/safety-information" 
                        className="block font-serif text-sm font-semibold text-[#2A2520] hover:text-[#B89968] py-2 transition-colors border-b border-[#E2D9C7]/30"
                      >
                        Safety Hub
                      </Link>
                    </div>
                    
                    <div className="bg-[#EFE8DA] rounded-xl p-4 mt-4 border border-[#E2D9C7]/40">
                      <span className="flex items-center gap-1 text-[10px] font-semibold uppercase text-[#B89968] mb-1 font-sans">
                        <ShieldCheck className="h-3 w-3" /> Safe & Certified
                      </span>
                      <p className="text-[11px] text-[#2A2520]/70 leading-relaxed font-sans">
                        All treatments require a board-certified physician consult before dispensing.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link 
              href="/knowledge" 
              className={`text-sm font-medium tracking-wide text-[#2A2520]/80 hover:text-[#B89968] transition-colors ${
                pathname.startsWith("/knowledge") ? "text-[#B89968] font-semibold" : ""
              }`}
            >
              Knowledge
            </Link>

            <Link 
              href="/how-it-works" 
              className={`text-sm font-medium tracking-wide text-[#2A2520]/80 hover:text-[#B89968] transition-colors ${
                pathname === "/how-it-works" ? "text-[#B89968] font-semibold" : ""
              }`}
            >
              How It Works
            </Link>

            <Link 
              href="/about" 
              className={`text-sm font-medium tracking-wide text-[#2A2520]/80 hover:text-[#B89968] transition-colors ${
                pathname === "/about" ? "text-[#B89968] font-semibold" : ""
              }`}
            >
              About
            </Link>

            <Link 
              href="/contact" 
              className={`text-sm font-medium tracking-wide text-[#2A2520]/80 hover:text-[#B89968] transition-colors ${
                pathname === "/contact" ? "text-[#B89968] font-semibold" : ""
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Desktop Right Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <Link 
              href="/intake" 
              className="px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#B89968] text-[#F8F4EC] hover:bg-[#8E7449] transition-all duration-300 shadow-sm hover:shadow-md flex items-center gap-1"
            >
              Start Free Consultation <ArrowRight className="h-3 w-3" />
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="text-[#2A2520] hover:text-[#B89968] p-2 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[110px] bg-[#F8F4EC] z-40 border-t border-[#E2D9C7] p-6 overflow-y-auto lg:hidden animate-fade-up">
          <div className="flex flex-col gap-6">
            <div className="border-b border-[#E2D9C7] pb-4">
              <span className="text-xs uppercase tracking-widest text-[#B89968] font-bold block mb-4 font-sans">
                Treatments By Category
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {CATEGORIES.map((cat) => (
                  <Link
                    key={cat.id}
                    href={`/categories/${cat.slug}`}
                    className="p-3 bg-[#EFE8DA]/40 rounded-xl hover:bg-[#EFE8DA]/70 font-serif font-semibold text-sm text-[#2A2520]"
                  >
                    {cat.name}
                  </Link>
                ))}
                <Link
                  href="/treatments"
                  className="p-3 bg-[#B89968]/10 border border-[#B89968]/20 rounded-xl font-serif font-semibold text-sm text-[#8E7449]"
                >
                  All Treatments
                </Link>
              </div>
            </div>

            <div className="flex flex-col gap-4 text-base font-serif font-medium">
              <Link href="/knowledge" className="py-2 border-b border-[#E2D9C7]/40 hover:text-[#B89968]">
                Knowledge Base
              </Link>
              <Link href="/how-it-works" className="py-2 border-b border-[#E2D9C7]/40 hover:text-[#B89968]">
                How It Works
              </Link>
              <Link href="/about" className="py-2 border-b border-[#E2D9C7]/40 hover:text-[#B89968]">
                About Nivana
              </Link>
              <Link href="/contact" className="py-2 border-b border-[#E2D9C7]/40 hover:text-[#B89968]">
                Contact
              </Link>
              <Link href="/safety-information" className="py-2 border-b border-[#E2D9C7]/40 hover:text-[#B89968]">
                Safety Hub
              </Link>
            </div>

            <Link
              href="/intake"
              className="w-full text-center py-4 rounded-full text-sm font-semibold uppercase tracking-wider bg-[#B89968] text-[#F8F4EC] hover:bg-[#8E7449] transition-colors shadow-sm mt-4 flex items-center justify-center gap-1"
            >
              Start Free Consultation <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
