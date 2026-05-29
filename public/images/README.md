# Valera Wellness Spa — Image Asset Directory & Sourcing Guide

This folder holds all public assets for the Valera website. Since this is a premium, high-converting telehealthmedspa brand, all sourced images must feel clean, bright, and spa-luxe (warm neutrals, gold highlights, marble, serum vials, linen). 

Avoid aggressive bodybuilding, neon gym, or clinical-cold clinic imagery.

## 1. Directory Structure

Place all sourced assets in their respective directories below:

```
public/
  └── images/
      ├── hero/
      │   └── serum_vial_hero.jpg
      ├── products/
      │   ├── semaglutide.jpg
      │   ├── tirzepatide.jpg
      │   ├── nad-plus.jpg
      │   ├── bpc-157.jpg
      │   └── cjc-1295-ipamorelin-blend.jpg
      ├── blog/
      │   ├── compounding_cleanroom.jpg
      │   └── skeletal_muscle_training.jpg
      └── trust/
          ├── legitscript_logo.png
          └── secure_hipaa_logo.png
```

## 2. Specific Image Checklists & Guidelines

### A. Hero Backgrounds (`/public/images/hero/`)
* **`serum_vial_hero.jpg`**
  * **Size:** ~1920px x 1080px (optimized for WebP, < 200kb)
  * **Visual Style:** Close-up of a frosted amber glass serum vial on a clean light-marble surface with soft morning light filtering through linen curtains.
  * **Alternative:** Muted gold gradient with soft dynamic glassmorphism reflections.

### B. Product Prototypes (`/public/images/products/`)
* **`[slug].jpg`** (where slug matches the peptide path)
  * **Size:** ~800px x 800px square
  * **Visual Style:** High-end product shots of clear glass vials with white rubber stoppers, resting in custom ivory boxes or on clean linen backgrounds.
  * **Peptides list:**
    * `semaglutide.jpg` (Gold theme panel)
    * `tirzepatide.jpg` (Gold theme panel)
    * `nad-plus.jpg` (Sage theme panel)
    * `bpc-157.jpg` (Sage theme panel)
    * `cjc-1295-ipamorelin-blend.jpg` (Gold theme panel)

### C. Blog Visuals (`/public/images/blog/`)
* **`compounding_cleanroom.jpg`**
  * **Size:** ~1200px x 800px landscape
  * **Visual Style:** Sterile ISO-class cleanroom environment showing a clinical pharmacist in full protective gown under a laminar flow hood, working with sterile vials.
* **`skeletal_muscle_training.jpg`**
  * **Size:** ~1200px x 800px landscape
  * **Visual Style:** A middle-aged individual performing controlled kettlebell exercises in a bright, modern wellness facility.

### D. Compliance & Trust Badges (`/public/images/trust/`)
* **`legitscript_logo.png`**
  * **Size:** ~120px height, transparent background. LegitScript certification badge placeholder for the global footer.
* **`secure_hipaa_logo.png`**
  * **Size:** ~120px height, transparent background. Standard HIPAA-compliant secure transmission badge.
