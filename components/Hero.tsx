import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden">

      <Image
        src="/images/front.jpeg"
        alt="Habibi Telecom"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/70"></div>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">

        <Image
          src="/images/logo.png"
          alt="Habibi Logo"
          width={170}
          height={170}
          className="mb-6 rounded-full"
        />

        <h1 className="text-5xl md:text-7xl font-bold text-yellow-400">
          HABIBI
        </h1>

        <h2 className="text-3xl md:text-5xl font-semibold text-white mt-3">
          TELECOM & ELECTRICAL
        </h2>

        <p className="max-w-3xl mt-6 text-lg text-gray-200">
          Your Trusted Destination for Mobile Phones, Home Appliances,
          Electrical Accessories, CCTV, Inverters, Fans, Coolers,
          and Premium Electronics.
        </p>

        <div className="flex gap-5 mt-10">

          <a
            href="tel:+919576822786"
            className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-lg font-bold"
          >
            Call Now
          </a>

          <a
            href="https://wa.me/919576822786"
            target="_blank"
            className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-black font-bold"
          >
            WhatsApp
          </a>

        </div>

      </div>

    </section>
  );
}