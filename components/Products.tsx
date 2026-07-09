const products = [
  {
    title: "Mobile Phones",
    image: "/images/DSC09059-01.jpeg",
  },
  {
    title: "Mobile Accessories",
    image: "/images/DSC09063-01.jpeg",
  },
  {
    title: "Smart Watches",
    image: "/images/DSC09051-01.jpeg",
  },
  {
    title: "Home Appliances",
    image: "/images/DSC09068-01.jpeg",
  },
  {
    title: "Coolers",
    image: "/images/DSC09073-01.jpeg",
  },
  {
    title: "Electrical Accessories",
    image: "/images/DSC09040-01.jpeg",
  },
];
export default function Products() {
  return (
    <section
      id="products"
      className="bg-black text-white py-20 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold text-center">
          Our <span className="text-yellow-500">Products</span>
        </h2>

        <p className="text-center text-gray-400 mt-4 mb-12">
          Explore our wide range of premium electronics and electrical products.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {products.map((item, index) => (
            <div
              key={index}
              className="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:border-yellow-500 duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-64 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-semibold">
                  {item.title}
                </h3>

                <button className="mt-5 bg-yellow-500 text-black px-5 py-2 rounded-lg font-semibold hover:bg-yellow-400">
                  View Products
                </button>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}