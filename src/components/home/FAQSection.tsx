"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQ_ITEMS = [
  {
    question: "What boards does Let's Study MS cover?",
    answer:
      "We cover three major boards: CBSE (Central Board of Secondary Education), ICSE/ISC (Council for the Indian School Certificate Examinations), and WB Board (West Bengal Board of Secondary & Higher Secondary Education including Madhyamik and Uccha Madhyamik). Our curriculum tracks are tailored to each board's specific syllabus, evaluation patterns, and exam schedules.",
  },
  {
    question: "What is the maximum batch size at Let's Study MS?",
    answer:
      "We maintain strict micro-batches: pods of 3–4 students for Standards 5–6, and a maximum of 5 students per batch for Standards 7–12. This is a non-negotiable rule that ensures every student receives personal attention and has their doubts addressed individually.",
  },
  {
    question: "What subjects are taught at Let's Study MS School Program?",
    answer:
      "We teach five core subjects: Mathematics (from algebra to calculus), Physics (mechanics to modern physics), Chemistry (physical, organic, inorganic), Biology (cell biology, physiology, genetics, ecology), and English (language, literature, grammar). All subjects are available for Standards 5 through 12.",
  },
  {
    question: "What are the fees at Let's Study MS?",
    answer:
      "Fees start from ₹1,500/month for once-a-week classes with Level 1 & 2 teachers (Class 5–10), ₹3,000/month for twice-a-week. Level 3 Senior Mentors charge ₹2,200–₹4,000/month. Level 4 Expert Teachers (Class 11–12) are ₹700/hour. There are no hidden registration fees or lock-in contracts.",
  },
  {
    question: "Where is Let's Study MS located?",
    answer:
      "Our center is located at 118/105, Rabindrapally, Khardaha, Kolkata, North 24 Parganas, West Bengal 700117, India. We serve students from Khardaha, Barrackpore, Sodepur, Belgharia, Madhyamgram, Barasat, Rahara, Dum Dum, and greater Kolkata. We also offer online classes for international students.",
  },
  {
    question: "What makes Let's Study MS different from other coaching centres?",
    answer:
      "Three things set us apart: (1) Strict micro-batches of 3–5 students (not mass coaching), (2) A unique 4-tier faculty hierarchy from near-peer college mentors to IISER/IIT-level expert teachers, and (3) Direct continuity to Let's Study MS — School of Mathematics for ISI, IIT JAM, and higher mathematics preparation. We are affiliated with Ramanujan School of Mathematics (RSM).",
  },
];

function FAQItem({
  item,
  isOpen,
  onToggle,
}: {
  item: (typeof FAQ_ITEMS)[0];
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white hover:border-teal-300/60 transition-colors shadow-[0_2px_8px_-2px_rgba(0,0,0,0.04)]">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 sm:px-6 sm:py-5 text-left group"
        aria-expanded={isOpen}
      >
        <h3 className="text-sm sm:text-base font-bold text-navy-950 leading-snug group-hover:text-teal-700 transition-colors">
          {item.question}
        </h3>
        <ChevronDown
          size={18}
          className={`shrink-0 text-slate-400 group-hover:text-teal-600 transition-all duration-300 ${
            isOpen ? "rotate-180 text-teal-600" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed -mt-1">
          {item.answer}
        </p>
      </div>
    </div>
  );
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-padding bg-gradient-to-b from-white via-slate-50/50 to-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <span className="text-[11px] font-bold text-teal-700 uppercase tracking-widest mb-2 block">
            Common Questions
          </span>
          <h2 className="text-2xl sm:text-3xl font-black font-heading text-navy-950">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {FAQ_ITEMS.map((item, index) => (
            <FAQItem
              key={index}
              item={item}
              isOpen={openIndex === index}
              onToggle={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
