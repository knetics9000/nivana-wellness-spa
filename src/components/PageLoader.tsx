"use client";

import React, { useState, useEffect } from "react";
import { ValaraLogo } from "./Navigation";

const DRIFT_LOGS = [
  "Initializing WebGL context...",
  "Loading Chapter 01: Recovery Series Mesh (Draco -90%)...",
  "Compiling fragment shaders & vertex uniforms...",
  "Loading Chapter 02: Longevity Series Mesh...",
  "Parsing sound milestones via Web Audio API...",
  "Loading Chapter 03: Metabolic Series Mesh...",
  "Chapter files fully cached in memory. Ready."
];

export default function PageLoader() {
  const [progress, setProgress] = useState(0);
  const [activeLog, setActiveLog] = useState("");
  const [isVisible, setIsVisible] = useState(true);
  const [isRendered, setIsRendered] = useState(true);

  useEffect(() => {
    // Check if user already loaded in session to prevent annoying repeats
    const hasLoaded = sessionStorage.getItem("valara_loaded");
    if (hasLoaded) {
      setIsVisible(false);
      setIsRendered(false);
      return;
    }

    let progressInterval: NodeJS.Timeout;
    let logIndex = 0;
    
    // Smooth progress simulation
    progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          sessionStorage.setItem("valara_loaded", "true");
          // Hold full progress for a moment then fade out
          setTimeout(() => setIsVisible(false), 500);
          setTimeout(() => setIsRendered(false), 1300);
          return 100;
        }
        
        // Dynamic increments to look like natural asset streaming
        const increment = Math.floor(Math.random() * 8) + 2;
        const nextVal = prev + increment;
        
        // Match logs to progress steps
        const logStep = Math.floor((DRIFT_LOGS.length - 1) * (nextVal / 100));
        if (logStep > logIndex && logStep < DRIFT_LOGS.length) {
          logIndex = logStep;
          setActiveLog(DRIFT_LOGS[logIndex]);
        }
        
        return Math.min(nextVal, 100);
      });
    }, 90);

    setActiveLog(DRIFT_LOGS[0]);

    return () => {
      clearInterval(progressInterval);
    };
  }, []);

  if (!isRendered) return null;

  return (
    <div
      className={`fixed inset-0 w-full h-full bg-[#F7F2EC] z-[9999] flex flex-col items-center justify-center transition-all duration-800 cubic-bezier(0.16, 1, 0.3, 1) ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="max-w-xs w-full flex flex-col items-center text-center space-y-6">
        
        {/* Luminous converging logo container */}
        <div className="relative h-20 w-20 flex items-center justify-center animate-pulse-slow">
          <ValaraLogo className="h-16 w-16 drop-shadow-sm text-[#70534B]" />
        </div>

        <div className="space-y-3 w-full">
          <span className="font-sans text-[10px] font-extralight tracking-[0.25em] text-[#70534B] block">VALARA Rx</span>
          
          {/* Progress track */}
          <div className="w-full h-[1px] bg-[#70534B]/10 relative overflow-hidden">
            <div 
              className="h-full bg-[#E8B29A] transition-all duration-100 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="flex justify-between items-center text-[8px] font-mono text-[#70534B]/40 uppercase tracking-widest pt-1">
            <span>Chapter Draco Loader</span>
            <span>{progress}%</span>
          </div>
        </div>

        {/* Dynamic loading logs terminal style */}
        <div className="h-6 flex items-center justify-center">
          <p className="text-[7.5px] font-mono text-[#70534B]/50 uppercase tracking-widest animate-pulse-slow">
            {activeLog}
          </p>
        </div>

      </div>
    </div>
  );
}
