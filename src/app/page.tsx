import React from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  Activity, 
  Sparkles,
  ChevronRight,
  ChevronDown,
  FileText,
  UserCheck,
  TrendingUp,
  RotateCw
} from "lucide-react";
import { CATEGORIES, PRODUCTS } from "@/data/products";
import { ValaraLogo } from "@/components/Navigation";

// Static mock reviews for the premium clinical experience
const REVIEWS = [
  {
    name: "Dr. Elizabeth S.",
    role: "Client & Functional Medicine Specialist",
    text: "As a physician, I was skeptical of online wellness clinics. VALARA Rx is different. The medical intake is thorough, the formulations are pharmacy-grade, and the dosing guidelines are conservative and precise.",
    rating: 5,
    tag: "NAD+ Protocol"
  },
  {
    name: "Marcus K.",
    role: "Executive & Amateur Cyclist",
    text: "After using the BPC-157 (Recovery 01) protocol for my shoulder tear, my mobility returned in weeks, not months. The shipping is pristine, cold-packed, and clearly labeled.",
    rating: 5,
    tag: "Recovery Protocol"
  },
  {
    name: "Sarah M.",
    role: "Health Coordinator",
    text: "The metabolic support through SEMA-X has completely changed my relationship with food cravings. The constant 'food noise' is gone. The doctor actually read my bloodwork and adjusted my titration safely.",
    rating: 5,
    tag: "Metabolic Protocol"
  }
];

