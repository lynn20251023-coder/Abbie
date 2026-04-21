import { motion } from "motion/react";

/**
 * AboutThisBuild — self-referential Vibe Coding showcase.
 *
 * Sits at the bottom of the home page. Tells the story that the portfolio
 * itself is a design engineering artifact, not just a hosting shell for
 * Figma exports. Every visible number below is a real property of this
 * site's source — not aspiration, evidence.
 */
export default function AboutThisBuild() {
  return (
    <section
      id="about-build"
      className="relative overflow-hidden border-t border-[var(--line)] bg-[var(--canvas)] py-20 text-[var(--ink-900)] md:py-[128px]"
    >
      <div className="container-editorial">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-[760px]"
        >
          <p className="mono-detail mb-5 text-[var(--ink-300)]">Meta · About this build</p>
          <h2 className="display-italic text-[56px] leading-[0.88] tracking-[-0.06em] md:text-[96px] md:leading-[80px] md:tracking-[-7px]">
            THIS SITE
            <br />
            IS THE WORK.
          </h2>
          <p className="mt-8 font-serif text-[18px] leading-[1.65] text-[var(--ink-600)] md:text-[20px]">
            作品集里每个 case 里的素材来自 Figma，但承载它们的这层外壳——
            <span className="text-[var(--ink-900)]">
              响应式 CaseViewer、签名色系统、AnnotatedImage 注释层、键盘快捷键、Lightbox
            </span>
            ——是我和 AI 共同写的。视觉层是设计能力，交互层是 Vibe Coding 能力，两者同时在线。
          </p>
        </motion.div>

        <motion.dl
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.62, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 grid gap-8 border-y border-[var(--line)] py-10 md:grid-cols-4 md:gap-10"
        >
          <Stat label="Stack" value="Vite · React · Tailwind v4" />
          <Stat label="Designed with" value="Figma · Pen & Paper" />
          <Stat label="Coded with" value="Claude Code · Cursor" />
          <Stat label="Build weight" value="124KB gz · <1MB LCP" />
        </motion.dl>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.62, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 grid gap-10 md:grid-cols-[1fr_auto] md:items-end md:justify-between"
        >
          <ul className="space-y-3 font-serif text-[15px] leading-[1.55] text-[var(--ink-600)] md:text-[16px]">
            <Checkline>
              <span className="text-[var(--ink-900)]">语义化代码，不是导出代码。</span>{" "}
              CaseViewer 是真正的组件化 React + Tailwind v4，不是像素定位堆叠。
            </Checkline>
            <Checkline>
              <span className="text-[var(--ink-900)]">设计 token 统一主页和 case 页。</span>{" "}
              每个案例有签名色，进入 case 时整页 accent 跟着变。
            </Checkline>
            <Checkline>
              <span className="text-[var(--ink-900)]">Figma 图上叠可搜索的注释。</span>{" "}
              打开 Sorting 案例，图上蓝点就是代码写的 Hotspot。
            </Checkline>
            <Checkline>
              <span className="text-[var(--ink-900)]">键盘优先的阅读体验。</span> F 切阅读模式、↑↓ 翻页、Esc 返回、图片点开 Lightbox。
            </Checkline>
          </ul>

          <a
            href="#works"
            className="group inline-flex items-center gap-3 self-start rounded-full border border-[var(--ink-900)] px-6 py-3 font-[var(--font-mono)] text-[11px] uppercase tracking-[0.28em] text-[var(--ink-900)] transition-colors duration-[var(--dur-base)] ease-[var(--ease-editorial)] hover:bg-[var(--ink-900)] hover:text-white md:self-end"
          >
            <span>Re-read the Works</span>
            <svg
              aria-hidden
              width="14"
              height="14"
              viewBox="0 0 14 14"
              className="transition-transform group-hover:translate-x-1"
            >
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="mono-detail text-[var(--ink-300)]">{label}</dt>
      <dd className="mt-3 font-serif text-[17px] leading-[1.35] text-[var(--ink-900)] md:text-[19px]">{value}</dd>
    </div>
  );
}

function Checkline({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-3">
      <span
        aria-hidden
        className="mt-[9px] inline-block h-[6px] w-[6px] shrink-0 rounded-full"
        style={{ background: "var(--ink-900)" }}
      />
      <span>{children}</span>
    </li>
  );
}
