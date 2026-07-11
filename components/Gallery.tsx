"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import FadeUp from "./animations/FadeUp";
import ZoomIn from "./animations/ZoomIn";

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

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return;

      if (e.key === "Escape") {
        setSelectedImage(null);
      }

      if (e.key === "ArrowRight") {
        nextImage();
      }

      if (e.key === "ArrowLeft") {
        prevImage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage]);

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

       <FadeUp>
  <div className="mb-14 text-center">
    <span className="inline-block rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-sm uppercase tracking-[3px] text-yellow-400">
      Gallery
    </span>

    <h2 className="mt-6 text-4xl font-bold md:text-5xl">
      Our <span className="text-yellow-400">Showroom</span>
    </h2>

    <p className="mx-auto mt-5 max-w-2xl text-gray-400">
      Explore our showroom and premium collection of mobiles,
      accessories, electrical products and home appliances.
    </p>
  </div>
</FadeUp>
        <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">

         {gallery.map((image, index) => (
  <ZoomIn key={index} delay={index * 0.05}>
    <div
      onClick={() => setSelectedImage(index)}
className="group cursor-pointer overflow-hidden rounded-3xl border border-yellow-500/10 bg-zinc-900 transition-all duration-500 hover:-translate-y-4 hover:scale-[1.02] hover:border-yellow-500 hover:shadow-[0_0_40px_rgba(234,179,8,0.25)]"    >
      <div className="relative h-72 overflow-hidden">

        <Image
          src={image}
          alt={`Gallery ${index + 1}`}
          fill
          className="object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:rotate-[0.5deg]"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100"></div>

      </div>
    </div>
  </ZoomIn>
))}

        </div>

      </div>

     {/* Lightbox */}

{selectedImage !== null && (
  <ZoomIn>
  <div
    onClick={() => setSelectedImage(null)}
    className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-md"
  >
    {/* Close Button */}
    <button
      onClick={(e) => {
        e.stopPropagation();
        setSelectedImage(null);
      }}
      className="absolute top-6 right-6 rounded-full border border-yellow-500/30 bg-black/60 p-3 text-white backdrop-blur transition hover:bg-yellow-500 hover:text-black"
    >
      <X size={28} />
    </button>

    {/* Previous Button */}
    <button
      onClick={(e) => {
        e.stopPropagation();
        prevImage();
      }}
      className="absolute left-6 top-1/2 -translate-y-1/2 rounded-full border border-yellow-500/30 bg-black/60 p-3 text-white backdrop-blur transition hover:bg-yellow-500 hover:text-black"
    >
      <ChevronLeft size={36} />
    </button>

    {/* Image */}
    <ZoomIn>
    <div
      onClick={(e) => e.stopPropagation()}
      className="relative h-[80vh] w-[90vw]"
    >
      <Image
        src={gallery[selectedImage]}
        alt={`Gallery ${selectedImage + 1}`}
        fill
        priority
       className="object-contain scale-95 transition-all duration-500 ease-out"
      />
    </div>
    </ZoomIn>
    {/* Counter */}
    <div className="absolute bottom-8 rounded-full bg-black/50 px-4 py-2 text-white backdrop-blur">
      {selectedImage + 1} / {gallery.length}
    </div>

    {/* Next Button */}
    <button
      onClick={(e) => {
        e.stopPropagation();
        nextImage();
      }}
      className="absolute right-6 top-1/2 -translate-y-1/2 rounded-full border border-yellow-500/30 bg-black/60 p-3 text-white backdrop-blur transition hover:bg-yellow-500 hover:text-black"
    >
      <ChevronRight size={36} />
    </button>
  </div>
  </ZoomIn>
)}

    </section>
  
  );
}