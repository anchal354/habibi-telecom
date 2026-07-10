import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-yellow-500/20 text-white">

      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-12">

        {/* Logo */}

        <div>

          <div className="flex items-center gap-3">

            <Image
              src="/images/logo.png"
              alt="Habibi Logo"
              width={55}
              height={55}
            />

            <div>

              <h2 className="text-2xl font-bold text-yellow-400">
                HABIBI
              </h2>

              <p className="text-sm text-gray-400">
                Telecom & Electrical
              </p>

            </div>

          </div>

          <p className="mt-6 leading-8 text-gray-400">
            Your trusted destination for Mobile Phones,
            Accessories, Home Appliances, Electrical Products,
            CCTV, Inverters and Premium Electronics.
          </p>

        </div>

        {/* Quick Links */}

        <div>

          <h3 className="text-xl font-bold text-yellow-400 mb-6">
            Quick Links
          </h3>

          <div className="flex flex-col gap-4">

            <Link href="/">Home</Link>
            <Link href="#about">About</Link>
            <Link href="#products">Products</Link>
            <Link href="#gallery">Gallery</Link>
            <Link href="#contact">Contact</Link>

          </div>

        </div>

        {/* Contact */}

        <div>

          <h3 className="text-xl font-bold text-yellow-400 mb-6">
            Contact
          </h3>

          <div className="space-y-5">

            <div className="flex gap-3">
              <Phone className="text-yellow-400" size={18} />
              <span>+91 95768 22786</span>
            </div>

            <div className="flex gap-3">
              <Phone className="text-yellow-400" size={18} />
              <span>+91 80923 30510</span>
            </div>

            <div className="flex gap-3">
              <Mail className="text-yellow-400" size={18} />
              <span>dshadab71@gmail.com</span>
            </div>

            <div className="flex gap-3">
              <MapPin className="text-yellow-400" size={18} />
              <span>
                Hayaghat - Hathouri,
                Kothi Road,
                Bihar - 847301
              </span>
            </div>

          </div>

        </div>

        {/* Connect */}

        <div>

          <h3 className="text-xl font-bold text-yellow-400 mb-6">
            Connect With Us
          </h3>

          <div className="space-y-4">

            <a
              href="https://wa.me/919576822786"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl bg-green-500 px-5 py-3 font-semibold hover:bg-green-600 transition"
            >
              <MessageCircle size={20} />
              WhatsApp
            </a>

            <a
              href="https://www.google.com/maps/place/HABIBI+TELECOM+AND+ELECTRICAL/@25.9771123,85.9260907,17z"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl border border-yellow-500 px-5 py-3 text-yellow-400 hover:bg-yellow-500 hover:text-black transition"
            >
              <MapPin size={20} />
              Google Maps
            </a>

          </div>

        </div>

      </div>

      {/* Bottom */}

      <div className="border-t border-zinc-800">

        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-gray-400 text-center">
            © 2026 <span className="text-yellow-400">Habibi Telecom & Electrical</span>.
            All Rights Reserved.
          </p>

          <p className="text-gray-500 text-sm">
            Designed with ❤️ for Habibi Telecom
          </p>

        </div>

      </div>

    </footer>
  );
}