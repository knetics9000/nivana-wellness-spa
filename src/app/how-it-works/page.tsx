import React from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  Users, 
  Clipboard, 
  Truck, 
  MessageSquare, 
  ShieldCheck, 
  Layers, 
  FlaskConical 
} from "lucide-react";

export default function HowItWorksPage() {
  return (
    <div className="bg-[#F8F4EC] text-[#2A2520] font-sans pb-24">
      {/* Hero Header */}
      <section className="bg-[#EFE8DA] py-16 border-b border-[#E2D9C7] text-[#2A2520]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#B89968]">The Telehealth Protocol</span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight">How Nivana Works</h1>
          <p className="text-sm sm:text-base text-[#2A2520]/75 max-w-xl mx-auto leading-relaxed">
            We have modernized clinical access to peptide therapies, maintaining rigorous medical oversight while eliminating the friction of physical clinics.
          </p>
        </div>
      </section>

      {/* 3 Step Details */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-16">
        
        {/* Step 1 */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-4 flex md:flex-col items-center md:items-start gap-4">
            <span className="h-12 w-12 rounded-full bg-[#B89968]/15 text-[#8E7449] flex items-center justify-center font-serif font-bold text-lg shrink-0">
              01
            </span>
            <div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#2A2520]">Online Intake &amp; Health History</h2>
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#B89968] block mt-1">Takes ~5 Minutes</span>
            </div>
          </div>
          <div className="md:col-span-8 space-y-4 text-xs sm:text-sm text-[#2A2520]/75 leading-relaxed font-sans">
            <p>
              Your protocol begins with our comprehensive health history assessment. You will share your primary wellness goals (whether focused on metabolic correction, sports recovery, cognitive enhancement, or longevity), your biological baselines (age, weight, height), and relevant clinical disclosures (existing conditions, medications, active allergies).
            </p>
            <p>
              Depending on the specific peptide group requested (such as growth hormone secretagogues or glycemic regulators), we may require a recent blood diagnostic panel. If you have run labs within the last 6 months, you can upload them directly. Otherwise, our clinical coordinators will generate a lab order for you to visit a local Quest Diagnostics or Labcorp facility.
            </p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-t border-[#E2D9C7]/50 pt-16">
          <div className="md:col-span-4 flex md:flex-col items-center md:items-start gap-4">
            <span className="h-12 w-12 rounded-full bg-[#B89968]/15 text-[#8E7449] flex items-center justify-center font-serif font-bold text-lg shrink-0">
              02
            </span>
            <div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#2A2520]">Physician Evaluation</h2>
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#B89968] block mt-1">Completed within 24 Hours</span>
            </div>
          </div>
          <div className="md:col-span-8 space-y-4 text-xs sm:text-sm text-[#2A2520]/75 leading-relaxed font-sans">
            <p>
              Unlike automated clinics, a U.S. board-certified physician reviews your complete file. They assess your eligibility, screen for safety contraindications (like personal history of endocrine tumors or pregnancy), and determine if peptide therapy is a safe and effective pathway for you.
            </p>
            <p>
              If cleared, the physician writes a customized protocol, establishing exact titration (starting dose and progressive increases), administration guidelines (reconstitution math, injection schedules), and follow-up markers. In states that require face-to-face telemedicine, our portal will prompt you to schedule a brief 3-minute video consultation with the reviewing doctor.
            </p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-t border-[#E2D9C7]/50 pt-16">
          <div className="md:col-span-4 flex md:flex-col items-center md:items-start gap-4">
            <span className="h-12 w-12 rounded-full bg-[#B89968]/15 text-[#8E7449] flex items-center justify-center font-serif font-bold text-lg shrink-0">
              03
            </span>
            <div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#2A2520]">Sterile Dispatch &amp; Logistics</h2>
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#B89968] block mt-1">Discreet Delivery</span>
            </div>
          </div>
          <div className="md:col-span-8 space-y-4 text-xs sm:text-sm text-[#2A2520]/75 leading-relaxed font-sans">
            <p>
              Your prescription is sent directly to one of our licensed partner compounding pharmacies in the United States. They prepare the medication under sterile compounding regulations.
            </p>
            <p>
              Because peptides are sensitive temperature-dependent proteins, they are packed in insulated, cold-chain containers with gel ice packs and shipped via expedited carrier. Your shipment includes the peptide vial, sterile syringes, alcohol prep swabs, bacteriostatic water, and clear physical administration guides.
            </p>
          </div>
        </div>

      </section>

      {/* Ongoing Support Section */}
      <section className="bg-[#EFE8DA]/40 border-t border-b border-[#E2D9C7] py-20 mt-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
          <div className="max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#B89968]">concierge clinical care</span>
            <h2 className="font-serif text-3xl font-bold text-[#2A2520]">Continuous oversight on your schedule</h2>
            <p className="text-xs sm:text-sm text-[#2A2520]/70 leading-relaxed font-sans">
              Your Nivana protocol doesn&apos;t end when the package arrives. We provide the clinical coordination you need to succeed safely.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="bg-[#F8F4EC] border border-[#E2D9C7] rounded-2xl p-6 space-y-3">
              <div className="h-10 w-10 rounded-full bg-[#B89968]/10 text-[#8E7449] flex items-center justify-center">
                <MessageSquare className="h-5 w-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#2A2520]">Concierge Portal Messenger</h3>
              <p className="text-xs text-[#2A2520]/75 leading-relaxed font-sans">
                Access your care team directly to ask questions about reconstitution math, injection techniques, or managing mild side effects.
              </p>
            </div>

            <div className="bg-[#F8F4EC] border border-[#E2D9C7] rounded-2xl p-6 space-y-3">
              <div className="h-10 w-10 rounded-full bg-[#B89968]/10 text-[#8E7449] flex items-center justify-center">
                <Layers className="h-5 w-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#2A2520]">Medication Titration logs</h3>
              <p className="text-xs text-[#2A2520]/75 leading-relaxed font-sans">
                Track your weight loss, metabolic baselines, or joint pain recovery markers within your patient profile, allowing your physician to adjust dosage safely.
              </p>
            </div>

            <div className="bg-[#F8F4EC] border border-[#E2D9C7] rounded-2xl p-6 space-y-3">
              <div className="h-10 w-10 rounded-full bg-[#B89968]/10 text-[#8E7449] flex items-center justify-center">
                <FlaskConical className="h-5 w-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#2A2520]">Bi-Annual Blood Panels</h3>
              <p className="text-xs text-[#2A2520]/75 leading-relaxed font-sans">
                Every 6 months, we schedule follow-up lab screenings to ensure your levels (such as IGF-1, insulin, liver and kidney markers) remain in optimal ranges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pre-footer CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 text-center space-y-6">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-wide">
          Ready to speak with a physician?
        </h2>
        <p className="text-xs sm:text-sm text-[#2A2520]/70 max-w-md mx-auto leading-relaxed font-sans">
          Begin your medical intake today. A U.S. board-certified doctor will evaluate your health baselines and design your personalized scheduling protocols.
        </p>
        <div className="pt-4">
          <Link 
            href="/intake"
            className="inline-flex items-center gap-1.5 px-8 py-3.5 bg-[#B89968] hover:bg-[#8E7449] text-[#F8F4EC] rounded-full text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm"
          >
            Start Free Assessment <ArrowRight className="h-4.5 w-4.5" />
          </Link>
        </div>
      </section>

    </div>
  );
}
