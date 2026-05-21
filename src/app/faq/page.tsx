import React from "react";
import Link from "next/link";
import { ChevronDown, HelpCircle, ArrowRight } from "lucide-react";

export default function FAQPage() {
  return (
    <div className="bg-[#F8F4EC] text-[#2A2520] font-sans pb-24">
      {/* Hero Header */}
      <section className="bg-[#EFE8DA] py-16 border-b border-[#E2D9C7] text-[#2A2520]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#B89968]">Common Inquiries</span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight">Frequently Asked Questions</h1>
          <p className="text-sm sm:text-base text-[#2A2520]/75 max-w-xl mx-auto leading-relaxed">
            Everything you need to know about our physician-supervised telemedicine model, sterile pharmacy compounding, shipping, and billing.
          </p>
        </div>
      </section>

      {/* FAQ Groups */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-12">
        
        {/* Category 1: Telehealth & Medical */}
        <div className="space-y-4">
          <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#B89968] border-b border-[#E2D9C7] pb-2">
            Telehealth &amp; Medical Model
          </h2>
          
          <div className="space-y-2">
            <details className="group border-b border-[#E2D9C7]/50 pb-4 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex justify-between items-center cursor-pointer py-3 list-none">
                <span className="font-serif text-base sm:text-lg font-semibold text-[#2A2520] group-hover:text-[#B89968] transition-colors">
                  Do I need a prescription to order from Nivana?
                </span>
                <span className="transition group-open:-rotate-180">
                  <ChevronDown className="h-5 w-5 text-[#B89968]" />
                </span>
              </summary>
              <p className="text-xs sm:text-sm text-[#2A2520]/80 leading-relaxed pl-1 pt-1 font-sans">
                Yes. Nivana is a physician-supervised clinical practice. You cannot purchase peptides directly. You must complete our health history intake screening, after which a board-certified physician will evaluate your baselines and, if clinically appropriate, issue a customized prescription.
              </p>
            </details>

            <details className="group border-b border-[#E2D9C7]/50 pb-4 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex justify-between items-center cursor-pointer py-3 list-none">
                <span className="font-serif text-base sm:text-lg font-semibold text-[#2A2520] group-hover:text-[#B89968] transition-colors">
                  How does the physician consultation occur?
                </span>
                <span className="transition group-open:-rotate-180">
                  <ChevronDown className="h-5 w-5 text-[#B89968]" />
                </span>
              </summary>
              <p className="text-xs sm:text-sm text-[#2A2520]/80 leading-relaxed pl-1 pt-1 font-sans">
                Your medical intake is fully reviewed by a U.S. board-certified physician within 24 hours. Depending on your state laws and the type of therapy requested, this consultation may take place asynchronously (through portal file review and messaging) or via a brief 3-minute video consultation scheduled directly through our secure HIPAA portal.
              </p>
            </details>

            <details className="group border-b border-[#E2D9C7]/50 pb-4 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex justify-between items-center cursor-pointer py-3 list-none">
                <span className="font-serif text-base sm:text-lg font-semibold text-[#2A2520] group-hover:text-[#B89968] transition-colors">
                  Do I need to submit bloodwork?
                </span>
                <span className="transition group-open:-rotate-180">
                  <ChevronDown className="h-5 w-5 text-[#B89968]" />
                </span>
              </summary>
              <p className="text-xs sm:text-sm text-[#2A2520]/80 leading-relaxed pl-1 pt-1 font-sans">
                For metabolic regulators (Semaglutide/Tirzepatide) and growth hormone secretagogues (Sermorelin/Ipamorelin), a recent blood panel (within 6 months) showing liver, kidney, glycemic, and endocrine baselines is mandatory. If you do not have recent bloodwork, our care team will issue a diagnostic lab requisition form for you to visit a local Quest Diagnostics or Labcorp facility.
              </p>
            </details>
          </div>
        </div>

        {/* Category 2: Sourcing & Pharmacy */}
        <div className="space-y-4 pt-4">
          <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#B89968] border-b border-[#E2D9C7] pb-2">
            Sourcing &amp; Sterile Pharmacy Standards
          </h2>
          
          <div className="space-y-2">
            <details className="group border-b border-[#E2D9C7]/50 pb-4 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex justify-between items-center cursor-pointer py-3 list-none">
                <span className="font-serif text-base sm:text-lg font-semibold text-[#2A2520] group-hover:text-[#B89968] transition-colors">
                  Where do the peptides come from?
                </span>
                <span className="transition group-open:-rotate-180">
                  <ChevronDown className="h-5 w-5 text-[#B89968]" />
                </span>
              </summary>
              <p className="text-xs sm:text-sm text-[#2A2520]/80 leading-relaxed pl-1 pt-1 font-sans">
                Nivana sources exclusively from U.S.-based, state-licensed 503A or 503B compounding pharmacies. These pharmacies operate under strict state regulations and federal USP &lt;795&gt; and &lt;797&gt; guidelines for sterile product preparation. We disclose compounding pharmacy identities transparently.
              </p>
            </details>

            <details className="group border-b border-[#E2D9C7]/50 pb-4 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex justify-between items-center cursor-pointer py-3 list-none">
                <span className="font-serif text-base sm:text-lg font-semibold text-[#2A2520] group-hover:text-[#B89968] transition-colors">
                  Are compounding medications FDA-approved?
                </span>
                <span className="transition group-open:-rotate-180">
                  <ChevronDown className="h-5 w-5 text-[#B89968]" />
                </span>
              </summary>
              <p className="text-xs sm:text-sm text-[#2A2520]/80 leading-relaxed pl-1 pt-1 font-sans">
                Compounded medications are prepared for individual patients and are not pre-approved by the FDA. Compounded formulations are prepared by licensed pharmacists under prescription orders, utilizing ingredients sourced from FDA-registered chemical facilities. FDA-approved retail alternatives may exist for certain therapeutic classes.
              </p>
            </details>
          </div>
        </div>

        {/* Category 3: Shipping & Logistics */}
        <div className="space-y-4 pt-4">
          <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#B89968] border-b border-[#E2D9C7] pb-2">
            Shipping &amp; Logistics
          </h2>
          
          <div className="space-y-2">
            <details className="group border-b border-[#E2D9C7]/50 pb-4 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex justify-between items-center cursor-pointer py-3 list-none">
                <span className="font-serif text-base sm:text-lg font-semibold text-[#2A2520] group-hover:text-[#B89968] transition-colors">
                  How are the peptides shipped?
                </span>
                <span className="transition group-open:-rotate-180">
                  <ChevronDown className="h-5 w-5 text-[#B89968]" />
                </span>
              </summary>
              <p className="text-xs sm:text-sm text-[#2A2520]/80 leading-relaxed pl-1 pt-1 font-sans">
                Peptides are fragile protein chains that can degrade in warm environments. To prevent this, our partner pharmacies ship them inside insulated temperature-controlled packages using frozen gel inserts. They are dispatched via overnight or two-day carrier. Mixed peptides must be placed in a standard home refrigerator immediately upon delivery.
              </p>
            </details>

            <details className="group border-b border-[#E2D9C7]/50 pb-4 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex justify-between items-center cursor-pointer py-3 list-none">
                <span className="font-serif text-base sm:text-lg font-semibold text-[#2A2520] group-hover:text-[#B89968] transition-colors">
                  Do you ship to all states?
                </span>
                <span className="transition group-open:-rotate-180">
                  <ChevronDown className="h-5 w-5 text-[#B89968]" />
                </span>
              </summary>
              <p className="text-xs sm:text-sm text-[#2A2520]/80 leading-relaxed pl-1 pt-1 font-sans">
                We currently ship to 48 states. Due to local state board compounding pharmacy restrictions, we are unable to process intakes or dispatch peptide prescriptions to residents of **California** and **New York**.
              </p>
            </details>
          </div>
        </div>

        {/* Category 4: Billing & Insurance */}
        <div className="space-y-4 pt-4">
          <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#B89968] border-b border-[#E2D9C7] pb-2">
            Billing, Insurance, &amp; HSA/FSA
          </h2>
          
          <div className="space-y-2">
            <details className="group border-b border-[#E2D9C7]/50 pb-4 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex justify-between items-center cursor-pointer py-3 list-none">
                <span className="font-serif text-base sm:text-lg font-semibold text-[#2A2520] group-hover:text-[#B89968] transition-colors">
                  Does Nivana accept health insurance?
                </span>
                <span className="transition group-open:-rotate-180">
                  <ChevronDown className="h-5 w-5 text-[#B89968]" />
                </span>
              </summary>
              <p className="text-xs sm:text-sm text-[#2A2520]/80 leading-relaxed pl-1 pt-1 font-sans">
                No. Nivana operates under a flat-rate self-pay clinical model. We do not bill health insurance providers, nor do we file clinical claims on behalf of patients.
              </p>
            </details>

            <details className="group border-b border-[#E2D9C7]/50 pb-4 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex justify-between items-center cursor-pointer py-3 list-none">
                <span className="font-serif text-base sm:text-lg font-semibold text-[#2A2520] group-hover:text-[#B89968] transition-colors">
                  Can I use my HSA or FSA card?
                </span>
                <span className="transition group-open:-rotate-180">
                  <ChevronDown className="h-5 w-5 text-[#B89968]" />
                </span>
              </summary>
              <p className="text-xs sm:text-sm text-[#2A2520]/80 leading-relaxed pl-1 pt-1 font-sans">
                Yes. Because our protocols are prescribed by licensed medical practitioners for specific clinical goals, they are generally eligible for Health Savings Account (HSA) and Flexible Spending Account (FSA) reimbursement. We can provide itemized medical receipts upon request.
              </p>
            </details>
          </div>
        </div>

      </section>

      {/* Pre-footer CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 text-center space-y-6">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-wide">
          Still have clinical questions?
        </h2>
        <p className="text-xs sm:text-sm text-[#2A2520]/70 max-w-md mx-auto leading-relaxed font-sans">
          Submit your health screening form today. Our medical team will review your history and discuss detailed protocols on your call.
        </p>
        <div className="pt-4 flex justify-center gap-4">
          <Link 
            href="/intake"
            className="inline-flex items-center gap-1.5 px-8 py-3.5 bg-[#B89968] hover:bg-[#8E7449] text-[#F8F4EC] rounded-full text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm"
          >
            Start Free Assessment <ArrowRight className="h-4.5 w-4.5" />
          </Link>
          <Link 
            href="/contact"
            className="inline-flex items-center gap-1.5 px-8 py-3.5 border border-[#B89968] text-[#8E7449] hover:bg-[#B89968]/5 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors"
          >
            Contact Coordinators
          </Link>
        </div>
      </section>
    </div>
  );
}
