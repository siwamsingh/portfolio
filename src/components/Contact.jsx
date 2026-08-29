import { motion } from "motion/react";
import { FiArrowUpRight, FiSend } from "react-icons/fi";

function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-zinc-200 bg-white py-20 sm:py-24 lg:py-32"
    >
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute -right-32 top-20 h-72 w-72 rounded-full bg-emerald-100/50 blur-3xl sm:h-96 sm:w-96" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-64 w-64 rounded-full bg-amber-100/40 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 md:gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24 lg:px-12">
        {/* Contact copy */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col justify-center"
        >
          <span className="mb-5 text-xs font-medium uppercase tracking-[0.2em] text-emerald-600 sm:text-sm">
            Have a good one? / 06
          </span>

          <h2 className="max-w-xl text-4xl font-semibold leading-[1.05] tracking-tight text-zinc-900 sm:text-5xl md:text-6xl lg:text-7xl">
            Let&apos;s make
            <br />
            <em className="font-serif font-normal text-zinc-400">
              something matter.
            </em>
          </h2>

          <p className="mt-6 max-w-md text-base leading-7 text-zinc-500 sm:mt-7 sm:text-lg">
            Tell me a little about what you&apos;re working on. I&apos;ll get
            back to you within a couple of days.
          </p>

          <motion.a
            href="mailto:hello@siwam.dev"
            whileHover={{ x: 5 }}
            className="group mt-7 flex w-fit items-center gap-2 border-b border-emerald-300 pb-2 text-sm font-medium text-emerald-700 transition-colors hover:border-emerald-600 hover:text-emerald-800 sm:mt-9 sm:text-base"
          >
            hello@siwam.dev

            <FiArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </motion.a>
        </motion.div>

        {/* Contact form */}
        <motion.form
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.6,
            delay: 0.1,
            ease: "easeOut",
          }}
          onSubmit={(event) => event.preventDefault()}
          className="rounded-2xl border border-emerald-100 bg-emerald-50/40 p-5 sm:p-7 md:p-8"
        >
          <div className="space-y-6">
            {/* Name */}
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-zinc-700">
                Your name
              </span>

              <input
                type="text"
                name="name"
                placeholder="Jane Smith"
                autoComplete="name"
                className="w-full border-0 border-b border-zinc-300 bg-transparent px-0 py-3 text-base text-zinc-900 outline-none placeholder:text-zinc-400 transition-colors focus:border-emerald-600 focus:ring-0"
              />
            </label>

            {/* Email */}
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-zinc-700">
                Email address
              </span>

              <input
                type="email"
                name="email"
                placeholder="jane@company.com"
                autoComplete="email"
                className="w-full border-0 border-b border-zinc-300 bg-transparent px-0 py-3 text-base text-zinc-900 outline-none placeholder:text-zinc-400 transition-colors focus:border-emerald-600 focus:ring-0"
              />
            </label>

            {/* Message */}
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-zinc-700">
                Tell me about it
              </span>

              <textarea
                name="message"
                rows={4}
                placeholder="A sentence or two about your project..."
                className="w-full resize-none border-0 border-b border-zinc-300 bg-transparent px-0 py-3 text-base text-zinc-900 outline-none placeholder:text-zinc-400 transition-colors focus:border-emerald-600 focus:ring-0"
              />
            </label>

            {/* Submit */}
            <motion.button
              type="submit"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="group mt-2 flex w-full items-center justify-center gap-3 rounded-full bg-emerald-600 px-6 py-3.5 text-sm font-medium !text-white transition-colors duration-300 hover:bg-emerald-700 sm:w-fit"
            >
              Send inquiry

              <FiSend
                size={16}
                className="text-white transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </motion.button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}

export default Contact;