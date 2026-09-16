"use client";

import Link from "next/link";
import { MessageCircle, Phone, Clock, MapPin, Sparkles, ArrowRight } from "lucide-react";
import { CONTACT, getWhatsAppUrl } from "@/lib/constants";

export function AdmissionCTA() {
  return (
    <section className="section-padding bg-gradient-to-br from-navy-950 via-navy-900 to-teal-950 text-white relative overflow-hidden">
      {/* Decorative math symbols floating in background */}
      <div className="absolute -top-12 -right-12 text-teal-800/20 font-serif text-[180px] pointer-events-none select-none">
        ∫
      </div>
      <div className="absolute -bottom-16 -left-12 text-amber-600/10 font-serif text-[200px] pointer-events-none select-none">
        π
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-r from-navy-900/90 to-teal-900/70 border border-teal-500/30 rounded-3xl p-8 sm:p-12 md:p-16 shadow-2xl backdrop-blur-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left text */}
            <div className="lg:col-span-7 space-y-4 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-amber-400/20 text-amber-300 border border-amber-400/30 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                <Sparkles size={13} className="text-amber-400" />
                <span>Admissions Open for Session 2026–27</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading text-white tracking-tight leading-tight">
                Give Your Child the Advantage of Small-Batch Focus
              </h2>

              <p className="text-sm sm:text-base text-navy-200 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Limited seats available per standard to maintain our strict 3–5 student batch cap. Schedule a free diagnostic class and discuss your child&apos;s academic goals with our mentors.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill btn-whatsapp text-sm px-6 py-3.5 shadow-xl w-full sm:w-auto justify-center font-bold"
                >
                  <MessageCircle size={18} />
                  <span>Chat on WhatsApp Instantly</span>
                </a>

                <Link
                  href="/contact"
                  className="btn-pill bg-white hover:bg-slate-100 text-navy-950 text-sm px-6 py-3.5 shadow-md w-full sm:w-auto justify-center font-bold flex items-center gap-1.5"
                >
                  <span>Fill Admission Form</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Right Card: Center Timings & Contact Band (Adapted from Boo layout) */}
            <div className="lg:col-span-5 bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-7 border border-white/10 space-y-4">
              <h3 className="text-base font-bold font-heading text-white uppercase tracking-wider border-b border-white/10 pb-3">
                Center Timings & Helpline
              </h3>

              <div className="flex items-start gap-3 text-xs sm:text-sm text-navy-100">
                <Clock size={18} className="text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Center Working Hours:</p>
                  <p className="text-navy-300">{CONTACT.timing}</p>
                  <p className="text-[11px] text-amber-300 mt-0.5 font-medium">
                    Batch Sessions: {CONTACT.sessionDuration}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 text-xs sm:text-sm text-navy-100">
                <Phone size={18} className="text-teal-300 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Direct Academic Helpline:</p>
                  <a
                    href={`tel:${CONTACT.phone}`}
                    className="text-amber-300 hover:underline font-bold text-base block mt-0.5"
                  >
                    {CONTACT.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 text-xs sm:text-sm text-navy-100">
                <MapPin size={18} className="text-rose-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Physical Classroom Center:</p>
                  <p className="text-navy-300 text-xs">
                    {CONTACT.address.street}, {CONTACT.address.city} — {CONTACT.address.pincode}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
