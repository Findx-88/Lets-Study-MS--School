"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ChevronDown, Layers, BookOpen, GraduationCap, Award } from "lucide-react";
import { BOARDS } from "@/lib/constants";

interface BoardVisualConfig {
  accentColor: string;
  badgeBg: string;
  badgeBorder: string;
  badgeText: string;
  glowBg: string;
  cardBorderHover: string;
  iconBg: string;
  iconColor: string;
  icon: typeof BookOpen;
  keyPill: string;
}

const BOARD_CONFIGS: Record<string, BoardVisualConfig> = {
  cbse: {
    accentColor: "from-blue-600 to-indigo-700",
    badgeBg: "bg-blue-50",
    badgeBorder: "border-blue-200",
    badgeText: "text-blue-800",
    glowBg: "from-blue-500/10 via-indigo-500/5 to-transparent",
    cardBorderHover: "hover:border-blue-400 hover:shadow-blue-500/10",
    iconBg: "bg-blue-100 text-blue-700",
    iconColor: "text-blue-600",
    icon: BookOpen,
    keyPill: "NCERT & Exemplar Focus",
  },
  icse: {
    accentColor: "from-teal-600 to-emerald-700",
    badgeBg: "bg-emerald-50",
    badgeBorder: "border-emerald-200",
    badgeText: "text-emerald-800",
    glowBg: "from-teal-500/10 via-emerald-500/5 to-transparent",
    cardBorderHover: "hover:border-teal-400 hover:shadow-teal-500/10",
    iconBg: "bg-emerald-100 text-emerald-700",
    iconColor: "text-emerald-600",
    icon: GraduationCap,
    keyPill: "Analytical & Lab Depth",
  },
  wb: {
    accentColor: "from-amber-600 to-orange-700",
    badgeBg: "bg-amber-50",
    badgeBorder: "border-amber-200",
    badgeText: "text-amber-900",
    glowBg: "from-amber-500/10 via-orange-500/5 to-transparent",
    cardBorderHover: "hover:border-amber-400 hover:shadow-amber-500/10",
    iconBg: "bg-amber-100 text-amber-800",
    iconColor: "text-amber-600",
    icon: Award,
    keyPill: "Madhyamik & HS Precision",
  },
};

export function BoardStrip() {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section className="py-12 sm:py-16 bg-cream-50/70 border-b border-slate-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10">
          <p className="text-xs uppercase tracking-widest font-bold text-teal-700 mb-1">
            Curriculum Alignment
          </p>
          <h2 className="text-2xl sm:text-3xl font-black font-heading text-navy-950">
            Syllabus Coaching for 3 Major Boards
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {BOARDS.map((board, idx) => {
            const config = BOARD_CONFIGS[board.id] || BOARD_CONFIGS.cbse;
            const Icon = config.icon;
            const isExpanded = activeId === board.id;

            return (
              <motion.div
                key={board.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.4 }}
                onMouseEnter={() => setActiveId(board.id)}
                onMouseLeave={() => setActiveId(null)}
                onClick={() => setActiveId(isExpanded ? null : board.id)}
                className={`relative bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm transition-all duration-300 cursor-pointer overflow-hidden group ${
                  config.cardBorderHover
                } ${isExpanded ? "shadow-lg ring-2 ring-teal-500/20" : "hover:shadow-md"}`}
              >
                {/* Subtle top themed accent line */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${config.accentColor}`}
                />

                {/* Ambient glow background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-b ${config.glowBg} opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none`}
                />

                {/* Card Header (Always Visible) */}
                <div className="relative z-10">
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2.5">
                      <div
                        className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-105 ${config.iconBg}`}
                      >
                        <Icon size={18} />
                      </div>
                      <span className="text-lg font-black font-heading text-navy-950">
                        {board.name}
                      </span>
                    </div>

                    <span className="text-xs font-semibold text-slate-500 flex items-center gap-1 bg-slate-100 px-2 py-0.5 rounded-full shrink-0">
                      <Layers size={12} className="text-slate-400" /> Std 5–12
                    </span>
                  </div>

                  {/* Distinctive Key Pill */}
                  <div className="flex items-center justify-between mt-2">
                    <span
                      className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${config.badgeBg} ${config.badgeBorder} ${config.badgeText}`}
                    >
                      {config.keyPill}
                    </span>

                    {/* Interactive Dropdown Trigger Indicator */}
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-teal-700 group-hover:text-teal-900 transition-colors select-none">
                      <span className="sm:hidden">{isExpanded ? "Close" : "Details"}</span>
                      <span className="hidden sm:inline">
                        {isExpanded ? "Hide features" : "Hover to view"}
                      </span>
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-300 ${
                          isExpanded ? "rotate-180 text-teal-800" : "text-slate-400 group-hover:translate-y-0.5"
                        }`}
                      />
                    </span>
                  </div>
                </div>

                {/* Dropdown Content on Hover / Tap */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden relative z-10"
                    >
                      <div className="pt-4 mt-4 border-t border-slate-100">
                        <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wide mb-1">
                          {board.fullName}
                        </h3>
                        <p className="text-xs text-slate-600 mb-3 italic">
                          &ldquo;{board.tagline}&rdquo;
                        </p>

                        <ul className="space-y-2 text-xs text-slate-700 bg-slate-50/80 rounded-xl p-3 border border-slate-100">
                          {board.features.map((f, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <CheckCircle2
                                size={14}
                                className={`shrink-0 mt-0.5 ${config.iconColor}`}
                              />
                              <span className="leading-snug">{f}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
