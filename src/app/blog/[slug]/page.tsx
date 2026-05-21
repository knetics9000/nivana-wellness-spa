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
          <h3 key={idx} className="font-serif text-xl sm:text-2xl font-bold text-[#2A2520] mt-8 mb-4">
            {trimmed.replace("### ", "")}
          </h3>
        );
      }

      // Handle List items inside post content
      if (trimmed.startsWith("* ") || trimmed.startsWith("- ")) {
        const lines = trimmed.split("\n");
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

      return (
        <p key={idx} className="text-xs sm:text-sm md:text-base leading-relaxed text-[#2A2520]/80 my-4 font-sans">
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
          href="/blog" 
          className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-[#8E7449] hover:text-[#B89968] transition-colors"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Blog
        </Link>
      </div>

      {/* Main Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column: Post Body */}
        <div className="lg:col-span-8 space-y-6">
          <div className="space-y-4 pb-6 border-b border-[#E2D9C7]/50">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#B89968] bg-[#B89968]/10 px-2.5 py-0.5 rounded-full inline-block">
              {post.category}
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#2A2520] leading-tight">
              {post.title}
            </h1>
            <div className="flex gap-6 items-center text-xs text-[#2A2520]/50 font-sans">
              <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> {post.readTime} read</span>
              <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" /> Published: {post.date}</span>
            </div>
          </div>

          <div className="prose max-w-none text-[#2A2520]">
            {renderParagraphs(post.content)}
          </div>
        </div>

        {/* Right Column: Sidebar */}
        <div className="lg:col-span-4 space-y-6">
          <div className="space-y-6 sticky top-24">
            
            {/* Consultation Pitch */}
            <div className="bg-[#EFE8DA]/60 border border-[#E2D9C7] rounded-3xl p-6 space-y-4 shadow-sm">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#B89968] block">Nivana Telehealth</span>
              <h3 className="font-serif text-lg font-bold text-[#2A2520]">Begin your wellness journey</h3>
              <p className="text-xs text-[#2A2520]/75 leading-relaxed font-sans">
                Our physicians specialize in targeted peptide therapies matching your biology. Fast 5-minute online screening.
              </p>
              <Link
                href="/intake"
                className="w-full text-center block py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#B89968] text-[#F8F4EC] hover:bg-[#8E7449] transition-all flex items-center justify-center gap-1 shadow-sm"
              >
                Get Started <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Other Blog Posts */}
            {otherPosts.length > 0 && (
              <div className="border border-[#E2D9C7] rounded-3xl p-6 bg-[#F8F4EC] space-y-4">
                <h3 className="font-serif text-lg font-bold text-[#2A2520] border-b border-[#E2D9C7]/50 pb-2">More from Blog</h3>
                <div className="space-y-4">
                  {otherPosts.map((op) => (
                    <div key={op.slug} className="space-y-1">
                      <span className="text-[9px] uppercase tracking-wider text-[#B89968] font-bold">{op.category}</span>
                      <h4 className="font-serif text-sm font-bold text-[#2A2520] hover:text-[#B89968] transition-colors leading-tight">
                        <Link href={`/blog/${op.slug}`}>
                          {op.title}
                        </Link>
                      </h4>
                      <span className="text-[10px] text-[#2A2520]/50 block font-sans">{op.date}</span>
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
