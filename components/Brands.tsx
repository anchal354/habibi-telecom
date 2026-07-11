"use client";

import {
  Smartphone,
  Headphones,
  Tv,
  Lightbulb,
  BatteryCharging,
  Wifi,
  ShieldCheck,
  Zap,
} from "lucide-react";

import FadeUp from "./animations/FadeUp";
import ZoomIn from "./animations/ZoomIn";

const brands = [
  {
    name: "Samsung",
    icon: Smartphone,
  },
  {
    name: "Vivo",
    icon: Smartphone,
  },
  {
    name: "OPPO",
    icon: Smartphone,
  },
  {
    name: "realme",
    icon: Smartphone,
  },
  {
    name: "Redmi",
    icon: Smartphone,
  },
  {
    name: "boAt",
    icon: Headphones,
  },
  {
    name: "Havells",
    icon: Lightbulb,
  },
  {
    name: "Crompton",
    icon: Zap,
  },
  {
    name: "Luminous",
    icon: BatteryCharging,
  },
  {
    name: "TP-Link",
    icon: Wifi,
  },
  {
    name: "CP Plus",
    icon: ShieldCheck,
  },
  {
    name: "LG",
    icon: Tv,
  },
];

export default function Brands() {
  return (
    <section
      id="brands"
      className="bg-gradient-to-b from-black via-[#111111] to-black py-24 px-6 text-white"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}

        <FadeUp>
          <div className="mb-16 text-center">

            <span className="inline-block rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-sm uppercase tracking-[3px] text-yellow-400">
              Top Brands
            </span>

            <h2 className="mt-6 text-4xl font-bold md:text-5xl">
              Trusted <span className="text-yellow-400">Brands</span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-gray-400">
              We offer genuine products from India's most trusted
              mobile, electronics and electrical brands.
            </p>

          </div>
        </FadeUp>

        {/* Brand Cards */}

        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4">

          {brands.map((brand, index) => {
            const Icon = brand.icon;

            return (
              <ZoomIn key={index} delay={index * 0.05}>
                <div className="group cursor-pointer rounded-3xl border border-yellow-500/10 bg-zinc-900 p-8 text-center transition-all duration-500 hover:-translate-y-4 hover:scale-[1.03] hover:border-yellow-500 hover:shadow-[0_0_40px_rgba(234,179,8,0.25)]">

                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-yellow-500/10 transition-all duration-500 group-hover:bg-yellow-500">

                    <Icon
                      size={40}
                      className="text-yellow-400 transition-all duration-500 group-hover:scale-125 group-hover:text-black"
                    />

                  </div>

                  <h3 className="mt-6 text-2xl font-bold transition-colors duration-300 group-hover:text-yellow-400">
                    {brand.name}
                  </h3>

                  <p className="mt-2 text-sm text-gray-400">
                    Authorized Brand
                  </p>

                </div>
              </ZoomIn>
            );
          })}

        </div>

      </div>
    </section>
  );
}