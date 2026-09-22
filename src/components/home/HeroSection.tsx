"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, BookOpen, Clock, Users } from "lucide-react";
import { BRAND, CONTACT, getWhatsAppUrl } from "@/lib/constants";

export function HeroSection() {
  return (
    <section className="relative pt-16 pb-16 sm:pt-24 md:pt-28 md:pb-20 overflow-hidden gradient-hero math-bg">
      {/* Subtle floating math symbols */}
      <div className="absolute top-24 left-10 text-teal-800/10 font-serif text-8xl select-none pointer-events-none hidden lg:block animate-pulse">
        ∫
      </div>
      <div className="absolute bottom-10 left-1/3 text-amber-800/10 font-serif text-7xl select-none pointer-events-none hidden lg:block">
        π
      </div>
      <div className="absolute top-1/3 right-10 text-blue-900/10 font-serif text-8xl select-none pointer-events-none hidden lg:block">
        ∑
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Top Tag / Pill */}
            <div className="inline-flex items-center gap-2 bg-white/90 border border-teal-200/80 rounded-full px-4 py-1.5 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span className="text-xs font-bold text-navy-900 uppercase tracking-wider">
                CBSE • ICSE • WB Board
              </span>
              <span className="text-[10px] bg-amber-100 text-amber-800 font-semibold px-2 py-0.5 rounded-full">
                Session 2026–27
              </span>
            </div>

            {/* Headline with Boo style layout warmth + Academic Rigor */}
            <h1 className="text-3xl sm:text-6xl lg:text-[4.25rem] font-black font-heading text-navy-950 tracking-tight leading-[1.12] sm:leading-[1.08]">
              Where Curiosity Meets{" "}
              <span className="relative inline-block text-teal-600">
                Academic Rigor
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 300 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 9C70 3 170 3 298 9"
                    stroke="#F59E0B"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{" "}
              From Class 5 to 12
            </h1>

            {/* Sub-headline / Tagline */}
            <p className="text-base sm:text-lg text-slate-700 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              A specialized school division by <strong className="text-navy-900 font-semibold">Let&apos;s Study MS</strong>, West Bengal&apos;s premier institute for higher mathematics.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill btn-amber text-base px-7 py-3.5 shadow-xl w-full sm:w-auto justify-center group font-bold"
              >
                <span>Book a Free Demo Class</span>
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>

              <Link
                href="/journey"
                className="btn-pill bg-white hover:bg-slate-50 text-navy-900 border border-slate-300 text-base px-6 py-3.5 shadow-sm w-full sm:w-auto justify-center font-semibold transition-all duration-300 hover:shadow-lg hover:border-teal-400 hover:scale-105 hover:text-teal-700"
              >
                Explore Student Journey
              </Link>
            </div>

            {/* Affiliation Banner */}
            <div className="pt-6 border-t border-slate-200/60 flex justify-center lg:justify-start">
              <div className="inline-flex items-center gap-3 bg-white/95 px-5 py-3 rounded-2xl border border-teal-200/90 shadow-sm hover:shadow-md hover:border-teal-400 transition-all">
                <div className="w-9 h-9 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center shrink-0 border border-teal-100">
                  <ShieldCheck size={20} className="text-teal-700" />
                </div>
                <p className="text-xs sm:text-sm font-bold text-navy-950 tracking-tight">
                  Affiliated with Ramanujan School of Mathematics (RSM)
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Hero Visual with Overlapping Cards (Boo layout pattern) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Background decorative blob */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-teal-200/50 via-amber-200/30 to-sky-200/40 rounded-3xl filter blur-2xl -z-10" />

            {/* Main Photo Frame with rounded corners */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
              <div className="relative h-[380px] sm:h-[440px] w-full">
                <Image
                  src="/images/hero/students.jpg"
                  alt="Students studying attentively at Let's Study MS School Division"
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Subtle gradient overlay on bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/30 via-transparent to-transparent" />
              </div>
            </div>

            {/* Floating Card 1: Official Logo Badge (Top Left) */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="absolute -top-6 -left-6 bg-white/95 backdrop-blur-md p-3 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 hidden sm:flex"
            >
              <div className="relative w-11 h-11 shrink-0">
                <Image
                  src="/images/logo.png"
                  alt="Let's Study MS Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <p className="text-xs font-bold text-navy-950">Let&apos;s Study MS</p>
                <p className="text-[10px] text-teal-600 font-semibold uppercase">School Program</p>
              </div>
            </motion.div>

            {/* Floating Card 2: Fee Callout (Bottom Right) */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-6 right-2 sm:-right-6 bg-navy-900 text-white p-4 rounded-2xl shadow-2xl border border-navy-700 max-w-[210px]"
            >
              <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider block">
                Transparent Fees
              </span>
              <p className="text-xs text-slate-300 mt-1 font-medium">
                Starting From
              </p>
              <p className="text-xl font-black font-heading mt-0.5 text-white">
                ₹1,500 <span className="text-xs font-normal text-slate-300">/ month</span>
              </p>
            </motion.div>

            {/* Floating Math Symbols Tag (Top Right) */}
            <div className="absolute top-8 -right-4 bg-amber-400 text-navy-950 px-3 py-1 rounded-full text-xs font-bold shadow-md flex items-center gap-1.5 hidden md:flex">
              <span>Physics • Chem • Bio • Math • Eng</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
