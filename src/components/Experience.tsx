import { motion } from "motion/react";
import { EXPERIENCE } from "@/src/constants";
import SectionMarker from "./SectionMarker";

/**
 * Experience / History — editorial timeline.
 *
 * Section marker replaces the former big HISTORY/工作经历 display-italic
 * title block. One first-person connector sentence bridges from Works.
 */
export default function Experience() {
  return (
    <section id="experience" className="py-20 text-[var(--ink-900)] md:py-28">
      <div className="container-editorial">
        <SectionMarker label="HISTORY" labelCn="工作经历" trail="3 companies">
          它们分别来自三家挺不一样的公司。
        </SectionMarker>

        <div className="mt-12 md:mt-16">
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
    </section>
  );
}