export default function HomePage() {
  // Highlight popular peptides on the landing page
  const featuredPeptides = PRODUCTS.filter(p => 
    ["semaglutide", "bpc-157", "nad-plus", "testosterone-cypionate"].includes(p.id)
  );

  return (
    <div className="text-[#F7F2EC] font-sans selection:bg-[#E8B29A]/40 selection:text-[#0B0A09]">
      
      {/* 1. HERO SECTION (Dark Moody Brand Identity Loop) */}
      <section className="relative min-h-[95vh] flex items-center pt-24 pb-20 overflow-hidden border-b border-white/10 z-0">
        {/* Background Dark Video */}
        <div className="absolute inset-0 w-full h-full -z-20 bg-[#0B0A09]">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-60"
          >
            <source src="/videos/valara_reveal_dark.mp4" type="video/mp4" />
          </video>
        </div>
        
        {/* Dark Charcoal / Warm Amber Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0A09]/95 via-[#0B0A09]/40 to-[#0B0A09]/95 -z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0A09]/90 via-transparent to-[#0B0A09]/70 -z-10"></div>

        {/* Ambient warm radial glow */}
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-[#E8B29A]/15 blur-3xl -z-10 animate-pulse-slow"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 flex flex-col justify-between min-h-[75vh] pt-12">
          
          {/* Main Hero Header and Info */}
          <div className="text-center max-w-4xl mx-auto space-y-8 animate-fade-up">
            
            {/* The Icon Lockup from Brand Guidelines */}
            <div className="flex flex-col items-center justify-center space-y-4">
              <ValaraLogo className="h-28 w-28 drop-shadow-2xl animate-pulse-slow" />
            </div>

            {/* VALARA Rx Wordmark with structured spans to support stagger animation */}
            <h1 className="font-sans text-6xl sm:text-8xl lg:text-9xl font-extralight tracking-[0.18em] text-white leading-none inline-flex flex-wrap justify-center select-none">
              <span className="letter-stagger" style={{ animationDelay: "100ms" }}>V</span>
              <span className="letter-stagger" style={{ animationDelay: "200ms" }}>A</span>
              <span className="letter-stagger" style={{ animationDelay: "300ms" }}>L</span>
              <span className="letter-stagger" style={{ animationDelay: "400ms" }}>A</span>
              <span className="letter-stagger" style={{ animationDelay: "500ms" }}>R</span>
              <span className="letter-stagger" style={{ animationDelay: "600ms" }}>A</span>
              <span className="letter-stagger font-semibold text-3xl sm:text-4xl lg:text-5xl tracking-normal align-super ml-2 text-[#E8B29A]" style={{ animationDelay: "800ms" }}>
                R<span className="text-[#8FA89B]">x</span>
              </span>
            </h1>
            
            {/* Tagline Rule */}
            <div className="flex items-center justify-center gap-6 py-2">
              <div className="w-16 h-[0.5px] bg-[#E8B29A]/40"></div>
              <p className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.45em] text-[#E8B29A] font-medium">
                Precision · Restoration · Longevity
              </p>
              <div className="w-16 h-[0.5px] bg-[#8FA89B]/40"></div>
            </div>

            <p className="text-sm sm:text-base md:text-lg text-white/80 max-w-xl mx-auto leading-relaxed font-sans font-light">
              A new science of becoming. Compounded peptide restoration and cellular nutrition designed to build space, clarity, and biological recovery into your daily longevity routines.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link 
                href="/intake" 
                className="px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest bg-[#E8B29A] text-[#0B0A09] hover:bg-white hover:text-[#0B0A09] transition-all duration-300 shadow-lg flex items-center justify-center gap-2 group font-mono"
              >
                Verify Eligibility
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="#catalog" 
                className="px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest bg-transparent text-white border border-white/20 hover:bg-white/10 transition-all text-center font-mono"
              >
                Explore Treatments
              </Link>
            </div>
          </div>

          {/* Bottom Row elements matching the brand seal */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6 pt-12 border-t border-white/10 mt-16 animate-fade-up">
            <div className="flex items-center gap-2 text-white/50 text-[10px] font-mono tracking-widest uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-[#8FA89B]"></span> two energy streams converging
            </div>
            
            <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-full text-[10px] text-white/70 font-mono tracking-wider uppercase">
              <ShieldCheck className="h-4 w-4 text-[#8FA89B]" /> 256-Bit SSL HIPAA Secure Clinic
            </div>
          </div>

        </div>
      </section>

      {/* 2. TRUST STRIP (Frosted Glass Row) */}
      <section className="relative z-10 py-10 border-b border-white/10 overflow-hidden">
        {/* Inherits global background video. Uses a soft frosted border */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center justify-center p-2">
              <span className="text-xl font-serif font-light text-white">4.9 ★ · 10k+ Patients</span>
              <span className="text-[9px] uppercase tracking-widest text-white/60 font-bold mt-1.5 font-sans">Patient Trust</span>
            </div>
            <div className="flex flex-col items-center justify-center p-2 border-l border-white/10">
              <span className="text-xl font-serif font-light text-white">Board-Certified</span>
              <span className="text-[9px] uppercase tracking-widest text-white/60 font-bold mt-1.5 font-sans">U.S. Medical Doctors</span>
            </div>
            <div className="flex flex-col items-center justify-center p-2 border-l border-white/10">
              <span className="text-xl font-serif font-light text-white">Cold-Packed Sourcing</span>
              <span className="text-[9px] uppercase tracking-widest text-white/60 font-bold mt-1.5 font-sans">Discreet & Monitored</span>
            </div>
            <div className="flex flex-col items-center justify-center p-2 border-l border-white/10">
              <span className="text-xl font-serif font-light text-white">HSA / FSA Accepted</span>
              <span className="text-[9px] uppercase tracking-widest text-white/60 font-bold mt-1.5 font-sans">Itemized Receipts</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. HOW IT WORKS SECTION (Frosted Glass Bento Cards over Peptide Skin Video) */}
      <section className="py-24 relative overflow-hidden border-b border-white/10 z-0">
        {/* Local Video background */}
        <div className="absolute inset-0 w-full h-full -z-20 bg-[#0B0A09]">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-35"
          >
            <source src="/videos/peptide_skin.mp4" type="video/mp4" />
          </video>
        </div>
        {/* Soft Peach & Clay Mask Overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#0B0A09]/95 via-[#0B0A09]/90 to-[#E8B29A]/15 -z-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-[10px] font-mono uppercase tracking-widest text-white/60 block mb-2">CLINICAL TIMELINE</span>
            <h2 className="font-sans text-4xl font-light text-white tracking-tight">
              Three steps. <span className="font-serif italic font-light text-[#8FA89B]">No waiting rooms.</span>
            </h2>
            <p className="text-sm text-white/80 mt-3 font-sans max-w-xl mx-auto">
              We have eliminated the friction of physical clinics without sacrificing clinical integrity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 Card */}
            <div className="relative group overflow-hidden rounded-3xl border border-white/10 min-h-[460px] flex flex-col justify-between p-8 bg-black/40 shadow-lg backdrop-blur-md">
              {/* Background Image inside card */}
              <img
                src="/images/hero/step1_intake.png"
                alt="Online Intake"
                className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-102 -z-20"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0A09]/95 via-[#0B0A09]/45 to-transparent -z-10"></div>
              
              {/* Card Contents */}
              <div className="z-10 flex flex-col justify-between h-full">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#E8B29A] block mb-6">01 / CONSULT</span>
                  <h3 className="font-serif text-4xl font-light text-white mb-3">Intake</h3>
                  <div className="h-[1px] bg-white/20 w-1/2 my-4"></div>
                </div>

                <div>
                  <h4 className="font-serif text-lg text-white font-medium mb-2">Share health history</h4>
                  <p className="text-xs sm:text-sm text-white/85 leading-relaxed font-sans font-light">
                    Complete a secure medical intake outlining your health history, symptoms, and longevity goals. Fully private and completed on your schedule.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2 Card */}
            <div className="relative group overflow-hidden rounded-3xl border border-white/10 min-h-[460px] flex flex-col justify-between p-8 bg-black/40 shadow-lg backdrop-blur-md">
              {/* Background Image inside card */}
              <img
                src="/images/hero/step2_clinical.png"
                alt="Physician Evaluation"
                className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-102 -z-20"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0A09]/95 via-[#0B0A09]/45 to-transparent -z-10"></div>
              
              {/* Card Contents */}
              <div className="z-10 flex flex-col justify-between h-full">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#E8B29A] block mb-6">02 / CLINICAL</span>
                  <h3 className="font-serif text-4xl font-light text-white mb-3">Evaluation</h3>
                  <div className="h-[1px] bg-white/20 w-1/2 my-4"></div>
                </div>

                <div>
                  <h4 className="font-serif text-lg text-white font-medium mb-2">Design custom protocol</h4>
                  <p className="text-xs sm:text-sm text-white/85 leading-relaxed font-sans font-light">
                    A board-certified physician reviews your bio-markers and history within 24 hours to design a tailored dosage protocol or advise safely.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 Card */}
            <div className="relative group overflow-hidden rounded-3xl border border-white/10 min-h-[460px] flex flex-col justify-between p-8 bg-black/40 shadow-lg backdrop-blur-md">
              {/* Background Image inside card */}
              <img
                src="/images/hero/step3_dispense.png"
                alt="Discreet Delivery"
                className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-102 -z-20"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0A09]/95 via-[#0B0A09]/45 to-transparent -z-10"></div>
              
              {/* Card Contents */}
              <div className="z-10 flex flex-col justify-between h-full">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#E8B29A] block mb-6">03 / DISPENSE</span>
                  <h3 className="font-serif text-4xl font-light text-white mb-3">Dispense</h3>
                  <div className="h-[1px] bg-white/20 w-1/2 my-4"></div>
                </div>

                <div>
                  <h4 className="font-serif text-lg text-white font-medium mb-2">Discreet delivery</h4>
                  <p className="text-xs sm:text-sm text-white/85 leading-relaxed font-sans font-light">
                    If prescribed, your personalized compound is formulated at our sterile compounding pharmacy partners and shipped directly, cold-packed and tracked.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <Link 
              href="/how-it-works"
              className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest font-bold text-white hover:text-[#E8B29A] transition-colors group underline underline-offset-4 decoration-[#E8B29A] decoration-2"
            >
              Read the Full Telehealth Flow <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. PRODUCT CATEGORIES (Video Wallpaper backdrop) */}
      <span id="catalog" className="block -mt-24 pt-24"></span>
      <section className="py-24 relative overflow-hidden border-b border-white/10 z-0">
        {/* Local Video Background */}
        <div className="absolute inset-0 w-full h-full -z-20 bg-[#0B0A09]">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-25"
          >
            <source src="/videos/collection_pedestals.mp4" type="video/mp4" />
          </video>
        </div>
        {/* Soft Sage/Bone Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0A09]/95 via-[#0B0A09]/90 to-[#8FA89B]/15 -z-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-[10px] font-mono uppercase tracking-widest text-white/60 block mb-2">FIND YOUR PROTOCOL</span>
            <h2 className="font-sans text-4xl font-light text-white tracking-tight">
              Built around <span className="font-serif italic font-light text-[#8FA89B]">how you want to feel.</span>
            </h2>
            <p className="text-sm text-white/80 mt-3 font-sans">
              Explore our clinical categories to understand the targeted pathways of peptide bioregulation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.id}
                href={`/categories/${cat.slug}`}
                className="group relative p-6 glass-panel-dark rounded-3xl hover:border-[#E8B29A]/50 transition-all duration-300 flex flex-col justify-between min-h-[220px] hover-lift glow-peach"
              >
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-white/40 block mb-4">PROTOCOL</span>
                  <h3 className="font-serif text-lg font-semibold text-white group-hover:text-[#E8B29A] transition-colors mb-2">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-white/70 leading-relaxed line-clamp-3 font-sans font-light">
                    {cat.description}
                  </p>
                </div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-white/80 mt-6 flex items-center gap-1 group-hover:underline">
                  Explore category <ChevronRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FEATURED TREATMENTS (Glassmorphism Cards over Continuous Global Motion) */}
      <section className="py-24 relative overflow-hidden border-b border-white/10 z-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-white/60 block mb-2">THERAPEUTIC CATALOG</span>
              <h2 className="font-sans text-4xl font-light text-white tracking-tight">
                Therapies that work <span className="font-serif italic font-light text-[#E8B29A]">with your body.</span>
              </h2>
              <p className="text-sm text-white/70 mt-3 max-w-xl font-sans font-light">
                VALARA Rx protocols use clinical-grade peptides to amplify natural signals for healing, cellular repair, and hormone balance.
              </p>
            </div>
            <Link
              href="/treatments"
              className="mt-6 md:mt-0 px-6 py-3 bg-[#E8B29A] text-[#0B0A09] hover:bg-white hover:text-[#0B0A09] transition-all rounded-full text-xs font-bold uppercase tracking-widest shadow-md font-mono"
            >
              Browse Master Catalog
            </Link>
          </div>

          {/* Featured Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredPeptides.map((product) => {
              const hasImage = ["semaglutide", "bpc-157", "nad-plus", "testosterone-cypionate"].includes(product.id);
              return (
                <div 
                  key={product.id}
                  className="glass-panel-dark rounded-3xl flex flex-col justify-between min-h-[440px] relative overflow-hidden group hover:border-[#E8B29A]/50 transition-all duration-300 hover-lift"
                >
                  {/* Product Image Header */}
                  <div className="h-44 w-full relative overflow-hidden bg-white/5 border-b border-white/10 flex items-center justify-center p-4">
                    {hasImage ? (
                      <img 
                        src={`/images/products/${product.id}.png`}
                        alt={product.name}
                        className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-102"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-tr from-white/5 to-white/10">
                        <Activity className="h-8 w-8 text-white/20" />
                      </div>
                    )}
                    {/* Floating category badge */}
                    <div className="absolute top-3 left-3">
                      <span className="text-[9px] font-bold uppercase tracking-wider text-[#E8B29A] bg-[#E8B29A]/10 border border-[#E8B29A]/20 px-2.5 py-1 rounded-full font-sans">
                        {product.category === "weight-loss" ? "Metabolic" : product.category === "longevity" ? "Anti-Aging" : product.category === "recovery" ? "Recovery" : "Hormonal"}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 flex-grow flex flex-col justify-between">
                    <div>
                      <h3 className="font-serif text-xl font-semibold text-white group-hover:text-[#E8B29A] transition-colors mb-1.5">
                        {product.name}
                      </h3>
                      <p className="text-xs text-[#E8B29A] italic mb-3 font-serif">
                        &ldquo;{product.tagline}&rdquo;
                      </p>
                      <p className="text-xs text-white/80 leading-relaxed line-clamp-3 mb-4 font-sans font-light">
                        {product.description}
                      </p>
                    </div>

                    <div className="space-y-3 mt-auto pt-4 border-t border-white/10">
                      <div className="flex justify-between text-[11px] text-white/60 font-sans">
                        <span>Clinical protocol:</span>
                        <span className="font-medium text-white/80 text-right max-w-[130px] truncate">{product.administration}</span>
                      </div>
                      <Link 
                        href={`/treatments/${product.slug}`}
                        className="w-full block text-center py-2.5 rounded-full bg-white/5 border border-white/10 text-white hover:bg-[#E8B29A] hover:text-[#0B0A09] text-xs font-semibold uppercase tracking-widest transition-all duration-300 font-mono"
                      >
                        View Protocol Details
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. THE VALARA STANDARD (Values & Principles over Motion backdrop) */}
      <section className="py-24 relative overflow-hidden border-b border-white/10 z-0">
        {/* Local Video Background */}
        <div className="absolute inset-0 w-full h-full -z-20 bg-[#0B0A09]">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-20"
          >
            <source src="/videos/peptide_skin.mp4" type="video/mp4" />
          </video>
        </div>
        {/* Soft Peach/Bone Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0A09]/95 via-[#0B0A09]/90 to-[#E8B29A]/10 -z-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-[10px] font-mono uppercase tracking-widest text-white/60 block mb-2">THE VALARA STANDARD</span>
            <h2 className="font-sans text-4xl font-light text-white tracking-tight">
              Clinical safety <span className="font-serif italic font-light text-[#E8B29A]">first.</span>
            </h2>
            <p className="text-sm text-white/80 mt-3 font-sans font-light">
              Compounded medicine requires absolute control. We do not compromise on sterility, source, or monitoring.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="glass-panel-dark p-6 rounded-3xl space-y-3">
              <div className="h-10 w-10 rounded-full bg-[#E8B29A]/10 border border-[#E8B29A]/20 flex items-center justify-center text-[#E8B29A] mb-4">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-white">503A Sterile Pharmacy</h3>
              <p className="text-xs text-white/80 leading-relaxed font-sans font-light">
                Every syringe and vial is compounded in strict compliance with state boards and USP &lt;797&gt; clean-room protocols.
              </p>
            </div>

            <div className="glass-panel-dark p-6 rounded-3xl space-y-3">
              <div className="h-10 w-10 rounded-full bg-[#8FA89B]/10 border border-[#8FA89B]/20 flex items-center justify-center text-[#8FA89B] mb-4">
                <FileText className="h-5 w-5" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-white">U.S. Licensed Doctors</h3>
              <p className="text-xs text-white/80 leading-relaxed font-sans font-light">
                No automatic AI prescriptions. Every intake file is evaluated individually by a U.S. board-certified physician.
              </p>
            </div>

            <div className="glass-panel-dark p-6 rounded-3xl space-y-3">
              <div className="h-10 w-10 rounded-full bg-[#E8B29A]/10 border border-[#E8B29A]/20 flex items-center justify-center text-[#E8B29A] mb-4">
                <UserCheck className="h-5 w-5" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-white">Ongoing Titration</h3>
              <p className="text-xs text-white/80 leading-relaxed font-sans font-light">
                As your bio-markers shift, your prescribing physician adjusts your dosing schedules dynamically.
              </p>
            </div>

            <div className="glass-panel-dark p-6 rounded-3xl space-y-3">
              <div className="h-10 w-10 rounded-full bg-[#8FA89B]/10 border border-[#8FA89B]/20 flex items-center justify-center text-[#8FA89B] mb-4">
                <TrendingUp className="h-5 w-5" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-white">HSA/FSA Receipts</h3>
              <p className="text-xs text-white/80 leading-relaxed font-sans font-light">
                Access itemized digital receipts containing pharmacy NPI codes to file secure reimbursement claims.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. REVIEWS & CLINICAL TESTIMONIALS */}
      <section className="py-24 relative overflow-hidden border-b border-white/10 z-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-[10px] font-mono uppercase tracking-widest text-white/60 block mb-2">PATIENT VOICES</span>
            <h2 className="font-sans text-4xl font-light text-white tracking-tight">
              Real results, <span className="font-serif italic font-light text-[#E8B29A]">clinical integrity.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {REVIEWS.map((review, i) => (
              <div 
                key={i}
                className="glass-panel-dark p-8 rounded-3xl flex flex-col justify-between min-h-[300px] hover:border-white/20 transition-all duration-300"
              >
                <div>
                  <div className="flex gap-1 text-[#E8B29A] mb-4">
                    {Array.from({ length: review.rating }).map((_, idx) => (
                      <span key={idx}>★</span>
                    ))}
                  </div>
                  <p className="text-sm text-white/85 leading-relaxed mb-6 font-sans italic font-light">
                    &ldquo;{review.text}&rdquo;
                  </p>
                </div>
                <div className="border-t border-white/10 pt-4">
                  <span className="block font-serif text-base font-semibold text-white">{review.name}</span>
                  <span className="block text-[11px] text-white/50 font-sans">{review.role}</span>
                  <span className="inline-block mt-2 text-[9px] uppercase tracking-wider font-bold bg-[#E8B29A]/10 border border-[#E8B29A]/20 px-2 py-0.5 rounded-full text-[#E8B29A] font-sans">
                    {review.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FAQ ACCORDION (Translucent glass details) */}
      <section className="py-24 relative overflow-hidden border-b border-white/10 z-0">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[10px] font-mono uppercase tracking-widest text-white/60 block mb-2">QUESTIONS & ANSWERS</span>
            <h2 className="font-sans text-4xl font-light text-white tracking-tight">
              Common <span className="font-serif italic font-light text-[#8FA89B]">inquiries</span>
            </h2>
          </div>

          <div className="space-y-4">
            <details className="group border-b border-white/10 pb-4 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex justify-between items-center cursor-pointer py-3 list-none">
                <span className="font-serif text-base sm:text-lg font-semibold text-white hover:text-[#E8B29A] transition-colors">
                  Do I need insurance?
                </span>
                <span className="transition group-open:-rotate-180">
                  <ChevronDown className="h-5 w-5 text-white/40" />
                </span>
              </summary>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed pl-1 pt-1 font-sans font-light">
                No. VALARA Rx does not require or bill insurance. Pricing is transparent and flat for each protocol. Many treatments are HSA/FSA eligible, and we provide detailed receipts on request.
              </p>
            </details>

            <details className="group border-b border-white/10 pb-4 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex justify-between items-center cursor-pointer py-3 list-none">
                <span className="font-serif text-base sm:text-lg font-semibold text-white hover:text-[#E8B29A] transition-colors">
                  Is this legal?
                </span>
                <span className="transition group-open:-rotate-180">
                  <ChevronDown className="h-5 w-5 text-white/40" />
                </span>
              </summary>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed pl-1 pt-1 font-sans font-light">
                Yes. All VALARA Rx protocols are prescribed by licensed U.S. physicians and dispensed by licensed compounding pharmacies operating under strict 503A/503B state and federal regulations. Compounded medications are prepared for specific patient needs and are not FDA-approved in the same manner as standard retail drugs.
              </p>
            </details>

            <details className="group border-b border-white/10 pb-4 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex justify-between items-center cursor-pointer py-3 list-none">
                <span className="font-serif text-base sm:text-lg font-semibold text-white hover:text-[#E8B29A] transition-colors">
                  Where do the peptides come from?
                </span>
                <span className="transition group-open:-rotate-180">
                  <ChevronDown className="h-5 w-5 text-white/40" />
                </span>
              </summary>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed pl-1 pt-1 font-sans font-light">
                Every peptide is sourced from FDA-licensed, state-board certified sterile compounding pharmacies in the United States operating under USP &lt;797&gt; standards. This ensures that the compound identity, sterility, and dosing match clinical requirements.
              </p>
            </details>

            <details className="group border-b border-white/10 pb-4 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex justify-between items-center cursor-pointer py-3 list-none">
                <span className="font-serif text-base sm:text-lg font-semibold text-white hover:text-[#E8B29A] transition-colors">
                  Are peptides safe?
                </span>
                <span className="transition group-open:-rotate-180">
                  <ChevronDown className="h-5 w-5 text-white/40" />
                </span>
              </summary>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed pl-1 pt-1 font-sans font-light">
                The therapeutic peptides in our catalog have years of clinical and research data. Because we compound in FDA-licensed partner pharmacies under physician supervision, we maintain absolute dosage and purity compliance. Every product page contains a dedicated safety section to detail contraindications.
              </p>
            </details>

            <details className="group border-b border-white/10 pb-4 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex justify-between items-center cursor-pointer py-3 list-none">
                <span className="font-serif text-base sm:text-lg font-semibold text-white hover:text-[#E8B29A] transition-colors">
                  Are these the same as research peptides sold online?
                </span>
                <span className="transition group-open:-rotate-180">
                  <ChevronDown className="h-5 w-5 text-white/40" />
                </span>
              </summary>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed pl-1 pt-1 font-sans font-light">
                No. Peptides labeled &ldquo;for research use only&rdquo; sold online are not legal for human administration and do not undergo certified sterile testing. VALARA Rx only prescribes human-grade peptides compounded in accredited U.S. pharmacies, dispensed specifically to your name under doctor supervision.
              </p>
            </details>
          </div>

          <div className="text-center mt-16">
            <Link
              href="/faq"
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-white hover:underline underline-offset-4 decoration-[#E8B29A] decoration-2"
            >
              See the Master FAQ List <ChevronRight className="h-4.5 w-4.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 9. JOURNAL TEASER */}
      <section className="py-24 relative overflow-hidden border-b border-white/10 z-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-white/60 block mb-2">VALARA JOURNAL</span>
              <h2 className="font-sans text-4xl font-light text-white tracking-tight mb-6">
                Know what you are <span className="font-serif italic font-light text-[#E8B29A]">putting in your body.</span>
              </h2>
              <p className="text-sm sm:text-base text-white/80 leading-relaxed mb-6 font-sans font-light">
                Our knowledge base is the same library our care team reads. Mechanisms, protocols, safety profiles, and the peer-reviewed science — written clearly for adults who want to understand the cellular mechanisms.
              </p>
              <Link
                href="/knowledge"
                className="inline-flex items-center gap-1.5 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest bg-[#E8B29A] text-[#0B0A09] hover:bg-white hover:text-[#0B0A09] transition-all duration-300 shadow-md font-mono"
              >
                Browse the Knowledge Base <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="glass-panel-dark p-8 rounded-3xl space-y-6">
              <span className="text-[9px] font-bold uppercase tracking-wider text-[#E8B29A] bg-[#E8B29A]/10 border border-[#E8B29A]/20 px-2.5 py-1 rounded-full font-sans">
                Featured Article
              </span>
              <div className="space-y-2 pt-2">
                <h4 className="font-serif text-xl font-semibold text-white hover:text-[#E8B29A] transition-colors">
                  <Link href="/knowledge/what-are-peptides">What Are Peptides? A Beginner&apos;s Guide</Link>
                </h4>
                <p className="text-xs text-white/70 leading-relaxed font-sans font-light">
                  A comprehensive breakdown of amino acid messaging chains, why injection routes yield superior bioavailability compared to supplements, and how to define your therapeutic goals.
                </p>
              </div>
              <div className="border-t border-white/10 pt-4 flex justify-between items-center text-xs text-white/50 font-sans">
                <span>Read Time: 8 mins</span>
                <Link href="/knowledge/what-are-peptides" className="text-white hover:underline font-bold flex items-center gap-0.5">
                  Read Article <ChevronRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. PRE-FOOTER CTA & NEWSLETTER (Mood Wallpaper Woman Serum Video) */}
      <section className="bg-[#0B0A09] text-white py-24 relative overflow-hidden z-0">
        {/* Background Video Loop */}
        <div className="absolute inset-0 w-full h-full -z-20 opacity-[0.15]">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/videos/woman_serum_ritual.mp4" type="video/mp4" />
          </video>
        </div>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0A09]/95 via-[#0B0A09]/40 to-[#0B0A09]/95 -z-10"></div>
        <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full bg-[#E8B29A]/5 blur-3xl -z-10"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12 relative">
          {/* Main CTA */}
          <div className="space-y-6">
            <h2 className="font-sans text-4xl sm:text-5xl font-light tracking-tight leading-[1.1]">
              Don&apos;t just live longer. <span className="font-serif italic font-light text-[#E8B29A]">Live better.</span>
            </h2>
            <p className="text-sm sm:text-base text-white/70 max-w-xl mx-auto leading-relaxed font-sans font-light">
              Start your 5-minute online health assessment. A board-certified physician reviews your profile within 24 hours.
            </p>
            <div className="pt-4">
              <Link 
                href="/intake"
                className="inline-block px-10 py-4 rounded-full text-xs font-bold uppercase tracking-widest bg-[#E8B29A] text-[#0B0A09] hover:bg-white hover:text-[#0B0A09] transition-all duration-300 shadow-md font-mono"
              >
                Begin Consultation
              </Link>
            </div>
          </div>

          <div className="border-t border-white/10 pt-12 max-w-md mx-auto space-y-4">
            <h3 className="font-serif text-lg font-light tracking-wide text-[#E8B29A]">Quiet emails. Real science.</h3>
            <p className="text-xs text-white/65 leading-relaxed font-sans font-light">
              Protocol notes, biological research studies, and the occasional discount. No noise.
            </p>
            
            {/* Lead capture form */}
            <form 
              action="/intake" 
              method="GET"
              className="flex flex-col sm:flex-row gap-2 mt-4"
            >
              <input 
                type="email" 
                name="email"
                placeholder="Your email address" 
                required
                className="flex-grow px-4 py-3 bg-white/10 border border-white/20 rounded-full text-sm text-white placeholder-white/40 focus:outline-none focus:border-white focus:ring-1 focus:ring-white/20 font-sans"
              />
              <button 
                type="submit"
                className="px-6 py-3 bg-[#E8B29A] hover:bg-white text-[#0B0A09] rounded-full text-xs font-bold uppercase tracking-widest transition-colors shrink-0 font-sans shadow-md font-mono"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </section>

    </div>
  );
}
