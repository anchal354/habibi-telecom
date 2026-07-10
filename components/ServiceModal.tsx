"use client";

import { X, MessageCircle } from "lucide-react";

type Service = {
  title: string;
  desc: string;
  details: string[];
};

type ServiceModalProps = {
  service: Service | null;
  onClose: () => void;
};

export default function ServiceModal({
  service,
  onClose,
}: ServiceModalProps) {
  if (!service) return null;

  const whatsappLink = `https://wa.me/919576822786?text=${encodeURIComponent(
    `Hello Habibi Telecom, I'm interested in your ${service.title} service. Please share more details.`
  )}`;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-5"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl rounded-3xl border border-yellow-500/20 bg-[#111111] p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="float-right rounded-full bg-zinc-800 p-2 hover:bg-red-500 transition"
        >
          <X size={22} />
        </button>

        <h2 className="mt-4 text-4xl font-bold text-yellow-400">
          {service.title}
        </h2>

        <p className="mt-5 text-gray-300 leading-8">
          {service.desc}
        </p>

        <div className="mt-8">
          <h3 className="text-xl font-semibold text-white mb-4">
            Service Includes
          </h3>

          <ul className="space-y-3">
            {service.details.map((item, index) => (
              <li key={index}>✅ {item}</li>
            ))}
          </ul>
        </div>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 flex items-center justify-center gap-2 rounded-full bg-green-500 px-6 py-4 font-bold text-white hover:bg-green-600 transition"
        >
          <MessageCircle size={22} />
          Enquire on WhatsApp
        </a>
      </div>
    </div>
  );
}