import { motion } from "motion/react";
import { EXPERIENCE } from "@/src/constants";
import type { CSSProperties } from "react";

const rowHeights = [330, 299, 299];

export default function Experience() {
  return (
    <section id="experience" className="bg-[#fcfcfc] text-[#101114] max-lg:py-24">
      <div className="container-editorial relative max-lg:space-y-20 lg:h-[1186px]">
        <div className="max-lg:space-y-2 lg:absolute lg:left-0 lg:top-[128px] lg:w-[447px]">
          <div className="lg:-ml-[73px]">
            <h2 className="display-italic text-[84px] leading-[0.82] tracking-[-0.08em] text-[#101114] md:text-[128.16px] md:leading-[105px] md:tracking-[-10.25px]">
              HISTORY
            </h2>
            <p className="mt-[9px] font-serif text-[32px] leading-[0.95] tracking-[-0.03em] text-[#dedfe5] md:text-[48.06px] md:leading-[39px] md:tracking-[-1.44px]">
              工作经历
            </p>
          </div>
        </div>

        <div className="max-lg:space-y-0 lg:absolute lg:left-[511px] lg:top-[128px] lg:w-[769px]">
          {EXPERIENCE.map((item, index) => (
            <motion.article
              key={item.company}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.28 }}
              transition={{ duration: 0.66, delay: index * 0.07, ease: [0.19, 1, 0.22, 1] }}
              className="border-t border-[#e5e7eb] max-lg:grid max-lg:gap-y-6 max-lg:py-12 lg:grid lg:h-[var(--row-height)] lg:grid-cols-[202px_226px_261px] lg:gap-x-10 lg:px-8"
              style={{ "--row-height": `${rowHeights[index]}px` } as CSSProperties}
            >
              <div className="lg:pt-[64px]">
                <p className="font-[var(--font-mono)] text-[10px] leading-[12px] uppercase tracking-[4.2px] text-[#9ea3ae]">
                  {item.period}
                </p>
              </div>

              <div className="lg:pt-[64px]">
                <h3 className="font-serif text-[25px] font-bold leading-[32px] tracking-[-1.25px] text-[#101114]">
                  {item.company}
                </h3>
              </div>

              <div className="lg:pt-[64px]">
                <p className="font-serif text-[24px] font-bold leading-[30px] tracking-[-1.2px] text-[#101114]">
                  {item.role}
                </p>
                <p className="mt-4 max-w-[271px] font-serif text-[17px] leading-[31px] text-[#7b7f8a]">
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
