"use client";

import React, { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Calendar, ArrowRight, BookOpen, ShieldCheck } from "lucide-react";
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
          <h3 key={idx} className="font-serif text-xl sm:text-2xl font-bold text-[#2A2520] mt-8 mb-4">
            {trimmed.replace("### ", "")}
          </h3>
        );
      }
      if (trimmed.startsWith("#### ")) {
        return (
          <h4 key={idx} className="font-serif text-lg font-bold text-[#2A2520] mt-6 mb-3">
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
            <ol key={idx} className="list-decimal pl-5 my-4 space-y-2 text-xs sm:text-sm text-[#2A2520]/80">
              {lines.map((line, i) => (
                <li key={i} className="font-sans leading-relaxed">
                  {line.replace(/^\d+\.\s+/, "")}
                </li>
              ))}
            </ol>
          );
        } else {
          return (
            <ul key={idx} className="list-disc pl-5 my-4 space-y-2 text-xs sm:text-sm text-[#2A2520]/80">
              {lines.map((line, i) => (
                <li key={i} className="font-sans leading-relaxed">
                  {line.replace(/^[\*\-]\s+/, "")}
                </li>
              ))}
            </ul>
          );
        }
      }

      // Default to Paragraph
      return (
        <p key={idx} className="text-xs sm:text-sm md:text-base leading-relaxed text-[#2A2520]/85 my-4 font-sans">
          {trimmed}
        </p>
      );
    });
  };

  return (
    <div className="bg-[#F8F4EC] min-h-screen pb-24 font-sans text-[#2A2520]">
      {/* Top back button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link 
          href="/knowledge" 
          className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-[#8E7449] hover:text-[#B89968] transition-colors"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Medical Journal
        </Link>
      </div>

      {/* Main Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column: Article Body */}
        <div className="lg:col-span-8 space-y-8">
          
          {/* Header Metadata */}
          <div className="space-y-4 pb-6 border-b border-[#E2D9C7]/50">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#B89968] bg-[#B89968]/10 px-2.5 py-0.5 rounded-full inline-block">
              {article.category}
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#2A2520]">
              {article.title}
            </h1>
            <div className="flex flex-wrap gap-6 items-center text-xs text-[#2A2520]/60">
              <span className="flex items-center gap-1.5"><Clock className="h-4 w-4 text-[#B89968]" /> Read Time: {article.readTime}</span>
              <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4 text-[#B89968]" /> Updated: {article.lastUpdated}</span>
            </div>
          </div>

          {/* Key Takeaways Panel */}
          <div className="bg-[#EFE8DA]/45 border border-[#E2D9C7] rounded-3xl p-6 sm:p-8 space-y-4">
            <h2 className="text-xs uppercase tracking-widest text-[#B89968] font-bold">Key Takeaways</h2>
            <ul className="space-y-3.5">
              {article.keyTakeaways.map((takeaway, i) => (
                <li key={i} className="flex gap-3 items-start text-xs sm:text-sm text-[#2A2520]/80 leading-relaxed font-sans">
                  <ShieldCheck className="h-5 w-5 text-[#B89968] shrink-0 mt-0.5" />
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Article Text Content */}
          <div className="prose max-w-none text-[#2A2520] select-text">
            {renderContent(article.content)}
          </div>
        </div>

        {/* Right Column: Sidebar */}
        <div className="lg:col-span-4 space-y-6">
          <div className="space-y-6 sticky top-24">
            
            {/* Contextual Product Pitch (If matching peptide exists) */}
            {relatedProduct && (
              <div className="bg-[#B89968]/10 border border-[#B89968]/30 rounded-3xl p-6 space-y-4">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#8E7449] block">Related Protocol</span>
                <h3 className="font-serif text-lg font-bold text-[#2A2520]">{relatedProduct.name}</h3>
                <p className="text-xs text-[#2A2520]/75 leading-relaxed font-sans">
                  We supply sterile, pharmacy-grade {relatedProduct.name} under physician-supervised telehealth protocols.
                </p>
                <Link
                  href={`/treatments/${relatedProduct.slug}`}
                  className="w-full text-center block py-2.5 rounded-xl bg-[#2A2520] text-[#F8F4EC] hover:bg-[#B89968] text-xs font-semibold uppercase tracking-wider transition-all"
                >
                  View Dosing & Pricing
                </Link>
              </div>
            )}

            {/* Standard Telehealth Consultation Lead Pitch */}
            <div className="bg-[#EFE8DA]/60 border border-[#E2D9C7] rounded-3xl p-6 space-y-4 shadow-sm">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#B89968] block">Telehealth Consultation</span>
              <h3 className="font-serif text-lg font-bold text-[#2A2520]">Discuss this therapy with a physician</h3>
              <p className="text-xs text-[#2A2520]/75 leading-relaxed font-sans">
                Peptide therapies require screening and custom dosing schedules. Complete our 5-minute health history intake to begin.
              </p>
              <Link
                href="/intake"
                className="w-full text-center block py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#B89968] text-[#F8F4EC] hover:bg-[#8E7449] transition-all flex items-center justify-center gap-1 group shadow-sm"
              >
                Start Free Consult <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>

            {/* Related Articles Sidebar Links */}
            <div className="border border-[#E2D9C7] rounded-3xl p-6 bg-[#F8F4EC] space-y-4">
              <h3 className="font-serif text-lg font-bold text-[#2A2520] border-b border-[#E2D9C7]/50 pb-2">Related Articles</h3>
              <div className="space-y-4">
                {relatedArticles.map((ra) => (
                  <div key={ra.slug} className="space-y-1">
                    <span className="text-[9px] uppercase tracking-wider text-[#B89968] font-bold">{ra.category}</span>
                    <h4 className="font-serif text-sm font-bold text-[#2A2520] hover:text-[#B89968] transition-colors leading-tight">
                      <Link href={`/knowledge/${ra.slug}`}>
                        {ra.title}
                      </Link>
                    </h4>
                    <span className="text-[10px] text-[#2A2520]/50 block font-sans">Read Time: {ra.readTime}</span>
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
