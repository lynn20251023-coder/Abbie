import { motion } from "motion/react";
import { SKILLS } from "@/src/constants";
import SectionMarker from "./SectionMarker";

/**
 * Skills / Expertise — daily tools.
 *
 * Section marker replaces the former big EXPERTISE/专业技能 block.
 */
export default function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-24 py-20 text-[var(--ink-900)] md:py-28"
    >
      <div className="container-editorial">
        <SectionMarker label="EXPERTISE" labelCn="专业技能" trail="daily tools">
          这些是我每天在用的工具，也是我觉得值得再深入的方向。
        </SectionMarker>

        <div className="mt-12 border-l border-t border-[var(--line)] md:mt-16 md:grid md:grid-cols-2 lg:grid-cols-4">
          {SKILLS.map((skill, index) => (
            <motion.article
              key={skill.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.28 }}
              transition={{ duration: 0.62, delay: index * 0.07, ease: [0.19, 1, 0.22, 1] }}
              className="flex min-h-[240px] flex-col justify-between border-b border-r border-[var(--line)] px-7 py-9 transition-colors duration-300 ease-editorial hover:bg-[var(--canvas)] md:min-h-[260px] md:p-10"
            >
              <p className="font-[var(--font-mono)] text-[10px] uppercase leading-[12px] tracking-[0.32em] text-[var(--ink-300)]">
                {String(index + 1).padStart(2, "0")}
              </p>
              <div className="mt-10">
                <h3 className="font-[var(--font-ui)] text-[20px] font-bold leading-[1.2] tracking-[-0.02em] text-[var(--ink-900)] md:text-[22px]">
                  {skill.name}
                </h3>
                <ul className="mt-5 space-y-1">
                  {skill.tools.map((tool) => (
                    <li key={tool} className="font-serif text-[14.5px] leading-[1.9] text-[var(--ink-600)] md:text-[15px]">
                      · {tool}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
