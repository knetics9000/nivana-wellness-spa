"use client";

import React, { useState } from "react";
import { Mail, Phone, MessageSquare, MapPin, Send, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#E8B29A] bg-[#E8B29A]/10 border border-white/10 px-3 py-1 rounded-full inline-block font-semibold">CLINICAL COORDINATION</span>
          <h1 className="font-serif text-4xl sm:text-5xl font-light tracking-tight text-white">Contact Our Team</h1>
          <p className="text-sm sm:text-base text-white/80 max-w-xl mx-auto leading-relaxed font-sans font-light">
            Have questions about reconstitution, billing, or shipping? Our dedicated care coordinators are here to assist.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 animate-fade-up relative z-10">
        
        {/* Left Column: Direct Coordinates */}
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-4">
            <h2 className="font-serif text-3xl font-light text-white">Direct Communication</h2>
            <p className="text-xs text-white/60 leading-relaxed font-sans font-light">
              For security and HIPAA compliance, please do not email sensitive personal blood diagnostic files directly. Use the secure patient portal for diagnostic file transfers.
            </p>
          </div>

          <div className="space-y-6">
            
            {/* Coordinate 1: Email */}
            <div className="flex gap-4 items-start">
              <div className="h-10 w-10 rounded-full bg-white/5 text-[#E8B29A] flex items-center justify-center shrink-0 border border-white/10">
                <Mail className="h-5 w-5" />
              </div>
              <div className="space-y-1">
                <span className="text-[9px] font-bold uppercase tracking-widest text-white/40 font-sans block">General Inquiries &amp; Care Support</span>
                <a href="mailto:care@valarawellness.com" className="block text-sm sm:text-base font-semibold hover:text-[#E8B29A] transition-colors">
                  care@valarawellness.com
                </a>
              </div>
            </div>

            {/* Coordinate 2: Phone */}
            <div className="flex gap-4 items-start">
              <div className="h-10 w-10 rounded-full bg-white/5 text-[#E8B29A] flex items-center justify-center shrink-0 border border-white/10">
                <Phone className="h-5 w-5" />
              </div>
              <div className="space-y-1">
                <span className="text-[9px] font-bold uppercase tracking-widest text-white/40 font-sans block">Patient Phone Line</span>
                <span className="block text-sm sm:text-base font-semibold text-white">(800) 555-0199</span>
                <span className="block text-[10px] text-white/50 font-sans">Mon – Fri, 9:00 AM – 5:00 PM EST</span>
              </div>
            </div>

            {/* Coordinate 3: Text */}
            <div className="flex gap-4 items-start">
              <div className="h-10 w-10 rounded-full bg-white/5 text-[#E8B29A] flex items-center justify-center shrink-0 border border-white/10">
                <MessageSquare className="h-5 w-5" />
              </div>
              <div className="space-y-1">
                <span className="text-[9px] font-bold uppercase tracking-widest text-white/40 font-sans block">Concierge SMS Support</span>
                <span className="block text-sm sm:text-base font-semibold text-white">(800) 555-0188</span>
                <span className="block text-[10px] text-white/50 font-sans">Standard text rates apply. Prescriptions/dosing updates are only handled inside the portal.</span>
              </div>
            </div>

            {/* Coordinate 4: Flagship */}
            <div className="flex gap-4 items-start border-t border-white/10 pt-6">
              <div className="h-10 w-10 rounded-full bg-white/5 text-[#E8B29A] flex items-center justify-center shrink-0 border border-white/10">
                <MapPin className="h-5 w-5" />
              </div>
              <div className="space-y-1">
                <span className="text-[9px] font-bold uppercase tracking-widest text-white/40 font-sans block">Flagship Wellness Spa (By Appointment Only)</span>
                <address className="block text-sm not-italic text-white/80 leading-relaxed font-sans font-light">
                  Valara Wellness Spa <br />
                  450 Longevity Way, Suite 100 <br />
                  Palm Beach, FL 33480
                </address>
              </div>
            </div>

          </div>
        </div>

        {/* Right Column: Secure Form */}
        <div className="lg:col-span-7">
          <div className="glass-panel-dark rounded-3xl p-6 sm:p-10 shadow-lg">
            {submitted ? (
              <div className="text-center py-12 space-y-4 animate-fade-up">
                <div className="h-12 w-12 rounded-full bg-[#E8B29A]/10 text-[#E8B29A] flex items-center justify-center mx-auto border border-[#E8B29A]/20">
                  <CheckCircle className="h-6 w-6 text-[#E8B29A]" />
                </div>
                <h3 className="font-serif text-2xl font-light text-white">Message Sent Successfully</h3>
                <p className="text-xs text-white/60 leading-relaxed font-sans max-w-sm mx-auto font-light">
                  Our coordinators will review your general inquiry and email you back within 12–24 business hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 bg-[#E8B29A] text-[#0B0A09] hover:bg-white hover:text-[#0B0A09] transition-all duration-300 rounded-full text-xs font-bold uppercase tracking-widest shadow-md font-mono"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="font-serif text-xl font-light text-white border-b border-white/10 pb-3">
                  General Inquiry Form
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase font-bold tracking-wider text-white/60">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="First and last name"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm focus:outline-none focus:border-[#E8B29A] text-white placeholder-white/30 font-sans"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase font-bold tracking-wider text-white/60">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="name@domain.com"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm focus:outline-none focus:border-[#E8B29A] text-white placeholder-white/30 font-sans"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] uppercase font-bold tracking-wider text-white/60">Subject</label>
                  <select
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm focus:outline-none focus:border-[#E8B29A] text-white/95 font-sans cursor-pointer"
                    style={{ colorScheme: "dark" }}
                  >
                    <option value="shipping" className="bg-[#0B0A09] text-white">Shipping &amp; Cold Delivery Status</option>
                    <option value="billing" className="bg-[#0B0A09] text-white">HSA/FSA Receipts &amp; Billing</option>
                    <option value="intake" className="bg-[#0B0A09] text-white">Physician Screenings &amp; Bloodwork</option>
                    <option value="pharmacy" className="bg-[#0B0A09] text-white">Pharmacy Sourcing &amp; Quality</option>
                    <option value="other" className="bg-[#0B0A09] text-white">General Feedback / Spa Inquiries</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] uppercase font-bold tracking-wider text-white/60">Message</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Write details of your inquiry here..."
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm focus:outline-none focus:border-[#E8B29A] text-white placeholder-white/30 font-sans"
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#E8B29A] hover:bg-white text-[#0B0A09] transition-all duration-300 rounded-full text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-1.5 shadow-md font-mono"
                  >
                    Submit Inquiry <Send className="h-4 w-4" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

      </section>
    </div>
  );
}
