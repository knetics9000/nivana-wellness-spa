"use client";

import React, { useState } from "react";
import { 
  Sparkles, 
  ShieldCheck, 
  ChevronRight, 
  ArrowRight, 
  Info, 
  AlertOctagon, 
  CheckCircle2, 
  Activity 
} from "lucide-react";
import SafetyModal from "@/components/SafetyModal";

export default function DesignSystemPage() {
  const [safetyOpen, setSafetyOpen] = useState(false);

  return (
    <div className="bg-[#F8F4EC] min-h-screen pb-24 font-sans text-[#2A2520]">
      {/* Header */}
      <section className="bg-[#EFE8DA] py-16 border-b border-[#E2D9C7] text-[#2A2520]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#B89968]">Nivana Brand Guidelines</span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight">Design System</h1>
          <p className="text-sm sm:text-base text-[#2A2520]/75 max-w-xl mx-auto">
            A review of typography, colors, layout patterns, and component states utilized across the Nivana Wellness Spa digital storefront.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-20">
        
        {/* 1. TYPOGRAPHY */}
        <section className="space-y-6">
          <h2 className="font-serif text-2xl font-bold border-b border-[#E2D9C7] pb-3 text-[#B89968]">01. Typography System</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#2A2520]/50 block">Display Serif (Cormorant Garamond / Fraunces)</span>
              <h3 className="font-serif text-5xl font-bold">Restore.</h3>
              <h3 className="font-serif text-4xl font-bold">Rebuild.</h3>
              <h3 className="font-serif text-3xl font-bold">Renew.</h3>
              <p className="text-xs text-[#2A2520]/60 italic font-serif">
                Used for main headings, hero banners, section subtitles, and testimonials. Large sizes use generous letter-spacing.
              </p>
            </div>
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#2A2520]/50 block">Body Sans (Inter / Humanist)</span>
              <p className="text-base leading-relaxed text-[#2A2520]/80">
                The quick brown fox jumps over the lazy dog. Nivana is a physician-supervised peptide and longevity wellness practice delivering pharmaceutical-grade protocols with clinical precision.
              </p>
              <p className="text-sm text-[#2A2520]/70">
                Small caption: Compounded medications may be prescribed by physicians but have not been FDA-regulated.
              </p>
              <p className="text-xs font-bold uppercase tracking-widest text-[#B89968]">
                TRACKING WIDE BADGE
              </p>
            </div>
          </div>
        </section>

        {/* 2. COLOR SWATCHES */}
        <section className="space-y-6">
          <h2 className="font-serif text-2xl font-bold border-b border-[#E2D9C7] pb-3 text-[#B89968]">02. Spa-Luxe Palette</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            
            {/* Swatch 1 */}
            <div className="bg-[#F8F4EC] border border-[#E2D9C7] rounded-2xl p-4 flex flex-col justify-between h-32">
              <span className="text-xs font-bold text-[#2A2520]">Ivory</span>
              <div>
                <span className="block text-[10px] text-[#2A2520]/60">#F8F4EC</span>
                <span className="block text-[9px] text-[#2A2520]/40 uppercase mt-0.5">Primary BG</span>
              </div>
            </div>

            {/* Swatch 2 */}
            <div className="bg-[#EFE8DA] border border-[#E2D9C7] rounded-2xl p-4 flex flex-col justify-between h-32">
              <span className="text-xs font-bold text-[#2A2520]">Warm Cream</span>
              <div>
                <span className="block text-[10px] text-[#2A2520]/60">#EFE8DA</span>
                <span className="block text-[9px] text-[#2A2520]/40 uppercase mt-0.5">Secondary BG</span>
              </div>
            </div>

            {/* Swatch 3 */}
            <div className="bg-[#2A2520] border border-[#E2D9C7]/20 rounded-2xl p-4 flex flex-col justify-between h-32 text-[#F8F4EC]">
              <span className="text-xs font-bold">Espresso</span>
              <div>
                <span className="block text-[10px] text-[#F8F4EC]/60">#2A2520</span>
                <span className="block text-[9px] text-[#F8F4EC]/40 uppercase mt-0.5">Primary Text / Dark BG</span>
              </div>
            </div>

            {/* Swatch 4 */}
            <div className="bg-[#B89968] border border-[#E2D9C7]/20 rounded-2xl p-4 flex flex-col justify-between h-32 text-white">
              <span className="text-xs font-bold">Accent Gold</span>
              <div>
                <span className="block text-[10px] text-white/60">#B89968</span>
                <span className="block text-[9px] text-white/40 uppercase mt-0.5">Primary Accent / CTAs</span>
              </div>
            </div>

            {/* Swatch 5 */}
            <div className="bg-[#A8B59A] border border-[#E2D9C7]/20 rounded-2xl p-4 flex flex-col justify-between h-32 text-white">
              <span className="text-xs font-bold">Sage Muted</span>
              <div>
                <span className="block text-[10px] text-white/60">#A8B59A</span>
                <span className="block text-[9px] text-white/40 uppercase mt-0.5">Healing & Recovery</span>
              </div>
            </div>

            {/* Swatch 6 */}
            <div className="bg-[#C9A695] border border-[#E2D9C7]/20 rounded-2xl p-4 flex flex-col justify-between h-32 text-white">
              <span className="text-xs font-bold">Soft Clay</span>
              <div>
                <span className="block text-[10px] text-white/60">#C9A695</span>
                <span className="block text-[9px] text-white/40 uppercase mt-0.5">Beauty & Aesthetics</span>
              </div>
            </div>

          </div>
        </section>

        {/* 3. BUTTONS */}
        <section className="space-y-6">
          <h2 className="font-serif text-2xl font-bold border-b border-[#E2D9C7] pb-3 text-[#B89968]">03. Interactive Buttons</h2>
          <div className="flex flex-wrap gap-6 items-center">
            
            {/* Primary Button */}
            <div className="space-y-2 text-center">
              <span className="text-[10px] font-bold text-[#2A2520]/50 uppercase block">Primary Fill</span>
              <button className="px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-[#B89968] text-[#F8F4EC] hover:bg-[#8E7449] transition-all shadow-md">
                Start Consultation
              </button>
            </div>

            {/* Secondary Button */}
            <div className="space-y-2 text-center">
              <span className="text-[10px] font-bold text-[#2A2520]/50 uppercase block">Secondary Border</span>
              <button className="px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-widest border border-[#B89968] text-[#8E7449] hover:bg-[#B89968]/5 transition-all">
                Explore Treatments
              </button>
            </div>

            {/* Dark Button */}
            <div className="space-y-2 text-center">
              <span className="text-[10px] font-bold text-[#2A2520]/50 uppercase block">Dark Solid</span>
              <button className="px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-[#2A2520] text-[#F8F4EC] hover:bg-[#B89968] transition-all">
                View Protocol Details
              </button>
            </div>

          </div>
        </section>

        {/* 4. CARD GRADIENTS & PANELS */}
        <section className="space-y-6">
          <h2 className="font-serif text-2xl font-bold border-b border-[#E2D9C7] pb-3 text-[#B89968]">04. Gradient Panel Layouts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Panel 1 */}
            <div className="bg-[#EFE8DA]/40 border border-[#E2D9C7] rounded-3xl p-6 relative overflow-hidden h-48 flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#B89968] to-[#EFE8DA] opacity-15"></div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#B89968] bg-[#B89968]/10 px-2 py-0.5 rounded-full">Metabolic</span>
                <h3 className="font-serif text-xl font-bold mt-3">Weight Loss</h3>
              </div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#B89968] flex items-center gap-0.5">
                Explore <ChevronRight className="h-3 w-3" />
              </span>
            </div>

            {/* Panel 2 */}
            <div className="bg-[#EFE8DA]/40 border border-[#E2D9C7] rounded-3xl p-6 relative overflow-hidden h-48 flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#A8B59A] to-[#EFE8DA] opacity-20"></div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#A8B59A] bg-[#A8B59A]/10 px-2 py-0.5 rounded-full">Healing</span>
                <h3 className="font-serif text-xl font-bold mt-3">Injury Recovery</h3>
              </div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#A8B59A] flex items-center gap-0.5">
                Explore <ChevronRight className="h-3 w-3" />
              </span>
            </div>

            {/* Panel 3 */}
            <div className="bg-[#EFE8DA]/40 border border-[#E2D9C7] rounded-3xl p-6 relative overflow-hidden h-48 flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#C9A695] to-[#EFE8DA] opacity-20"></div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#C9A695] bg-[#C9A695]/10 px-2 py-0.5 rounded-full">Aesthetics</span>
                <h3 className="font-serif text-xl font-bold mt-3">Beauty & Skin</h3>
              </div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#C9A695] flex items-center gap-0.5">
                Explore <ChevronRight className="h-3 w-3" />
              </span>
            </div>

          </div>
        </section>

        {/* 5. ALERTS & DISCLAIMERS */}
        <section className="space-y-6">
          <h2 className="font-serif text-2xl font-bold border-b border-[#E2D9C7] pb-3 text-[#B89968]">05. Safety Alerts & Compliance</h2>
          <div className="space-y-4">
            
            {/* Compounding Disclaimer */}
            <div className="bg-[#F8F4EC] border border-[#E2D9C7] rounded-2xl p-4 flex gap-3 text-xs text-[#2A2520]/75 leading-relaxed max-w-xl">
              <Info className="h-5 w-5 text-[#B89968] shrink-0 mt-0.5" />
              <p>
                Compounded medications may be prescribed by physicians but have not been FDA-regulated for safety, effectiveness, or quality. FDA-approved alternatives may be available.
              </p>
            </div>

            {/* GLP-1 Boxed Warning */}
            <div className="bg-[#C9A695]/10 border border-[#C9A695]/40 rounded-2xl p-5 flex gap-3 text-xs text-[#2A2520]/80 leading-relaxed max-w-xl">
              <AlertOctagon className="h-5 w-5 text-[#C9A695] shrink-0 mt-0.5" />
              <div>
                <span className="font-bold block text-[#C9A695] uppercase tracking-wider mb-1">GLP-1 Warning</span>
                <p>
                  Contraindicated in individuals with personal or family history of medullary thyroid carcinoma. Stop use and contact a doctor if node symptoms develop.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* 6. MODALS PREVIEW */}
        <section className="space-y-6">
          <h2 className="font-serif text-2xl font-bold border-b border-[#E2D9C7] pb-3 text-[#B89968]">06. Interactive Modals</h2>
          <div>
            <button
              onClick={() => setSafetyOpen(true)}
              className="px-8 py-3.5 bg-[#2A2520] hover:bg-[#B89968] text-[#F8F4EC] rounded-full text-xs font-semibold uppercase tracking-widest transition-colors"
            >
              Open Safety Modal Preview
            </button>
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
