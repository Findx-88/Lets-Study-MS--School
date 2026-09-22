import type { Metadata } from "next";
import { Check, Clock, Users, ShieldCheck, ArrowRight } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { FEE_TABLE, CONTACT, getWhatsAppUrl } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Batches & Fees — Transparent Pricing & Small Batch Rules",
  description: "View our transparent fee structure for Class 5 to 12. Small batches of 3–5 students, 1.5–2 hour sessions, starting from ₹1,500/month. Khardaha, Kolkata.",
  alternates: {
    canonical: "/fees",
  },
};

export default function FeesPage() {
  return (
    <div className="pb-20">
      {/* Header */}
      <section className="bg-gradient-to-b from-teal-50/70 via-cream-50 to-white pt-24 pb-12 sm:pt-24 md:pt-36 md:pb-20 border-b border-slate-200/60 math-bg text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl sm:text-5xl font-black font-heading text-navy-950">
            Batches & Fee Structure
          </h1>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12 sm:space-y-16">
        {/* Batch Size Explainer Card */}
        <div className="bg-gradient-to-r from-navy-950 via-navy-900 to-teal-950 text-white rounded-3xl p-6 sm:p-12 shadow-xl border border-teal-500/30">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 space-y-2">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                Our Non-Negotiable Rule
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white">
                We Strictly Limit Batches to 3–5 Students
              </h2>
            </div>

            <div className="md:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 items-stretch">
              <div className="bg-white/10 p-4 sm:p-5 rounded-2xl border border-white/15 text-center flex flex-col justify-center items-center h-full">
                <span className="text-xs text-amber-300 font-bold uppercase tracking-wider block">
                  Class 5 – 6
                </span>
                <p className="text-lg sm:text-2xl font-black font-heading text-white my-1 sm:my-2 whitespace-nowrap">
                  Pods of 3–4
                </p>
                <p className="text-[11px] sm:text-xs text-slate-300">
                  High-attention foundation pods
                </p>
              </div>

              <div className="bg-white/10 p-4 sm:p-5 rounded-2xl border border-white/15 text-center flex flex-col justify-center items-center h-full">
                <span className="text-xs text-teal-300 font-bold uppercase tracking-wider block">
                  Class 7 – 12
                </span>
                <p className="text-lg sm:text-2xl font-black font-heading text-white my-1 sm:my-2 whitespace-nowrap">
                  Batches of 5
                </p>
                <p className="text-[11px] sm:text-xs text-slate-300">
                  Personalised attention to each student
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Comprehensive Fee Table */}
        <div>
          <div className="text-center max-w-xl mx-auto mb-8">
            <h3 className="text-2xl sm:text-3xl font-black font-heading text-navy-950">
              Fee Breakdown by Teacher Level
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEE_TABLE.map((tier, idx) => (
              <div
                key={tier.level}
                className="bg-white rounded-3xl p-6 border border-slate-200 shadow-md hover:shadow-xl hover:border-teal-400 transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-teal-800 bg-teal-50 px-3 py-1 rounded-full border border-teal-200 inline-block mb-3">
                    {tier.level}
                  </span>
                  <h4 className="text-xl font-black font-heading text-navy-950">
                    {tier.classes}
                  </h4>
                  <p className="text-xs text-slate-500 mt-1">
                    {tier.teacherType}
                  </p>

                  <div className="my-5 p-4 rounded-2xl bg-cream-50 border border-slate-200">
                    {tier.hourlyRate !== "—" ? (
                      <div>
                        <span className="text-[11px] text-slate-400 block uppercase font-bold">
                          Hourly Rate
                        </span>
                        <p className="text-3xl font-black font-heading text-amber-600 mt-0.5">
                          {tier.hourlyRate}
                        </p>
                        <span className="text-[11px] text-slate-500">Advanced / 1-on-1 Guidance</span>
                      </div>
                    ) : (
                      <div className="space-y-3">
                        <div>
                          <span className="text-[10px] text-slate-400 uppercase font-bold block">
                            Once a Week (1.5 – 2 hrs):
                          </span>
                          <span className="text-xl font-black font-heading text-teal-700">
                            {tier.frequencyOnce}
                          </span>
                        </div>
                        <div className="pt-2 border-t border-slate-200">
                          <span className="text-[10px] text-slate-400 uppercase font-bold block">
                            Twice a Week (3 – 4 hrs total):
                          </span>
                          <span className="text-xl font-black font-heading text-amber-600">
                            {tier.frequencyTwice}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>

                  <ul className="space-y-2 text-xs text-slate-600">
                    <li className="flex items-center gap-2">
                      <Clock size={13} className="text-amber-500 shrink-0" />
                      <span>{tier.sessionLength} session</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Users size={13} className="text-teal-600 shrink-0" />
                      <span>{tier.batchSize}</span>
                    </li>
                    <li className="flex items-start gap-2 pt-1">
                      <Check size={13} className="text-emerald-600 shrink-0 mt-0.5" />
                      <span>{tier.bestFor}</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100">
                  <a
                    href={getWhatsAppUrl(
                      `Hello! I would like to book a seat for ${tier.level} (${tier.classes}). Please share available days.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-pill btn-primary w-full justify-center text-xs !py-2.5 font-bold"
                  >
                    Enroll for This Tier
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Personalized Package Inquiry CTA */}
        <div className="bg-cream-50 p-8 rounded-3xl border border-slate-200 text-center max-w-3xl mx-auto space-y-4">
          <h3 className="text-xl font-bold font-heading text-navy-950">
            Need a Multi-Subject or Sibling Package?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600">
            We offer combined packages for students enrolling in 3 or more subjects (Physics, Chemistry, Maths, Biology, English). Talk directly to our academic counselor on WhatsApp for a customized schedule and fee quote.
          </p>
          <a
            href={getWhatsAppUrl(
              "Hi, I want a customized fee quote for multiple subjects (Physics, Chemistry, Maths, Biology, English)."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pill btn-whatsapp text-xs font-bold inline-flex items-center gap-2 !px-6 !py-3"
          >
            <WhatsAppIcon size={16} />
            <span>Chat on WhatsApp for Personalized Plan</span>
          </a>
        </div>
      </div>
    </div>
  );
}
