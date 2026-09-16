"use client";

import { motion } from "framer-motion";
import { Users, GraduationCap, Award, Clock, BookOpen, CheckCircle2 } from "lucide-react";
import { WHY_US } from "@/lib/constants";

const ICON_MAP = {
  users: Users,
  "graduation-cap": GraduationCap,
  award: Award,
  clock: Clock,
  "book-open": BookOpen,
  "check-circle-2": CheckCircle2,
};

export function WhyUsSection() {
  return (
    <section className="section-padding bg-cream-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-700 bg-amber-100 px-3 py-1 rounded-full border border-amber-200">
            Why Parents Choose Let&apos;s Study MS
          </span>
          <h2 className="text-3xl sm:text-4xl font-black font-heading text-navy-950 mt-3">
            Not a Mass Factory — A Focused Academic Pod
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            We intentionally cap our student count per batch so that every formula is derived, every question is attempted, and every child receives direct faculty guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WHY_US.map((item, idx) => {
            const IconComponent = ICON_MAP[item.icon as keyof typeof ICON_MAP] || Users;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.5 }}
                className="bg-white rounded-3xl p-7 border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-teal-300 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-700 flex items-center justify-center mb-5 shadow-xs">
                  <IconComponent size={24} />
                </div>
                <h3 className="text-lg font-bold font-heading text-navy-950 mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
