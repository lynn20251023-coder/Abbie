import { motion } from "motion/react";
import { PROJECTS } from "@/src/constants";
import ProjectCard from "./ProjectCard";

export default function Works() {
  return (
    <section id="works" className="scroll-mt-24 bg-white py-24 text-[#101114] md:py-[128px]">
      <div className="container-editorial">
        <div className="grid gap-10 lg:grid-cols-[680px_544px] lg:items-end lg:justify-between lg:gap-[56px]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="display-italic text-[84px] leading-[0.82] tracking-[-0.08em] text-[#101114] md:text-[128.16px] md:leading-[105px] md:tracking-[-10.25px]">
              WORKS
            </h2>
            <p className="mt-[9px] font-serif text-[32px] leading-[0.95] tracking-[-0.03em] text-[#dedfe5] md:text-[48.06px] md:leading-[39px] md:tracking-[-1.44px]">
              作品展示
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.62, delay: 0.04, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-[27px] lg:pt-[41px]"
          >
            <p className="font-serif text-[18px] leading-[30.6px] text-[#5f636e]">
              “涵盖金融科技、SaaS 系统及电商零售领域的项目集合，专注于以用户为中心的解决方案与卓越的视觉表现。”
            </p>
            <p className="font-[var(--font-mono)] text-[11px] leading-[13.2px] uppercase tracking-[3.08px] text-[#a0a4af]">
              Portfolio / 2020-2026
            </p>
          </motion.div>
        </div>

        <div className="mt-[72px] grid border border-[#e7e7ea] md:grid-cols-2">
          {PROJECTS.map((project, index) => (
            <div
              key={project.id}
              className={[
                index < 2 ? "border-b border-[#e7e7ea]" : "",
                index % 2 === 0 ? "md:border-r md:border-[#e7e7ea]" : "",
              ].join(" ")}
            >
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
