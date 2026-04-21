import { motion } from "motion/react";
import { SKILLS } from "@/src/constants";

/**
 * Skills — editorial expertise section on the shared canvas palette.
 *
 * Rewritten from absolute-px-on-1602px dark canvas to a fluid grid on ink-
 * on-canvas ground, consistent with the rest of the home page. Keeps the
 * display-italic hero type and the 4-column card matrix; no more black
 * interlude breaking the scroll rhythm.
 */
export default function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-24 bg-[var(--surface)] py-20 text-[var(--ink-900)] md:py-[128px]"
    >
      <div className="container-editorial">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,440px)] md:items-end md:gap-16">
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
              EXPERTISE
            </h2>
            <p
              className="mt-3 font-serif text-[var(--ink-200)]"
              style={{
                fontSize: "clamp(28px, 4vw, 48px)",
                lineHeight: "0.95",
                letterSpacing: "-0.03em",
              }}
            >
              专业技能
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.72, delay: 0.08, ease: [0.19, 1, 0.22, 1] }}
            className="font-serif text-[17px] leading-[1.7] text-[var(--ink-600)] md:text-[18px]"
          >
            &ldquo;设计 / 技术 / 策略的完美融合。深耕 UI/UX 领域，并积极探索 AI 与设计的无限可能。通过 AIGC 工作流赋能创意，致力于构建更智能、更具温度的数字产品体验。&rdquo;
          </motion.p>
        </div>

        <div className="mt-16 border-l border-t border-[var(--line)] md:mt-20 md:grid md:grid-cols-2 lg:grid-cols-4">
          {SKILLS.map((skill, index) => (
            <motion.article
              key={skill.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.28 }}
              transition={{ duration: 0.62, delay: index * 0.07, ease: [0.19, 1, 0.22, 1] }}
              className="flex min-h-[280px] flex-col justify-between border-b border-r border-[var(--line)] px-8 py-10 transition-colors duration-300 ease-editorial hover:bg-[var(--canvas)] md:min-h-[320px] md:p-12"
            >
              <p className="font-[var(--font-mono)] text-[10px] uppercase leading-[12px] tracking-[0.32em] text-[var(--ink-300)]">
                {String(index + 1).padStart(2, "0")}
              </p>
              <div className="mt-12">
                <h3 className="font-[var(--font-ui)] text-[22px] font-bold leading-[1.2] tracking-[-0.02em] text-[var(--ink-900)] md:text-[24px]">
                  {skill.name}
                </h3>
                <ul className="mt-6 space-y-1">
                  {skill.tools.map((tool) => (
                    <li key={tool} className="font-serif text-[15px] leading-[1.9] text-[var(--ink-600)] md:text-[16px]">
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
