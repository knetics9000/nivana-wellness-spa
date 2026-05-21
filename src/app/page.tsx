import React from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  Droplet, 
  Users, 
  Flame, 
  Brain, 
  Heart, 
  Activity, 
  Sparkles,
  Award,
  ChevronRight,
  ChevronDown,
  Lock,
  ThumbsUp,
  MessageSquare
} from "lucide-react";
import { CATEGORIES, PRODUCTS } from "@/data/products";

// Static mock reviews for the premium clinical experience
const REVIEWS = [
  {
    name: "Dr. Elizabeth S.",
    role: "Client & Functional Medicine Specialist",
    text: "As a physician, I was skeptical of online wellness clinics. Nivana is different. The medical intake is thorough, the formulations are pharmacy-grade, and the dosing guidelines are conservative and precise.",
    rating: 5,
    tag: "NAD+ Protocol"
  },
  {
    name: "Marcus K.",
    role: "Executive & Amateur Cyclist",
    text: "After using the BPC-157/TB-500 recovery protocol for my shoulder tear, my mobility returned in weeks, not months. The shipping is pristine, cold-packed, and clearly labeled.",
    rating: 5,
    tag: "Recovery Protocol"
  },
  {
    name: "Sarah M.",
    role: "Health Coordinator",
    text: "The metabolic support through Semaglutide has completely changed my relationship with food cravings. The constant 'food noise' is gone. The doctor actually read my bloodwork and adjusted my titration safely.",
    rating: 5,
    tag: "Metabolic Protocol"
  }
];

