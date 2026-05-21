"use client";

import React, { useEffect, useRef } from "react";
import { X, ShieldAlert, AlertTriangle, Info, RefreshCw } from "lucide-react";
import { SafetyInfo } from "@/data/products";

interface SafetyModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName: string;
  safetyInfo: SafetyInfo;
}

export default function SafetyModal({ isOpen, onClose, productName, safetyInfo }: SafetyModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  // Esc key close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Click outside close
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fade-up font-sans"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="safety-modal-title"
    >
      <div 
        ref={modalRef}
        className="relative w-full max-w-2xl bg-[#F8F4EC] border border-[#E2D9C7] rounded-2xl shadow-2xl overflow-hidden max-h-[85vh] flex flex-col"
      >
        {/* Header */}
        <div className="bg-[#EFE8DA] px-6 py-4 border-b border-[#E2D9C7] flex justify-between items-center shrink-0">
          <div className="flex items-center gap-2">
            <ShieldAlert className="h-5 w-5 text-[#B89968]" />
            <h2 id="safety-modal-title" className="font-serif text-lg font-bold text-[#2A2520] tracking-wide">
              Important Safety Information: {productName}
            </h2>
          </div>
          <button 
            onClick={onClose}
            className="text-[#2A2520]/75 hover:text-[#B89968] p-1 rounded-full hover:bg-black/5 transition-all"
            aria-label="Close modal"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content Area */}
        <div className="p-6 overflow-y-auto space-y-6 text-[#2A2520]">
          {/* Summary Box */}
          <div className="bg-[#B89968]/10 border border-[#B89968]/30 rounded-xl p-4 flex gap-3">
            <Info className="h-5 w-5 text-[#8E7449] shrink-0 mt-0.5" />
            <p className="text-xs text-[#2A2520]/80 leading-relaxed font-sans">
              Compounded medications may be prescribed by physicians after a clinical assessment. They are prepared by compounding pharmacies and are not FDA-approved for safety, effectiveness, or quality in the same manner as commercial options.
            </p>
          </div>

          {/* 1. Contraindications */}
          <div className="space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#B89968] block">Contraindications</span>
            <p className="text-xs text-[#2A2520]/60 mb-2 leading-relaxed">
              Do not use this medication if you have any of the following conditions:
            </p>
            <ul className="list-disc pl-5 text-sm space-y-1.5 font-sans">
              {safetyInfo.contraindications.map((item, idx) => (
                <li key={idx} className="leading-relaxed">{item}</li>
              ))}
            </ul>
          </div>

          {/* 2. Warnings and Precautions */}
          <div className="space-y-2 pt-2 border-t border-[#E2D9C7]/50">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#8E7449] flex items-center gap-1.5">
              <AlertTriangle className="h-4 w-4" /> Warnings & Precautions
            </span>
            <ul className="list-disc pl-5 text-sm space-y-1.5 font-sans">
              {safetyInfo.warnings.map((item, idx) => (
                <li key={idx} className="leading-relaxed">{item}</li>
              ))}
            </ul>
          </div>

          {/* 3. Potential Side Effects */}
          <div className="space-y-2 pt-2 border-t border-[#E2D9C7]/50">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#B89968] block">Potential Side Effects</span>
            <p className="text-xs text-[#2A2520]/60 mb-2 leading-relaxed">
              Common or serious adverse effects associated with this protocol include:
            </p>
            <ul className="list-disc pl-5 text-sm space-y-1.5 font-sans">
              {safetyInfo.sideEffects.map((item, idx) => (
                <li key={idx} className="leading-relaxed">{item}</li>
              ))}
            </ul>
          </div>

          {/* 4. Drug Interactions */}
          <div className="space-y-2 pt-2 border-t border-[#E2D9C7]/50">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#B89968] block">Drug Interactions</span>
            <ul className="list-disc pl-5 text-sm space-y-1.5 font-sans">
              {safetyInfo.drugInteractions.map((item, idx) => (
                <li key={idx} className="leading-relaxed">{item}</li>
              ))}
            </ul>
          </div>

          {/* 5. Reporting Adverse Events */}
          <div className="bg-[#EFE8DA] rounded-xl p-4 flex gap-3 text-xs leading-relaxed font-sans border border-[#E2D9C7]">
            <RefreshCw className="h-4 w-4 text-[#B89968] shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-[#2A2520]">Reporting Side Effects</p>
              <p className="text-[#2A2520]/75 mt-0.5">
                If you experience side effects, contact your Nivana care team immediately. You may also report side effects to FDA at 1-800-FDA-1088 or www.fda.gov/medwatch.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-[#EFE8DA] px-6 py-4 border-t border-[#E2D9C7] text-[10px] text-[#2A2520]/60 leading-relaxed shrink-0 flex flex-col gap-2 sm:flex-row sm:justify-between sm:items-center">
          <span className="max-w-md font-sans">
            Disclaimer: {safetyInfo.disclaimer || "Compounded medication prescribed for custom patient protocols."}
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 border border-[#B89968] text-[#8E7449] rounded-full text-xs font-semibold uppercase tracking-wider hover:bg-[#B89968] hover:text-[#F8F4EC] transition-colors"
          >
            Acknowledge & Close
          </button>
        </div>
      </div>
    </div>
  );
}
