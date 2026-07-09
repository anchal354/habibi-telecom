const brands = [
  "Samsung",
  "Vivo",
  "OPPO",
  "realme",
  "Redmi",
  "boAt",
  "Havells",
  "Crompton",
];

export default function Brands() {
  return (
    <section
      id="brands"
      className="bg-black text-white py-20 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold text-center">
          Trusted <span className="text-yellow-500">Brands</span>
        </h2>

        <p className="text-center text-gray-400 mt-4 mb-12">
          We deal with India's most trusted mobile and electronics brands.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {brands.map((brand) => (
            <div
              key={brand}
              className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 text-center hover:border-yellow-500 hover:scale-105 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-yellow-500">
                {brand}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}