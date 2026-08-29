import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  FiArrowUpRight,
  FiMenu,
  FiX,
} from "react-icons/fi";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);

  const links = [
    ["Work", "projects"],
    ["Services", "services"],
    ["Stack", "stack"],
    ["Process", "process"],
    ["Contact", "contact"],
  ];

  const closeMenu = () => setOpen(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Always show navbar at the very top
      if (currentScrollY <= 20) {
        setVisible(true);
        lastScrollY = currentScrollY;
        return;
      }

      // Keep navbar visible while mobile menu is open
      if (open) {
        setVisible(true);
        lastScrollY = currentScrollY;
        return;
      }

      // Scrolling down → hide
      if (currentScrollY > lastScrollY) {
        setVisible(false);
      }

      // Scrolling up → show
      if (currentScrollY < lastScrollY) {
        setVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [open]);

  return (
    <motion.header
      initial={{ y: 0, opacity: 1 }}
      animate={{
        y: visible ? 0 : -120,
        opacity: visible ? 1 : 0,
      }}
      transition={{
        duration: 0.35,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 sm:pt-5 lg:px-8">
        <div className="relative flex h-16 items-center justify-between rounded-2xl border border-zinc-200/80 bg-white/90 px-4 shadow-sm shadow-zinc-200/20 backdrop-blur-xl sm:px-5">

          {/* Brand */}
          <motion.a
            href="#top"
            aria-label="Back to top"
            whileHover={{ y: -1 }}
            className="group flex items-center gap-2 text-base font-semibold tracking-tight text-zinc-900"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-900 text-sm font-medium text-white transition-transform duration-300 group-hover:rotate-6">
              S
            </span>

            <span>
              Siwam<span className="text-zinc-400">.</span>
            </span>
          </motion.a>

          {/* Desktop navigation */}
          <nav className="hidden items-center gap-1 md:flex">
            {links.map(([label, id]) => (
              <a
                key={id}
                href={`#${id}`}
                className="group relative rounded-full px-4 py-2 text-sm font-medium text-zinc-500 transition-colors duration-300 hover:text-zinc-900"
              >
                {label}

                <span className="absolute bottom-1 left-1/2 h-px w-0 -translate-x-1/2 bg-zinc-900 transition-all duration-300 group-hover:w-4" />
              </a>
            ))}

            <motion.a
              href="#contact"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="group ml-2 flex items-center gap-2 rounded-full bg-zinc-900 px-4 py-2.5 text-sm font-medium text-white transition-colors duration-300 hover:bg-zinc-800"
            >
              Let&apos;s talk

              <FiArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </motion.a>
          </nav>

          {/* Mobile menu button */}
          <motion.button
            type="button"
            whileTap={{ scale: 0.9 }}
            onClick={() => setOpen((prev) => !prev)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 text-zinc-700 transition-colors hover:border-zinc-900 hover:bg-zinc-900 hover:text-white md:hidden"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={open ? "close" : "menu"}
                initial={{
                  opacity: 0,
                  rotate: -45,
                  scale: 0.8,
                }}
                animate={{
                  opacity: 1,
                  rotate: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  rotate: 45,
                  scale: 0.8,
                }}
                transition={{ duration: 0.15 }}
                className="flex"
              >
                {open ? (
                  <FiX size={19} />
                ) : (
                  <FiMenu size={19} />
                )}
              </motion.span>
            </AnimatePresence>
          </motion.button>

          {/* Mobile navigation */}
          <AnimatePresence>
            {open && (
              <motion.nav
                initial={{
                  opacity: 0,
                  y: -8,
                  scale: 0.98,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  y: -8,
                  scale: 0.98,
                }}
                transition={{
                  duration: 0.2,
                  ease: "easeOut",
                }}
                className="absolute left-0 right-0 top-[calc(100%+0.5rem)] overflow-hidden rounded-2xl border border-zinc-200 bg-white p-2 shadow-xl shadow-zinc-200/30 md:hidden"
              >
                {links.map(([label, id], index) => (
                  <motion.a
                    key={id}
                    href={`#${id}`}
                    onClick={closeMenu}
                    initial={{
                      opacity: 0,
                      x: -10,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: index * 0.05,
                      duration: 0.25,
                    }}
                    className="flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-medium text-zinc-600 transition-colors hover:bg-zinc-50 hover:text-zinc-900"
                  >
                    {label}

                    <FiArrowUpRight
                      size={16}
                      className="text-zinc-400"
                    />
                  </motion.a>
                ))}

                <motion.a
                  href="#contact"
                  onClick={closeMenu}
                  className="mt-1 flex items-center justify-center gap-2 rounded-xl bg-zinc-900 px-4 py-3.5 text-sm font-medium text-white"
                >
                  Let&apos;s talk
                  <FiArrowUpRight size={16} />
                </motion.a>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.header>
  );
}

export default Navbar;