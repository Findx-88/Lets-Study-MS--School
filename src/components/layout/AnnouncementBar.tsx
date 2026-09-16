import Link from "next/link";
import { ExternalLink, Phone } from "lucide-react";
import { BRAND, CONTACT } from "@/lib/constants";

export function AnnouncementBar() {
  return (
    <div className="bg-navy-950 text-white text-xs py-2 px-4 relative z-50 border-b border-navy-800">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2 font-medium">
          <span className="inline-flex items-center gap-1 bg-amber-500 text-navy-950 px-2 py-0.5 rounded-full font-bold text-[10px] uppercase tracking-wider">
            New Session 2026–27
          </span>
          <span className="hidden sm:inline text-navy-200">
            Admissions Open for Standard 5 to 12 • Online
          </span>
          <span className="sm:hidden text-navy-200">Admissions Open Std 5–12</span>
        </div>

        <div className="flex items-center gap-4 text-navy-300">
          <a
            href={`tel:${CONTACT.phone}`}
            className="hover:text-amber-400 transition-colors flex items-center gap-1 font-medium"
          >
            <Phone size={12} className="text-amber-400" />
            <span>{CONTACT.phone}</span>
          </a>
          <span className="text-navy-700 hidden md:inline">|</span>
          <Link
            href={BRAND.parentUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-1 text-teal-300 hover:text-white transition-colors"
          >
            <span>For Higher Math (IIT JAM / ISI)</span>
            <ExternalLink size={11} />
          </Link>
        </div>
      </div>
    </div>
  );
}
