import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink, GraduationCap, ShieldCheck, Sparkles, Target, Users } from "lucide-react";
import { BRAND, CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us — Our Story & Academic Philosophy",
  description: "Learn about Let's Study MS School Program — the school division of West Bengal's leading higher-mathematics institute. Affiliated with Ramanujan School of Mathematics (RSM).",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <div className="pb-20">
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-teal-50/70 via-cream-50 to-white pt-16 pb-12 sm:pt-24 md:pt-36 md:pb-20 border-b border-slate-200/60 math-bg">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-5xl font-black font-heading text-navy-950 leading-tight">
            Building the Foundation for Lifelong Analytical Excellence
          </h1>
        </div>
      </section>

      {/* Main Narrative & Continuum */}
      <section className="section-padding max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center mb-16">
          <div className="md:col-span-7 space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
            <h2 className="text-2xl sm:text-3xl font-black font-heading text-navy-950">
              The Genesis: Why a School Division?
            </h2>
            <p>
              When <strong className="text-navy-950 font-semibold">Let&apos;s Study MS</strong> was founded in 2022, its mission was to mentor undergraduate and postgraduate students in West Bengal for India&apos;s most competitive mathematical entrances like <strong className="text-teal-700">IIT JAM, ISI M.Math, TIFR, and NBHM</strong>.
            </p>
            <p>
              Within two years, our students produced stellar results including <strong className="text-navy-900 font-semibold">All India Rank 37</strong> and admissions into prestigious research institutions. But something unexpected happened.
            </p>
            <p className="italic bg-cream-50 p-4 rounded-xl text-navy-900 font-medium">
              &ldquo;Parents of our college rank-holders came to us and said: &apos;My younger child in Class 7 is memorizing math formulas and terrified of physics numericals. Can you teach them now, before fear sets in?&apos;&rdquo;
            </p>
            <p>
              That conversation sparked the creation of <strong className="text-navy-950 font-semibold">Let&apos;s Study MS — School Program</strong>. We realized that mathematical confidence cannot be miraculously manufactured in college but it must be nurtured carefully from Class 5 through Class 12.
            </p>
          </div>

          <div className="md:col-span-5 relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
              <div className="relative h-[360px] w-full">
                <Image
                  src="/images/gallery/online_meet_class.jpg"
                  alt="Students in live interactive online study pod on Google Meet"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            {/* Overlay card */}
            <div className="absolute bottom-3 left-3 sm:-bottom-6 sm:-left-6 bg-navy-900 text-white p-4 rounded-2xl shadow-xl max-w-[220px] border border-navy-700">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
                The Core Principle
              </span>
              <p className="text-xs text-slate-200 mt-1">
                Start in Class 5. Graduate all the way to IITs & ISI.
              </p>
            </div>
          </div>
        </div>

        {/* 3 Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-16">
          <div className="bg-cream-50 p-6 rounded-3xl border border-slate-200">
            <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center mb-4">
              <Users size={20} />
            </div>
            <h3 className="font-heading font-bold text-lg text-navy-950 mb-2">
              Micro-Pods (3–5 Students)
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We never crowd batches. Class 5–6 students learn in intimate live online pods of 3–4, while Class 7+ are strictly capped at 5 students. Every child speaks, asks, and solves in live Google Meet classes.
            </p>
          </div>

          <div className="bg-cream-50 p-6 rounded-3xl border border-slate-200">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center mb-4">
              <GraduationCap size={20} />
            </div>
            <h3 className="font-heading font-bold text-lg text-navy-950 mb-2">
              Multi-Level Faculty Hierarchy
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              4 distinct teacher tiers: from relatable near-peer college student teachers who eliminate intimidation, to B.Ed certified mentors and expert competitive faculties.
            </p>
          </div>

          <div className="bg-cream-50 p-6 rounded-3xl border border-slate-200">
            <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center mb-4">
              <Target size={20} />
            </div>
            <h3 className="font-heading font-bold text-lg text-navy-950 mb-2">
              Board + Future Entrance Bridge
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Syllabus alignment with CBSE, ICSE, and WB Board, built with the analytical foundation needed for competitive Olympiads, JEE/NEET, and higher mathematics.
            </p>
          </div>
        </div>

        {/* Parent Brand Connection Box */}
        <div className="bg-gradient-to-r from-navy-950 to-teal-950 text-white rounded-3xl p-8 sm:p-10 shadow-2xl border border-teal-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
              Continuation of Excellence
            </span>
            <h3 className="text-2xl sm:text-3xl font-black font-heading text-white tracking-tight">
              Explore Our Higher Mathematics Institute
            </h3>
            <p className="text-xs sm:text-sm text-slate-200 max-w-xl">
              Learn more about our BSc Honours coaching, MSc Entrance preparation (IIT JAM, TIFR, ISI, NBHM), and research mentorship.
            </p>
          </div>
          <Link
            href={BRAND.parentUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pill bg-amber-400 hover:bg-amber-300 text-navy-950 font-bold text-xs !px-6 !py-3 shrink-0 flex items-center gap-1.5 shadow-lg"
          >
            <span>Visit Let&apos;s Study MS</span>
            <ExternalLink size={14} />
          </Link>
        </div>
      </section>
    </div>
  );
}
