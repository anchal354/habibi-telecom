"use client";

import { ArrowRight, MapPin, Phone } from "lucide-react";
import FadeUp from "@/components/animations/FadeUp";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] w-full overflow-hidden bg-black"
    >
      {/* Background Video */}

      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover sm:scale-105"
      >
        <source src="/video/hero.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/95" />

      {/* Hero Content */}

      <div className="relative z-10 flex min-h-[100svh] w-full flex-col items-center justify-center px-4 pb-28 pt-24 text-center sm:px-6 sm:pb-24 sm:pt-28">
        <FadeUp delay={0.1}>
          <p className="mx-auto mb-5 max-w-[95vw] rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-2 text-[10px] font-medium uppercase leading-5 tracking-[1.5px] text-yellow-400 sm:mb-6 sm:px-6 sm:text-sm sm:tracking-[3px]">
            Premium Mobile • Telecom • Electrical Store
          </p>
        </FadeUp>

        <FadeUp delay={0.2}>
          <h1 className="text-[clamp(2.8rem,15vw,6rem)] font-extrabold leading-none tracking-wide text-white">
            HABIBI
          </h1>
        </FadeUp>

        <FadeUp delay={0.3}>
          <h2 className="mt-3 text-[clamp(1.65rem,8vw,3.5rem)] font-bold leading-tight text-yellow-400 sm:mt-4">
            Telecom &amp; Electrical
          </h2>
        </FadeUp>

        <FadeUp delay={0.4}>
          <p className="mx-auto mt-6 max-w-3xl text-sm leading-7 text-gray-300 sm:mt-8 sm:text-base sm:leading-8 md:text-lg">
            Your one-stop destination for Mobile Phones, Smart Accessories,
            Electrical Products, LED Lights, Home Appliances, CCTV, Inverters,
            Coolers and much more.
          </p>
        </FadeUp>

        <FadeUp delay={0.5}>
          <div className="mx-auto mt-4 flex max-w-xl items-start justify-center gap-2 text-xs leading-6 text-gray-400 sm:mt-5 sm:text-base">
            <MapPin
              size={18}
              className="mt-1 shrink-0 text-yellow-400"
            />

            <span>
              Hayaghat - Hathouri, Kothi Rd, BansDih, Bihar 847301
            </span>
          </div>
        </FadeUp>

        <FadeUp delay={0.6}>
          <div className="mt-8 flex w-full max-w-sm flex-col gap-3 sm:mt-10 sm:max-w-none sm:flex-row sm:justify-center sm:gap-4">
            <a
              href="#products"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-yellow-500 px-6 py-3.5 text-sm font-bold text-black transition-all duration-300 hover:scale-105 hover:bg-yellow-400 sm:w-auto sm:px-8 sm:py-4 sm:text-base"
            >
              Explore Products
              <ArrowRight size={20} />
            </a>

            <a
              href="tel:+919576822786"
              className="flex w-full items-center justify-center gap-2 rounded-full border-2 border-white px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:scale-105 hover:bg-white hover:text-black sm:w-auto sm:px-8 sm:py-4 sm:text-base"
            >
              <Phone size={20} />
              Call Now
            </a>
          </div>
        </FadeUp>

        {/* Scroll Indicator — Desktop Only */}

        <div className="absolute bottom-6 hidden animate-bounce flex-col items-center md:flex">
          <span className="text-sm text-gray-300">
            Scroll Down
          </span>

          <div className="mt-2 h-10 w-[2px] rounded-full bg-yellow-500" />
        </div>
      </div>
    </section>
  );
}