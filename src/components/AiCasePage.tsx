import { useEffect, useMemo, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { PERSONAL_INFO } from "@/src/constants";

/**
 * AiCasePage — detail view for "/?case=ai".
 *
 * Faithful port of Abbie's original 1600px Figma layout, with two changes:
 *   1. Responsive (no absolute positioning, no fixed height).
 *   2. Dead Figma MCP URLs replaced with local assets under /case-assets/ai/.
 *
 * Content, section order, captions, and visual identity of each block
 * (prompt demo, cube grid, data-mapping flow, Figma→browser→GitHub trio)
 * preserved from the original.
 */

const AI = "/case-assets/ai";

interface Era {
  year: string;
  theme: string;
  caption: string;           // small label next to the media stack
  body: ReactNode;
  media: Array<{ src: string; aspect?: string; tilt?: string }>;
}

const ERAS: Era[] = [
  {
    year: "2023",
    theme: "爆发年",
    caption: "用 AI 探索自媒体",
    body: (
      <>
        <p className="font-serif text-[15px] leading-[1.75] text-[var(--ink-600)] md:text-[16px]">
          <span className="font-semibold text-[var(--ink-900)]">· 生成式的鼻祖 Midjourney：</span>
          当时它对人物一致性的控制还相对较差，但审美一直不错。出于想「征服」它的心态，我持续探索它能为我产出什么——用于工作还比较吃力，但做自媒体是一把好手，批量化产出也得到了真实传播反馈。
        </p>
        <p className="mt-3 font-serif text-[15px] leading-[1.75] text-[var(--ink-600)] md:text-[16px]">
          <span className="font-semibold text-[var(--ink-900)]">· Stable Diffusion：</span>
          从「A girl XXX」开始追踪 SD，探索怎么炼丹、怎么控制一致性。
        </p>
      </>
    ),
    media: [
      { src: `${AI}/screen-01.webp` },
      { src: `${AI}/screen-02.webp` },
    ],
  },
  {
    year: "2024",
    theme: "控制年",
    caption: "方案探索",
    body: (
      <>
        <p className="font-serif text-[15px] leading-[1.55] text-[var(--ink-900)] md:text-[16px]">
          从「惊艳」转向「可控、可编辑、可接入工作流」。
        </p>
        <p className="mt-3 font-serif text-[15px] leading-[1.75] text-[var(--ink-600)] md:text-[16px]">
          <span className="font-semibold text-[var(--ink-900)]">· Figma AI：</span>
          把 AI 放进视觉搜索、资源搜索、文案填充、快速原型、UI 首稿生成等真实设计动作里。
        </p>
        <p className="mt-2 font-serif text-[15px] leading-[1.75] text-[var(--ink-600)] md:text-[16px]">
          <span className="font-semibold text-[var(--ink-900)]">· SD 和 Midjourney</span>
          也变得越来越可控，局部控制、6 根手指的问题都慢慢得到优化，SD 已经可以做一些商业运营设计了，电商方向最为明显。
        </p>
        <p className="mt-2 font-serif text-[15px] leading-[1.75] text-[var(--ink-600)] md:text-[16px]">
          <span className="font-semibold text-[var(--ink-900)]">· Runway</span>
          开始崭露头角，DomoAI 在扩展视频质量、尺寸上不错。
        </p>
        <p className="mt-2 font-serif text-[15px] leading-[1.75] text-[var(--ink-600)] md:text-[16px]">
          <span className="font-semibold text-[var(--ink-900)]">· GPT-4o 图像生成</span>
          对文字渲染、图像输入理解、对话式多轮编辑更强了。
        </p>
      </>
    ),
    media: [
      { src: `${AI}/screen-03.webp` },
      { src: `${AI}/screen-04.webp` },
    ],
  },
  {
    year: "2025",
    theme: "多模态融合年",
    caption: "用生成的设计规范、变量让 AI 自己搭建页面",
    body: (
      <>
        <p className="font-serif text-[15px] leading-[1.55] text-[var(--ink-900)] md:text-[16px]">
          AI 开始不只是「生成资产」，而是逐渐能理解上下文、连续修改、做原型，甚至碰到代码。
        </p>
        <p className="mt-3 font-serif text-[15px] leading-[1.75] text-[var(--ink-600)] md:text-[16px]">
          <span className="font-semibold text-[var(--ink-900)]">· Figma Make：</span>
          prompt-to-app，从静态稿直接走向可交互原型。
        </p>
        <p className="mt-2 font-serif text-[15px] leading-[1.75] text-[var(--ink-600)] md:text-[16px]">
          <span className="font-semibold text-[var(--ink-900)]">· Gemini：</span>
          Nanobanana、veo3 从静态到动态都在业内有了质的飞跃。
        </p>
        <p className="mt-2 font-serif text-[15px] leading-[1.75] text-[var(--ink-600)] md:text-[16px]">
          <span className="font-semibold text-[var(--ink-900)]">· 国内的 AI（即梦、LibLibAI...）</span>
          在设计工作流慢慢普及，更懂中国市场且性价比较高。
        </p>
        <p className="mt-2 font-serif text-[15px] leading-[1.75] text-[var(--ink-600)] md:text-[16px]">
          <span className="font-semibold text-[var(--ink-900)]">· 本地 Agent（Claude、Codex..）</span>
          开始协助 UI/UX 设计工作。
        </p>
        <p className="mt-2 font-serif text-[15px] leading-[1.75] text-[var(--ink-600)] md:text-[16px]">
          <span className="font-semibold text-[var(--ink-900)]">· Lovable、Lovart、Galileo AI、UX Pilot...</span>
          对话式设计开始兴起，帮助设计师探索更多可能。
        </p>
      </>
    ),
    media: [
      { src: `${AI}/screen-05.webp` },
      { src: `${AI}/screen-06.webp` },
    ],
  },
  {
    year: "2026",
    theme: "设计工作流好伙伴",
    caption: "用 Vibe Coding 解决自己日常的需求的工具搭建 ing...",
    body: (
      <>
        <p className="font-serif text-[15px] leading-[1.55] text-[var(--ink-900)] md:text-[16px]">
          AI 已经能帮 UI 设计师做首稿、搜相似界面、填真实文案、快速出原型、把静态稿变交互稿，甚至往代码和原型走。
        </p>
        <p className="mt-3 font-serif text-[15px] leading-[1.75] text-[var(--ink-600)] md:text-[16px]">
          <span className="font-semibold text-[var(--ink-900)]">· Figma Make、Stitch、UX Pilot、Vercel v0、Dovetail...</span>
          协助设计师探索方向、出方案。
        </p>
        <p className="mt-2 font-serif text-[15px] leading-[1.75] text-[var(--ink-600)] md:text-[16px]">
          <span className="font-semibold text-[var(--ink-900)]">· Figma、Paper、Pencil...</span>
          可以接入 MCP 让本地 Agent 协同，让设计到交付效率都得以提升。
        </p>
        <p className="mt-2 font-serif text-[15px] leading-[1.75] text-[var(--ink-600)] md:text-[16px]">
          <span className="font-semibold text-[var(--ink-900)]">· 通过本地 Agent 还有 Skill</span>
          已经能帮助我们生成设计规范...
        </p>
        <p className="mt-2 font-serif text-[15px] leading-[1.75] text-[var(--ink-900)] md:text-[16px]">· 还有很多待续...</p>
      </>
    ),
    media: [
      { src: `${AI}/screen-07.webp` },
      { src: `${AI}/ai-overview.webp` },
    ],
  },
];

const CUBES = Array.from({ length: 15 }, (_, i) => `${AI}/cube-${String(i + 1).padStart(2, "0")}.webp`);

export default function AiCasePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 28, restDelta: 0.001 });

  const accentStyle = useMemo<CSSProperties>(
    () => ({ ["--case-accent" as keyof CSSProperties]: "var(--case-ai)" } as CSSProperties),
    [],
  );

  // Keyboard: Esc → home
  const [scrollPercent, setScrollPercent] = useState(0);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") window.location.href = "/#works";
    };
    const onScroll = () => {
      const t = scrollYProgress.get();
      setScrollPercent(Math.round(t * 100));
    };
    window.addEventListener("keydown", onKey);
    const unsub = scrollYProgress.on("change", onScroll);
    return () => {
      window.removeEventListener("keydown", onKey);
      unsub();
    };
  }, [scrollYProgress]);

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
          <span className="font-[var(--font-mono)]">{scrollPercent}%</span>
        </div>
      </header>

      {/* ============= PART 1 — 个人对 AI 的持续探索 ============= */}
      <section className="case-canvas pb-8 pt-16 md:pt-24">
        <h1
          className="font-serif font-medium text-[var(--ink-900)]"
          style={{
            fontSize: "clamp(36px, 4.6vw, 50px)",
            lineHeight: "1.2",
            letterSpacing: "-0.025em",
          }}
        >
          个人对于 AI 的持续探索
        </h1>
        <p className="mt-2 font-serif text-[12px] text-[var(--ink-300)]">
          *此页为设计类 AI 的探索，不完全。
        </p>
      </section>

      {/* Timeline — one row per era: [dot · dashed line] [body] [media + caption] */}
      <section className="relative">
        {/* Vertical dashed line (visible only on lg+, spans the whole timeline) */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-0 top-0 hidden h-full lg:block"
          style={{
            left: "calc((100vw - min(100vw, var(--viewer-max-w))) / 2 + var(--viewer-gutter) + 48px)",
            borderLeft: "1px dashed var(--ink-300)",
          }}
        />

        {ERAS.map((era, idx) => (
          <motion.article
            key={era.year}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
            className="case-canvas relative grid gap-8 py-12 md:py-16 lg:grid-cols-[28px_minmax(0,380px)_minmax(0,1fr)] lg:gap-x-12"
          >
            {/* Dot marker */}
            <div className="hidden lg:block">
              <span className="relative block">
                <span className="absolute left-0 top-[18px] inline-block h-3 w-3 rounded-full bg-[var(--ink-900)]" />
                <span className="absolute left-3 top-[24px] inline-block h-px w-[36px] border-t border-dashed border-[var(--ink-300)]" />
              </span>
            </div>

            {/* Body column (left-middle) */}
            <div>
              <p className="font-serif text-[22px] font-semibold leading-[1.3] text-[var(--ink-900)] md:text-[24px]">
                {era.year}　{era.theme}
              </p>
              <div className="mt-6 space-y-0">{era.body}</div>
            </div>

            {/* Media column (right) */}
            <div>
              <p className="mb-4 font-[var(--font-mono)] text-[10px] uppercase tracking-[0.28em] text-[var(--ink-400)]">
                {era.caption}
              </p>
              <div className={`grid gap-3 ${era.media.length === 1 ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2"}`}>
                {era.media.map((m) => (
                  <div
                    key={m.src}
                    className="overflow-hidden rounded-[6px] border border-[var(--line)] bg-[var(--surface)] shadow-[0_4px_20px_-8px_rgba(16,17,20,0.08)]"
                  >
                    <img
                      src={m.src}
                      alt=""
                      loading={idx < 2 ? "eager" : "lazy"}
                      className="block h-auto w-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </section>

      {/* ============= PART 2 — 当前工作中 · AI 赋能与设计工程化 ============= */}
      <section className="border-t border-[var(--line)] bg-[var(--surface)]">
        <div className="case-canvas pb-20 pt-16 md:pb-28 md:pt-24">
          <p className="font-serif font-medium text-[var(--ink-900)] md:text-[40px]" style={{ fontSize: "clamp(30px, 4vw, 40px)", lineHeight: "1.2" }}>
            当前工作中
          </p>
          <h2
            className="display-italic mt-4"
            style={{
              fontSize: "clamp(36px, 5vw, 60px)",
              lineHeight: "0.98",
              letterSpacing: "-0.04em",
            }}
          >
            AI 赋能与设计工程化
          </h2>

          {/* 4 chips */}
          <div className="mt-8 flex flex-wrap gap-3">
            {["探索精神", "团队协作", "赋能业务", "推动能力"].map((chip) => (
              <span
                key={chip}
                className="inline-flex items-center rounded-[4px] bg-[#1677ff] px-5 py-2 text-[14px] font-medium tracking-[0.02em] text-white"
              >
                {chip}
              </span>
            ))}
          </div>

          {/* Quote */}
          <blockquote className="mt-10 max-w-[1000px] font-serif text-[18px] italic leading-[1.7] text-[var(--ink-900)]/60 md:text-[22px]">
            「验证场景：蔬东坡 SaaS 智能分拣系统（当前在职实战）
            <br />
            在复杂业务中，我主导并跑通了这套 AI 资产标准化体系，现已成为团队日常交付的基础设施，始终保持对 AI 前沿技术的探索与实践...」
          </blockquote>

          {/* ——— 对外（业务侧） ——— */}
          <div className="mt-20">
            <h3 className="font-serif text-[28px] font-bold leading-[1.2] tracking-[-0.02em] text-[#1e293b] md:text-[40px]">
              对外（业务侧）：AIGC 如何帮助我们业务？
            </h3>
            <h4 className="mt-8 font-serif text-[22px] font-bold leading-[1.2] tracking-[-0.02em] text-[#1e293b] md:text-[32px]">
              传统商品实拍图背景杂乱、光线不一
            </h4>

            <div className="mt-6">
              <span className="font-[var(--font-ui)] text-[13px] font-semibold text-[#f53f3f]">痛点：</span>
              <span className="ml-2 font-[var(--font-ui)] text-[13px] text-[var(--ink-600)] md:text-[14px]">
                可读性较差，增加一线员工认知负荷，对于需要高效完成单次作业的场景不太友好。
              </span>
            </div>

            {/* Prompt box → arrow → cube grid */}
            <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,546px)_auto_minmax(0,1fr)] lg:items-center lg:gap-10">
              {/* Prompt demo */}
              <div className="overflow-hidden rounded-[8px] bg-[#1d2129] shadow-[0_16px_40px_-20px_rgba(16,17,20,0.25)]">
                <div className="flex items-center gap-2 bg-[#2d3138] px-4 py-3">
                  <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                  <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
                  <span className="h-3 w-3 rounded-full bg-[#28c840]" />
                </div>
                <div className="px-6 py-5 font-[var(--font-ui)] text-[14px] leading-[1.65] md:text-[16px]">
                  <p className="text-[#52c41a]">/imagine prompt:</p>
                  <p className="mt-2 text-[#e5e6eb]">
                    A 3D icon, a square translucent frosted glass storage crate filled with fresh{" "}
                    <span className="text-[#1890ff]">[green round cabbages]</span>, clear leaf texture,
                    C4D render, Octane render, soft diffused lighting, isometric view, minimalism,
                    rounded edges, fresh color palette, white background, high quality, no noise.
                  </p>
                </div>
              </div>

              {/* Arrow */}
              <div className="hidden items-center justify-center text-[var(--ink-400)] lg:flex">
                <svg width="67" height="52" viewBox="0 0 67 52" fill="none">
                  <path
                    d="M2 26 L60 26 M45 10 L60 26 L45 42"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* Cube grid */}
              <div>
                <div className="grid grid-cols-5 gap-2 md:gap-3">
                  {CUBES.map((src, i) => (
                    <div
                      key={src}
                      className="aspect-square overflow-hidden rounded-[6px] bg-[var(--canvas)] shadow-[0_2px_6px_rgba(16,17,20,0.04)]"
                    >
                      <img src={src} alt={`3D icon ${i + 1}`} loading="lazy" className="block h-full w-full object-cover" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <p className="mt-6 font-[var(--font-ui)] text-[13px] text-[var(--ink-400)] md:text-[14px]">
              通过 AI 批量生成 + 自动化脚本命名，实现 1000+ SKU 零耗时接入。
            </p>

            {/* 视觉资产交付 */}
            <div className="mt-16">
              <h4 className="font-serif text-[22px] font-bold leading-[1.2] tracking-[-0.02em] text-[#1e293b] md:text-[32px]">
                视觉资产交付
              </h4>
              <p className="mt-3 font-[var(--font-ui)] text-[15px] leading-[1.5] text-[#4e5969]/60 md:text-[17px]">
                建设标准化视觉资产库，容器化封装保证视觉整齐度。
              </p>
              <div className="mt-6">
                <p className="font-[var(--font-ui)] text-[13px] font-medium text-[#1d2129] md:text-[14px]">数据映射</p>
                <div className="mt-4 flex flex-wrap items-stretch gap-4 md:gap-8">
                  <DataCard tone="dark">
                    <p className="text-[12px] text-[#52c41a]">土豆</p>
                    <p className="font-[var(--font-ui)] text-[11px]">ID: sku_10086</p>
                    <p className="text-[11px] text-[#1890ff]">.webp</p>
                  </DataCard>
                  <DataCard tone="warn">
                    <p className="text-[11px] text-[var(--ink-400)]">PNG</p>
                    <p className="text-[11px] text-[#f53f3f]">800 KB</p>
                  </DataCard>
                  <DataCard tone="success">
                    <p className="text-[11px] text-[#52c41a]">WebP</p>
                    <p className="text-[11px] text-[#52c41a]">45 KB</p>
                  </DataCard>
                  <DataCard tone="neutral">
                    <p className="text-[11px] text-[var(--ink-400)]">Top 200 → AI 专属 3D 图</p>
                    <p className="text-[11px] text-[var(--ink-400)]">长尾 SKU → 默认品类图兜底</p>
                  </DataCard>
                </div>
              </div>
            </div>
          </div>

          {/* ——— 对内（研发侧） ——— */}
          <div className="mt-24">
            <h3 className="font-serif text-[28px] font-bold leading-[1.2] tracking-[-0.02em] text-[#1e293b] md:text-[40px]">
              对内（研发侧）：
              <br className="md:hidden" />
              AI 是怎么帮助团队内部协作提效的？
            </h3>

            <div className="mt-12 grid gap-10 md:grid-cols-2">
              <div>
                <p className="font-serif text-[22px] font-bold tracking-[-0.02em] text-[#1e293b] md:text-[32px]">
                  Before
                </p>
                <div className="mt-4">
                  <span className="font-[var(--font-ui)] text-[13px] font-semibold text-[#f53f3f]">痛点：</span>
                  <span className="ml-2 font-[var(--font-ui)] text-[13px] text-[var(--ink-600)] md:text-[14px]">
                    切图多、沟通杂，新页面联调耗时耗力等。
                  </span>
                </div>
              </div>

              <div>
                <p className="font-serif text-[22px] font-bold tracking-[-0.02em] text-[#1e293b] md:text-[32px]">
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

            {/* 3 tool icons row */}
            <div className="mt-16 grid gap-8 md:grid-cols-3">
              <div className="flex items-center justify-center">
                <img src={`${AI}/logo-figma.webp`} alt="Figma" className="h-[60px] w-[60px] object-contain" />
              </div>
              <div className="flex items-center justify-center">
                <BrowserGlyph />
              </div>
              <div className="flex items-center justify-center">
                <img src={`${AI}/logo-github.webp`} alt="GitHub" className="h-[60px] w-[60px] object-contain" />
              </div>
            </div>

            {/* 3 cards row */}
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {/* DESIGN card */}
              <div className="overflow-hidden rounded-[13px] border border-[var(--line)] bg-[var(--surface)] shadow-[0_8px_24px_-12px_rgba(16,17,20,0.08)]">
                <div className="flex items-center justify-between bg-[#9aa3ad] px-5 py-2">
                  <span className="font-[var(--font-mono)] text-[14.9px] font-semibold uppercase tracking-[0.12em] text-white">
                    DESIGN
                  </span>
                </div>
                <div className="aspect-[324/178] bg-[var(--canvas)]">
                  <img src={`${AI}/logo-figma.webp`} alt="" className="h-full w-full object-contain p-12" loading="lazy" />
                </div>
                <div className="border-t border-[var(--line)] bg-[var(--canvas)] px-5 py-3">
                  <p className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.28em] text-[var(--ink-400)]">
                    Figma export
                  </p>
                </div>
              </div>

              {/* HTML/CSS code card */}
              <div className="overflow-hidden rounded-[12px] bg-[#1d2129] shadow-[0_8px_24px_-12px_rgba(16,17,20,0.2)]">
                <div className="bg-[#808a97] px-4 py-2">
                  <span className="font-[var(--font-mono)] text-[14.87px] font-semibold uppercase tracking-[0.12em] text-white">
                    HTML/CSS
                  </span>
                </div>
                <pre className="whitespace-pre-wrap px-5 py-4 font-[var(--font-ui)] text-[14px] leading-[1.6] text-[#fa8c16]">
                  {`/* 首页 */

position: relative;
width: 1920px;
height: 1080px;

...................`}
                </pre>
              </div>

              {/* GitHub git-deploy card */}
              <div className="relative overflow-hidden rounded-[12px] border border-[var(--line)] bg-black shadow-[0_8px_24px_-12px_rgba(16,17,20,0.25)]">
                <div className="flex aspect-[324/178] items-center justify-center bg-gradient-to-br from-[#0d1117] via-[#161b22] to-[#24292f]">
                  <img
                    src={`${AI}/logo-github.webp`}
                    alt=""
                    className="h-[60px] w-[60px] object-contain opacity-80"
                    loading="lazy"
                  />
                </div>
                <div className="border-t border-white/10 bg-black px-5 py-4 text-center text-white">
                  <p className="font-[var(--font-ui)] text-[16px] leading-[1.35]">
                    日常设计维护 &amp; 开发产品自拿
                  </p>
                  <p className="mt-2 font-[var(--font-mono)] text-[14px]">git 部署</p>
                </div>
              </div>
            </div>

            <div className="mt-10 font-[var(--font-ui)] text-[16px] text-[var(--ink-900)] md:text-[18px]">
              Demo 展示：
              <a
                href={PERSONAL_INFO.demoHref}
                target="_blank"
                rel="noreferrer"
                className="ml-2 underline decoration-current underline-offset-4 transition-opacity hover:opacity-70"
              >
                {PERSONAL_INFO.demoHref.replace(/^https?:\/\//, "")}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============= Footer ============= */}
      <footer className="border-t border-[var(--line)]">
        <div className="case-canvas flex flex-col gap-4 py-10 md:flex-row md:items-center md:justify-between">
          <div className="brand-word text-[24px] font-bold tracking-[-0.04em] text-[#59675d] md:text-[32px]">
            ABBIE.
          </div>
          <div className="mono-detail text-[var(--ink-300)]">
            <kbd className="mr-2 rounded border border-[var(--line)] px-1.5 py-0.5 text-[10px] tracking-[0.28em]">ESC</kbd>
            back
          </div>
          <a
            href="/#works"
            className="group inline-flex items-center gap-3 font-[var(--font-mono)] text-[16px] tracking-[0.34em] text-[#7a6947] transition-opacity hover:opacity-70 md:text-[19px]"
          >
            <span>BACK TO WORKS</span>
            <span aria-hidden className="transition-transform group-hover:translate-x-1">👉</span>
          </a>
        </div>
      </footer>
    </div>
  );
}

function DataCard({ children, tone }: { children: ReactNode; tone: "dark" | "warn" | "success" | "neutral" }) {
  const tones: Record<string, string> = {
    dark: "bg-[#12203a] border-[#12203a] text-white",
    warn: "bg-white border-[#ffd8bf] text-[var(--ink-900)]",
    success: "bg-white border-[#b7eb8f] text-[var(--ink-900)]",
    neutral: "bg-white border-[var(--line)] text-[var(--ink-900)]",
  };
  return (
    <div className={`flex min-w-[90px] flex-col gap-1 rounded-[8px] border px-3 py-2 text-center ${tones[tone]}`}>
      {children}
    </div>
  );
}

function CheckItem({ title, children }: { title: string; children: ReactNode }) {
  return (
    <li>
      <p className="font-[var(--font-ui)] text-[18px] font-medium text-[var(--ink-900)]">
        <span className="mr-2 text-[#52c41a]">✅</span>
        {title}
      </p>
      <p className="mt-2 pl-6 font-[var(--font-ui)] text-[14px] leading-[1.6] text-[var(--ink-600)]">
        {children}
      </p>
    </li>
  );
}

function BrowserGlyph() {
  return (
    <div className="relative h-[66px] w-[66px] overflow-hidden rounded-[14px] border border-[var(--line)] bg-[var(--surface)] shadow-[0_4px_12px_rgba(16,17,20,0.06)]">
      <div className="absolute inset-x-0 top-0 flex items-center gap-1 bg-[var(--canvas)] px-2 py-1.5">
        <span className="inline-block h-[6px] w-[6px] rounded-full bg-[#ff5f57]" />
        <span className="inline-block h-[6px] w-[6px] rounded-full bg-[#febc2e]" />
        <span className="inline-block h-[6px] w-[6px] rounded-full bg-[#28c840]" />
      </div>
      <div className="absolute left-3 right-3 top-[22px] h-[2px] rounded bg-[var(--line)]" />
      <div className="absolute left-3 right-6 top-[30px] h-[2px] rounded bg-[var(--line)]" />
      <div className="absolute left-3 right-10 top-[38px] h-[2px] rounded bg-[var(--line)]" />
    </div>
  );
}
