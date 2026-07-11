"use client";

import { Phone, MessageCircle } from "lucide-react";

export default function FloatingButtons() {
  return (
    <>
      {/* WhatsApp */}
      <a
        href="https://wa.me/919576822786?text=Hello%20Habibi%20Telecom%20%26%20Electrical"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 right-6 z-50 group"
        aria-label="Chat on WhatsApp"
      >
        <div className="flex items-center gap-3 rounded-full bg-green-500 px-4 py-3 shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-green-600">
          <MessageCircle size={26} className="text-white" />

          <span className="hidden md:block font-semibold text-white whitespace-nowrap">
            Chat on WhatsApp
          </span>
        </div>

        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-300 opacity-75"></span>
          <span className="relative inline-flex h-4 w-4 rounded-full bg-green-500"></span>
        </span>
      </a>

      {/* Call */}
      <a
        href="tel:+919576822786"
        className="fixed bottom-6 right-6 z-50"
        aria-label="Call Now"
      >
        <div className="flex items-center gap-3 rounded-full bg-yellow-500 px-4 py-3 shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-yellow-400">
          <Phone size={26} className="text-black" />

          <span className="hidden md:block font-semibold text-black whitespace-nowrap">
            Call Now
          </span>
        </div>
      </a>
    </>
  );
}