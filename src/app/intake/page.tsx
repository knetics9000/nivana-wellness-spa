"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { 
  ShieldCheck, 
  User, 
  Heart, 
  ShieldAlert, 
  CheckCircle, 
  ArrowLeft, 
  ArrowRight,
  Sparkles,
  Calendar,
  Clock,
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
    <div className="bg-[#F8F4EC] min-h-screen py-12 px-4 sm:px-6 lg:px-8 font-sans text-[#2A2520] flex items-center justify-center">
      <div className="max-w-xl w-full space-y-8">
        
        {/* Title Block */}
        <div className="text-center space-y-2">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#B89968] bg-[#B89968]/10 px-3 py-1 rounded-full inline-block">
            Telehealth Intake Portal
          </span>
          <h1 className="font-serif text-3xl font-bold text-[#2A2520]">
            Nivana Consultation Form
          </h1>
          <p className="text-xs text-[#2A2520]/60 max-w-sm mx-auto leading-relaxed">
            Secure HIPAA-compliant lead intake. Our clinical coordinators will route this details to a board-certified physician.
          </p>
        </div>

        {/* Progress bar */}
        <div className="flex items-center justify-between px-4">
          <div className="flex flex-col items-center">
            <span className={`h-8 w-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
              step >= 1 ? "bg-[#B89968] text-[#F8F4EC]" : "bg-[#EFE8DA] text-[#2A2520]/50"
            }`}>
              {step > 1 ? <Check className="h-4 w-4" /> : "1"}
            </span>
            <span className="text-[9px] uppercase font-semibold tracking-wider text-[#2A2520]/60 mt-1.5">Account</span>
          </div>
          <div className={`flex-grow h-0.5 mx-2 bg-[#E2D9C7] transition-colors ${step >= 2 ? "bg-[#B89968]" : ""}`}></div>
          
          <div className="flex flex-col items-center">
            <span className={`h-8 w-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
              step >= 2 ? "bg-[#B89968] text-[#F8F4EC]" : "bg-[#EFE8DA] text-[#2A2520]/50"
            }`}>
              {step > 2 ? <Check className="h-4 w-4" /> : "2"}
            </span>
            <span className="text-[9px] uppercase font-semibold tracking-wider text-[#2A2520]/60 mt-1.5">Biology</span>
          </div>
          <div className={`flex-grow h-0.5 mx-2 bg-[#E2D9C7] transition-colors ${step >= 3 ? "bg-[#B89968]" : ""}`}></div>
          
          <div className="flex flex-col items-center">
            <span className={`h-8 w-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
              step >= 3 ? "bg-[#B89968] text-[#F8F4EC]" : "bg-[#EFE8DA] text-[#2A2520]/50"
            }`}>
              {step > 3 ? <Check className="h-4 w-4" /> : "3"}
            </span>
            <span className="text-[9px] uppercase font-semibold tracking-wider text-[#2A2520]/60 mt-1.5">Safety</span>
          </div>
        </div>

        {/* Form Card */}
        <div className="bg-[#EFE8DA]/40 border border-[#E2D9C7] rounded-3xl p-6 sm:p-10 shadow-sm">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            
            {/* STEP 1: Account Setup */}
            {step === 1 && (
              <div className="space-y-5">
                <h2 className="font-serif text-xl font-semibold text-[#2A2520] border-b border-[#E2D9C7]/50 pb-2">
                  Account details
                </h2>

                <div className="space-y-1">
                  <label className="text-xs uppercase font-bold tracking-wider text-[#2A2520]/80">Full Legal Name</label>
                  <input
                    type="text"
                    placeholder="Enter legal first and last name"
                    {...register("fullName")}
                    className="w-full px-4 py-3 bg-[#F8F4EC] border border-[#E2D9C7] rounded-xl text-sm focus:outline-none focus:border-[#B89968]"
                  />
                  {errors.fullName && <p className="text-[11px] text-red-600 font-sans mt-1">{errors.fullName.message}</p>}
                </div>

                <div className="space-y-1">
                  <label className="text-xs uppercase font-bold tracking-wider text-[#2A2520]/80">Email Address</label>
                  <input
                    type="email"
                    placeholder="name@domain.com"
                    {...register("email")}
                    className="w-full px-4 py-3 bg-[#F8F4EC] border border-[#E2D9C7] rounded-xl text-sm focus:outline-none focus:border-[#B89968]"
                  />
                  {errors.email && <p className="text-[11px] text-red-600 font-sans mt-1">{errors.email.message}</p>}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs uppercase font-bold tracking-wider text-[#2A2520]/80">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="10-digit number"
                      {...register("phone")}
                      className="w-full px-4 py-3 bg-[#F8F4EC] border border-[#E2D9C7] rounded-xl text-sm focus:outline-none focus:border-[#B89968]"
                    />
                    {errors.phone && <p className="text-[11px] text-red-600 font-sans mt-1">{errors.phone.message}</p>}
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs uppercase font-bold tracking-wider text-[#2A2520]/80">State of Residence</label>
                    <select
                      {...register("state")}
                      className="w-full px-4 py-3 bg-[#F8F4EC] border border-[#E2D9C7] rounded-xl text-sm focus:outline-none focus:border-[#B89968] text-[#2A2520]/80"
                    >
                      {STATES.map(s => (
                        <option key={s.code} value={s.code}>{s.name}</option>
                      ))}
                    </select>
                    {errors.state && <p className="text-[11px] text-red-600 font-sans mt-1 leading-relaxed">{errors.state.message}</p>}
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    type="button"
                    onClick={handleNextStep}
                    className="w-full py-3.5 bg-[#B89968] hover:bg-[#8E7449] text-[#F8F4EC] rounded-full text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-1"
                  >
                    Continue <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2: Biology & Goals */}
            {step === 2 && (
              <div className="space-y-5">
                <h2 className="font-serif text-xl font-semibold text-[#2A2520] border-b border-[#E2D9C7]/50 pb-2">
                  Biological Markers & Goals
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs uppercase font-bold tracking-wider text-[#2A2520]/80">Weight (lbs)</label>
                    <input
                      type="number"
                      placeholder="e.g. 165"
                      {...register("weight")}
                      className="w-full px-4 py-3 bg-[#F8F4EC] border border-[#E2D9C7] rounded-xl text-sm focus:outline-none focus:border-[#B89968]"
                    />
                    {errors.weight && <p className="text-[11px] text-red-600 font-sans mt-1">{errors.weight.message}</p>}
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs uppercase font-bold tracking-wider text-[#2A2520]/80">Height</label>
                    <input
                      type="text"
                      placeholder="e.g. 5'10&quot;"
                      {...register("height")}
                      className="w-full px-4 py-3 bg-[#F8F4EC] border border-[#E2D9C7] rounded-xl text-sm focus:outline-none focus:border-[#B89968]"
                    />
                    {errors.height && <p className="text-[11px] text-red-600 font-sans mt-1">{errors.height.message}</p>}
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs uppercase font-bold tracking-wider text-[#2A2520]/80">Primary Wellness Interest</label>
                  <select
                    {...register("wellnessInterest")}
                    className="w-full px-4 py-3 bg-[#F8F4EC] border border-[#E2D9C7] rounded-xl text-sm focus:outline-none focus:border-[#B89968] text-[#2A2520]/80"
                  >
                    <option value="">Select wellness category</option>
                    <option value="metabolic">Weight Loss & Metabolic Correction</option>
                    <option value="longevity">Cellular Aging & Longevity (NAD+ / Bioregulators)</option>
                    <option value="recovery">Tissue Healing & Injury Repair (BPC-157)</option>
                    <option value="growth">GH Optimization (Sermorelin / Ipamorelin)</option>
                    <option value="sexual">Sexual Health (PT-141)</option>
                    <option value="beauty">Skin & Aesthetics (GHK-Cu)</option>
                  </select>
                  {errors.wellnessInterest && <p className="text-[11px] text-red-600 font-sans mt-1">{errors.wellnessInterest.message}</p>}
                </div>

                <div className="space-y-1">
                  <label className="text-xs uppercase font-bold tracking-wider text-[#2A2520]/80">Primary Goal Description</label>
                  <textarea
                    rows={3}
                    placeholder="Briefly describe what outcomes you hope to achieve with peptide therapy."
                    {...register("primaryGoal")}
                    className="w-full px-4 py-3 bg-[#F8F4EC] border border-[#E2D9C7] rounded-xl text-sm focus:outline-none focus:border-[#B89968]"
                  ></textarea>
                  {errors.primaryGoal && <p className="text-[11px] text-red-600 font-sans mt-1">{errors.primaryGoal.message}</p>}
                </div>

                <div className="flex gap-4 pt-4">
                  <button
                    type="button"
                    onClick={handlePrevStep}
                    className="w-1/2 py-3.5 border border-[#B89968] text-[#8E7449] hover:bg-[#B89968]/5 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-1"
                  >
                    <ArrowLeft className="h-4 w-4" /> Back
                  </button>
                  <button
                    type="button"
                    onClick={handleNextStep}
                    className="w-1/2 py-3.5 bg-[#B89968] hover:bg-[#8E7449] text-[#F8F4EC] rounded-full text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-1"
                  >
                    Continue <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: Safety Screening */}
            {step === 3 && (
              <div className="space-y-5">
                <h2 className="font-serif text-xl font-semibold text-[#2A2520] border-b border-[#E2D9C7]/50 pb-2 flex items-center gap-1">
                  Medical Safety Screening
                </h2>

                {/* Question 1: Thyroid Cancer */}
                <div className="space-y-2">
                  <label className="text-xs uppercase font-bold tracking-wider text-[#2A2520]/80 block leading-tight">
                    Do you have a personal or family history of Medullary Thyroid Carcinoma (MTC) or MEN 2?
                  </label>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-1.5 text-xs text-[#2A2520]/80">
                      <input type="radio" value="yes" {...register("hasThyroidCancerHistory")} /> Yes
                    </label>
                    <label className="flex items-center gap-1.5 text-xs text-[#2A2520]/80">
                      <input type="radio" value="no" {...register("hasThyroidCancerHistory")} /> No
                    </label>
                  </div>
                  {errors.hasThyroidCancerHistory && <p className="text-[11px] text-red-600 font-sans mt-1">{errors.hasThyroidCancerHistory.message}</p>}
                </div>

                {/* Question 2: Pregnancy */}
                <div className="space-y-2">
                  <label className="text-xs uppercase font-bold tracking-wider text-[#2A2520]/80 block leading-tight">
                    Are you currently pregnant, planning to become pregnant, or breastfeeding?
                  </label>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-1.5 text-xs text-[#2A2520]/80">
                      <input type="radio" value="yes" {...register("isPregnantOrLactating")} /> Yes
                    </label>
                    <label className="flex items-center gap-1.5 text-xs text-[#2A2520]/80">
                      <input type="radio" value="no" {...register("isPregnantOrLactating")} /> No
                    </label>
                  </div>
                  {errors.isPregnantOrLactating && <p className="text-[11px] text-red-600 font-sans mt-1">{errors.isPregnantOrLactating.message}</p>}
                </div>

                {/* Question 3: Kidney */}
                <div className="space-y-2">
                  <label className="text-xs uppercase font-bold tracking-wider text-[#2A2520]/80 block leading-tight">
                    Do you suffer from any active severe kidney failure or severe hepatic insufficiency?
                  </label>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-1.5 text-xs text-[#2A2520]/80">
                      <input type="radio" value="yes" {...register("hasActiveKidneyIssues")} /> Yes
                    </label>
                    <label className="flex items-center gap-1.5 text-xs text-[#2A2520]/80">
                      <input type="radio" value="no" {...register("hasActiveKidneyIssues")} /> No
                    </label>
                  </div>
                  {errors.hasActiveKidneyIssues && <p className="text-[11px] text-red-600 font-sans mt-1">{errors.hasActiveKidneyIssues.message}</p>}
                </div>

                {/* CLINICAL CONTRAINDICATION BLOCKER */}
                {hasContraindications && (
                  <div className="bg-[#C9A695]/15 border border-[#C9A695]/45 rounded-2xl p-4 flex gap-2.5 text-xs text-[#2A2520]/90 leading-relaxed font-sans animate-fade-up">
                    <ShieldAlert className="h-5 w-5 text-[#C9A695] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold block text-[#C9A695] uppercase tracking-wider mb-1">Clinical Exclusion</span>
                      <p>
                        Based on the safety answers provided, you may not be a clinical candidate for peptide therapy at this time. A doctor will review, but we recommend consulting your local primary physician.
                      </p>
                    </div>
                  </div>
                )}

                <div className="flex gap-4 pt-4">
                  <button
                    type="button"
                    onClick={handlePrevStep}
                    className="w-1/2 py-3.5 border border-[#B89968] text-[#8E7449] hover:bg-[#B89968]/5 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-1"
                  >
                    <ArrowLeft className="h-4 w-4" /> Back
                  </button>
                  <button
                    type="submit"
                    disabled={hasContraindications || isSubmitting}
                    className={`w-1/2 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-1 text-[#F8F4EC] ${
                      hasContraindications 
                        ? "bg-[#2A2520]/20 text-[#2A2520]/40 cursor-not-allowed border-transparent" 
                        : "bg-[#2A2520] hover:bg-[#B89968]"
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
                <div className="h-14 w-14 rounded-full bg-[#A8B59A]/15 text-[#A8B59A] flex items-center justify-center mx-auto">
                  <CheckCircle className="h-8 w-8" />
                </div>

                <div className="space-y-2">
                  <h2 className="font-serif text-2xl font-bold text-[#2A2520]">Intake Submitted Successfully</h2>
                  <p className="text-xs text-[#2A2520]/75 leading-relaxed font-sans max-w-sm mx-auto">
                    Your baseline details are locked. A U.S. board-certified physician will review your clinical history within 24 hours.
                  </p>
                </div>

                {/* Mock Booking Section */}
                <div className="border border-[#E2D9C7] rounded-2xl p-5 bg-[#F8F4EC] space-y-4 text-left">
                  <h3 className="font-serif text-sm font-bold text-[#2A2520] flex items-center gap-1.5">
                    <Calendar className="h-4 w-4 text-[#B89968]" /> Book your brief physician call
                  </h3>
                  <p className="text-[11px] text-[#2A2520]/70 font-sans leading-relaxed">
                    Some states require a 3-minute video consultation to establish doctor-patient relationship prior to sterile prescription dispatch. Select an available slot.
                  </p>
                  
                  <div className="grid grid-cols-3 gap-2 pt-2">
                    <button 
                      onClick={() => alert("Consultation scheduled: Tomorrow at 9:00 AM. Check your email for links.")}
                      className="px-2 py-3 border border-[#E2D9C7] hover:border-[#B89968] hover:bg-[#B89968]/5 rounded-xl text-center transition-all cursor-pointer"
                    >
                      <span className="block text-[10px] font-bold text-[#B89968] uppercase">Tomorrow</span>
                      <span className="block text-xs font-semibold text-[#2A2520]/80 mt-1">9:00 AM</span>
                    </button>
                    <button 
                      onClick={() => alert("Consultation scheduled: Tomorrow at 1:30 PM. Check your email for links.")}
                      className="px-2 py-3 border border-[#E2D9C7] hover:border-[#B89968] hover:bg-[#B89968]/5 rounded-xl text-center transition-all cursor-pointer"
                    >
                      <span className="block text-[10px] font-bold text-[#B89968] uppercase">Tomorrow</span>
                      <span className="block text-xs font-semibold text-[#2A2520]/80 mt-1">1:30 PM</span>
                    </button>
                    <button 
                      onClick={() => alert("Consultation scheduled: Friday at 11:00 AM. Check your email for links.")}
                      className="px-2 py-3 border border-[#E2D9C7] hover:border-[#B89968] hover:bg-[#B89968]/5 rounded-xl text-center transition-all cursor-pointer"
                    >
                      <span className="block text-[10px] font-bold text-[#B89968] uppercase">Friday</span>
                      <span className="block text-xs font-semibold text-[#2A2520]/80 mt-1">11:00 AM</span>
                    </button>
                  </div>
                </div>

                <div className="pt-2 text-center text-[10px] text-[#2A2520]/50 font-sans leading-relaxed">
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
      <div className="bg-[#F8F4EC] min-h-screen flex items-center justify-center font-sans text-[#2A2520]/50 text-xs uppercase tracking-widest">
        Loading Intake Portal...
      </div>
    }>
      <IntakeFormContent />
    </Suspense>
  );
}
