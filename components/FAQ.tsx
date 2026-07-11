"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Reveal from "./Reveal";
const faqs = [
  {
    question: "Do you sell original mobile phones?",
    answer:
      "Yes, we sell 100% genuine smartphones from Samsung, Vivo, OPPO, Redmi, Realme and other trusted brands with official warranty.",
  },
  {
    question: "Do you provide EMI facility?",
    answer:
      "Yes, EMI options are available on selected smartphones and electronics. Please visit our store for details.",
  },
  {
    question: "Do you offer home delivery?",
    answer:
      "Yes, we provide fast and safe home delivery in nearby areas.",
  },
  {
    question: "What products are available at your store?",
    answer:
      "We offer mobile phones, accessories, smart watches, home appliances, coolers, CCTV cameras, electrical items, inverters and batteries.",
  },
  {
    question: "Where is your store located?",
    answer:
      "Habibi Telecom & Electrical is located at Hayaghat - Hathouri, Kothi Road, Bihar - 847301.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Reveal delay={0.7}>
    <section
      id="faq"
      className="bg-black py-24 px-6 text-white"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-yellow-400 uppercase tracking-[3px] text-sm">
            FAQ
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold">
            Frequently Asked{" "}
            <span className="text-yellow-500">Questions</span>
          </h2>

          <p className="mt-4 text-gray-400">
            Find answers to the most common questions about our products and services.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-xl border border-zinc-800 bg-zinc-900 overflow-hidden"
            >
              <button
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                className="flex w-full items-center justify-between p-5 text-left"
              >
                <span className="font-semibold text-lg">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`transition-transform duration-300 ${
                    open === index ? "rotate-180 text-yellow-400" : ""
                  }`}
                />
              </button>

              <div
                className={`grid transition-all duration-300 ${
                  open === index
                    ? "grid-rows-[1fr]"
                    : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-5 pb-5 text-gray-400 leading-7">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </Reveal>
  );
}