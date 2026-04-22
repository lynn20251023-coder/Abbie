import { useEffect, useMemo, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { PERSONAL_INFO } from "@/src/constants";

/**
 * AiCasePage — detail view for "/?case=ai".
 *
 * Rewritten on real local assets (replacing the dead Figma MCP URLs).
 * Structure preserved from Abbie's original Figma:
 *   1. Personal 4-era timeline of AI practice (2023→2026)
 *   2. Current work — AI 赋能与设计工程化
 *      · 对外：AIGC 帮助业务 (prompt demo → 3D SKU icon grid)
 *      · 对内：AI 帮助团队协作 (Before / Now + Figma→browser→GitHub flow)
 *   3. Demo link + back to works
 *
 * Chrome (sticky back, scroll progress, keyboard Esc) matches CaseViewer
 * so jumping between AI case and the other three feels consistent.
 */

const AI_DIR = "/case-assets/ai";

interface Era {
  year: string;            // "2023"
  theme: string;           // "爆发年"
  label: string;           // "AI Exploration / 01"
  title: string;
  blocks: ReactNode[];     // mixed spans for inline highlighting
  logos: { src: string; label: string }[];
  screens: string[];       // mockup screenshots
}

const ERAS: Era[] = [
  {
    year: "2023",
    theme: "爆发年",
    label: "AI Exploration / 01",
    title: "从「惊艳感」出发，建立自己的生成式试验场",
    blocks: [
      (
        <p key="2023-1" className="font-serif text-[16px] leading-[1.75] text-[var(--ink-600)] md:text-[17px]">
          <span className="text-[var(--ink-900)]">· 生成式的鼻祖 Midjourney：</span>
          当时它对人物一致性控制性还相对较差，但审美一直不错。我很想「征服」它，持续探索它能为我产出什么——当时用于工作还比较吃力，但做自媒体是一把好手，批量化产出也得到了真实的传播反馈。
        </p>
      ),
      (
        <p key="2023-2" className="font-serif text-[16px] leading-[1.75] text-[var(--ink-600)] md:text-[17px]">
          <span className="text-[var(--ink-900)]">· Stable Diffusion：</span>
          从「A girl XXX」开始追踪 SD，探索怎么炼丹、怎么控制一致性。
        </p>
      ),
    ],
    logos: [
      { src: `${AI_DIR}/logo-midjourney.webp`, label: "Midjourney" },
      { src: `${AI_DIR}/logo-stablediffusion.webp`, label: "Stable Diffusion" },
      { src: `${AI_DIR}/logo-stability.webp`, label: "Stability AI" },
      { src: `${AI_DIR}/logo-chatgpt.webp`, label: "ChatGPT" },
    ],
    screens: [`${AI_DIR}/screen-01.webp`, `${AI_DIR}/screen-02.webp`],
  },
  {
    year: "2024",
    theme: "控制年",
    label: "AI Workflow / 02",
    title: "从「惊艳」转向「可控、可编辑、可接入工作流」",
    blocks: [
      (
        <p key="2024-1" className="font-serif text-[16px] leading-[1.75] text-[var(--ink-600)] md:text-[17px]">
          <span className="text-[var(--ink-900)]">· Figma AI：</span>
          把 AI 放进视觉搜索、资源搜索、文案填充、快速原型、UI 首稿生成等真实设计动作里。
        </p>
      ),
      (
        <p key="2024-2" className="font-serif text-[16px] leading-[1.75] text-[var(--ink-600)] md:text-[17px]">
          <span className="text-[var(--ink-900)]">· SD 和 Midjourney</span>
          也变得越来越可控——局部控制、6 根手指的问题都慢慢得到优化，虽然成本较高，但 SD 已经可以做一些商业运营设计了，电商方向最为明显。
        </p>
      ),
      (
        <p key="2024-3" className="font-serif text-[16px] leading-[1.75] text-[var(--ink-600)] md:text-[17px]">
          <span className="text-[var(--ink-900)]">· Runway</span>
          开始崭露头角，DomoAI 在扩展视频质量、尺寸等方面不错。
        </p>
      ),
      (
        <p key="2024-4" className="font-serif text-[16px] leading-[1.75] text-[var(--ink-600)] md:text-[17px]">
          <span className="text-[var(--ink-900)]">· GPT-4o 图像生成</span>
          对文字渲染、图像输入理解、对话式多轮编辑更强了。
        </p>
      ),
    ],
    logos: [
      { src: `${AI_DIR}/logo-figma.webp`, label: "Figma AI" },
      { src: `${AI_DIR}/logo-runway.webp`, label: "Runway" },
      { src: `${AI_DIR}/logo-chatgpt.webp`, label: "GPT-4o" },
    ],
    screens: [`${AI_DIR}/screen-03.webp`],
  },
  {
    year: "2025",
    theme: "多模态融合年",
    label: "Multimodal / 03",
    title: "AI 开始理解上下文，进入原型与产品表达层",
    blocks: [
      (
        <p key="2025-0" className="font-serif text-[16px] leading-[1.75] text-[var(--ink-600)] md:text-[17px]">
          AI 开始不只是「生成资产」，而是逐渐能理解上下文、连续修改、做原型，甚至碰到代码。
        </p>
      ),
      (
        <p key="2025-1" className="font-serif text-[16px] leading-[1.75] text-[var(--ink-600)] md:text-[17px]">
          <span className="text-[var(--ink-900)]">· Figma Make：</span>
          prompt-to-app，从静态稿直接走向可交互原型。
        </p>
      ),
      (
        <p key="2025-2" className="font-serif text-[16px] leading-[1.75] text-[var(--ink-600)] md:text-[17px]">
          <span className="text-[var(--ink-900)]">· Gemini、Nanobanana、veo3</span>
          从静态到动态都有了质的飞跃。
        </p>
      ),
      (
        <p key="2025-3" className="font-serif text-[16px] leading-[1.75] text-[var(--ink-600)] md:text-[17px]">
          <span className="text-[var(--ink-900)]">· 即梦、LibLibAI 等国内工具</span>
          在设计工作流慢慢普及，更懂中国市场且性价比较高。
        </p>
      ),
      (
        <p key="2025-4" className="font-serif text-[16px] leading-[1.75] text-[var(--ink-600)] md:text-[17px]">
          <span className="text-[var(--ink-900)]">· 本地 Agent（Claude、Codex...）</span>
          开始协助 UI/UX 设计工作，Lovable、Lovart、Galileo AI、UX Pilot 等对话式设计工具兴起。
        </p>
      ),
    ],
    logos: [
      { src: `${AI_DIR}/logo-gemini.webp`, label: "Gemini" },
      { src: `${AI_DIR}/logo-lovable.webp`, label: "Lovable" },
      { src: `${AI_DIR}/logo-v0.webp`, label: "v0" },
      { src: `${AI_DIR}/logo-figma-alt.webp`, label: "Figma Make" },
    ],
    screens: [`${AI_DIR}/screen-04.webp`, `${AI_DIR}/screen-05.webp`],
  },
  {
    year: "2026",
    theme: "设计工作流好伙伴",
    label: "Agent Collaboration / 04",
    title: "把 AI 正式纳入 UI 设计协作链路",
    blocks: [
      (
        <p key="2026-0" className="font-serif text-[16px] leading-[1.75] text-[var(--ink-600)] md:text-[17px]">
          AI 已经能帮 UI 设计师做首稿、搜相似界面、填真实文案、快速出原型、把静态稿变交互稿，甚至往代码和原型走。
        </p>
      ),
      (
        <p key="2026-1" className="font-serif text-[16px] leading-[1.75] text-[var(--ink-600)] md:text-[17px]">
          <span className="text-[var(--ink-900)]">· Figma Make、UX Pilot、Vercel v0、Dovetail</span>
          协助探索方向、出方案。
        </p>
      ),
      (
        <p key="2026-2" className="font-serif text-[16px] leading-[1.75] text-[var(--ink-600)] md:text-[17px]">
          <span className="text-[var(--ink-900)]">· Figma + MCP + 本地 Agent</span>
          让从设计到交付效率都得以提升。
        </p>
      ),
      (
        <p key="2026-3" className="font-serif text-[16px] leading-[1.75] text-[var(--ink-600)] md:text-[17px]">
          <span className="text-[var(--ink-900)]">· 本地 Agent + Skill</span>
          已经能帮我们生成设计规范。还有很多待续。
        </p>
      ),
    ],
    logos: [
      { src: `${AI_DIR}/logo-claude.webp`, label: "Claude" },
      { src: `${AI_DIR}/logo-codex.webp`, label: "Codex" },
      { src: `${AI_DIR}/logo-cursor.webp`, label: "Cursor" },
      { src: `${AI_DIR}/logo-github.webp`, label: "GitHub" },
      { src: `${AI_DIR}/logo-figma.webp`, label: "Figma" },
    ],
    screens: [`${AI_DIR}/screen-06.webp`, `${AI_DIR}/screen-07.webp`],
  },
];

const CUBES = Array.from({ length: 15 }, (_, i) => `${AI_DIR}/cube-${String(i + 1).padStart(2, "0")}.webp`);

export default function AiCasePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<Array<HTMLElement | null>>([]);
  const [activeSection, setActiveSection] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 28, restDelta: 0.001 });

  const accentStyle = useMemo<CSSProperties>(
    () => ({ ["--case-accent" as keyof CSSProperties]: "var(--case-ai)" } as CSSProperties),
    [],
  );

  // Track active section (for counter in header)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = sectionRefs.current.findIndex((ref) => ref === entry.target);
            if (idx >= 0) setActiveSection(idx);
          }
        });
      },
      { threshold: 0.35 },
    );
    sectionRefs.current.forEach((ref) => ref && observer.observe(ref));
    return () => observer.disconnect();
  }, []);

  // Keyboard: Esc → home, arrows → jump between eras
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        window.location.href = "/#works";
      } else if (e.key === "ArrowDown" || e.key === "ArrowRight") {
        e.preventDefault();
        const next = Math.min(activeSection + 1, sectionRefs.current.length - 1);
        sectionRefs.current[next]?.scrollIntoView({ behavior: "smooth" });
      } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        e.preventDefault();
        const prev = Math.max(activeSection - 1, 0);
        sectionRefs.current[prev]?.scrollIntoView({ behavior: "smooth" });
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeSection]);

  const totalSections = ERAS.length + 1; // eras + current-work section

  return (
    <div ref={containerRef} className="relative bg-[var(--canvas)] text-[var(--ink-900)]" style={accentStyle}>
      <motion.div
        aria-hidden
        className="viewer-progress fixed left-0 right-0 top-0 z-[80] h-[2px] origin-left"
        style={{ scaleX }}
      />

      <header className="sticky top-0 z-[70] border-b border-[var(--line)] bg-[var(--surface)]/85 backdrop-blur-md">
        <div className="case-canvas flex items-center justify-between py-3 text-[11.2px] uppercase tracking-[0.32em] text-[var(--ink-600)]">
          <a href="/#works" className="transition-opacity hover:opacity-70">
            ← Back to Works
          </a>
          <span className="font-[var(--font-mono)]">
            {String(activeSection + 1).padStart(2, "0")} / {String(totalSections).padStart(2, "0")}
          </span>
        </div>
      </header>

      {/* Title block */}
      <section className="case-canvas pb-14 pt-20 md:pb-20 md:pt-28">
        <p className="mono-detail accent-text mb-4">Case Study · {PERSONAL_INFO.name}</p>
        <h1
          className="font-serif text-[var(--ink-900)]"
          style={{
            fontSize: "clamp(48px, 7vw, 88px)",
            lineHeight: "0.98",
            letterSpacing: "-0.04em",
          }}
        >
          AI 在我的
          <br />
          设计工作流里
        </h1>
        <p className="mt-6 max-w-[720px] font-serif text-[var(--fs-lead)] leading-[1.55] text-[var(--ink-600)]">
          从 2023 年第一次用 Midjourney 开始，AI 就一直在我的设计工作流里，四年来一直在变位置。这是我做过的四个阶段的记录——不是行业大事年表，是我本人在用 AI 这件事上的真实演变。
        </p>

        <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-[var(--line)] pt-8 md:grid-cols-4">
          <MetaItem label="Timeline" value="2023 — now" />
          <MetaItem label="Practice" value="持续在做" />
          <MetaItem label="Focus" value="设计 × AI 工作流" />
          <MetaItem label="Tools" value="Figma · Claude · Cursor" />
        </dl>
      </section>

      {/* Part 1 — personal timeline */}
      <section
        ref={(el) => {
          sectionRefs.current[0] = el;
        }}
        className="border-t border-[var(--line)]"
      >
        <div className="case-canvas py-14 md:py-20">
          <p className="mono-detail text-[var(--ink-400)]">— Part 01 · 个人对于 AI 的持续探索</p>
          <h2
            className="mt-4 font-serif font-semibold"
            style={{ fontSize: "clamp(28px, 3.6vw, 44px)", lineHeight: "1.1", letterSpacing: "-0.03em" }}
          >
            我和 AI 的四年
          </h2>
          <p className="mt-3 max-w-[620px] font-serif text-[15px] leading-[1.7] text-[var(--ink-600)] md:text-[16px]">
            *此页为设计类 AI 的探索，不完全。
          </p>
        </div>

        {ERAS.map((era, index) => (
          <motion.article
            key={era.year}
            ref={(el) => {
              sectionRefs.current[index + 1] = el;
            }}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
            className="case-canvas border-t border-[var(--line)] py-14 md:py-20"
          >
            <div className="grid gap-8 md:grid-cols-[minmax(0,240px)_minmax(0,1fr)] md:gap-14">
              <div>
                <p
                  className="display-italic text-[var(--ink-900)]"
                  style={{
                    fontSize: "clamp(56px, 7vw, 88px)",
                    lineHeight: "0.88",
                    letterSpacing: "-0.05em",
                  }}
                >
                  {era.year}
                </p>
                <p className="mt-2 font-serif text-[18px] leading-[1.3] text-[var(--ink-400)] md:text-[20px]">
                  {era.theme}
                </p>
                <p className="mono-detail mt-6 text-[var(--ink-300)]">{era.label}</p>
              </div>

              <div>
                <h3
                  className="font-serif font-semibold text-[var(--ink-900)]"
                  style={{
                    fontSize: "clamp(22px, 2.6vw, 30px)",
                    lineHeight: "1.2",
                    letterSpacing: "-0.025em",
                  }}
                >
                  {era.title}
                </h3>

                <div className="mt-6 space-y-4">{era.blocks}</div>

                {/* Tools logo row */}
                {era.logos.length > 0 && (
                  <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
                    {era.logos.map((logo) => (
                      <div
                        key={logo.label}
                        className="flex items-center gap-2 text-[var(--ink-600)]"
                        title={logo.label}
                      >
                        <img
                          src={logo.src}
                          alt={logo.label}
                          className="h-7 w-7 object-contain"
                          loading="lazy"
                        />
                        <span className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.28em]">
                          {logo.label}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Screens gallery */}
                {era.screens.length > 0 && (
                  <div className="mt-8 grid gap-3 sm:grid-cols-2">
                    {era.screens.map((src) => (
                      <div
                        key={src}
                        className="overflow-hidden rounded-[3px] border border-[var(--line)] bg-[var(--surface)]"
                      >
                        <img
                          src={src}
                          alt=""
                          loading="lazy"
                          className="block h-auto w-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </section>

      {/* Part 2 — Current work: AI 赋能与设计工程化 */}
      <section
        ref={(el) => {
          sectionRefs.current[ERAS.length + 1] = el;
        }}
        className="border-t border-[var(--line)] bg-[var(--surface)]"
      >
        <div className="case-canvas py-16 md:py-24">
          <p className="mono-detail text-[var(--ink-400)]">— Part 02 · 当前工作中</p>
          <h2
            className="mt-4 display-italic"
            style={{
              fontSize: "clamp(40px, 5.4vw, 72px)",
              lineHeight: "0.94",
              letterSpacing: "-0.05em",
            }}
          >
            AI 赋能与设计工程化
          </h2>

          <div className="mt-8 flex flex-wrap gap-3">
            {["探索精神", "团队协作", "赋能业务", "推动能力"].map((chip) => (
              <span
                key={chip}
                className="inline-flex items-center rounded-[4px] bg-[var(--ink-900)] px-4 py-2 text-[13px] font-medium tracking-[0.02em] text-white"
              >
                {chip}
              </span>
            ))}
          </div>

          <blockquote className="mt-10 max-w-[960px] border-l-2 border-[var(--ink-900)] pl-6 font-serif text-[17px] italic leading-[1.75] text-[var(--ink-600)] md:text-[19px]">
            「验证场景：蔬东坡 SaaS 智能分拣系统（当前在职实战）。在复杂业务中，我主导并跑通了这套 AI 资产标准化体系，现已成为团队日常交付的基础设施——始终保持对 AI 前沿技术的探索与实践。」
          </blockquote>

          {/* Subsection 1: 对外 */}
          <div className="mt-16 md:mt-20">
            <h3 className="font-serif text-[26px] font-bold leading-[1.2] tracking-[-0.02em] text-[var(--ink-900)] md:text-[32px]">
              对外（业务侧）：AIGC 如何帮助我们业务？
            </h3>
            <h4 className="mt-4 font-serif text-[20px] font-semibold tracking-[-0.015em] text-[var(--ink-600)] md:text-[24px]">
              痛点：传统商品实拍图背景杂乱、光线不一
            </h4>
            <p className="mt-3 max-w-[640px] font-serif text-[15px] leading-[1.7] text-[var(--ink-600)] md:text-[16px]">
              <span className="font-semibold text-[#c53030]">痛点：</span>
              可读性较差，增加一线员工认知负荷，对于需要高效完成单次作业的场景不太友好。
            </p>

            {/* Prompt demo → 3D cube grid */}
            <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:items-center">
              {/* Prompt code block */}
              <div className="overflow-hidden rounded-[8px] bg-[#1d2129] shadow-[0_16px_40px_-20px_rgba(16,17,20,0.25)]">
                <div className="flex items-center gap-2 bg-[#2d3138] px-4 py-3">
                  <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                  <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
                  <span className="h-3 w-3 rounded-full bg-[#28c840]" />
                </div>
                <div className="px-6 py-5 font-[var(--font-ui)] text-[13px] leading-[1.65] md:text-[14px]">
                  <p className="text-[#52c41a]">/imagine prompt:</p>
                  <p className="mt-2 text-[#e5e6eb]">
                    A 3D icon, a square translucent frosted glass storage crate filled with fresh{" "}
                    <span className="text-[#1890ff]">[green round cabbages]</span>, clear leaf texture,
                    C4D render, Octane render, soft diffused lighting, isometric view, minimalism,
                    rounded edges, fresh color palette, white background, high quality, no noise.
                  </p>
                </div>
              </div>

              {/* Cube grid — 15 AI-generated SKU icons */}
              <div>
                <div className="grid grid-cols-5 gap-2 md:gap-3">
                  {CUBES.map((src, idx) => (
                    <div
                      key={src}
                      className="aspect-square overflow-hidden rounded-[6px] bg-[var(--canvas)] shadow-[0_2px_6px_rgba(16,17,20,0.04)]"
                    >
                      <img
                        src={src}
                        alt={`3D icon ${idx + 1}`}
                        loading="lazy"
                        className="block h-full w-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <p className="mt-3 font-[var(--font-mono)] text-[10px] uppercase tracking-[0.28em] text-[var(--ink-400)]">
                  1000+ SKU · 零耗时接入 · 批量生成 + 脚本命名
                </p>
              </div>
            </div>

            {/* Data mapping */}
            <div className="mt-12">
              <h4 className="font-serif text-[18px] font-semibold tracking-[-0.015em] text-[var(--ink-900)] md:text-[20px]">
                视觉资产交付
              </h4>
              <p className="mt-2 max-w-[640px] font-serif text-[15px] leading-[1.7] text-[var(--ink-600)] md:text-[16px]">
                建设标准化视觉资产库，容器化封装保证视觉整齐度。
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <DataCard emphasis>
                  <p className="text-[11px] text-[#52c41a]">土豆</p>
                  <p className="font-[var(--font-mono)] text-[11px]">ID: sku_10086</p>
                  <p className="text-[11px] text-[#1890ff]">.webp</p>
                </DataCard>
                <span className="text-[var(--ink-300)]">→</span>
                <DataCard>
                  <p className="text-[11px] text-[var(--ink-400)]">PNG</p>
                  <p className="text-[11px] text-[#c53030]">800 KB</p>
                </DataCard>
                <span className="text-[var(--ink-300)]">→</span>
                <DataCard success>
                  <p className="text-[11px] text-[#52c41a]">WebP</p>
                  <p className="text-[11px] text-[#52c41a]">45 KB</p>
                </DataCard>
                <span className="text-[var(--ink-300)]">→</span>
                <DataCard>
                  <p className="text-[11px] text-[var(--ink-400)]">Top 200 → AI 专属 3D 图</p>
                  <p className="text-[11px] text-[var(--ink-400)]">长尾 SKU → 默认品类图兜底</p>
                </DataCard>
              </div>
            </div>
          </div>

          {/* Subsection 2: 对内 */}
          <div className="mt-20 md:mt-28">
            <h3 className="font-serif text-[26px] font-bold leading-[1.2] tracking-[-0.02em] text-[var(--ink-900)] md:text-[32px]">
              对内（研发侧）：AI 如何帮助团队内部协作提效？
            </h3>

            <div className="mt-10 grid gap-10 md:grid-cols-2 md:gap-14">
              <div>
                <p className="font-serif text-[22px] font-semibold tracking-[-0.015em] text-[var(--ink-900)]">
                  Before
                </p>
                <p className="mt-3 font-serif text-[15px] leading-[1.7] text-[var(--ink-600)] md:text-[16px]">
                  <span className="font-semibold text-[#c53030]">痛点：</span>
                  切图多、沟通杂，新页面联调耗时耗力。
                </p>
              </div>
              <div>
                <p className="font-serif text-[22px] font-semibold tracking-[-0.015em] text-[var(--ink-900)]">
                  Now
                </p>
                <ul className="mt-4 space-y-5">
                  <CheckItem title="消除「像素级走查」误差">
                    Padding、圆角与色彩等通过 AI 直接转化为 HTML/CSS 样式，实现 100% 视觉还原。
                  </CheckItem>
                  <CheckItem title="释放前端还原生产力">
                    为开发提供开箱即用，使其专注业务接口逻辑，联调时间缩短约 20%。
                  </CheckItem>
                  <CheckItem title="重塑产研沟通语言">
                    从「抛设计图」升级为「交付可运行代码片段」，用开发者的语言进行无缝跨职能协作。
                  </CheckItem>
                </ul>
              </div>
            </div>

            {/* Figma → Browser → GitHub flow */}
            <div className="mt-12 grid gap-4 md:grid-cols-3">
              <FlowCard
                tag="DESIGN"
                title="Figma"
                description="从设计稿出发"
                icon={`${AI_DIR}/logo-figma.webp`}
              />
              <FlowCard
                tag="HTML / CSS"
                title="本地浏览器"
                description="AI 转化为代码"
                code={`/* 首页 */\nposition: relative;\nwidth: 1920px;\nheight: 1080px;\n...`}
                dark
              />
              <FlowCard
                tag="GIT"
                title="GitHub 部署"
                description="日常设计维护 & 开发产品自拿"
                icon={`${AI_DIR}/logo-github.webp`}
                accent
              />
            </div>

            <p className="mt-10 font-serif text-[15px] leading-[1.7] text-[var(--ink-600)] md:text-[16px]">
              Demo 展示：
              <a
                href={PERSONAL_INFO.demoHref}
                target="_blank"
                rel="noreferrer"
                className="ml-2 underline decoration-current underline-offset-4 transition-opacity hover:opacity-70"
              >
                {PERSONAL_INFO.demoHref.replace(/^https?:\/\//, "")}
              </a>
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[var(--line)]">
        <div className="case-canvas flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between">
          <div className="font-[var(--font-mono)] text-[12px] font-bold tracking-[-0.02em] text-[var(--ink-900)]">
            ABBIE.
          </div>
          <div className="mono-detail text-[var(--ink-300)]">
            <kbd className="mr-2 rounded border border-[var(--line)] px-1.5 py-0.5 text-[10px] tracking-[0.28em]">
              ESC
            </kbd>
            back
            <kbd className="ml-4 mr-2 rounded border border-[var(--line)] px-1.5 py-0.5 text-[10px] tracking-[0.28em]">
              ↑↓
            </kbd>
            prev / next section
          </div>
          <a
            href="/#works"
            className="mono-detail group inline-flex items-center gap-3 text-[var(--ink-900)] transition-opacity hover:opacity-70"
          >
            <span>Back to Works</span>
            <span aria-hidden className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </footer>
    </div>
  );
}

function MetaItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="mono-detail text-[var(--ink-300)]">{label}</dt>
      <dd className="mt-2 font-serif text-[15px] leading-[1.35] text-[var(--ink-900)]">{value}</dd>
    </div>
  );
}

function DataCard({
  children,
  emphasis,
  success,
}: {
  children: ReactNode;
  emphasis?: boolean;
  success?: boolean;
}) {
  let cls =
    "inline-flex flex-col gap-[2px] rounded-[6px] border px-4 py-2 text-[var(--ink-900)]";
  if (emphasis) cls += " bg-[#12203a] border-[#12203a] text-white";
  else if (success) cls += " bg-white border-[#b7eb8f]";
  else cls += " bg-white border-[var(--line)]";
  return <div className={cls}>{children}</div>;
}

function CheckItem({ title, children }: { title: string; children: ReactNode }) {
  return (
    <li>
      <p className="font-[var(--font-ui)] text-[16px] font-semibold text-[var(--ink-900)] md:text-[17px]">
        <span className="mr-2 text-[#52c41a]">✓</span>
        {title}
      </p>
      <p className="mt-2 pl-6 font-serif text-[14.5px] leading-[1.7] text-[var(--ink-600)] md:text-[15px]">
        {children}
      </p>
    </li>
  );
}

function FlowCard({
  tag,
  title,
  description,
  icon,
  code,
  dark,
  accent,
}: {
  tag: string;
  title: string;
  description: string;
  icon?: string;
  code?: string;
  dark?: boolean;
  accent?: boolean;
}) {
  const base = "flex flex-col gap-3 rounded-[8px] border p-6 min-h-[220px]";
  const tone = dark
    ? "border-transparent bg-[#1d2129] text-white"
    : accent
    ? "border-[var(--line)] bg-[var(--canvas)] text-[var(--ink-900)]"
    : "border-[var(--line)] bg-[var(--surface)] text-[var(--ink-900)]";
  return (
    <div className={`${base} ${tone}`}>
      <p
        className={`inline-flex w-fit items-center rounded-[4px] px-2 py-[3px] font-[var(--font-mono)] text-[10px] uppercase tracking-[0.28em] ${
          dark ? "bg-white/10 text-white/70" : "bg-[var(--canvas)] text-[var(--ink-400)]"
        }`}
      >
        {tag}
      </p>
      {icon ? (
        <img src={icon} alt={title} className="h-12 w-12 object-contain" loading="lazy" />
      ) : null}
      <p
        className={`font-serif text-[22px] font-bold leading-[1.2] tracking-[-0.02em] md:text-[24px] ${
          dark ? "text-white" : ""
        }`}
      >
        {title}
      </p>
      <p className={`font-serif text-[14px] leading-[1.6] ${dark ? "text-white/60" : "text-[var(--ink-600)]"}`}>
        {description}
      </p>
      {code ? (
        <pre
          className={`mt-2 overflow-hidden whitespace-pre-wrap rounded-[4px] p-3 font-[var(--font-ui)] text-[11px] leading-[1.55] ${
            dark ? "bg-black/30 text-[#fa8c16]" : ""
          }`}
        >
          {code}
        </pre>
      ) : null}
    </div>
  );
}
