"use client";

import React, { useState } from "react";
import { Mail, Phone, MessageSquare, MapPin, Clock, Send, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[#F8F4EC] text-[#2A2520] font-sans pb-24">
      {/* Hero Header */}
      <section className="bg-[#EFE8DA] py-16 border-b border-[#E2D9C7] text-[#2A2520]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#B89968]">Clinical Coordination</span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight">Contact Our Team</h1>
          <p className="text-sm sm:text-base text-[#2A2520]/75 max-w-xl mx-auto leading-relaxed">
            Have questions about reconstitution, billing, or shipping? Our dedicated care coordinators are here to assist.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Column: Direct Coordinates */}
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-4">
            <h2 className="font-serif text-2xl font-bold text-[#2A2520]">Direct Communication</h2>
            <p className="text-xs text-[#2A2520]/65 leading-relaxed font-sans">
              For security and HIPAA compliance, please do not email sensitive personal blood diagnostic files directly. Use the secure patient portal for diagnostic file transfers.
            </p>
          </div>

          <div className="space-y-6">
            
            {/* Coordinate 1: Email */}
            <div className="flex gap-4 items-start">
              <div className="h-10 w-10 rounded-full bg-[#B89968]/15 text-[#8E7449] flex items-center justify-center shrink-0">
                <Mail className="h-5 w-5" />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#B89968]">General Inquiries &amp; Care Support</span>
                <a href="mailto:care@nivanawellness.com" className="block text-sm sm:text-base font-semibold hover:text-[#B89968] transition-colors">
                  care@nivanawellness.com
                </a>
              </div>
            </div>

            {/* Coordinate 2: Phone */}
            <div className="flex gap-4 items-start">
              <div className="h-10 w-10 rounded-full bg-[#B89968]/15 text-[#8E7449] flex items-center justify-center shrink-0">
                <Phone className="h-5 w-5" />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#B89968]">Patient Phone Line</span>
                <span className="block text-sm sm:text-base font-semibold">(800) 555-0199</span>
                <span className="block text-[10px] text-[#2A2520]/50">Mon – Fri, 9:00 AM – 5:00 PM EST</span>
              </div>
            </div>

            {/* Coordinate 3: Text */}
            <div className="flex gap-4 items-start">
              <div className="h-10 w-10 rounded-full bg-[#B89968]/15 text-[#8E7449] flex items-center justify-center shrink-0">
                <MessageSquare className="h-5 w-5" />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#B89968]">Concierge SMS Support</span>
                <span className="block text-sm sm:text-base font-semibold">(800) 555-0188</span>
                <span className="block text-[10px] text-[#2A2520]/50">Standard text rates apply. Prescriptions/dosing updates are only handled inside the portal.</span>
              </div>
            </div>

            {/* Coordinate 4: Flagship */}
            <div className="flex gap-4 items-start border-t border-[#E2D9C7]/50 pt-6">
              <div className="h-10 w-10 rounded-full bg-[#B89968]/15 text-[#8E7449] flex items-center justify-center shrink-0">
                <MapPin className="h-5 w-5" />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#B89968]">Flagship Wellness Spa (By Appointment Only)</span>
                <address className="block text-sm not-italic text-[#2A2520]/80 leading-relaxed font-sans">
                  Nivana Wellness Spa <br />
                  450 Longevity Way, Suite 100 <br />
                  Palm Beach, FL 33480
                </address>
              </div>
            </div>

          </div>
        </div>

        {/* Right Column: Secure Form */}
        <div className="lg:col-span-7">
          <div className="bg-[#EFE8DA]/40 border border-[#E2D9C7] rounded-3xl p-6 sm:p-10 shadow-sm">
            {submitted ? (
              <div className="text-center py-12 space-y-4 animate-fade-up">
                <div className="h-12 w-12 rounded-full bg-[#A8B59A]/15 text-[#A8B59A] flex items-center justify-center mx-auto">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#2A2520]">Message Sent Successfully</h3>
                <p className="text-xs text-[#2A2520]/75 leading-relaxed font-sans max-w-sm mx-auto">
                  Our coordinators will review your general inquiry and email you back within 12–24 business hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 bg-[#2A2520] hover:bg-[#B89968] text-[#F8F4EC] rounded-full text-xs font-semibold uppercase tracking-wider transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="font-serif text-xl font-bold text-[#2A2520] border-b border-[#E2D9C7]/50 pb-2">
                  General Inquiry Form
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs uppercase font-bold tracking-wider text-[#2A2520]/80">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="First and last name"
                      className="w-full px-4 py-3 bg-[#F8F4EC] border border-[#E2D9C7] rounded-xl text-sm focus:outline-none focus:border-[#B89968]"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs uppercase font-bold tracking-wider text-[#2A2520]/80">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="name@domain.com"
                      className="w-full px-4 py-3 bg-[#F8F4EC] border border-[#E2D9C7] rounded-xl text-sm focus:outline-none focus:border-[#B89968]"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs uppercase font-bold tracking-wider text-[#2A2520]/80">Subject</label>
                  <select
                    required
                    className="w-full px-4 py-3 bg-[#F8F4EC] border border-[#E2D9C7] rounded-xl text-sm focus:outline-none focus:border-[#B89968] text-[#2A2520]/80"
                  >
                    <option value="shipping">Shipping &amp; Cold Delivery Status</option>
                    <option value="billing">HSA/FSA Receipts &amp; Billing</option>
                    <option value="intake">Physician Screenings &amp; Bloodwork</option>
                    <option value="pharmacy">Pharmacy Sourcing &amp; Quality</option>
                    <option value="other">General Feedback / Spa Inquiries</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs uppercase font-bold tracking-wider text-[#2A2520]/80">Message</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Write details of your inquiry here..."
                    className="w-full px-4 py-3 bg-[#F8F4EC] border border-[#E2D9C7] rounded-xl text-sm focus:outline-none focus:border-[#B89968]"
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#B89968] hover:bg-[#8E7449] text-[#F8F4EC] rounded-full text-xs font-semibold uppercase tracking-widest transition-colors flex items-center justify-center gap-1.5"
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
