import React from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Award, Eye } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen pb-24 font-sans text-white relative z-0">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full -z-20 bg-[#0B0A09]">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-15"
        >
          <source src="/videos/woman_serum_ritual.mp4" type="video/mp4" />
        </video>
      </div>
      {/* Soft color overlays */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#0B0A09]/95 via-[#0B0A09]/90 to-[#E8B29A]/10 -z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0B0A09]/40 to-[#0B0A09] -z-10"></div>

      {/* Hero Header */}
      <section className="relative py-20 border-b border-white/10 overflow-hidden z-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 relative z-10 animate-fade-up">
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#E8B29A] bg-[#E8B29A]/10 border border-white/10 px-3 py-1 rounded-full inline-block font-semibold">THE VALARA PHILOSOPHY</span>
          <h1 className="font-serif text-4xl sm:text-5xl font-light tracking-tight text-white">Wellness, Engineered.</h1>
          <p className="text-sm sm:text-base text-white/80 max-w-xl mx-auto leading-relaxed font-sans font-light">
            Valara is a physician-supervised peptide and longevity wellness practice — pharmaceutical-grade therapies, personalized protocols, delivered with the quiet of a spa and the precision of a clinic.
          </p>
        </div>
      </section>

      {/* Main Philosophy & Quote */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-12 animate-fade-up">
        <div className="space-y-6">
          <h2 className="font-serif text-3xl font-light text-white">
            The science of feeling like yourself again.
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-white/85 leading-relaxed font-sans font-light">
            Modern medicine is exceptional at managing acute illness, but often fails at optimizing everyday health. We live in a gap: between not being sick, and feeling truly well. Valara was built to bridge this gap. By utilizing targeted cellular messengers — therapeutic peptides — we help your body restore the pathways that slow down with stress, injury, and age.
          </p>
          <p className="text-xs sm:text-sm md:text-base text-white/85 leading-relaxed font-sans font-light">
            We believe that medical treatments should not feel cold or administrative. They should be delivered with the same quiet care, personalization, and respect you would expect from a luxury wellness spa — but backed by rigorous clinical diagnostic reviews and pharmaceutical purity.
          </p>
        </div>

        {/* Medical Director Quote Block */}
        <div className="glass-panel-dark rounded-3xl p-8 italic font-serif text-base sm:text-lg text-white/90 leading-relaxed relative shadow-lg border border-white/10 glow-peach-glow">
          <div className="absolute -top-3 left-8 bg-[#E8B29A] text-[#0B0A09] px-3 py-1 rounded-full text-[9px] uppercase font-bold tracking-widest font-sans">
            Director&apos;s Note
          </div>
          <div className="pt-2 font-light">
            &ldquo;Peptides are not magic; they are biochemically precise signals. Our role is to ensure we read your biological baselines correctly and prescribe the exact compound at the safest dose. We measure success not in hyping quick transformations, but in the slow, sustained restoration of cellular function.&rdquo;
          </div>
          <span className="block not-italic font-sans text-xs font-bold text-white mt-4 font-mono">
            Dr. Evelyn Vance, MD · Medical Director, Valara Wellness Spa
          </span>
        </div>
      </section>

      {/* Pillars */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="text-center mb-16">
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#E8B29A]">VALARA PILLARS</span>
          <h2 className="font-sans text-3xl font-light text-white mt-2">Clinical Integrity &amp; Sourcing</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Pillar 1 */}
          <div className="glass-panel-dark rounded-3xl p-6 space-y-4 shadow-md hover-lift border border-white/10 glow-sage-glow">
            <div className="h-10 w-10 rounded-full bg-white/5 text-[#8FA89B] flex items-center justify-center border border-white/10">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <h3 className="font-serif text-lg font-semibold text-white">Pharmacy Transparency</h3>
            <p className="text-xs text-white/70 leading-relaxed font-sans font-light">
              We never conceal our pharmacies or buy gray-market materials. Every peptide prescribed is compounded in FDA-licensed 503A or 503B compounding facilities operating under strict sterile standards.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="glass-panel-dark rounded-3xl p-6 space-y-4 shadow-md hover-lift border border-white/10 glow-peach-glow">
            <div className="h-10 w-10 rounded-full bg-white/5 text-[#E8B29A] flex items-center justify-center border border-white/10">
              <Award className="h-5 w-5" />
            </div>
            <h3 className="font-serif text-lg font-semibold text-white">Physician Verification</h3>
            <p className="text-xs text-white/70 leading-relaxed font-sans font-light">
              We do not use automatic approvals or algorithm-only prescriptions. Every intake history and blood biomarker panel is reviewed by a board-certified U.S. physician.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="glass-panel-dark rounded-3xl p-6 space-y-4 shadow-md hover-lift border border-white/10 glow-sage-glow">
            <div className="h-10 w-10 rounded-full bg-white/5 text-[#8FA89B] flex items-center justify-center border border-white/10">
              <Eye className="h-5 w-5" />
            </div>
            <h3 className="font-serif text-lg font-semibold text-white">Goal-Based Protocols</h3>
            <p className="text-xs text-white/70 leading-relaxed font-sans font-light">
              We focus on outcomes, not transaction volumes. Our protocols are structured around continuous care titration and progress tracking, with direct messaging access.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 text-center space-y-6">
        <h2 className="font-sans text-3xl font-light tracking-wide text-white">
          Ready to experience clinical precision, quiet calm?
        </h2>
        <p className="text-xs sm:text-sm text-white/60 max-w-sm mx-auto leading-relaxed font-sans font-light">
          Complete our 5-minute health history screening to connect with our medical staff.
        </p>
        <div className="pt-4">
          <Link 
            href="/intake"
            className="inline-flex items-center gap-1.5 px-8 py-3.5 bg-[#E8B29A] text-[#0B0A09] hover:bg-white hover:text-[#0B0A09] transition-all duration-300 rounded-full text-xs font-bold uppercase tracking-widest shadow-md font-mono"
          >
            Start Your Consultation <ArrowRight className="h-4.5 w-4.5" />
          </Link>
        </div>
      </section>

    </div>
  );
}
