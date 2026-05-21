# Nivana Wellness Spa — Digital Storefront & Knowledge Base

Nivana Wellness Spa is a premium, high-converting customer-facing telehealth portal and peptide knowledge base. Built using Next.js 16 (App Router), TypeScript, and Tailwind CSS v4, it features a Spa-Luxe aesthetic (espresso, warm cream, gold accents, and ivory) combined with high-integrity medical positioning.

---

## 1. Project Setup & Verification

Follow these steps to run the development server locally:

1. **Install Dependencies:**
   ```bash
   npm install
   ```
2. **Run Development Server:**
   ```bash
   npm run dev
   ```
3. **Open Localhost:**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the storefront.
4. **Compile Production Bundle (Verification):**
   ```bash
   npm run build
   ```

---

## 2. Directory Structure

```
Peptide Wellness Project/
├── content/
│   └── brand.md               # Master brand copy bundle (Source of Truth)
├── public/
│   ├── images/
│   │   └── README.md          # Visual assets sourcing checklists
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── app/
│   │   ├── about/             # About page
│   │   ├── blog/              # Blog sitemaps and post templates
│   │   ├── categories/        # Dynamic category index routing
│   │   ├── contact/           # Contact page & message forms
│   │   ├── design-system/     # Brand style guide documentation
│   │   ├── faq/               # Accordion FAQ index
│   │   ├── how-it-works/      # 3-Step telemedicine flow explanation
│   │   ├── intake/            # Multi-step intake flow with Suspense
│   │   ├── knowledge/         # Educational journal hub and detail routing
│   │   ├── safety-information/# General safety and contraindications page
│   │   ├── treatments/        # Master treatments search & detail routing
│   │   ├── globals.css        # Tailwind v4 setup & custom spa fonts
│   │   ├── layout.tsx         # Global fonts and structural layout
│   │   └── page.tsx           # Conversion-optimized homepage
│   ├── components/
│   │   ├── Navigation.tsx     # Responsive navigation drawer & mega-menu
│   │   ├── Footer.tsx         # Legal disclaimers, address, and sitemap
│   │   └── SafetyModal.tsx    # Accessible safety overlays
│   └── data/
│       ├── products.ts        # Typed master product database (63 peptides)
│       └── knowledge.ts       # Educational article database (15 articles)
```

---

## 3. Content Editing Guide

### A. How to Add or Modify Peptides
All 63 peptides are defined in the structured typed catalog file: `src/data/products.ts`.
To add or modify a peptide:
1. Open [products.ts](file:///c:/Users/WOLF/Documents/Peptide%20Wellness%20Project/src/data/products.ts).
2. Append a new product matching the `Product` interface:
   ```typescript
   export interface Product {
     id: string;
     slug: string;
     name: string;
     category: string;
     tagline: string;
     description: string;
     benefits: string[];
     protocol: string;
     administration: string; // e.g. "Subcutaneous Injection"
     whoItsFor: string;
     whoItsNotFor: string;
     safetyInfo: {
       contraindications: string[];
       warnings: string[];
       sideEffects: string[];
       interactions: string[];
     };
   }
   ```
3. Save the file. The `/treatments` catalog, search tools, dynamic details pages `/treatments/[slug]`, and category filters will auto-generate.

### B. How to Add or Modify Knowledge Base Articles
All 15 educational articles are defined in `src/data/knowledge.ts`.
To add a new article:
1. Open [knowledge.ts](file:///c:/Users/WOLF/Documents/Peptide%20Wellness%20Project/src/data/knowledge.ts).
2. Append a new entry matching the `KBArticle` interface:
   ```typescript
   export interface KBArticle {
     slug: string;
     title: string;
     readTime: string;
     category: string;
     lastUpdated: string;
     summary: string;
     keyTakeaways: string[];
     content: string; // Write standard markdown here
   }
   ```
3. Save the file. The hub `/knowledge` and dynamic article pages `/knowledge/[slug]` will automatically load the new text.

---

## 4. Production Checklist (Items You Need to Complete)

Prior to launching the storefront, please complete the following integration checklist:

- [ ] **Dosing Pricing:** Update the pricing details or billing parameters in `products.ts`. Currently, pricing is omitted as $— placeholder.
- [ ] **CRM / EMR Integration:** In [intake/page.tsx](file:///c:/Users/WOLF/Documents/Peptide%20Wellness%20Project/src/src/app/intake/page.tsx), replace the simulation timeout inside `onSubmit` with a secure API request routing the patient's demographics, health history, and screening answers to your EMR (Electronic Medical Records) database.
- [ ] **Image Assets Sourcing:** Acquire high-resolution photos matching the directions in `public/images/README.md` and upload them to `/public/images/`.
- [ ] **Analytics Setup:** Configure Google Analytics 4 (GA4) and Meta pixel tags in `src/app/layout.tsx`.
- [ ] **Legal Disclaimers:** Have your legal counsel review the compounding pharmacy warnings, the GLP-1 black box warnings, and global footers to verify compliance with your state laws.
- [ ] **LegitScript Certification:** Obtain certification for healthcare telemedicine operation and upload the official seal to the global footer.
