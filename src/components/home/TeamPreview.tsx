"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { GraduationCap, ArrowRight, CheckCircle, ShieldCheck } from "lucide-react";
import { FACULTY_LEVELS } from "@/lib/constants";

export function TeamPreview() {
  return (
    <section className="section-padding bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
              4-Tier Teaching Hierarchy
            </span>
            <h2 className="text-3xl sm:text-4xl font-black font-heading text-navy-950 mt-3">
              Right Teacher for the Right Stage
            </h2>
          </div>
          <Link
            href="/team"
            className="btn-pill btn-outline text-xs !px-5 !py-2.5 shrink-0 self-start md:self-auto"
          >
            Meet Full Faculty
          </Link>
        </div>

        {/* Feature Grid: Left Column Photo + Right 4 Levels */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Teacher Classroom photo with overlay credentials */}
          <div className="lg:col-span-4 relative rounded-3xl overflow-hidden shadow-xl border-4 border-slate-100 flex flex-col justify-end min-h-[220px] sm:min-h-[350px]">
            <Image
              src="/images/team/teacher.jpg"
              alt="Faculty explaining physics at Let's Study MS"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/40 to-transparent" />
            <div className="relative z-10 p-6 text-white space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 bg-amber-400/20 px-2.5 py-1 rounded-full inline-block">
                Pedagogical Rigor
              </span>
              <h3 className="text-xl font-bold font-heading text-white">
                Guided by Academic Mentors
              </h3>
            </div>
          </div>

          {/* Right Column: 4-Level Interactive Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {FACULTY_LEVELS.map((lvl, index) => {
              const borderColors = [
                "hover:border-sky-400",
                "hover:border-amber-400",
                "hover:border-emerald-400",
                "hover:border-purple-400",
              ];
              const levelBadgeColors = [
                "bg-sky-100 text-sky-800",
                "bg-amber-100 text-amber-800",
                "bg-emerald-100 text-emerald-800",
                "bg-purple-100 text-purple-800",
              ];

              return (
                <motion.div
                  key={lvl.level}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.4 }}
                  className={`bg-cream-50/60 rounded-2xl p-5 border border-slate-200/80 ${borderColors[index]} hover:bg-white hover:shadow-lg transition-all duration-300 flex flex-col justify-between`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span
                        className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full ${levelBadgeColors[index]}`}
                      >
                        {lvl.level}
                      </span>
                      <span className="text-[11px] font-semibold text-slate-500">
                        {lvl.standardsCovered}
                      </span>
                    </div>

                    <h4 className="font-heading font-bold text-base text-navy-950 mb-1">
                      {lvl.title}
                    </h4>
                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-3">
                      {lvl.description}
                    </p>

                    {/* Named Teachers */}
                    <div className="pt-2 border-t border-slate-200/60">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                        Faculty Members:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {lvl.teachers.map((t) => (
                          <span
                            key={t.name}
                            className="text-xs font-bold text-navy-900 bg-white px-2 py-0.5 rounded border border-slate-200 shadow-2xs"
                          >
                            {t.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs">
                    <span className="text-[11px] text-slate-500 font-medium">
                      {lvl.batchSize}
                    </span>
                    <span className="text-[11px] font-bold text-teal-700">
                      &apos;fees&apos; in fee table →
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
