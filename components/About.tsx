"use client";

import Image from "next/image";
import {
  Phone,
  ShieldCheck,
  BadgeCheck,
  Star,
} from "lucide-react";

import FadeLeft from "@/components/animations/FadeLeft";
import FadeRight from "@/components/animations/FadeRight";
import FadeUp from "@/components/animations/FadeUp";
import HoverCard from "@/components/animations/HoverCard";
import MagneticButton from "@/components/animations/MagneticButton";

export default function About() {
  return (
    <section
      id="about"
      className="bg-gradient-to-b from-black via-[#111111] to-black py-24 px-6 text-white"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">

        {/* Left Image */}

        <FadeLeft>
          <div className="group relative">

            <div className="absolute -inset-2 rounded-3xl bg-yellow-500/20 blur-xl opacity-0 transition duration-500 group-hover:opacity-100" />

            <div className="relative overflow-hidden rounded-3xl border border-yellow-500/20">

              <Image
                src="/images/shop.jpg"
                alt="Habibi Telecom Shop"
                width={700}
                height={700}
                className="h-[550px] w-full object-cover transition duration-700 group-hover:scale-105"
              />

            </div>

          </div>
        </FadeLeft>

        {/* Right Content */}

        <FadeRight>

          <span className="inline-block rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-sm uppercase tracking-[3px] text-yellow-400">
            About Habibi
          </span>

          <FadeUp delay={0.1}>
            <h2 className="mt-6 text-4xl font-bold leading-tight md:text-5xl">
              Your Trusted
              <span className="text-yellow-400">
                {" "}Telecom & Electrical{" "}
              </span>
              Partner
            </h2>
          </FadeUp>

          <FadeUp delay={0.2}>
            <p className="mt-8 text-lg leading-8 text-gray-300">
              Habibi Telecom & Electrical is your trusted destination
              for Mobile Phones, Accessories, Smart Watches,
              Home Appliances, Electrical Products,
              CCTV Cameras, Inverters, Fans,
              Coolers, LED Lights and much more.
            </p>
          </FadeUp>

          <FadeUp delay={0.3}>
            <p className="mt-5 leading-8 text-gray-400">
              We focus on genuine products,
              affordable pricing,
              trusted brands and excellent customer service
              to ensure every customer leaves satisfied.
            </p>
          </FadeUp>

          {/* Features */}

          <div className="mt-10 grid gap-5 sm:grid-cols-2">

            <FadeUp delay={0.4}>
              <div className="flex items-center gap-3">
                <ShieldCheck className="text-yellow-400" />
                <span>100% Genuine Products</span>
              </div>
            </FadeUp>

            <FadeUp delay={0.45}>
              <div className="flex items-center gap-3">
                <BadgeCheck className="text-yellow-400" />
                <span>Trusted Brands</span>
              </div>
            </FadeUp>

            <FadeUp delay={0.5}>
              <div className="flex items-center gap-3">
                <Star className="text-yellow-400" />
                <span>Affordable Prices</span>
              </div>
            </FadeUp>

            <FadeUp delay={0.55}>
              <div className="flex items-center gap-3">
                <Phone className="text-yellow-400" />
                <span>Friendly Customer Support</span>
              </div>
            </FadeUp>

          </div>

          {/* Stats */}

          <div className="mt-12 grid grid-cols-2 gap-6">

            <HoverCard>
              <div className="rounded-2xl border border-yellow-500/20 bg-zinc-900 p-6 text-center transition hover:border-yellow-500">

                <h3 className="text-4xl font-bold text-yellow-400">
                  5000+
                </h3>

                <p className="mt-2 text-gray-300">
                  Happy Customers
                </p>

              </div>
            </HoverCard>

            <HoverCard>
              <div className="rounded-2xl border border-yellow-500/20 bg-zinc-900 p-6 text-center transition hover:border-yellow-500">

                <h3 className="text-4xl font-bold text-yellow-400">
                  1000+
                </h3>

                <p className="mt-2 text-gray-300">
                  Products Available
                </p>

              </div>
            </HoverCard>

          </div>

          {/* Button */}

          <div className="mt-10">

            <MagneticButton>

              <a
                href="tel:+919576822786"
                className="inline-flex items-center gap-3 rounded-full bg-yellow-500 px-8 py-4 font-bold text-black transition hover:bg-yellow-400"
              >
                <Phone size={20} />
                Call Now
              </a>

            </MagneticButton>

          </div>

        </FadeRight>

      </div>
    </section>
  );
}