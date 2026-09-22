"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, BookCheck } from "lucide-react";
import { STATS } from "@/lib/constants";

const STAT_ICONS = [
  { icon: GraduationCap, color: "text-amber-600 bg-amber-50" },
  { icon: Award, color: "text-emerald-600 bg-emerald-50" },
  { icon: BookCheck, color: "text-purple-600 bg-purple-50" },
];

export function StatsBar() {
  return (
    <section className="relative -mt-6 z-20 max-w-6xl mx-auto px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-3xl shadow-xl border border-slate-100 p-4 sm:p-8"
      >
        {/* ─── Mobile View: Perfectly aligned modern stat cards with zero dividers ─── */}
        <div className="flex flex-col gap-2.5 sm:hidden">
          {STATS.map((stat, index) => {
            const IconComponent = STAT_ICONS[index % STAT_ICONS.length].icon;
            const iconStyle = STAT_ICONS[index % STAT_ICONS.length].color;

            return (
              <div
                key={stat.label}
                className="flex items-center gap-3.5 bg-slate-50/80 rounded-2xl p-3 border border-slate-100/90"
              >
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${iconStyle}`}
                >
                  <IconComponent size={22} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xl font-black font-heading text-navy-950 leading-tight">
                    {stat.value}
                    <span className="text-amber-500 font-bold ml-1">{stat.suffix}</span>
                  </p>
                  <p className="text-xs font-semibold text-slate-500 mt-0.5">
                    {stat.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* ─── Desktop View: 100% Unchanged original 3-column horizontal with dividers ─── */}
        <div className="hidden sm:grid sm:grid-cols-3 sm:gap-8 sm:divide-x divide-slate-100">
          {STATS.map((stat, index) => {
            const IconComponent = STAT_ICONS[index % STAT_ICONS.length].icon;
            const iconStyle = STAT_ICONS[index % STAT_ICONS.length].color;

            return (
              <div
                key={stat.label}
                className={`flex items-center justify-center gap-4 ${
                  index > 0 ? "sm:pl-8" : ""
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${iconStyle}`}
                >
                  <IconComponent size={24} />
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-black font-heading text-navy-950">
                    {stat.value}
                    <span className="text-amber-500 font-bold">{stat.suffix}</span>
                  </p>
                  <p className="text-xs sm:text-sm font-medium text-slate-500 mt-0.5">
                    {stat.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
