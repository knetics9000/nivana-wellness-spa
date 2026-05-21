"use client";

import React from "react";
import Link from "next/link";
import { BookOpen, Clock, Calendar, ChevronRight } from "lucide-react";

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
    <div className="bg-[#F8F4EC] text-[#2A2520] font-sans pb-24">
      {/* Hero Header */}
      <section className="bg-[#EFE8DA] py-16 border-b border-[#E2D9C7] text-[#2A2520]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#B89968]">The Nivana Journal</span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight">Nivana Blog</h1>
          <p className="text-sm sm:text-base text-[#2A2520]/75 max-w-xl mx-auto leading-relaxed">
            Lifestyle tips, compounding updates, nutrition guides, and operational updates from our wellness coordinators.
          </p>
        </div>
      </section>

      {/* Grid List */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {MOCK_BLOG_POSTS.map((post) => (
            <div 
              key={post.slug}
              className="bg-[#EFE8DA]/25 border border-[#E2D9C7] rounded-3xl p-6 flex flex-col justify-between min-h-[260px] hover:border-[#B89968] transition-all"
            >
              <div>
                <div className="flex justify-between items-center text-[10px] text-[#2A2520]/60 uppercase font-bold tracking-wider mb-3">
                  <span className="text-[#B89968] bg-[#B89968]/10 px-2 py-0.5 rounded-full">{post.category}</span>
                  <span className="flex items-center gap-1 font-medium"><Clock className="h-3 w-3" /> {post.readTime}</span>
                </div>

                <h3 className="font-serif text-lg font-bold text-[#2A2520] hover:text-[#B89968] transition-colors mb-2">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h3>
                <p className="text-xs text-[#2A2520]/70 leading-relaxed font-sans line-clamp-3 mb-4">
                  {post.summary}
                </p>
              </div>

              <div className="border-t border-[#E2D9C7]/50 pt-4 flex justify-between items-center text-[10px] text-[#2A2520]/50 font-sans">
                <span>{post.date}</span>
                <Link 
                  href={`/blog/${post.slug}`} 
                  className="text-[#8E7449] hover:underline font-semibold flex items-center gap-0.5 uppercase tracking-wider"
                >
                  Read Post <ChevronRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
