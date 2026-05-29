"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Search, BookOpen, Clock, ChevronRight } from "lucide-react";
import { KNOWLEDGE_ARTICLES } from "@/data/knowledge";

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
    <div className="min-h-screen pb-24 font-sans text-[#F7F2EC] relative z-0 selection:bg-[#E8B29A]/30">
      
      {/* Background Video Backdrop */}
      <div className="absolute inset-0 w-full h-full -z-20 bg-[#0B0A09]">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-15"
        >
          <source src="/videos/peptide_skin.mp4" type="video/mp4" />
        </video>
      </div>
      {/* Soft color overlays */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#0B0A09] via-[#0B0A09]/95 to-[#E8B29A]/10 -z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0B0A09]/50 to-[#0B0A09] -z-10"></div>

      {/* Header Banner */}
      <section className="relative py-24 border-b border-white/10 overflow-hidden z-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 relative z-10 animate-fade-up">
          <div className="flex items-center justify-center gap-2">
            <span className="h-[0.5px] w-6 bg-[#E8B29A]/20"></span>
            <span className="text-[10px] font-mono uppercase tracking-[0.35em] text-[#E8B29A] bg-[#E8B29A]/10 border border-[#E8B29A]/20 px-3 py-1 rounded-full inline-block font-semibold">
              VALARA MEDICAL JOURNAL
            </span>
            <span className="h-[0.5px] w-6 bg-[#E8B29A]/20"></span>
          </div>
          <h1 className="font-sans text-5xl sm:text-7xl font-extralight tracking-tight text-white leading-none">
            The Science of Longevity
          </h1>
          <p className="text-sm sm:text-base text-white/70 max-w-xl mx-auto leading-relaxed font-sans font-light">
            Our library covers cellular biology, clinical study analyses, and step-by-step guides for patients. Read the same resources our physicians review.
          </p>
        </div>
      </section>

      {/* Main Search & Category bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 relative z-10 animate-fade-up">
        <div className="glass-panel-dark rounded-3xl p-6 shadow-xl border border-white/10 space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            
            {/* Search Input */}
            <div className="lg:col-span-8 relative">
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-white/40">
                <Search className="h-5 w-5" />
              </span>
              <input
                type="text"
                placeholder="Search the medical journal (by peptide, condition)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-white/5 border border-white/10 rounded-2xl text-sm placeholder-white/30 focus:outline-none focus:border-[#E8B29A] text-white font-sans transition-colors"
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
                  className="text-xs text-white/60 hover:text-white font-bold uppercase tracking-widest transition-colors underline underline-offset-4 decoration-[#E8B29A] decoration-2"
                >
                  Clear Filters
                </button>
              )}
            </div>
          </div>

          {/* Category Filtering Tabs */}
          <div className="border-t border-white/10 pt-6">
            <span className="text-[10px] font-mono uppercase tracking-wider text-white/45 block mb-3">Topic Categories</span>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory("all")}
                className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all border ${
                  selectedCategory === "all"
                    ? "bg-[#E8B29A] text-[#0B0A09] border-[#E8B29A]"
                    : "bg-white/5 text-white/70 border-white/10 hover:bg-white/10"
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
                      ? "bg-[#E8B29A] text-[#0B0A09] border-[#E8B29A]"
                      : "bg-white/5 text-white/70 border-white/10 hover:bg-white/10"
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
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 animate-fade-up relative z-10">
          <div className="glass-panel-dark rounded-3xl p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center shadow-xl border border-white/10">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3 text-xs uppercase">
                <span className="text-white bg-white/10 border border-white/20 px-2.5 py-1 rounded-full font-sans font-bold">{featuredArticle.category}</span>
                <span className="text-white/20 font-normal">|</span>
                <span className="flex items-center gap-1 font-mono text-white/50"><Clock className="h-3 w-3" /> {featuredArticle.readTime}</span>
              </div>
              
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-light tracking-tight text-white hover:text-[#E8B29A] transition-colors leading-tight">
                <Link href={`/knowledge/${featuredArticle.slug}`}>
                  {featuredArticle.title}
                </Link>
              </h2>
              
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-sans font-light">
                {featuredArticle.summary}
              </p>

              <div className="pt-4">
                <Link
                  href={`/knowledge/${featuredArticle.slug}`}
                  className="inline-flex items-center gap-1.5 px-6 py-3 bg-[#E8B29A] text-[#0B0A09] hover:bg-white hover:text-[#0B0A09] transition-all duration-300 rounded-full text-xs font-bold uppercase tracking-widest shadow-md font-mono"
                >
                  Read Featured Article <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 bg-black/20 rounded-2xl border border-white/10 p-6 space-y-4">
              <h3 className="text-[10px] font-mono uppercase tracking-widest text-[#E8B29A] font-bold">[ KEY TAKEAWAYS ]</h3>
              <ul className="space-y-3">
                {featuredArticle.keyTakeaways.slice(0, 3).map((takeaway, i) => (
                  <li key={i} className="flex gap-2 items-start text-xs text-white/70 leading-relaxed font-sans font-light">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#E8B29A] shrink-0 mt-1.5 shadow-[0_0_4px_#E8B29A]"></span>
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </section>
      )}

      {/* Grid List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 relative z-10 animate-fade-up">
        <h2 className="font-serif text-2xl font-light text-white mb-8 pb-4 border-b border-white/10">
          {searchQuery || selectedCategory !== "all" ? "Search Results" : "More Articles"}
        </h2>

        {gridArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gridArticles.map((article) => (
              <div 
                key={article.slug}
                className="glass-panel-dark rounded-3xl p-6 flex flex-col justify-between min-h-[280px] border border-white/10 hover:border-[#E8B29A]/45 hover-lift shadow-lg glow-peach-glow"
              >
                <div>
                  <div className="flex justify-between items-center text-[10px] uppercase font-bold tracking-wider mb-4">
                    <span className="text-white bg-white/5 border border-white/10 px-2.5 py-1 rounded-full font-sans">{article.category}</span>
                    <span className="flex items-center gap-1 font-mono text-white/45"><Clock className="h-3 w-3" /> {article.readTime}</span>
                  </div>

                  <h3 className="font-serif text-lg font-light text-white hover:text-[#E8B29A] transition-colors mb-2 leading-snug">
                    <Link href={`/knowledge/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h3>
                  
                  <p className="text-xs text-white/60 leading-relaxed line-clamp-3 mb-6 font-sans font-light">
                    {article.summary}
                  </p>
                </div>

                <div className="border-t border-white/10 pt-4 flex justify-between items-center font-sans">
                  <span className="text-[10px] text-white/40">
                    Updated: {article.lastUpdated}
                  </span>
                  <Link 
                    href={`/knowledge/${article.slug}`}
                    className="text-[#E8B29A] hover:text-white text-xs font-bold uppercase tracking-wider flex items-center gap-0.5 group transition-colors font-mono"
                  >
                    Read Full Article <ChevronRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-24 glass-panel-dark rounded-3xl border border-white/10 shadow-lg">
            <BookOpen className="h-10 w-10 text-white/30 mx-auto mb-3 animate-pulse-slow" />
            <h3 className="font-serif text-lg font-light text-white">No articles matched</h3>
            <p className="text-xs text-white/60 mt-1 max-w-sm mx-auto leading-relaxed font-sans font-light">
              Nothing matched yet. Try searching for a different peptide name, metabolic goal, or body system.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
