import { motion } from "motion/react";
import { FiCloud, FiCode } from "react-icons/fi";
import {
  SiDocker,
  SiExpress,
  SiJavascript,
  SiLinux,
  SiNextdotjs,
  SiPython,
  SiReact,
  SiSpringboot,
} from "react-icons/si";

const stack = [
  ["React", SiReact, "#61DAFB"],
  ["Next.js", SiNextdotjs, "#000000"],
  ["JavaScript", SiJavascript, "#F7DF1E"],
  ["Express", SiExpress, "#000000"],
  ["Python", SiPython, "#3776AB"],
  ["Spring Boot", SiSpringboot, "#6DB33F"],
  ["AWS", FiCloud, "#FF9900"],
  ["Linux", SiLinux, "#FCC624"],
  ["Docker", SiDocker, "#2496ED"],
  ["DevOps", FiCode, "#7C3AED"],
];

function Stack() {
  return (
    <section
      id="stack"
      className="relative overflow-hidden border-t border-zinc-200 bg-zinc-50 py-20 sm:py-24 lg:py-32"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -right-40 top-1/4 h-80 w-80 rounded-full bg-white blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500 sm:text-sm">
            The toolbox / 04
          </span>

          <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl">
            Built on a solid{" "}
            <em className="font-serif font-normal text-zinc-400">
              stack.
            </em>
          </h2>

          <p className="mt-5 max-w-xl text-base leading-7 text-zinc-500 sm:mt-6 sm:text-lg sm:leading-8">
            The right tool for the job, chosen for longevity, performance, and
            a good developer experience.
          </p>
        </motion.div>

        {/* Stack grid */}
        <div className="mt-12 grid grid-cols-2 overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-200 sm:mt-16 sm:grid-cols-3 lg:grid-cols-5">
          {stack.map(([name, Icon, color], index) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.45,
                delay: index * 0.05,
                ease: "easeOut",
              }}
              whileHover={{ y: -3 }}
              className="group relative flex min-h-[130px] flex-col items-center justify-center gap-4 bg-white p-5 transition-all duration-300 hover:z-10 hover:shadow-lg hover:shadow-zinc-200/50 sm:min-h-[150px] sm:p-6"
            >
              {/* Icon */}
              <Icon
                size={30}
                style={{ color }}
                className="transition-transform duration-300 group-hover:scale-110"
              />

              {/* Name */}
              <span className="text-sm font-medium text-zinc-700">
                {name}
              </span>

              {/* Hover indicator */}
              <span
                className="absolute bottom-3 h-1 w-1 scale-0 rounded-full transition-transform duration-300 group-hover:scale-100"
                style={{ backgroundColor: color }}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="text-sm text-zinc-400">
            Always learning. Always refining.
          </p>

          <span className="text-xs font-medium uppercase tracking-[0.15em] text-zinc-400">
            10 tools & technologies
          </span>
        </motion.div>
      </div>
    </section>
  );
}

export default Stack;