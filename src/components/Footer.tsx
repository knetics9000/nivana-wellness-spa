import React from "react";
import Link from "next/link";
import { ShieldCheck, HeartPulse, Award, Mail, Phone, Clock } from "lucide-react";
import { CATEGORIES } from "@/data/products";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#2A2520] text-[#F8F4EC] pt-16 pb-12 border-t border-[#E2D9C7]/20 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 border-b border-[#F8F4EC]/10 pb-12 mb-12">
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="h-9 w-9 rounded-full bg-[#B89968] flex items-center justify-center text-[#F8F4EC] font-serif font-semibold text-lg">
                N
              </div>
              <div>
                <span className="font-serif text-xl font-bold tracking-wider text-[#F8F4EC] block">NIVANA</span>
                <span className="text-[9px] uppercase tracking-widest text-[#B89968] block -mt-1">Wellness Spa</span>
              </div>
            </Link>
            <p className="text-sm text-[#F8F4EC]/70 max-w-sm mb-6 leading-relaxed">
              Nivana is a physician-supervised peptide and longevity wellness practice. We deliver pharmaceutical-grade therapies and personalized protocols with the comfort of a spa and the precision of a clinic.
            </p>
            <div className="flex gap-4">
              {/* Trust Badge placeholders */}
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#F8F4EC]/5 border border-[#F8F4EC]/10 text-xs text-[#F8F4EC]/80">
                <ShieldCheck className="h-4 w-4 text-[#B89968]" />
                <span>LegitScript Certified</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#F8F4EC]/5 border border-[#F8F4EC]/10 text-xs text-[#F8F4EC]/80">
                <Award className="h-4 w-4 text-[#B89968]" />
                <span>503A Pharmacy Partner</span>
              </div>
            </div>
          </div>

          {/* Column 2: Sitemap - Treatments */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#B89968] font-bold mb-4">Treatments</h4>
            <ul className="space-y-2.5 text-sm">
              {CATEGORIES.slice(0, 5).map((cat) => (
                <li key={cat.id}>
                  <Link href={`/categories/${cat.slug}`} className="text-[#F8F4EC]/75 hover:text-[#B89968] transition-colors">
                    {cat.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/treatments" className="text-[#B89968] hover:underline transition-colors font-medium">
                  View All Treatments →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Sitemap - Company */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#B89968] font-bold mb-4">Practice</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/how-it-works" className="text-[#F8F4EC]/75 hover:text-[#B89968] transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-[#F8F4EC]/75 hover:text-[#B89968] transition-colors">
                  About Nivana
                </Link>
              </li>
              <li>
                <Link href="/knowledge" className="text-[#F8F4EC]/75 hover:text-[#B89968] transition-colors">
                  Knowledge Base
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-[#F8F4EC]/75 hover:text-[#B89968] transition-colors">
                  Blog / Journal
                </Link>
              </li>
              <li>
                <Link href="/safety-information" className="text-[#F8F4EC]/75 hover:text-[#B89968] transition-colors">
                  Safety Information
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-[#F8F4EC]/75 hover:text-[#B89968] transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Hours */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#B89968] font-bold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-[#F8F4EC]/75">
              <li className="flex items-start gap-2.5">
                <Mail className="h-4 w-4 text-[#B89968] shrink-0 mt-0.5" />
                <a href="mailto:hello@nivanawellness.com" className="hover:text-[#B89968] transition-colors">
                  hello@nivanawellness.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="h-4 w-4 text-[#B89968] shrink-0 mt-0.5" />
                <span>(800) 555-NIVA // TODO: phone</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="h-4 w-4 text-[#B89968] shrink-0 mt-0.5" />
                <div>
                  <span className="block">Mon–Fri, 9am–6pm ET</span>
                  <span className="block text-[11px] text-[#F8F4EC]/50">Physician review: 24/7 online</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal & Medical Disclaimers */}
        <div className="border-b border-[#F8F4EC]/10 pb-8 mb-8 text-xs text-[#F8F4EC]/65 leading-relaxed space-y-4">
          <p className="italic">
            The statements on this website have not been evaluated by the U.S. Food and Drug Administration. Nivana&apos;s compounded medications are prescribed by licensed physicians and dispensed by licensed compounding pharmacies under federal regulation. Compounded medications are not FDA-reviewed for safety or efficacy in the same manner as commercially manufactured drugs. Nivana products are not intended to diagnose, treat, cure, or prevent any disease. Individual results vary.
          </p>
          <p>
            Compounded prescription formulations are prepared individually for patients based on a physician&apos;s assessment of medical necessity. Any medication has risks and should only be started under clinical supervision. The purchase of a clinical assessment does not guarantee a prescription will be written.
          </p>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[#F8F4EC]/50">
          <span>&copy; {currentYear} Nivana Wellness Practice LLC. All rights reserved.</span>
          <div className="flex gap-4">
            <Link href="/safety-information" className="hover:text-[#F8F4EC] transition-colors">
              Safety Information
            </Link>
            <span className="text-[#F8F4EC]/20">|</span>
            <Link href="/about" className="hover:text-[#F8F4EC] transition-colors">
              Privacy Policy
            </Link>
            <span className="text-[#F8F4EC]/20">|</span>
            <Link href="/about" className="hover:text-[#F8F4EC] transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
