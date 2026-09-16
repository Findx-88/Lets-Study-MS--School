import type { Metadata } from "next";
import { GraduationCap, Award, Clock, Star, Quote } from "lucide-react";
import { FACULTY_LEVELS, getWhatsAppUrl } from "@/lib/constants";
import type { TeacherProfile } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Our Teaching Team — Meet Our Educators",
  description: "Meet our dedicated educators across 4 tiers: from near-peer mentors to expert competitive faculty. Real profiles, real passion.",
};

function TeacherCard({ teacher }: { teacher: TeacherProfile }) {
  const hasFullProfile = Boolean(teacher.degree || teacher.experience || teacher.teachingPhilosophy);

  // Get initials (first letter of first + last name)
  const nameParts = teacher.fullName.trim().split(/\s+/);
  const initials = nameParts.length >= 2
    ? `${nameParts[0][0]}${nameParts[nameParts.length - 1][0]}`
    : nameParts[0][0];

  if (!hasFullProfile) {
    // Minimal card for teachers without detailed profile yet
    return (
      <div className="rounded-2xl p-5 border border-slate-200/90 bg-white shadow-[0_4px_16px_-3px_rgba(15,23,42,0.06)] hover:shadow-[0_8px_22px_-4px_rgba(13,148,136,0.12)] hover:border-teal-500/50 hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-teal-800 text-white font-heading font-black text-sm flex items-center justify-center shrink-0 shadow-xs ring-2 ring-teal-700/20">
          {initials}
        </div>
        <div>
          <p className="text-base font-bold font-heading text-navy-950">{teacher.fullName}</p>
          <span className="inline-block mt-1 text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-teal-50 text-teal-800 border border-teal-200/70">
            {teacher.tag}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-slate-200/90 bg-white shadow-[0_4px_16px_-3px_rgba(15,23,42,0.07)] hover:shadow-[0_12px_26px_-4px_rgba(13,148,136,0.14)] hover:border-teal-500/50 hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col justify-between group">
      {/* Main Content Area */}
      <div className="p-4 sm:p-6 space-y-3.5 sm:space-y-4">
        {/* Top Header: Avatar + Full Name + Role Tag */}
        <div className="flex items-start gap-3.5">
          <div className="w-13 h-13 rounded-full bg-teal-800 text-white font-heading font-black text-base flex items-center justify-center shrink-0 shadow-sm ring-2 ring-teal-700/20 group-hover:scale-105 transition-transform">
            {initials}
          </div>
          <div className="min-w-0 flex-1">
            <h4 className="text-lg font-black font-heading text-navy-950 leading-snug">
              {teacher.fullName}
            </h4>
            <span className="inline-block mt-1 text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-teal-50 text-teal-800 border border-teal-200/80">
              {teacher.tag}
            </span>
          </div>
        </div>

        {/* Credentials Badges */}
        <div className="flex flex-wrap items-center gap-2 pt-1 border-t border-slate-100">
          {teacher.degree && (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-200/80 text-xs font-semibold text-slate-700">
              <GraduationCap size={14} className="text-teal-700 shrink-0" />
              <span>{teacher.degree}</span>
            </span>
          )}
          {teacher.experience && (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-200/80 text-xs font-semibold text-slate-700">
              <Clock size={13} className="text-teal-700 shrink-0" />
              <span>{teacher.experience} Exp</span>
            </span>
          )}
        </div>

        {/* Subjects & Boards Box */}
        {teacher.subjects && (
          <div className="bg-slate-50/70 p-3 rounded-xl border border-slate-100 space-y-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-teal-800 block">
              Subjects & Coverage
            </span>
            <p className="text-xs font-bold text-navy-950 leading-relaxed">
              {teacher.subjects}
            </p>
            {teacher.boards && (
              <p className="text-[11px] font-medium text-slate-600">
                Boards: <span className="text-slate-800 font-semibold">{teacher.boards}</span>
              </p>
            )}
          </div>
        )}

        {/* Achievements */}
        {(teacher.achievements || teacher.studentAchievements) && (
          <div className="space-y-1.5 text-xs">
            {teacher.achievements && (
              <div className="flex items-start gap-1.5 text-slate-700">
                <Award size={14} className="text-teal-700 shrink-0 mt-0.5" />
                <span className="font-semibold text-navy-900">{teacher.achievements}</span>
              </div>
            )}
            {teacher.studentAchievements && (
              <div className="flex items-start gap-1.5 text-slate-600">
                <Star size={14} className="text-amber-600 shrink-0 mt-0.5" />
                <span>
                  Students: <strong className="text-slate-800">{teacher.studentAchievements}</strong>
                </span>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Teaching Philosophy / Methodology Footer */}
      {teacher.teachingPhilosophy && (
        <div className="px-5 py-3.5 bg-teal-50/50 border-t border-teal-100/70 mt-auto">
          <div className="flex items-start gap-2">
            <Quote size={13} className="text-teal-700 shrink-0 mt-0.5 opacity-75 fill-teal-700/20" />
            <p className="text-xs text-slate-700 leading-relaxed italic line-clamp-3">
              &ldquo;{teacher.teachingPhilosophy}&rdquo;
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default function TeamPage() {
  return (
    <div className="pb-20">
      {/* Header */}
      <section className="bg-gradient-to-b from-teal-50/50 via-cream-50/30 to-white pt-28 pb-14 md:pt-36 md:pb-16 border-b border-slate-200/60 math-bg text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading text-navy-950">
            Our Teaching Team & Mentors
          </h1>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-12">
        {/* Tier Cards with Defined Depth & High Readability */}
        {FACULTY_LEVELS.map((lvl) => (
          <div
            key={lvl.level}
            className="rounded-3xl p-4 sm:p-8 md:p-10 border border-slate-200/80 bg-slate-50/50 shadow-sm relative overflow-hidden"
          >
            {/* Tier Top Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200/70">
              <div>
                <span className="inline-block text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full bg-teal-100/80 text-teal-900 border border-teal-200">
                  {lvl.level}
                </span>
                <h2 className="text-2xl sm:text-3xl font-black font-heading text-navy-950 mt-2">
                  {lvl.title}
                </h2>
                <p className="text-xs sm:text-sm text-teal-800 font-semibold mt-1">
                  Standards Guided: {lvl.standardsCovered} • Batch Cap: {lvl.batchSize}
                </p>
              </div>

              {/* Standard Fee Matrix Box */}
              <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs text-xs shrink-0 md:min-w-[240px]">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                  Standard Fee Matrix
                </span>
                {"onceAWeek" in lvl.feeStructure ? (
                  <div className="space-y-1">
                    <p className="font-bold text-navy-900">
                      1x/wk: <span className="text-teal-800">{lvl.feeStructure.onceAWeek}</span>
                    </p>
                    <p className="font-bold text-navy-900">
                      2x/wk: <span className="text-teal-800">{lvl.feeStructure.twiceAWeek}</span>
                    </p>
                  </div>
                ) : "class5to10" in lvl.feeStructure ? (
                  <div className="space-y-1.5">
                    <div className="font-bold text-navy-900 flex flex-wrap items-center gap-x-1.5 gap-y-0.5">
                      <span>Cl 5–10:</span>
                      <span className="text-teal-800">{lvl.feeStructure.class5to10.onceAWeek} (1x)</span>
                      <span className="hidden sm:inline text-slate-300">|</span>
                      <span className="text-teal-800">{lvl.feeStructure.class5to10.twiceAWeek} (2x)</span>
                    </div>
                    <div className="font-bold text-navy-900 flex flex-wrap items-center gap-x-1.5 gap-y-0.5">
                      <span>Cl 8–12:</span>
                      <span className="text-teal-800">{lvl.feeStructure.class8to12.onceAWeek} (1x)</span>
                      <span className="hidden sm:inline text-slate-300">|</span>
                      <span className="text-teal-800">{lvl.feeStructure.class8to12.twiceAWeek} (2x)</span>
                    </div>
                  </div>
                ) : (
                  <p className="text-base font-black font-heading text-teal-800">
                    {lvl.feeStructure.rate}
                  </p>
                )}
              </div>
            </div>

            {/* Faculty Members Roster — Popping White Cards on Tinted Container */}
            <div className="pt-6">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4">
                Active Faculty Members in {lvl.level}:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {lvl.teachers.map((t) => (
                  <TeacherCard
                    key={t.name}
                    teacher={t}
                  />
                ))}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="mt-8 pt-4 border-t border-slate-200/70 flex flex-col sm:flex-row items-center justify-between gap-3">
              <p className="text-xs text-slate-500">
                Classes run for 1.5 to 2 hours per session with doubt resolution included.
              </p>
              <a
                href={getWhatsAppUrl(
                  `Hello! I want to enquire about batch availability with ${lvl.level} teachers.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill btn-primary text-xs !px-5 !py-2.5 font-bold shadow-xs hover:shadow-md"
              >
                Enquire for {lvl.level} Batches
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
