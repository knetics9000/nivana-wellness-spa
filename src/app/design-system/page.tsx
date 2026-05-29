"use client";

import React, { useState } from "react";
import { 
  ChevronRight, 
  Info, 
  AlertOctagon,
  Cpu,
  Tv
} from "lucide-react";
import SafetyModal from "@/components/SafetyModal";

export default function DesignSystemPage() {
  const [safetyOpen, setSafetyOpen] = useState(false);

  return (
    <div className="min-h-screen pb-24 font-sans text-[#70534B] relative z-0">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full -z-20 bg-[#F7F2EC]">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-15"
        >
          <source src="/videos/peptide_skin.mp4" type="video/mp4" />
        </video>
      </div>
      {/* Soft color overlays */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#F7F2EC]/90 via-[#F7F2EC]/85 to-[#E8B29A]/10 -z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#F7F2EC]/40 to-[#F7F2EC] -z-10"></div>

      {/* Header */}
      <section className="relative py-20 border-b border-[#70534B]/15 overflow-hidden z-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 relative z-10 animate-fade-up">
          <span className="text-[10px] font-mono uppercase tracking-[0.35em] text-[#70534B]/60 font-semibold">Valara Brand Guidelines</span>
          <h1 className="font-serif text-4xl sm:text-5xl font-light tracking-tight text-[#70534B]">Design System</h1>
          <p className="text-sm sm:text-base text-[#70534B]/70 max-w-xl mx-auto leading-relaxed font-sans font-light">
            A review of typography, colors, layout patterns, component states, and creative technologies utilized across the Valara Rx storefront.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-20 relative z-10">
        
        {/* 1. TYPOGRAPHY */}
        <section className="space-y-6">
          <h2 className="font-serif text-2xl font-light border-b border-[#70534B]/15 pb-3 text-[#70534B]">01. Typography System</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#70534B]/50 block">Display Serif (Cormorant Garamond)</span>
              <h3 className="font-serif text-5xl font-light text-[#70534B] italic">Precision.</h3>
              <h3 className="font-serif text-4xl font-light text-[#70534B] italic">Restoration.</h3>
              <h3 className="font-serif text-3xl font-light text-[#70534B] italic">Longevity.</h3>
              <p className="text-xs text-[#70534B]/60 italic font-serif leading-relaxed font-light">
                Used for main headings, hero titles, page subtitles, and callouts. Italicizes key words to invoke a premium clinical feeling.
              </p>
            </div>
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#70534B]/50 block">Body Sans (Inter)</span>
              <p className="text-base leading-relaxed text-[#70534B]/80 font-light">
                The quick brown fox jumps over the lazy dog. Valara Rx is a physician-supervised peptide and longevity wellness practice delivering pharmaceutical-grade protocols with clinical precision.
              </p>
              <p className="text-sm text-[#70534B]/70 font-light">
                Small caption: Compounded medications may be prescribed by physicians but have not been FDA-regulated.
              </p>
              <p className="text-xs font-mono tracking-widest text-[#E8B29A] font-bold">
                TRACKING WIDE BADGE
              </p>
            </div>
          </div>
        </section>

        {/* 2. COLOR SWATCHES */}
        <section className="space-y-6">
          <h2 className="font-serif text-2xl font-light border-b border-[#70534B]/15 pb-3 text-[#70534B]">02. Brand Color Palette</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            
            {/* Swatch 1 */}
            <div className="bg-[#E8B29A] border border-[#70534B]/12 rounded-2xl p-5 flex flex-col justify-between h-32 text-[#70534B] shadow-sm">
              <span className="text-xs font-semibold">Healing Peach</span>
              <div>
                <span className="block text-[10px] font-mono text-[#70534B]/70">#E8B29A</span>
                <span className="block text-[9px] font-bold uppercase mt-0.5 tracking-wider text-[#70534B]/50 font-sans">Primary</span>
              </div>
            </div>

            {/* Swatch 2 */}
            <div className="bg-[#8FA89B] border border-[#70534B]/12 rounded-2xl p-5 flex flex-col justify-between h-32 text-[#70534B] shadow-sm">
              <span className="text-xs font-semibold">Sage Mist</span>
              <div>
                <span className="block text-[10px] font-mono text-[#70534B]/70">#8FA89B</span>
                <span className="block text-[9px] font-bold uppercase mt-0.5 tracking-wider text-[#70534B]/50 font-sans">Secondary</span>
              </div>
            </div>

            {/* Swatch 3 */}
            <div className="bg-[#70534B] border border-[#70534B]/12 rounded-2xl p-5 flex flex-col justify-between h-32 text-[#F7F2EC] shadow-sm">
              <span className="text-xs font-semibold">Smoky Clay</span>
              <div>
                <span className="block text-[10px] font-mono text-[#F7F2EC]/70">#70534B</span>
                <span className="block text-[9px] font-bold uppercase mt-0.5 tracking-wider text-[#F7F2EC]/50 font-sans">Accent</span>
              </div>
            </div>

            {/* Swatch 4 */}
            <div className="bg-[#F7F2EC] border border-[#70534B]/15 rounded-2xl p-5 flex flex-col justify-between h-32 text-[#70534B] shadow-sm">
              <span className="text-xs font-semibold">Bone White</span>
              <div>
                <span className="block text-[10px] font-mono text-[#70534B]/70">#F7F2EC</span>
                <span className="block text-[9px] font-bold uppercase mt-0.5 tracking-wider text-[#70534B]/50 font-sans">Neutral</span>
              </div>
            </div>

          </div>
        </section>

        {/* 3. BUTTONS */}
        <section className="space-y-6">
          <h2 className="font-serif text-2xl font-light border-b border-[#70534B]/15 pb-3 text-[#70534B]">03. Interactive Buttons</h2>
          <div className="flex flex-wrap gap-6 items-center">
            
            {/* Primary Button */}
            <div className="space-y-2 text-center">
              <span className="text-[10px] font-bold text-[#70534B]/50 uppercase block">Primary Fill</span>
              <button className="px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest bg-[#70534B] text-white hover:bg-[#E8B29A] hover:text-[#70534B] transition-all duration-300 shadow-md">
                Start Consultation
              </button>
            </div>

            {/* Secondary Button */}
            <div className="space-y-2 text-center">
              <span className="text-[10px] font-bold text-[#70534B]/50 uppercase block">Secondary Light</span>
              <button className="px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest bg-white/70 text-[#70534B] border border-[#70534B]/15 hover:bg-[#F7F2EC] transition-all duration-300">
                Explore Treatments
              </button>
            </div>

            {/* Dark Button */}
            <div className="space-y-2 text-center">
              <span className="text-[10px] font-bold text-[#70534B]/50 uppercase block">Accent Solid</span>
              <button className="px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest bg-[#E8B29A] text-[#70534B] hover:bg-[#70534B] hover:text-white transition-all duration-300">
                View Protocol Details
              </button>
            </div>

          </div>
        </section>

        {/* 4. CARD GRADIENTS & PANELS */}
        <section className="space-y-6">
          <h2 className="font-serif text-2xl font-light border-b border-[#70534B]/15 pb-3 text-[#70534B]">04. Frosted Glass Panels</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Panel 1 */}
            <div className="glass-panel rounded-3xl p-6 relative overflow-hidden h-48 flex flex-col justify-between hover-lift shadow-sm">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#E8B29A] to-transparent opacity-15"></div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#70534B] bg-[#E8B29A]/20 px-2 py-0.5 rounded-full">Metabolic</span>
                <h3 className="font-serif text-xl font-semibold mt-3 text-[#70534B]">Weight Loss</h3>
              </div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#70534B] flex items-center gap-0.5">
                Explore <ChevronRight className="h-3 w-3" />
              </span>
            </div>

            {/* Panel 2 */}
            <div className="glass-panel rounded-3xl p-6 relative overflow-hidden h-48 flex flex-col justify-between hover-lift shadow-sm">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#8FA89B] to-transparent opacity-20"></div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#70534B] bg-[#8FA89B]/20 px-2 py-0.5 rounded-full">Recovery</span>
                <h3 className="font-serif text-xl font-semibold mt-3 text-[#70534B]">Injury Healing</h3>
              </div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#70534B] flex items-center gap-0.5">
                Explore <ChevronRight className="h-3 w-3" />
              </span>
            </div>

            {/* Panel 3 */}
            <div className="glass-panel rounded-3xl p-6 relative overflow-hidden h-48 flex flex-col justify-between hover-lift shadow-sm">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#70534B] to-transparent opacity-10"></div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#70534B] bg-[#70534B]/10 px-2 py-0.5 rounded-full">Longevity</span>
                <h3 className="font-serif text-xl font-semibold mt-3 text-[#70534B]">Cellular Energy</h3>
              </div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#70534B] flex items-center gap-0.5">
                Explore <ChevronRight className="h-3 w-3" />
              </span>
            </div>

          </div>
        </section>

        {/* 5. ALERTS & DISCLAIMERS */}
        <section className="space-y-6">
          <h2 className="font-serif text-2xl font-light border-b border-[#70534B]/15 pb-3 text-[#70534B]">05. Safety Alerts & Compliance</h2>
          <div className="space-y-4">
            
            {/* Compounding Disclaimer */}
            <div className="glass-panel rounded-2xl p-4 flex gap-3 text-xs text-[#70534B]/75 leading-relaxed max-w-xl shadow-sm border border-[#70534B]/10">
              <Info className="h-5 w-5 text-[#8FA89B] shrink-0 mt-0.5" />
              <p className="font-light">
                Compounded medications may be prescribed by physicians but have not been FDA-regulated for safety, effectiveness, or quality. FDA-approved alternatives may be available.
              </p>
            </div>

            {/* GLP-1 Boxed Warning */}
            <div className="bg-[#E8B29A]/10 border border-[#E8B29A]/30 rounded-2xl p-5 flex gap-3 text-xs text-[#70534B] leading-relaxed max-w-xl">
              <AlertOctagon className="h-5 w-5 text-[#E8B29A] shrink-0 mt-0.5" />
              <div>
                <span className="font-bold block text-[#70534B] uppercase tracking-wider mb-1">GLP-1 Warning</span>
                <p className="font-light">
                  Contraindicated in individuals with personal or family history of medullary thyroid carcinoma. Stop use and contact a doctor if node symptoms develop.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* 6. MODALS PREVIEW */}
        <section className="space-y-6">
          <h2 className="font-serif text-2xl font-light border-b border-[#70534B]/15 pb-3 text-[#70534B]">06. Interactive Modals</h2>
          <div>
            <button
              onClick={() => setSafetyOpen(true)}
              className="px-8 py-3.5 bg-[#70534B] text-white hover:bg-[#E8B29A] hover:text-[#70534B] rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-sm"
            >
              Open Safety Modal Preview
            </button>
          </div>
        </section>

        {/* 7. CREATIVE TECH STACK / WEBGL SPECIFICATIONS */}
        <section className="space-y-6">
          <h2 className="font-serif text-2xl font-light border-b border-[#70534B]/15 pb-3 text-[#70534B]">07. Creative Tech Stack</h2>
          <div className="glass-panel rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
            <div className="flex items-center gap-3">
              <Cpu className="h-6 w-6 text-[#E8B29A]" />
              <span className="text-[10px] font-mono uppercase tracking-[0.35em] text-[#70534B]/60 font-semibold">WebGL &amp; Interaction Specifications</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="relative pl-6 border-l border-[#70534B]/15">
                  <span className="absolute left-[-4px] top-1.5 h-2 w-2 rounded-full bg-[#E8B29A]"></span>
                  <h4 className="text-[11px] font-mono uppercase tracking-wider text-[#8FA89B] font-bold">Three.js Progressive Loading</h4>
                  <p className="text-xs text-[#70534B]/80 mt-1 font-sans font-light leading-relaxed">
                    5 separate asset chapters load dynamically and concurrently only when requested by user progression.
                  </p>
                </div>

                <div className="relative pl-6 border-l border-[#70534B]/15">
                  <span className="absolute left-[-4px] top-1.5 h-2 w-2 rounded-full bg-[#E8B29A]"></span>
                  <h4 className="text-[11px] font-mono uppercase tracking-wider text-[#8FA89B] font-bold">GSAP timeline.progress()</h4>
                  <p className="text-xs text-[#70534B]/80 mt-1 font-sans font-light leading-relaxed">
                    Visual scroll position directly drives WebGL timeline playheads, binding page scroll as a film reel.
                  </p>
                </div>

                <div className="relative pl-6 border-l border-[#70534B]/15">
                  <span className="absolute left-[-4px] top-1.5 h-2 w-2 rounded-full bg-[#E8B29A]"></span>
                  <h4 className="text-[11px] font-mono uppercase tracking-wider text-[#8FA89B] font-bold">Pointer Events API</h4>
                  <p className="text-xs text-[#70534B]/80 mt-1 font-sans font-light leading-relaxed">
                    Long press events trigger real-time environment changes and variations inside the active 3D viewports.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="relative pl-6 border-l border-[#70534B]/15">
                  <span className="absolute left-[-4px] top-1.5 h-2 w-2 rounded-full bg-[#8FA89B]"></span>
                  <h4 className="text-[11px] font-mono uppercase tracking-wider text-[#8FA89B] font-bold">Web Audio API</h4>
                  <p className="text-xs text-[#70534B]/80 mt-1 font-sans font-light leading-relaxed">
                    Spatialized audio and background scores sync natively to WebGL scenes as key scroll milestones are met.
                  </p>
                </div>

                <div className="relative pl-6 border-l border-[#70534B]/15">
                  <span className="absolute left-[-4px] top-1.5 h-2 w-2 rounded-full bg-[#8FA89B]"></span>
                  <h4 className="text-[11px] font-mono uppercase tracking-wider text-[#8FA89B] font-bold">CSS Custom Properties</h4>
                  <p className="text-xs text-[#70534B]/80 mt-1 font-sans font-light leading-relaxed">
                    Dynamic variables shift page variables and entire chapter mood profiles with a single global line.
                  </p>
                </div>

                <div className="relative pl-6 border-l border-[#70534B]/15">
                  <span className="absolute left-[-4px] top-1.5 h-2 w-2 rounded-full bg-[#8FA89B]"></span>
                  <h4 className="text-[11px] font-mono uppercase tracking-wider text-[#8FA89B] font-bold">Draco Compression</h4>
                  <p className="text-xs text-[#70534B]/80 mt-1 font-sans font-light leading-relaxed">
                    3D geometry assets are optimized using Google Draco compression, reducing model file sizes by up to 90%.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-[#70534B]/15 pt-6 flex justify-between items-center text-[10px] tracking-widest text-[#E8B29A] font-mono uppercase">
              <span>Save this 🦅</span>
              <span className="text-[#70534B]/50 font-sans font-bold">VALARA Rx DEVELOPER MANIFESTO</span>
            </div>
          </div>
        </section>

      </div>

      {/* Safety Modal Overlay */}
      <SafetyModal 
        isOpen={safetyOpen}
        onClose={() => setSafetyOpen(false)}
        productName="Semaglutide Protocol"
        safetyInfo={{
          contraindications: [
            "Personal or family history of Medullary Thyroid Carcinoma (MTC)",
            "Multiple Endocrine Neoplasia syndrome type 2 (MEN 2)",
            "Known hypersensitivity to semaglutide or related GLP-1 analogues",
            "Pregnancy, plans for pregnancy, or currently breastfeeding"
          ],
          warnings: [
            "Risk of thyroid C-cell tumors based on animal bioassays",
            "Pancreatitis has been reported in clinical studies; discontinue if acute abdomen occurs",
            "Diabetic retinopathy complications in patients with active Type 2 diabetes history",
            "Acute kidney injury or worsening of renal failure may occur due to dehydration from GI events"
          ],
          sideEffects: [
            "Gastrointestinal: nausea, diarrhea, vomiting, constipation, abdominal discomfort",
            "Neurological: tension headaches, transient dizziness, mild fatigue",
            "Metabolic: hypoglycemic episodes when combined with sulfonylureas or insulin"
          ],
          drugInteractions: [
            "Oral medications: delayed gastric emptying can alter oral absorption speed",
            "Insulin secretagogues: increased risk of clinical hypoglycemia"
          ],
          disclaimer: "Compounded medication prescribed for custom patient protocols."
        }}
      />
    </div>
  );
}
