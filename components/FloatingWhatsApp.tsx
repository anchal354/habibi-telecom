"use client";

import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/919576822786?text=Hello%20Habibi%20Telecom%20%26%20Electrical,%20I%20want%20to%20know%20more%20about%20your%20products."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[9999] group"
    >
      <div className="flex items-center gap-3 rounded-full bg-green-500 px-5 py-4 shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-green-600">
        <MessageCircle size={28} className="text-white" />

        <span className="hidden md:block font-semibold text-white">
          Chat on WhatsApp
        </span>
      </div>

      <span className="absolute -top-2 -right-2 flex h-4 w-4">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
        <span className="relative inline-flex h-4 w-4 rounded-full bg-green-500"></span>
      </span>
    </a>
  );
}