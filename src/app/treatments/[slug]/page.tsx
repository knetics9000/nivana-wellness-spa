"use client";

import React, { useState, use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { 
  ArrowLeft, 
  ShieldAlert, 
  ArrowRight, 
  CheckCircle2, 
  AlertOctagon, 
  HelpCircle, 
  Sparkles,
  Info,
  Calendar,
  Layers,
  ThermometerSnowflake,
  ChevronRight
} from "lucide-react";
import { getProductBySlug, getCategoryBySlug, getProductsByCategory, PRODUCTS } from "@/data/products";
import SafetyModal from "@/components/SafetyModal";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function ProductDetailPage({ params }: PageProps) {
  const { slug } = use(params);
  const product = getProductBySlug(slug);
  const [safetyOpen, setSafetyOpen] = useState(false);

  if (!product) {
    notFound();
  }

  const category = getCategoryBySlug(product.category);

  // Find related peptides in the same category (excluding current)
  const relatedPeptides = getProductsByCategory(product.category)
    .filter(p => p.id !== product.id)
    .slice(0, 3);

  const isGLP1 = product.id === "semaglutide" || product.id === "tirzepatide";

  return (
    <div className="bg-[#F8F4EC] min-h-screen pb-24 font-sans text-[#2A2520] animate-fade-up">
      {/* Top breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link 
          href="/treatments" 
          className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-[#8E7449] hover:text-[#B89968] transition-colors"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Master Catalog
        </Link>
      </div>

      {/* Main product overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column: Primary clinical info */}
        <div className="lg:col-span-8 space-y-8">
          
          {/* Header Title Block */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#B89968]">
                {category?.name || product.category}
              </span>
              <span className="text-[#E2D9C7] text-sm">|</span>
              <span className="text-xs text-[#2A2520]/60 font-sans font-medium uppercase tracking-wider">
                {product.administration}
              </span>
            </div>
            
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#2A2520]">
              {product.name}
            </h1>
            
            <p className="text-base sm:text-lg text-[#8E7449] italic font-serif">
              &ldquo;{product.tagline}&rdquo;
            </p>
          </div>

          {/* Clinical summary card */}
          <div className="bg-[#EFE8DA]/40 border border-[#E2D9C7] rounded-3xl p-6 sm:p-8 space-y-4">
            <h2 className="text-xs uppercase tracking-widest text-[#B89968] font-bold">Clinical Overview</h2>
            <p className="text-sm sm:text-base leading-relaxed text-[#2A2520]/90">
              {product.description}
            </p>
          </div>

          {/* Mechanism of action */}
          <div className="space-y-3 pt-4">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#2A2520]">Mechanism of Action</h2>
            <p className="text-sm sm:text-base leading-relaxed text-[#2A2520]/80 font-sans">
              {product.mechanism}
            </p>
          </div>

          {/* Benefits bullets list */}
          <div className="space-y-4 pt-4">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#2A2520]">Key Benefits & Outcomes</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {product.benefits.map((benefit, i) => (
                <div key={i} className="flex gap-2.5 items-start p-3 bg-[#EFE8DA]/25 rounded-xl border border-[#E2D9C7]/30">
                  <CheckCircle2 className="h-4 w-4 text-[#B89968] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-[#2A2520]/80 leading-relaxed font-sans">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Suitability guidelines */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-[#E2D9C7]/50">
            {/* Who it's for */}
            <div className="space-y-2.5">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#B89968]">Clinical Suitability</h3>
              <p className="text-xs text-[#2A2520]/60 font-sans">Who this protocol is generally designed for:</p>
              <p className="text-sm text-[#2A2520]/80 leading-relaxed bg-[#F8F4EC] border border-[#E2D9C7] p-4 rounded-xl font-sans">
                {product.whoItsFor}
              </p>
            </div>

            {/* Who it's not for */}
            <div className="space-y-2.5">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#8E7449]">Contraindications & Exclusion</h3>
              <p className="text-xs text-[#2A2520]/60 font-sans">Who should exclude this therapy:</p>
              <p className="text-sm text-[#2A2520]/80 leading-relaxed bg-[#F8F4EC] border border-[#E2D9C7] p-4 rounded-xl font-sans">
                {product.whoItsNotFor}
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Custom patient dashboard / Dosing details / Call to Action */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-[#EFE8DA]/60 border border-[#E2D9C7] rounded-3xl p-6 shadow-sm space-y-6 sticky top-24">
            
            {/* Dosing Info Header */}
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#B89968] block mb-1">Therapeutic Dosing</span>
              <div className="flex justify-between items-baseline">
                <span className="font-serif text-2xl font-bold text-[#2A2520]">Clinical Protocol</span>
                <span className="text-xs text-[#2A2520]/50 font-sans">Prescription Required</span>
              </div>
            </div>

            {/* Dosing Details list */}
            <div className="space-y-3.5 border-t border-b border-[#E2D9C7]/60 py-5 text-xs text-[#2A2520]/85">
              <div className="flex justify-between items-center">
                <span className="text-[#2A2520]/65 flex items-center gap-1.5"><Layers className="h-4 w-4 text-[#B89968]" /> Route</span>
                <span className="font-semibold text-right">{product.administration}</span>
              </div>
              <div className="flex justify-between items-start">
                <span className="text-[#2A2520]/65 flex items-center gap-1.5"><Calendar className="h-4 w-4 text-[#B89968]" /> Dosing Schedule</span>
                <span className="font-semibold text-right max-w-[150px] leading-tight">{product.protocol}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#2A2520]/65 flex items-center gap-1.5"><ThermometerSnowflake className="h-4 w-4 text-[#B89968]" /> Storage</span>
                <span className="font-semibold text-right">Refrigerate on arrival</span>
              </div>
            </div>

            {/* Telehealth Call to Action button */}
            <div className="space-y-3">
              <Link
                href="/intake"
                className="w-full text-center block py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#B89968] text-[#F8F4EC] hover:bg-[#8E7449] transition-all shadow-md flex items-center justify-center gap-1.5"
              >
                Start Free Assessment <ArrowRight className="h-4.5 w-4.5" />
              </Link>
              <button
                onClick={() => setSafetyOpen(true)}
                className="w-full text-center block py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider border border-[#B89968] text-[#8E7449] hover:bg-[#B89968]/5 transition-all flex items-center justify-center gap-1.5"
              >
                <ShieldAlert className="h-4.5 w-4.5" /> Important Safety Info
              </button>
            </div>

            {/* Official FDA Compounding Disclaimer */}
            <div className="bg-[#F8F4EC] border border-[#E2D9C7]/75 rounded-2xl p-4 flex gap-2.5 text-[10px] text-[#2A2520]/75 leading-relaxed font-sans">
              <Info className="h-4.5 w-4.5 text-[#B89968] shrink-0 mt-0.5" />
              <p>
                This medication is compounded by a licensed U.S. pharmacy and prescribed only after physician review. Compounded medications have not been FDA-reviewed for safety, effectiveness, or quality. FDA-approved alternatives may be available for some indications. Please review the Important Safety Information for this treatment before beginning.
              </p>
            </div>

            {/* GLP-1 Black box warning if weight-loss GLP-1 */}
            {isGLP1 && (
              <div className="bg-[#C9A695]/10 border border-[#C9A695]/45 rounded-2xl p-4 flex gap-2.5 text-[10px] text-[#2A2520]/80 leading-relaxed font-sans">
                <AlertOctagon className="h-5 w-5 text-[#C9A695] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold block text-[#C9A695] uppercase tracking-wider mb-1">GLP-1 Boxed Warning</span>
                  <p>
                    GLP-1 medications are contraindicated in individuals with a personal or family history of medullary thyroid carcinoma or Multiple Endocrine Neoplasia syndrome type 2. Stop use and contact your physician immediately if you develop a lump or swelling in your neck, difficulty swallowing, hoarseness, severe abdominal pain that does not resolve, or symptoms of a serious allergic reaction. Do not use if pregnant, trying to become pregnant, or breastfeeding.
                  </p>
                </div>
              </div>
            )}

          </div>
        </div>
      </section>

      {/* Related Products / Stacks recommendation */}
      {relatedPeptides.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 border-t border-[#E2D9C7]/50 pt-16">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#B89968] block mb-1">Synergistic Protocols</span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2A2520]">
              Peptides that stack well in this category
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedPeptides.map((rp) => (
              <Link 
                key={rp.id}
                href={`/treatments/${rp.slug}`}
                className="bg-[#EFE8DA]/30 border border-[#E2D9C7] rounded-2xl p-6 hover-lift transition-all flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#2A2520] mb-1">{rp.name}</h3>
                  <p className="text-xs text-[#8E7449] italic mb-3">&ldquo;{rp.tagline}&rdquo;</p>
                  <p className="text-xs text-[#2A2520]/75 line-clamp-3 leading-relaxed font-sans">{rp.description}</p>
                </div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#B89968] mt-6 flex items-center gap-0.5">
                  View stack properties <ChevronRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Safety Modal Overlay */}
      <SafetyModal 
        isOpen={safetyOpen}
        onClose={() => setSafetyOpen(false)}
        productName={product.name}
        safetyInfo={product.safetyInfo}
      />

    </div>
  );
}
