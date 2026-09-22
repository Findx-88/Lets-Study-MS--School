"use client";

import { Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { CONTACT, getWhatsAppUrl } from "@/lib/constants";

export function MobileStickyBar() {
  return (
    <aside
      aria-label="Mobile quick actions"
      className="fixed bottom-0 inset-x-0 z-40 md:hidden bg-white/95 backdrop-blur-md border-t border-slate-200/90 px-3.5 pt-2.5 pb-[calc(0.625rem+env(safe-area-inset-bottom,0px))] shadow-[0_-4px_20px_rgba(15,23,42,0.08)]"
    >
      <div className="flex items-center gap-2.5 max-w-md mx-auto">
        {/* Direct Phone Call Button */}
        <a
          href={`tel:${CONTACT.phoneRaw}`}
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-full bg-slate-100 hover:bg-slate-200 active:scale-98 text-navy-950 border border-slate-300/80 font-heading font-bold text-xs transition-all"
        >
          <Phone size={14} className="text-teal-700 shrink-0" />
          <span>Call Direct</span>
        </a>

        {/* Instant WhatsApp Demo Booking Button */}
        <a
          href={getWhatsAppUrl("Hello! I am browsing on mobile and would like to book a Free Demo Class for my child.")}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-[1.4] flex items-center justify-center gap-1.5 py-2.5 px-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 active:scale-98 text-white font-heading font-bold text-xs shadow-md shadow-emerald-700/20 transition-all"
        >
          <WhatsAppIcon size={16} className="shrink-0" />
          <span>Book Free Demo</span>
        </a>
      </div>
    </aside>
  );
}
