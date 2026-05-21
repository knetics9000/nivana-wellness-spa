"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Search, BookOpen, Clock, ChevronRight, HelpCircle } from "lucide-react";
import { KNOWLEDGE_ARTICLES, KBArticle } from "@/data/knowledge";

export default function KnowledgeBaseHub() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Get all unique categories
  const categories = useMemo(() => {
    const set = new Set(KNOWLEDGE_ARTICLES.map(a => a.category));
    return Array.from(set);
  }, []);

  // Filter articles based on search and category
  const filteredArticles = useMemo(() => {
    return KNOWLEDGE_ARTICLES.filter(a => {
      const matchesSearch = 
        a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        a.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        a.content.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === "all" || a.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  // Featured article: "What Are Peptides?" is always shown at the top
  const featuredArticle = KNOWLEDGE_ARTICLES.find(a => a.slug === "what-are-peptides") || KNOWLEDGE_ARTICLES[0];

  // Rest of the articles for the grid (excluding the featured one if not searching/filtering)
  const gridArticles = useMemo(() => {
    if (searchQuery || selectedCategory !== "all") {
      return filteredArticles;
    }
    return filteredArticles.filter(a => a.slug !== featuredArticle.slug);
  }, [filteredArticles, searchQuery, selectedCategory, featuredArticle.slug]);

  return (
    <div className="bg-[#F8F4EC] min-h-screen pb-24 font-sans text-[#2A2520]">
      {/* Header Banner */}
      <section className="bg-[#EFE8DA] py-16 border-b border-[#E2D9C7] text-[#2A2520]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#B89968]">Nivana Medical Journal</span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight">
            The Science of Longevity
          </h1>
          <p className="text-sm sm:text-base text-[#2A2520]/75 max-w-xl mx-auto leading-relaxed">
            Our library covers cellular biology, clinical study analyses, and step-by-step guides for patients. Read the same resources our physicians review.
          </p>
        </div>
      </section>

      {/* Main Search & Category bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="bg-[#F8F4EC] border border-[#E2D9C7] rounded-3xl p-6 shadow-sm space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            
            {/* Search Input */}
            <div className="lg:col-span-8 relative">
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#2A2520]/40">
                <Search className="h-5 w-5" />
              </span>
              <input
                type="text"
                placeholder="Search the medical journal (by peptide, condition, or dosing step)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-[#F8F4EC] border border-[#E2D9C7] rounded-xl text-sm placeholder-[#2A2520]/40 focus:outline-none focus:border-[#B89968] focus:ring-1 focus:ring-[#B89968] font-sans"
              />
            </div>

            {/* Clear Filters button */}
            <div className="lg:col-span-4 flex items-center justify-end">
              {(searchQuery || selectedCategory !== "all") && (
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("all");
                  }}
                  className="text-xs text-[#8E7449] hover:text-[#B89968] font-semibold uppercase tracking-wider"
                >
                  Clear Filters
                </button>
              )}
            </div>
          </div>

          {/* Category Filtering Tabs */}
          <div className="border-t border-[#E2D9C7]/50 pt-6">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#B89968] block mb-3">Topic Categories</span>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory("all")}
                className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all border ${
                  selectedCategory === "all"
                    ? "bg-[#2A2520] text-[#F8F4EC] border-[#2A2520]"
                    : "bg-[#F8F4EC] text-[#2A2520]/70 border-[#E2D9C7] hover:bg-[#EFE8DA]/40"
                }`}
              >
                All Articles ({KNOWLEDGE_ARTICLES.length})
              </button>
              {categories.map((cat, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all border ${
                    selectedCategory === cat
                      ? "bg-[#B89968] text-[#F8F4EC] border-[#B89968]"
                      : "bg-[#F8F4EC] text-[#2A2520]/70 border-[#E2D9C7] hover:bg-[#EFE8DA]/40"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article Block (only shown if not actively searching/filtering) */}
      {!searchQuery && selectedCategory === "all" && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <div className="bg-[#EFE8DA]/45 border border-[#E2D9C7] rounded-3xl p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3 text-xs text-[#B89968] font-bold uppercase">
                <span className="bg-[#B89968]/15 px-2.5 py-0.5 rounded-full">{featuredArticle.category}</span>
                <span className="text-[#E2D9C7] font-normal">|</span>
                <span className="flex items-center gap-1 font-normal text-[#2A2520]/50"><Clock className="h-3 w-3" /> {featuredArticle.readTime}</span>
              </div>
              
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#2A2520] hover:text-[#B89968] transition-colors">
                <Link href={`/knowledge/${featuredArticle.slug}`}>
                  {featuredArticle.title}
                </Link>
              </h2>
              
              <p className="text-xs sm:text-sm text-[#2A2520]/75 leading-relaxed font-sans">
                {featuredArticle.summary}
              </p>

              <div className="pt-4">
                <Link
                  href={`/knowledge/${featuredArticle.slug}`}
                  className="inline-flex items-center gap-1.5 px-6 py-3 bg-[#2A2520] hover:bg-[#B89968] text-[#F8F4EC] rounded-full text-xs font-semibold uppercase tracking-widest transition-colors"
                >
                  Read Featured Article <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#F8F4EC] rounded-2xl border border-[#E2D9C7]/80 p-6 space-y-4">
              <h3 className="text-xs uppercase tracking-widest text-[#B89968] font-bold">Key Takeaways</h3>
              <ul className="space-y-3">
                {featuredArticle.keyTakeaways.slice(0, 3).map((takeaway, i) => (
                  <li key={i} className="flex gap-2 items-start text-xs text-[#2A2520]/80 leading-relaxed font-sans">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#B89968] shrink-0 mt-1.5"></span>
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </section>
      )}

      {/* Grid List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#2A2520] mb-8 pb-4 border-b border-[#E2D9C7]/40">
          {searchQuery || selectedCategory !== "all" ? "Search Results" : "More Articles"}
        </h2>

        {gridArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gridArticles.map((article) => (
              <div 
                key={article.slug}
                className="bg-[#EFE8DA]/25 border border-[#E2D9C7] rounded-3xl p-6 flex flex-col justify-between min-h-[260px] hover-lift transition-all"
              >
                <div>
                  <div className="flex justify-between items-center text-[10px] text-[#2A2520]/60 uppercase font-bold tracking-wider mb-3">
                    <span className="text-[#B89968] bg-[#B89968]/10 px-2 py-0.5 rounded-full">{article.category}</span>
                    <span className="flex items-center gap-1 font-medium"><Clock className="h-3 w-3" /> {article.readTime}</span>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-[#2A2520] hover:text-[#B89968] transition-colors mb-2">
                    <Link href={`/knowledge/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h3>
                  
                  <p className="text-xs text-[#2A2520]/75 leading-relaxed line-clamp-3 mb-6 font-sans">
                    {article.summary}
                  </p>
                </div>

                <div className="border-t border-[#E2D9C7]/50 pt-4 flex justify-between items-center">
                  <span className="text-[10px] text-[#2A2520]/50 font-sans">
                    Updated: {article.lastUpdated}
                  </span>
                  <Link 
                    href={`/knowledge/${article.slug}`}
                    className="text-[#8E7449] hover:text-[#B89968] text-xs font-semibold uppercase tracking-wider flex items-center gap-0.5 group"
                  >
                    Read Full Article <ChevronRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-[#EFE8DA]/10 border border-[#E2D9C7]/40 rounded-3xl">
            <BookOpen className="h-10 w-10 text-[#2A2520]/20 mx-auto mb-3" />
            <h3 className="font-serif text-lg font-bold text-[#2A2520]">No articles matched</h3>
            <p className="text-xs text-[#2A2520]/50 mt-1 max-w-sm mx-auto leading-relaxed">
              Nothing matched yet. Try searching for a different peptide name, metabolic goal, or body system.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
