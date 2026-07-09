import Image from "next/image";

const products = [
  {
    title: "Mobile Phones",
    image: "/images/DSC09059-01.jpeg",
    description: "Latest Android & iPhone smartphones from top brands.",
  },
  {
    title: "Mobile Accessories",
    image: "/images/DSC09063-01.jpeg",
    description: "Chargers, Earphones, Covers, Tempered Glass & more.",
  },
  {
    title: "Smart Watches",
    image: "/images/DSC09051-01.jpeg",
    description: "Premium smartwatches with health and fitness tracking.",
  },
  {
    title: "Home Appliances",
    image: "/images/DSC09068-01.jpeg",
    description: "Reliable home appliances for your everyday needs.",
  },
  {
    title: "Air Coolers",
    image: "/images/DSC09073-01.jpeg",
    description: "Energy-efficient air coolers for summer comfort.",
  },
  {
    title: "Electrical Accessories",
    image: "/images/DSC09040-01.jpeg",
    description: "Switches, Wires, LED Lights, Fans & Electrical Items.",
  },
];

export default function Products() {
  return (
    <section
      id="products"
      className="bg-gradient-to-b from-black via-zinc-950 to-black text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold">
            Our <span className="text-yellow-500">Products</span>
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Discover a wide range of premium telecom, mobile, and electrical
            products available at Habibi Telecom & Electrical.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {products.map((item, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 transition-all duration-300 hover:-translate-y-2 hover:border-yellow-500 hover:shadow-2xl hover:shadow-yellow-500/10"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-yellow-400">
                  {item.title}
                </h3>

                <p className="text-gray-400 text-sm leading-6">
                  {item.description}
                </p>

                <button className="mt-6 rounded-full bg-yellow-500 px-6 py-3 font-semibold text-black transition hover:bg-yellow-400">
                  View Collection →
                </button>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}