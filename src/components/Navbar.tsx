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

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [lightMode, setLightMode] = useState(false);
  const [activeSection, setActiveSection] = useState("works");

  useEffect(() => {
    const handleScroll = () => setLightMode(window.scrollY > 760);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
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

        if (visible?.target?.id) {
          setActiveSection(visible.target.id);
        }
      },
      {
        rootMargin: "-20% 0px -55% 0px",
        threshold: [0.2, 0.45, 0.7],
      }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow] duration-300 ease-editorial",
        lightMode
          ? "bg-white/96 shadow-[0_1px_0_rgba(16,17,20,0.06)] backdrop-blur-md"
          : "bg-[#050505]/96"
      )}
    >
      <div className="relative mx-auto h-[88px] w-[1602px] max-w-none">
        <a
          href="#top"
          className={cn(
            "brand-word absolute left-[128px] top-[32px] text-[20px] leading-[24px] transition-colors duration-300 ease-editorial",
            lightMode ? "text-[#101114]" : "text-white"
          )}
        >
          ABBIE.
        </a>

        <div className="absolute right-[128px] top-[38px] hidden items-center gap-[48px] md:flex">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.name}
                href={item.href}
                className={cn(
                  "group relative font-serif text-[10px] tracking-[0.32em] transition-colors duration-200 ease-editorial",
                  isActive
                    ? lightMode
                      ? "text-[#101114]"
                      : "text-white/78"
                    : "text-[#8f939d] hover:text-[#c9cbd1]"
                )}
              >
                {item.name}
                <span
                  className={cn(
                    "absolute left-0 top-[15px] h-px bg-current transition-all duration-200 ease-editorial",
                    isActive ? "w-full opacity-40" : "w-0 opacity-0 group-hover:w-full group-hover:opacity-25"
                  )}
                />
              </a>
            );
          })}
        </div>

        <button
          type="button"
          aria-label="Toggle navigation"
          className={cn(
            "absolute right-6 top-6 inline-flex h-10 w-10 items-center justify-center rounded-full border transition-colors md:hidden",
            lightMode ? "border-zinc-200 text-[#101114]" : "border-white/20 text-white"
          )}
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
            className="border-t border-white/8 bg-[#050505] px-7 py-8 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="mono-detail text-[11px] text-zinc-300"
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
