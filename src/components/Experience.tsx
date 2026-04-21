import { motion } from "motion/react";
import { EXPERIENCE } from "@/src/constants";

/**
 * Experience / History — editorial timeline.
 *
 * Rewritten from absolute-px-on-1186px-height layout that overflowed on
 * narrower viewports. Now pure responsive grid: left column holds the
 * display title, right column the timeline rows. Each row itself is a
 * fluid grid of [period · company · role+blurb] that collapses to stacked
 * on mobile.
 */
export default function Experience() {
  return (
    <section id="experience" className="py-24 text-[var(--ink-900)] md:py-[128px]">
      <div className="container-editorial">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,2.2fr)] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.72, ease: [0.19, 1, 0.22, 1] }}
          >
            <h2
              className="display-italic text-[var(--ink-900)]"
              style={{
                fontSize: "clamp(72px, 11vw, 128px)",
                lineHeight: "0.82",
                letterSpacing: "-0.08em",
              }}
            >
              HISTORY
            </h2>
            <p
              className="mt-3 font-serif text-[var(--ink-200)]"
              style={{
                fontSize: "clamp(28px, 4vw, 48px)",
                lineHeight: "0.95",
                letterSpacing: "-0.03em",
              }}
            >
              工作经历
            </p>
          </motion.div>

          <div>
            {EXPERIENCE.map((item, index) => (
              <motion.article
                key={item.company}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.28 }}
                transition={{ duration: 0.66, delay: index * 0.07, ease: [0.19, 1, 0.22, 1] }}
                className="grid gap-3 border-t border-[var(--line)] py-10 md:gap-6 md:py-14 md:grid-cols-[minmax(0,120px)_minmax(0,1fr)_minmax(0,1.6fr)] md:gap-x-8 md:items-baseline"
              >
                <p className="font-[var(--font-mono)] text-[10px] uppercase leading-[12px] tracking-[0.32em] text-[var(--ink-400)]">
                  {item.period}
                </p>

                <h3 className="font-serif text-[22px] font-bold leading-[1.25] tracking-[-0.02em] text-[var(--ink-900)] md:text-[24px]">
                  {item.company}
                </h3>

                <div>
                  <p className="font-serif text-[20px] font-bold leading-[1.25] tracking-[-0.02em] text-[var(--ink-900)] md:text-[22px]">
                    {item.role}
                  </p>
                  <p className="mt-3 font-serif text-[15px] leading-[1.75] text-[var(--ink-600)] md:text-[16px]">
                    {item.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
