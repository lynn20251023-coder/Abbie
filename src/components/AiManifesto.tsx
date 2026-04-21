import { motion } from "motion/react";

/**
 * AiManifesto — between Hero and Works.
 *
 * Reframes AI as practice ("how I work"), not another case study.
 * Four-era timeline compressed to one line each, with a single prominent
 * CTA button to the full timeline page.
 */
const eras = [
  {
    year: "2023",
    tag: "Exploration",
    line: "Midjourney + SD 建立生成式直觉，测试审美、稳定性、批量化产出。",
  },
  {
    year: "2024",
    tag: "Workflow",
    line: "从「能不能生成」转向「能不能稳定协作」，AI 进入日常设计流程。",
  },
  {
    year: "2025",
    tag: "Multimodal",
    line: "多模态成熟，AI 理解上下文，参与原型、交互想法与产品表达的构建。",
  },
  {
    year: "2026",
    tag: "Agent",
    line: "Vibe Coding。AI 升级为可重复调用的工作流节点——比如这个网站。",
  },
];

export default function AiManifesto() {
  return (
    <section id="ai-manifesto" className="py-24 text-[var(--ink-900)] md:py-[128px]">
      <div className="container-editorial">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.72, ease: [0.19, 1, 0.22, 1] }}
          className="max-w-[860px]"
        >
          <p className="mono-detail text-[var(--ink-300)]">How I work with AI</p>
          <h2
            className="display-italic mt-5"
            style={{
              fontSize: "clamp(44px, 7.4vw, 96px)",
              lineHeight: "0.94",
              letterSpacing: "-0.06em",
            }}
          >
            AI IN MY
            <br />
            DESIGN WORKFLOW.
          </h2>
        </motion.div>

        <ol className="mt-14 grid gap-px bg-[var(--line)] md:mt-20 md:grid-cols-4">
          {eras.map((era, index) => (
            <motion.li
              key={era.year}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.6, delay: index * 0.07, ease: [0.19, 1, 0.22, 1] }}
              className="flex flex-col gap-3 bg-[var(--surface)] p-7 md:gap-4 md:p-8"
            >
              <div className="flex items-baseline gap-3">
                <span className="display-italic text-[40px] leading-none tracking-[-0.04em] text-[var(--ink-900)] md:text-[48px]">
                  {era.year}
                </span>
                <span className="mono-detail text-[var(--ink-400)]">{era.tag}</span>
              </div>
              <p className="font-serif text-[14.5px] leading-[1.55] text-[var(--ink-600)] md:text-[15px]">
                {era.line}
              </p>
            </motion.li>
          ))}
        </ol>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.55, delay: 0.22, ease: [0.19, 1, 0.22, 1] }}
          className="mt-12 flex justify-start md:mt-16"
        >
          <a
            href="/?case=ai"
            className="group inline-flex items-center gap-4 bg-[var(--ink-900)] px-8 py-5 text-white transition-all duration-[var(--dur-base)] ease-[var(--ease-editorial)] hover:bg-[var(--ink-700)] md:px-10 md:py-6"
          >
            <span className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.32em]">
              Read the full AI journey
            </span>
            <span
              aria-hidden
              className="inline-flex h-6 w-6 items-center justify-center transition-transform duration-[var(--dur-base)] ease-[var(--ease-editorial)] group-hover:translate-x-1"
            >
              →
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
