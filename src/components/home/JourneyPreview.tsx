"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles, Check, Users, GraduationCap, Clock } from "lucide-react";
import { JOURNEY_STAGES } from "@/lib/constants";

export function JourneyPreview() {
  const [activeStage, setActiveStage] = useState(0);
  const current = JOURNEY_STAGES[activeStage];

  return (
    <section className="section-padding bg-gradient-to-b from-white via-cream-50/50 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center bg-amber-100 text-amber-900 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <span>Signature Academic Framework</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black font-heading text-navy-950">
            Nurturing Young Minds, One Standard at a Time
          </h2>
        </div>

        {/* 4 Circular Stage Selectors (Adapted from Boo's Avatar Pattern) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto mb-10">
          {JOURNEY_STAGES.map((stage, index) => {
            const isSelected = activeStage === index;
            const bgGradients = [
              "from-sky-400 to-blue-500",
              "from-amber-400 to-orange-500",
              "from-emerald-400 to-teal-500",
              "from-purple-400 to-indigo-600",
            ];

            return (
              <button
                key={stage.stageNumber}
                onClick={() => setActiveStage(index)}
                className={`flex flex-col items-center text-center p-4 sm:p-6 rounded-3xl transition-all duration-300 relative group cursor-pointer ${
                  isSelected
                    ? "bg-white shadow-lg border border-teal-400/40 ring-1 ring-teal-400/20 transform -translate-y-1"
                    : "bg-white/60 hover:bg-white hover:shadow-md border border-slate-200/60"
                }`}
              >
                {/* Circular Stage Icon Frame */}
                <div
                  className={`w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-tr ${
                    bgGradients[index]
                  } flex flex-col items-center justify-center text-white shadow-lg mb-4 transition-transform group-hover:scale-105 relative`}
                >
                  <span className="text-xs font-bold uppercase tracking-wider opacity-90">
                    Stage {stage.stageNumber}
                  </span>
                  <span className="text-base sm:text-lg font-black font-heading">
                    {stage.standards}
                  </span>
                  {isSelected && (
                    <motion.div
                      layoutId="active-ring"
                      className="absolute -inset-1.5 rounded-full border-2 border-teal-400/40 pointer-events-none"
                    />
                  )}
                </div>

                <h3 className="font-heading font-bold text-base sm:text-lg text-navy-950 mb-1">
                  {stage.title}
                </h3>
                <span className="text-xs font-semibold text-teal-700 bg-teal-50 px-2.5 py-0.5 rounded-full">
                  {stage.batchSize}
                </span>
                <p className="text-[11px] text-slate-500 mt-2 line-clamp-2">
                  {stage.taughtBy}
                </p>
              </button>
            );
          })}
        </div>

        {/* Expandable Active Stage Detail Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.stageNumber}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl border border-slate-200/70 space-y-6"
          >
            {/* Top info row: Title on left, badges on right */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200 inline-block mb-2">
                  Stage {current.stageNumber} • {current.standards}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black font-heading text-navy-950">
                  {current.title} Phase
                </h3>
              </div>

              {/* Badges grouped cleanly */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 text-xs">
                <span className="flex items-center gap-1.5 bg-slate-50 text-slate-700 border border-slate-200 font-semibold px-3 py-1.5 rounded-xl">
                  <Users size={14} className="text-teal-600" />
                  {current.batchSize}
                </span>
                <span className="flex items-center gap-1.5 bg-slate-50 text-slate-700 border border-slate-200 font-semibold px-3 py-1.5 rounded-xl">
                  <Clock size={14} className="text-amber-600" />
                  {current.sessionDuration}
                </span>
                <span className="flex items-center gap-1.5 bg-teal-50 text-teal-800 font-semibold px-3 py-1.5 rounded-xl border border-teal-200">
                  <GraduationCap size={14} className="text-teal-600" />
                  {current.taughtBy}
                </span>
              </div>
            </div>

            {/* Stage Focus & Content (comfortable full width) */}
            <div className="space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-teal-700 block">
                Stage Focus
              </span>
              <p className="text-base sm:text-lg font-bold text-navy-950 leading-snug">
                {current.focus}
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
                {current.description}
              </p>
            </div>

            {/* Bottom CTA Row: Aligned footer bar */}
            <div className="pt-5 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <p className="text-xs text-slate-500">
                Explore detailed syllabus breakdown, session rhythms, and transition roadmaps.
              </p>
              <Link
                href="/journey"
                className="btn-pill btn-primary text-xs !px-5 !py-2.5 inline-flex items-center justify-center gap-1.5 shadow-md hover:shadow-lg whitespace-nowrap shrink-0"
              >
                <span>View Complete 5–12 Roadmap</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
