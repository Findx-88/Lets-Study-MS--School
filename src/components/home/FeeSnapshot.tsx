"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check, Clock, Users, ArrowRight, ShieldCheck } from "lucide-react";
import { FEE_TABLE, getWhatsAppUrl } from "@/lib/constants";

export function FeeSnapshot() {
  return (
    <section className="section-padding bg-cream-50/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[10.5px] sm:text-xs font-bold uppercase tracking-wider sm:tracking-widest text-emerald-700 bg-emerald-100 px-3 sm:px-3.5 py-1 rounded-full border border-emerald-200 inline-block whitespace-nowrap">
            Transparent Academic Investment
          </span>
          <h2 className="text-3xl sm:text-4xl font-black font-heading text-navy-950 mt-3">
            Simple, Transparent Fee Structure
          </h2>
        </div>

        {/* 4 Tier Fee Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {FEE_TABLE.map((tier, idx) => {
            const isHighlighted = idx === 2; // Level 3 is most popular for board prep

            return (
              <motion.div
                key={tier.level}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.5 }}
                className={`rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 relative ${
                  isHighlighted
                    ? "bg-navy-900 text-white shadow-2xl border-2 border-amber-400 transform lg:-translate-y-2"
                    : "bg-white text-navy-950 shadow-md border border-slate-200/80 hover:shadow-xl hover:border-teal-300"
                }`}
              >
                {isHighlighted && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-amber-400 text-navy-950 font-black text-[10px] uppercase tracking-wider py-1 px-3.5 rounded-full shadow-md whitespace-nowrap text-center z-10">
                    Most Popular for Board Prep
                  </div>
                )}

                <div>
                  <span
                    className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full inline-block mb-3 ${
                      isHighlighted
                        ? "bg-navy-800 text-amber-300 border border-navy-700"
                        : "bg-teal-50 text-teal-800 border border-teal-200"
                    }`}
                  >
                    {tier.level}
                  </span>

                  <h3
                    className={`text-lg font-black font-heading leading-tight ${
                      isHighlighted ? "text-white" : "text-navy-950"
                    }`}
                  >
                    {tier.classes}
                  </h3>
                  <p
                    className={`text-xs mt-1 leading-snug ${
                      isHighlighted ? "text-navy-200" : "text-slate-500"
                    }`}
                  >
                    {tier.teacherType}
                  </p>

                  {/* Pricing Box */}
                  <div
                    className={`my-5 p-4 rounded-2xl ${
                      isHighlighted ? "bg-navy-800/80 border border-navy-700" : "bg-cream-50 border border-slate-200/60"
                    }`}
                  >
                    {tier.hourlyRate !== "—" ? (
                      <div>
                        <span className="text-xs text-slate-400 block">Hourly Mentorship</span>
                        <p className="text-2xl font-black font-heading text-amber-400">
                          {tier.hourlyRate}
                        </p>
                        <span className="text-[11px] text-slate-400">1-on-1 / Specialized module</span>
                      </div>
                    ) : (
                      <div className="space-y-2">
                        <div className="flex justify-between items-baseline">
                          <span className="text-xs text-slate-400">Once a week:</span>
                          <span className="text-base font-extrabold font-heading text-teal-400">
                            {tier.frequencyOnce}
                          </span>
                        </div>
                        <div className="flex justify-between items-baseline pt-1 border-t border-slate-200/40">
                          <span className="text-xs text-slate-400">Twice a week:</span>
                          <span className="text-base font-extrabold font-heading text-amber-400">
                            {tier.frequencyTwice}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Features list */}
                  <ul className="space-y-2.5 text-xs">
                    <li className="flex items-center gap-2">
                      <Clock size={14} className="text-amber-400 shrink-0" />
                      <span className={isHighlighted ? "text-navy-200" : "text-slate-600"}>
                        {tier.sessionLength} per session
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Users size={14} className="text-teal-400 shrink-0" />
                      <span className={isHighlighted ? "text-navy-200" : "text-slate-600"}>
                        {tier.batchSize}
                      </span>
                    </li>
                    <li className="flex items-start gap-2 pt-1">
                      <Check size={14} className="text-emerald-400 shrink-0 mt-0.5" />
                      <span className={isHighlighted ? "text-navy-200" : "text-slate-600"}>
                        {tier.bestFor}
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/40">
                  <a
                    href={getWhatsAppUrl(
                      `Hello! I would like to enquire about ${tier.level} (${tier.classes}) fee structure and available batch timings.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`btn-pill w-full justify-center text-xs !py-2.5 font-bold ${
                      isHighlighted
                        ? "bg-amber-400 hover:bg-amber-300 text-navy-950"
                        : "btn-primary"
                    }`}
                  >
                    Enquire for This Tier
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Banner Explaining Batch Sizes */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-700 flex items-center justify-center shrink-0">
              <ShieldCheck size={26} />
            </div>
            <div>
              <h4 className="font-heading font-bold text-base sm:text-lg text-navy-950">
                Batch Size Philosophy: Pods of 3–4 (Std 5–6) & Max 5 (Std 7+)
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                We never exceed 5 students per batch. If a batch fills up, we open a new batch rather than crowding the classroom.
              </p>
            </div>
          </div>
          <Link
            href="/fees"
            className="shrink-0 btn-pill btn-outline text-xs !px-5 !py-2.5 flex items-center gap-1"
          >
            <span>Full Fee Comparison</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
