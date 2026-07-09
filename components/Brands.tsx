import {
  Smartphone,
  Headphones,
  Tv,
  Lightbulb,
  BatteryCharging,
  Wifi,
  ShieldCheck,
  Zap,
} from "lucide-react";

const brands = [
  {
    name: "Samsung",
    icon: Smartphone,
  },
  {
    name: "Vivo",
    icon: Smartphone,
  },
  {
    name: "OPPO",
    icon: Smartphone,
  },
  {
    name: "realme",
    icon: Smartphone,
  },
  {
    name: "Redmi",
    icon: Smartphone,
  },
  {
    name: "boAt",
    icon: Headphones,
  },
  {
    name: "Havells",
    icon: Lightbulb,
  },
  {
    name: "Crompton",
    icon: Zap,
  },
  {
    name: "Luminous",
    icon: BatteryCharging,
  },
  {
    name: "TP-Link",
    icon: Wifi,
  },
  {
    name: "CP Plus",
    icon: ShieldCheck,
  },
  {
    name: "LG",
    icon: Tv,
  },
];

export default function Brands() {
  return (
    <section
      id="brands"
      className="bg-gradient-to-b from-black via-[#111111] to-black text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-14">

          <span className="inline-block px-5 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 uppercase tracking-[3px] text-sm">
            Top Brands
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-6">
            Trusted <span className="text-yellow-400">Brands</span>
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            We offer genuine products from India's most trusted
            mobile, electronics and electrical brands.
          </p>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

          {brands.map((brand, index) => {
            const Icon = brand.icon;

            return (
              <div
                key={index}
                className="group rounded-2xl border border-yellow-500/10 bg-zinc-900 p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:border-yellow-500 hover:shadow-xl hover:shadow-yellow-500/10"
              >
                <Icon
                  size={42}
                  className="mx-auto text-yellow-400 transition-transform duration-300 group-hover:scale-110"
                />

                <h3 className="mt-5 text-2xl font-bold">
                  {brand.name}
                </h3>

                <p className="mt-2 text-sm text-gray-400">
                  Authorized Brand
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}