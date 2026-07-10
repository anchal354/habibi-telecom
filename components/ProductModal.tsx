"use client";

import { X, MessageCircle } from "lucide-react";
import Image from "next/image";

type Product = {
  title: string;
  image: string;
  description: string;
  features: string[];
};

type ProductModalProps = {
  product: Product | null;
  onClose: () => void;
};

export default function ProductModal({
  product,
  onClose,
}: ProductModalProps) {
  if (!product) return null;

  const whatsappLink = `https://wa.me/919576822786?text=${encodeURIComponent(
    `Hello Habibi Telecom, I'm interested in ${product.title}. Please share more details.`
  )}`;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-5"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl overflow-hidden rounded-3xl border border-yellow-500/20 bg-[#111111]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute right-5 top-5 rounded-full bg-black/70 p-2 text-white hover:bg-red-500 transition"
        >
          <X size={22} />
        </button>

        <div className="grid md:grid-cols-2">
          {/* Image */}
          <div className="relative h-[350px] md:h-full">
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="p-8 flex flex-col justify-center">
            <h2 className="text-4xl font-bold text-yellow-400">
              {product.title}
            </h2>

            <p className="mt-5 text-gray-300 leading-8">
              {product.description}
            </p>

            <div className="mt-6">
              <h3 className="mb-3 text-xl font-semibold text-white">
                Features
              </h3>

              <ul className="space-y-2">
                {product.features.map((item, index) => (
                  <li key={index} className="text-gray-300">
                    ✅ {item}
                  </li>
                ))}
              </ul>
            </div>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 flex items-center justify-center gap-2 rounded-full bg-green-500 px-6 py-4 font-bold text-white transition hover:bg-green-600"
            >
              <MessageCircle size={22} />
              Enquire on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}