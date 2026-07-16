"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";

const navLinks = [
  {
    name: "Home",
    href: "#home",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Products",
    href: "#products",
  },
  {
    name: "Services",
    href: "#services",
  },
  {
    name: "Gallery",
    href: "#gallery",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isMenuOpen]);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-yellow-500/20 bg-black/90 shadow-lg backdrop-blur-xl">
      {/* Main Navbar */}

      <div className="mx-auto flex h-[72px] max-w-[1540px] items-center justify-between px-3 sm:h-[82px] sm:px-5 lg:px-8">
        {/* Logo */}

        <Link
          href="#home"
          onClick={closeMenu}
          className="flex min-w-0 items-center gap-2.5 sm:gap-3"
          aria-label="Habibi Telecom and Electrical home"
        >
          <div className="relative h-11 w-11 shrink-0 sm:h-14 sm:w-14">
            <Image
              src="/images/logo.png"
              alt="Habibi Telecom and Electrical logo"
              fill
              priority
              sizes="(max-width: 640px) 44px, 56px"
              className="object-contain"
            />
          </div>

          <div className="min-w-0 leading-tight">
            <h2 className="truncate text-lg font-extrabold tracking-wide text-yellow-400 sm:text-2xl">
              HABIBI
            </h2>

            <p className="whitespace-nowrap text-[10px] font-medium text-white sm:text-sm">
              Telecom &amp; Electrical
            </p>
          </div>
        </Link>

        {/* Desktop Menu */}

        <div className="hidden items-center gap-6 font-medium text-white xl:flex 2xl:gap-9">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative whitespace-nowrap py-2 transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-yellow-400 after:transition-all after:duration-300 hover:text-yellow-400 hover:after:w-full"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop Call Button */}

        <a
          href="tel:+919576822786"
          className="hidden shrink-0 items-center gap-2 rounded-full bg-yellow-500 px-5 py-3 font-bold text-black transition-all duration-300 hover:scale-105 hover:bg-yellow-400 xl:inline-flex"
        >
          <Phone size={19} />

          <span className="whitespace-nowrap">
            Call Now : 9576822786
          </span>
        </a>

        {/* Mobile Menu Button */}

        <button
          type="button"
          onClick={() => {
            setIsMenuOpen((previousValue) => !previousValue);
          }}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-yellow-500/40 text-yellow-400 transition-all duration-300 hover:bg-yellow-500 hover:text-black xl:hidden"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile and Tablet Menu */}

      {isMenuOpen && (
        <div
          id="mobile-navigation"
          className="absolute inset-x-0 top-full h-[calc(100dvh-72px)] overflow-y-auto border-t border-yellow-500/20 bg-black/[0.98] px-4 py-6 backdrop-blur-xl sm:h-[calc(100dvh-82px)] sm:px-6 xl:hidden"
        >
          <div className="mx-auto flex max-w-xl flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                className="rounded-xl border border-transparent px-5 py-4 text-lg font-medium text-white transition-all duration-300 hover:border-yellow-500/20 hover:bg-yellow-500/10 hover:text-yellow-400"
              >
                {link.name}
              </Link>
            ))}

            <a
              href="tel:+919576822786"
              onClick={closeMenu}
              className="mt-5 flex items-center justify-center gap-2 rounded-full bg-yellow-500 px-5 py-4 font-bold text-black transition-all duration-300 hover:bg-yellow-400"
            >
              <Phone size={20} />
              Call Now : 9576822786
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}