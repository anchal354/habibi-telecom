import { Phone, Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-black text-white py-20 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold text-center">
          Contact <span className="text-yellow-500">Us</span>
        </h2>

        <p className="text-center text-gray-400 mt-4 mb-12">
          Visit our store or contact us anytime.
        </p>

        <div className="grid md:grid-cols-2 gap-10">

          <div className="space-y-6">

            <div className="flex gap-4 items-start bg-zinc-900 p-5 rounded-xl">
              <Phone className="text-yellow-500" />
              <div>
                <h3 className="font-bold">Phone</h3>
                <p>+91 95768 22786</p>
              </div>
            </div>

            <div className="flex gap-4 items-start bg-zinc-900 p-5 rounded-xl">
              <Mail className="text-yellow-500" />
              <div>
                <h3 className="font-bold">Email</h3>
                <p>dshadab71@gmail.com</p>
              </div>
            </div>

            <div className="flex gap-4 items-start bg-zinc-900 p-5 rounded-xl">
              <MapPin className="text-yellow-500" />
              <div>
                <h3 className="font-bold">Address</h3>
                <p>
                  Hayaghat - Hathouri, Kothi Rd, BansDih, Bihar 847301
                </p>
              </div>
            </div>

          </div>

          <div className="bg-zinc-900 rounded-xl p-8">
            <form className="space-y-5">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-4 rounded-lg bg-black border border-zinc-700"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-4 rounded-lg bg-black border border-zinc-700"
              />

              <textarea
                rows={5}
                placeholder="Your Message"
                className="w-full p-4 rounded-lg bg-black border border-zinc-700"
              />

              <button
                className="bg-yellow-500 text-black px-8 py-3 rounded-lg font-bold hover:bg-yellow-400"
              >
                Send Message
              </button>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}