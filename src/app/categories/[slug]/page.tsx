"use client";

import React, { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ChevronRight, ArrowRight, Activity, HelpCircle } from "lucide-react";
import { getCategoryBySlug, getProductsByCategory } from "@/data/products";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function CategoryPage({ params }: PageProps) {
  const { slug } = use(params);
  const category = getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const products = getProductsByCategory(slug);

  return (
    <div className="min-h-screen pb-24 font-sans text-white relative z-0">
      {/* Category Hero Block with Background Video */}
      <section className="relative overflow-hidden py-24 border-b border-white/10 z-0">
        {/* Background Video */}
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
        {/* Soft color overlays */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#0B0A09]/95 via-[#0B0A09]/90 to-[#E8B29A]/10 -z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0B0A09]/40 to-[#0B0A09] -z-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 animate-fade-up">
          
          <Link 
            href="/treatments" 
            className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest font-bold text-white hover:text-[#E8B29A] transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Master Catalog
          </Link>

          <div className="max-w-2xl space-y-4">
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#E8B29A] bg-[#E8B29A]/10 border border-white/10 px-3 py-1 rounded-full inline-block shadow-sm">
              CLINICAL THERAPY GROUP
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl font-light tracking-tight text-white">
              {category.name}
            </h1>
            <p className="text-sm sm:text-base text-white/80 leading-relaxed font-sans font-light">
              {category.longDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Grid of Products under this Category */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="flex justify-between items-center mb-8 pb-4 border-b border-white/10">
          <h2 className="font-serif text-2xl font-light text-white">
            Available Protocols ({products.length})
          </h2>
          <span className="text-xs text-white/60 font-mono tracking-wider">PHYSICIAN SCREENING REQUIRED</span>
        </div>

        {products.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => {
              const hasImage = ["semaglutide", "bpc-157", "nad-plus", "testosterone-cypionate"].includes(product.id);
              return (
                <div 
                  key={product.id}
                  className="glass-panel-dark rounded-3xl flex flex-col justify-between min-h-[440px] relative overflow-hidden group border border-white/10 hover:border-[#E8B29A]/50 transition-all duration-300 hover-lift shadow-lg glow-peach-glow"
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
                        {category.name}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 flex-grow flex flex-col justify-between">
                    <div>
                      {/* Name */}
                      <h3 className="font-serif text-xl font-semibold text-white group-hover:text-[#E8B29A] transition-colors mb-1.5">
                        {product.name}
                      </h3>
                      
                      {/* Tagline */}
                      <p className="text-xs text-[#E8B29A] italic mb-3 font-serif">
                        &ldquo;{product.tagline}&rdquo;
                      </p>

                      {/* Description */}
                      <p className="text-xs text-white/80 leading-relaxed line-clamp-3 mb-6 font-sans font-light">
                        {product.description}
                      </p>
                    </div>

                    {/* Actions */}
                    <div className="border-t border-white/10 pt-4 flex justify-between items-center mt-auto">
                      <span className="text-[11px] font-semibold text-white/60 font-sans">
                        Route: {product.administration}
                      </span>
                      <Link 
                        href={`/treatments/${product.slug}`}
                        className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white hover:bg-[#E8B29A] hover:text-[#0B0A09] text-xs font-semibold uppercase tracking-widest transition-all duration-300 flex items-center gap-0.5 group font-mono"
                      >
                        View Protocol <ChevronRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-24 glass-panel-dark rounded-3xl shadow-lg">
            <HelpCircle className="h-10 w-10 text-white/20 mx-auto mb-3" />
            <h3 className="font-serif text-lg font-semibold text-white">No protocols found</h3>
            <p className="text-xs text-white/60 mt-1">There are currently no listed protocols in this therapy category.</p>
          </div>
        )}
      </section>

      {/* Conversion Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="relative group overflow-hidden rounded-3xl border border-white/10 p-8 sm:p-12 text-center space-y-6 bg-black/40 shadow-lg backdrop-blur-md z-0">
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
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B0A09]/95 via-[#0B0A09]/80 to-[#0B0A09]/95 -z-10"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#E8B29A]/5 rounded-full blur-3xl -z-10"></div>
          
          <h2 className="font-sans text-3xl font-light tracking-tight text-white">
            Ready to build your <span className="font-serif italic font-light text-[#E8B29A]">personalized protocol?</span>
          </h2>
          <p className="text-xs sm:text-sm text-white/80 max-w-lg mx-auto leading-relaxed font-sans font-light">
            Submit your health history details through our secure telemedicine portal. A board-certified physician will review your markers within 24 hours to design your {category.name.toLowerCase()} schedule.
          </p>
          
          <div className="pt-4">
            <Link 
              href="/intake"
              className="inline-flex items-center gap-1.5 px-8 py-3.5 bg-[#E8B29A] text-[#0B0A09] hover:bg-white hover:text-[#0B0A09] rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-md font-mono"
            >
              Start Free Intake <ArrowRight className="h-4.5 w-4.5" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
