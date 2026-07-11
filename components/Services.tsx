/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import { useState } from "react";
import {
  Smartphone,
  Tv,
  ShieldCheck,
  Fan,
  BatteryCharging,
  Truck,
} from "lucide-react";

import FadeUp from "./animations/FadeUp";
import ZoomIn from "./animations/ZoomIn";
import ServiceModal from "./ServiceModal";

const services = [
  {
    icon: Smartphone,
    title: "Mobile Phones",
    desc: "Latest smartphones from top brands at the best prices.",
    details: [
      "Samsung, Vivo, OPPO, Redmi & Realme",
      "Latest 5G Smartphones",
      "Official Brand Warranty",
      "EMI Available",
      "Best Price Guarantee",
    ],
  },
  {
    icon: Tv,
    title: "Home Appliances",
    desc: "LED TVs, refrigerators, washing machines and more.",
    details: [
      "LED TVs",
      "Refrigerators",
      "Washing Machines",
      "Kitchen Appliances",
      "Trusted Brands",
    ],
  },
  {
    icon: ShieldCheck,
    title: "CCTV Solutions",
    desc: "High-quality CCTV cameras for home and office security.",
    details: [
      "HD & IP Cameras",
      "Home Security",
      "Office Security",
      "Installation Support",
      "After Sales Service",
    ],
  },
  {
    icon: Fan,
    title: "Electrical Items",
    desc: "Fans, coolers, lights, switches and electrical accessories.",
    details: [
      "LED Lights",
      "Ceiling Fans",
      "Coolers",
      "Switches & Wires",
      "Electrical Accessories",
    ],
  },
  {
    icon: BatteryCharging,
    title: "Inverters & Batteries",
    desc: "Reliable power backup solutions for homes and businesses.",
    details: [
      "Home Inverters",
      "Power Backup",
      "Long Life Batteries",
      "Installation Support",
      "Warranty Available",
    ],
  },
  {
    icon: Truck,
    title: "Home Delivery",
    desc: "Fast and safe delivery with complete customer support.",
    details: [
      "Same Day Delivery (Nearby)",
      "Safe Packaging",
      "Fast Delivery",
      "Customer Support",
      "Easy Assistance",
    ],
  },
];

export default function Services() {
  const [selectedService, setSelectedService] = useState<any>(null);

  return (
    <>
      <section
        id="services"
        className="bg-[#0d0d0d] py-20 px-6 text-white"
      >
        <div className="max-w-7xl mx-auto">

          <FadeUp>
            <h2 className="text-center text-4xl font-bold">
              Our <span className="text-yellow-500">Services</span>
            </h2>

            <p className="mt-4 mb-14 text-center text-gray-400">
              We provide premium telecom and electrical solutions with trusted
              customer service.
            </p>
          </FadeUp>

          <div className="grid gap-8 md:grid-cols-3">

            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <ZoomIn key={index} delay={index * 0.1}>
                  <div
                    onClick={() => setSelectedService(service)}
                    className="group cursor-pointer rounded-2xl border border-zinc-800 bg-zinc-900 p-8 transition-all duration-500 hover:-translate-y-3 hover:border-yellow-500 hover:shadow-2xl hover:shadow-yellow-500/20"
                  >
                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-yellow-500 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                      <Icon
                        size={32}
                        className="text-black transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>

                    <h3 className="mb-4 text-2xl font-semibold transition-colors duration-300 group-hover:text-yellow-400">
                      {service.title}
                    </h3>

                    <p className="leading-7 text-gray-400">
                      {service.desc}
                    </p>

                    <div className="mt-6 flex items-center text-sm font-semibold text-yellow-400 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                      Click to Know More →
                    </div>
                  </div>
                </ZoomIn>
              );
            })}

          </div>
        </div>
      </section>

      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
      />
    </>
  );
}