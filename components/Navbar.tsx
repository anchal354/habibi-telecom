import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        <div className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="Habibi Logo"
            width={55}
            height={55}
          />

          <div>
            <h2 className="text-yellow-400 font-bold text-xl">
              HABIBI
            </h2>
            <p className="text-white text-xs">
              Telecom & Electrical
            </p>
          </div>
        </div>

        <div className="hidden md:flex gap-8 text-white font-medium">
          <Link href="/">Home</Link>
          <Link href="#about">About</Link>
          <Link href="#products">Products</Link>
          <Link href="#gallery">Gallery</Link>
          <Link href="#contact">Contact</Link>
        </div>

      </div>
    </nav>
  );
}