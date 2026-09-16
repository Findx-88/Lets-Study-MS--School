"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Users,
  Clock,
  GraduationCap,
  CheckCircle,
  ArrowRight,
  ExternalLink,
  ChevronRight,
  Check,
} from "lucide-react";
import { JOURNEY_STAGES, BRAND, getWhatsAppUrl } from "@/lib/constants";

export default function JourneyPage() {
  const [selectedStage, setSelectedStage] = useState(0);
  const current = JOURNEY_STAGES[selectedStage];

  return (
    <div className="pb-20">
      {/* Page Header */}
      <section className="bg-gradient-to-b from-teal-50/70 via-cream-50 to-white pt-28 pb-16 md:pt-36 md:pb-20 border-b border-slate-200/60 math-bg text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl sm:text-5xl font-black font-heading text-navy-950">
            Your Child&apos;s Learning Journey
          </h1>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Interactive Stepper Navigation (Horizontal on Desktop, Stack on Mobile) */}
        <div className="mb-10 sm:mb-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {JOURNEY_STAGES.map((stg, i) => {
              const isCurrent = selectedStage === i;
              return (
                <button
                  key={stg.stageNumber}
                  onClick={() => setSelectedStage(i)}
                  className={`p-3.5 sm:p-5 rounded-3xl text-left transition-all duration-300 relative border cursor-pointer ${
                    isCurrent
                      ? "bg-navy-950 text-white shadow-xl border-navy-900 transform -translate-y-1"
                      : "bg-white text-navy-950 hover:bg-cream-50 border-slate-200"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                        isCurrent
                          ? "bg-amber-400 text-navy-950 font-bold"
                          : "bg-slate-100 text-slate-700"
                      }`}
                    >
                      Stage {stg.stageNumber}
                    </span>
                    <span
                      className={`text-xs font-bold ${
                        isCurrent ? "text-teal-300" : "text-teal-700"
                      }`}
                    >
                      {stg.standards}
                    </span>
                  </div>

                  <h3
                    className={`font-heading font-black text-lg ${
                      isCurrent ? "text-white" : "text-navy-950"
                    }`}
                  >
                    {stg.title}
                  </h3>

                  <p
                    className={`text-xs mt-1 line-clamp-1 ${
                      isCurrent ? "text-slate-300" : "text-slate-500"
                    }`}
                  >
                    {stg.batchSize} • {stg.taughtBy}
                  </p>

                  {/* Indicator bar */}
                  <div
                    className={`mt-4 h-1.5 w-full rounded-full ${
                      isCurrent
                        ? "bg-gradient-to-r from-amber-400 to-teal-400"
                        : "bg-slate-100"
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </div>

        {/* Detailed Stage Showcase */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.stageNumber}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
            className="bg-white rounded-3xl p-5 sm:p-10 border border-slate-200/80 shadow-xl"
          >
            {/* Stage Title and Badges */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 border-b border-slate-100">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                  Stage {current.stageNumber} • Standards: {current.standards}
                </span>
                <h2 className="text-3xl sm:text-4xl font-black font-heading text-navy-950 mt-2">
                  The {current.title} Stage
                </h2>
                <p className="text-sm font-semibold text-teal-700 mt-1">
                  Primary Objective: {current.focus}
                </p>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-2.5 text-xs">
                <div className="flex items-center gap-1.5 bg-slate-50 text-navy-900 border border-slate-200 px-3 py-2 rounded-xl font-semibold">
                  <Users size={15} className="text-teal-600" />
                  <span>{current.batchSize}</span>
                </div>
                <div className="flex items-center gap-1.5 bg-slate-50 text-navy-900 border border-slate-200 px-3 py-2 rounded-xl font-semibold">
                  <Clock size={15} className="text-amber-600" />
                  <span>{current.sessionDuration}</span>
                </div>
                <div className="flex items-center gap-1.5 bg-teal-50 text-teal-800 border border-teal-200 px-3 py-2 rounded-xl font-semibold">
                  <GraduationCap size={15} className="text-teal-600" />
                  <span>{current.taughtBy}</span>
                </div>
              </div>
            </div>

            {/* Deep Dive Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-8 items-start">
              <div className="lg:col-span-7 space-y-5">
                <div>
                  <h3 className="text-lg font-bold font-heading text-navy-950 mb-2">
                    Why This Stage Matters:
                  </h3>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {current.description}
                  </p>
                </div>

                <div className="bg-cream-50 p-5 rounded-2xl border border-slate-200/80">
                  <h4 className="text-xs font-bold text-navy-950 uppercase tracking-wider mb-2">
                    Batch Dynamics:
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {current.stageNumber === 1
                      ? "In Class 5 and 6, confidence is fragile. We keep pods ultra-small (3–4 students) so near-peer mentors can sit beside each child and ensure no fear of numbers develops."
                      : current.stageNumber === 2
                      ? "In Class 7 and 8, conceptual bifurcation occurs. Micro-batches of 5 allow rigorous doubt discussions without anyone being left behind."
                      : current.stageNumber === 3
                      ? "Class 9 and 10 is board exam territory. Batches of 5 are drilled in 10-year question banks, timing management, and step-marking precision."
                      : "Class 11 and 12 provides the bridge to university. Rigorous subject depth with expert faculties and direct mentorship for competitive entrance."}
                  </p>
                </div>
              </div>

              <div className="lg:col-span-5 bg-gradient-to-br from-slate-50 to-cream-50 p-6 rounded-3xl border border-slate-200">
                <h4 className="font-heading font-bold text-base text-navy-950 mb-4 flex items-center gap-2">
                  <CheckCircle size={18} className="text-teal-600" />
                  <span>Key Milestones Achieved:</span>
                </h4>
                <ul className="space-y-3">
                  {current.keyOutcomes.map((outcome, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                      <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                        <Check size={12} strokeWidth={3} />
                      </div>
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-4 border-t border-slate-200">
                  <a
                    href={getWhatsAppUrl(
                      `Hello! I want to enroll my child for Stage ${current.stageNumber} (${current.standards}) - ${current.title}.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-pill btn-amber w-full justify-center text-xs font-bold !py-2.5"
                  >
                    Enquire for Stage {current.stageNumber} ({current.standards})
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* The Grand Bridge Callout (Connecting back to Parent Brand) */}
        <div className="mt-16 bg-gradient-to-r from-navy-950 via-navy-900 to-teal-950 text-white rounded-3xl p-8 sm:p-10 lg:p-12 border border-teal-500/30 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 font-serif text-[180px] text-teal-500/10 select-none pointer-events-none -mr-8 -mt-16">
            ∫
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10">
            {/* Left Column: All text, pills, and CTA button aligned together */}
            <div className="lg:col-span-7 space-y-5">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-400/20 px-3 py-1 rounded-full border border-amber-400/30 inline-block mb-3">
                  Stage 5 & Beyond: The Continuing Ladder
                </span>
                <h2 className="text-2xl sm:text-[28px] lg:text-[26px] xl:text-[30px] font-black font-heading text-white whitespace-normal lg:whitespace-nowrap tracking-tight">
                  Where Does the Journey Lead After Class 12?
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed max-w-xl">
                Unlike generic coaching centers where the relationship ends after school, Let&apos;s Study MS is a full-fledged higher mathematics academy. Students graduating from our Class 12 program can seamlessly transition into our acclaimed preparation batches for:
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1 text-xs">
                <div className="bg-white/10 p-3 rounded-xl border border-white/10 text-center flex flex-col justify-center">
                  <span className="font-bold text-amber-400 block text-xs sm:text-sm">IIT JAM</span>
                  <span className="text-[10px] text-slate-300 mt-0.5">MSc at IITs</span>
                </div>
                <div className="bg-white/10 p-3 rounded-xl border border-white/10 text-center flex flex-col justify-center">
                  <span className="font-bold text-amber-400 block text-xs sm:text-sm">ISI Kolkata</span>
                  <span className="text-[10px] text-slate-300 mt-0.5">B.Math & M.Math</span>
                </div>
                <div className="bg-white/10 p-3 rounded-xl border border-white/10 text-center flex flex-col justify-center">
                  <span className="font-bold text-amber-400 block text-xs sm:text-sm">TIFR / NBHM</span>
                  <span className="text-[10px] text-slate-300 mt-0.5">Research & PhD</span>
                </div>
                <div className="bg-white/10 p-3 rounded-xl border border-white/10 text-center flex flex-col justify-center">
                  <span className="font-bold text-amber-400 block text-xs sm:text-sm">BSc Honours</span>
                  <span className="text-[10px] text-slate-300 mt-0.5">College Semesters</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href={BRAND.parentUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill bg-teal-500 hover:bg-teal-400 text-navy-950 font-bold text-xs !px-5 !py-2.5 inline-flex items-center gap-1.5 shadow-lg"
                >
                  <span>Visit Higher Mathematics Institute</span>
                  <ExternalLink size={14} />
                </Link>
              </div>
            </div>

            {/* Right Column: Classroom photo with matched proportions */}
            <div className="lg:col-span-5 w-full flex items-center justify-center">
              <div className="relative rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-navy-900/60 aspect-[4/3] w-full max-w-md lg:max-w-none">
                <Image
                  src="/images/gallery/classroom.jpg"
                  alt="Students engaged in focused small group learning"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
