import React from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Award, Eye, Heart } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-[#F8F4EC] text-[#2A2520] font-sans pb-24">
      {/* Hero Header */}
      <section className="bg-[#EFE8DA] py-16 border-b border-[#E2D9C7] text-[#2A2520]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#B89968]">The Nivana Philosophy</span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight">Wellness, Engineered.</h1>
          <p className="text-sm sm:text-base text-[#2A2520]/75 max-w-xl mx-auto leading-relaxed font-sans">
            Nivana is a physician-supervised peptide and longevity wellness practice — pharmaceutical-grade therapies, personalized protocols, delivered with the quiet of a spa and the precision of a clinic.
          </p>
        </div>
      </section>

      {/* Main Philosophy & Quote */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-12">
        <div className="space-y-6">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2A2520]">
            The science of feeling like yourself again.
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-[#2A2520]/80 leading-relaxed font-sans">
            Modern medicine is exceptional at managing acute illness, but often fails at optimizing everyday health. We live in a gap: between not being sick, and feeling truly well. Nivana was built to bridge this gap. By utilizing targeted cellular messengers — therapeutic peptides — we help your body restore the pathways that slow down with stress, injury, and age.
          </p>
          <p className="text-xs sm:text-sm md:text-base text-[#2A2520]/80 leading-relaxed font-sans">
            We believe that medical treatments should not feel cold or administrative. They should be delivered with the same quiet care, personalization, and respect you would expect from a luxury wellness spa — but backed by rigorous clinical diagnostic reviews and pharmaceutical purity.
          </p>
        </div>

        {/* Medical Director Quote Block */}
        <div className="bg-[#EFE8DA]/45 border border-[#E2D9C7] rounded-3xl p-8 italic font-serif text-base sm:text-lg text-[#2A2520]/90 leading-relaxed relative">
          <div className="absolute -top-3 left-8 bg-[#B89968] text-[#F8F4EC] px-3 py-0.5 rounded text-[9px] uppercase font-bold tracking-wider font-sans">
            Director&apos;s Note
          </div>
          &ldquo;Peptides are not magic; they are biochemically precise signals. Our role is to ensure we read your biological baselines correctly and prescribe the exact compound at the safest dose. We measure success not in hyping quick transformations, but in the slow, sustained restoration of cellular function.&rdquo;
          <span className="block not-italic font-sans text-xs font-bold text-[#2A2520] mt-4">
            Dr. Evelyn Vance, MD · Medical Director, Nivana Wellness Spa
          </span>
        </div>
      </section>

      {/* Pillars */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#B89968]">Nivana Pillars</span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2A2520] mt-2">Clinical Integrity &amp; Transparency</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Pillar 1 */}
          <div className="bg-[#EFE8DA]/20 border border-[#E2D9C7] rounded-2xl p-6 space-y-4">
            <div className="h-10 w-10 rounded-full bg-[#B89968]/15 text-[#8E7449] flex items-center justify-center">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#2A2520]">Pharmacy Transparency</h3>
            <p className="text-xs text-[#2A2520]/75 leading-relaxed font-sans">
              We never conceal our pharmacies or buy gray-market materials. Every peptide we prescribe is compounded in FDA-licensed 503A or 503B compounding facilities operating under strict sterile standards.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="bg-[#EFE8DA]/20 border border-[#E2D9C7] rounded-2xl p-6 space-y-4">
            <div className="h-10 w-10 rounded-full bg-[#B89968]/15 text-[#8E7449] flex items-center justify-center">
              <Award className="h-5 w-5" />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#2A2520]">Physician Verification</h3>
            <p className="text-xs text-[#2A2520]/75 leading-relaxed font-sans">
              We do not use automatic approvals or algorithm-only prescriptions. Every intake history and blood biomarker panel is reviewed by a board-certified U.S. physician.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="bg-[#EFE8DA]/20 border border-[#E2D9C7] rounded-2xl p-6 space-y-4">
            <div className="h-10 w-10 rounded-full bg-[#B89968]/15 text-[#8E7449] flex items-center justify-center">
              <Eye className="h-5 w-5" />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#2A2520]">Goal-Based Protocols</h3>
            <p className="text-xs text-[#2A2520]/75 leading-relaxed font-sans">
              We focus on outcomes, not transaction volumes. Our protocols are structured around continuous care titration and progress tracking, with direct messaging access.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 text-center space-y-6">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-wide">
          Ready to experience modern medicine, ancient calm?
        </h2>
        <p className="text-xs sm:text-sm text-[#2A2520]/70 max-w-md mx-auto leading-relaxed font-sans">
          Complete our 5-minute health history screening to connect with our medical staff.
        </p>
        <div className="pt-4">
          <Link 
            href="/intake"
            className="inline-flex items-center gap-1.5 px-8 py-3.5 bg-[#B89968] hover:bg-[#8E7449] text-[#F8F4EC] rounded-full text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm"
          >
            Start Your Consultation <ArrowRight className="h-4.5 w-4.5" />
          </Link>
        </div>
      </section>

    </div>
  );
}
