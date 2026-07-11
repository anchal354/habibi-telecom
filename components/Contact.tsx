"use client";

import { useEffect, useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Clock,
  Navigation,
  CheckCircle2,
} from "lucide-react";

import FadeUp from "./animations/FadeUp";
import FadeLeft from "./animations/FadeLeft";
import FadeRight from "./animations/FadeRight";
import ZoomIn from "./animations/ZoomIn";
import MagneticButton from "./animations/MagneticButton";

const googleMapsLink =
  "https://www.google.com/maps/place/HABIBI+TELECOM+AND+ELECTRICAL/@25.9771123,85.9260907,17z";

export default function Contact() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const checkShopStatus = () => {
      const indiaTime = new Date(
        new Date().toLocaleString("en-US", {
          timeZone: "Asia/Kolkata",
        })
      );

      const day = indiaTime.getDay();
      const hour = indiaTime.getHours();
      const minute = indiaTime.getMinutes();
      const currentTime = hour + minute / 60;

      let shopIsOpen = false;

      if (day === 5) {
        // Friday: 8 AM–12 PM and 2 PM–10 PM
        shopIsOpen =
          (currentTime >= 8 && currentTime < 12) ||
          (currentTime >= 14 && currentTime < 22);
      } else {
        // Other days: 8 AM–10 PM
        shopIsOpen = currentTime >= 8 && currentTime < 22;
      }

      setIsOpen(shopIsOpen);
    };

    checkShopStatus();

    const interval = window.setInterval(checkShopStatus, 60000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-black via-[#111111] to-black px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <FadeUp>
          <div className="mb-16 text-center">
            <span className="inline-block rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-sm uppercase tracking-[3px] text-yellow-400">
              Contact Us
            </span>

            <h2 className="mt-6 text-4xl font-bold md:text-5xl">
              Get In <span className="text-yellow-400">Touch</span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-gray-400">
              Visit our showroom or connect with us through call, WhatsApp or
              Google Maps.
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
        </FadeUp>

        {/* Contact Grid */}
        <div className="grid items-start gap-10 lg:grid-cols-2">
          {/* Left Side */}
          <FadeLeft>
            <div className="space-y-6">
              <ZoomIn delay={0.05}>
                <div className="group flex gap-4 rounded-3xl border border-yellow-500/10 bg-zinc-900 p-6 transition-all duration-500 hover:-translate-y-2 hover:border-yellow-500 hover:shadow-[0_0_35px_rgba(234,179,8,0.18)]">
                  <Phone
                    size={28}
                    className="shrink-0 text-yellow-400 transition-transform duration-300 group-hover:scale-110"
                  />

                  <div>
                    <h3 className="text-xl font-bold">Phone</h3>

                    <a
                      href="tel:+919576822786"
                      className="mt-2 block text-gray-300 transition hover:text-yellow-400"
                    >
                      +91 95768 22786
                    </a>

                    <a
                      href="tel:+918092330510"
                      className="mt-2 block text-gray-300 transition hover:text-yellow-400"
                    >
                      +91 80923 30510 (Alternate)
                    </a>
                  </div>
                </div>
              </ZoomIn>

              <ZoomIn delay={0.1}>
                <div className="group flex gap-4 rounded-3xl border border-yellow-500/10 bg-zinc-900 p-6 transition-all duration-500 hover:-translate-y-2 hover:border-yellow-500 hover:shadow-[0_0_35px_rgba(234,179,8,0.18)]">
                  <Mail
                    size={28}
                    className="shrink-0 text-yellow-400 transition-transform duration-300 group-hover:scale-110"
                  />

                  <div>
                    <h3 className="text-xl font-bold">Email</h3>

                    <a
                      href="mailto:dshadab71@gmail.com"
                      className="mt-2 block break-all text-gray-300 transition hover:text-yellow-400"
                    >
                      dshadab71@gmail.com
                    </a>
                  </div>
                </div>
              </ZoomIn>

              <ZoomIn delay={0.15}>
                <div className="group flex gap-4 rounded-3xl border border-yellow-500/10 bg-zinc-900 p-6 transition-all duration-500 hover:-translate-y-2 hover:border-yellow-500 hover:shadow-[0_0_35px_rgba(234,179,8,0.18)]">
                  <MapPin
                    size={28}
                    className="shrink-0 text-yellow-400 transition-transform duration-300 group-hover:scale-110"
                  />

                  <div>
                    <h3 className="text-xl font-bold">Address</h3>

                    <p className="mt-2 leading-7 text-gray-300">
                      Bansdih Chowk, Hayaghat–Hathouri,
                      <br />
                      Kothi Road, Bansdih,
                      <br />
                      Bihar – 847301
                    </p>
                  </div>
                </div>
              </ZoomIn>

              <ZoomIn delay={0.2}>
                <div className="group flex gap-4 rounded-3xl border border-yellow-500/10 bg-zinc-900 p-6 transition-all duration-500 hover:-translate-y-2 hover:border-yellow-500 hover:shadow-[0_0_35px_rgba(234,179,8,0.18)]">
                  <Clock
                    size={28}
                    className="shrink-0 text-yellow-400 transition-transform duration-300 group-hover:scale-110"
                  />

                  <div className="w-full">
                    <h3 className="text-xl font-bold">Shop Timings</h3>

                    <div className="mt-4 space-y-2 text-sm leading-6 text-gray-300 sm:text-base">
                      <p>Monday: 8:00 AM – 10:00 PM</p>
                      <p>Tuesday: 8:00 AM – 10:00 PM</p>
                      <p>Wednesday: 8:00 AM – 10:00 PM</p>
                      <p>Thursday: 8:00 AM – 10:00 PM</p>
                      <p>
                        Friday: 8:00 AM – 12:00 PM &amp; 2:00 PM – 10:00 PM
                      </p>
                      <p>Saturday: 8:00 AM – 10:00 PM</p>
                      <p>Sunday: 8:00 AM – 10:00 PM</p>
                    </div>
                  </div>
                </div>
              </ZoomIn>
            </div>
          </FadeLeft>

          {/* Right Side */}
          <FadeRight>
            <div className="self-start rounded-3xl border border-yellow-500/20 bg-zinc-900 p-8 transition-all duration-500 hover:border-yellow-500/60 hover:shadow-[0_0_45px_rgba(234,179,8,0.16)] md:p-10">
              <span className="inline-block rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-2 text-sm font-semibold text-yellow-400">
                Need Any Help?
              </span>

              <h3 className="mt-6 text-3xl font-bold text-white">
                We&apos;re Here to Help You
              </h3>

              <p className="mt-5 leading-8 text-gray-400">
                Looking for the latest mobile phones, accessories or electrical
                products? Visit our store or contact us anytime. Our team is
                always ready to assist you.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Genuine Products",
                  "Best Price Guarantee",
                  "Expert Guidance",
                  "Fast Customer Support",
                ].map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3 text-lg"
                  >
                    <CheckCircle2
                      size={22}
                      className="shrink-0 text-green-400"
                    />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10 space-y-4">
                <MagneticButton>
                  <a
                    href="https://wa.me/919576822786?text=Hello%20Habibi%20Telecom%20%26%20Electrical,%20I%20want%20to%20know%20more%20about%20your%20products."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-3 rounded-full bg-green-500 px-6 py-4 font-bold text-white transition hover:bg-green-600"
                  >
                    <MessageCircle size={22} />
                    Chat on WhatsApp
                  </a>
                </MagneticButton>

                <MagneticButton>
                  <a
                    href={googleMapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-3 rounded-full border border-yellow-500 px-6 py-4 font-bold text-yellow-400 transition hover:bg-yellow-500 hover:text-black"
                  >
                    <Navigation size={22} />
                    Get Directions
                  </a>
                </MagneticButton>
              </div>

              <div className="mt-10 rounded-2xl border border-yellow-500/20 bg-black/40 p-6">
                <p className="text-xl font-semibold text-yellow-400">
                  ⭐ 5000+ Happy Customers
                </p>

                <p className="mt-2 text-gray-300">
                  ⭐ Trusted Local Store
                </p>
              </div>
            </div>
          </FadeRight>
        </div>

        {/* Google Map */}
        <FadeUp delay={0.2}>
          <div className="mt-20">
            <h3 className="mb-8 text-center text-3xl font-bold">
              Find Our <span className="text-yellow-400">Location</span>
            </h3>

            <div className="overflow-hidden rounded-3xl border border-yellow-500/20 shadow-2xl transition duration-500 hover:border-yellow-500/60 hover:shadow-[0_0_45px_rgba(234,179,8,0.15)]">
              <iframe
                title="Habibi Telecom and Electrical location"
                src="https://www.google.com/maps?q=25.9771123,85.9260907&z=17&output=embed"
                width="100%"
                height="500"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                className="block w-full"
              />
            </div>

            <div className="mt-8 flex justify-center">
              <MagneticButton>
                <a
                  href={googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 rounded-full bg-yellow-500 px-8 py-4 font-bold text-black transition hover:bg-yellow-400"
                >
                  <Navigation size={20} />
                  Open in Google Maps
                </a>
              </MagneticButton>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}