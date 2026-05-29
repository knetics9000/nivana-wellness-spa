"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { 
  ShieldCheck, 
  ShieldAlert, 
  CheckCircle, 
  ArrowLeft, 
  ArrowRight,
  Sparkles,
  Calendar,
  Check
} from "lucide-react";

// Form validation schema using Zod
const intakeSchema = z.object({
  fullName: z.string().min(2, "Full legal name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().regex(/^\d{10}$/, "Please enter a valid 10-digit phone number"),
  state: z.string().min(2, "Please select a state").refine(
    (val) => val !== "CA" && val !== "NY",
    { message: "We are currently unable to serve patients in California or New York due to local state pharmacy compounding regulations." }
  ),
  weight: z.string().refine(
    (val) => {
      const num = parseFloat(val);
      return !isNaN(num) && num >= 80;
    },
    { message: "Please enter a valid weight in pounds (minimum 80 lbs)" }
  ),
  height: z.string().min(2, "Please enter height (e.g. 5'9\")"),
  primaryGoal: z.string().min(1, "Please select your primary goal"),
  wellnessInterest: z.string().min(1, "Please select a wellness category"),
  hasThyroidCancerHistory: z.enum(["yes", "no"], { message: "Please select an option" }),
  isPregnantOrLactating: z.enum(["yes", "no"], { message: "Please select an option" }),
  hasActiveKidneyIssues: z.enum(["yes", "no"], { message: "Please select an option" }),
});

type IntakeFormData = z.infer<typeof intakeSchema>;

const STATES = [
  { code: "", name: "Select your state" },
  { code: "AL", name: "Alabama" },
  { code: "AK", name: "Alaska" },
  { code: "AZ", name: "Arizona" },
  { code: "AR", name: "Arkansas" },
  { code: "CA", name: "California (Restricted)" },
  { code: "CO", name: "Colorado" },
  { code: "CT", name: "Connecticut" },
  { code: "DE", name: "Delaware" },
  { code: "FL", name: "Florida" },
  { code: "GA", name: "Georgia" },
  { code: "HI", name: "Hawaii" },
  { code: "ID", name: "Idaho" },
  { code: "IL", name: "Illinois" },
  { code: "IN", name: "Indiana" },
  { code: "IA", name: "Iowa" },
  { code: "KS", name: "Kansas" },
  { code: "KY", name: "Kentucky" },
  { code: "LA", name: "Louisiana" },
  { code: "ME", name: "Maine" },
  { code: "MD", name: "Maryland" },
  { code: "MA", name: "Massachusetts" },
  { code: "MI", name: "Michigan" },
  { code: "MN", name: "Minnesota" },
  { code: "MS", name: "Mississippi" },
  { code: "MO", name: "Missouri" },
  { code: "MT", name: "Montana" },
  { code: "NE", name: "Nebraska" },
  { code: "NV", name: "Nevada" },
  { code: "NH", name: "New Hampshire" },
  { code: "NJ", name: "New Jersey" },
  { code: "NM", name: "New Mexico" },
  { code: "NY", name: "New York (Restricted)" },
  { code: "NC", name: "North Carolina" },
  { code: "ND", name: "North Dakota" },
  { code: "OH", name: "Ohio" },
  { code: "OK", name: "Oklahoma" },
  { code: "OR", name: "Oregon" },
  { code: "PA", name: "Pennsylvania" },
  { code: "RI", name: "Rhode Island" },
  { code: "SC", name: "South Carolina" },
  { code: "SD", name: "South Dakota" },
  { code: "TN", name: "Tennessee" },
  { code: "TX", name: "Texas" },
  { code: "UT", name: "Utah" },
  { code: "VT", name: "Vermont" },
  { code: "VA", name: "Virginia" },
  { code: "WA", name: "Washington" },
  { code: "WV", name: "West Virginia" },
  { code: "WI", name: "Wisconsin" },
  { code: "WY", name: "Wyoming" },
];

function IntakeFormContent() {
  const searchParams = useSearchParams();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    trigger,
    formState: { errors },
  } = useForm<IntakeFormData>({
    resolver: zodResolver(intakeSchema),
    mode: "onBlur",
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      state: "",
      weight: undefined,
      height: "",
      primaryGoal: "",
      wellnessInterest: "",
      hasThyroidCancerHistory: undefined,
      isPregnantOrLactating: undefined,
      hasActiveKidneyIssues: undefined
    }
  });

  // Prefill email if passed in query params
  useEffect(() => {
    const emailParam = searchParams.get("email");
    if (emailParam) {
      setValue("email", decodeURIComponent(emailParam));
    }
  }, [searchParams, setValue]);

  // Watch safety questions to show clinical block warnings
  const hasThyroidCancer = watch("hasThyroidCancerHistory");
  const isPregnant = watch("isPregnantOrLactating");
  
  // Contraindication blocker validation
  const hasContraindications = hasThyroidCancer === "yes" || isPregnant === "yes";

  // Step-by-step validation triggers
  const handleNextStep = async () => {
    let isValid = false;
    if (step === 1) {
      isValid = await trigger(["fullName", "email", "phone", "state"]);
    } else if (step === 2) {
      isValid = await trigger(["weight", "height", "primaryGoal", "wellnessInterest"]);
    }
    
    if (isValid) {
      setStep(prev => prev + 1);
    }
  };

  const handlePrevStep = () => {
    setStep(prev => prev - 1);
  };

  const onSubmit = async (data: IntakeFormData) => {
    if (hasContraindications) return; // Prevent submission of contraindicated cases
    
    setIsSubmitting(true);
    // Simulate API call to telehealth server
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setStep(4); // Advance to Success step
  };

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 font-sans text-white flex items-center justify-center relative z-0">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full -z-20 bg-[#0B0A09]">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-25"
        >
          <source src="/videos/peptide_skin.mp4" type="video/mp4" />
        </video>
      </div>
      {/* Soft color overlays */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#0B0A09]/95 via-[#0B0A09]/90 to-[#E8B29A]/10 -z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0B0A09]/40 to-[#0B0A09] -z-10"></div>

      <div className="max-w-xl w-full space-y-8 relative z-10">
        
        {/* Title Block */}
        <div className="text-center space-y-3">
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#E8B29A] bg-[#E8B29A]/10 border border-white/10 px-3.5 py-1 rounded-full inline-block shadow-sm font-semibold">
            TELEHEALTH INTAKE PORTAL
          </span>
          <h1 className="font-serif text-3xl font-light text-white">
            Valara Consultation Form
          </h1>
          <p className="text-xs text-white/60 max-w-sm mx-auto leading-relaxed font-sans font-light">
            Secure HIPAA-compliant lead intake. Our clinical coordinators will route these details to a board-certified physician.
          </p>
        </div>

        {/* Progress bar */}
        <div className="flex items-center justify-between px-6">
          <div className="flex flex-col items-center">
            <span className={`h-8 w-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
              step >= 1 ? "bg-[#E8B29A] text-[#0B0A09]" : "bg-white/5 text-white/40 border border-white/10"
            }`}>
              {step > 1 ? <Check className="h-3.5 w-3.5" /> : "1"}
            </span>
            <span className="text-[9px] uppercase font-bold tracking-widest text-white/50 mt-2 font-sans">Account</span>
          </div>
          <div className={`flex-grow h-[1px] mx-3 transition-colors ${step >= 2 ? "bg-[#E8B29A]" : "bg-white/10"}`}></div>
          
          <div className="flex flex-col items-center">
            <span className={`h-8 w-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
              step >= 2 ? "bg-[#E8B29A] text-[#0B0A09]" : "bg-white/5 text-white/40 border border-white/10"
            }`}>
              {step > 2 ? <Check className="h-3.5 w-3.5" /> : "2"}
            </span>
            <span className="text-[9px] uppercase font-bold tracking-widest text-white/50 mt-2 font-sans">Biology</span>
          </div>
          <div className={`flex-grow h-[1px] mx-3 transition-colors ${step >= 3 ? "bg-[#E8B29A]" : "bg-white/10"}`}></div>
          
          <div className="flex flex-col items-center">
            <span className={`h-8 w-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
              step >= 3 ? "bg-[#E8B29A] text-[#0B0A09]" : "bg-white/5 text-white/40 border border-white/10"
            }`}>
              {step > 3 ? <Check className="h-3.5 w-3.5" /> : "3"}
            </span>
            <span className="text-[9px] uppercase font-bold tracking-widest text-white/50 mt-2 font-sans">Safety</span>
          </div>
        </div>

        {/* Form Card */}
        <div className="glass-panel-dark rounded-3xl p-6 sm:p-10 shadow-lg">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            
            {/* STEP 1: Account Setup */}
            {step === 1 && (
              <div className="space-y-5">
                <h2 className="font-serif text-xl font-light text-white border-b border-white/10 pb-3">
                  Account Details
                </h2>

                <div className="space-y-1">
                  <label className="text-[10px] uppercase font-bold tracking-wider text-white/60">Full Legal Name</label>
                  <input
                    type="text"
                    placeholder="Enter legal first and last name"
                    {...register("fullName")}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm focus:outline-none focus:border-[#E8B29A] text-white placeholder-white/30 font-sans"
                  />
                  {errors.fullName && <p className="text-[11px] text-[#E8B29A] font-sans mt-1">{errors.fullName.message}</p>}
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] uppercase font-bold tracking-wider text-white/60">Email Address</label>
                  <input
                    type="email"
                    placeholder="name@domain.com"
                    {...register("email")}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm focus:outline-none focus:border-[#E8B29A] text-white placeholder-white/30 font-sans"
                  />
                  {errors.email && <p className="text-[11px] text-[#E8B29A] font-sans mt-1">{errors.email.message}</p>}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase font-bold tracking-wider text-white/60">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="10-digit number"
                      {...register("phone")}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm focus:outline-none focus:border-[#E8B29A] text-white placeholder-white/30 font-sans"
                    />
                    {errors.phone && <p className="text-[11px] text-[#E8B29A] font-sans mt-1">{errors.phone.message}</p>}
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] uppercase font-bold tracking-wider text-white/60">State of Residence</label>
                    <select
                      {...register("state")}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm focus:outline-none focus:border-[#E8B29A] text-white/90 font-sans cursor-pointer"
                      style={{ colorScheme: "dark" }}
                    >
                      {STATES.map(s => (
                        <option key={s.code} value={s.code} className="bg-[#0B0A09] text-white">{s.name}</option>
                      ))}
                    </select>
                    {errors.state && <p className="text-[11px] text-[#E8B29A] font-sans mt-1 leading-relaxed">{errors.state.message}</p>}
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    type="button"
                    onClick={handleNextStep}
                    className="w-full py-3.5 bg-[#E8B29A] text-[#0B0A09] hover:bg-white hover:text-[#0B0A09] rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-1.5 font-mono shadow-md"
                  >
                    Continue <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2: Biology & Goals */}
            {step === 2 && (
              <div className="space-y-5">
                <h2 className="font-serif text-xl font-light text-white border-b border-white/10 pb-3">
                  Biological Markers & Goals
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase font-bold tracking-wider text-white/60">Weight (lbs)</label>
                    <input
                      type="number"
                      placeholder="e.g. 165"
                      {...register("weight")}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm focus:outline-none focus:border-[#E8B29A] text-white placeholder-white/30 font-sans"
                    />
                    {errors.weight && <p className="text-[11px] text-[#E8B29A] font-sans mt-1">{errors.weight.message}</p>}
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] uppercase font-bold tracking-wider text-white/60">Height</label>
                    <input
                      type="text"
                      placeholder="e.g. 5'10&quot;"
                      {...register("height")}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm focus:outline-none focus:border-[#E8B29A] text-white placeholder-white/30 font-sans"
                    />
                    {errors.height && <p className="text-[11px] text-[#E8B29A] font-sans mt-1">{errors.height.message}</p>}
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] uppercase font-bold tracking-wider text-white/60">Primary Wellness Interest</label>
                  <select
                    {...register("wellnessInterest")}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm focus:outline-none focus:border-[#E8B29A] text-white/90 font-sans cursor-pointer"
                    style={{ colorScheme: "dark" }}
                  >
                    <option value="" className="bg-[#0B0A09] text-white">Select wellness category</option>
                    <option value="metabolic" className="bg-[#0B0A09] text-white">Weight Loss & Metabolic Correction</option>
                    <option value="longevity" className="bg-[#0B0A09] text-white">Cellular Aging & Longevity (NAD+ / Bioregulators)</option>
                    <option value="recovery" className="bg-[#0B0A09] text-white">Tissue Healing & Injury Repair (BPC-157)</option>
                    <option value="growth" className="bg-[#0B0A09] text-white">GH Optimization (Sermorelin / Ipamorelin)</option>
                    <option value="sexual" className="bg-[#0B0A09] text-white">Sexual Health (PT-141)</option>
                    <option value="beauty" className="bg-[#0B0A09] text-white">Skin & Aesthetics (GHK-Cu)</option>
                  </select>
                  {errors.wellnessInterest && <p className="text-[11px] text-[#E8B29A] font-sans mt-1">{errors.wellnessInterest.message}</p>}
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] uppercase font-bold tracking-wider text-white/60">Primary Goal Description</label>
                  <textarea
                    rows={3}
                    placeholder="Briefly describe what outcomes you hope to achieve with peptide therapy."
                    {...register("primaryGoal")}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm focus:outline-none focus:border-[#E8B29A] text-white placeholder-white/30 font-sans"
                  ></textarea>
                  {errors.primaryGoal && <p className="text-[11px] text-[#E8B29A] font-sans mt-1">{errors.primaryGoal.message}</p>}
                </div>

                <div className="flex gap-4 pt-4">
                  <button
                    type="button"
                    onClick={handlePrevStep}
                    className="w-1/2 py-3.5 bg-transparent text-white border border-white/20 hover:bg-white/5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-1.5 shadow-sm font-mono"
                  >
                    <ArrowLeft className="h-4 w-4" /> Back
                  </button>
                  <button
                    type="button"
                    onClick={handleNextStep}
                    className="w-1/2 py-3.5 bg-[#E8B29A] text-[#0B0A09] hover:bg-white hover:text-[#0B0A09] rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-1.5 shadow-sm font-mono"
                  >
                    Continue <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: Safety Screening */}
            {step === 3 && (
              <div className="space-y-5">
                <h2 className="font-serif text-xl font-light text-white border-b border-white/10 pb-3 flex items-center gap-1">
                  Medical Safety Screening
                </h2>

                {/* Question 1: Thyroid Cancer */}
                <div className="space-y-2.5">
                  <label className="text-xs uppercase font-bold tracking-wider text-white/80 block leading-tight">
                    Do you have a personal or family history of Medullary Thyroid Carcinoma (MTC) or MEN 2?
                  </label>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2 text-xs text-white/80 cursor-pointer">
                      <input className="accent-[#E8B29A] h-3.5 w-3.5" type="radio" value="yes" {...register("hasThyroidCancerHistory")} /> Yes
                    </label>
                    <label className="flex items-center gap-2 text-xs text-white/80 cursor-pointer">
                      <input className="accent-[#E8B29A] h-3.5 w-3.5" type="radio" value="no" {...register("hasThyroidCancerHistory")} /> No
                    </label>
                  </div>
                  {errors.hasThyroidCancerHistory && <p className="text-[11px] text-[#E8B29A] font-sans mt-1">{errors.hasThyroidCancerHistory.message}</p>}
                </div>

                {/* Question 2: Pregnancy */}
                <div className="space-y-2.5">
                  <label className="text-xs uppercase font-bold tracking-wider text-white/80 block leading-tight">
                    Are you currently pregnant, planning to become pregnant, or breastfeeding?
                  </label>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2 text-xs text-white/80 cursor-pointer">
                      <input className="accent-[#E8B29A] h-3.5 w-3.5" type="radio" value="yes" {...register("isPregnantOrLactating")} /> Yes
                    </label>
                    <label className="flex items-center gap-2 text-xs text-white/80 cursor-pointer">
                      <input className="accent-[#E8B29A] h-3.5 w-3.5" type="radio" value="no" {...register("isPregnantOrLactating")} /> No
                    </label>
                  </div>
                  {errors.isPregnantOrLactating && <p className="text-[11px] text-[#E8B29A] font-sans mt-1">{errors.isPregnantOrLactating.message}</p>}
                </div>

                {/* Question 3: Kidney */}
                <div className="space-y-2.5">
                  <label className="text-xs uppercase font-bold tracking-wider text-white/80 block leading-tight">
                    Do you suffer from any active severe kidney failure or severe hepatic insufficiency?
                  </label>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2 text-xs text-white/80 cursor-pointer">
                      <input className="accent-[#E8B29A] h-3.5 w-3.5" type="radio" value="yes" {...register("hasActiveKidneyIssues")} /> Yes
                    </label>
                    <label className="flex items-center gap-2 text-xs text-white/80 cursor-pointer">
                      <input className="accent-[#E8B29A] h-3.5 w-3.5" type="radio" value="no" {...register("hasActiveKidneyIssues")} /> No
                    </label>
                  </div>
                  {errors.hasActiveKidneyIssues && <p className="text-[11px] text-[#E8B29A] font-sans mt-1">{errors.hasActiveKidneyIssues.message}</p>}
                </div>

                {/* CLINICAL CONTRAINDICATION BLOCKER */}
                {hasContraindications && (
                  <div className="bg-[#E8B29A]/10 border border-[#E8B29A]/20 rounded-2xl p-4 flex gap-2.5 text-xs text-white leading-relaxed font-sans animate-fade-up">
                    <ShieldAlert className="h-5 w-5 text-[#E8B29A] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold block text-[#E8B29A] uppercase tracking-widest mb-1 font-sans">Clinical Exclusion</span>
                      <p className="opacity-90 font-light">
                        Based on the safety answers provided, you may not be a clinical candidate for peptide therapy at this time. A doctor will review, but we recommend consulting your local primary physician.
                      </p>
                    </div>
                  </div>
                )}

                <div className="flex gap-4 pt-4">
                  <button
                    type="button"
                    onClick={handlePrevStep}
                    className="w-1/2 py-3.5 bg-transparent text-white border border-white/20 hover:bg-white/5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-1.5 shadow-sm font-mono"
                  >
                    <ArrowLeft className="h-4 w-4" /> Back
                  </button>
                  <button
                    type="submit"
                    disabled={hasContraindications || isSubmitting}
                    className={`w-1/2 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-1.5 shadow-sm font-mono ${
                      hasContraindications 
                        ? "bg-white/5 text-white/20 cursor-not-allowed border-transparent" 
                        : "bg-[#E8B29A] text-[#0B0A09] hover:bg-white hover:text-[#0B0A09]"
                    }`}
                  >
                    {isSubmitting ? "Submitting..." : "Submit Form"}
                  </button>
                </div>
              </div>
            )}

            {/* STEP 4: Success & Scheduling */}
            {step === 4 && (
              <div className="space-y-6 text-center animate-fade-up">
                <div className="h-14 w-14 rounded-full bg-[#E8B29A]/10 text-[#E8B29A] flex items-center justify-center mx-auto border border-[#E8B29A]/20">
                  <CheckCircle className="h-8 w-8 text-[#E8B29A]" />
                </div>

                <div className="space-y-2">
                  <h2 className="font-serif text-2xl font-light text-white">Intake Submitted Successfully</h2>
                  <p className="text-xs text-white/60 leading-relaxed font-sans max-w-sm mx-auto font-light">
                    Your baseline details are locked. A U.S. board-certified physician will review your clinical history within 24 hours.
                  </p>
                </div>

                {/* Mock Booking Section */}
                <div className="border border-white/10 rounded-2xl p-5 bg-white/5 space-y-4 text-left shadow-lg">
                  <h3 className="font-serif text-base font-semibold text-white flex items-center gap-1.5">
                    <Calendar className="h-4 w-4 text-[#E8B29A]" /> Book your brief physician call
                  </h3>
                  <p className="text-[11px] text-white/60 font-sans leading-relaxed font-light">
                    Some states require a 3-minute video consultation to establish doctor-patient relationship prior to sterile prescription dispatch. Select an available slot.
                  </p>
                  
                  <div className="grid grid-cols-3 gap-2 pt-2">
                    <button 
                      onClick={() => alert("Consultation scheduled: Tomorrow at 9:00 AM. Check your email for links.")}
                      className="px-2 py-3 border border-white/10 hover:border-[#E8B29A] hover:bg-white/5 rounded-xl text-center transition-all cursor-pointer bg-white/5 shadow-sm font-sans"
                    >
                      <span className="block text-[10px] font-bold text-white/40 uppercase">Tomorrow</span>
                      <span className="block text-xs font-semibold text-[#E8B29A] mt-1 font-mono">9:00 AM</span>
                    </button>
                    <button 
                      onClick={() => alert("Consultation scheduled: Tomorrow at 1:30 PM. Check your email for links.")}
                      className="px-2 py-3 border border-white/10 hover:border-[#E8B29A] hover:bg-white/5 rounded-xl text-center transition-all cursor-pointer bg-white/5 shadow-sm font-sans"
                    >
                      <span className="block text-[10px] font-bold text-white/40 uppercase">Tomorrow</span>
                      <span className="block text-xs font-semibold text-[#E8B29A] mt-1 font-mono">1:30 PM</span>
                    </button>
                    <button 
                      onClick={() => alert("Consultation scheduled: Friday at 11:00 AM. Check your email for links.")}
                      className="px-2 py-3 border border-white/10 hover:border-[#E8B29A] hover:bg-white/5 rounded-xl text-center transition-all cursor-pointer bg-white/5 shadow-sm font-sans"
                    >
                      <span className="block text-[10px] font-bold text-white/40 uppercase">Friday</span>
                      <span className="block text-xs font-semibold text-[#E8B29A] mt-1 font-mono">11:00 AM</span>
                    </button>
                  </div>
                </div>

                <div className="pt-2 text-center text-[10px] text-white/40 font-sans leading-relaxed">
                  You will receive an email confirmation and portal login credentials to track your physician review status.
                </div>
              </div>
            )}

          </form>
        </div>
        
      </div>
    </div>
  );
}

export default function IntakePage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center font-sans text-white/50 text-xs uppercase tracking-widest">
        Loading Intake Portal...
      </div>
    }>
      <IntakeFormContent />
    </Suspense>
  );
}
