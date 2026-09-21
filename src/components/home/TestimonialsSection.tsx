"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion } from "framer-motion";
import {
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  School,
  Award,
  Sparkles,
  MapPin,
  GraduationCap,
} from "lucide-react";
import { TESTIMONIALS, type TestimonialItem } from "@/lib/constants";

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const touchStartX = useRef<number | null>(null);

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

  const maxIndex = Math.max(0, TESTIMONIALS.length - itemsPerPage);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

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

  return (
    <section
      id="results"
      className="section-padding bg-gradient-to-b from-white via-cream-50/40 to-white relative overflow-hidden scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-teal-800 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
              <Sparkles size={13} className="text-teal-600" />
              Verified Student & Parent Feedback
            </span>
            <h2 className="text-3xl sm:text-4xl font-black font-heading text-navy-950 mt-3">
              Real Academic Results, Real Voices
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Unfiltered reflections from board exam scorers, olympiad aspirants, and grateful families across Kolkata and beyond.
            </p>
          </div>

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
            className="flex transition-transform duration-700 ease-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
            }}
          >
            {TESTIMONIALS.map((item) => (
              <div
                key={item.id}
                className="px-3 shrink-0"
                style={{ width: `${100 / itemsPerPage}%` }}
              >
                <div className="h-full bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-[0_4px_20px_-4px_rgba(15,23,42,0.06)] hover:shadow-[0_16px_36px_-6px_rgba(13,148,136,0.16)] hover:border-teal-400 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
                  {/* Top Bar: Stars + Score Badge */}
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-100">
                      <div className="flex text-amber-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={15} className="fill-amber-400" />
                        ))}
                      </div>

                      {item.score && (
                        <span className="inline-flex items-center gap-1 text-xs font-black text-teal-800 bg-teal-50 border border-teal-200 px-2.5 py-0.5 rounded-full shadow-xs">
                          <Award size={13} className="text-teal-700 shrink-0" />
                          <span>{item.score}</span>
                        </span>
                      )}
                    </div>

                    {/* School & Board Details */}
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

                  {/* Bottom Footer: Student / Parent & Tutor Tag */}
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

                    {item.tutorMentioned && (
                      <div className="mt-2.5 inline-flex items-center gap-1.5 text-[11px] font-semibold text-teal-800 bg-teal-50/70 border border-teal-200/60 px-2.5 py-1 rounded-lg">
                        <GraduationCap size={13} className="text-teal-700 shrink-0" />
                        <span>Tutor: {item.tutorMentioned}</span>
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
          {[...Array(maxIndex + 1)].map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                currentIndex === idx
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
