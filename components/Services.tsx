import {
  Smartphone,
  Tv,
  ShieldCheck,
  Fan,
  BatteryCharging,
  Truck,
} from "lucide-react";

const services = [
  {
    icon: Smartphone,
    title: "Mobile Phones",
    desc: "Latest smartphones from top brands at the best prices.",
  },
  {
    icon: Tv,
    title: "Home Appliances",
    desc: "LED TVs, refrigerators, washing machines and more.",
  },
  {
    icon: ShieldCheck,
    title: "CCTV Solutions",
    desc: "High-quality CCTV cameras for home and office security.",
  },
  {
    icon: Fan,
    title: "Electrical Items",
    desc: "Fans, coolers, lights, switches and electrical accessories.",
  },
  {
    icon: BatteryCharging,
    title: "Inverters & Batteries",
    desc: "Reliable power backup solutions for homes and businesses.",
  },
  {
    icon: Truck,
    title: "Home Delivery",
    desc: "Fast and safe delivery with complete customer support.",
  },
];

export default function Services() {
  return (
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
                className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-yellow-500 transition-all duration-300 hover:-translate-y-2"
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
  );
}