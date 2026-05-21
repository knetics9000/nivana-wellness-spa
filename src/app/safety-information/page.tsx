import React from "react";
import Link from "next/link";
import { AlertOctagon, Info, ShieldAlert, Heart, ExternalLink } from "lucide-react";

export default function SafetyHubPage() {
  return (
    <div className="bg-[#F8F4EC] text-[#2A2520] font-sans pb-24">
      {/* Hero Header */}
      <section className="bg-[#EFE8DA] py-16 border-b border-[#E2D9C7] text-[#2A2520]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-red-700 flex items-center justify-center gap-1.5">
            <AlertOctagon className="h-4 w-4" /> Regulatory &amp; Clinical Safety
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight">Safety Information Hub</h1>
          <p className="text-sm sm:text-base text-[#2A2520]/75 max-w-xl mx-auto leading-relaxed">
            Please read this clinical and regulatory notice prior to beginning any peptide or cellular therapy protocol.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-12">
        
        {/* FDA Compounded Notice */}
        <div className="bg-[#EFE8DA]/40 border border-[#E2D9C7] rounded-3xl p-6 sm:p-8 flex gap-4 leading-relaxed font-sans text-xs sm:text-sm text-[#2A2520]/85">
          <Info className="h-6 w-6 text-[#B89968] shrink-0 mt-0.5" />
          <div className="space-y-2">
            <h3 className="font-serif text-lg font-bold text-[#2A2520]">Compounded Medication Disclosure</h3>
            <p>
              Medications prescribed through the Nivana Wellness Spa telemedicine portal are compounded under orders for specific patients at accredited U.S. compounding pharmacies. Compounded formulations have not been FDA-approved or reviewed for safety, quality, or effectiveness in the same manner as standard retail brand-name drugs.
            </p>
            <p>
              FDA-approved alternatives may be available for certain indications (for example, Wegovy® or Zepbound® in place of compounded Semaglutide or Tirzepatide). You are encouraged to discuss all clinical options with your reviewing doctor.
            </p>
          </div>
        </div>

        {/* GLP-1 Black box */}
        <div className="bg-[#C9A695]/15 border border-[#C9A695]/45 rounded-3xl p-6 sm:p-8 flex gap-4 leading-relaxed font-sans text-xs sm:text-sm text-[#2A2520]/90">
          <AlertOctagon className="h-6 w-6 text-[#C9A695] shrink-0 mt-0.5" />
          <div className="space-y-2">
            <h3 className="font-serif text-lg font-bold text-[#C9A695] uppercase tracking-wider">GLP-1 Boxed Warning &amp; Contraindications</h3>
            <p>
              GLP-1 agonists (including Semaglutide and Tirzepatide) are contraindicated in individuals with a personal or family history of medullary thyroid carcinoma (MTC) or in patients with Multiple Endocrine Menoplasia syndrome type 2 (MEN 2).
            </p>
            <p>
              <strong>Critical Symptoms:</strong> Discontinue use and contact your doctor immediately if you experience a lump or swelling in your throat, hoarseness, difficulty swallowing, persistent severe abdominal pain, or signs of an acute systemic allergic reaction. Do not use if pregnant, attempting to conceive, or lactating.
            </p>
          </div>
        </div>

        {/* Peptide Class Warning Table */}
        <div className="space-y-4">
          <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#2A2520]">Peptide Warnings Matrix</h2>
          <p className="text-xs text-[#2A2520]/60 font-sans">
            A summary of common therapeutic classes and primary exclusions. Select a specific peptide page for detailed safety information.
          </p>

          <div className="overflow-x-auto border border-[#E2D9C7] rounded-2xl bg-[#F8F4EC]">
            <table className="w-full text-left text-xs font-sans border-collapse">
              <thead>
                <tr className="bg-[#EFE8DA] text-[#2A2520] border-b border-[#E2D9C7] font-semibold uppercase tracking-wider">
                  <th className="p-4">Therapy Group</th>
                  <th className="p-4">Common Compounds</th>
                  <th className="p-4">Primary Contraindications</th>
                  <th className="p-4">Reported Side Effects</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E2D9C7]/50 text-[#2A2520]/80">
                <tr>
                  <td className="p-4 font-semibold text-[#2A2520]">Metabolic / GLP-1</td>
                  <td className="p-4">Semaglutide, Tirzepatide</td>
                  <td className="p-4">Thyroid MTC/MEN 2 history, pregnancy, history of pancreatitis</td>
                  <td className="p-4">Nausea, diarrhea, constipation, acid reflux</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-[#2A2520]">Growth Hormone</td>
                  <td className="p-4">Sermorelin, Ipamorelin, CJC-1295</td>
                  <td className="p-4">Active malignancy, cancer history, hypersensitivity</td>
                  <td className="p-4">Headache, injection site redness, water retention</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-[#2A2520]">Cellular Restoration</td>
                  <td className="p-4">NAD+ Injection</td>
                  <td className="p-4">Active cancer, pregnancy, severe hepatic issues</td>
                  <td className="p-4">Transient chest pressure, muscle flushing, mild nausea</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-[#2A2520]">Tissue Healing</td>
                  <td className="p-4">BPC-157, TB-500</td>
                  <td className="p-4">Active malignancy history (due to angiogenic VEGF pathways)</td>
                  <td className="p-4">Localized irritation, mild dizziness</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-[#2A2520]">Cognitive Wellness</td>
                  <td className="p-4">Selank, Semax, DSIP</td>
                  <td className="p-4">Pregnancy, history of epilepsy (Se-max warnings)</td>
                  <td className="p-4">Nasal irritation, mild fatigue</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Side effect reporting */}
        <div className="border-t border-[#E2D9C7]/50 pt-10 space-y-4">
          <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#2A2520]">Reporting Adverse Events</h2>
          <p className="text-xs sm:text-sm text-[#2A2520]/75 leading-relaxed font-sans">
            Nivana coordinates patient safety actively. If you experience unexpected or severe side effects, please contact your care team immediately through the portal.
          </p>
          <p className="text-xs sm:text-sm text-[#2A2520]/75 leading-relaxed font-sans">
            You may also report adverse side effects directly to the FDA MedWatch program. Reports can be filed online at <a href="https://www.fda.gov/medwatch" target="_blank" rel="noopener noreferrer" className="text-[#8E7449] hover:underline inline-flex items-center gap-0.5">www.fda.gov/medwatch <ExternalLink className="h-3 w-3" /></a> or by calling 1-800-FDA-1088.
          </p>
        </div>

      </section>
    </div>
  );
}
