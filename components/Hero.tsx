"use client";

import { Phone, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">

      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/video/hero.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/65 to-black/90"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">

        {/* Premium Badge */}
        <p className="mb-6 rounded-full border border-yellow-500/30 bg-yellow-500/10 px-6 py-2 text-sm font-medium uppercase tracking-[3px] text-yellow-400">
          Premium Mobile • Telecom • Electrical Store
        </p>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white tracking-wide">
          HABIBI
        </h1>

        <h2 className="mt-4 text-3xl md:text-5xl font-bold text-yellow-400">
          Telecom & Electrical
        </h2>

        {/* Description */}
        <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-300">
          Your one-stop destination for Mobile Phones, Smart Accessories,
          Electrical Products, LED Lights, Home Appliances, CCTV, Inverters,
          Coolers and much more.
        </p>

        {/* Address */}
        <p className="mt-5 text-gray-400 text-base">
          📍 Hayaghat - Hathouri, Kothi Rd, BansDih, Bihar 847301
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">

          <a
            href="#products"
            className="flex items-center justify-center gap-2 rounded-full bg-yellow-500 px-8 py-4 font-bold text-black transition-all duration-300 hover:scale-105 hover:bg-yellow-400"
          >
            Explore Products
            <ArrowRight size={20} />
          </a>

          <a
            href="tel:+919576822786"
            className="flex items-center justify-center gap-2 rounded-full border-2 border-white px-8 py-4 font-bold text-white transition-all duration-300 hover:bg-white hover:text-black"
          >
            <Phone size={20} />
            Call Now
          </a>

        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 flex flex-col items-center animate-bounce">
          <span className="text-sm text-gray-300">
            Scroll Down
          </span>

          <div className="mt-2 h-10 w-[2px] bg-yellow-500 rounded-full"></div>
        </div>

      </div>

    </section>
  );
}