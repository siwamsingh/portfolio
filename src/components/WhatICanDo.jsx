import { motion } from "motion/react";
import {
  FiGlobe,
  FiCode,
  FiLayers,
  FiCpu,
  FiZap,
  FiSmartphone,
  FiServer,
  FiTool,
  FiArrowUpRight,
} from "react-icons/fi";

const capabilities = [
  {
    number: "01",
    title: "Website",
    description:
      "Fast, polished websites that turn ideas into memorable digital experiences.",
    icon: FiGlobe,
    iconClass: "bg-blue-100 text-blue-600",
    accent: "group-hover:text-blue-600",
  },
  {
    number: "02",
    title: "Frontend",
    description:
      "Responsive interfaces with thoughtful interactions, clean architecture, and smooth UX.",
    icon: FiCode,
    iconClass: "bg-violet-100 text-violet-600",
    accent: "group-hover:text-violet-600",
  },
  {
    number: "03",
    title: "No-Code Website",
    description:
      "Flexible websites built with no-code tools that are easy for teams to manage themselves.",
    icon: FiLayers,
    iconClass: "bg-orange-100 text-orange-600",
    accent: "group-hover:text-orange-600",
  },
  {
    number: "04",
    title: "AI Integration",
    description:
      "Practical AI features that automate workflows, improve products, and unlock new possibilities.",
    icon: FiCpu,
    iconClass: "bg-emerald-100 text-emerald-600",
    accent: "group-hover:text-emerald-600",
  },
  {
    number: "05",
    title: "Automation",
    description:
      "Connect your tools and eliminate repetitive work with intelligent automated workflows.",
    icon: FiZap,
    iconClass: "bg-yellow-100 text-yellow-600",
    accent: "group-hover:text-yellow-600",
  },
  {
    number: "06",
    title: "App Development",
    description:
      "Useful, intuitive mobile applications designed around real people and real problems.",
    icon: FiSmartphone,
    iconClass: "bg-pink-100 text-pink-600",
    accent: "group-hover:text-pink-600",
  },
  {
    number: "07",
    title: "Backend",
    description:
      "Reliable APIs, databases, authentication, and infrastructure that keep products running.",
    icon: FiServer,
    iconClass: "bg-cyan-100 text-cyan-600",
    accent: "group-hover:text-cyan-600",
  },
  {
    number: "08",
    title: "Custom Software",
    description:
      "Purpose-built software for unique workflows, internal tools, and ambitious ideas.",
    icon: FiTool,
    iconClass: "bg-red-100 text-red-600",
    accent: "group-hover:text-red-600",
  },
];

function WhatICanDo() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-zinc-50 py-20 sm:py-24 lg:py-32"
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-violet-100/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500 sm:text-sm">
            What I can do / 01
          </span>

          <h2 className="mt-4 text-4xl font-semibold leading-[1.05] tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl">
            My Services{" "}
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-500 sm:mt-6 sm:text-lg sm:leading-8">
            I design and build digital products, automate the boring parts,
            and turn ambitious ideas into things people can actually use.
          </p>
        </motion.div>

        {/* Capability grid */}
        <div className="mt-12 grid gap-4 sm:mt-16 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {capabilities.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.07,
                  ease: "easeOut",
                }}
                whileHover={{ y: -6 }}
                className="group relative"
              >
                <div className="relative flex h-full min-h-[270px] flex-col overflow-hidden rounded-3xl border border-zinc-200 bg-white p-6 transition-all duration-500 hover:border-zinc-300 hover:shadow-xl hover:shadow-zinc-200/50 sm:p-7">
                  {/* Number */}
                  <span className="absolute right-5 top-5 text-xs font-medium text-zinc-300 transition-colors duration-300 group-hover:text-zinc-400">
                    {item.number}
                  </span>

                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: -6, scale: 1.08 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 15,
                    }}
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl ${item.iconClass}`}
                  >
                    <Icon size={22} strokeWidth={1.8} />
                  </motion.div>

                  {/* Content */}
                  <div className="mt-auto pt-10">
                    <h3
                      className={`text-xl font-semibold tracking-tight text-zinc-900 transition-colors duration-300 ${item.accent}`}
                    >
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-zinc-500">
                      {item.description}
                    </p>
                  </div>

                  {/* Hover arrow */}
                  <motion.div
                    initial={{ opacity: 0, x: -5, y: 5 }}
                    whileHover={{ opacity: 1, x: 0, y: 0 }}
                    className="absolute bottom-6 right-6 text-zinc-300 transition-colors duration-300 group-hover:text-zinc-700"
                  >
                    <FiArrowUpRight size={18} />
                  </motion.div>

                  {/* Decorative hover glow */}
                  <div className="pointer-events-none absolute -bottom-16 -right-16 h-32 w-32 rounded-full bg-zinc-100 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-12 flex flex-col gap-5 border-t border-zinc-200 pt-7 sm:mt-16 sm:flex-row sm:items-center sm:justify-between sm:pt-8"
        >
          <p className="max-w-xl text-sm leading-6 text-zinc-500 sm:text-base">
            Don&apos;t see exactly what you need? That&apos;s usually where the
            interesting projects begin.
          </p>

          <a
            href="#contact"
            className="group inline-flex shrink-0 items-center gap-2 text-sm font-medium text-zinc-900"
          >
            Tell me what you&apos;re building
            <FiArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default WhatICanDo;