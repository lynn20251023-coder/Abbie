import { motion } from "motion/react";

/**
 * AiManifesto — between Hero and Works.
 *
 * Reframes AI from "one of four case studies" to "how I work." The other
 * three entries in PROJECTS are B-to-B product cases; AI is a continuous
 * practice running alongside all of them. Putting it inside the 2×2 works
 * grid misrepresents the relationship and forced the page to surface
 * 20+ bullet points of timeline detail.
 *
 * Here: four-era timeline compressed to one line each, a strong personal
 * statement, and a single link to the full timeline page for anyone who
 * wants the deep dive.
 */
const eras = [
  {
    year: "2023",
    tag: "试验田",
    line: "Midjourney + SD 建立生成式直觉，测试审美、稳定性、批量化产出边界。",
  },
  {
    year: "2024",
    tag: "工作流",
    line: "关注点从「能不能生成」转向「能不能稳定协作」。AI 进设计工作流。",
  },
  {
    year: "2025",
    tag: "多模态",
    line: "多模态成熟，AI 理解上下文，参与原型、交互想法与产品表达的构建。",
  },
  {
    year: "2026",
    tag: "Agent",
    line: "Vibe Coding。把 AI 从灵感工具升级为可重复调用的工作流节点——比如这个网站。",
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
          <p className="mono-detail text-[var(--ink-300)]">On AI · How I work</p>
          <h2
            className="display-italic mt-5"
            style={{
              fontSize: "clamp(44px, 7.4vw, 96px)",
              lineHeight: "0.94",
              letterSpacing: "-0.06em",
            }}
          >
            AI isn&rsquo;t a case —
            <br />
            it&rsquo;s how I work.
          </h2>
          <p className="mt-7 font-serif text-[17px] leading-[1.65] text-[var(--ink-600)] md:text-[19px]">
            别的三个项目回答&ldquo;我做了什么&rdquo;，这一条回答&ldquo;我怎么做&rdquo;——从
            2023 年第一次用 Midjourney 开始，AI
            就一直在我的设计工作流里，四年来一直在变位置。
          </p>
        </motion.div>

        <ol className="mt-16 grid gap-px bg-[var(--line)] md:mt-20 md:grid-cols-4">
          {eras.map((era, index) => (
            <motion.li
              key={era.year}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.6, delay: index * 0.07, ease: [0.19, 1, 0.22, 1] }}
              className="flex flex-col gap-3 bg-[var(--canvas)] p-7 md:gap-4 md:p-8"
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
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.22, ease: [0.19, 1, 0.22, 1] }}
          className="mt-10 flex flex-wrap items-center gap-6"
        >
          <a
            href="/?case=ai"
            className="mono-detail inline-flex items-center gap-3 border-b border-[var(--ink-900)]/30 pb-2 text-[var(--ink-900)] transition-colors hover:border-[var(--ink-900)]"
          >
            <span>完整时间线</span>
            <span aria-hidden>→</span>
          </a>
          <span className="mono-detail text-[var(--ink-300)]">或向下看三个产品落地案例</span>
        </motion.div>
      </div>
    </section>
  );
}
