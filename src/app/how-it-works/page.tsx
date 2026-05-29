import React from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  MessageSquare, 
  Layers, 
  FlaskConical,
  ShieldAlert,
  Cpu,
  Workflow,
  Sparkles
} from "lucide-react";
import { ValaraLogo } from "@/components/Navigation";

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen pb-24 font-sans text-[#F7F2EC] relative z-0 selection:bg-[#E8B29A]/30">
      
      {/* Background Video Wallpapers */}
      <div className="absolute inset-0 w-full h-full -z-20 bg-[#0B0A09]">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-25"
        >
          <source src="/videos/peptide_skin.mp4" type="video/mp4" />
        </video>
      </div>
      {/* Dynamic Gradients */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#0B0A09] via-[#0B0A09]/95 to-[#E8B29A]/10 -z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0B0A09]/60 to-[#0B0A09] -z-10"></div>

      {/* Hero Header */}
      <section className="relative py-24 border-b border-white/10 overflow-hidden z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#E8B29A]/5 blur-[120px] -z-10 animate-pulse-slow"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10 animate-fade-up">
          <div className="flex items-center justify-center gap-2">
            <span className="h-[1px] w-8 bg-[#E8B29A]/30"></span>
            <span className="text-[10px] font-mono uppercase tracking-[0.35em] text-[#E8B29A] bg-[#E8B29A]/10 border border-[#E8B29A]/20 px-3 py-1 rounded-full inline-block font-semibold">
              THE TELEHEALTH PROTOCOL
            </span>
            <span className="h-[1px] w-8 bg-[#E8B29A]/30"></span>
          </div>
          <h1 className="font-sans text-5xl sm:text-7xl font-extralight tracking-tight text-white leading-none">
            How Valara Works
          </h1>
          <p className="text-sm sm:text-base text-white/70 max-w-xl mx-auto leading-relaxed font-sans font-light">
            We have modernized clinical access to peptide therapies. A fully supervised, board-certified medical pipeline engineered with clinical integrity and cold-chain precision.
          </p>
        </div>
      </section>

      {/* 3 Step Details with glowing circuit layout */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 space-y-16 animate-fade-up relative z-10">
        
        {/* Step 1 */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start relative">
          <div className="md:col-span-4 flex md:flex-col items-center md:items-start gap-4">
            <div className="relative">
              <span className="h-14 w-14 rounded-xl bg-white/5 text-[#E8B29A] flex items-center justify-center font-mono text-lg shrink-0 font-semibold border border-white/10 shadow-lg shadow-black/45">
                01
              </span>
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#E8B29A] rounded-full animate-ping"></div>
            </div>
            <div>
              <h2 className="font-serif text-2xl font-light text-white">Online Intake</h2>
              <span className="text-[9px] font-mono uppercase tracking-widest text-[#E8B29A]/70 block mt-1">
                [ CLINICAL SCREENING / ~5 MINS ]
              </span>
            </div>
          </div>
          <div className="md:col-span-8 p-6 rounded-2xl glass-panel-dark border border-white/10 space-y-4 text-xs sm:text-sm text-white/80 leading-relaxed font-sans font-light">
            <p>
              Your protocol begins with our comprehensive health history assessment. You will share your primary wellness goals (whether focused on metabolic correction, sports recovery, cognitive enhancement, or longevity), your biological baselines (age, weight, height), and relevant clinical disclosures (existing conditions, medications, active allergies).
            </p>
            <p>
              Depending on the specific peptide group requested (such as growth hormone secretagogues or glycemic regulators), we may require a recent blood diagnostic panel. If you have run labs within the last 6 months, you can upload them directly. Otherwise, our clinical coordinators will generate a lab order for you to visit a local Quest Diagnostics or Labcorp facility.
            </p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-t border-white/10 pt-16 relative">
          <div className="md:col-span-4 flex md:flex-col items-center md:items-start gap-4">
            <span className="h-14 w-14 rounded-xl bg-white/5 text-[#8FA89B] flex items-center justify-center font-mono text-lg shrink-0 font-semibold border border-white/10 shadow-lg shadow-black/45">
              02
            </span>
            <div>
              <h2 className="font-serif text-2xl font-light text-white">Physician Evaluation</h2>
              <span className="text-[9px] font-mono uppercase tracking-widest text-[#8FA89B]/70 block mt-1">
                [ DIAGNOSTIC REVIEW / &lt;24HR ]
              </span>
            </div>
          </div>
          <div className="md:col-span-8 p-6 rounded-2xl glass-panel-dark border border-white/10 space-y-4 text-xs sm:text-sm text-white/80 leading-relaxed font-sans font-light">
            <p>
              Unlike automated clinics, a U.S. board-certified physician reviews your complete file. They assess your eligibility, screen for safety contraindications (like personal history of endocrine tumors or pregnancy), and determine if peptide therapy is a safe and effective pathway for you.
            </p>
            <p>
              If cleared, the physician writes a customized protocol, establishing exact titration (starting dose and progressive increases), administration guidelines (reconstitution math, injection schedules), and follow-up markers. In states that require face-to-face telemedicine, our portal will prompt you to schedule a brief 3-minute video consultation with the reviewing doctor.
            </p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-t border-white/10 pt-16 relative">
          <div className="md:col-span-4 flex md:flex-col items-center md:items-start gap-4">
            <span className="h-14 w-14 rounded-xl bg-white/5 text-[#E8B29A] flex items-center justify-center font-mono text-lg shrink-0 font-semibold border border-white/10 shadow-lg shadow-black/45">
              03
            </span>
            <div>
              <h2 className="font-serif text-2xl font-light text-white">Cold-Chain Dispatch</h2>
              <span className="text-[9px] font-mono uppercase tracking-widest text-[#E8B29A]/70 block mt-1">
                [ DISCREET DISPENSARY / TRACKED ]
              </span>
            </div>
          </div>
          <div className="md:col-span-8 p-6 rounded-2xl glass-panel-dark border border-white/10 space-y-4 text-xs sm:text-sm text-white/80 leading-relaxed font-sans font-light">
            <p>
              Your prescription is sent directly to one of our licensed partner compounding pharmacies in the United States. They prepare the medication under sterile compounding regulations.
            </p>
            <p>
              Because peptides are sensitive temperature-dependent proteins, they are packed in insulated, cold-chain containers with gel ice packs and shipped via expedited carrier. Your shipment includes the peptide vial, sterile syringes, alcohol prep swabs, bacteriostatic water, and clear physical administration guides.
            </p>
          </div>
        </div>

      </section>

      {/* Packaging System & Three Collections Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-32 pt-16 border-t border-white/10 relative z-10 animate-fade-up">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/60 block mb-2">VALARA PACKAGING SYSTEM</span>
          <h2 className="font-sans text-4xl font-light text-white tracking-tight">
            Three collections. <span className="font-serif italic font-light text-[#8FA89B]">One language of restoration.</span>
          </h2>
          <p className="text-sm text-white/70 mt-3 font-sans max-w-xl mx-auto leading-relaxed">
            Every compound is assigned to a distinct color-coded series, creating clarity and alignment in your daily dosing rituals.
          </p>
        </div>

        {/* The 3 Packaging Series Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          
          {/* Recovery Series 01 */}
          <div className="glass-panel-dark rounded-3xl p-8 flex flex-col justify-between hover-lift shadow-lg border border-white/10 glow-peach-glow">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="h-3 w-3 rounded-full bg-[#E8B29A] shadow-[0_0_8px_#E8B29A]"></span>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#E8B29A] font-bold">Series 01</span>
              </div>
              <h3 className="font-serif text-2xl font-light text-white">Recovery Collection</h3>
              <p className="text-xs text-white/75 leading-relaxed font-sans font-light">
                Formulated for tissue repair, cellular sleep cycles, and post-exertion systemic restoration.
              </p>
            </div>
            
            {/* Bottle Mockup */}
            <div className="mt-12 flex justify-center">
              <div className="w-32 h-56 bg-gradient-to-b from-[#1E1C1A] to-[#121110] border border-[#E8B29A]/30 rounded-t-xl rounded-b-2xl p-0 flex flex-col justify-between relative shadow-2xl overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-r from-[#E8B29A] to-[#E8B29A]/70"></div>
                <div className="absolute -top-1 left-7 right-7 h-2 bg-[#0B0A09] rounded-t-xs border-b border-[#E8B29A]/20"></div>
                
                <div className="p-3 text-center border-b border-white/10 pt-6">
                  <ValaraLogo className="h-5 w-5 mx-auto mb-1 text-[#E8B29A]" />
                  <div className="font-sans text-[8px] font-extralight tracking-widest text-white/90 leading-none">VALARA<span className="font-bold text-[6px] ml-0.5 text-[#E8B29A]">Rx</span></div>
                </div>
                
                <div className="p-4 text-center">
                  <div className="font-serif italic text-base text-white leading-none">Recovery</div>
                  <div className="text-[7px] tracking-widest uppercase text-white/60 mt-1 font-mono">Series 01</div>
                  <div className="w-8 h-[0.5px] bg-[#E8B29A]/20 mx-auto my-2"></div>
                  <div className="font-mono text-[7px] text-[#E8B29A] leading-tight font-semibold">BPC-157<br />5mg / 5ml</div>
                </div>
                
                <div className="p-2 bg-black/45 border-t border-white/10 text-[5px] text-white/50 tracking-widest text-center font-mono">RX ONLY</div>
              </div>
            </div>
          </div>

          {/* Longevity Series 02 */}
          <div className="glass-panel-dark rounded-3xl p-8 flex flex-col justify-between hover-lift shadow-lg border border-white/10 glow-sage-glow">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="h-3 w-3 rounded-full bg-[#8FA89B] shadow-[0_0_8px_#8FA89B]"></span>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#8FA89B] font-bold">Series 02</span>
              </div>
              <h3 className="font-serif text-2xl font-light text-white">Longevity Collection</h3>
              <p className="text-xs text-white/75 leading-relaxed font-sans font-light">
                Engineered for cellular energy replenishment, NAD+ levels, and age-defying mitochondrial protocols.
              </p>
            </div>
            
            {/* Bottle Mockup */}
            <div className="mt-12 flex justify-center">
              <div className="w-32 h-56 bg-gradient-to-b from-[#171918] to-[#0E100F] border border-[#8FA89B]/30 rounded-t-xl rounded-b-2xl p-0 flex flex-col justify-between relative shadow-2xl overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-r from-[#8FA89B] to-[#8FA89B]/70"></div>
                <div className="absolute -top-1 left-7 right-7 h-2 bg-[#0B0A09] rounded-t-xs border-b border-[#8FA89B]/20"></div>
                
                <div className="p-3 text-center border-b border-white/10 pt-6">
                  <ValaraLogo className="h-5 w-5 mx-auto mb-1 text-[#8FA89B]" />
                  <div className="font-sans text-[8px] font-extralight tracking-widest text-white/90 leading-none">VALARA<span className="font-bold text-[6px] ml-0.5 text-[#8FA89B]">Rx</span></div>
                </div>
                
                <div className="p-4 text-center">
                  <div className="font-serif italic text-base text-white leading-none">Longevity</div>
                  <div className="text-[7px] tracking-widest uppercase text-white/60 mt-1 font-mono">Series 02</div>
                  <div className="w-8 h-[0.5px] bg-[#8FA89B]/20 mx-auto my-2"></div>
                  <div className="font-mono text-[7px] text-[#8FA89B] leading-tight font-semibold">NAD+<br />500mg / 10ml</div>
                </div>
                
                <div className="p-2 bg-black/45 border-t border-white/10 text-[5px] text-white/50 tracking-widest text-center font-mono">RX ONLY</div>
              </div>
            </div>
          </div>

          {/* Metabolic Series 03 */}
          <div className="glass-panel-dark rounded-3xl p-8 flex flex-col justify-between hover-lift shadow-lg border border-white/10 glow-peach-glow">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="h-3 w-3 rounded-full bg-[#E8B29A]/80 shadow-[0_0_8px_#E8B29A]"></span>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#E8B29A] font-bold">Series 03</span>
              </div>
              <h3 className="font-serif text-2xl font-light text-white">Metabolic Collection</h3>
              <p className="text-xs text-white/75 leading-relaxed font-sans font-light">
                Formulated for glycemic control, hunger quietude, weight management, and composition support.
              </p>
            </div>
            
            {/* Bottle Mockup */}
            <div className="mt-12 flex justify-center">
              <div className="w-32 h-56 bg-gradient-to-b from-[#1C1A19] to-[#11100F] border border-[#E8B29A]/20 rounded-t-xl rounded-b-2xl p-0 flex flex-col justify-between relative shadow-2xl overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-r from-[#E8B29A] to-[#8FA89B] opacity-80"></div>
                <div className="absolute -top-1 left-7 right-7 h-2 bg-[#0B0A09] rounded-t-xs border-b border-white/10"></div>
                
                <div className="p-3 text-center border-b border-white/10 pt-6">
                  <ValaraLogo className="h-5 w-5 mx-auto mb-1 text-[#E8B29A]" />
                  <div className="font-sans text-[8px] font-extralight tracking-widest text-white/90 leading-none">VALARA<span className="font-bold text-[6px] ml-0.5 text-[#E8B29A]">Rx</span></div>
                </div>
                
                <div className="p-4 text-center">
                  <div className="font-serif italic text-base text-white leading-none">Metabolic</div>
                  <div className="text-[7px] tracking-widest uppercase text-white/60 mt-1 font-mono">Series 03</div>
                  <div className="w-8 h-[0.5px] bg-[#E8B29A]/20 mx-auto my-2"></div>
                  <div className="font-mono text-[7px] text-[#E8B29A] leading-tight font-semibold">SEMA-X<br />2.5mg / 4ml</div>
                </div>
                
                <div className="p-2 bg-black/45 border-t border-white/10 text-[5px] text-white/50 tracking-widest text-center font-mono">RX ONLY</div>
              </div>
            </div>
          </div>

        </div>

        {/* Anatomy of a Label Block (Modern blueprints) */}
        <div className="glass-panel-dark rounded-3xl p-8 md:p-12 mb-24 shadow-xl border border-white/10 relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-44 h-44 bg-[#E8B29A]/5 rounded-full blur-2xl"></div>
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#E8B29A] block mb-2">DESIGN SYSTEM DETAIL</span>
            <h3 className="font-serif text-3xl font-light text-white">Anatomy of a Label</h3>
            <p className="text-xs text-white/60 leading-relaxed font-sans font-light mt-2">
              Every detail is considered. Clean editorial typography meets precise scientific disclosures.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Label Rendering (Left) */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-[280px] bg-gradient-to-b from-[#181615] to-[#0D0C0B] rounded-2xl p-6 text-center shadow-2xl relative border border-[#E8B29A]/30">
                <ValaraLogo className="h-9 w-9 mx-auto mb-3 text-[#E8B29A]" />
                <div className="font-sans text-[13px] font-extralight tracking-[0.32em] text-white leading-none">VALARA<span className="font-semibold text-[10px] ml-1 text-[#E8B29A]">Rx</span></div>
                <div className="w-8 h-[0.5px] bg-[#E8B29A]/20 mx-auto my-5"></div>
                <div className="font-serif italic text-3xl text-white leading-none">Recovery</div>
                <div className="text-[9px] tracking-[0.4em] uppercase text-white/60 mt-1.5 font-mono">Series 01</div>
                
                <div className="bg-[#E8B29A]/10 border border-[#E8B29A]/20 rounded-lg py-2.5 px-3 my-5 inline-block">
                  <div className="font-mono text-[10px] tracking-wider text-[#E8B29A] leading-normal font-semibold">BPC-157<br />5mg / 5ml</div>
                </div>
                
                <div className="text-[8px] tracking-[0.2em] text-white/70 uppercase leading-relaxed font-sans font-light">
                  Subcutaneous · 14 day cycle<br />Refrigerate · 2-8°C
                </div>
              </div>
            </div>

            {/* Label Breakdowns (Right) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="relative pl-6 border-l border-[#E8B29A]/20">
                <span className="absolute left-[-4.5px] top-1.5 h-2 w-2 rounded-full bg-[#E8B29A] shadow-[0_0_5px_#E8B29A]"></span>
                <h4 className="text-[9px] font-mono uppercase tracking-widest text-[#E8B29A] font-bold">01 · IDENTIFIER</h4>
                <p className="text-xs text-white/70 mt-1 font-sans font-light leading-relaxed">
                  The Valara crescent mark and wordmark are always locked up centrally at the top, certifying compound origin.
                </p>
              </div>

              <div className="relative pl-6 border-l border-[#E8B29A]/20">
                <span className="absolute left-[-4.5px] top-1.5 h-2 w-2 rounded-full bg-[#E8B29A] shadow-[0_0_5px_#E8B29A]"></span>
                <h4 className="text-[9px] font-mono uppercase tracking-widest text-[#E8B29A] font-bold">02 · COLLECTION NAME</h4>
                <p className="text-xs text-white/70 mt-1 font-sans font-light leading-relaxed">
                  Set in warm, editorial serif italics, establishing a patient-centered wellness register.
                </p>
              </div>

              <div className="relative pl-6 border-l border-[#8FA89B]/20">
                <span className="absolute left-[-4.5px] top-1.5 h-2 w-2 rounded-full bg-[#8FA89B] shadow-[0_0_5px_#8FA89B]"></span>
                <h4 className="text-[9px] font-mono uppercase tracking-widest text-[#8FA89B] font-bold">03 · SERIES NUMBER</h4>
                <p className="text-xs text-white/70 mt-1 font-sans font-light leading-relaxed">
                  Tracked caps fashion-house indexing specifies which restoration series the vial belongs to.
                </p>
              </div>

              <div className="relative pl-6 border-l border-[#8FA89B]/20">
                <span className="absolute left-[-4.5px] top-1.5 h-2 w-2 rounded-full bg-[#8FA89B] shadow-[0_0_5px_#8FA89B]"></span>
                <h4 className="text-[9px] font-mono uppercase tracking-widest text-[#8FA89B] font-bold">04 · COMPOUND BLOCK</h4>
                <p className="text-xs text-white/70 mt-1 font-sans font-light leading-relaxed">
                  High-contrast monospace text contained in a shaded overlay block to ensure error-free dosage reads.
                </p>
              </div>

              <div className="relative pl-6 border-l border-white/20">
                <span className="absolute left-[-4.5px] top-1.5 h-2 w-2 rounded-full bg-white/40"></span>
                <h4 className="text-[9px] font-mono uppercase tracking-widest text-white/50 font-bold">05 · PROTOCOL METADATA</h4>
                <p className="text-xs text-white/70 mt-1 font-sans font-light leading-relaxed">
                  Legible administration directives (cycle duration, storage temperatures) supporting patient safety.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* The Unboxing Ritual */}
        <div className="glass-panel-dark rounded-3xl p-8 md:p-12 shadow-xl border border-white/10 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-24 h-[1px] bg-[#E8B29A]/50"></div>
          <div className="absolute top-0 left-0 h-24 w-[1px] bg-[#E8B29A]/50"></div>
          
          <div className="max-w-2xl mx-auto space-y-4 mb-12">
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#E8B29A] block mb-2">THE UNBOXING EXPERIENCE</span>
            <h3 className="font-serif text-3xl font-light text-white">A ritual, not a delivery.</h3>
            <p className="text-xs text-white/60 leading-relaxed font-sans font-light">
              We design every physical touchpoint with care — delivering quiet luxury to your recovery space.
            </p>
          </div>

          <div className="max-w-xl mx-auto bg-gradient-to-b from-[#131110] to-[#0A0909] rounded-3xl p-8 sm:p-12 relative shadow-2xl text-left border border-white/10">
            {/* Header branding */}
            <div className="flex justify-between items-center mb-8 pb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <ValaraLogo className="h-6 w-6 text-[#E8B29A]" />
                <div className="font-sans text-[11px] font-extralight tracking-widest text-[#F7F2EC]">VALARA<span className="font-semibold text-[#E8B29A] ml-0.5">Rx</span></div>
              </div>
              <div className="font-mono text-[8px] tracking-widest text-[#E8B29A]/80 uppercase">ORDER 24·0817</div>
            </div>

            {/* Handwritten Greeting card */}
            <div className="bg-gradient-to-br from-[#1C1918] to-[#12100F] rounded-xl p-6 text-center transform -rotate-1 shadow-lg mb-8 border border-[#E8B29A]/30">
              <h4 className="font-serif italic text-2xl text-[#E8B29A] leading-none mb-2">Welcome, Sarah.</h4>
              <div className="w-8 h-[0.5px] bg-[#E8B29A]/30 mx-auto my-3"></div>
              <p className="font-sans text-xs text-white/80 max-w-[280px] mx-auto leading-relaxed font-light">
                Your Recovery + Longevity protocol, formulated by Dr. Evelyn Vance, MD. Begin when ready.
              </p>
            </div>

            {/* Packaging content visuals */}
            <div className="flex gap-4 justify-center my-8">
              <div className="w-20 h-28 bg-gradient-to-b from-[#201D1B] to-[#141211] border border-[#E8B29A]/30 rounded-t-md rounded-b-xl flex flex-col justify-end p-2 text-center shadow-md">
                <span className="font-serif italic text-xs leading-none text-white">Recovery</span>
                <span className="font-mono text-[6px] tracking-wider text-[#E8B29A] mt-1">01</span>
              </div>
              <div className="w-20 h-28 bg-gradient-to-b from-[#191D1A] to-[#0F1210] border border-[#8FA89B]/30 rounded-t-md rounded-b-xl flex flex-col justify-end p-2 text-center shadow-md">
                <span className="font-serif italic text-xs leading-none text-white">Longevity</span>
                <span className="font-mono text-[6px] tracking-wider text-[#8FA89B] mt-1">02</span>
              </div>
              <div className="w-20 h-28 bg-white/5 border border-white/10 rounded-t-md rounded-b-xl flex flex-col justify-center items-center p-2 text-center text-white/50 opacity-60">
                <span className="font-sans text-[6px] tracking-widest uppercase font-semibold leading-normal">Protocol<br />Card</span>
              </div>
            </div>

            <div className="text-center font-mono text-[8px] text-[#E8B29A]/60 tracking-[0.25em] uppercase mt-6">
              SEALED WITH CARE · CLINICAL DISPATCH
            </div>
          </div>

          {/* Three Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mt-16 text-left">
            <div className="glass-panel-dark rounded-2xl p-5 border border-white/10">
              <span className="text-[9px] font-mono uppercase tracking-widest text-[#E8B29A] font-bold block mb-1">01 · OUTER</span>
              <p className="text-xs text-white/70 font-sans font-light leading-relaxed">
                Recyclable insulated mailer sealed with a physical clay wax seal for cold-chain safety.
              </p>
            </div>
            <div className="glass-panel-dark rounded-2xl p-5 border border-white/10">
              <span className="text-[9px] font-mono uppercase tracking-widest text-[#8FA89B] font-bold block mb-1">02 · INNER</span>
              <p className="text-xs text-white/70 font-sans font-light leading-relaxed">
                Uncoated bone-white presentation tray bound with customized heavy linen ribbon.
              </p>
            </div>
            <div className="glass-panel-dark rounded-2xl p-5 border border-white/10">
              <span className="text-[9px] font-mono uppercase tracking-widest text-[#E8B29A] font-bold block mb-1">03 · INSERT</span>
              <p className="text-xs text-white/70 font-sans font-light leading-relaxed">
                A handwritten welcome greeting from your care coordinator and a linen-stock protocol card.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ongoing Support Section */}
      <section className="relative overflow-hidden py-24 mt-24 border-y border-white/10 z-0">
        <div className="absolute inset-0 bg-[#0B0A09]/40 backdrop-blur-md -z-10"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12 relative z-10">
          <div className="max-w-2xl mx-auto space-y-3">
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#E8B29A]">CONCIERGE CLINICAL CARE</span>
            <h2 className="font-sans text-4xl font-light text-white">Continuous oversight on your schedule</h2>
            <p className="text-xs sm:text-sm text-white/60 leading-relaxed font-sans font-light">
              Your Valara protocol doesn&apos;t end when the package arrives. We provide the clinical coordination you need to succeed safely.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="glass-panel-dark rounded-3xl p-6 space-y-4 shadow-lg hover-lift border border-white/10 glow-peach-glow">
              <div className="h-10 w-10 rounded-full bg-white/5 text-[#E8B29A] flex items-center justify-center border border-white/10">
                <MessageSquare className="h-5 w-5" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-white">Concierge Portal Messenger</h3>
              <p className="text-xs text-white/70 leading-relaxed font-sans font-light">
                Access your care team directly to ask questions about reconstitution math, injection techniques, or managing mild side effects.
              </p>
            </div>

            <div className="glass-panel-dark rounded-3xl p-6 space-y-4 shadow-lg hover-lift border border-white/10 glow-sage-glow">
              <div className="h-10 w-10 rounded-full bg-white/5 text-[#8FA89B] flex items-center justify-center border border-white/10">
                <Layers className="h-5 w-5" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-white">Medication Titration Logs</h3>
              <p className="text-xs text-white/70 leading-relaxed font-sans font-light">
                Track your weight loss, metabolic baselines, or joint pain recovery markers within your patient profile, allowing your physician to adjust dosage safely.
              </p>
            </div>

            <div className="glass-panel-dark rounded-3xl p-6 space-y-4 shadow-lg hover-lift border border-white/10 glow-peach-glow">
              <div className="h-10 w-10 rounded-full bg-white/5 text-[#E8B29A] flex items-center justify-center border border-white/10">
                <FlaskConical className="h-5 w-5" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-white">Bi-Annual Blood Panels</h3>
              <p className="text-xs text-white/70 leading-relaxed font-sans font-light">
                Every 6 months, we schedule follow-up lab screenings to ensure your levels (such as IGF-1, insulin, liver and kidney markers) remain in optimal ranges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pre-footer CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 text-center space-y-6 relative z-10">
        <h2 className="font-sans text-3xl font-light tracking-wide text-white">
          Ready to speak with a physician?
        </h2>
        <p className="text-xs sm:text-sm text-white/60 max-w-sm mx-auto leading-relaxed font-sans font-light">
          Begin your medical intake today. A U.S. board-certified doctor will evaluate your health baselines and design your personalized scheduling protocols.
        </p>
        <div className="pt-4">
          <Link 
            href="/intake"
            className="inline-flex items-center gap-1.5 px-8 py-3.5 bg-[#E8B29A] text-[#0B0A09] hover:bg-white hover:text-[#0B0A09] transition-all duration-300 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg font-mono"
          >
            Start Free Assessment <ArrowRight className="h-4.5 w-4.5" />
          </Link>
        </div>
      </section>

    </div>
  );
}
