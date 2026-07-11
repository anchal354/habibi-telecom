"use client";

import { Phone, ArrowRight } from "lucide-react";
import FadeUp from "@/components/animations/FadeUp";
import MagneticButton from "@/components/animations/MagneticButton";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden bg-black"
    >
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full scale-105 object-cover"
      >
        <source src="/video/hero.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/75 via-black/65 to-black/90" />

      {/* Hero Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 pb-24 pt-28 text-center">
        <FadeUp delay={0.1}>
          <p className="mb-6 rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-xs font-medium uppercase tracking-[2px] text-yellow-400 sm:px-6 sm:text-sm sm:tracking-[3px]">
            Premium Mobile • Telecom • Electrical Store
          </p>
        </FadeUp>

        <FadeUp delay={0.2}>
          <h1 className="text-5xl font-extrabold tracking-wide text-white md:text-7xl lg:text-8xl">
            HABIBI
          </h1>
        </FadeUp>

        <FadeUp delay={0.3}>
          <h2 className="mt-4 text-3xl font-bold text-yellow-400 md:text-5xl">
            Telecom &amp; Electrical
          </h2>
        </FadeUp>

        <FadeUp delay={0.4}>
          <p className="mt-8 max-w-3xl text-base leading-8 text-gray-300 sm:text-lg">
            Your one-stop destination for Mobile Phones, Smart Accessories,
            Electrical Products, LED Lights, Home Appliances, CCTV, Inverters,
            Coolers and much more.
          </p>
        </FadeUp>

        <FadeUp delay={0.5}>
          <p className="mt-5 text-sm text-gray-400 sm:text-base">
            📍 Hayaghat - Hathouri, Kothi Rd, BansDih, Bihar 847301
          </p>
        </FadeUp>

        <FadeUp delay={0.6}>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <MagneticButton>
              <a
                href="#products"
                className="flex items-center justify-center gap-2 rounded-full bg-yellow-500 px-8 py-4 font-bold text-black transition hover:bg-yellow-400"
              >
                Explore Products
                <ArrowRight size={20} />
              </a>
            </MagneticButton>

            <MagneticButton>
              <a
                href="tel:+919576822786"
                className="flex items-center justify-center gap-2 rounded-full border-2 border-white px-8 py-4 font-bold text-white transition hover:bg-white hover:text-black"
              >
                <Phone size={20} />
                Call Now
              </a>
            </MagneticButton>
          </div>
        </FadeUp>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 flex animate-bounce flex-col items-center">
          <span className="text-sm text-gray-300">Scroll Down</span>

          <div className="mt-2 h-10 w-[2px] rounded-full bg-yellow-500" />
        </div>
      </div>
    </section>
  );
}