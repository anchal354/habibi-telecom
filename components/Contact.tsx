"use client";

import { useEffect, useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Clock,
  Navigation,
} from "lucide-react";

export default function Contact() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const checkShopStatus = () => {
      const now = new Date();

      const indiaTime = new Date(
        now.toLocaleString("en-US", {
          timeZone: "Asia/Kolkata",
        })
      );

      const day = indiaTime.getDay(); // 0 = Sunday, 5 = Friday
      const hour = indiaTime.getHours();
      const minute = indiaTime.getMinutes();

      const currentTime = hour + minute / 60;

      let open = false;

      if (day === 5) {
        // Friday
        open =
          (currentTime >= 8 && currentTime < 12) ||
          (currentTime >= 14 && currentTime < 22);
      } else {
        // Mon-Thu + Sat + Sun
        open = currentTime >= 8 && currentTime < 22;
      }

      setIsOpen(open);
    };

    checkShopStatus();

    const interval = setInterval(checkShopStatus, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-black via-[#111111] to-black text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-16">

          <span className="inline-block rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-sm uppercase tracking-[3px] text-yellow-400">
            Contact Us
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold">
            Get In <span className="text-yellow-400">Touch</span>
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-gray-400">
            Visit our showroom or connect with us through call,
            WhatsApp or Google Maps.
          </p>

          <div className="mt-8 flex justify-center">

            {isOpen ? (
              <span className="rounded-full border border-green-500 bg-green-500/20 px-6 py-3 font-semibold text-green-400">
                🟢 Open Now
              </span>
            ) : (
              <span className="rounded-full border border-red-500 bg-red-500/20 px-6 py-3 font-semibold text-red-400">
                🔴 Closed Now
              </span>
            )}

          </div>

        </div>

        {/* Contact Grid */}

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Left */}

          <div className="space-y-6">

           <div className="rounded-2xl border border-yellow-500/10 bg-zinc-900 p-6 flex gap-4 hover:border-yellow-500 transition">

  <Phone className="text-yellow-400" size={28} />

  <div>

    <h3 className="text-xl font-bold">
      Phone
    </h3>

    <a
      href="tel:+919576822786"
      className="block text-gray-300 hover:text-yellow-400"
    >
      +91 95768 22786
    </a>

    <a
      href="tel:+918092330510"
      className="block mt-2 text-gray-300 hover:text-yellow-400"
    >
      +91 80923 30510 (Alternate)
    </a>

  </div>

</div>

            <div className="rounded-2xl border border-yellow-500/10 bg-zinc-900 p-6 flex gap-4 hover:border-yellow-500 transition">

              <Mail className="text-yellow-400" size={28} />

              <div>

                <h3 className="text-xl font-bold">
                  Email
                </h3>

                <a
                  href="mailto:dshadab71@gmail.com"
                  className="text-gray-300 hover:text-yellow-400"
                >
                  dshadab71@gmail.com
                </a>

              </div>

            </div>

            <div className="rounded-2xl border border-yellow-500/10 bg-zinc-900 p-6 flex gap-4 hover:border-yellow-500 transition">

              <MapPin className="text-yellow-400" size={28} />

              <div>

                <h3 className="text-xl font-bold">
                  Address
                </h3>

                <p className="text-gray-300">
                 Bansdih Chowk Hayaghat - Hathouri,
                  <br />
                  Kothi Road,
                  <br />
                  Bansdih,
                  Bihar - 847301
                </p>

              </div>

            </div>

            <div className="rounded-2xl border border-yellow-500/10 bg-zinc-900 p-6 flex gap-4 hover:border-yellow-500 transition">

              <Clock className="text-yellow-400" size={28} />

              <div>

                <h3 className="text-xl font-bold">
                  Shop Timings
                </h3>

                <div className="mt-3 space-y-2 text-gray-300">

                  <p>Monday : 8:00 AM – 10:00 PM</p>
                  <p>Tuesday : 8:00 AM – 10:00 PM</p>
                  <p>Wednesday : 8:00 AM – 10:00 PM</p>
                  <p>Thursday : 8:00 AM – 10:00 PM</p>
                  <p>Friday : 8:00 AM – 12:00 PM & 2:00 PM – 10:00 PM</p>
                  <p>Saturday : 8:00 AM – 10:00 PM</p>
                  <p>Sunday : 8:00 AM – 10:00 PM</p>

                </div>

              </div>

            </div>

          </div>

        {/* Right */}

<div className="self-start h-fit rounded-3xl border border-yellow-500/20 bg-zinc-900 p-8">

  <span className="inline-block rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-2 text-sm font-semibold text-yellow-400">
    Need Any Help?
  </span>

  <h3 className="mt-5 text-3xl font-bold text-white">
    We're Here to Help You
  </h3>

  <p className="mt-4 leading-8 text-gray-400">
    Looking for the latest mobile phones, accessories or electrical products?
    Visit our store or contact us anytime. Our team is always ready to assist you.
  </p>

  {/* Features */}

  <div className="mt-8 space-y-4">

    <div className="flex items-center gap-3 text-lg">
      <span className="text-green-400 text-xl">✔</span>
      <span>Genuine Products</span>
    </div>

    <div className="flex items-center gap-3 text-lg">
      <span className="text-green-400 text-xl">✔</span>
      <span>Best Price Guarantee</span>
    </div>

    <div className="flex items-center gap-3 text-lg">
      <span className="text-green-400 text-xl">✔</span>
      <span>Expert Guidance</span>
    </div>

    <div className="flex items-center gap-3 text-lg">
      <span className="text-green-400 text-xl">✔</span>
      <span>Fast Customer Support</span>
    </div>

  </div>

  {/* Buttons */}

  <div className="mt-10 space-y-4">

    <a
      href="https://wa.me/919576822786"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center rounded-full bg-green-500 px-6 py-4 font-bold text-white transition hover:bg-green-600 hover:scale-105"
    >
      💬 Chat on WhatsApp
    </a>

    <a
      href="https://www.google.com/maps/place/HABIBI+TELECOM+AND+ELECTRICAL/@25.9771123,85.9260907,17z"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center rounded-full border border-yellow-500 px-6 py-4 font-bold text-yellow-400 transition hover:bg-yellow-500 hover:text-black hover:scale-105"
    >
      📍 Get Directions
    </a>

  </div>

  {/* Bottom Card */}

  <div className="mt-10 rounded-2xl border border-yellow-500/20 bg-black/40 p-6">

    <p className="text-xl font-semibold text-yellow-400">
      ⭐ 5000+ Happy Customers
    </p>

    <p className="mt-2 text-gray-300">
      ⭐ Trusted Local Store
    </p>

  </div>

</div>

        </div>

        {/* Google Map */}

        <div className="mt-20">

          <h3 className="text-3xl font-bold text-center mb-8">
            Find Our <span className="text-yellow-400">Location</span>
          </h3>

          <div className="overflow-hidden rounded-3xl border border-yellow-500/20 shadow-2xl">

            <iframe
              src="https://www.google.com/maps?q=25.9771123,85.9260907&z=17&output=embed"
              width="100%"
              height="500"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

          </div>

          <div className="flex justify-center mt-8">

            <a
              href="https://www.google.com/maps/place/HABIBI+TELECOM+AND+ELECTRICAL/@25.9771123,85.9260907,17z"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-yellow-500 px-8 py-4 font-bold text-black hover:bg-yellow-400 transition hover:scale-105"
            >
              <Navigation size={20} />
              Open in Google Maps
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}