import { useEffect, useMemo, useRef, useState, type CSSProperties } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { AI_CASE_TIMELINE, PERSONAL_INFO } from "@/src/constants";

/**
 * AiCasePage — detail view for "/?case=ai".
 *
 * Rewritten from a 549-line absolute-positioned page that referenced 40+
 * dead Figma MCP URLs and hard-coded grey hex colors. New version:
 *   - No external assets (the old images 404'd anyway).
 *   - Responsive, token-driven palette (--canvas / --ink / --case-ai).
 *   - Matches the chrome used by CaseViewer: sticky back nav, scroll
 *     progress bar, keyboard escape, era indicator, bottom shortcut hint.
 *   - Renders the four eras from AI_CASE_TIMELINE as clean typographic
 *     sections — year · theme · title · description · highlights.
 *
 * This is intentionally closer in voice to the rest of the site than to
 * the original Figma mockup: type-forward, first-person, no ornament.
 */
export default function AiCasePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const eraRefs = useRef<Array<HTMLElement | null>>([]);
  const [activeEra, setActiveEra] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 28,
    restDelta: 0.001,
  });

  const accentStyle = useMemo<CSSProperties>(
    () =>
      ({
        ["--case-accent" as keyof CSSProperties]: `var(--case-ai)`,
      }) as CSSProperties,
    [],
  );

  // Track era in view for the indicator
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = eraRefs.current.findIndex((ref) => ref === entry.target);
            if (idx >= 0) setActiveEra(idx);
          }
        });
      },
      { threshold: 0.4 },
    );
    eraRefs.current.forEach((ref) => ref && observer.observe(ref));
    return () => observer.disconnect();
  }, []);

  // Keyboard: Esc → home, arrows → jump between eras
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        window.location.href = "/#works";
      } else if (e.key === "ArrowDown" || e.key === "ArrowRight") {
        e.preventDefault();
        eraRefs.current[Math.min(activeEra + 1, AI_CASE_TIMELINE.length - 1)]?.scrollIntoView({
          behavior: "smooth",
        });
      } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        e.preventDefault();
        eraRefs.current[Math.max(activeEra - 1, 0)]?.scrollIntoView({ behavior: "smooth" });
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeEra]);

  return (
    <div
      ref={containerRef}
      className="relative bg-[var(--canvas)] text-[var(--ink-900)]"
      style={accentStyle}
    >
      {/* Scroll progress */}
      <motion.div
        aria-hidden
        className="viewer-progress fixed left-0 right-0 top-0 z-[80] h-[2px] origin-left"
        style={{ scaleX }}
      />

      {/* Sticky header */}
      <header className="sticky top-0 z-[70] border-b border-[var(--line)] bg-[var(--surface)]/85 backdrop-blur-md">
        <div className="case-canvas flex items-center justify-between py-3 text-[11.2px] uppercase tracking-[0.32em] text-[var(--ink-600)]">
          <a href="/#works" className="transition-opacity hover:opacity-70">
            ← Back to Works
          </a>
          <span className="font-[var(--font-mono)]">
            {String(activeEra + 1).padStart(2, "0")} / {String(AI_CASE_TIMELINE.length).padStart(2, "0")}
          </span>
        </div>
      </header>

      {/* Title block */}
      <section className="case-canvas pb-14 pt-20 md:pb-20 md:pt-28">
        <p className="mono-detail accent-text mb-4">Case Study · {PERSONAL_INFO.name}</p>
        <h1
          className="font-serif text-[var(--ink-900)]"
          style={{
            fontSize: "clamp(48px, 7vw, 88px)",
            lineHeight: "0.98",
            letterSpacing: "-0.04em",
          }}
        >
          AI 在我的
          <br />
          设计工作流里
        </h1>
        <p className="mt-6 max-w-[720px] font-serif text-[var(--fs-lead)] leading-[1.55] text-[var(--ink-600)]">
          从 2023 年第一次用 Midjourney 开始，AI 就一直在我的设计工作流里，四年来一直在变位置。这是我做过的四个阶段的记录——不是行业大事年表，是我本人在用 AI 这件事上的真实演变。
        </p>

        <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-[var(--line)] pt-8 md:grid-cols-4">
          <MetaItem label="Timeline" value="2023 — now" />
          <MetaItem label="Practice" value="持续在做" />
          <MetaItem label="Focus" value="设计 × AI 工作流" />
          <MetaItem label="Tools" value="Figma · Claude · Cursor" />
        </dl>
      </section>

      {/* Four eras */}
      <div className="pb-16 md:pb-24">
        {AI_CASE_TIMELINE.map((era, index) => {
          // Split "2023 爆发年" into year + theme
          const [year, ...themeParts] = era.year.split(" ");
          const theme = themeParts.join(" ");

          return (
            <motion.article
              key={era.year}
              ref={(el) => {
                eraRefs.current[index] = el;
              }}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
              className="case-canvas border-t border-[var(--line)] py-14 md:py-20"
            >
              <div className="grid gap-6 md:grid-cols-[minmax(0,220px)_minmax(0,1fr)] md:gap-16">
                {/* Era label column */}
                <div>
                  <p
                    className="display-italic text-[var(--ink-900)]"
                    style={{
                      fontSize: "clamp(48px, 6.4vw, 80px)",
                      lineHeight: "0.88",
                      letterSpacing: "-0.05em",
                    }}
                  >
                    {year}
                  </p>
                  {theme ? (
                    <p className="mt-2 font-serif text-[17px] leading-[1.3] text-[var(--ink-400)] md:text-[18px]">
                      {theme}
                    </p>
                  ) : null}
                  <p className="mono-detail mt-5 text-[var(--ink-300)]">{era.label}</p>
                </div>

                {/* Era body column */}
                <div>
                  <h2
                    className="font-serif font-semibold text-[var(--ink-900)]"
                    style={{
                      fontSize: "clamp(24px, 3vw, 36px)",
                      lineHeight: "1.15",
                      letterSpacing: "-0.025em",
                    }}
                  >
                    {era.title}
                  </h2>
                  <p className="mt-5 max-w-[640px] font-serif text-[16px] leading-[1.75] text-[var(--ink-600)] md:text-[17px]">
                    {era.description}
                  </p>
                  <ul className="mt-7 space-y-2.5">
                    {era.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex gap-3 font-serif text-[15px] leading-[1.7] text-[var(--ink-600)] md:text-[16px]"
                      >
                        <span
                          aria-hidden
                          className="mt-[10px] inline-block h-[5px] w-[5px] shrink-0 rounded-full bg-[var(--ink-400)]"
                        />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>

      {/* Footer: external demo CTA + shortcut hint */}
      <footer className="border-t border-[var(--line)] bg-[var(--surface)]">
        <div className="case-canvas flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between">
          <a
            href={PERSONAL_INFO.demoHref}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-3 self-start font-[var(--font-mono)] text-[11px] uppercase tracking-[0.32em] text-[var(--ink-900)] transition-opacity hover:opacity-70"
          >
            <span>See the Figma × AI demo</span>
            <span aria-hidden className="transition-transform group-hover:translate-x-1">
              ↗
            </span>
          </a>
          <div className="mono-detail text-[var(--ink-300)]">
            <kbd className="mr-2 rounded border border-[var(--line)] px-1.5 py-0.5 text-[10px] tracking-[0.28em]">
              ESC
            </kbd>
            back
            <kbd className="ml-4 mr-2 rounded border border-[var(--line)] px-1.5 py-0.5 text-[10px] tracking-[0.28em]">
              ↑↓
            </kbd>
            prev / next era
          </div>
        </div>
      </footer>
    </div>
  );
}

function MetaItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="mono-detail text-[var(--ink-300)]">{label}</dt>
      <dd className="mt-2 font-serif text-[15px] leading-[1.35] text-[var(--ink-900)]">
        {value}
      </dd>
    </div>
  );
}
