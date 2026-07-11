"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "Products", href: "#products" },
  { name: "Services", href: "#services" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-yellow-500/20 bg-black/85 shadow-lg backdrop-blur-xl">
      {/* Main Navbar */}
      <div className="mx-auto flex min-h-[86px] max-w-[1540px] items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          onClick={closeMenu}
          className="flex shrink-0 items-center gap-3"
          aria-label="Habibi Telecom and Electrical home"
        >
          <div className="relative flex h-14 w-14 shrink-0 items-center justify-center sm:h-16 sm:w-16">
            <Image
              src="/images/logo.png"
              alt="Habibi Telecom and Electrical Logo"
              width={72}
              height={72}
              priority
              sizes="(max-width: 640px) 56px, 64px"
              className="h-full w-full scale-110 object-contain"
            />
          </div>

          <div className="leading-tight">
            <h2 className="text-xl font-extrabold tracking-wide text-yellow-400 sm:text-2xl">
              HABIBI
            </h2>

            <p className="whitespace-nowrap text-xs font-medium text-white sm:text-sm">
              Telecom &amp; Electrical
            </p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-7 font-medium text-white xl:flex 2xl:gap-9">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative py-2 transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-yellow-400 after:transition-all after:duration-300 hover:text-yellow-400 hover:after:w-full"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop Call Button */}
        <div className="hidden shrink-0 xl:flex">
          <a
            href="tel:+919576822786"
            className="inline-flex items-center gap-2 rounded-full bg-yellow-500 px-5 py-3 font-bold text-black transition-all duration-300 hover:scale-105 hover:bg-yellow-400 2xl:px-6"
          >
            <Phone size={19} />
            <span className="whitespace-nowrap">
              Call Now : 9576822786
            </span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen((previous) => !previous)}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-yellow-500/30 text-yellow-400 transition-all duration-300 hover:bg-yellow-500 hover:text-black xl:hidden"
          aria-label={
            isMenuOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t border-yellow-500/20 bg-black/95 px-5 py-6 backdrop-blur-xl xl:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                className="rounded-xl px-4 py-3 font-medium text-white transition-all duration-300 hover:bg-yellow-500/10 hover:text-yellow-400"
              >
                {link.name}
              </Link>
            ))}

            <a
              href="tel:+919576822786"
              onClick={closeMenu}
              className="mt-4 flex items-center justify-center gap-2 rounded-full bg-yellow-500 px-5 py-3 font-bold text-black transition-all duration-300 hover:bg-yellow-400"
            >
              <Phone size={19} />
              Call Now : 9576822786
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}