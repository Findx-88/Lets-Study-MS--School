import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, Users, Clock, BookOpen, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Classroom Gallery — Inside Let's Study MS School Pods",
  description: "View photographs of our small batch classrooms, study tables, and interactive teaching environment in Khardaha, Kolkata.",
};

const GALLERY_ITEMS = [
  {
    image: "/images/gallery/classroom.jpg",
    title: "Collaborative Study Table",
    caption: "Students actively discussing chemistry reactions and problem sets around a round table.",
    tag: "Micro-Batch Pod",
    colSpan: "md:col-span-8",
  },
  {
    image: "/images/hero/students.jpg",
    title: "Guided Problem Solving",
    caption: "Students working through mathematics exercises with direct teacher assistance.",
    tag: "1-on-1 Attention",
    colSpan: "md:col-span-4",
  },
  {
    image: "/images/team/teacher.jpg",
    title: "Whiteboard Derivation",
    caption: "Faculty breaking down complex circuit theorems and electrical formulas step-by-step.",
    tag: "Physics Session",
    colSpan: "md:col-span-6",
  },
  {
    image: "/images/gallery/classroom.jpg",
    title: "Focused Group Mentorship",
    caption: "Small group format ensures no student is left behind during problem-solving sessions.",
    tag: "Classroom Focus",
    colSpan: "md:col-span-6",
  },
];

export default function GalleryPage() {
  return (
    <div className="pt-28 pb-20">
      {/* Header */}
      <section className="bg-gradient-to-b from-teal-50/70 via-cream-50 to-white py-16 border-b border-slate-200/60 math-bg text-center">
        <div className="max-w-4xl mx-auto px-4">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-700 bg-amber-100 px-3.5 py-1 rounded-full border border-amber-200">
            Learning Atmosphere
          </span>
          <h1 className="text-4xl sm:text-5xl font-black font-heading text-navy-950 mt-4">
            Classroom & Study Gallery
          </h1>
          <p className="text-base sm:text-lg text-slate-600 mt-3 max-w-2xl mx-auto">
            Take a visual tour of our physical classrooms designed specifically for micro-batch interaction, focused whiteboard learning, and zero distractions.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {GALLERY_ITEMS.map((item, index) => (
            <div
              key={index}
              className={`${item.colSpan} relative rounded-3xl overflow-hidden shadow-md border-4 border-white group bg-slate-100 min-h-[320px]`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-300 bg-amber-400/20 px-2.5 py-0.5 rounded-full inline-block mb-2">
                  {item.tag}
                </span>
                <h3 className="text-xl font-bold font-heading text-white">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-200 mt-1 max-w-lg leading-relaxed">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Visit in Person Banner */}
        <div className="mt-16 bg-cream-50 rounded-3xl p-8 sm:p-12 border border-slate-200 text-center max-w-3xl mx-auto space-y-4">
          <h3 className="text-2xl font-bold font-heading text-navy-950">
            Want to Visit Our Center in Person?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
            Parents and students are always welcome to tour our classrooms, meet our teaching team, and review our study material firsthand.
          </p>
          <div className="pt-2 flex justify-center gap-4">
            <Link
              href="/contact"
              className="btn-pill btn-primary text-xs !px-6 !py-3 font-bold flex items-center gap-1.5"
            >
              <span>Schedule a Center Visit</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
