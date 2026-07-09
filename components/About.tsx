export default function About() {
  return (
    <section
      id="about"
      className="bg-[#0d0d0d] text-white py-20 px-6"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Left */}
        <div>
          <p className="text-yellow-500 font-semibold uppercase tracking-widest">
            About Us
          </p>

          <h2 className="text-4xl font-bold mt-4">
            Welcome to
            <span className="text-yellow-500">
              {" "}Habibi Telecom & Electrical
            </span>
          </h2>

          <p className="text-gray-300 mt-6 leading-8">
            Habibi Telecom & Electrical is your trusted destination for
            mobile phones, accessories, home appliances, electrical items,
            CCTV cameras, inverters, fans, coolers and premium electronics.
          </p>

          <p className="text-gray-400 mt-4 leading-8">
            We believe in genuine products, affordable pricing and excellent
            customer service. Our experienced team helps customers choose
            the right products according to their needs.
          </p>

          <div className="grid grid-cols-2 gap-6 mt-10">

            <div className="bg-zinc-900 p-5 rounded-xl border border-zinc-800">
              <h3 className="text-3xl font-bold text-yellow-500">
                5000+
              </h3>
              <p className="text-gray-300 mt-2">
                Happy Customers
              </p>
            </div>

            <div className="bg-zinc-900 p-5 rounded-xl border border-zinc-800">
              <h3 className="text-3xl font-bold text-yellow-500">
                100+
              </h3>
              <p className="text-gray-300 mt-2">
                Premium Products
              </p>
            </div>

          </div>
        </div>

        {/* Right */}
        <div>
          <img
            src="/images/shop.jpg"
            alt="Habibi Telecom Shop"
            className="rounded-2xl shadow-2xl"
          />
        </div>

      </div>
    </section>
  );
}