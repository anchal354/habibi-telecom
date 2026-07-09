"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const gallery = [
  "/images/shop.jpg",
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
  "/images/DSC09068-01.jpeg",
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const nextImage = () => {
    if (selectedImage === null) return;
    setSelectedImage((selectedImage + 1) % gallery.length);
  };

  const prevImage = () => {
    if (selectedImage === null) return;
    setSelectedImage((selectedImage - 1 + gallery.length) % gallery.length);
  };

  return (
    <section
      id="gallery"
      className="bg-gradient-to-b from-black via-[#111111] to-black text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-14">
          <span className="inline-block rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-sm uppercase tracking-[3px] text-yellow-400">
            Gallery
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold">
            Our <span className="text-yellow-400">Showroom</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-gray-400">
            Explore our showroom and premium collection of mobiles,
            accessories, electrical products and home appliances.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">

          {gallery.map((image, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(index)}
              className="group cursor-pointer overflow-hidden rounded-2xl border border-yellow-500/10 bg-zinc-900 transition-all duration-300 hover:-translate-y-2 hover:border-yellow-500 hover:shadow-2xl hover:shadow-yellow-500/10"
            >
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />
              </div>
            </div>
          ))}

        </div>

      </div>

      {/* Lightbox */}

      {selectedImage !== null && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95">

          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 rounded-full bg-white/10 p-3 hover:bg-yellow-500"
          >
            <X size={28} />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-6 rounded-full bg-white/10 p-3 hover:bg-yellow-500"
          >
            <ChevronLeft size={36} />
          </button>

          <div className="relative w-[90vw] h-[80vh]">

            <Image
              src={gallery[selectedImage]}
              alt="Gallery"
              fill
              className="object-contain"
            />

          </div>

          <button
            onClick={nextImage}
            className="absolute right-6 rounded-full bg-white/10 p-3 hover:bg-yellow-500"
          >
            <ChevronRight size={36} />
          </button>

        </div>
      )}

    </section>
  );
}