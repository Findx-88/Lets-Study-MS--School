import type { Metadata } from "next";
import Link from "next/link";
import { Check, BookOpen, Layers, Sparkles, ArrowRight, ShieldCheck, TrendingUp, Compass, Award } from "lucide-react";
import { SUBJECTS, BOARDS, ACADEMIC_STREAMS, getWhatsAppUrl } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Academics — Science, Commerce & Humanities Across 4 Boards (Std 5–12)",
  description: "Comprehensive curriculum across Science & Mathematics, Commerce, and Humanities for CBSE, ICSE/ISC, WB Board & IB Board students. Micro-batch coaching in Khardaha, Kolkata.",
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

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://school.letsstudyms.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Academics",
        item: "https://school.letsstudyms.com/academics",
      },
    ],
  };

  return (
    <div className="pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Header */}
      <section className="bg-gradient-to-b from-teal-50/60 via-cream-50 to-white pt-24 pb-12 sm:pt-24 md:pt-36 md:pb-20 border-b border-slate-200/60 math-bg text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <div className="inline-flex items-center gap-2 bg-white/95 border border-teal-200/90 rounded-full px-4 py-1.5 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span className="text-xs font-bold text-navy-900 uppercase tracking-wider">
              3 Streams • 4 Major Boards (CBSE, ICSE, WB, IB)
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black font-heading text-navy-950">
            Academics for Standards 5 to 12
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Delivering dedicated faculty mentorship, structured conceptual foundations, and strict micro-batches (3–5 students) across Science, Commerce &amp; Humanities.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16 sm:space-y-20">
        {/* Section 0: Academic Streams Showcase */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-teal-800 bg-teal-50 px-3.5 py-1 rounded-full border border-teal-200 inline-block mb-2">
              Academic Expansion
            </span>
            <h2 className="text-2xl sm:text-4xl font-black font-heading text-navy-950">
              Three Comprehensive Learning Pathways
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-2 max-w-2xl mx-auto">
              Every stream deserves strong academic foundations, expert mentorship, and an environment where students realise their full potential.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ACADEMIC_STREAMS.map((stream) => (
              <div
                key={stream.id}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-teal-400 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group"
              >
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${stream.accentColor}`} />
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-2">
                    <span className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${stream.badgeBg}`}>
                      {stream.badge}
                    </span>
                    <span className="text-[11px] font-semibold text-slate-400">
                      CBSE • ICSE • WB • IB
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-black font-heading text-navy-950 group-hover:text-teal-900 transition-colors">
                      {stream.name}
                    </h3>
                    <p className="text-xs font-semibold text-teal-700 mt-0.5">
                      {stream.tagline}
                    </p>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {stream.description}
                  </p>

                  <div className="pt-2 border-t border-slate-100">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                      Key Subjects:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {stream.subjects.map((sub) => (
                        <span
                          key={sub}
                          className="text-[11px] font-medium bg-slate-50 text-slate-700 border border-slate-200/80 px-2.5 py-1 rounded-lg"
                        >
                          {sub}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-navy-950">
                    Strict Pods (3–5)
                  </span>
                  <a
                    href={getWhatsAppUrl(
                      `Hello! I want to enquire about batch admissions for the ${stream.name} stream (CBSE/ICSE/WB/IB).`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-teal-700 hover:text-teal-900 group-hover:underline"
                  >
                    <span>Enquire Batch</span>
                    <ArrowRight size={13} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 1: Detailed Subject Breakdown */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-black font-heading text-navy-950">
              Core Subject Breakdown
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Deep conceptual grounding, numerical practice, and board evaluation accuracy.
            </p>
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

        {/* Section 2: Board Syllabus Alignment (CBSE, ICSE, WB Board, IB) */}
        <div className="bg-cream-50/70 rounded-3xl p-8 sm:p-12 border border-slate-200">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-700 bg-amber-100 px-3 py-1 rounded-full border border-amber-200">
              Exam Pattern Precision
            </span>
            <h2 className="text-3xl font-black font-heading text-navy-950 mt-3">
              4-Board Syllabus Alignment
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Curriculum customized to the distinct assessment criteria of each national and international board.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {BOARDS.map((b) => (
              <div key={b.id} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between">
                <div>
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
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: Subject x Board Matrix Table */}
        <div>
          <div className="text-center max-w-xl mx-auto mb-8">
            <h3 className="text-2xl font-bold font-heading text-navy-950">
              Subject &amp; Standard Availability Table
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
                  <th className="p-4">Streams &amp; Subjects Offered</th>
                  <th className="p-4">Board Options</th>
                  <th className="p-4">Batch Format</th>
                  <th className="p-4">Session Duration</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-bold text-navy-950">Std 5 – 6</td>
                  <td className="p-4">Maths, General Science, English, Coding Foundation</td>
                  <td className="p-4">CBSE, ICSE, WB, IB (MYP)</td>
                  <td className="p-4 font-semibold text-teal-700">Pods of 3–4</td>
                  <td className="p-4">1.5 – 2 Hours</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-bold text-navy-950">Std 7 – 8</td>
                  <td className="p-4">Maths, Physics, Chem, Bio, English, Social Science</td>
                  <td className="p-4">CBSE, ICSE, WB, IB (MYP)</td>
                  <td className="p-4 font-semibold text-teal-700">Batches of 5</td>
                  <td className="p-4">1.5 – 2 Hours</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-bold text-navy-950">Std 9 – 10 (Board)</td>
                  <td className="p-4">Maths, Physics, Chem, Bio, English, Economics, Social Sciences</td>
                  <td className="p-4">CBSE, ICSE, WB (Madhyamik), IB</td>
                  <td className="p-4 font-semibold text-teal-700">Batches of 5</td>
                  <td className="p-4">1.5 – 2 Hours</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-bold text-navy-950">Std 11 – 12 (Science)</td>
                  <td className="p-4">Physics, Chemistry, Mathematics, Biology, Computer Science</td>
                  <td className="p-4">CBSE, ISC, WB (HS), IB (HL/SL)</td>
                  <td className="p-4 font-semibold text-teal-700">Batches of 5</td>
                  <td className="p-4">1.5 – 2 Hours</td>
                </tr>
                <tr className="hover:bg-slate-50 bg-emerald-50/30">
                  <td className="p-4 font-bold text-navy-950">Std 11 – 12 (Commerce)</td>
                  <td className="p-4 font-medium text-emerald-950">Accountancy, Business Studies, Economics, Applied Mathematics</td>
                  <td className="p-4">CBSE, ISC, WB (HS), IB</td>
                  <td className="p-4 font-semibold text-teal-700">Batches of 5</td>
                  <td className="p-4">1.5 – 2 Hours</td>
                </tr>
                <tr className="hover:bg-slate-50 bg-amber-50/30">
                  <td className="p-4 font-bold text-navy-950">Std 11 – 12 (Humanities)</td>
                  <td className="p-4 font-medium text-amber-950">English Literature, History, Political Science, Geography, Sociology</td>
                  <td className="p-4">CBSE, ISC, WB (HS), IB</td>
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
