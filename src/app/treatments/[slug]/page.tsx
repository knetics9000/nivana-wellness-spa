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
  Info,
  Calendar,
  Layers,
  ThermometerSnowflake,
  ChevronRight
} from "lucide-react";
import { getProductBySlug, getCategoryBySlug, getProductsByCategory } from "@/data/products";
import SafetyModal from "@/components/SafetyModal";
import { renderProductImage } from "../page";

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
    <div className="min-h-screen pb-24 font-sans text-[#F7F2EC] relative z-0 animate-fade-up selection:bg-[#E8B29A]/30">
      
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
      <div className="absolute inset-0 bg-gradient-to-tr from-[#0B0A09] via-[#0B0A09]/95 to-[#E8B29A]/10 -z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0B0A09]/50 to-[#0B0A09] -z-10"></div>

      {/* Top breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link 
          href="/treatments" 
          className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest font-bold text-white hover:text-[#E8B29A] transition-colors underline underline-offset-4 decoration-[#E8B29A] decoration-2"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Master Catalog
        </Link>
      </div>

      {/* Main product overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
        
        {/* Left Column: Primary clinical info */}
        <div className="lg:col-span-8 space-y-8">
          
          {/* Header Title Block */}
          {(() => {
            return (
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-white/10 pb-8">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#8FA89B] font-semibold">
                      {category?.name || product.category}
                    </span>
                    <span className="text-white/20 text-sm">|</span>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-white/50">
                      {product.administration}
                    </span>
                  </div>
                  
                  <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-white">
                    {product.name}
                  </h1>
                  
                  <p className="text-base sm:text-lg text-[#E8B29A] italic font-serif">
                    &ldquo;{product.tagline}&rdquo;
                  </p>
                </div>

                <div className="w-full md:w-48 h-48 relative rounded-3xl overflow-hidden border border-[#2A2624] bg-[#121110] p-4 shrink-0 shadow-xl flex items-center justify-center">
                  {renderProductImage(product.id, product.name, product.category, "w-3/4 h-3/4 aspect-square object-cover rounded-xl shadow-md")}
                </div>
              </div>
            );
          })()}

          {/* Clinical summary card */}
          <div className="glass-panel-dark rounded-3xl p-6 sm:p-8 space-y-4 shadow-lg border border-white/10">
            <h2 className="text-[10px] font-mono uppercase tracking-widest text-[#E8B29A] font-bold">[ CLINICAL OVERVIEW ]</h2>
            <p className="text-sm sm:text-base leading-relaxed text-white/80 font-sans font-light">
              {product.description}
            </p>
          </div>

          {/* Mechanism of action */}
          <div className="space-y-3 pt-4">
            <h2 className="font-serif text-2xl font-light text-white">Mechanism of Action</h2>
            <p className="text-sm sm:text-base leading-relaxed text-white/70 font-sans font-light">
              {product.mechanism}
            </p>
          </div>

          {/* Benefits bullets list */}
          <div className="space-y-4 pt-4">
            <h2 className="font-serif text-2xl font-light text-white">Key Benefits &amp; Outcomes</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {product.benefits.map((benefit, i) => (
                <div key={i} className="flex gap-3 items-start p-4 glass-panel-dark rounded-2xl border border-white/10 hover-lift">
                  <CheckCircle2 className="h-4.5 w-4.5 text-[#8FA89B] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-white/85 leading-relaxed font-sans font-light">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Suitability guidelines */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8 border-t border-white/10">
            {/* Who it's for */}
            <div className="space-y-3">
              <h3 className="text-[10px] font-mono uppercase tracking-widest text-[#8FA89B] font-bold">[ CLINICAL SUITABILITY ]</h3>
              <div className="text-sm text-white/80 leading-relaxed glass-panel-dark p-5 rounded-2xl border border-white/10 font-sans font-light min-h-[140px]">
                {product.whoItsFor}
              </div>
            </div>

            {/* Who it's not for */}
            <div className="space-y-3">
              <h3 className="text-[10px] font-mono uppercase tracking-widest text-[#E8B29A] font-bold">[ CONTRAINDICATIONS &amp; EXCLUSION ]</h3>
              <div className="text-sm text-white/90 leading-relaxed bg-[#E8B29A]/5 border border-[#E8B29A]/30 p-5 rounded-2xl font-sans font-light min-h-[140px]">
                {product.whoItsNotFor}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Custom patient dashboard / Dosing details / Call to Action */}
        <div className="lg:col-span-4 space-y-6">
          <div className="glass-panel-dark rounded-3xl p-6 sticky top-24 space-y-6 shadow-xl border border-white/10">
            
            {/* Dosing Info Header */}
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-white/40 block mb-1">Therapeutic Dosing</span>
              <div className="flex justify-between items-baseline">
                <span className="font-serif text-2xl font-light text-white">Clinical Protocol</span>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#8FA89B] font-bold">[ Rx ONLY ]</span>
              </div>
            </div>

            {/* Dosing Details Table */}
            <div className="border border-white/10 rounded-2xl overflow-hidden bg-black/20 my-4 font-sans text-xs">
              <table className="w-full text-left border-collapse">
                <tbody>
                  <tr className="border-b border-white/10">
                    <td className="p-4 font-medium text-white/50 flex items-center gap-1.5"><Layers className="h-4 w-4 text-white/50" /> Route</td>
                    <td className="p-4 text-white font-semibold text-right bg-white/5">{product.administration}</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="p-4 font-medium text-white/50 flex items-center gap-1.5"><Calendar className="h-4 w-4 text-white/50" /> Dosing Schedule</td>
                    <td className="p-4 text-white font-semibold text-right bg-white/5 max-w-[150px] leading-tight">{product.protocol}</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-white/50 flex items-center gap-1.5"><ThermometerSnowflake className="h-4 w-4 text-white/50" /> Storage</td>
                    <td className="p-4 text-white font-semibold text-right bg-white/5">Refrigerate on arrival</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Telehealth Call to Action button */}
            <div className="space-y-3">
              <Link
                href="/intake"
                className="w-full text-center block py-3.5 rounded-full text-xs font-bold uppercase tracking-widest bg-[#E8B29A] text-[#0B0A09] hover:bg-white hover:text-[#0B0A09] transition-all duration-300 shadow-md flex items-center justify-center gap-1.5 font-mono"
              >
                Start Free Assessment <ArrowRight className="h-4.5 w-4.5" />
              </Link>
              <button
                onClick={() => setSafetyOpen(true)}
                className="w-full text-center block py-3.5 rounded-full text-xs font-bold uppercase tracking-widest border border-white/20 text-white bg-transparent hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-1.5 font-mono"
              >
                <ShieldAlert className="h-4.5 w-4.5 text-white/70" /> Important Safety Info
              </button>
            </div>

            {/* Official FDA Compounding Disclaimer */}
            <div className="bg-black/30 border border-white/10 rounded-2xl p-4 flex gap-2.5 text-[10px] text-white/50 leading-relaxed font-sans shadow-sm">
              <Info className="h-4.5 w-4.5 text-[#8FA89B] shrink-0 mt-0.5" />
              <p>
                This medication is compounded by a licensed U.S. pharmacy and prescribed only after physician review. Compounded medications have not been FDA-reviewed for safety, effectiveness, or quality. FDA-approved alternatives may be available for some indications. Please review the Important Safety Information for this treatment before beginning.
              </p>
            </div>

            {/* GLP-1 Black box warning if weight-loss GLP-1 */}
            {isGLP1 && (
              <div className="bg-[#E8B29A]/5 border border-[#E8B29A]/30 rounded-2xl p-4 flex gap-2.5 text-[10px] text-white/80 leading-relaxed font-sans shadow-lg">
                <AlertOctagon className="h-5 w-5 text-[#E8B29A] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold block text-[#E8B29A] uppercase tracking-widest mb-1 font-mono">[ GLP-1 BOXED WARNING ]</span>
                  <p className="opacity-90 leading-relaxed">
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
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 border-t border-white/10 pt-16 relative z-10">
          <div className="max-w-2xl mb-12">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#8FA89B] font-bold block mb-1">
              [ SYNERGISTIC PROTOCOLS ]
            </span>
            <h2 className="font-serif text-3xl font-light text-white">
              Peptides that stack well in this category
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedPeptides.map((rp) => (
              <Link 
                key={rp.id}
                href={`/treatments/${rp.slug}`}
                className="glass-panel-dark rounded-3xl p-6 hover:border-[#E8B29A]/40 border border-white/10 transition-all duration-300 flex flex-col justify-between group hover-lift shadow-lg glow-peach-glow"
              >
                <div>
                  <h3 className="font-serif text-lg font-semibold text-white group-hover:text-[#E8B29A] transition-colors mb-1">{rp.name}</h3>
                  <p className="text-xs text-[#E8B29A]/70 italic mb-3 font-serif">&ldquo;{rp.tagline}&rdquo;</p>
                  <p className="text-xs text-white/60 line-clamp-3 leading-relaxed font-sans font-light">{rp.description}</p>
                </div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-white mt-6 flex items-center gap-0.5 group-hover:text-[#E8B29A] transition-colors font-mono">
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
