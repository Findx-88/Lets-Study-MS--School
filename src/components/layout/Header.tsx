"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight, Phone, MessageCircle } from "lucide-react";
import { NAV_ITEMS, BRAND, CONTACT, getWhatsAppUrl } from "@/lib/constants";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  return (
    <>
      {/* ─── Dynamic Island Floating Navbar ─────────────────────── */}
      <header
        className={`fixed left-1/2 -translate-x-1/2 z-40 transition-all duration-500 w-[94%] max-w-4xl ${
          isScrolled ? "top-3" : "top-10 md:top-12"
        }`}
      >
        <div
          className={`flex items-center justify-between px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full transition-all duration-300 ${
            isScrolled
              ? "bg-white/95 backdrop-blur-2xl shadow-xl shadow-navy-950/10 border border-slate-200/90"
              : "bg-white/90 backdrop-blur-xl shadow-lg shadow-navy-950/5 border border-slate-200/70"
          }`}
        >
          {/* Logo & Brand Name (Completely borderless logo, no (STD 5-12)) */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0 group">
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 shrink-0">
              <Image
                src={BRAND.logoUrl}
                alt={BRAND.name}
                fill
                priority
                className="object-contain"
                sizes="40px"
              />
            </div>
            <div className="leading-tight pr-1">
              <p className="font-heading font-black text-sm sm:text-base text-navy-950 tracking-tight group-hover:text-teal-700 transition-colors">
                {BRAND.name}
              </p>
              <p className="text-[10px] sm:text-[11px] font-semibold text-teal-600 tracking-wide uppercase">
                {BRAND.tagline}
              </p>
            </div>
          </Link>

          {/* Desktop Nav Items (Only: About Us, Academics, Child's Journey, Team, Batches, Contact) */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-bold transition-all duration-200 ${
                    isActive
                      ? "text-navy-950 bg-teal-50"
                      : "text-slate-700 hover:text-navy-950 hover:bg-slate-100/80"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="active-pill"
                      className="absolute inset-0 bg-teal-100/60 rounded-full -z-10 border border-teal-200/80"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="lg:hidden p-2 rounded-full text-navy-800 hover:bg-slate-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* ─── Mobile Dynamic Drawer ─────────────────────────────── */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-navy-950/60 backdrop-blur-sm lg:hidden"
            onClick={() => setIsMobileOpen(false)}
          >
            <motion.div
              initial={{ y: -20, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: -20, opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="absolute top-16 left-4 right-4 bg-white rounded-3xl p-6 shadow-2xl border border-slate-200"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <div className="relative w-8 h-8 shrink-0">
                    <Image
                      src={BRAND.logoUrl}
                      alt={BRAND.name}
                      fill
                      className="object-contain"
                      sizes="32px"
                    />
                  </div>
                  <div>
                    <p className="font-heading text-sm font-black text-navy-950">
                      {BRAND.name}
                    </p>
                    <p className="text-[10px] text-teal-600 font-bold uppercase">
                      {BRAND.tagline}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsMobileOpen(false)}
                  className="p-1.5 rounded-full hover:bg-slate-100 text-slate-600"
                  aria-label="Close menu"
                >
                  <X size={18} />
                </button>
              </div>

              <nav className="py-3 space-y-1">
                {NAV_ITEMS.map((item, i) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileOpen(false)}
                      className={`flex items-center justify-between py-2.5 px-3.5 rounded-xl text-sm font-semibold transition-colors ${
                        pathname === item.href
                          ? "bg-teal-50 text-teal-900 font-bold"
                          : "text-slate-700 hover:bg-slate-50 hover:text-navy-950"
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronRight size={15} className="text-slate-400" />
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Mobile Drawer Quick Action CTAs */}
              <div className="pt-3 border-t border-slate-100 space-y-2">
                <a
                  href={getWhatsAppUrl("Hello! I would like to enquire about Let's Study MS School Program.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileOpen(false)}
                  className="btn-pill bg-emerald-600 hover:bg-emerald-700 text-white w-full justify-center py-2.5 text-xs font-bold shadow-md shadow-emerald-700/20"
                >
                  <MessageCircle size={15} className="shrink-0" />
                  <span>Book Free Demo on WhatsApp</span>
                </a>
                <a
                  href={`tel:${CONTACT.phoneRaw}`}
                  onClick={() => setIsMobileOpen(false)}
                  className="flex items-center justify-center gap-2 py-2 text-xs font-bold text-navy-900 hover:text-teal-700 transition-colors"
                >
                  <Phone size={13} className="text-teal-700" />
                  <span>Call Us: {CONTACT.phone}</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
