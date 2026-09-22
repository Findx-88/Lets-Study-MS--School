"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Video, Sparkles } from "lucide-react";

export function GalleryPreview() {
  return (
    <section className="section-padding bg-cream-50/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-teal-800 bg-teal-100/80 px-3 py-1 rounded-full border border-teal-200 inline-flex items-center gap-1.5">
              <Video size={13} className="text-teal-700" />
              <span>100% Live Interactive Classes</span>
            </span>
            <h2 className="text-3xl sm:text-4xl font-black font-heading text-navy-950 mt-3">
              Inside Our Live Online Classrooms
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              Interactive Google Meet sessions with real-time digital whiteboards, stylus derivations, and tight 3–5 student micro-pods.
            </p>
          </div>
          <Link
            href="/gallery"
            className="btn-pill btn-outline text-xs !px-5 !py-2.5 shrink-0 self-start md:self-auto flex items-center gap-1.5"
          >
            <span>View Live Class Gallery</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {/* Large image 1: Google Meet Class */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-7 relative rounded-3xl overflow-hidden shadow-lg border-4 border-white min-h-[320px] sm:min-h-[400px] group"
          >
            <Image
              src="/images/gallery/online_meet_class.jpg"
              alt="Live Google Meet online class session in micro-batch"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 60vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-transparent to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-300 bg-amber-400/20 px-2.5 py-0.5 rounded-full inline-block mb-1">
                Google Meet Micro-Pods
              </span>
              <h3 className="text-lg sm:text-xl font-bold font-heading">
                Max 3–5 Students per Session — Active Real-Time Dialogue
              </h3>
              <p className="text-xs text-slate-200 mt-1">
                Dedicated Mathematics, Physics, Chemistry, Biology & English concept formulation on interactive digital whiteboards.
              </p>
            </div>
          </motion.div>

          {/* Right Column: 2 stacked cards */}
          <div className="md:col-span-5 grid grid-cols-1 gap-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="relative rounded-3xl overflow-hidden shadow-lg border-4 border-white min-h-[190px] group"
            >
              <Image
                src="/images/gallery/student_online_class.jpg"
                alt="Student attentively learning from home during live class"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] font-bold text-teal-300">Comfort & Focus</span>
                <p className="text-sm font-bold font-heading">
                  Zero Commute Fatigue • Learn from Home
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="relative rounded-3xl overflow-hidden shadow-lg border-4 border-white min-h-[190px] group"
            >
              <Image
                src="/images/gallery/digital_tablet_mentor.jpg"
                alt="Teacher deriving step-by-step formulas on digital tablet"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] font-bold text-amber-300">Digital Precision</span>
                <p className="text-sm font-bold font-heading">
                  Real-Time Stylus Derivations & Step Practice
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
