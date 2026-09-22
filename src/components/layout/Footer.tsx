import Link from "next/link";
import Image from "next/image";
import { ExternalLink, Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import { BRAND, CONTACT, NAV_ITEMS, SUBJECTS, BOARDS, getWhatsAppUrl } from "@/lib/constants";

// Social media SVG icons
function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" className={className}>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" className={className}>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" className={className}>
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" className={className}>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function TelegramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" className={className}>
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
  );
}

const SOCIAL_LINKS = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/people/Lets-Study/61584835031140/",
    icon: FacebookIcon,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/ls2m_maths?utm_source=qr",
    icon: InstagramIcon,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/let-s-study-school-of-mathematics-3443073a4/",
    icon: LinkedinIcon,
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@letsstudysom",
    icon: YoutubeIcon,
  },
  {
    name: "Telegram",
    url: "https://t.me/LetsstudySOM",
    icon: TelegramIcon,
  },
];

export function Footer() {
  return (
    <footer className="bg-navy-950 text-white relative overflow-hidden pt-12 pb-20 md:pb-8 border-t border-navy-800 text-xs">
      {/* Decorative math symbol background */}
      <div className="absolute inset-0 pointer-events-none opacity-5 select-none font-serif text-5xl text-white flex flex-wrap gap-12 p-8 leading-loose overflow-hidden">
        <span>∫</span> <span>π</span> <span>∑</span> <span>∆</span> <span>√</span> <span>∞</span>
        <span>λ</span> <span>θ</span> <span>∇</span> <span>≈</span> <span>≠</span> <span>∫</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Highlight Banner */}
        <div className="bg-gradient-to-r from-navy-900 via-navy-800 to-teal-950 border border-teal-500/30 rounded-2xl p-5 sm:p-6 mb-12 shadow-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="relative w-10 h-10 shrink-0">
              <Image
                src={BRAND.logoUrl}
                alt={BRAND.name}
                fill
                className="object-contain"
              />
            </div>
            <div>
              <span className="text-[11px] font-semibold text-amber-400 tracking-wide block">
                West Bengal&apos;s #1 for Higher Math
              </span>
              <h3 className="text-sm sm:text-base font-bold font-heading text-white mt-0.5">
                Looking for BSc, MSc Entrance (IIT JAM / ISI / TIFR) or PhD Prep?
              </h3>
              <p className="text-[11px] sm:text-xs text-navy-300 mt-0.5">
                The school division is the first step on the ladder of Let&apos;s Study MS, learn with faculty from IITs & ISI.
              </p>
            </div>
          </div>
          <Link
            href={BRAND.parentUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 btn-pill bg-teal-500 hover:bg-teal-400 text-navy-950 font-bold px-4 py-2 text-xs flex items-center gap-1.5 shadow-md transition-transform hover:-translate-y-0.5 self-start sm:self-auto"
          >
            <span>Visit letsstudyms.com</span>
            <ExternalLink size={13} />
          </Link>
        </div>

        {/* 4 Balanced Columns with Harmonious Spacing (12-col grid) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-10 border-b border-navy-800/80 items-start">
          
          {/* Column 1: Brand Info & Social Media (4 cols) */}
          <div className="sm:col-span-2 lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 shrink-0">
                <Image
                  src={BRAND.logoUrl}
                  alt={BRAND.name}
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h4 className="text-base font-black font-heading tracking-wide text-white">
                  {BRAND.name}
                </h4>
                <p className="text-[10px] uppercase tracking-widest text-teal-400 font-semibold">
                  {BRAND.tagline}
                </p>
              </div>
            </div>

            <p className="text-xs text-navy-300 leading-relaxed max-w-sm">
              Nurturing analytical clarity, conceptual depth, and examination confidence for Standard 5–12
            </p>

            <div className="pt-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-navy-400 mb-2.5 block">
                Connect With Us
              </span>
              <div className="flex flex-wrap items-center gap-2">
                {SOCIAL_LINKS.map((s) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={s.name}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Follow Let's Study MS on ${s.name}`}
                      className="w-8 h-8 rounded-lg bg-navy-900 hover:bg-teal-500 hover:border-teal-400 hover:text-navy-950 border border-navy-700/80 text-navy-300 transition-all duration-200 flex items-center justify-center hover:scale-105 shadow-xs"
                    >
                      <Icon />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2">
            <h5 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-4 font-heading">
              Quick Links
            </h5>
            <ul className="space-y-2 text-xs text-navy-300">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-teal-300 hover:translate-x-1 transition-all duration-200 inline-flex items-center gap-1.5 group"
                  >
                    <span className="text-teal-400 group-hover:translate-x-0.5 transition-transform">›</span>
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/gallery"
                  className="hover:text-teal-300 hover:translate-x-1 transition-all duration-200 inline-flex items-center gap-1.5 group"
                >
                  <span className="text-teal-400 group-hover:translate-x-0.5 transition-transform">›</span>
                  <span>Live Class Gallery</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Academics & Boards (3 cols) */}
          <div className="lg:col-span-3">
            <h5 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-4 font-heading">
              Academics
            </h5>
            <ul className="space-y-2 text-xs text-navy-300">
              {SUBJECTS.map((sub) => (
                <li key={sub.id}>
                  <Link
                    href={`/academics#${sub.id}`}
                    className="hover:text-teal-300 hover:translate-x-1 transition-all duration-200 inline-flex items-center gap-1.5 group"
                  >
                    <span className="text-teal-400 group-hover:translate-x-0.5 transition-transform">›</span>
                    <span>{sub.name}</span>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-5 pt-3 border-t border-navy-800">
              <span className="text-[10px] font-bold uppercase tracking-wider text-navy-400 block mb-2">
                Boards Covered
              </span>
              <div className="flex flex-wrap gap-1.5">
                {BOARDS.map((b) => (
                  <span
                    key={b.id}
                    className="text-[10px] bg-navy-900 border border-navy-800 text-teal-200/90 px-2 py-0.5 rounded font-medium"
                  >
                    {b.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Column 4: Office & Helpline (3 cols) */}
          <div className="lg:col-span-3">
            <h5 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-4 font-heading">
              Academic Office & Helpline
            </h5>
            <div className="space-y-3 text-xs text-navy-300">
              {/* Address */}
              <div className="flex items-start gap-2.5">
                <MapPin size={15} className="text-teal-400 shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  <span className="text-[11px] text-teal-300/80 block font-medium">Registered Office:</span>
                  {CONTACT.address.street},<br />
                  {CONTACT.address.city}, {CONTACT.address.state} — {CONTACT.address.pincode}
                </p>
              </div>

              {/* Both Phone Numbers */}
              <div className="flex items-start gap-2.5">
                <Phone size={15} className="text-teal-400 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <a
                    href="tel:+918481819726"
                    className="text-white hover:text-amber-400 transition-colors font-medium block hover:underline"
                  >
                    +91 8481819726
                  </a>
                  <a
                    href="tel:+918777484102"
                    className="text-white hover:text-amber-400 transition-colors font-medium block hover:underline"
                  >
                    +91 8777484102
                  </a>
                </div>
              </div>

              {/* Clickable Email */}
              <div className="flex items-center gap-2.5">
                <Mail size={15} className="text-teal-400 shrink-0" />
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="hover:text-amber-400 hover:underline transition-colors break-all"
                >
                  {CONTACT.email}
                </a>
              </div>

              {/* Chat on WhatsApp CTA */}
              <div className="pt-1.5">
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-3.5 py-2 rounded-lg font-semibold text-xs transition-colors shadow-sm"
                >
                  <span>Chat on WhatsApp</span>
                  <ArrowUpRight size={13} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-6 text-center text-[11px] text-navy-400">
          <p>
            © {new Date().getFullYear()} {BRAND.fullName}. An official division of{" "}
            <Link
              href={BRAND.parentUrl}
              target="_blank"
              className="text-teal-400 hover:underline hover:text-teal-300 transition-colors"
            >
              {BRAND.parentName}
            </Link>
            . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
