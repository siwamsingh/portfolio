import { motion } from "motion/react";
import { FiArrowUpRight, FiCheck } from "react-icons/fi";

const steps = [
  [
    "01",
    "Listen & frame",
    "We get clear on the people, the problem, and what success should feel like.",
  ],
  [
    "02",
    "Shape the idea",
    "I turn loose thoughts into a focused plan, system, and visual direction.",
  ],
  [
    "03",
    "Build & refine",
    "We make it real in small, visible steps, with room for the good surprises.",
  ],
  [
    "04",
    "Launch & learn",
    "The first release is a beginning. I stick around to help it find its rhythm.",
  ],
];

function Process() {
  return (
    <section
      id="process"
      className="relative overflow-hidden border-t border-zinc-200 bg-zinc-50 py-20 sm:py-24 lg:py-32"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-40 top-1/3 h-80 w-80 rounded-full bg-emerald-50/70 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-emerald-600 sm:text-sm">
            How I work / 05
          </span>

          <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl">
            Clarity before{" "}
            <em className="font-serif font-normal text-zinc-400">
              velocity.
            </em>
          </h2>

          <p className="mt-5 max-w-xl text-base leading-7 text-zinc-500 sm:mt-6 sm:text-lg sm:leading-8">
            A simple process keeps the work focused, collaborative, and moving
            forward.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-200 sm:mt-16 md:grid-cols-2 lg:grid-cols-4">
          {steps.map(([number, title, copy], index) => (
            <motion.div
              key={number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              whileHover={{ y: -4 }}
              className="group relative flex min-h-[300px] flex-col bg-white p-6 transition-shadow duration-300 hover:z-10 hover:shadow-xl hover:shadow-emerald-100/60 sm:p-8 lg:min-h-[360px]"
            >
              {/* Number + Arrow */}
              <div className="flex items-start justify-between">
                <span className="text-xs font-semibold tracking-[0.15em] text-emerald-600">
                  {number}
                </span>

                <motion.div
                  whileHover={{ rotate: 45 }}
                  transition={{ duration: 0.25 }}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 text-zinc-400 transition-all duration-300 group-hover:border-emerald-600 group-hover:bg-emerald-600 group-hover:text-white"
                >
                  <FiArrowUpRight size={16} />
                </motion.div>
              </div>

              {/* Content */}
              <div className="mt-auto">
                <h3 className="text-xl font-semibold tracking-tight text-zinc-900 sm:text-2xl">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-zinc-500 sm:text-base sm:leading-7">
                  {copy}
                </p>
              </div>

              {/* Bottom check */}
              <div className="mt-8 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.15em] text-zinc-400">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 transition-all duration-300 group-hover:bg-emerald-600 group-hover:text-white">
                  <FiCheck size={12} />
                </span>

                Step {number}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;