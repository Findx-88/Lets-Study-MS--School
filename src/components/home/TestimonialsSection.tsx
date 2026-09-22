"use client";

import { useState, useEffect, useCallback, useRef } from "react";
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
import { TESTIMONIALS } from "@/lib/constants";

export function TestimonialsSection() {
  const N = TESTIMONIALS.length; // 12 items
  const [currentIndex, setCurrentIndex] = useState(N); // Start in middle set
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const touchStartX = useRef<number | null>(null);

  // 3 copies to create a seamless infinite circular loop
  const extendedTestimonials = [...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS];

  // Responsive calculation for items visible per slide
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = useCallback(() => {
    if (!isTransitioning) return;
    setCurrentIndex((prev) => prev + 1);
  }, [isTransitioning]);

  const prevSlide = useCallback(() => {
    if (!isTransitioning) return;
    setCurrentIndex((prev) => prev - 1);
  }, [isTransitioning]);

  // Handle transition end for seamless circular wrap-around
  const handleTransitionEnd = () => {
    if (currentIndex >= 2 * N || currentIndex < N) {
      setIsTransitioning(false);
      const normalized = ((currentIndex - N) % N + N) % N;
      setCurrentIndex(N + normalized);
    }
  };

  // Re-enable transition on the next animation frame after silent index reset
  useEffect(() => {
    if (!isTransitioning) {
      const raf = requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsTransitioning(true);
        });
      });
      return () => cancelAnimationFrame(raf);
    }
  }, [isTransitioning]);

  // Auto-rotation effect (every 4.5 seconds, pauses when user hovers or interacts)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    if (deltaX > 50) {
      prevSlide();
    } else if (deltaX < -50) {
      nextSlide();
    }
    touchStartX.current = null;
  };

  const activeDotIndex = ((currentIndex - N) % N + N) % N;

  return (
    <section
      id="results"
      className="section-padding bg-gradient-to-b from-white via-cream-50/40 to-white relative overflow-hidden scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <h2 className="text-3xl sm:text-4xl font-black font-heading text-navy-950">
            Real Academic Results, Real Voices
          </h2>

          {/* Carousel Manual Controls */}
          <div className="flex items-center gap-3 shrink-0 self-start md:self-auto">
            <button
              onClick={prevSlide}
              aria-label="Previous testimonial"
              className="w-10 h-10 rounded-full border border-slate-300 bg-white hover:bg-teal-50 hover:border-teal-400 text-slate-700 hover:text-teal-900 transition-all shadow-sm flex items-center justify-center cursor-pointer"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next testimonial"
              className="w-10 h-10 rounded-full border border-slate-300 bg-white hover:bg-teal-50 hover:border-teal-400 text-slate-700 hover:text-teal-900 transition-all shadow-sm flex items-center justify-center cursor-pointer"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Carousel Viewport */}
        <div
          className="relative overflow-hidden cursor-grab active:cursor-grabbing"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className={`flex ${
              isTransitioning ? "transition-transform duration-700 ease-out" : ""
            }`}
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {extendedTestimonials.map((item, idx) => (
              <div
                key={`${item.id}-${idx}`}
                className="px-3 shrink-0"
                style={{ width: `${100 / itemsPerPage}%` }}
              >
                <div className="h-full bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-[0_4px_20px_-4px_rgba(15,23,42,0.06)] hover:shadow-[0_16px_36px_-6px_rgba(13,148,136,0.16)] hover:border-teal-400 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
                  {/* Top Bar: Board & Score Badge (No Stars) */}
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-100 min-h-[32px]">
                      {item.board ? (
                        <span className="text-[10px] font-bold text-teal-800 bg-teal-100/70 px-2.5 py-0.5 rounded-md">
                          {item.board} {item.standard ? `• ${item.standard}` : ""}
                        </span>
                      ) : <span />}

                      {item.score && (
                        <span className="inline-flex items-center gap-1 text-xs font-black text-teal-800 bg-teal-50 border border-teal-200 px-2.5 py-0.5 rounded-full shadow-xs ml-auto">
                          <Award size={13} className="text-teal-700 shrink-0" />
                          <span>{item.score}</span>
                        </span>
                      )}
                    </div>

                    {/* School & Exam Details */}
                    <div className="space-y-1 mb-4">
                      <div className="flex items-start gap-1.5 text-xs text-slate-700 font-medium">
                        <School size={14} className="text-teal-700 shrink-0 mt-0.5" />
                        <span className="line-clamp-2">{item.school}</span>
                      </div>

                      {item.exam && (
                        <div className="flex items-center gap-2 text-[11px] text-slate-500 pl-5">
                          <span className="font-semibold text-slate-700">{item.exam}</span>
                          {item.passingYear && (
                            <>
                              <span>•</span>
                              <span>Passing: {item.passingYear}</span>
                            </>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Quote text */}
                    <div className="relative mb-4">
                      <Quote size={22} className="text-teal-500/30 mb-1 shrink-0" />
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic line-clamp-6">
                        &ldquo;{item.quote}&rdquo;
                      </p>
                    </div>

                    {/* Secondary quote (e.g. Guardian note) */}
                    {item.secondaryQuote && (
                      <div className="p-3 rounded-xl bg-teal-50/50 border border-teal-100/70 text-[11px] text-slate-600 leading-relaxed italic mb-4">
                        {item.secondaryQuote}
                      </div>
                    )}
                  </div>

                  {/* Bottom Footer: Student / Parent & Interactive Tutor Tag */}
                  <div className="pt-4 border-t border-slate-100 mt-2">
                    <div className="flex items-center justify-between gap-2">
                      <div>
                        <h4 className="text-sm font-bold text-navy-950 font-heading">
                          {item.studentName}
                        </h4>
                        <span className="text-[11px] font-medium text-slate-500">
                          {item.role}
                        </span>
                      </div>

                      {item.location && (
                        <span className="flex items-center gap-1 text-[11px] font-medium text-slate-400">
                          <MapPin size={11} className="text-teal-600" />
                          <span>{item.location}</span>
                        </span>
                      )}
                    </div>

                    {/* Interactive Teacher Link */}
                    {item.tutorMentioned && (
                      <div className="mt-2.5">
                        <Link
                          href={item.tutorLink || "/team"}
                          className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-teal-800 bg-teal-50/80 hover:bg-teal-100 hover:text-teal-950 border border-teal-200/70 hover:border-teal-400 px-2.5 py-1 rounded-lg transition-all group/tutor cursor-pointer"
                          title="View Mentor Profile"
                        >
                          <GraduationCap size={13} className="text-teal-700 group-hover/tutor:scale-110 transition-transform shrink-0" />
                          <span>Tutor: {item.tutorMentioned}</span>
                          <span className="text-[10px] text-teal-600 font-bold group-hover/tutor:translate-x-0.5 transition-transform">→</span>
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Indicators / Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {[...Array(N)].map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setIsTransitioning(true);
                setCurrentIndex(N + idx);
              }}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                activeDotIndex === idx
                  ? "w-8 bg-teal-700"
                  : "w-2 bg-slate-300 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
