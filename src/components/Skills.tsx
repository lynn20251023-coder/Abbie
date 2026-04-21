import { motion } from "motion/react";
import { SKILLS } from "@/src/constants";

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 bg-[#050505] text-white">
      <div className="mx-auto w-full max-w-[1602px] px-6 py-24 md:px-10 lg:h-[838px] lg:px-0 lg:py-0">
        <div className="lg:relative lg:h-full">
          <div className="space-y-10 lg:absolute lg:left-[161px] lg:top-[116.5px] lg:grid lg:w-[1280px] lg:grid-cols-[603px_544px] lg:items-center lg:justify-between lg:gap-[133px] lg:space-y-0">
            <div className="w-full lg:w-[603px]">
              <h2 className="display-italic text-[84px] leading-[0.82] tracking-[-0.08em] text-white md:text-[128.16px] md:leading-[105.09px] md:tracking-[-10.25px]">
              EXPERTISE
              </h2>
              <p className="mt-[11px] font-serif text-[32px] leading-[0.95] tracking-[-0.03em] text-white/30 md:text-[48.06px] md:leading-[39.41px] md:tracking-[-1.44px]">
                专业技能
              </p>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
              className="w-full font-serif text-[18px] leading-[30.6px] text-[#9195a0] lg:w-[544px]"
            >
              “设计 / 技术 / 策略的完美融合。深耕 UI/UX 领域，并积极探索 AI 与设计的无限可能。通过 AIGC 工作流赋能创意，致力于构建更智能、更具温度的数字产品体验。”
            </motion.p>
          </div>

          <div className="mt-16 border-l border-t border-[#2f2f2f] md:grid md:grid-cols-2 lg:absolute lg:left-[164px] lg:top-[369px] lg:mt-0 lg:w-[1276px] lg:grid-cols-4">
            {SKILLS.map((skill, index) => (
              <motion.article
                key={skill.name}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.28 }}
                transition={{ duration: 0.62, delay: index * 0.07, ease: [0.19, 1, 0.22, 1] }}
                className="min-h-[320px] border-b border-r border-[#2f2f2f] bg-[#050505] px-[38px] pb-[38px] pt-[38px] transition-colors duration-300 ease-editorial hover:bg-[#080809] md:min-h-[340px] md:px-[47px] md:pb-[48px] md:pt-[47px] lg:h-[340px] lg:w-[319px]"
              >
                <p className="font-[var(--font-mono)] text-[10px] leading-[12px] uppercase tracking-[4.2px] text-[#626671]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-[54px] font-[var(--font-ui)] text-[24px] font-bold leading-[28.8px] tracking-[-1.2px] text-white">
                  {skill.name}
                </h3>
                <ul className="mt-[33px] space-y-0">
                  {skill.tools.map((tool) => (
                    <li key={tool} className="font-serif text-[16px] leading-[30.4px] text-[#8f939d]">
                      · {tool}
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
