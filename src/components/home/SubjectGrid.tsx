"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, CheckCircle2, ChevronDown, Clock, CalendarCheck } from "lucide-react";
import { SUBJECTS } from "@/lib/constants";

// Unified cohesive teal styling for all subject cards
const TEAL_THEME = {
  accentColor: "from-teal-600 via-teal-500 to-teal-700",
  badgeBg: "bg-teal-50",
  badgeBorder: "border-teal-200/80",
  badgeText: "text-teal-800",
  iconBg: "bg-teal-50 text-teal-700 border-teal-200/80",
  borderHover: "hover:border-teal-400 hover:shadow-teal-500/10",
  glowBg: "from-teal-500/5 via-teal-400/5 to-transparent",
};

const SUBJECT_TAGLINES: Record<string, string> = {
  maths: "Algebra, Calculus & Pathway to ISI / IIT JAM",
  physics: "Mechanics, Circuits & Derivation Mastery",
  chemistry: "Periodic Maps, Reactions & Stoichiometry",
  biology: "Cell Physiology, Genetics & Diagram Precision",
  english: "Applied Grammar, Writing & Board Literature",
};

export function SubjectGrid() {
  const [activeCardId, setActiveCardId] = useState<string | null>(null);

  const mathSubject = SUBJECTS.find((s) => s.id === "maths") || SUBJECTS[0];
  const physicsSubject = SUBJECTS.find((s) => s.id === "physics") || SUBJECTS[1];
  const chemistrySubject = SUBJECTS.find((s) => s.id === "chemistry") || SUBJECTS[2];
  const biologySubject = SUBJECTS.find((s) => s.id === "biology") || SUBJECTS[3];
  const englishSubject = SUBJECTS.find((s) => s.id === "english") || SUBJECTS[4];

  const isCombinedExpanded = activeCardId === "combined";

  return (
    <section className="section-padding bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-200 inline-block">
              Complete Science & Language Mastery
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black font-heading text-navy-950 mt-3">
              5 Core Disciplines, Taught from Fundamentals
            </h2>
          </div>
          <Link
            href="/academics"
            className="btn-pill btn-outline text-xs !px-5 !py-2.5 shrink-0 self-start md:self-auto"
          >
            Explore Syllabus Details
          </Link>
        </div>

        {/* Bento Grid: 5 Subjects on Left, Combined Course on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* ═════════════════════════════════════════════════════════════
              LEFT 8 COLUMNS: 5 CORE DISCIPLINES
              ═════════════════════════════════════════════════════════════ */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            
            {/* CARD 1: MATHEMATICS — FULL WIDTH OF SUBJECTS AREA */}
            {(() => {
              const isExpanded = activeCardId === "maths";

              return (
                <motion.div
                  key="maths"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  onMouseEnter={() => setActiveCardId("maths")}
                  onMouseLeave={() => setActiveCardId(null)}
                  onClick={() => setActiveCardId(isExpanded ? null : "maths")}
                  className={`w-full rounded-3xl p-6 sm:p-7 bg-white border border-slate-200/90 shadow-sm transition-all duration-300 cursor-pointer overflow-hidden relative group ${
                    TEAL_THEME.borderHover
                  } ${isExpanded ? "shadow-xl ring-2 ring-teal-500/20" : "hover:shadow-md"}`}
                >
                  {/* Top themed teal gradient line */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${TEAL_THEME.accentColor}`}
                  />
                  {/* Background ambient glow */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${TEAL_THEME.glowBg} opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none`}
                  />

                  {/* Unique Floating Subject Symbol in background when hovered */}
                  <div className="absolute -bottom-8 right-6 text-8xl sm:text-9xl font-serif text-teal-900/[0.04] group-hover:text-teal-600/15 group-hover:-translate-y-3 group-hover:-rotate-6 transition-all duration-500 pointer-events-none select-none">
                    {mathSubject.symbol}
                  </div>

                  <div className="relative z-10">
                    {/* Card Header */}
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl font-serif font-black shadow-xs group-hover:scale-110 transition-transform ${TEAL_THEME.iconBg}`}
                        >
                          {mathSubject.symbol}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="text-xl sm:text-2xl font-black font-heading text-navy-950 group-hover:text-teal-700 transition-colors">
                              {mathSubject.name}
                            </h3>
                            <span className="hidden sm:inline-flex text-[10px] font-bold text-teal-700 bg-teal-50 border border-teal-200 px-2 py-0.5 rounded-full">
                              Flagship Specialty
                            </span>
                          </div>
                          <p className="text-xs text-slate-500 font-medium">
                            {SUBJECT_TAGLINES.maths}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full border border-slate-200">
                          {mathSubject.standards}
                        </span>
                      </div>
                    </div>

                    {/* Summary & interactive trigger */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mt-2 pt-2 border-t border-slate-100">
                      <div className="flex gap-1.5">
                        {mathSubject.boards.map((b) => (
                          <span
                            key={b}
                            className="text-[10px] font-bold text-slate-600 bg-slate-50 px-2 py-0.5 rounded border border-slate-200"
                          >
                            {b}
                          </span>
                        ))}
                      </div>

                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-teal-700 group-hover:text-teal-900 select-none self-end sm:self-auto">
                        <span>{isExpanded ? "Hide syllabus details" : "Hover / Tap for syllabus"}</span>
                        <ChevronDown
                          size={14}
                          className={`transition-transform duration-300 ${
                            isExpanded ? "rotate-180 text-teal-800" : "text-slate-400"
                          }`}
                        />
                      </span>
                    </div>

                    {/* Dropdown Content on Hover / Tap */}
                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          key="maths-dropdown"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="pt-4 mt-4 border-t border-slate-100">
                            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
                              {mathSubject.description}
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 bg-teal-50/40 p-3 rounded-2xl border border-teal-100">
                              {mathSubject.highlights.map((hl, i) => (
                                <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                                  <CheckCircle2 size={14} className="text-teal-600 shrink-0" />
                                  <span>{hl}</span>
                                </div>
                              ))}
                            </div>

                            <div className="mt-3 flex justify-end">
                              <Link
                                href="/academics#maths"
                                onClick={(e) => e.stopPropagation()}
                                className="text-xs font-bold text-teal-700 hover:text-navy-950 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                              >
                                <span>Explore Full Mathematics Syllabus</span>
                                <ArrowUpRight size={14} />
                              </Link>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })()}

            {/* CARDS 2 to 5: PHYSICS, CHEMISTRY, BIOLOGY, ENGLISH (2-COLUMN GRID) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">
              {[physicsSubject, chemistrySubject, biologySubject, englishSubject].map((subject) => {
                const isExpanded = activeCardId === subject.id;
                const tagline = SUBJECT_TAGLINES[subject.id] || "";

                return (
                  <motion.div
                    key={subject.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    onMouseEnter={() => setActiveCardId(subject.id)}
                    onMouseLeave={() => setActiveCardId(null)}
                    onClick={() => setActiveCardId(isExpanded ? null : subject.id)}
                    className={`col-span-1 self-start w-full rounded-3xl p-5 sm:p-6 bg-white border border-slate-200/90 shadow-sm transition-all duration-300 cursor-pointer overflow-hidden relative group ${
                      TEAL_THEME.borderHover
                    } ${isExpanded ? "shadow-xl ring-2 ring-teal-500/20" : "hover:shadow-md"}`}
                  >
                    {/* Top accent bar: cohesive teal */}
                    <div
                      className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${TEAL_THEME.accentColor}`}
                    />
                    {/* Background ambient glow */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${TEAL_THEME.glowBg} opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none`}
                    />

                    {/* Unique Floating Subject Symbol in background on hover */}
                    <div className="absolute -bottom-6 -right-2 text-7xl sm:text-8xl font-serif text-teal-900/[0.04] group-hover:text-teal-600/15 group-hover:-translate-y-3 group-hover:-rotate-6 transition-all duration-500 pointer-events-none select-none">
                      {subject.symbol}
                    </div>

                    <div className="relative z-10">
                      {/* Header */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <div className="flex items-center gap-2.5">
                          <div
                            className={`w-10 h-10 rounded-2xl flex items-center justify-center text-xl font-serif font-black shadow-xs group-hover:scale-105 transition-transform ${TEAL_THEME.iconBg}`}
                          >
                            {subject.symbol}
                          </div>
                          <div>
                            <h3 className="text-lg font-black font-heading text-navy-950 group-hover:text-teal-700 transition-colors">
                              {subject.name}
                            </h3>
                            <p className="text-[11px] text-slate-500 font-medium line-clamp-1">
                              {tagline}
                            </p>
                          </div>
                        </div>

                        <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full border border-slate-200 shrink-0">
                          {subject.standards}
                        </span>
                      </div>

                      {/* Boards and dropdown trigger */}
                      <div className="flex items-center justify-between mt-3 pt-2.5 border-t border-slate-100">
                        <div className="flex gap-1">
                          {subject.boards.map((b) => (
                            <span
                              key={b}
                              className="text-[9px] font-bold text-slate-600 bg-slate-50 px-1.5 py-0.5 rounded border border-slate-200"
                            >
                              {b}
                            </span>
                          ))}
                        </div>

                        <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-teal-700 group-hover:text-teal-900 select-none">
                          <span>{isExpanded ? "Hide" : "Details"}</span>
                          <ChevronDown
                            size={13}
                            className={`transition-transform duration-300 ${
                              isExpanded ? "rotate-180 text-teal-800" : "text-slate-400"
                            }`}
                          />
                        </span>
                      </div>

                      {/* Dropdown Content on Hover / Tap */}
                      <AnimatePresence initial={false}>
                        {isExpanded && (
                          <motion.div
                            key={`${subject.id}-dropdown`}
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <div className="pt-3 mt-3 border-t border-slate-100">
                              <p className="text-xs text-slate-600 leading-relaxed mb-2.5">
                                {subject.description}
                              </p>

                              <ul className="space-y-1.5 text-xs text-slate-700 bg-teal-50/30 p-2.5 rounded-xl border border-teal-100/70 mb-3">
                                {subject.highlights.slice(0, 3).map((hl, i) => (
                                  <li key={i} className="flex items-start gap-1.5">
                                    <CheckCircle2 size={13} className="text-teal-600 shrink-0 mt-0.5" />
                                    <span className="leading-tight">{hl}</span>
                                  </li>
                                ))}
                              </ul>

                              <div className="flex justify-end">
                                <Link
                                  href={`/academics#${subject.id}`}
                                  onClick={(e) => e.stopPropagation()}
                                  className="text-xs font-bold text-teal-700 hover:text-navy-950 flex items-center gap-0.5 group-hover:translate-x-0.5 transition-transform"
                                >
                                  <span>Syllabus</span>
                                  <ArrowUpRight size={13} />
                                </Link>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* ═════════════════════════════════════════════════════════════
              RIGHT 4 COLUMNS: ALL 5 SUBJECTS COMPREHENSIVE TRACK CARD
              Matches the exact full height of the subjects on the left
              ═════════════════════════════════════════════════════════════ */}
          <div className="lg:col-span-4 flex flex-col self-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              onMouseEnter={() => setActiveCardId("combined")}
              onMouseLeave={() => setActiveCardId(null)}
              onClick={() => setActiveCardId(isCombinedExpanded ? null : "combined")}
              className={`w-full rounded-3xl p-6 sm:p-7 shadow-2xl relative overflow-hidden cursor-pointer transition-all duration-300 border-2 ${
                isCombinedExpanded
                  ? "border-amber-400 ring-4 ring-amber-400/20 shadow-amber-500/10"
                  : "border-teal-500/40 hover:border-amber-400"
              } bg-gradient-to-br from-[#0c2333] via-[#091e2a] to-[#04121a] flex flex-col`}
            >
              {/* Top Amber Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-amber-400 via-amber-300 to-teal-400" />

              {/* Glowing ambient backdrop */}
              <div className="absolute -right-16 -top-16 w-56 h-56 bg-teal-500/15 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -left-16 -bottom-16 w-56 h-56 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10">
                {/* Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="inline-flex items-center text-[11px] font-black uppercase tracking-wider text-navy-950 bg-gradient-to-r from-amber-400 to-amber-300 px-3 py-1 rounded-full shadow-md">
                    Combined Course
                  </span>
                  <span className="text-[11px] font-bold text-teal-200 bg-white/10 px-2.5 py-1 rounded-full border border-white/15">
                    All 5 Subjects
                  </span>
                </div>

                {/* HEADING */}
                <h3
                  className="text-2xl sm:text-3xl font-black font-heading !text-white text-white tracking-tight leading-snug mt-2"
                  style={{ color: "#ffffff" }}
                >
                  All 5 Subjects{" "}
                  <span className="text-amber-300 block">Comprehensive Track</span>
                </h3>

                <p className="text-xs sm:text-sm text-slate-200 mt-3 leading-relaxed">
                  Full Science + Maths + English micro-batch package with synchronized timetables so classes never clash with school tests or personal study.
                </p>

                {/* Quick Specs Pills */}
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1 text-[11px] font-medium text-teal-100 bg-teal-950/60 border border-teal-500/30 px-2.5 py-1 rounded-lg">
                    <Clock size={12} className="text-amber-400" /> 1.5–2 hrs / session
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-medium text-teal-100 bg-teal-950/60 border border-teal-500/30 px-2.5 py-1 rounded-lg">
                    <CalendarCheck size={12} className="text-amber-400" /> Coordinated schedule
                  </span>
                </div>

                {/* Dropdown Indicator */}
                <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-amber-300">
                  <span>{isCombinedExpanded ? "Package highlights" : "Hover / Tap for details"}</span>
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-300 ${
                      isCombinedExpanded ? "rotate-180 text-amber-400" : ""
                    }`}
                  />
                </div>

                {/* Expandable Dropdown Drawer */}
                <AnimatePresence initial={false}>
                  {isCombinedExpanded && (
                    <motion.div
                      key="combined-content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 space-y-2.5 text-xs text-slate-200 border-t border-white/10 mt-3">
                        <div className="flex items-start gap-2.5 bg-white/5 p-2.5 rounded-xl border border-white/10">
                          <CheckCircle2 size={15} className="text-amber-400 shrink-0 mt-0.5" />
                          <span>Single point of contact for Maths, Physics, Chemistry, Biology & English.</span>
                        </div>
                        <div className="flex items-start gap-2.5 bg-white/5 p-2.5 rounded-xl border border-white/10">
                          <CheckCircle2 size={15} className="text-amber-400 shrink-0 mt-0.5" />
                          <span>Integrated monthly assessment reports with combined parent-teacher reviews.</span>
                        </div>
                        <div className="flex items-start gap-2.5 bg-white/5 p-2.5 rounded-xl border border-white/10">
                          <CheckCircle2 size={15} className="text-amber-400 shrink-0 mt-0.5" />
                          <span>High savings compared to hiring separate private tutors for 5 subjects.</span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Bottom Action Footer */}
              <div className="relative z-10 mt-6 pt-4 border-t border-white/15 flex flex-wrap items-center justify-between gap-3">
                <div>
                  <span className="text-[11px] uppercase tracking-wider font-bold text-amber-400 block">
                    Package Benefit
                  </span>
                  <span className="text-xs font-semibold text-slate-100">
                    Special Multi-Subject Fee
                  </span>
                </div>
                <Link
                  href="/fees"
                  onClick={(e) => e.stopPropagation()}
                  className="btn-pill bg-amber-400 hover:bg-amber-300 text-navy-950 font-black text-xs !px-4 !py-2.5 shadow-lg hover:scale-105 transition-all"
                >
                  View Fees
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
