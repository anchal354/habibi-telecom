"use client";

import { Phone, MessageCircle } from "lucide-react";

export default function FloatingButtons() {
  return (
    <>
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919576822786"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-green-600"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={28} />
      </a>

      {/* Call Button */}
      <a
        href="tel:+919576822786"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-yellow-500 text-black shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-yellow-400"
        aria-label="Call Now"
      >
        <Phone size={28} />
      </a>
    </>
  );
}