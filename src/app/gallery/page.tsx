import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, Video, Monitor, Laptop, ArrowRight, MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Live Online Class Gallery — Google Meet Learning Pods | Let's Study MS",
  description: "View our live, interactive Google Meet classes, digital whiteboard derivations, and focused 3–5 student online learning pods across Kolkata and India.",
  alternates: {
    canonical: "/gallery",
  },
};

const GALLERY_ITEMS = [
  {
    image: "/images/gallery/online_meet_class.jpg",
    title: "Live Google Meet Interactive Pods",
    caption: "Micro-batches of 3–5 students collaborating actively with real-time digital whiteboard theorem proofs and formula breakdowns.",
    tag: "Google Meet Pods",
    colSpan: "md:col-span-8",
  },
  {
    image: "/images/gallery/digital_tablet_mentor.jpg",
    title: "Precision Digital Tablet Derivations",
    caption: "Mentors derive chemistry mechanisms and calculus proofs live using high-precision digital drawing tablets with instant screen share.",
    tag: "Live Tablet Derivations",
    colSpan: "md:col-span-4",
  },
  {
    image: "/images/gallery/student_online_class.jpg",
    title: "Attentive Home Study Environment",
    caption: "Students actively participate, take structured notes, and ask doubts without hesitation from the comfort of their home study desk.",
    tag: "Zero Commute Stress",
    colSpan: "md:col-span-6",
  },
  {
    image: "/images/gallery/interactive_doubt_solving.jpg",
    title: "Real-Time 1-on-1 Doubt Solving",
    caption: "Interactive coordinate graphs and equation balancing where student and mentor pinpoint doubts step-by-step in real time.",
    tag: "Live Doubt Resolution",
    colSpan: "md:col-span-6",
  },
];

export default function GalleryPage() {
  return (
    <div className="pt-28 pb-20">
      {/* Header */}
      <section className="bg-gradient-to-b from-teal-50/70 via-cream-50 to-white py-16 border-b border-slate-200/60 math-bg text-center">
        <div className="max-w-4xl mx-auto px-4">
          <span className="text-xs font-bold uppercase tracking-widest text-teal-800 bg-teal-100/80 px-3.5 py-1 rounded-full border border-teal-200 inline-flex items-center gap-1.5">
            <Video size={13} className="text-teal-700" />
            <span>100% Live Interactive Online Learning</span>
          </span>
          <h1 className="text-4xl sm:text-5xl font-black font-heading text-navy-950 mt-4">
            Live Class & Digital Learning Gallery
          </h1>
          <p className="text-base sm:text-lg text-slate-600 mt-3 max-w-2xl mx-auto">
            Experience how our students learn: live Google Meet sessions, interactive digital whiteboards, real-time formula derivations, and tight 3–5 student micro-pods.
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
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/25 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

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

        {/* Live Demo Class CTA Banner */}
        <div className="mt-16 bg-cream-50 rounded-3xl p-8 sm:p-12 border border-slate-200 text-center max-w-3xl mx-auto space-y-4 shadow-sm">
          <div className="w-12 h-12 rounded-2xl bg-teal-100 text-teal-800 flex items-center justify-center mx-auto mb-2">
            <Monitor size={24} />
          </div>
          <h3 className="text-2xl sm:text-3xl font-black font-heading text-navy-950">
            Experience a Live Google Meet Class Firsthand
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
            Parents and students are welcome to attend a free live diagnostic class to experience our interactive digital whiteboard, small-batch focus, and engaging mentor interaction.
          </p>
          <div className="pt-3 flex flex-col sm:flex-row justify-center items-center gap-3">
            <a
              href={getWhatsAppUrl("Hello! I would like to schedule a free live demo class on Google Meet for my child at Let's Study MS.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pill btn-whatsapp text-xs !px-6 !py-3 font-bold flex items-center gap-1.5 shadow-md w-full sm:w-auto justify-center"
            >
              <MessageCircle size={16} />
              <span>Schedule Free Demo Class</span>
            </a>
            <Link
              href="/academics"
              className="btn-pill bg-white hover:bg-slate-100 text-navy-950 border border-slate-300 text-xs !px-6 !py-3 font-bold flex items-center gap-1.5 shadow-xs w-full sm:w-auto justify-center"
            >
              <span>Explore Programs & Fees</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
