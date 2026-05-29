"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Search, ChevronRight, Activity } from "lucide-react";
import { CATEGORIES, PRODUCTS } from "@/data/products";

export function renderProductImage(productId: string, productName: string, category: string, className?: string) {
  const directImages = [
    "semaglutide", 
    "bpc-157", 
    "nad-plus", 
    "testosterone-cypionate", 
    "tirzepatide", 
    "tb-500", 
    "ghk-cu-injectable", 
    "sermorelin", 
    "ipamorelin"
  ];
  
  let targetImage = productId;

  if (!directImages.includes(productId)) {
    // Category-wide photo fallbacks to ensure 100% photographic coverage
    if (category === "weight-loss") {
      targetImage = (productId.includes("aod") || productId.includes("fragment")) ? "tirzepatide" : "semaglutide";
    } else if (category === "recovery") {
      targetImage = productId.includes("tb") ? "tb-500" : "bpc-157";
    } else if (category === "longevity") {
      targetImage = "nad-plus";
    } else if (category === "hormonal") {
      targetImage = productId.includes("ipamorelin") ? "ipamorelin" : "sermorelin";
    } else if (category === "cognitive") {
      targetImage = "nad-plus";
    } else if (category === "sexual-wellness") {
      targetImage = "testosterone-cypionate";
    } else if (category === "beauty-skin") {
      targetImage = "ghk-cu-injectable";
    } else if (category === "bioregulators") {
      targetImage = "nad-plus";
    } else {
      targetImage = "nad-plus";
    }
  }

  return (
    <img
      src={`/images/products/${targetImage}.png`}
      alt={productName}
      className={className || "max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105 filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]"}
    />
  );
}

export function getCategoryBadgeLabel(category: string) {
  switch (category) {
    case "weight-loss":
      return "METABOLIC";
    case "longevity":
      return "ANTI-AGING";
    case "hormonal":
      return "HORMONAL";
    case "recovery":
      return "RECOVERY";
    case "cognitive":
      return "COGNITIVE";
    case "sexual-wellness":
      return "SEXUAL WELLNESS";
    case "beauty-skin":
      return "BEAUTY & SKIN";
    case "bioregulators":
      return "BIOREGULATORS";
    default:
      return category.toUpperCase().replace("-", " ");
  }
}


