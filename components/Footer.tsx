"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Navigation,
  ArrowUpRight,
} from "lucide-react";

import FadeUp from "./animations/FadeUp";
import ZoomIn from "./animations/ZoomIn";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Products", href: "#products" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact Us", href: "#contact" },
];

const googleMapsLink =
  "https://www.google.com/maps/place/HABIBI+TELECOM+AND+ELECTRICAL/@25.9771123,85.9260907,17z";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-yellow-500/20 bg-[#050505] text-white">
      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-32 top-0 h-80 w-80 rounded-full bg-yellow-500/5 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-4">
        {/* Logo and About */}
        <FadeUp delay={0.05}>
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-3"
              aria-label="Habibi Telecom and Electrical home"
            >
              <div className="relative h-16 w-16 overflow-hidden rounded-2xl border border-yellow-500/20 bg-zinc-900 p-1">
                <Image
                  src="/images/logo.png"
                  alt="Habibi Telecom and Electrical logo"
                  fill
                  sizes="64px"
                  className="object-contain"
                />
              </div>

              <div>
                <h2 className="text-2xl font-bold tracking-wide text-yellow-400">
                  HABIBI
                </h2>

                <p className="text-sm text-gray-400">
                  Telecom &amp; Electrical
                </p>
              </div>
            </Link>

            <p className="mt-6 max-w-sm leading-8 text-gray-400">
              Your trusted destination for mobile phones, accessories, home
              appliances, electrical products, CCTV, inverters and premium
              electronics.
            </p>

            <div className="mt-6 inline-flex rounded-full border border-yellow-500/20 bg-yellow-500/10 px-4 py-2 text-sm text-yellow-400">
              Genuine Products • Reliable Service
            </div>
          </div>
        </FadeUp>

        {/* Quick Links */}
        <FadeUp delay={0.1}>
          <div>
            <h3 className="mb-6 text-xl font-bold text-yellow-400">
              Quick Links
            </h3>

            <nav className="flex flex-col gap-4">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="group flex w-fit items-center gap-2 text-gray-400 transition-all duration-300 hover:translate-x-2 hover:text-yellow-400"
                >
                  <span>{link.name}</span>

                  <ArrowUpRight
                    size={15}
                    className="opacity-0 transition-all duration-300 group-hover:opacity-100"
                  />
                </Link>
              ))}
            </nav>
          </div>
        </FadeUp>

        {/* Contact Details */}
        <FadeUp delay={0.15}>
          <div>
            <h3 className="mb-6 text-xl font-bold text-yellow-400">
              Contact Details
            </h3>

            <div className="space-y-5">
              <a
                href="tel:+919576822786"
                className="group flex items-start gap-3 text-gray-400 transition hover:text-yellow-400"
              >
                <Phone
                  size={19}
                  className="mt-1 shrink-0 text-yellow-400 transition-transform group-hover:scale-110"
                />

                <span>+91 95768 22786</span>
              </a>

              <a
                href="tel:+918092330510"
                className="group flex items-start gap-3 text-gray-400 transition hover:text-yellow-400"
              >
                <Phone
                  size={19}
                  className="mt-1 shrink-0 text-yellow-400 transition-transform group-hover:scale-110"
                />

                <span>+91 80923 30510</span>
              </a>

              <a
                href="mailto:dshadab71@gmail.com"
                className="group flex items-start gap-3 text-gray-400 transition hover:text-yellow-400"
              >
                <Mail
                  size={19}
                  className="mt-1 shrink-0 text-yellow-400 transition-transform group-hover:scale-110"
                />

                <span className="break-all">dshadab71@gmail.com</span>
              </a>

              <a
                href={googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3 text-gray-400 transition hover:text-yellow-400"
              >
                <MapPin
                  size={19}
                  className="mt-1 shrink-0 text-yellow-400 transition-transform group-hover:scale-110"
                />

                <span className="leading-7">
                  Bansdih Chowk, Hayaghat–Hathouri,
                  <br />
                  Kothi Road, Bansdih,
                  <br />
                  Bihar – 847301
                </span>
              </a>
            </div>
          </div>
        </FadeUp>

        {/* Connect */}
        <FadeUp delay={0.2}>
          <div>
            <h3 className="mb-6 text-xl font-bold text-yellow-400">
              Connect With Us
            </h3>

            <p className="mb-6 leading-7 text-gray-400">
              Contact us for product availability, prices and complete
              assistance.
            </p>

            <div className="space-y-4">
              <ZoomIn delay={0.1}>
                <a
                  href="https://wa.me/919576822786?text=Hello%20Habibi%20Telecom%20%26%20Electrical,%20I%20want%20to%20know%20more%20about%20your%20products."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-3 rounded-2xl bg-green-500 px-5 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-green-600 hover:shadow-[0_10px_30px_rgba(34,197,94,0.2)]"
                >
                  <MessageCircle
                    size={21}
                    className="transition-transform group-hover:scale-110"
                  />

                  Chat on WhatsApp
                </a>
              </ZoomIn>

              <ZoomIn delay={0.15}>
                <a
                  href={googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-3 rounded-2xl border border-yellow-500 px-5 py-4 font-semibold text-yellow-400 transition-all duration-300 hover:-translate-y-1 hover:bg-yellow-500 hover:text-black hover:shadow-[0_10px_30px_rgba(234,179,8,0.18)]"
                >
                  <Navigation
                    size={21}
                    className="transition-transform group-hover:scale-110"
                  />

                  Open Google Maps
                </a>
              </ZoomIn>
            </div>
          </div>
        </FadeUp>
      </div>

     {/* Bottom Footer */}

<div className="relative border-t border-zinc-800">
  <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6">

    <p className="text-center text-sm text-gray-400">
      © {currentYear}{" "}
      <span className="font-semibold text-yellow-400">
        Habibi Telecom &amp; Electrical
      </span>
      . All Rights Reserved.
    </p>

    <p className="text-center text-sm text-gray-300">
      This website is owned and managed by{" "}
      <span className="font-semibold text-yellow-400">
        HABIBI TELECOM AND ELECTRICAL
      </span>
    </p>

  </div>
</div>
    </footer>
  );
}