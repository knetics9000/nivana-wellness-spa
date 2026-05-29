"use client";

import React, { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Calendar, ArrowRight } from "lucide-react";
import { MOCK_BLOG_POSTS } from "../page";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function BlogDetailPage({ params }: PageProps) {
  const { slug } = use(params);
  
  // Find blog post
  const post = MOCK_BLOG_POSTS.find(p => p.slug === slug);
  if (!post) {
    notFound();
  }

  // Find other posts (up to 3, excluding current)
  const otherPosts = MOCK_BLOG_POSTS.filter(p => p.slug !== post.slug).slice(0, 3);

  // Render paragraphs
  const renderParagraphs = (text: string) => {
    return text.split("\n\n").map((para, idx) => {
      const trimmed = para.trim();
      if (!trimmed) return null;

      // Handle Headers inside post content
      if (trimmed.startsWith("### ")) {
        return (
          <h3 key={idx} className="font-serif text-xl sm:text-2xl font-light text-white mt-8 mb-4">
            {trimmed.replace("### ", "")}
          </h3>
        );
      }

      // Handle List items inside post content
      if (trimmed.startsWith("* ") || trimmed.startsWith("- ")) {
        const lines = trimmed.split("\n");
        return (
          <ul key={idx} className="list-disc pl-5 my-4 space-y-2 text-xs sm:text-sm text-white/80">
            {lines.map((line, i) => (
              <li key={i} className="font-sans leading-relaxed font-light">
                {line.replace(/^[\*\-]\s+/, "")}
              </li>
            ))}
          </ul>
        );
      }

      return (
        <p key={idx} className="text-xs sm:text-sm md:text-base leading-relaxed text-white/85 my-4 font-sans font-light">
          {trimmed}
        </p>
      );
    });
  };

  return (
    <div className="min-h-screen pb-24 font-sans text-white relative z-0">
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
      <div className="absolute inset-0 bg-gradient-to-tr from-[#0B0A09]/95 via-[#0B0A09]/90 to-[#E8B29A]/10 -z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0B0A09]/40 to-[#0B0A09] -z-10"></div>

      {/* Top back button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 relative z-10">
        <Link 
          href="/blog" 
          className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest font-bold text-white hover:text-[#E8B29A] transition-colors underline underline-offset-4 decoration-[#E8B29A] decoration-2"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Blog
        </Link>
      </div>

      {/* Main Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 grid grid-cols-1 lg:grid-cols-12 gap-12 animate-fade-up relative z-10">
        {/* Left Column: Post Body */}
        <div className="lg:col-span-8 space-y-6">
          <div className="space-y-4 pb-6 border-b border-white/10">
            <span className="text-[9px] font-bold uppercase tracking-wider text-[#E8B29A] bg-[#E8B29A]/10 border border-[#E8B29A]/20 px-2.5 py-1 rounded-full inline-block font-sans">
              {post.category}
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-white leading-tight">
              {post.title}
            </h1>
            <div className="flex gap-6 items-center text-xs text-white/40 font-mono">
              <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> {post.readTime} read</span>
              <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" /> Published: {post.date}</span>
            </div>
          </div>

          <div className="prose max-w-none text-white/90">
            {renderParagraphs(post.content)}
          </div>
        </div>

        {/* Right Column: Sidebar */}
        <div className="lg:col-span-4 space-y-6">
          <div className="space-y-6 lg:sticky lg:top-28">
            
            {/* Consultation Pitch */}
            <div className="glass-panel-dark rounded-3xl p-6 space-y-4 shadow-lg">
              <span className="text-[10px] font-mono uppercase tracking-widest text-white/40 font-bold block">VALARA TELEHEALTH</span>
              <h3 className="font-serif text-lg font-semibold text-white">Begin your wellness journey</h3>
              <p className="text-xs text-white/80 leading-relaxed font-sans font-light">
                Our physicians specialize in targeted peptide therapies matching your biology. Fast 5-minute online screening.
              </p>
              <Link
                href="/intake"
                className="w-full text-center block py-3.5 bg-[#E8B29A] text-[#0B0A09] hover:bg-white hover:text-[#0B0A09] transition-all duration-300 rounded-full text-xs font-bold uppercase tracking-widest shadow-md flex items-center justify-center gap-1.5 font-mono"
              >
                Get Started <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Other Blog Posts */}
            {otherPosts.length > 0 && (
              <div className="glass-panel-dark rounded-3xl p-6 shadow-lg space-y-4">
                <h3 className="font-serif text-lg font-semibold text-white border-b border-white/10 pb-2">More from Blog</h3>
                <div className="space-y-4">
                  {otherPosts.map((op) => (
                    <div key={op.slug} className="space-y-1">
                      <span className="text-[9px] uppercase tracking-widest text-white/40 font-bold block mb-1 font-sans">{op.category}</span>
                      <h4 className="font-serif text-sm font-semibold text-white hover:text-[#E8B29A] transition-colors leading-tight">
                        <Link href={`/blog/${op.slug}`}>
                          {op.title}
                        </Link>
                      </h4>
                      <span className="text-[10px] text-white/40 block font-mono">{op.date}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>
        </div>
      </section>
    </div>
  );
}
