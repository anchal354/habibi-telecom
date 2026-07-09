import Image from "next/image";
import { Phone, ShieldCheck, BadgeCheck, Star } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="bg-gradient-to-b from-black via-[#111111] to-black text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Image */}
        <div className="relative group">

          <div className="absolute -inset-2 rounded-3xl bg-yellow-500/20 blur-xl opacity-0 group-hover:opacity-100 transition duration-500"></div>

          <div className="relative overflow-hidden rounded-3xl border border-yellow-500/20">

            <Image
              src="/images/shop.jpg"
              alt="Habibi Telecom Shop"
              width={700}
              height={700}
              className="w-full h-[550px] object-cover transition duration-700 group-hover:scale-105"
            />

          </div>

        </div>

        {/* Right Content */}
        <div>

          <span className="inline-block px-5 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 uppercase tracking-[3px] text-sm">
            About Habibi
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-6 leading-tight">
            Your Trusted
            <span className="text-yellow-400">
              {" "}Telecom & Electrical{" "}
            </span>
            Partner
          </h2>

          <p className="mt-8 text-gray-300 leading-8 text-lg">
            Habibi Telecom & Electrical is your trusted destination for
            Mobile Phones, Accessories, Smart Watches, Home Appliances,
            Electrical Products, CCTV Cameras, Inverters, Fans, Coolers,
            LED Lights and much more.
          </p>

          <p className="mt-5 text-gray-400 leading-8">
            We focus on genuine products, affordable pricing, trusted
            brands and excellent customer service to ensure every customer
            leaves satisfied.
          </p>

          {/* Features */}

          <div className="grid sm:grid-cols-2 gap-5 mt-10">

            <div className="flex items-center gap-3">
              <ShieldCheck className="text-yellow-400" />
              <span>100% Genuine Products</span>
            </div>

            <div className="flex items-center gap-3">
              <BadgeCheck className="text-yellow-400" />
              <span>Trusted Brands</span>
            </div>

            <div className="flex items-center gap-3">
              <Star className="text-yellow-400" />
              <span>Affordable Prices</span>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="text-yellow-400" />
              <span>Friendly Customer Support</span>
            </div>

          </div>

          {/* Stats */}

          <div className="grid grid-cols-2 gap-6 mt-12">

            <div className="rounded-2xl border border-yellow-500/20 bg-zinc-900 p-6 text-center hover:border-yellow-500 transition">

              <h3 className="text-4xl font-bold text-yellow-400">
                5000+
              </h3>

              <p className="mt-2 text-gray-300">
                Happy Customers
              </p>

            </div>

            <div className="rounded-2xl border border-yellow-500/20 bg-zinc-900 p-6 text-center hover:border-yellow-500 transition">

              <h3 className="text-4xl font-bold text-yellow-400">
                1000+
              </h3>

              <p className="mt-2 text-gray-300">
                Products Available
              </p>

            </div>

          </div>

          {/* Button */}

          <a
            href="tel:+919576822786"
            className="inline-flex items-center gap-3 mt-10 rounded-full bg-yellow-500 px-8 py-4 font-bold text-black hover:bg-yellow-400 transition"
          >
            <Phone size={20} />
            Call Now
          </a>

        </div>

      </div>
    </section>
  );
}