import React from "react";
import Link from "next/link";
import { ShieldCheck, Award, Mail, Phone, Clock } from "lucide-react";
import { CATEGORIES } from "@/data/products";
import { ValaraLogo } from "./Navigation";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="glass-panel-dark text-[#F7F2EC]/90 pt-16 pb-12 relative z-10 font-sans border-t border-white/10 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 border-b border-white/10 pb-12 mb-12">
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <ValaraLogo className="h-9 w-9 transition-transform duration-500 group-hover:rotate-[360deg]" />
              <div>
                <span className="font-sans text-xl font-extralight tracking-[0.18em] block leading-none text-white">
                  VALARA<span className="font-semibold text-xs tracking-normal align-super ml-1 text-[#E8B29A]">R<span className="text-[#8FA89B]">x</span></span>
                </span>
                <span className="text-[8px] uppercase tracking-[0.4em] block mt-1 font-sans text-white/60">Precision · Restoration · Longevity</span>
              </div>
            </Link>
            <p className="text-sm text-white/80 max-w-sm leading-relaxed">
              VALARA Rx is a physician-supervised peptide restoration and cellular nutrition practice. We deliver pharmaceutical-grade therapies and customized biological protocols with luxury care and clinical precision.
            </p>
            <div className="flex gap-4">
              {/* Trust Badges */}
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs text-white/90 shadow-sm">
                <ShieldCheck className="h-4 w-4 text-[#8FA89B]" />
                <span>LegitScript Certified</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs text-white/90 shadow-sm">
                <Award className="h-4 w-4 text-[#E8B29A]" />
                <span>503A Pharmacy Partner</span>
              </div>
            </div>
          </div>

          {/* Column 2: Sitemap - Treatments */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-white/40 font-bold mb-4 font-sans">Treatments</h4>
            <ul className="space-y-2.5 text-sm">
              {CATEGORIES.slice(0, 5).map((cat) => (
                <li key={cat.id}>
                  <Link href={`/categories/${cat.slug}`} className="text-white/70 hover:text-[#E8B29A] transition-colors">
                    {cat.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/treatments" className="text-white hover:text-[#E8B29A] transition-colors font-medium underline underline-offset-4 decoration-[#E8B29A] decoration-2">
                  View All Treatments →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Sitemap - Company */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-white/40 font-bold mb-4 font-sans">Practice</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/how-it-works" className="text-white/70 hover:text-[#E8B29A] transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/70 hover:text-[#E8B29A] transition-colors">
                  About VALARA Rx
                </Link>
              </li>
              <li>
                <Link href="/knowledge" className="text-white/70 hover:text-[#E8B29A] transition-colors">
                  Knowledge Base
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-white/70 hover:text-[#E8B29A] transition-colors">
                  Blog / Journal
                </Link>
              </li>
              <li>
                <Link href="/safety-information" className="text-white/70 hover:text-[#E8B29A] transition-colors">
                  Safety Hub
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-white/70 hover:text-[#E8B29A] transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Hours */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-white/40 font-bold mb-4 font-sans">Contact</h4>
            <ul className="space-y-3 text-sm text-white/75">
              <li className="flex items-start gap-2.5">
                <Mail className="h-4 w-4 text-white/50 shrink-0 mt-0.5" />
                <a href="mailto:hello@valararx.com" className="hover:text-[#E8B29A] transition-colors">
                  hello@valararx.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="h-4 w-4 text-white/50 shrink-0 mt-0.5" />
                <span>(800) 555-VALA</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="h-4 w-4 text-white/50 shrink-0 mt-0.5" />
                <div>
                  <span className="block">Mon–Fri, 9am–6pm ET</span>
                  <span className="block text-[11px] text-white/40">Physician review: 24/7 online</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal & Medical Disclaimers */}
        <div className="border-b border-white/10 pb-8 mb-8 text-xs text-white/60 leading-relaxed space-y-4 font-sans">
          <p className="italic">
            The statements on this website have not been evaluated by the U.S. Food and Drug Administration. VALARA Rx&apos;s compounded medications are prescribed by licensed physicians and dispensed by licensed compounding pharmacies under federal regulation. Compounded medications are not FDA-reviewed for safety or efficacy in the same manner as commercially manufactured drugs. VALARA Rx products are not intended to diagnose, treat, cure, or prevent any disease. Individual results vary.
          </p>
          <p>
            Compounded prescription formulations are prepared individually for patients based on a physician&apos;s assessment of medical necessity. Any medication has risks and should only be started under clinical supervision. The purchase of a clinical assessment does not guarantee a prescription will be written.
          </p>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/40 font-sans">
          <span>&copy; {currentYear} Valara Rx Wellness Practice LLC. All rights reserved.</span>
          <div className="flex gap-4">
            <Link href="/safety-information" className="hover:text-[#E8B29A] transition-colors">
              Safety Information
            </Link>
            <span className="text-white/10">|</span>
            <Link href="/about" className="hover:text-[#E8B29A] transition-colors">
              Privacy Policy
            </Link>
            <span className="text-white/10">|</span>
            <Link href="/about" className="hover:text-[#E8B29A] transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
