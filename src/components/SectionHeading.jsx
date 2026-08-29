import { motion } from "motion/react";

function SectionHeading({ eyebrow, title, copy }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
      className="max-w-2xl"
    >
      {/* Eyebrow */}
      <span className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500 sm:text-sm">
        {eyebrow}
      </span>

      {/* Heading */}
      <h2 className="mt-4 text-4xl font-semibold leading-[1.05] tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl">
        {title}
      </h2>

      {/* Description */}
      {copy && (
        <p className="mt-5 max-w-xl text-base leading-7 text-zinc-500 sm:mt-6 sm:text-lg sm:leading-8">
          {copy}
        </p>
      )}
    </motion.div>
  );
}

export default SectionHeading;