import { motion } from "motion/react";
import {
  FiArrowUpRight,
  FiGithub,
  FiLinkedin,
  FiMail,
} from "react-icons/fi";

function Footer() {
  const socials = [
    {
      name: "GitHub",
      href: "http://github.com/siwamsingh",
      icon: FiGithub,
      color: "#181717",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/siwam-singh-029825286",
      icon: FiLinkedin,
      color: "#0A66C2",
    },
    {
      name: "Email",
      href: "mailto:siwamgamezone@gmail.com",
      icon: FiMail,
      color: "#059669",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden border-t border-zinc-200 bg-white text-zinc-900">
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-48 w-48 -translate-x-1/2 rounded-full bg-emerald-50 blur-3xl sm:h-64 sm:w-64" />

      <div className="relative mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
        {/* CTA */}
        <div className="mb-10 flex flex-col gap-8 sm:mb-14 md:mb-16 md:flex-row md:items-end md:justify-between md:gap-10">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-emerald-600 sm:mb-4 sm:text-sm">
              Let&apos;s connect
            </p>

            <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              Let&apos;s build something{" "}
              <span className="text-emerald-600">meaningful.</span>
            </h2>
          </div>

          {/* Back to top */}
          <motion.button
            type="button"
            onClick={scrollToTop}
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.97 }}
            className="group flex w-fit items-center gap-2 rounded-full border border-zinc-300 px-4 py-2.5 text-sm font-medium transition-all duration-300 hover:border-emerald-600 hover:bg-emerald-600 hover:!text-white sm:gap-3 sm:px-5 sm:py-3"
          >
            Back to top

            <motion.span whileHover={{ x: 2, y: -2 }}>
              <FiArrowUpRight size={17} />
            </motion.span>
          </motion.button>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-zinc-200" />

        {/* Footer bottom */}
        <div className="flex flex-col gap-6 pt-7 sm:gap-8 sm:pt-8 md:flex-row md:items-center md:justify-between">
          {/* Copyright */}
          <div>
            <p className="text-sm text-zinc-600">
              © {new Date().getFullYear()} Siwam. All rights reserved.
            </p>

            <p className="mt-1 text-xs text-zinc-400">
              Designed & built with care.
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {socials.map(({ name, href, icon: Icon, color }) => (
              <motion.a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.92 }}
                className="group flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white transition-all duration-300 hover:border-zinc-300 hover:bg-zinc-50 sm:h-11 sm:w-11"
              >
                <Icon
                  size={18}
                  style={{ color }}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;