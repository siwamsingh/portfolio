import { motion } from "motion/react";
import { FiArrowUpRight } from "react-icons/fi";
import aurora from "../assets/images/aurora.png";
import cloud from "../assets/images/cloud.png";
import gist from "../assets/images/gist.png";

const projects = [
  {
    number: "01",
    title: "Aurora",
    type: "Photographer portfolio",
    description:
      "A visual portfolio crafted to showcase a photographer’s work through immersive imagery and a refined editorial experience.",
    image: aurora,
    website: "https://aurora.geonev.com", // Optional
    tags: ["Next.js", "Express", "TypeScript", "AWS", "Linux"],
  },
  {
    number: "02",
    title: "Cloud Kitchen",
    type: "WhatsApp-first cloud kitchen",
    description:
      "A WhatsApp-first selling platform that makes it simple for customers to discover the menu, place orders, and connect directly with the kitchen.",
    image: cloud,
    website: "https://cloud-kitchen-one-sepia.vercel.app", // Optional
    tags: ["React", "Node.js", "Express","Postgres"],
  },
  {
    number: "03",
    title: "Lexora",
    type: "AI legal document analyser",
    description:
      "An AI-powered document analysis tool that reviews legal documents, identifies potential faults and inconsistencies, and helps users spot issues faster.",
    image: gist,
    tags: ["Bubble.io", "OpenAI", "HTML", "CSS", "JavaScript", "Python"],
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500 sm:text-sm">
            Selected work / 02
          </span>

          <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl">
            A few things I&apos;ve{" "}
            <em className="font-serif font-normal text-zinc-400">
              built.
            </em>
          </h2>

          <p className="mt-5 max-w-xl text-base leading-7 text-zinc-500 sm:mt-6 sm:text-lg sm:leading-8">
            Digital spaces that make a meaningful difference to the people
            using them.
          </p>
        </motion.div>

        {/* Projects */}
        <div className="mt-12 space-y-16 sm:mt-16 sm:space-y-20 lg:mt-20 lg:space-y-28">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
                ease: "easeOut",
              }}
              className="group"
            >
              {/* Desktop: image left / details right */}
              <div className="lg:grid lg:grid-cols-[1.55fr_1fr] lg:items-center lg:gap-12 xl:gap-16">
                
                {/* Project preview */}
                <div className="relative overflow-hidden">
                  <div className="relative aspect-[16/8] overflow-hidden sm:aspect-[16/8] lg:aspect-[16/8]">
                    <img
                      src={project.image}
                      alt={`${project.title} project preview`}
                      loading={index === 0 ? "eager" : "lazy"}
                      className="h-full w-full object-contain transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                    />
                  </div>

                  {/* Image overlay */}
                  <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-500" />

                  {/* Number */}
                  <span className="absolute left-4 top-4 rounded-full border border-white/30 bg-black/20 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md sm:left-6 sm:top-6">
                    {project.number}
                  </span>

                  {/* Arrow */}
                  {project.website && <motion.a
                    href={project.website || "#contact"}
                    target={project.website ? "_blank" : undefined}
                    rel={project.website ? "noopener noreferrer" : undefined}
                    aria-label={
                      project.website
                        ? `Visit ${project.title} website`
                        : `Ask about ${project.title}`
                    }
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    className="absolute bottom-4 right-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white text-zinc-900 shadow-lg transition-colors duration-300 hover:bg-zinc-900 hover:text-white sm:bottom-6 sm:right-6 sm:h-12 sm:w-12"
                  >
                    <FiArrowUpRight size={19} />
                  </motion.a>}
                </div>

                {/* Project information */}
                <div className="mt-5 sm:mt-6 lg:mt-0">
                  <span className="text-xs font-medium uppercase tracking-[0.16em] text-zinc-400">
                    {project.type}
                  </span>

                  <h3 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl lg:text-4xl">
                    {project.title}
                  </h3>

                  <p className="mt-4 max-w-lg text-sm leading-6 text-zinc-500 sm:text-base sm:leading-7">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-medium text-zinc-500 transition-colors duration-300 group-hover:border-zinc-300 group-hover:text-zinc-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Desktop project link */}
                  {project.website && (
                    <a
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-zinc-900 transition-colors hover:text-zinc-500"
                    >
                      View project
                      <FiArrowUpRight
                        size={16}
                        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 border-t border-zinc-200 pt-7 sm:mt-20 sm:pt-8 lg:mt-24"
        >
          <a
            href="#contact"
            className="group flex flex-col gap-2 text-zinc-500 transition-colors hover:text-zinc-900 sm:flex-row sm:items-center sm:gap-3"
          >
            <span className="text-sm">Have a project in mind?</span>

            <strong className="flex items-center gap-2 text-base font-medium text-zinc-900">
              Let&apos;s make it real
              <FiArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </strong>
          </a>
        </motion.div>
      </div>
    </section>
  );
}


export default Projects;