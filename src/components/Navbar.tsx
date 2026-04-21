import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const navItems = [
  { id: "works", name: "作品展示", href: "#works" },
  { id: "experience", name: "工作经历", href: "#experience" },
  { id: "skills", name: "专业技能", href: "#skills" },
  { id: "contact", name: "联系我", href: "#contact" },
];

/**
 * Navbar — fluid, single-palette editorial nav.
 *
 * Previously: 1602px fixed width + absolute-px positioning + a dark/light
 * palette switch calibrated for the old black Hero. When Hero became
 * canvas-palette those assumptions broke.
 *
 * Now: max-w-[1600px] + flex + responsive padding. Always on ink-900 type.
 * Becomes slightly opaque white after a small scroll so content can show
 * through the top at the very start of the page.
 */
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("works");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const elements = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean) as HTMLElement[];
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActiveSection(visible.target.id);
      },
      { rootMargin: "-20% 0px -55% 0px", threshold: [0.2, 0.45, 0.7] },
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-300 ease-editorial",
        scrolled
          ? "bg-[var(--canvas)]/85 shadow-[0_1px_0_rgba(16,17,20,0.06)] backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <div className="case-canvas flex h-[72px] items-center justify-between md:h-[88px]">
        <a
          href="#top"
          className="brand-word text-[18px] leading-none text-[var(--ink-900)] md:text-[20px]"
        >
          ABBIE.
        </a>

        <div className="hidden items-center gap-8 md:flex md:gap-12">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.name}
                href={item.href}
                className={cn(
                  "group relative font-serif text-[10px] tracking-[0.32em] transition-colors duration-200 ease-editorial",
                  isActive
                    ? "text-[var(--ink-900)]"
                    : "text-[var(--ink-400)] hover:text-[var(--ink-900)]",
                )}
              >
                {item.name}
                <span
                  className={cn(
                    "absolute left-0 top-[15px] h-px bg-current transition-all duration-200 ease-editorial",
                    isActive ? "w-full opacity-40" : "w-0 opacity-0 group-hover:w-full group-hover:opacity-25",
                  )}
                />
              </a>
            );
          })}
        </div>

        <button
          type="button"
          aria-label="Toggle navigation"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--ink-900)]/15 text-[var(--ink-900)] md:hidden"
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
            className="border-t border-[var(--line)] bg-[var(--canvas)] px-[var(--viewer-gutter)] py-8 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="mono-detail text-[11px] text-[var(--ink-600)]"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
