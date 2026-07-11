"use client";

import FadeUp from "./animations/FadeUp";
import ZoomIn from "./animations/ZoomIn";

const reviews = [
  {
    name: "Amir",
    review:
      "Excellent service, genuine products and friendly staff. Highly satisfied with my shopping experience.",
  },
  {
    name: "Danish",
    review:
      "Great collection of mobile phones and accessories with reasonable prices and good customer support.",
  },
  {
    name: "Anchal",
    review:
      "One-stop destination for telecom and electrical products. The shopping experience was smooth and hassle-free.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="reviews"
      className="bg-gradient-to-b from-[#111111] to-black py-24 px-6 text-white"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}

        <FadeUp>
          <div className="mb-16 text-center">

            <span className="inline-block rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-sm uppercase tracking-[3px] text-yellow-400">
              Customer Reviews
            </span>

            <h2 className="mt-6 text-4xl font-bold md:text-5xl">
              What Our <span className="text-yellow-400">Customers Say</span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-gray-400">
              We are committed to providing quality products and excellent customer service.
            </p>

          </div>
        </FadeUp>

        {/* Review Cards */}

        <div className="grid gap-8 md:grid-cols-3">

          {reviews.map((review, index) => (
            <ZoomIn key={index} delay={index * 0.08}>
              <div className="group rounded-3xl border border-yellow-500/10 bg-zinc-900 p-8 transition-all duration-500 hover:-translate-y-4 hover:scale-[1.02] hover:border-yellow-500 hover:shadow-[0_0_40px_rgba(234,179,8,0.25)]">

                <div className="mb-5 flex text-2xl text-yellow-400">
                  ★★★★★
                </div>

                <p className="leading-8 text-gray-300">
                  "{review.review}"
                </p>

                <div className="mt-8 border-t border-zinc-700 pt-5">

                  <h3 className="text-lg font-bold transition-colors duration-300 group-hover:text-yellow-400">
                    {review.name}
                  </h3>

                  <p className="mt-1 text-sm text-gray-500">
                    Local Visitor
                  </p>

                </div>

              </div>
            </ZoomIn>
          ))}

        </div>

      </div>
    </section>
  );
}