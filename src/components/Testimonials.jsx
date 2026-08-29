import { motion } from "motion/react";

const reviews = [
  {
    quote:
      "Siwam has the rare ability to zoom out and see the whole product, then zoom in and sweat the details. The result felt obvious in the best possible way.",
    name: "Maya Chen",
    role: "Founder, Northstar",
  },
  {
    quote:
      "The cleanest handoff we have ever had. Thoughtful questions, sharp execution, and a product our customers genuinely love using.",
    name: "Daniel Okafor",
    role: "Product Lead, Field Notes",
  },
  {
    quote:
      "Working with Siwam gave our idea shape. He brought speed without sacrificing care, and made the complicated feel wonderfully simple.",
    name: "Aisha Rahman",
    role: "Co-founder, Morrow",
  },
];

function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden border-t border-zinc-200 bg-zinc-50 py-20 sm:py-24 lg:py-32"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 translate-x-1/3 -translate-y-1/3 rounded-full bg-emerald-50/70 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-emerald-600 sm:text-sm">
            Kind words / 03
          </span>

          <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl">
            Good work is a{" "}
            <em className="font-serif font-normal text-zinc-400">
              team sport.
            </em>
          </h2>
        </motion.div>

        {/* Reviews */}
        <div className="mt-12 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:gap-5">
          {reviews.map((review, index) => (
            <motion.blockquote
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              whileHover={{ y: -5 }}
              className="group relative flex min-h-[360px] flex-col justify-between overflow-hidden rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-100/50 sm:p-8"
            >
              {/* Quote */}
              <div className="relative z-10">
                <span className="font-serif text-6xl leading-none text-emerald-200 transition-colors duration-300 group-hover:text-emerald-400">
                  “
                </span>

                <p className="mt-3 text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8">
                  {review.quote}
                </p>
              </div>

              {/* Person */}
              <footer className="relative z-10 mt-10 flex items-center gap-3 border-t border-zinc-100 pt-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-sm font-semibold !text-white">
                  {review.name.charAt(0)}
                </span>

                <span className="min-w-0">
                  <strong className="block truncate text-sm font-medium text-zinc-900">
                    {review.name}
                  </strong>

                  <small className="mt-0.5 block truncate text-xs text-zinc-400">
                    {review.role}
                  </small>
                </span>
              </footer>

              {/* Decorative number */}
              <span className="pointer-events-none absolute -right-2 -top-5 font-serif text-[8rem] leading-none text-emerald-50 transition-all duration-500 group-hover:scale-110 group-hover:text-emerald-100">
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Bottom accent */}
              <span className="absolute bottom-0 left-0 h-1 w-0 bg-emerald-500 transition-all duration-500 group-hover:w-full" />
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;