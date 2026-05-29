import React from "react";
import Link from "next/link";
import { ChevronDown, ArrowRight } from "lucide-react";

export default function FAQPage() {
  return (
    <div className="min-h-screen pb-24 font-sans text-[#F7F2EC] relative z-0 selection:bg-[#E8B29A]/30">
      
      {/* Background Video Backdrop */}
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
      {/* Dark overlay styles */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#0B0A09] via-[#0B0A09]/95 to-[#E8B29A]/10 -z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0B0A09]/60 to-[#0B0A09] -z-10"></div>

      {/* Hero Header */}
      <section className="relative py-24 border-b border-white/10 overflow-hidden z-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 relative z-10 animate-fade-up">
          <div className="flex items-center justify-center gap-2">
            <span className="h-[1px] w-6 bg-[#E8B29A]/20"></span>
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#E8B29A] bg-[#E8B29A]/10 border border-[#E8B29A]/20 px-3 py-1 rounded-full inline-block font-semibold">
              COMMON INQUIRIES
            </span>
            <span className="h-[1px] w-6 bg-[#E8B29A]/20"></span>
          </div>
          <h1 className="font-sans text-5xl sm:text-7xl font-extralight tracking-tight text-white leading-none">
            Frequently Asked Questions
          </h1>
          <p className="text-sm sm:text-base text-white/70 max-w-xl mx-auto leading-relaxed font-sans font-light">
            Everything you need to know about our physician-supervised telemedicine model, sterile compounding pharmacy standards, shipping, and billing.
          </p>
        </div>
      </section>

      {/* FAQ Groups */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 space-y-20 relative z-10 animate-fade-up">
        
        {/* Category 1: Telehealth & Medical */}
        <div className="space-y-6">
          <div className="flex items-center gap-4 border-b border-white/10 pb-4">
            <span className="text-[10px] font-mono text-[#E8B29A] font-bold">[ 01 ]</span>
            <h2 className="text-[11px] font-mono uppercase tracking-widest text-[#E8B29A]/80 font-bold">
              Telehealth &amp; Medical Model
            </h2>
          </div>
          
          <div className="space-y-4">
            <details className="group border border-white/10 rounded-2xl p-4 bg-white/5 backdrop-blur-md transition-all duration-300 [&_summary::-webkit-details-marker]:hidden hover:border-[#E8B29A]/30">
              <summary className="flex justify-between items-center cursor-pointer py-1 list-none">
                <span className="font-serif text-base sm:text-lg font-light text-white group-hover:text-[#E8B29A] transition-colors">
                  Do I need a prescription to order from Valara?
                </span>
                <span className="transition group-open:-rotate-180">
                  <ChevronDown className="h-5 w-5 text-white/60 group-hover:text-[#E8B29A] transition-colors" />
                </span>
              </summary>
              <div className="h-[0.5px] bg-white/10 my-3 group-open:block hidden"></div>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-sans font-light pt-1">
                Yes. Valara Rx is a physician-supervised clinical practice. You cannot purchase peptides directly. You must complete our health history intake screening, after which a board-certified physician will evaluate your baselines and, if clinically appropriate, issue a customized prescription.
              </p>
            </details>

            <details className="group border border-white/10 rounded-2xl p-4 bg-white/5 backdrop-blur-md transition-all duration-300 [&_summary::-webkit-details-marker]:hidden hover:border-[#E8B29A]/30">
              <summary className="flex justify-between items-center cursor-pointer py-1 list-none">
                <span className="font-serif text-base sm:text-lg font-light text-white group-hover:text-[#E8B29A] transition-colors">
                  How does the physician consultation occur?
                </span>
                <span className="transition group-open:-rotate-180">
                  <ChevronDown className="h-5 w-5 text-white/60 group-hover:text-[#E8B29A] transition-colors" />
                </span>
              </summary>
              <div className="h-[0.5px] bg-white/10 my-3 group-open:block hidden"></div>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-sans font-light pt-1">
                Your medical intake is fully reviewed by a U.S. board-certified physician within 24 hours. Depending on your state laws and the type of therapy requested, this consultation may take place asynchronously (through portal file review and messaging) or via a brief 3-minute video consultation scheduled directly through our secure HIPAA portal.
              </p>
            </details>

            <details className="group border border-white/10 rounded-2xl p-4 bg-white/5 backdrop-blur-md transition-all duration-300 [&_summary::-webkit-details-marker]:hidden hover:border-[#E8B29A]/30">
              <summary className="flex justify-between items-center cursor-pointer py-1 list-none">
                <span className="font-serif text-base sm:text-lg font-light text-white group-hover:text-[#E8B29A] transition-colors">
                  Do I need to submit bloodwork?
                </span>
                <span className="transition group-open:-rotate-180">
                  <ChevronDown className="h-5 w-5 text-white/60 group-hover:text-[#E8B29A] transition-colors" />
                </span>
              </summary>
              <div className="h-[0.5px] bg-white/10 my-3 group-open:block hidden"></div>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-sans font-light pt-1">
                For metabolic regulators (SEMA-X) and growth hormone secretagogues (Sermorelin/Ipamorelin), a recent blood panel (within 6 months) showing liver, kidney, glycemic, and endocrine baselines is mandatory. If you do not have recent bloodwork, our care team will issue a diagnostic lab requisition form for you to visit a local Quest Diagnostics or Labcorp facility.
              </p>
            </details>
          </div>
        </div>

        {/* Category 2: Sourcing & Pharmacy */}
        <div className="space-y-6">
          <div className="flex items-center gap-4 border-b border-white/10 pb-4">
            <span className="text-[10px] font-mono text-[#8FA89B] font-bold">[ 02 ]</span>
            <h2 className="text-[11px] font-mono uppercase tracking-widest text-[#8FA89B]/80 font-bold">
              Sourcing &amp; Sterile Pharmacy Standards
            </h2>
          </div>
          
          <div className="space-y-4">
            <details className="group border border-white/10 rounded-2xl p-4 bg-white/5 backdrop-blur-md transition-all duration-300 [&_summary::-webkit-details-marker]:hidden hover:border-[#8FA89B]/30">
              <summary className="flex justify-between items-center cursor-pointer py-1 list-none">
                <span className="font-serif text-base sm:text-lg font-light text-white group-hover:text-[#8FA89B] transition-colors">
                  Where do the peptides come from?
                </span>
                <span className="transition group-open:-rotate-180">
                  <ChevronDown className="h-5 w-5 text-white/60 group-hover:text-[#8FA89B] transition-colors" />
                </span>
              </summary>
              <div className="h-[0.5px] bg-white/10 my-3 group-open:block hidden"></div>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-sans font-light pt-1">
                Valara sources exclusively from U.S.-based, state-licensed 503A or 503B compounding pharmacies. These pharmacies operate under strict state regulations and federal USP &lt;795&gt; and &lt;797&gt; guidelines for sterile product preparation. We disclose compounding pharmacy identities transparently.
              </p>
            </details>

            <details className="group border border-white/10 rounded-2xl p-4 bg-white/5 backdrop-blur-md transition-all duration-300 [&_summary::-webkit-details-marker]:hidden hover:border-[#8FA89B]/30">
              <summary className="flex justify-between items-center cursor-pointer py-1 list-none">
                <span className="font-serif text-base sm:text-lg font-light text-white group-hover:text-[#8FA89B] transition-colors">
                  Are compounding medications FDA-approved?
                </span>
                <span className="transition group-open:-rotate-180">
                  <ChevronDown className="h-5 w-5 text-white/60 group-hover:text-[#8FA89B] transition-colors" />
                </span>
              </summary>
              <div className="h-[0.5px] bg-white/10 my-3 group-open:block hidden"></div>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-sans font-light pt-1">
                Compounded medications are prepared for individual patients and are not pre-approved by the FDA. Compounded formulations are prepared by licensed pharmacists under prescription orders, utilizing ingredients sourced from FDA-registered chemical facilities. FDA-approved retail alternatives may exist for certain therapeutic classes.
              </p>
            </details>
          </div>
        </div>

        {/* Category 3: Shipping & Logistics */}
        <div className="space-y-6">
          <div className="flex items-center gap-4 border-b border-white/10 pb-4">
            <span className="text-[10px] font-mono text-[#E8B29A] font-bold">[ 03 ]</span>
            <h2 className="text-[11px] font-mono uppercase tracking-widest text-[#E8B29A]/80 font-bold">
              Shipping &amp; Logistics
            </h2>
          </div>
          
          <div className="space-y-4">
            <details className="group border border-white/10 rounded-2xl p-4 bg-white/5 backdrop-blur-md transition-all duration-300 [&_summary::-webkit-details-marker]:hidden hover:border-[#E8B29A]/30">
              <summary className="flex justify-between items-center cursor-pointer py-1 list-none">
                <span className="font-serif text-base sm:text-lg font-light text-white group-hover:text-[#E8B29A] transition-colors">
                  How are the peptides shipped?
                </span>
                <span className="transition group-open:-rotate-180">
                  <ChevronDown className="h-5 w-5 text-white/60 group-hover:text-[#E8B29A] transition-colors" />
                </span>
              </summary>
              <div className="h-[0.5px] bg-white/10 my-3 group-open:block hidden"></div>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-sans font-light pt-1">
                Peptides are fragile protein chains that can degrade in warm environments. To prevent this, our partner pharmacies ship them inside insulated temperature-controlled packages using frozen gel inserts. They are dispatched via overnight or two-day carrier. Mixed peptides must be placed in a standard home refrigerator immediately upon delivery.
              </p>
            </details>

            <details className="group border border-white/10 rounded-2xl p-4 bg-white/5 backdrop-blur-md transition-all duration-300 [&_summary::-webkit-details-marker]:hidden hover:border-[#E8B29A]/30">
              <summary className="flex justify-between items-center cursor-pointer py-1 list-none">
                <span className="font-serif text-base sm:text-lg font-light text-white group-hover:text-[#E8B29A] transition-colors">
                  Do you ship to all states?
                </span>
                <span className="transition group-open:-rotate-180">
                  <ChevronDown className="h-5 w-5 text-white/60 group-hover:text-[#E8B29A] transition-colors" />
                </span>
              </summary>
              <div className="h-[0.5px] bg-white/10 my-3 group-open:block hidden"></div>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-sans font-light pt-1">
                We currently ship to 48 states. Due to local state board compounding pharmacy restrictions, we are unable to process intakes or dispatch peptide prescriptions to residents of **California** and **New York**.
              </p>
            </details>
          </div>
        </div>

        {/* Category 4: Billing & Insurance */}
        <div className="space-y-6">
          <div className="flex items-center gap-4 border-b border-white/10 pb-4">
            <span className="text-[10px] font-mono text-[#8FA89B] font-bold">[ 04 ]</span>
            <h2 className="text-[11px] font-mono uppercase tracking-widest text-[#8FA89B]/80 font-bold">
              Billing, Insurance, &amp; HSA/FSA
            </h2>
          </div>
          
          <div className="space-y-4">
            <details className="group border border-white/10 rounded-2xl p-4 bg-white/5 backdrop-blur-md transition-all duration-300 [&_summary::-webkit-details-marker]:hidden hover:border-[#8FA89B]/30">
              <summary className="flex justify-between items-center cursor-pointer py-1 list-none">
                <span className="font-serif text-base sm:text-lg font-light text-white group-hover:text-[#8FA89B] transition-colors">
                  Does Valara accept health insurance?
                </span>
                <span className="transition group-open:-rotate-180">
                  <ChevronDown className="h-5 w-5 text-white/60 group-hover:text-[#8FA89B] transition-colors" />
                </span>
              </summary>
              <div className="h-[0.5px] bg-white/10 my-3 group-open:block hidden"></div>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-sans font-light pt-1">
                No. Valara operates under a flat-rate self-pay clinical model. We do not bill health insurance providers, nor do we file clinical claims on behalf of patients.
              </p>
            </details>

            <details className="group border border-white/10 rounded-2xl p-4 bg-white/5 backdrop-blur-md transition-all duration-300 [&_summary::-webkit-details-marker]:hidden hover:border-[#8FA89B]/30">
              <summary className="flex justify-between items-center cursor-pointer py-1 list-none">
                <span className="font-serif text-base sm:text-lg font-light text-white group-hover:text-[#8FA89B] transition-colors">
                  Can I use my HSA or FSA card?
                </span>
                <span className="transition group-open:-rotate-180">
                  <ChevronDown className="h-5 w-5 text-white/60 group-hover:text-[#8FA89B] transition-colors" />
                </span>
              </summary>
              <div className="h-[0.5px] bg-white/10 my-3 group-open:block hidden"></div>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-sans font-light pt-1">
                Yes. Because our protocols are prescribed by licensed medical practitioners for specific clinical goals, they are generally eligible for Health Savings Account (HSA) and Flexible Spending Account (FSA) reimbursement. We can provide itemized medical receipts upon request.
              </p>
            </details>
          </div>
        </div>

      </section>

      {/* Pre-footer CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="relative group overflow-hidden rounded-3xl border border-white/10 p-8 sm:p-12 text-center space-y-6 bg-black/40 shadow-xl backdrop-blur-md z-0">
          <div className="absolute inset-0 w-full h-full -z-20 opacity-30">
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
          <div className="absolute inset-0 bg-[#0B0A09]/80 -z-10"></div>
          
          <h2 className="font-serif text-2xl sm:text-3xl font-light tracking-wide text-white">
            Still have clinical questions?
          </h2>
          <p className="text-xs sm:text-sm text-white/70 max-w-md mx-auto leading-relaxed font-sans font-light">
            Submit your health screening form today. Our medical team will review your history and discuss detailed protocols on your call.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link 
              href="/intake"
              className="inline-flex items-center gap-1.5 px-8 py-3.5 bg-[#E8B29A] text-[#0B0A09] hover:bg-white hover:text-[#0B0A09] rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-md font-mono"
            >
              Start Free Assessment <ArrowRight className="h-4.5 w-4.5" />
            </Link>
            <Link 
              href="/contact"
              className="inline-flex items-center gap-1.5 px-8 py-3.5 bg-transparent border border-white/20 text-white hover:bg-white/10 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 font-mono"
            >
              Contact Coordinators
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
