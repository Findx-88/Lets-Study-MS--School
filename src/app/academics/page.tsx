import type { Metadata } from "next";
import Link from "next/link";
import { Check, BookOpen, Layers, Sparkles, ArrowRight, ShieldCheck } from "lucide-react";
import { SUBJECTS, BOARDS, getWhatsAppUrl } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Academics — Subjects & Board Curriculums (Std 5–12)",
  description: "Comprehensive curriculum alignment across CBSE, ICSE and WB Board for Mathematics, Physics, Chemistry, Biology, and English. Small batch coaching in Khardaha, Kolkata.",
  alternates: {
    canonical: "/academics",
  },
};

export default function AcademicsPage() {
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: SUBJECTS.map((subject, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Course",
        name: `${subject.name} Coaching (Std 5–12)`,
        description: subject.description,
        provider: {
          "@type": "EducationalOrganization",
          name: "Let's Study MS — School Program",
          url: "https://school.letsstudyms.com",
        },
        educationalLevel: "Secondary and Higher Secondary (Std 5–12)",
        inLanguage: "en",
        courseCode: subject.id.toUpperCase(),
        hasCourseInstance: subject.boards.map((board) => ({
          "@type": "CourseInstance",
          name: `${subject.name} — ${board}`,
          courseMode: "Blended",
          courseWorkload: "PT1H30M to PT2H per session",
          instructor: {
            "@type": "Organization",
            name: "Let's Study MS — School Program",
          },
        })),
      },
    })),
  };

  return (
    <div className="pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      {/* Header */}
      <section className="bg-gradient-to-b from-teal-50/60 via-cream-50 to-white pt-16 pb-12 sm:pt-24 md:pt-36 md:pb-20 border-b border-slate-200/60 math-bg text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl sm:text-5xl font-black font-heading text-navy-950">
            Academics for Standards 5 to 12
          </h1>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16 sm:space-y-20">
        {/* Section 1: Five Core Subjects Detailed Breakdown */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-black font-heading text-navy-950">
              5 Core Disciplines
            </h2>
          </div>

          <div className="space-y-6 sm:space-y-8">
            {SUBJECTS.map((subject) => (
              <div
                key={subject.id}
                id={subject.id}
                className="bg-white rounded-3xl p-5 sm:p-8 border border-slate-200/80 shadow-md hover:border-teal-400 transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100">
                  <div className="flex items-center gap-3.5 sm:gap-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-cream-50 border border-slate-200 flex items-center justify-center text-2xl sm:text-3xl font-serif text-navy-900 shrink-0">
                      {subject.symbol}
                    </div>
                    <div>
                      <h3 className="text-2xl font-black font-heading text-navy-950">
                        {subject.name}
                      </h3>
                      <p className="text-xs text-teal-700 font-semibold mt-0.5">
                        Applicable for {subject.standards}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs text-slate-500 font-medium">Boards Taught:</span>
                    {subject.boards.map((b) => (
                      <span
                        key={b}
                        className="text-xs font-bold text-navy-900 bg-slate-100 px-3 py-1 rounded-lg border border-slate-200"
                      >
                        {b}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-6 items-center">
                  <div className="md:col-span-6 space-y-3">
                    <p className="text-sm text-slate-700 leading-relaxed">
                      {subject.description}
                    </p>
                    <div className="pt-2">
                      <a
                        href={getWhatsAppUrl(
                          `Hello, I would like to know the syllabus and schedule for ${subject.name} classes.`
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-bold text-teal-700 hover:text-teal-900 inline-flex items-center gap-1"
                      >
                        <span>Enquire for {subject.name} Batch</span>
                        <ArrowRight size={13} />
                      </a>
                    </div>
                  </div>

                  <div className="md:col-span-6 bg-cream-50/70 p-5 rounded-2xl border border-slate-200/60">
                    <p className="text-xs font-bold text-navy-950 uppercase tracking-wider mb-2.5">
                      Curriculum Highlights:
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                      {subject.highlights.map((hl, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <Check size={14} className="text-emerald-600 shrink-0" />
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Board Syllabus Alignment (CBSE, ICSE, WB Board) */}
        <div className="bg-cream-50/70 rounded-3xl p-8 sm:p-12 border border-slate-200">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-700 bg-amber-100 px-3 py-1 rounded-full border border-amber-200">
              Exam Pattern Precision
            </span>
            <h2 className="text-3xl font-black font-heading text-navy-950 mt-3">
              Tri-Board Syllabus Alignment
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BOARDS.map((b) => (
              <div key={b.id} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                <span className="text-xl font-black font-heading text-navy-950 block mb-1">
                  {b.name}
                </span>
                <p className="text-xs text-teal-700 font-semibold mb-3">
                  {b.fullName}
                </p>
                <p className="text-xs text-slate-600 italic mb-4">
                  &ldquo;{b.tagline}&rdquo;
                </p>
                <ul className="space-y-2 text-xs text-slate-700 border-t border-slate-100 pt-4">
                  {b.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-1.5 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: Subject x Board Matrix Table */}
        <div>
          <div className="text-center max-w-xl mx-auto mb-8">
            <h3 className="text-2xl font-bold font-heading text-navy-950">
              Subject & Standard Availability Table
            </h3>
          </div>

          <p className="md:hidden text-[11px] font-semibold text-teal-700 mb-2.5 text-center">
            ← Swipe table horizontally to view full matrix →
          </p>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm bg-white">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-navy-950 text-white font-heading uppercase text-[11px] tracking-wider">
                <tr>
                  <th className="p-4">Standard</th>
                  <th className="p-4">Subjects Offered</th>
                  <th className="p-4">Board Streams</th>
                  <th className="p-4">Batch Format</th>
                  <th className="p-4">Session Duration</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-bold text-navy-950">Std 5 – 6</td>
                  <td className="p-4">Maths, General Science, English</td>
                  <td className="p-4">CBSE, ICSE, WB</td>
                  <td className="p-4 font-semibold text-teal-700">Pods of 3–4</td>
                  <td className="p-4">1.5 – 2 Hours</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-bold text-navy-950">Std 7 – 8</td>
                  <td className="p-4">Maths, Physics, Chem, Bio, English</td>
                  <td className="p-4">CBSE, ICSE, WB</td>
                  <td className="p-4 font-semibold text-teal-700">Batches of 5</td>
                  <td className="p-4">1.5 – 2 Hours</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-bold text-navy-950">Std 9 – 10 (Board)</td>
                  <td className="p-4">Maths, Physics, Chem, Bio, English</td>
                  <td className="p-4">CBSE, ICSE, WB (Madhyamik)</td>
                  <td className="p-4 font-semibold text-teal-700">Batches of 5</td>
                  <td className="p-4">1.5 – 2 Hours</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-bold text-navy-950">Std 11 – 12 (Specialization)</td>
                  <td className="p-4">Physics, Chemistry, Mathematics, Biology</td>
                  <td className="p-4">CBSE, ISC, WB (HS)</td>
                  <td className="p-4 font-semibold text-teal-700">Batches of 5</td>
                  <td className="p-4">1.5 – 2 Hours</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
