"use client";

import React from "react";
import Link from "next/link";
import { Clock, ChevronRight } from "lucide-react";

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  category: string;
  summary: string;
  content: string;
}

export const MOCK_BLOG_POSTS: BlogPost[] = [
  {
    slug: "new-compounding-standards-2026",
    title: "Understanding the New USP Sterile Compounding Standards",
    date: "May 10, 2026",
    readTime: "5 mins",
    category: "Regulatory",
    summary: "A review of how recent state board rules regulate sterile pharmacy compounding to protect client safety.",
    content: `
Compounded medications are a critical resource for patients who require custom formulations or dosages. However, because these medications are prepared in pharmacy facilities rather than mass-produced in industrial drug factories, sterile handling is paramount.

The United States Pharmacopeia (USP) defines general chapters to set guidelines for compounding. The most critical of these is **USP <797>**, which establishes standards for sterile preparations to prevent contamination and patient harm.

### Key Changes in Sterile Compounding Standards

In recent updates, state pharmacy boards and federal agencies have tightened regulations around:

1. **Air quality requirements.** Introducing strict ISO-class cleanroom parameters to ensure particulates are filtered.
2. **Beyond-Use Dates (BUD).** Shortening the default expiration periods for sterile solutions unless rigorous stability testing has been performed on the specific batch.
3. **Personnel training.** Requiring continuous aseptic verification and media-fill tests for compounding technicians.

For patients using subcutaneous injections, these strict guidelines mean peace of mind. Knowing your compounding facility meets or exceeds USP <797> standards is the first and most important step in safe peptide therapy.
    `
  },
  {
    slug: "preserving-skeletal-muscle",
    title: "Preserving Lean Skeletal Muscle on GLP-1 Therapy",
    date: "May 12, 2026",
    readTime: "6 mins",
    category: "Nutrition",
    summary: "Why a high-protein nutrition plan and heavy resistance training are mandatory to prevent muscle loss while losing weight.",
    content: `
When utilizing GLP-1 receptor agonists like Semaglutide or Tirzepatide, weight loss occurs rapidly. However, weight loss is not always fat loss. Without proper intervention, up to 40% of the weight lost on GLP-1s can come from lean skeletal muscle tissue.

Skeletal muscle is the primary driver of your basal metabolic rate (BMR) and is essential for physical strength, bone density, and glucose disposal.

### Actionable Strategies to Preserve Muscle

To ensure that the weight you lose comes from adipose tissue rather than muscle, follow these three pillars:

* **Prioritize Protein Intake:** Target at least 0.8g to 1.0g of high-quality protein per pound of target body weight daily. This triggers muscle protein synthesis.
* **Heavy Resistance Training:** Engage in load-bearing exercise 3–4 times weekly. Lifting weights signals the body that muscle tissue is actively required, preventing its breakdown.
* **Slow the Titration:** Rapid weight loss increases muscle loss. Work with your physician to keep the titration slow, losing no more than 1–2 pounds weekly.
    `
  },
  {
    slug: "rehydration-hydration-essentials",
    title: "Hydration and Electrolyte Balance on Peptide Protocols",
    date: "May 15, 2026",
    readTime: "4 mins",
    category: "Wellness",
    summary: "How peptide therapies affect cellular hydration, and how to maintain proper sodium-potassium balance.",
    content: `
Peptide protocols — particularly those related to metabolic wellness or growth hormone stimulation — can alter fluid balance in the body. For example, growth hormone secretagogues can cause temporary water retention, while GLP-1s can decrease thirst signals, leading to mild dehydration.

### The Role of Electrolytes

Hydration is not just about drinking water. It requires a balance of electrolytes:

1. **Sodium.** Essential for retaining fluid in extracellular spaces.
2. **Potassium.** The primary intracellular electrolyte that counters sodium.
3. **Magnesium.** A cofactor in ATP energy production within the cells.

Ensure you consume adequate minerals alongside filtered water to support cardiovascular pressure and avoid muscle cramps during your protocols.
    `
  }
];

export default function BlogIndexPage() {
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

      {/* Hero Header */}
      <section className="relative py-20 border-b border-white/10 overflow-hidden z-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 relative z-10 animate-fade-up">
          <span className="text-[10px] font-mono uppercase tracking-[0.35em] text-[#E8B29A] bg-[#E8B29A]/10 border border-white/10 px-3 py-1 rounded-full inline-block font-semibold">THE VALARA JOURNAL</span>
          <h1 className="font-serif text-4xl sm:text-5xl font-light tracking-tight text-white">Valara Blog</h1>
          <p className="text-sm sm:text-base text-white/80 max-w-xl mx-auto leading-relaxed font-sans font-light">
            Lifestyle tips, compounding updates, nutrition guides, and operational updates from our wellness coordinators.
          </p>
        </div>
      </section>

      {/* Grid List */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 animate-fade-up relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {MOCK_BLOG_POSTS.map((post) => (
            <div 
              key={post.slug}
              className="glass-panel-dark rounded-3xl p-6 flex flex-col justify-between min-h-[260px] hover-lift border border-white/10 glow-peach-glow shadow-lg"
            >
              <div>
                <div className="flex justify-between items-center text-[10px] uppercase font-bold tracking-wider mb-4">
                  <span className="text-[#E8B29A] bg-[#E8B29A]/10 border border-[#E8B29A]/20 px-2.5 py-1 rounded-full font-sans">{post.category}</span>
                  <span className="flex items-center gap-1 font-mono text-white/40"><Clock className="h-3 w-3" /> {post.readTime}</span>
                </div>

                <h3 className="font-serif text-lg font-semibold text-white group-hover:text-[#E8B29A] hover:text-[#E8B29A] transition-colors mb-2">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h3>
                <p className="text-xs text-white/70 leading-relaxed font-sans font-light line-clamp-3 mb-4">
                  {post.summary}
                </p>
              </div>

              <div className="border-t border-white/10 pt-4 flex justify-between items-center text-[10px] text-white/40 font-sans">
                <span>{post.date}</span>
                <Link 
                  href={`/blog/${post.slug}`} 
                  className="text-white hover:text-[#E8B29A] font-bold flex items-center gap-0.5 uppercase tracking-wider transition-colors"
                >
                  Read Post <ChevronRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
