"use client";

import Image from "next/image";
import { useState } from "react";

import ProductModal from "./ProductModal";
import FadeUp from "./animations/FadeUp";
import ZoomIn from "./animations/ZoomIn";

const products = [
  {
    title: "Mobile Phones",
    image: "/images/DSC09059-01.jpeg",
    description:
      "Explore the latest smartphones from Samsung, Vivo, OPPO, Redmi, Realme and more with official warranty.",
    features: [
      "Latest Models",
      "Official Warranty",
      "Best Price",
      "EMI Available",
    ],
  },
  {
    title: "Mobile Accessories",
    image: "/images/DSC09063-01.jpeg",
    description:
      "Premium quality mobile accessories including chargers, earphones, covers and tempered glass.",
    features: [
      "Original Accessories",
      "Fast Charging",
      "Affordable Price",
      "Wide Collection",
    ],
  },
  {
    title: "Smart Watches",
    image: "/images/DSC09051-01.jpeg",
    description:
      "Stylish smartwatches with health tracking, calling and fitness features.",
    features: [
      "Bluetooth Calling",
      "Heart Rate Monitor",
      "Fitness Tracking",
      "Premium Brands",
    ],
  },
  {
    title: "Home Appliances",
    image: "/images/DSC09068-01.jpeg",
    description:
      "Quality home appliances for everyday convenience from trusted brands.",
    features: [
      "Trusted Brands",
      "Energy Efficient",
      "Latest Models",
      "Warranty Available",
    ],
  },
  {
    title: "Coolers",
    image: "/images/DSC09073-01.jpeg",
    description:
      "High-performance air coolers for home and office at the best prices.",
    features: [
      "Powerful Cooling",
      "Low Power Consumption",
      "Durable",
      "Affordable",
    ],
  },
  {
    title: "Electrical Accessories",
    image: "/images/DSC09040-01.jpeg",
    description:
      "Switches, wires, LED lights and all essential electrical accessories under one roof.",
    features: [
      "Premium Quality",
      "Safe & Reliable",
      "Latest Designs",
      "Best Prices",
    ],
  },
];

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  return (
    <>
      <section
        id="products"
        className="bg-gradient-to-b from-black via-zinc-950 to-black py-24 px-6 text-white"
      >
        <div className="mx-auto max-w-7xl">

          <FadeUp>
            <div className="mb-16 text-center">
              <span className="rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-sm uppercase tracking-[3px] text-yellow-400">
                Our Collection
              </span>

              <h2 className="mt-6 text-4xl font-bold md:text-5xl">
                Our <span className="text-yellow-500">Products</span>
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-gray-400">
                Discover a wide range of premium telecom, mobile and electrical
                products available at Habibi Telecom & Electrical.
              </p>
            </div>
          </FadeUp>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((item, index) => (
              <ZoomIn key={index} delay={index * 0.1}>
                <div className="group overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 transition-all duration-500 hover:-translate-y-3 hover:border-yellow-500 hover:shadow-2xl hover:shadow-yellow-500/20">

                  <div className="relative h-64 overflow-hidden">

                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100"></div>

                  </div>

                  <div className="p-6">

                    <h3 className="mb-3 text-2xl font-bold transition-colors duration-300 group-hover:text-yellow-400">
                      {item.title}
                    </h3>

                    <p className="leading-7 text-gray-400">
                      {item.description}
                    </p>

                    <button
                      onClick={() => setSelectedProduct(item)}
                      className="mt-8 rounded-full bg-yellow-500 px-6 py-3 font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-yellow-400"
                    >
                      View Collection →
                    </button>

                  </div>

                </div>
              </ZoomIn>
            ))}
          </div>
        </div>
      </section>

      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </>
  );
}