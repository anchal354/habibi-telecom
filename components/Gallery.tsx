"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

import FadeUp from "./animations/FadeUp";
import ZoomIn from "./animations/ZoomIn";

const galleryImages = [
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
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (selectedImage === null) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }

      if (event.key === "ArrowRight") {
        setSelectedImage((currentImage) => {
          if (currentImage === null) return null;

          return (currentImage + 1) % galleryImages.length;
        });
      }

      if (event.key === "ArrowLeft") {
        setSelectedImage((currentImage) => {
          if (currentImage === null) return null;

          return (
            (currentImage - 1 + galleryImages.length) %
            galleryImages.length
          );
        });
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedImage]);

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const showPreviousImage = () => {
    setSelectedImage((currentImage) => {
      if (currentImage === null) return null;

      return (
        (currentImage - 1 + galleryImages.length) %
        galleryImages.length
      );
    });
  };

  const showNextImage = () => {
    setSelectedImage((currentImage) => {
      if (currentImage === null) return null;

      return (currentImage + 1) % galleryImages.length;
    });
  };

  const lightbox =
    isMounted &&
    selectedImage !== null &&
    createPortal(
      <div
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 px-4 py-6 backdrop-blur-md"
        onClick={closeLightbox}
        role="dialog"
        aria-modal="true"
        aria-label="Gallery image viewer"
      >
        {/* Close Button */}

        <button
          type="button"
          onClick={closeLightbox}
          className="absolute right-4 top-4 z-30 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/70 text-white transition hover:border-yellow-500 hover:bg-yellow-500 hover:text-black sm:right-8 sm:top-8"
          aria-label="Close image"
        >
          <X size={26} />
        </button>

        {/* Previous Button */}

        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            showPreviousImage();
          }}
          className="absolute left-3 top-1/2 z-30 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/70 text-white transition hover:border-yellow-500 hover:bg-yellow-500 hover:text-black sm:left-8"
          aria-label="Previous image"
        >
          <ChevronLeft size={30} />
        </button>

        {/* Image */}

        <div
          className="relative h-[75vh] w-full max-w-6xl overflow-hidden rounded-2xl"
          onClick={(event) => event.stopPropagation()}
        >
          <Image
            src={galleryImages[selectedImage]}
            alt={`Habibi Telecom gallery image ${selectedImage + 1}`}
            fill
            sizes="100vw"
            priority
            className="object-contain"
          />
        </div>

        {/* Next Button */}

        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            showNextImage();
          }}
          className="absolute right-3 top-1/2 z-30 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/70 text-white transition hover:border-yellow-500 hover:bg-yellow-500 hover:text-black sm:right-8"
          aria-label="Next image"
        >
          <ChevronRight size={30} />
        </button>

        {/* Image Counter */}

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full border border-white/10 bg-black/70 px-5 py-2 text-sm text-white sm:bottom-6">
          {selectedImage + 1} / {galleryImages.length}
        </div>
      </div>,
      document.body
    );

  return (
    <>
      <section
        id="gallery"
        className="bg-gradient-to-b from-black via-[#111111] to-black px-6 py-24 text-white"
      >
        <div className="mx-auto max-w-7xl">
          {/* Heading */}

          <FadeUp>
            <div className="mb-16 text-center">
              <span className="inline-block rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-sm uppercase tracking-[3px] text-yellow-400">
                Our Gallery
              </span>

              <h2 className="mt-6 text-4xl font-bold md:text-5xl">
                Explore Our{" "}
                <span className="text-yellow-400">Showroom</span>
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-gray-400">
                Take a closer look at our showroom, products and available
                collections.
              </p>
            </div>
          </FadeUp>

          {/* Gallery Grid */}

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4">
            {galleryImages.map((image, index) => (
              <ZoomIn key={image} delay={index * 0.03}>
                <button
                  type="button"
                  onClick={() => setSelectedImage(index)}
                  className="group relative block aspect-square w-full cursor-pointer overflow-hidden rounded-2xl border border-yellow-500/10 bg-zinc-900 text-left transition-all duration-500 hover:-translate-y-2 hover:border-yellow-500 hover:shadow-[0_0_35px_rgba(234,179,8,0.2)]"
                  aria-label={`Open gallery image ${index + 1}`}
                >
                  <Image
                    src={image}
                    alt={`Habibi Telecom showroom image ${index + 1}`}
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/30" />

                  <div className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-black/90 to-transparent p-5 pt-12 transition-transform duration-500 group-hover:translate-y-0">
                    <p className="font-semibold text-yellow-400">
                      View Image
                    </p>
                  </div>
                </button>
              </ZoomIn>
            ))}
          </div>
        </div>
      </section>

      {lightbox}
    </>
  );
}