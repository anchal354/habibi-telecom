const gallery = [
  "/images/shop.jpg",
  //"/images/DSC09035-01.jpeg",
  "/images/DSC09040-01.jpeg",
  "/images/DSC09042-01.jpeg",
  "/images/DSC09051-01.jpeg",
  "/images/DSC09054-01.jpeg",
  "/images/DSC09056-01.jpeg",
  "/images/DSC09058-01.jpeg",
  "/images/DSC09073-01.jpeg",
  "/images/DSC09069-01.jpeg",
  "/images/DSC09041-01.jpeg",
  "/images/DSC09052-01.jpeg",
  "/images/DSC09059-01.jpeg",
  "/images/DSC09063-01.jpeg",
  "/images/DSC09064-01.jpeg",

  "/images/DSC09068-01.jpeg"





];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="bg-[#0d0d0d] text-white py-20 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold text-center">
          Shop <span className="text-yellow-500">Gallery</span>
        </h2>

        <p className="text-center text-gray-400 mt-4 mb-12">
          A glimpse of our showroom and premium product collection.
        </p>

        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-5">

          {gallery.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl border border-zinc-800 hover:border-yellow-500 transition-all duration-300"
            >
              <img
                src={image}
                alt="Gallery"
                className="w-full h-64 object-cover hover:scale-110 duration-500"
              />
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}