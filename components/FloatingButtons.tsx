"use client";

import { MessageCircle, Phone } from "lucide-react";

export default function FloatingButtons() {
  return (
    <>
      {/* Mobile Bottom Buttons */}

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-black/95 px-3 pt-3 pb-[calc(env(safe-area-inset-bottom)+0.75rem)] backdrop-blur-xl md:hidden">
        <div className="mx-auto grid max-w-md grid-cols-2 gap-3">
          <a
            href="https://wa.me/919576822786?text=Hello%20Habibi%20Telecom%20%26%20Electrical"
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-12 items-center justify-center gap-2 rounded-full bg-green-500 px-3 py-3 text-[13px] font-bold text-white transition active:scale-95"
            aria-label="Chat with Habibi Telecom on WhatsApp"
          >
            <MessageCircle size={19} />
            WhatsApp
          </a>

          <a
            href="tel:+919576822786"
            className="flex min-h-12 items-center justify-center gap-2 rounded-full bg-yellow-500 px-3 py-3 text-[13px] font-bold text-black transition active:scale-95"
            aria-label="Call Habibi Telecom"
          >
            <Phone size={19} />
            Call Now
          </a>
        </div>
      </div>

      {/* Tablet and Desktop Floating Buttons */}

      <div className="fixed bottom-6 right-6 z-40 hidden flex-col items-end gap-3 md:flex">
        <a
          href="https://wa.me/919576822786?text=Hello%20Habibi%20Telecom%20%26%20Electrical"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center gap-3 rounded-full bg-green-500 px-5 py-3 font-semibold text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-green-600"
          aria-label="Chat with Habibi Telecom on WhatsApp"
        >
          <MessageCircle size={23} />
          Chat on WhatsApp

          <span className="absolute -right-1 -top-1 flex h-4 w-4">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-300 opacity-75" />

            <span className="relative inline-flex h-4 w-4 rounded-full bg-green-500" />
          </span>
        </a>

        <a
          href="tel:+919576822786"
          className="flex items-center gap-3 rounded-full bg-yellow-500 px-5 py-3 font-semibold text-black shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-yellow-400"
          aria-label="Call Habibi Telecom"
        >
          <Phone size={23} />
          Call Now
        </a>
      </div>
    </>
  );
}