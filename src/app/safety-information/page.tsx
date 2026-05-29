import React from "react";
import { AlertOctagon, Info, ExternalLink } from "lucide-react";

export default function SafetyHubPage() {
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

      {/* Hero Header */}
      <section className="relative py-20 border-b border-white/10 overflow-hidden z-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 relative z-10 animate-fade-up">
          <div className="flex items-center justify-center gap-2">
            <span className="h-[0.5px] w-6 bg-[#E8B29A]/20"></span>
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#E8B29A] bg-[#E8B29A]/10 border border-[#E8B29A]/20 px-3 py-1 rounded-full inline-flex items-center gap-1.5 font-semibold">
              <AlertOctagon className="h-4 w-4 text-[#E8B29A]" /> REGULATORY &amp; CLINICAL SAFETY
            </span>
            <span className="h-[0.5px] w-6 bg-[#E8B29A]/20"></span>
          </div>
          <h1 className="font-sans text-4xl sm:text-6xl font-extralight tracking-tight text-white leading-none">Safety Information Hub</h1>
          <p className="text-sm sm:text-base text-white/70 max-w-xl mx-auto leading-relaxed font-sans font-light">
            Please read this clinical and regulatory notice prior to beginning any peptide or cellular therapy protocol.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-12 relative z-10 animate-fade-up">
        
        {/* FDA Compounded Notice */}
        <div className="glass-panel-dark rounded-3xl p-6 sm:p-8 flex gap-4 leading-relaxed font-sans text-xs sm:text-sm text-white/80 shadow-lg border border-white/10">
          <Info className="h-6 w-6 text-[#8FA89B] shrink-0 mt-0.5" />
          <div className="space-y-2">
            <h3 className="font-serif text-lg font-light text-white">Compounded Medication Disclosure</h3>
            <p className="font-light">
              Medications prescribed through the Valara Wellness Spa telemedicine portal are compounded under orders for specific patients at accredited U.S. compounding pharmacies. Compounded formulations have not been FDA-approved or reviewed for safety, quality, or effectiveness in the same manner as standard retail brand-name drugs.
            </p>
            <p className="font-light text-white/60">
              FDA-approved alternatives may be available for certain indications (for example, Wegovy® or Zepbound® in place of compounded Semaglutide or Tirzepatide). You are encouraged to discuss all clinical options with your reviewing doctor.
            </p>
          </div>
        </div>

        {/* GLP-1 Black box */}
        <div className="bg-[#E8B29A]/5 border border-[#E8B29A]/30 rounded-3xl p-6 sm:p-8 flex gap-4 leading-relaxed font-sans text-xs sm:text-sm text-white shadow-lg">
          <AlertOctagon className="h-6 w-6 text-[#E8B29A] shrink-0 mt-0.5" />
          <div className="space-y-2">
            <h3 className="font-serif text-lg font-semibold text-white uppercase tracking-widest font-mono text-[#E8B29A]">[ GLP-1 BOXED WARNING &amp; CONTRAINDICATIONS ]</h3>
            <p className="font-light text-white/90">
              GLP-1 agonists (including Semaglutide and Tirzepatide) are contraindicated in individuals with a personal or family history of medullary thyroid carcinoma (MTC) or in patients with Multiple Endocrine Neoplasia syndrome type 2 (MEN 2).
            </p>
            <p className="font-light text-white/70">
              <strong className="text-white">Critical Symptoms:</strong> Discontinue use and contact your doctor immediately if you experience a lump or swelling in your throat, hoarseness, difficulty swallowing, persistent severe abdominal pain, or signs of an acute systemic allergic reaction. Do not use if pregnant, attempting to conceive, or lactating.
            </p>
          </div>
        </div>

        {/* Peptide Class Warning Table */}
        <div className="space-y-4">
          <h2 className="font-serif text-2xl font-light text-white">Peptide Warnings Matrix</h2>
          <p className="text-xs text-white/40 font-mono uppercase tracking-widest">
            A summary of common therapeutic classes and primary exclusions.
          </p>

          <div className="overflow-x-auto border border-white/10 rounded-3xl bg-black/20 shadow-xl overflow-hidden font-sans">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-white/5 text-white border-b border-white/10 font-semibold uppercase tracking-wider">
                  <th className="p-4">Therapy Group</th>
                  <th className="p-4">Common Compounds</th>
                  <th className="p-4">Primary Contraindications</th>
                  <th className="p-4">Reported Side Effects</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10 text-white/70 font-light">
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="p-4 font-semibold text-white">Metabolic / GLP-1</td>
                  <td className="p-4 font-medium text-[#E8B29A]">SEMA-X, Tirzepatide</td>
                  <td className="p-4">Thyroid MTC/MEN 2 history, pregnancy, history of pancreatitis</td>
                  <td className="p-4">Nausea, diarrhea, constipation, acid reflux</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="p-4 font-semibold text-white">Growth Hormone</td>
                  <td className="p-4 font-medium text-[#8FA89B]">Sermorelin, Ipamorelin, CJC-1295</td>
                  <td className="p-4">Active malignancy, cancer history, hypersensitivity</td>
                  <td className="p-4">Headache, injection site redness, water retention</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="p-4 font-semibold text-white">Cellular Restoration</td>
                  <td className="p-4 font-medium text-[#8FA89B]">NAD+ Injection (Longevity 02)</td>
                  <td className="p-4">Active cancer, pregnancy, severe hepatic issues</td>
                  <td className="p-4">Transient chest pressure, muscle flushing, mild nausea</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="p-4 font-semibold text-white">Tissue Healing</td>
                  <td className="p-4 font-medium text-[#E8B29A]">BPC-157 (Recovery 01), TB-500</td>
                  <td className="p-4">Active malignancy history (due to angiogenic VEGF pathways)</td>
                  <td className="p-4">Localized irritation, mild dizziness</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="p-4 font-semibold text-white">Cognitive Wellness</td>
                  <td className="p-4 font-medium text-[#8FA89B]">Selank, Semax, DSIP</td>
                  <td className="p-4">Pregnancy, history of epilepsy (Semax warnings)</td>
                  <td className="p-4">Nasal irritation, mild fatigue</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Side effect reporting */}
        <div className="border-t border-white/10 pt-10 space-y-4 font-sans">
          <h2 className="font-serif text-2xl font-light text-white">Reporting Adverse Events</h2>
          <p className="text-xs sm:text-sm text-white/60 leading-relaxed font-light">
            Valara coordinates patient safety actively. If you experience unexpected or severe side effects, please contact your care team immediately through the portal.
          </p>
          <p className="text-xs sm:text-sm text-white/60 leading-relaxed font-light">
            You may also report adverse side effects directly to the FDA MedWatch program. Reports can be filed online at <a href="https://www.fda.gov/medwatch" target="_blank" rel="noopener noreferrer" className="text-[#E8B29A] hover:text-white transition-colors font-bold underline inline-flex items-center gap-0.5">www.fda.gov/medwatch <ExternalLink className="h-3 w-3" /></a> or by calling 1-800-FDA-1088.
          </p>
        </div>

      </section>
    </div>
  );
}
