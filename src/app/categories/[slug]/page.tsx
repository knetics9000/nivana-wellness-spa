"use client";

import React, { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ChevronRight, ArrowRight, ShieldCheck, HelpCircle } from "lucide-react";
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
    <div className="bg-[#F8F4EC] min-h-screen pb-24 font-sans text-[#2A2520]">
      {/* Category Hero Block */}
      <section className={`relative overflow-hidden py-20 bg-gradient-to-tr ${category.gradientFrom} ${category.gradientTo} border-b border-[#E2D9C7]`}>
        <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-white/10 blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          
          <Link 
            href="/treatments" 
            className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-[#2A2520]/65 hover:text-[#2A2520] transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Master Catalog
          </Link>

          <div className="max-w-2xl space-y-4">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#8E7449] bg-[#F8F4EC] px-3 py-1 rounded-full inline-block">
              Clinical Therapy Group
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-[#2A2520]">
              {category.name}
            </h1>
            <p className="text-sm sm:text-base text-[#2A2520]/80 leading-relaxed">
              {category.longDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Grid of Products under this Category */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="flex justify-between items-center mb-8 pb-4 border-b border-[#E2D9C7]/50">
          <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#2A2520]">
            Available Protocols ({products.length})
          </h2>
          <span className="text-xs text-[#2A2520]/50 font-medium">Physician screening required</span>
        </div>

        {products.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div 
                key={product.id}
                className="bg-[#EFE8DA]/30 border border-[#E2D9C7] rounded-3xl p-6 flex flex-col justify-between min-h-[280px] hover-lift transition-all"
              >
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#B89968] bg-[#B89968]/10 px-2 py-0.5 rounded-full">
                      {category.name}
                    </span>
                    <span className="text-[11px] text-[#2A2520]/50 font-sans font-medium">
                      {product.administration}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-[#2A2520] mb-1">
                    {product.name}
                  </h3>
                  <p className="text-xs text-[#8E7449] italic mb-3">
                    &ldquo;{product.tagline}&rdquo;
                  </p>
                  <p className="text-xs text-[#2A2520]/75 leading-relaxed line-clamp-3 mb-6 font-sans">
                    {product.description}
                  </p>
                </div>

                <div className="border-t border-[#E2D9C7]/50 pt-4 flex justify-between items-center">
                  <span className="text-[10px] font-bold text-[#2A2520]/50 uppercase tracking-wide">
                    Requires Consult
                  </span>
                  <Link 
                    href={`/treatments/${product.slug}`}
                    className="px-4 py-2 rounded-xl bg-[#2A2520] text-[#F8F4EC] hover:bg-[#B89968] text-xs font-semibold uppercase tracking-wider transition-all flex items-center gap-0.5 group"
                  >
                    View Protocol <ChevronRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-[#EFE8DA]/10 border border-[#E2D9C7]/40 rounded-3xl">
            <HelpCircle className="h-10 w-10 text-[#2A2520]/20 mx-auto mb-3" />
            <h3 className="font-serif text-lg font-bold text-[#2A2520]">No protocols found</h3>
            <p className="text-xs text-[#2A2520]/50 mt-1">There are currently no listed protocols in this therapy category.</p>
          </div>
        )}
      </section>

      {/* Conversion Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="bg-[#2A2520] text-[#F8F4EC] rounded-3xl p-8 sm:p-12 text-center space-y-6 relative overflow-hidden">
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#B89968]/5 rounded-full blur-3xl"></div>
          
          <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-wide">
            Ready to build your personalized protocol?
          </h2>
          <p className="text-xs sm:text-sm text-[#F8F4EC]/85 max-w-lg mx-auto leading-relaxed font-sans">
            Submit your health history details through our secure telemedicine portal. A board-certified physician will review your markers within 24 hours to design your {category.name.toLowerCase()} schedule.
          </p>
          
          <div className="pt-4">
            <Link 
              href="/intake"
              className="inline-flex items-center gap-1.5 px-8 py-3.5 bg-[#B89968] hover:bg-[#8E7449] text-[#F8F4EC] rounded-full text-xs font-semibold uppercase tracking-wider transition-colors shadow-md"
            >
              Start Free Intake <ArrowRight className="h-4.5 w-4.5" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