export default function TreatmentsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedAdmin, setSelectedAdmin] = useState("all");

  // Get all unique administration types in the DB
  const adminRoutes = useMemo(() => {
    const set = new Set(PRODUCTS.map(p => p.administration));
    return Array.from(set);
  }, []);

  // Filter products based on search, category, and administration method
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(p => {
      const matchesSearch = 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.mechanism.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.whoItsFor.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = selectedCategory === "all" || p.category === selectedCategory;
      const matchesAdmin = selectedAdmin === "all" || p.administration === selectedAdmin;

      return matchesSearch && matchesCategory && matchesAdmin;
    });
  }, [searchQuery, selectedCategory, selectedAdmin]);

  return (
    <div className="min-h-screen pb-24 font-sans text-[#F7F2EC] relative z-0 selection:bg-[#E8B29A]/30">
      
      {/* Hero Header (Frosted/Translucent overlay with background video) */}
      <section className="relative py-24 border-b border-white/10 overflow-hidden z-0">
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
        {/* Dark Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0A09]/90 via-[#0B0A09]/40 to-[#0B0A09] -z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-[#0B0A09] via-[#0B0A09]/95 to-[#E8B29A]/10 -z-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 relative z-10">
          <div className="flex items-center justify-center gap-2">
            <span className="h-[0.5px] w-6 bg-[#8FA89B]/30"></span>
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#8FA89B] bg-[#8FA89B]/15 border border-[#8FA89B]/20 px-3 py-1 rounded-full inline-block font-semibold">
              CLINICAL THERAPEUTICS
            </span>
            <span className="h-[0.5px] w-6 bg-[#8FA89B]/30"></span>
          </div>
          <h1 className="font-sans text-5xl sm:text-7xl font-extralight tracking-tight text-white leading-none">
            Explore our clinical protocols.
          </h1>
          <p className="text-sm sm:text-base text-white/70 max-w-xl mx-auto leading-relaxed font-sans font-light">
            Every VALARA Rx treatment requires a board-certified physician consultation. Select a compound to review its mechanism, benefits, typical dosing, and safety warnings.
          </p>
        </div>
      </section>

      {/* Main Search & Filters Toolbar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 relative z-10 animate-fade-up">
        <div className="glass-panel rounded-3xl p-6 space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            
            {/* Search Input */}
            <div className="lg:col-span-6 relative">
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-white/40">
                <Search className="h-5 w-5" />
              </span>
              <input
                type="text"
                placeholder="Search master catalog (by name, goal, admin route)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm placeholder-white/30 focus:outline-none focus:border-[#E8B29A] text-white font-sans transition-colors"
              />
            </div>

            {/* Administration Route Select */}
            <div className="lg:col-span-3">
              <select
                value={selectedAdmin}
                onChange={(e) => setSelectedAdmin(e.target.value)}
                style={{ colorScheme: "dark" }}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm text-white/80 focus:outline-none focus:border-[#E8B29A] font-sans transition-colors cursor-pointer"
              >
                <option value="all">All Administration Routes</option>
                {adminRoutes.map((route, i) => (
                  <option key={i} value={route}>{route}</option>
                ))}
              </select>
            </div>

            {/* Category Quick Reset */}
            <div className="lg:col-span-3 flex items-center justify-end">
              {(searchQuery || selectedCategory !== "all" || selectedAdmin !== "all") && (
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("all");
                    setSelectedAdmin("all");
                  }}
                  className="text-xs text-white/60 hover:text-white font-bold uppercase tracking-widest transition-colors underline underline-offset-4 decoration-[#E8B29A] decoration-2"
                >
                  Clear All Filters
                </button>
              )}
            </div>
          </div>

          {/* Category Tabs Grid */}
          <div className="border-t border-white/10 pt-6">
            <span className="text-[10px] font-mono uppercase tracking-wider text-white/45 block mb-3">Filter by Category</span>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory("all")}
                className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all border ${
                  selectedCategory === "all"
                    ? "bg-[#E8B29A] text-[#0B0A09] border-[#E8B29A]"
                    : "bg-white/5 text-white/70 border-white/10 hover:bg-white/10"
                }`}
              >
                All Therapies ({PRODUCTS.length})
              </button>
              {CATEGORIES.map(cat => {
                const count = PRODUCTS.filter(p => p.category === cat.slug).length;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.slug)}
                    className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all border ${
                      selectedCategory === cat.slug
                        ? "bg-[#E8B29A] text-[#0B0A09] border-[#E8B29A]"
                        : "bg-white/5 text-white/70 border-white/10 hover:bg-white/10"
                    }`}
                  >
                    {cat.name} ({count})
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Grid Results */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 relative z-10 animate-fade-up">
        <div className="flex justify-between items-center mb-6 text-xs text-white/45 font-mono uppercase tracking-wider">
          <span>SHOWING {filteredProducts.length} PARAMETER PROTOCOLS</span>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((p) => {
              return (
                <Link
                  key={p.id}
                  href={`/treatments/${p.slug}`}
                  className="group flex flex-col transition-all duration-300 hover-lift mb-8"
                >
                  {/* Image Container Card */}
                  <div className="aspect-[4/3] w-full relative bg-[#121110] border border-[#2A2624] rounded-3xl overflow-hidden flex items-center justify-center p-6 shadow-xl group-hover:border-[#E8B29A]/45 transition-all duration-300">
                    {/* Badge */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-[#F7F2EC] bg-[#1A1917] border border-[#33302E] px-3.5 py-1.5 rounded-full inline-block shadow-sm">
                        {getCategoryBadgeLabel(p.category)}
                      </span>
                    </div>
                    {/* Centered Mockup Image */}
                    <div className="w-full h-full flex items-center justify-center relative">
                      {renderProductImage(
                        p.id, 
                        p.name, 
                        p.category, 
                        "w-3/4 h-3/4 max-w-[200px] max-h-[200px] aspect-square object-cover rounded-2xl shadow-md transition-transform duration-500 group-hover:scale-105"
                      )}
                    </div>
                  </div>

                  {/* Metadata underneath */}
                  <div className="mt-5 px-1 space-y-2">
                    <h3 className="font-serif text-2xl font-light text-white group-hover:text-[#E8B29A] transition-colors leading-tight">
                      {p.name}
                    </h3>
                    <p className="text-sm md:text-base text-[#C9A695]/90 italic font-serif leading-relaxed">
                      &ldquo;{p.tagline}&rdquo;
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-24 glass-panel-dark rounded-3xl max-w-xl mx-auto border border-white/10">
            <Activity className="h-10 w-10 text-white/30 mx-auto mb-3" />
            <h3 className="font-serif text-lg font-light text-white">No treatments matched</h3>
            <p className="text-xs text-white/60 mt-1 max-w-sm mx-auto leading-relaxed font-sans font-light">
              Nothing matched yet. Try typing a different peptide name, metabolic goal, or filtering by a different category.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
