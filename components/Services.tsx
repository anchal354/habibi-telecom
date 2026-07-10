
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

        <h2 className="text-4xl font-bold text-center">
          Our <span className="text-yellow-500">Services</span>
        </h2>

        <p className="text-center text-gray-400 mt-4 mb-14">
          We provide premium telecom and electrical solutions with trusted customer service.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {services.map((service, index) => {
  const Icon = service.icon;

  return (
    <div
      key={index}
      onClick={() => setSelectedService(service)}
      className="cursor-pointer bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-yellow-500 transition-all duration-300 hover:-translate-y-2"
    >
                <div className="w-16 h-16 rounded-full bg-yellow-500 flex items-center justify-center mb-6">
                  <Icon size={32} className="text-black" />
                </div>

                <h3 className="text-2xl font-semibold mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-400 leading-7">
                  {service.desc}
                </p>
              </div>
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