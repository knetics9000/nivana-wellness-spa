"use client";

import React, { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Calendar, ArrowRight, BookOpen, ShieldCheck, ChevronRight } from "lucide-react";
import { KNOWLEDGE_ARTICLES, KBArticle } from "@/data/knowledge";
import { PRODUCTS } from "@/data/products";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function ArticleDetailPage({ params }: PageProps) {
  const { slug } = use(params);
  
  // Find article
  const article = KNOWLEDGE_ARTICLES.find(a => a.slug === slug);
  if (!article) {
    notFound();
  }

  // Find related articles (same category, up to 3, excluding current)
  const relatedArticles = KNOWLEDGE_ARTICLES
    .filter(a => a.category === article.category && a.slug !== article.slug)
    .slice(0, 3);

  // If we don't have enough in the same category, fill with others
  if (relatedArticles.length < 3) {
    const filledSlugs = new Set(relatedArticles.map(a => a.slug));
    const others = KNOWLEDGE_ARTICLES.filter(
      a => a.slug !== article.slug && !filledSlugs.has(a.slug)
    );
    relatedArticles.push(...others.slice(0, 3 - relatedArticles.length));
  }

  // Map article to a related treatment if applicable
  const relatedProduct = PRODUCTS.find(p => {
    // simple matching of slug prefixes
    return article.slug.includes(p.id) || p.id.includes(article.slug.replace("-deep-dive", "").replace("-healing-peptide", ""));
  });

  // Simple custom Markdown to JSX parser
  const renderContent = (text: string) => {
    // split by double newlines to isolate blocks
    const blocks = text.split(/\n\s*\n/);

    return blocks.map((block, idx) => {
      const trimmed = block.trim();
      if (!trimmed) return null;

      // Handle Headers
      if (trimmed.startsWith("### ")) {
        return (
          <h3 key={idx} className="font-serif text-xl sm:text-2xl font-light text-[#E8B29A] mt-8 mb-4">
            {trimmed.replace("### ", "")}
          </h3>
        );
      }
      if (trimmed.startsWith("#### ")) {
        return (
          <h4 key={idx} className="font-serif text-lg font-light text-white mt-6 mb-3">
            {trimmed.replace("#### ", "")}
          </h4>
        );
      }

      // Handle List Items
      if (trimmed.startsWith("* ") || trimmed.startsWith("- ") || trimmed.startsWith("1. ")) {
        const lines = trimmed.split("\n");
        const isNumbered = trimmed.startsWith("1. ");

        if (isNumbered) {
          return (
            <ol key={idx} className="list-decimal pl-5 my-4 space-y-2 text-xs sm:text-sm text-white/70">
              {lines.map((line, i) => (
                <li key={i} className="font-sans leading-relaxed font-light">
                  {line.replace(/^\d+\.\s+/, "")}
                </li>
              ))}
            </ol>
          );
        } else {
          return (
            <ul key={idx} className="list-disc pl-5 my-4 space-y-2 text-xs sm:text-sm text-white/70">
              {lines.map((line, i) => (
                <li key={i} className="font-sans leading-relaxed font-light">
                  {line.replace(/^[\*\-]\s+/, "")}
                </li>
              ))}
            </ul>
          );
        }
      }

      // Default to Paragraph
      return (
        <p key={idx} className="text-xs sm:text-sm md:text-base leading-relaxed text-white/80 my-4 font-sans font-light">
          {trimmed}
        </p>
      );
    });
  };

  return (
    <div className="min-h-screen pb-24 font-sans text-[#F7F2EC] relative z-0 selection:bg-[#E8B29A]/30">
      
      {/* Background Video */}
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

      {/* Top back button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 relative z-10">
        <Link 
          href="/knowledge" 
          className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest font-mono text-white/50 hover:text-white transition-colors"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> Back to Medical Journal
        </Link>
      </div>

      {/* Main Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 grid grid-cols-1 lg:grid-cols-12 gap-12 animate-fade-up relative z-10">
        
        {/* Left Column: Article Body */}
        <div className="lg:col-span-8 space-y-8 animate-fade-up">
          
          {/* Header Metadata */}
          <div className="space-y-4 pb-6 border-b border-white/10">
            <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-white bg-white/10 border border-white/20 px-2.5 py-1 rounded-full inline-block">
              {article.category}
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-white leading-tight">
              {article.title}
            </h1>
            <div className="flex flex-wrap gap-6 items-center text-xs text-white/50 font-mono">
              <span className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5 text-white/40" /> Read Time: {article.readTime}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5 text-white/40" /> Updated: {article.lastUpdated}
              </span>
            </div>
          </div>

          {/* Key Takeaways Panel */}
          <div className="glass-panel-dark rounded-3xl p-6 sm:p-8 space-y-4 shadow-lg border border-white/10">
            <h2 className="text-[10px] font-mono uppercase tracking-widest text-[#E8B29A] font-bold">[ KEY TAKEAWAYS ]</h2>
            <ul className="space-y-3.5">
              {article.keyTakeaways.map((takeaway, i) => (
                <li key={i} className="flex gap-3 items-start text-xs sm:text-sm text-white/80 leading-relaxed font-sans font-light">
                  <ShieldCheck className="h-4 w-4 text-[#8FA89B] shrink-0 mt-0.5" />
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Article Text Content */}
          <div className="prose max-w-none text-white/80 select-text font-light leading-relaxed">
            {renderContent(article.content)}
          </div>
        </div>

        {/* Right Column: Sidebar */}
        <div className="lg:col-span-4 space-y-6">
          <div className="space-y-6 lg:sticky lg:top-28">
            
            {/* Contextual Product Pitch (If matching peptide exists) */}
            {relatedProduct && (
              <div className="glass-panel-dark border-[#E8B29A]/30 rounded-3xl p-6 space-y-4 shadow-lg bg-[#E8B29A]/5 border">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#E8B29A] font-bold block">[ RELATED PROTOCOL ]</span>
                <h3 className="font-serif text-xl font-light text-white">{relatedProduct.name}</h3>
                <p className="text-xs text-white/70 leading-relaxed font-sans font-light">
                  We supply sterile, pharmacy-grade {relatedProduct.name} under physician-supervised telehealth protocols.
                </p>
                <Link
                  href={`/treatments/${relatedProduct.slug}`}
                  className="w-full text-center block py-2.5 rounded-full bg-white/10 text-white border border-white/15 hover:border-white/30 hover:bg-white/20 text-xs font-bold uppercase tracking-widest transition-all font-mono"
                >
                  View Dosing &amp; Pricing
                </Link>
              </div>
            )}

            {/* Standard Telehealth Consultation Lead Pitch */}
            <div className="glass-panel-dark rounded-3xl p-6 space-y-4 shadow-lg border border-white/10 animate-fade-up">
              <span className="text-[10px] font-mono uppercase tracking-widest text-white/45 font-bold block">Telehealth Consultation</span>
              <h3 className="font-serif text-xl font-light text-white">Discuss this therapy with a physician</h3>
              <p className="text-xs text-white/70 leading-relaxed font-sans font-light">
                Peptide therapies require screening and custom dosing schedules. Complete our 5-minute health history intake to begin.
              </p>
              <Link
                href="/intake"
                className="w-full text-center block py-3 rounded-full text-xs font-bold uppercase tracking-widest bg-[#E8B29A] text-[#0B0A09] hover:bg-white hover:text-[#0B0A09] transition-all flex items-center justify-center gap-1.5 group font-mono"
              >
                Start Free Consult <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>

            {/* Related Articles Sidebar Links */}
            <div className="glass-panel-dark rounded-3xl p-6 shadow-lg border border-white/10 space-y-4">
              <h3 className="font-serif text-lg font-light text-white border-b border-white/10 pb-2">Related Articles</h3>
              <div className="space-y-4">
                {relatedArticles.map((ra) => (
                  <div key={ra.slug} className="space-y-1">
                    <span className="text-[9px] font-mono uppercase tracking-widest text-[#E8B29A]/80 block">{ra.category}</span>
                    <h4 className="font-serif text-sm font-light text-white hover:text-[#E8B29A] transition-colors leading-snug">
                      <Link href={`/knowledge/${ra.slug}`}>
                        {ra.title}
                      </Link>
                    </h4>
                    <span className="text-[10px] text-white/45 block font-sans font-light">Read Time: {ra.readTime}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
