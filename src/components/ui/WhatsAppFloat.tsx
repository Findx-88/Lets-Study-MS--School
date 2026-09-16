"use client";

import { getWhatsAppUrl } from "@/lib/constants";

export function WhatsAppFloat() {
  return (
    <div className="hidden md:flex fixed bottom-6 right-6 z-50 items-center group">
      {/* Tooltip on hover */}
      <span className="hidden md:inline-block mr-3 bg-navy-900 text-white text-xs font-medium py-1.5 px-3 rounded-xl shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0 border border-navy-700 pointer-events-none whitespace-nowrap">
        Chat with Academic Counselor 👋
      </span>

      <a
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20bd5a] rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95"
      >
        {/* Pulsing ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-40 animate-ping" />
        
        {/* Filled Authentic WhatsApp Icon: Solid white speech bubble + green phone receiver */}
        <svg
          viewBox="0 0 24 24"
          width="32"
          height="32"
          className="relative z-10 drop-shadow-sm"
        >
          {/* Solid White Speech Bubble */}
          <path
            fill="#ffffff"
            d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2Z"
          />
          {/* Green Phone Handset inside speech bubble */}
          <path
            fill="#25D366"
            d="M17.52 14.33C17.22 14.18 15.74 13.45 15.47 13.35C15.19 13.25 14.99 13.2 14.79 13.5C14.59 13.8 14.02 14.48 13.84 14.68C13.67 14.88 13.49 14.91 13.19 14.76C12.89 14.61 11.92 14.3 10.77 13.27C9.88 12.47 9.28 11.48 9.11 11.18C8.93 10.88 9.09 10.72 9.24 10.57C9.38 10.43 9.54 10.22 9.69 10.04C9.84 9.87 9.89 9.74 9.99 9.54C10.09 9.34 10.04 9.16 9.97 9.01C9.89 8.86 9.32 7.45 9.08 6.88C8.85 6.32 8.61 6.4 8.44 6.39C8.28 6.38 8.08 6.38 7.88 6.38C7.68 6.38 7.35 6.45 7.07 6.75C6.79 7.05 6.01 7.78 6.01 9.26C6.01 10.74 7.09 12.16 7.24 12.37C7.39 12.57 9.36 15.62 12.38 16.92C13.1 17.23 13.66 17.42 14.1 17.56C14.82 17.79 15.48 17.76 16 17.68C16.58 17.59 17.78 16.95 18.03 16.25C18.28 15.55 18.28 14.95 18.21 14.83C18.13 14.7 17.82 14.48 17.52 14.33Z"
          />
        </svg>

        {/* Online amber indicator dot */}
        <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-amber-400 border-2 border-white rounded-full" />
      </a>
    </div>
  );
}
