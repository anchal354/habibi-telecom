"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, MessageCircle } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-xl border-b border-yellow-500/20 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="Habibi Telecom Logo"
            width={60}
            height={60}
            priority
            className="rounded-full"
          />

          <div>
            <h2 className="text-yellow-400 font-extrabold text-2xl tracking-wide">
              HABIBI
            </h2>
            <p className="text-white text-sm">
              Telecom & Electrical
            </p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8 text-white font-medium">
          <Link href="/" className="hover:text-yellow-400 duration-300">
            Home
          </Link>

          <Link href="#about" className="hover:text-yellow-400 duration-300">
            About
          </Link>

          <Link href="#products" className="hover:text-yellow-400 duration-300">
            Products
          </Link>

          <Link href="#services" className="hover:text-yellow-400 duration-300">
            Services
          </Link>

          <Link href="#gallery" className="hover:text-yellow-400 duration-300">
            Gallery
          </Link>

          <Link href="#contact" className="hover:text-yellow-400 duration-300">
            Contact
          </Link>
        </div>

        {/* Right Buttons */}
        <div className="hidden lg:flex items-center gap-4">

          <a
            href="https://wa.me/919576822786"
            target="_blank"
            className="flex items-center gap-2 bg-green-600 hover:bg-green-700 px-5 py-2 rounded-full text-white transition"
          >
            <MessageCircle size={18} />
            WhatsApp
          </a>

          <a
            href="tel:+919576822786"
            className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black px-5 py-2 rounded-full font-semibold transition"
          >
            <Phone size={18} />
            Call Now
          </a>

        </div>

      </div>
    </nav>
  );
}