"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import {
  Quote,
  ChevronLeft,
  ChevronRight,
  School,
  Award,
  MapPin,
  GraduationCap,
} from "lucide-react";
import { TESTIMONIALS, type TestimonialItem } from "@/lib/constants";

export function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({});
  const isInteracting = useRef(false);
  const pauseTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Render 2 duplicate sets to create an infinite continuous loop
  const doubleList = [...TESTIMONIALS, ...TESTIMONIALS];

  // Pause auto-drift when user interacts manually
  const pauseAutoScrollTemporarily = () => {
    isInteracting.current = true;
    if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current);
    pauseTimerRef.current = setTimeout(() => {
      isInteracting.current = false;
    }, 2800);
  };

  // Continuous slow rotation loop
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let animId: number;

    const tick = () => {
      if (!isPaused && !isInteracting.current && container) {
        const halfWidth = container.scrollWidth / 2;
        container.scrollLeft += 0.65; // Slow, readable drift speed

        // Seamless wrap-around when the first set has scrolled past
        if (container.scrollLeft >= halfWidth) {
          container.scrollLeft -= halfWidth;
        }
      }
      animId = requestAnimationFrame(tick);
    };

    animId = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(animId);
      if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current);
    };
  }, [isPaused]);

  // Manual scroll controls with smooth bi-directional circular rotation
  const handleScrollLeft = () => {
    const container = scrollRef.current;
    if (!container) return;
    pauseAutoScrollTemporarily();
    const halfWidth = container.scrollWidth / 2;
    // Seamlessly jump ahead by halfWidth first so smooth scrolling left never hits a wall
    if (container.scrollLeft < 380) {
      container.scrollLeft += halfWidth;
    }
    container.scrollBy({ left: -380, behavior: "smooth" });
  };

  const handleScrollRight = () => {
    const container = scrollRef.current;
    if (!container) return;
    pauseAutoScrollTemporarily();
    const halfWidth = container.scrollWidth / 2;
    // Seamlessly jump back by halfWidth before pushing right if past threshold
    if (container.scrollLeft >= halfWidth) {
      container.scrollLeft -= halfWidth;
    }
    container.scrollBy({ left: 380, behavior: "smooth" });
  };

  const toggleExpand = (cardKey: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setExpandedCards((prev) => ({ ...prev, [cardKey]: !prev[cardKey] }));
  };

  return (
    <section
      id="results"
      className="section-padding bg-gradient-to-b from-white via-cream-50/40 to-white relative overflow-hidden scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-black font-heading text-navy-950">
              Real Academic Results, Real Voices
            </h2>
          </div>

          {/* Carousel Manual Controls */}
          <div className="flex items-center gap-3 shrink-0 self-start md:self-auto relative z-10">
            <button
              type="button"
              onClick={handleScrollLeft}
              aria-label="Scroll left"
              className="w-10 h-10 rounded-full border border-slate-300 bg-white hover:bg-teal-50 hover:border-teal-400 text-slate-700 hover:text-teal-900 transition-all shadow-sm flex items-center justify-center cursor-pointer active:scale-95"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={handleScrollRight}
              aria-label="Scroll right"
              className="w-10 h-10 rounded-full border border-slate-300 bg-white hover:bg-teal-50 hover:border-teal-400 text-slate-700 hover:text-teal-900 transition-all shadow-sm flex items-center justify-center cursor-pointer active:scale-95"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Continuous Marquee Scrolling Track */}
        <div
          ref={scrollRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => {
            isInteracting.current = true;
            setIsPaused(true);
          }}
          onTouchEnd={() => {
            isInteracting.current = false;
            setIsPaused(false);
          }}
          className="flex gap-6 overflow-x-auto py-3 px-1 scrollbar-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden select-none cursor-grab active:cursor-grabbing"
        >
          {doubleList.map((item, index) => {
            const cardKey = `${item.id}-${index}`;
            const isExpanded = !!expandedCards[cardKey];
            const isLong = item.quote.length > 130 || !!item.secondaryQuote;

            return (
              <div
                key={cardKey}
                onClick={() => setIsPaused((prev) => !prev)}
                className="w-[310px] sm:w-[350px] md:w-[370px] shrink-0 bg-white rounded-2xl p-5 border border-slate-200/90 shadow-[0_2px_12px_-2px_rgba(15,23,42,0.06)] hover:shadow-[0_12px_28px_-6px_rgba(13,148,136,0.18)] hover:border-teal-400 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar: Board Tag & Score Badge */}
                  <div className="flex items-center justify-between gap-2 mb-3 pb-2.5 border-b border-slate-100 min-h-[30px]">
                    {item.board ? (
                      <span className="text-[10px] font-bold text-teal-800 bg-teal-100/70 px-2 py-0.5 rounded-md">
                        {item.board} {item.standard ? `• ${item.standard}` : ""}
                      </span>
                    ) : <span />}

                    {item.score && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-black text-teal-800 bg-teal-50 border border-teal-200 px-2.5 py-0.5 rounded-full shadow-2xs ml-auto">
                        <Award size={12} className="text-teal-700 shrink-0" />
                        <span>{item.score}</span>
                      </span>
                    )}
                  </div>

                  {/* School & Exam Details */}
                  <div className="space-y-0.5 mb-3">
                    <div className="flex items-start gap-1.5 text-xs text-slate-800 font-semibold leading-snug">
                      <School size={13} className="text-teal-700 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{item.school}</span>
                    </div>

                    {item.exam && (
                      <p className="text-[11px] text-slate-500 pl-5">
                        {item.exam}
                        {item.passingYear ? ` • Passing: ${item.passingYear}` : ""}
                      </p>
                    )}
                  </div>

                  {/* Quote Text */}
                  <div className="relative mb-2">
                    <Quote size={18} className="text-teal-500/30 mb-1 shrink-0" />
                    <p
                      className={`text-xs sm:text-[13px] text-slate-700 leading-relaxed italic ${
                        isExpanded ? "" : "line-clamp-3"
                      }`}
                    >
                      &ldquo;{item.quote}&rdquo;
                    </p>

                    {/* Secondary Quote (Guardian review) if expanded */}
                    {isExpanded && item.secondaryQuote && (
                      <div className="mt-2.5 p-2.5 rounded-xl bg-teal-50/60 border border-teal-100/80 text-[11px] text-slate-600 leading-relaxed italic">
                        {item.secondaryQuote}
                      </div>
                    )}

                    {/* Read more / Show less toggle */}
                    {isLong && (
                      <button
                        onClick={(e) => toggleExpand(cardKey, e)}
                        className="mt-1 text-[11px] font-bold text-teal-700 hover:text-teal-900 cursor-pointer inline-flex items-center gap-0.5 hover:underline"
                      >
                        {isExpanded ? "Show less ↑" : "Read more ↓"}
                      </button>
                    )}
                  </div>
                </div>

                {/* Bottom Footer: Student Info & Clickable Tutor Link */}
                <div className="pt-3 border-t border-slate-100 mt-3">
                  <div className="flex items-center justify-between gap-2">
                    <div>
                      <h4 className="text-[13px] font-bold text-navy-950 font-heading leading-tight">
                        {item.studentName}
                      </h4>
                      <span className="text-[10px] font-medium text-slate-500">
                        {item.role}
                      </span>
                    </div>

                    {item.location && (
                      <span className="flex items-center gap-1 text-[10px] font-medium text-slate-400">
                        <MapPin size={10} className="text-teal-600" />
                        <span>{item.location}</span>
                      </span>
                    )}
                  </div>

                  {/* Teacher Tag (Links straight to teacher's profile on /team) */}
                  {item.tutorMentioned && (
                    <div className="mt-2">
                      <Link
                        href={item.tutorLink || "/team"}
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1 text-[10px] font-semibold text-teal-800 bg-teal-50/80 hover:bg-teal-100 hover:text-teal-950 border border-teal-200/70 hover:border-teal-400 px-2 py-0.5 rounded-md transition-all group/tutor cursor-pointer"
                        title="View Mentor Profile on Team Page"
                      >
                        <GraduationCap size={11} className="text-teal-700 group-hover/tutor:scale-110 transition-transform shrink-0" />
                        <span>Tutor: {item.tutorMentioned}</span>
                        <span className="text-[9px] text-teal-600 font-bold group-hover/tutor:translate-x-0.5 transition-transform">→</span>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
