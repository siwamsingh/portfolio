import { motion } from "motion/react";
import { FiArrowUpRight, FiPlay } from "react-icons/fi";

function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden bg-white px-5 py-24 text-zinc-900 sm:px-8 lg:px-12"
    >

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-5 lg:grid-cols-[0.8fr_1.2fr] py-8">
        {/* Hero copy */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
          className="max-w-3xl"
        >
          {/* Status */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: "easeOut" },
              },
            }}
            className="mb-7 flex items-center justify-center gap-2.5 text-xs font-medium uppercase tracking-[0.18em] text-emerald-600 sm:text-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Available for select projects
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.7, ease: "easeOut" },
              },
            }}
            className="text-[clamp(2.8rem,8vw,4.1rem)] text-center sm:text-left  font-semibold leading-[1.05] tracking-[-0.055em] text-zinc-900"
          >
            Digital products
            <br />
            <em className="font-serif font-normal text-emerald-600">
              with a pulse.
            </em>
          </motion.h1>

          {/* Intro */}
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: "easeOut" },
              },
            }}
            className="mt-7 max-w-xl text-center sm:text-left text-base leading-7 text-zinc-500 sm:mt-8 sm:text-base sm:leading-8"
          >
            I&apos;m Siwam, a full-stack developer turning complex ideas into
            clear, useful, and quietly delightful experiences.
          </motion.p>

          {/* Actions */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: "easeOut" },
              },
            }}
            className="mt-8 flex flex-col items-center gap-5 sm:mt-10 sm:flex-row sm:items-center sm:gap-7"
          >
            {/* Primary CTA */}
            <motion.a
              href="#contact"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="group flex items-center gap-3 rounded-full bg-emerald-600 px-6 py-3.5 text-sm font-medium !text-white transition-colors duration-300 hover:bg-emerald-700"
            >
              Hire me
              <FiArrowUpRight
                size={17}
                className="text-white transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </motion.a>

            {/* Secondary CTA */}
            <motion.a
              href="#projects"
              whileHover={{ x: 4 }}
              className="group flex items-center gap-2 border-b border-zinc-300 pb-1.5 text-sm font-medium text-zinc-700 transition-colors hover:border-emerald-600 hover:text-emerald-600"
            >
              View my projects
              <FiArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.25,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative mx-auto w-full max-w-md lg:mx-0 lg:ml-auto"
        >
          {/* Portrait + Triangle */}
          <div className="group relative flex items-center justify-center py-8">
           

            {/* Smaller portrait */}
            <div
              className="
        relative
        z-10 
        transition-transform
        duration-700
        ease-[cubic-bezier(0.22,1,0.36,1)]
        group-hover:scale-[1.04]
      "
            >
              <div className="">
                <img
                  src="/portfolio.png"
                  alt="Siwam"
                  className="
            h-full
            w-full
            object-contain
            transition-transform
            duration-700
            ease-[cubic-bezier(0.22,1,0.36,1)]
            group-hover:scale-[1.025]
          "
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#projects"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-3 text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-400 transition-colors hover:text-zinc-900 sm:flex"
      >
        Scroll to explore
        <motion.span
          animate={{ y: [0, 5, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          ↓
        </motion.span>
      </motion.a>
    </section>
  );
}

export default Hero;
