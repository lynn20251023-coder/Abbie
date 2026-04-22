import { motion } from "motion/react";
import { PERSONAL_INFO } from "@/src/constants";

/**
 * Hero — fluid editorial first screen.
 *
 * Previously: fixed 1602px dark-black canvas with absolute-px positioning.
 * That made the home page require horizontal scroll on anything under
 * desktop width and created a jarring black→white break before Works.
 *
 * Now: canvas-palette, responsive grid, clamp()-based type scale. The
 * UIUX watermark stays as a pale background element (now ink-900/4% so
 * it sits on the canvas tone instead of fighting a black ground). A thin
 * accent divider and "Scroll to explore" indicator anchor the bottom.
 */
export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-[var(--canvas)] text-[var(--ink-900)]">
      {/* Watermark — decorative, pointer-events-none so it never eats clicks. */}
      <span
        aria-hidden
        className="display-italic pointer-events-none absolute select-none text-[var(--ink-900)]/[0.04]"
        style={{
          bottom: "clamp(-120px, -8vw, -40px)",
          right: "clamp(-40px, -2vw, 40px)",
          fontSize: "clamp(200px, 40vw, 544px)",
          lineHeight: "0.76",
          letterSpacing: "-0.08em",
        }}
      >
        UIUX
      </span>

      <div className="case-canvas relative flex min-h-[88vh] flex-col justify-end pt-[140px] pb-[72px] md:min-h-[92vh] md:pb-[96px]">
        <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end md:gap-16">
          {/* Title block */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.82, ease: [0.19, 1, 0.22, 1] }}
          >
            <p className="mono-detail text-[var(--ink-400)]">
              {PERSONAL_INFO.role} · {PERSONAL_INFO.experience}
            </p>

            <h1
              className="display-italic mt-8 text-[var(--ink-900)]"
              style={{
                fontSize: "clamp(80px, 16vw, 172px)",
                lineHeight: "0.88",
                letterSpacing: "-0.08em",
              }}
            >
              ABBIE
            </h1>

            <div
              className="display-italic mt-2 text-transparent"
              style={{
                fontSize: "clamp(56px, 12vw, 138px)",
                lineHeight: "0.82",
                letterSpacing: "-0.06em",
                WebkitTextStroke: "1.2px rgba(16,17,20,0.22)",
              }}
            >
              PORTFOLIO<span className="text-[var(--ink-900)]">.</span>
            </div>
          </motion.div>

          {/* Summary + scroll hint */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.82, delay: 0.12, ease: [0.19, 1, 0.22, 1] }}
            className="max-w-[440px] md:text-right"
          >
            <p className="font-serif text-[17px] leading-[1.65] text-[var(--ink-600)] md:text-[18px]">
              &ldquo;{PERSONAL_INFO.summary}&rdquo;
            </p>

            <a
              href="#works"
              className="mono-detail mt-10 inline-flex items-center gap-3 border-t border-[var(--ink-900)]/10 pt-4 text-[var(--ink-400)] transition-colors hover:text-[var(--ink-900)]"
            >
              <span>Scroll to explore</span>
              <motion.span
                aria-hidden
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 1.6, ease: "easeInOut", repeat: Infinity }}
              >
                ↓
              </motion.span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
