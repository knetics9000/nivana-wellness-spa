"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Search, Filter, Sparkles, ChevronRight, Activity, HelpCircle } from "lucide-react";
import { CATEGORIES, PRODUCTS, Product } from "@/data/products";

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
    <div className="bg-[#F8F4EC] min-h-screen pb-20 font-sans">
      {/* Hero Header */}
      <section className="bg-[#EFE8DA] py-16 border-b border-[#E2D9C7] text-[#2A2520]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#B89968]">Master Treatment Catalog</span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight">
            Explore our clinical protocols.
          </h1>
          <p className="text-sm sm:text-base text-[#2A2520]/75 max-w-xl mx-auto leading-relaxed">
            Every Nivana treatment requires a board-certified physician consultation. Select a compound to review its mechanism, benefits, typical dosing, and safety warnings.
          </p>
        </div>
      </section>

      {/* Main Search & Filters Toolbar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="bg-[#F8F4EC] border border-[#E2D9C7] rounded-3xl p-6 shadow-sm space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            
            {/* Search Input */}
            <div className="lg:col-span-6 relative">
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#2A2520]/40">
                <Search className="h-5 w-5" />
              </span>
              <input
                type="text"
                placeholder="Search master catalog (by name, goal, admin route, or Khavinson bioregulator)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-[#F8F4EC] border border-[#E2D9C7] rounded-xl text-sm placeholder-[#2A2520]/40 focus:outline-none focus:border-[#B89968] focus:ring-1 focus:ring-[#B89968] font-sans"
              />
            </div>

            {/* Administration Route Select */}
            <div className="lg:col-span-3">
              <select
                value={selectedAdmin}
                onChange={(e) => setSelectedAdmin(e.target.value)}
                className="w-full px-4 py-3 bg-[#F8F4EC] border border-[#E2D9C7] rounded-xl text-sm text-[#2A2520]/80 focus:outline-none focus:border-[#B89968] font-sans"
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
                  className="text-xs text-[#8E7449] hover:text-[#B89968] font-semibold uppercase tracking-wider"
                >
                  Clear All Filters
                </button>
              )}
            </div>
          </div>

          {/* Category Tabs Grid */}
          <div className="border-t border-[#E2D9C7]/50 pt-6">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#B89968] block mb-3">Filter by Category</span>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory("all")}
                className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all border ${
                  selectedCategory === "all"
                    ? "bg-[#2A2520] text-[#F8F4EC] border-[#2A2520]"
                    : "bg-[#F8F4EC] text-[#2A2520]/70 border-[#E2D9C7] hover:bg-[#EFE8DA]/40"
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
                        ? "bg-[#B89968] text-[#F8F4EC] border-[#B89968]"
                        : "bg-[#F8F4EC] text-[#2A2520]/70 border-[#E2D9C7] hover:bg-[#EFE8DA]/40"
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
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="flex justify-between items-center mb-6 text-xs text-[#2A2520]/60">
          <span>Showing {filteredProducts.length} peptides matching parameters</span>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((p) => {
              const cat = CATEGORIES.find(c => c.slug === p.category);
              return (
                <div
                  key={p.id}
                  className="bg-[#EFE8DA]/20 border border-[#E2D9C7] rounded-3xl p-6 flex flex-col justify-between min-h-[300px] hover-lift transition-all"
                >
                  <div>
                    {/* Header */}
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#B89968] bg-[#B89968]/10 px-2 py-0.5 rounded-full">
                        {cat?.name || p.category}
                      </span>
                      <span className="text-[11px] text-[#2A2520]/50 font-medium font-sans">
                        {p.administration}
                      </span>
                    </div>

                    {/* Name */}
                    <h3 className="font-serif text-xl font-bold text-[#2A2520] mb-1">
                      {p.name}
                    </h3>
                    
                    {/* Tagline */}
                    <p className="text-xs text-[#8E7449] italic mb-3">
                      &ldquo;{p.tagline}&rdquo;
                    </p>

                    {/* Description */}
                    <p className="text-xs text-[#2A2520]/75 leading-relaxed line-clamp-3 mb-6 font-sans">
                      {p.description}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="border-t border-[#E2D9C7]/50 pt-4 flex justify-between items-center">
                    <span className="text-[11px] font-semibold text-[#2A2520]/50 font-sans">
                      Dosing: {p.protocol ? "Custom protocol" : "Standard"}
                    </span>
                    <Link
                      href={`/treatments/${p.slug}`}
                      className="px-4 py-2 rounded-xl bg-[#2A2520] text-[#F8F4EC] hover:bg-[#B89968] text-xs font-semibold uppercase tracking-wider transition-all flex items-center gap-0.5 group"
                    >
                      View Protocol <ChevronRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-20 bg-[#EFE8DA]/20 border border-[#E2D9C7]/40 rounded-3xl">
            <HelpCircle className="h-10 w-10 text-[#2A2520]/30 mx-auto mb-3" />
            <h3 className="font-serif text-lg font-bold text-[#2A2520]">No protocols matched</h3>
            <p className="text-xs text-[#2A2520]/60 mt-1 max-w-md mx-auto leading-relaxed">
              Nothing matched yet. Try searching for a different peptide name, metabolic goal, biological system, or administration route.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
                setSelectedAdmin("all");
              }}
              className="mt-4 px-4 py-2 border border-[#B89968] text-[#8E7449] hover:bg-[#B89968] hover:text-[#F8F4EC] rounded-full text-xs font-semibold uppercase tracking-wider transition-all"
            >
              Reset All Filters
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