export default function HomePage() {
  // Highlight a few popular peptides on the landing page
  const featuredPeptides = PRODUCTS.filter(p => 
    ["semaglutide", "bpc-157", "nad-plus", "cjc-1295-ipamorelin-blend"].includes(p.id)
  );

  return (
    <div className="bg-[#F8F4EC] text-[#2A2520] font-sans">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-32 border-b border-[#E2D9C7]/35">
        {/* Soft background visual gradients */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#EFE8DA]/60 blur-3xl -z-10 animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-0 w-[350px] h-[350px] rounded-full bg-[#B89968]/5 blur-3xl -z-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-left animate-fade-up">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#B89968]/10 text-xs font-semibold uppercase tracking-wider text-[#8E7449]">
                <Sparkles className="h-3.5 w-3.5" /> Modern medicine, ancient calm
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2A2520] leading-[1.1] tracking-tight">
                Personalized peptide therapy, <br className="hidden sm:inline" />
                <span className="text-[#B89968] italic font-medium">supervised by physicians.</span>
              </h1>
              <p className="text-base sm:text-lg text-[#2A2520]/80 max-w-xl leading-relaxed">
                Pharmaceutical-grade protocols for weight, longevity, recovery, and the way you want to feel in your body. Delivered safely, straight to your door.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link 
                  href="/intake" 
                  className="px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-widest bg-[#B89968] text-[#F8F4EC] hover:bg-[#8E7449] transition-all duration-300 shadow-md hover:shadow-lg text-center flex items-center justify-center gap-2 group"
                >
                  Start Free Consultation
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  href="#catalog" 
                  className="px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-widest border border-[#B89968] text-[#8E7449] hover:bg-[#B89968]/5 transition-all text-center"
                >
                  Explore Treatments
                </Link>
              </div>
            </div>

            {/* Right Graphic Panel (Premium card collage mimicking IvyRx panels) */}
            <div className="lg:col-span-5 relative mt-6 lg:mt-0 animate-fade-up">
              <div className="relative mx-auto max-w-md bg-gradient-to-tr from-[#EFE8DA] to-[#F8F4EC] p-6 rounded-3xl border border-[#E2D9C7]/80 shadow-2xl overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#B89968]/10 rounded-full blur-xl"></div>
                
                {/* Visual Card 1: Physician Consult */}
                <div className="bg-[#F8F4EC]/95 backdrop-blur border border-[#E2D9C7] p-4 rounded-2xl shadow-sm mb-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-[#B89968]/10 flex items-center justify-center text-[#B89968]">
                      <Users className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-wider text-[#B89968] block">Step 01</span>
                      <span className="font-serif text-sm font-bold text-[#2A2520] block">Physician Screening</span>
                    </div>
                    <span className="ml-auto text-xs text-[#B89968] font-semibold bg-[#B89968]/10 px-2.5 py-0.5 rounded-full">Active</span>
                  </div>
                  <p className="text-xs text-[#2A2520]/70 mt-2 font-sans">
                    A U.S. board-certified physician reviews your bio-markers and goals to customize dosage.
                  </p>
                </div>

                {/* Visual Card 2: Compounded Pharmacy Packaging */}
                <div className="bg-[#F8F4EC]/95 backdrop-blur border border-[#E2D9C7] p-4 rounded-2xl shadow-sm mb-4 translate-x-3">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-[#A8B59A]/15 flex items-center justify-center text-[#A8B59A]">
                      <ShieldCheck className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-wider text-[#A8B59A] block">Step 02</span>
                      <span className="font-serif text-sm font-bold text-[#2A2520] block">503A Sterile Compounding</span>
                    </div>
                  </div>
                  <p className="text-xs text-[#2A2520]/70 mt-2 font-sans">
                    Prepared under USP &lt;797&gt; standards. Monitored for purity, cold-shipped to protect peptide chains.
                  </p>
                </div>

                {/* Visual Card 3: Patient Care */}
                <div className="bg-[#F8F4EC]/95 backdrop-blur border border-[#E2D9C7] p-4 rounded-2xl shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-[#C9A695]/15 flex items-center justify-center text-[#C9A695]">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-wider text-[#C9A695] block">Step 03</span>
                      <span className="font-serif text-sm font-bold text-[#2A2520] block">Care Concierge</span>
                    </div>
                  </div>
                  <p className="text-xs text-[#2A2520]/70 mt-2 font-sans">
                    Direct access to guides on reconstitution, injection techniques, and dosing logs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST STRIP */}
      <section className="bg-[#EFE8DA] py-6 border-b border-[#E2D9C7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center justify-center p-2">
              <span className="text-lg font-serif font-bold text-[#2A2520]">4.9 ★ · 10k+ Clients</span>
              <span className="text-[10px] uppercase tracking-widest text-[#B89968] font-semibold mt-1">Excellent Reviews</span>
            </div>
            <div className="flex flex-col items-center justify-center p-2 border-l border-[#E2D9C7]/50 lg:border-l">
              <span className="text-lg font-serif font-bold text-[#2A2520]">Board-Certified Physicians</span>
              <span className="text-[10px] uppercase tracking-widest text-[#B89968] font-semibold mt-1">Personalized Review</span>
            </div>
            <div className="flex flex-col items-center justify-center p-2 border-l border-[#E2D9C7]/50 lg:border-l">
              <span className="text-lg font-serif font-bold text-[#2A2520]">Discreet Cold Shipping</span>
              <span className="text-[10px] uppercase tracking-widest text-[#B89968] font-semibold mt-1">Temperature-Controlled</span>
            </div>
            <div className="flex flex-col items-center justify-center p-2 border-l border-[#E2D9C7]/50 lg:border-l">
              <span className="text-lg font-serif font-bold text-[#2A2520]">HSA / FSA Eligible</span>
              <span className="text-[10px] uppercase tracking-widest text-[#B89968] font-semibold mt-1">Itemized Receipts</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. HOW IT WORKS SECTION (IvyRx pattern) */}
      <section className="py-20 bg-[#F8F4EC] border-b border-[#E2D9C7]/35">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#B89968] block mb-2">How it works</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2A2520] tracking-wide">
              Three steps. No waiting rooms.
            </h2>
            <p className="text-sm text-[#2A2520]/75 mt-3">
              We have eliminated the friction of physical clinics without sacrificing clinical integrity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Step 1 */}
            <div className="relative p-6 rounded-2xl bg-[#EFE8DA]/40 border border-[#E2D9C7]/40 flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-[#B89968]/10 text-[#8E7449] flex items-center justify-center font-serif font-bold text-lg mb-4">
                01
              </div>
              <h3 className="font-serif text-lg font-bold text-[#2A2520] mb-2">Consult Online</h3>
              <p className="text-xs text-[#2A2520]/75 leading-relaxed">
                Complete a 5-minute online intake covering your goals, medical history, and lifestyle. Fully private, secure, and completed at your convenience.
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative p-6 rounded-2xl bg-[#EFE8DA]/40 border border-[#E2D9C7]/40 flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-[#B89968]/10 text-[#8E7449] flex items-center justify-center font-serif font-bold text-lg mb-4">
                02
              </div>
              <h3 className="font-serif text-lg font-bold text-[#2A2520] mb-2">Physician Review</h3>
              <p className="text-xs text-[#2A2520]/75 leading-relaxed">
                A board-certified physician reviews your intake within 24 hours to build a protocol matched to your goals — or tells you honestly if peptide therapy isn&apos;t the right fit.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative p-6 rounded-2xl bg-[#EFE8DA]/40 border border-[#E2D9C7]/40 flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-[#B89968]/10 text-[#8E7449] flex items-center justify-center font-serif font-bold text-lg mb-4">
                03
              </div>
              <h3 className="font-serif text-lg font-bold text-[#2A2520] mb-2">Receive Discreetly</h3>
              <p className="text-xs text-[#2A2520]/75 leading-relaxed">
                If prescribed, your protocol ships directly from a sterile compounding pharmacy. Cold-packed and tracked, complete with all administration materials.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/how-it-works"
              className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-[#8E7449] hover:text-[#B89968] transition-colors group"
            >
              Read the Full Telehealth Flow <ArrowRight className="h-4.5 w-4.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. PRODUCT CATEGORIES (IvyRx panel grid) */}
      <span id="catalog" className="block -mt-24 pt-24"></span>
      <section className="py-20 bg-[#EFE8DA]/30 border-b border-[#E2D9C7]/35">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#B89968] block mb-2">Find your protocol</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2A2520] tracking-wide">
              Built around the way you want to feel.
            </h2>
            <p className="text-sm text-[#2A2520]/75 mt-3">
              Explore our clinical categories to understand the targeted pathways of peptide bioregulation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CATEGORIES.map((cat) => {
              // Select an icon based on slug
              let Icon = Activity;
              if (cat.slug === "weight-loss") Icon = Flame;
              if (cat.slug === "longevity") Icon = Sparkles;
              if (cat.slug === "recovery") Icon = ShieldCheck;
              if (cat.slug === "hormonal") Icon = Award;
              if (cat.slug === "cognitive") Icon = Brain;
              if (cat.slug === "sexual-wellness") Icon = Heart;
              if (cat.slug === "beauty-skin") Icon = Droplet;

              return (
                <Link
                  key={cat.id}
                  href={`/categories/${cat.slug}`}
                  className="group relative p-6 bg-[#F8F4EC] border border-[#E2D9C7] rounded-3xl hover-lift transition-all overflow-hidden flex flex-col justify-between min-h-[220px]"
                >
                  {/* Decorative corner gradient overlay */}
                  <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl ${cat.gradientFrom} ${cat.gradientTo} opacity-15 group-hover:opacity-25 transition-opacity`}></div>
                  
                  <div>
                    <div className="h-10 w-10 rounded-full bg-[#B89968]/15 text-[#8E7449] flex items-center justify-center mb-5 group-hover:bg-[#B89968] group-hover:text-[#F8F4EC] transition-all">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-serif text-lg font-bold text-[#2A2520] group-hover:text-[#B89968] transition-colors mb-2">
                      {cat.name}
                    </h3>
                    <p className="text-xs text-[#2A2520]/70 leading-relaxed line-clamp-3">
                      {cat.description}
                    </p>
                  </div>

                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#B89968] mt-6 flex items-center gap-1 group-hover:text-[#8E7449] transition-colors">
                    Explore category <ChevronRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. FEATURED TREATMENTS */}
      <section className="py-20 bg-[#F8F4EC] border-b border-[#E2D9C7]/35">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#B89968] block mb-2">What we offer</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2A2520] tracking-wide">
                Therapies that work with your body.
              </h2>
              <p className="text-sm text-[#2A2520]/75 mt-3 max-w-xl">
                Nivana protocols use clinical-grade peptides to amplify natural signals for healing, cellular repair, and hormone balance.
              </p>
            </div>
            <Link
              href="/treatments"
              className="mt-4 md:mt-0 px-6 py-3 border border-[#B89968] text-[#8E7449] hover:bg-[#B89968] hover:text-[#F8F4EC] transition-all rounded-full text-xs font-semibold uppercase tracking-widest"
            >
              Browse Master Catalog
            </Link>
          </div>

          {/* Featured Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredPeptides.map((product) => (
              <div 
                key={product.id}
                className="bg-[#EFE8DA]/40 border border-[#E2D9C7] rounded-3xl p-6 flex flex-col justify-between min-h-[360px] relative overflow-hidden group hover:border-[#B89968] hover:shadow-md transition-all"
              >
                {/* Specific category label */}
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#B89968] bg-[#B89968]/10 px-2.5 py-0.5 rounded-full">
                    {product.category === "weight-loss" ? "Metabolic" : product.category === "longevity" ? "Anti-Aging" : "Recovery"}
                  </span>
                  <span className="text-xs text-[#2A2520]/50 font-medium font-sans">
                    {product.administration}
                  </span>
                </div>

                <div className="flex-grow">
                  <h3 className="font-serif text-xl font-bold text-[#2A2520] group-hover:text-[#B89968] transition-colors mb-2">
                    {product.name}
                  </h3>
                  <p className="text-xs text-[#2A2520]/70 italic mb-4">
                    &ldquo;{product.tagline}&rdquo;
                  </p>
                  <p className="text-xs text-[#2A2520]/75 leading-relaxed line-clamp-4 mb-6">
                    {product.description}
                  </p>
                </div>

                <div className="space-y-3 mt-4 pt-4 border-t border-[#E2D9C7]/50">
                  <div className="flex justify-between text-xs text-[#2A2520]/80">
                    <span>Clinical protocol:</span>
                    <span className="font-semibold text-right max-w-[130px] truncate">{product.administration}</span>
                  </div>
                  <Link 
                    href={`/treatments/${product.slug}`}
                    className="w-full block text-center py-2.5 rounded-xl bg-[#2A2520] text-[#F8F4EC] hover:bg-[#B89968] text-xs font-semibold uppercase tracking-wider transition-all"
                  >
                    View Protocol Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. WHY NIVANA (Value Props) */}
      <section className="py-20 bg-[#EFE8DA]/20 border-b border-[#E2D9C7]/35">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#B89968] block mb-2">The Nivana Standard</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2A2520] tracking-wide">
              Clinical precision. Quiet calm.
            </h2>
            <p className="text-sm text-[#2A2520]/75 mt-3">
              We believe biological optimization belongs under certified medical guidance, not gray-market websites.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Value 1 */}
            <div className="flex gap-4 items-start">
              <div className="h-10 w-10 rounded-full bg-[#B89968]/15 text-[#8E7449] flex items-center justify-center shrink-0">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-[#2A2520] mb-2">Pharmaceutical-Grade Sourcing</h3>
                <p className="text-xs sm:text-sm text-[#2A2520]/75 leading-relaxed">
                  Every peptide we prescribe is compounded in FDA-licensed 503A or 503B compounding pharmacies under strict USP &lt;797&gt; sterile standards. We disclose pharmacies transparently.
                </p>
              </div>
            </div>

            {/* Value 2 */}
            <div className="flex gap-4 items-start">
              <div className="h-10 w-10 rounded-full bg-[#B89968]/15 text-[#8E7449] flex items-center justify-center shrink-0">
                <Users className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-[#2A2520] mb-2">Physicians Who Read Your File</h3>
                <p className="text-xs sm:text-sm text-[#2A2520]/75 leading-relaxed">
                  No automated templates or algorithm-only assessments. Board-certified U.S. physicians evaluate your baseline markers and health history before generating your protocol.
                </p>
              </div>
            </div>

            {/* Value 3 */}
            <div className="flex gap-4 items-start">
              <div className="h-10 w-10 rounded-full bg-[#B89968]/15 text-[#8E7449] flex items-center justify-center shrink-0">
                <Sparkles className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-[#2A2520] mb-2">Protocols, Not Single Products</h3>
                <p className="text-xs sm:text-sm text-[#2A2520]/75 leading-relaxed">
                  Peptides function best in highly coordinated stacks and timed cycles. Nivana protocols are designed by medical longevity specialists for target outcomes, not isolated purchases.
                </p>
              </div>
            </div>

            {/* Value 4 */}
            <div className="flex gap-4 items-start">
              <div className="h-10 w-10 rounded-full bg-[#B89968]/15 text-[#8E7449] flex items-center justify-center shrink-0">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-[#2A2520] mb-2">Concierge Care From Day One</h3>
                <p className="text-xs sm:text-sm text-[#2A2520]/75 leading-relaxed">
                  Direct access to clinical support through the patient portal. Our care team assists with dilution math, subcutaneous injection techniques, and dosing logs to keep you safe and confident.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CUSTOMER TESTIMONIALS (Video-style mockup cards) */}
      <section className="py-20 bg-[#F8F4EC] border-b border-[#E2D9C7]/35">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#B89968] block mb-2">Patient Feedback</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2A2520] tracking-wide">
              The results of clinical oversight.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {REVIEWS.map((review, idx) => (
              <div 
                key={idx}
                className="bg-[#EFE8DA]/40 border border-[#E2D9C7]/80 rounded-3xl p-8 flex flex-col justify-between hover:border-[#B89968] transition-all"
              >
                <div>
                  <div className="flex gap-1 mb-6">
                    {[...Array(review.rating)].map((_, i) => (
                      <span key={i} className="text-[#B89968] text-sm">★</span>
                    ))}
                  </div>
                  <p className="text-sm sm:text-base text-[#2A2520]/90 font-serif leading-relaxed italic mb-8">
                    &ldquo;{review.text}&rdquo;
                  </p>
                </div>
                
                <div className="flex justify-between items-center border-t border-[#E2D9C7]/50 pt-4">
                  <div>
                    <span className="block font-bold text-xs text-[#2A2520]">{review.name}</span>
                    <span className="block text-[10px] text-[#2A2520]/60">{review.role}</span>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-[#B89968]/15 text-[#8E7449] px-2.5 py-0.5 rounded-full">
                    {review.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FAQ ACCORDION (Semantic & responsive) */}
      <section className="py-20 bg-[#EFE8DA]/20 border-b border-[#E2D9C7]/35">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#B89968] block mb-2">Questions & Answers</span>
            <h2 className="font-serif text-3xl font-bold text-[#2A2520] tracking-wide">
              Common inquiries
            </h2>
          </div>

          <div className="space-y-4">
            <details className="group border-b border-[#E2D9C7] pb-4 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex justify-between items-center cursor-pointer py-3 list-none">
                <span className="font-serif text-base sm:text-lg font-semibold text-[#2A2520] group-hover:text-[#B89968] transition-colors">
                  Do I need insurance?
                </span>
                <span className="transition group-open:-rotate-180">
                  <ChevronDown className="h-5 w-5 text-[#B89968]" />
                </span>
              </summary>
              <p className="text-xs sm:text-sm text-[#2A2520]/85 leading-relaxed pl-1 pt-1 font-sans">
                No. Nivana does not require or bill insurance. Pricing is transparent and flat for each protocol. Many treatments are HSA/FSA eligible, and we provide detailed receipts on request.
              </p>
            </details>

            <details className="group border-b border-[#E2D9C7] pb-4 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex justify-between items-center cursor-pointer py-3 list-none">
                <span className="font-serif text-base sm:text-lg font-semibold text-[#2A2520] group-hover:text-[#B89968] transition-colors">
                  Is this legal?
                </span>
                <span className="transition group-open:-rotate-180">
                  <ChevronDown className="h-5 w-5 text-[#B89968]" />
                </span>
              </summary>
              <p className="text-xs sm:text-sm text-[#2A2520]/85 leading-relaxed pl-1 pt-1 font-sans">
                Yes. All Nivana protocols are prescribed by licensed U.S. physicians and dispensed by licensed compounding pharmacies operating under strict 503A/503B state and federal regulations. Compounded medications are prepared for specific patient needs and are not FDA-approved in the same manner as standard retail drugs.
              </p>
            </details>

            <details className="group border-b border-[#E2D9C7] pb-4 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex justify-between items-center cursor-pointer py-3 list-none">
                <span className="font-serif text-base sm:text-lg font-semibold text-[#2A2520] group-hover:text-[#B89968] transition-colors">
                  Where do the peptides come from?
                </span>
                <span className="transition group-open:-rotate-180">
                  <ChevronDown className="h-5 w-5 text-[#B89968]" />
                </span>
              </summary>
              <p className="text-xs sm:text-sm text-[#2A2520]/85 leading-relaxed pl-1 pt-1 font-sans">
                Every peptide is sourced from FDA-licensed, state-board certified sterile compounding pharmacies in the United States operating under USP &lt;797&gt; standards. This ensures that the compound identity, sterility, and dosing match clinical requirements.
              </p>
            </details>

            <details className="group border-b border-[#E2D9C7] pb-4 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex justify-between items-center cursor-pointer py-3 list-none">
                <span className="font-serif text-base sm:text-lg font-semibold text-[#2A2520] group-hover:text-[#B89968] transition-colors">
                  Are peptides safe?
                </span>
                <span className="transition group-open:-rotate-180">
                  <ChevronDown className="h-5 w-5 text-[#B89968]" />
                </span>
              </summary>
              <p className="text-xs sm:text-sm text-[#2A2520]/85 leading-relaxed pl-1 pt-1 font-sans">
                The therapeutic peptides in our catalog have years of clinical and research data. Because we compound in FDA-licensed partner pharmacies under physician supervision, we maintain absolute dosage and purity compliance. Every product page contains a dedicated safety section to detail contraindications.
              </p>
            </details>

            <details className="group border-b border-[#E2D9C7] pb-4 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex justify-between items-center cursor-pointer py-3 list-none">
                <span className="font-serif text-base sm:text-lg font-semibold text-[#2A2520] group-hover:text-[#B89968] transition-colors">
                  Are these the same as research peptides sold online?
                </span>
                <span className="transition group-open:-rotate-180">
                  <ChevronDown className="h-5 w-5 text-[#B89968]" />
                </span>
              </summary>
              <p className="text-xs sm:text-sm text-[#2A2520]/85 leading-relaxed pl-1 pt-1 font-sans">
                No. Peptides labeled &ldquo;for research use only&rdquo; sold online are not legal for human administration and do not undergo certified sterile testing. Nivana only prescribes human-grade peptides compounded in accredited U.S. pharmacies, dispensed specifically to your name under doctor supervision.
              </p>
            </details>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/faq"
              className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-[#8E7449] hover:underline"
            >
              See the Master FAQ List <ChevronRight className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </section>

      {/* 9. KNOWLEDGE BASE TEASER */}
      <section className="py-20 bg-[#F8F4EC] border-b border-[#E2D9C7]/35">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#B89968] block mb-2">The Nivana Journal</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2A2520] tracking-wide mb-6">
                Know what you are putting in your body.
              </h2>
              <p className="text-sm sm:text-base text-[#2A2520]/75 leading-relaxed mb-6">
                Our knowledge base is the same library our care team reads. Mechanisms, protocols, safety profiles, and the peer-reviewed science — written clearly for adults who want to understand the cellular mechanisms.
              </p>
              <Link
                href="/knowledge"
                className="inline-flex items-center gap-1.5 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-widest bg-[#2A2520] text-[#F8F4EC] hover:bg-[#B89968] transition-colors"
              >
                Browse the Knowledge Base <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="bg-[#EFE8DA]/40 border border-[#E2D9C7] rounded-3xl p-8 space-y-6">
              <h3 className="font-serif text-lg font-bold text-[#2A2520]">Featured Article</h3>
              <div className="space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#B89968]">Beginner&apos;s Guide</span>
                <h4 className="font-serif text-xl font-bold text-[#2A2520] hover:text-[#B89968] transition-colors">
                  <Link href="/knowledge/what-are-peptides">What Are Peptides? A Beginner&apos;s Guide</Link>
                </h4>
                <p className="text-xs text-[#2A2520]/70 leading-relaxed font-sans">
                  A comprehensive breakdown of amino acid messaging chains, why injection routes yield superior bioavailability compared to supplements, and how to define your therapeutic goals.
                </p>
              </div>
              <div className="border-t border-[#E2D9C7]/50 pt-4 flex justify-between items-center text-xs text-[#2A2520]/50">
                <span>Read Time: 8 mins</span>
                <Link href="/knowledge/what-are-peptides" className="text-[#8E7449] hover:underline font-semibold flex items-center gap-0.5">
                  Read Article <ChevronRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. PRE-FOOTER CTA & NEWSLETTER */}
      <section className="bg-[#2A2520] text-[#F8F4EC] py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full bg-[#B89968]/5 blur-3xl -z-10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
          
          {/* Main CTA */}
          <div className="space-y-6">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-wide">
              Don&apos;t just live longer. <span className="text-[#B89968] italic font-medium">Live better.</span>
            </h2>
            <p className="text-sm sm:text-base text-[#F8F4EC]/80 max-w-xl mx-auto leading-relaxed">
              Start your 5-minute online health history assessment. A board-certified physician reviews your profile within 24 hours.
            </p>
            <div className="pt-4">
              <Link 
                href="/intake"
                className="inline-block px-10 py-4 rounded-full text-xs font-semibold uppercase tracking-widest bg-[#B89968] text-[#F8F4EC] hover:bg-[#8E7449] transition-colors shadow-lg"
              >
                Begin Consultation
              </Link>
            </div>
          </div>

          <div className="border-t border-[#F8F4EC]/10 pt-12 max-w-md mx-auto space-y-4">
            <h3 className="font-serif text-lg font-semibold tracking-wide">Quiet emails. Real science.</h3>
            <p className="text-xs text-[#F8F4EC]/65 leading-relaxed font-sans">
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
                className="flex-grow px-4 py-3 bg-[#F8F4EC]/5 border border-[#F8F4EC]/20 rounded-full text-sm text-[#F8F4EC] placeholder-[#F8F4EC]/40 focus:outline-none focus:border-[#B89968] font-sans"
              />
              <button 
                type="submit"
                className="px-6 py-3 bg-[#B89968] hover:bg-[#8E7449] text-[#F8F4EC] rounded-full text-xs font-semibold uppercase tracking-wider transition-colors shrink-0 font-sans"
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
