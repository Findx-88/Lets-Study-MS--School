"use client";

import { motion } from "framer-motion";
import { Star, Quote, MapPin } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";

export function TestimonialsSection() {
  return (
    <section id="results" className="section-padding bg-white relative overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
            Real Academic Results
          </span>
          <h2 className="text-3xl sm:text-4xl font-black font-heading text-navy-950 mt-3">
            What Parents & Students Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              className="bg-cream-50/50 rounded-3xl p-6 border border-slate-200/80 shadow-sm hover:shadow-xl hover:bg-white hover:border-teal-300 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Rating stars & Board badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className="fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold text-teal-800 bg-teal-100/70 px-2 py-0.5 rounded-md">
                    {item.board} • {item.standard}
                  </span>
                </div>

                <Quote size={24} className="text-teal-400/40 mb-2" />

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/60">
                <p className="text-sm font-bold text-navy-950">
                  {item.parentName}
                </p>
                <div className="flex items-center justify-between text-[11px] text-slate-500 mt-0.5">
                  <span>Parent of {item.studentName}</span>
                  <span className="flex items-center gap-0.5 text-slate-400">
                    <MapPin size={11} /> {item.location}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
