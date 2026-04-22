import { useLayoutEffect, useState, type CSSProperties } from "react";

/**
 * AiCasePage — 1600×4679 fixed-canvas port of the deployed abbie-portfolio-v2
 * AI case page, wrapped in a proportional-scale shell so the whole layout
 * adapts to viewport width without changing any coordinate.
 *
 * Asset source: all 30 original Figma MCP assets downloaded once and served
 * locally from /case-assets/ai-figma/<uuid>.<ext>. No runtime dependency on
 * figma.com staying up.
 *
 * Color tokens: aligned to the site palette (tokens.css) — #fafaf8 canvas,
 * #101114 primary ink, #2a2b30/#5f636e/#a0a4af ink scale, #dedfe5 rules.
 * Semantic colors (pain-point red, terminal greens/blues, code orange) kept
 * intact because they encode meaning, not style.
 */

const AI = "/case-assets/ai-figma";
const MAT = "/case-assets/ai-mat";

const logos = {
  midjourney: `${MAT}/midjourney.png`,
  stability: `${MAT}/stability.png`,
  openai: `${MAT}/openai.png`,
  figma: `${MAT}/figma.png`,
  blackForest: `${MAT}/blackforest.png`,
  v0: `${MAT}/v0.png`,
  gemini: `${MAT}/gemini.png`,
  lovart: `${MAT}/lovart.png`,
  figmaMake: `${MAT}/figma-make.png`,
  cursor: `${MAT}/cursor.png`,
  claude: `${MAT}/claude.png`,
};

// 3D vegetable crate renders for the business section (3×3)
const vegCrates = Array.from({ length: 9 }, (_, i) => `${MAT}/veg-${String(i + 1).padStart(2, "0")}.png`);

// 示意图 per-year screenshots for the timeline (one image per row).
const phoneShots = Array.from({ length: 4 }, (_, i) => `${MAT}/phone-${String(i + 1).padStart(2, "0")}.png`);

const explorationAssets = {
  accountBars: [
    `${AI}/f236c607-b4bb-4e4d-a273-4e7b4f25963c.jpg`,
    `${AI}/57863430-7124-4b02-b986-f79836475d0f.jpg`,
    `${AI}/a58dbc8d-4fd5-4b54-9906-341da651ffee.jpg`,
    `${AI}/663f4e3c-43d0-4c28-9f1c-1b440728f7a6.jpg`,
  ],
  media: {
    accountPanel: `${AI}/9cae9860-ddca-4693-b384-86b8df88bd03.jpg`,
    darkCards: `${AI}/c7bcd36d-9bd3-428b-b426-4153f39f3635.png`,
    jewelryFlow: `${AI}/5a34e0ea-ffe4-4aa7-a293-f3c9e911caa8.png`,
    paymentDialog: `${AI}/be194abd-a350-49f1-bb23-dbef40c75d3d.png`,
    designSheet: `${AI}/fcc1f3ad-c147-4ab3-90e8-78923571f523.png`,
    generatedPage: `${AI}/ec1b4233-7beb-4f5b-bcba-e9344a6e38e7.png`,
    vibeCoding: `${AI}/f7376e69-6563-4ff3-997f-ee5817b52b7a.png`,
  },
};

const businessAssets = {
  arrow: `${AI}/f36ddff2-209a-4e84-989e-7faea3d49408.svg`,
  icons: vegCrates,
};

const internalAssets = {
  figmaIcon: `${AI}/80e865bb-9719-49ed-8527-07d02cba28ad.png`,
  designCard: `${AI}/a52fe57d-03fb-4bfd-9d86-20916bb71ac6.png`,
  designFooter: `${AI}/26ea29da-3509-46f4-8799-21b6e3c33e20.png`,
  chromeIcon: `${AI}/f240f808-8947-4fd3-9df3-27585ad09ace.png`,
  githubIcon: `${AI}/c13ba057-73bf-4146-85d4-b6216c65e4a7.svg`,
  githubCard: `${AI}/ba4f6af4-d55d-4cf2-90a8-af9f83dcf8e1.svg`,
  githubPoster: `${AI}/b94f1ed4-de0d-4131-8d47-f8f3e564e327.png`,
};

// Site palette (from tokens.css :root)
const INK_900 = "#101114";
const INK_700 = "#2a2b30";
const INK_600 = "#5f636e";
const INK_400 = "#a0a4af";
const INK_200 = "#dedfe5";
const CANVAS = "#fafaf8";

type TimelineLogo = { src: string; w: number; h: number };
type TimelineEntry = {
  year: string;
  yearStyle: CSSProperties;
  connectorTop: number;
  dotTop: number;
  bodyTop: number;
  subtitle: string;
  pill: { text: string; bg: string; color: string };
  bullets: string[];
  logos: TimelineLogo[];
};

const timelineCopy: TimelineEntry[] = [
  {
    year: "2023 · AIGC 视觉探索",
    yearStyle: { left: 115, top: 390 },
    connectorTop: 408.5,
    dotTop: 400,
    bodyTop: 390,
    subtitle: "流量爆发：审美破局",
    pill: { text: "🔥 累计获粉 3.8w+", bg: "#fff1e6", color: "#d4570a" },
    bullets: [
      "Midjourney 探索结构化控图公式辅助脑爆视觉",
      "Stable Diffusion 从 “A girl...” 开始炼丹",
      "利用 MJ 的审美和控图能力跑通自媒体副业",
    ],
    logos: [
      { src: logos.midjourney, w: 32, h: 32 },
      { src: logos.stability, w: 110, h: 32 },
    ],
  },
  {
    year: "2024 · 介入真实工作流",
    yearStyle: { left: 115, top: 732 },
    connectorTop: 749,
    dotTop: 757,
    bodyTop: 732,
    subtitle: "逻辑落地：介入业务",
    pill: { text: "🎯 拒绝随机性·可控产出", bg: "#e8f5eb", color: "#2a8a4d" },
    bullets: [
      "GPT-4 辅助 UX 逻辑推演、交互文案等",
      "探索实践 FLUX，保证稳定可控和细节能力",
      "4o 图像辅助脑爆",
    ],
    logos: [
      { src: logos.openai, w: 32, h: 32 },
      { src: logos.figma, w: 32, h: 32 },
    ],
  },
  {
    year: "2025 · AI + UIUX 工作流",
    yearStyle: { left: 115, top: 1092 },
    connectorTop: 1110,
    dotTop: 1118,
    bodyTop: 1092,
    subtitle: "效率革命：原型闭环",
    pill: { text: "✨ Prompt-to-App", bg: "#f0ebff", color: "#6741d9" },
    bullets: [
      "v0、Lovable... 快速搭建高保真 UI 方案",
      "Lovart、Gemini... 协助视觉方向的脑爆 + 产出",
      "Figma Make 本地 Agent 设计规范与变量管理",
    ],
    logos: [
      { src: logos.lovart, w: 44, h: 32 },
      { src: logos.v0, w: 32, h: 32 },
      { src: logos.gemini, w: 32, h: 32 },
      { src: logos.figmaMake, w: 44, h: 32 },
    ],
  },
  {
    year: "2026 · 跨界交付：系统调度者",
    yearStyle: { left: 115, top: 1505 },
    connectorTop: 1522,
    dotTop: 1530,
    bodyTop: 1505,
    subtitle: "跨界交付：系统调度",
    pill: { text: "🧊 Vibe Coding 实战", bg: "#f0ebff", color: "#6741d9" },
    bullets: [
      "设计师从 “像素级推演者” 升级为 “系统调度者”",
      "利用 Agent 生成 HTML 帮助团队协作效率",
      "个人 Vibe Coding 为自己所用",
    ],
    logos: [
      { src: logos.cursor, w: 32, h: 32 },
      { src: logos.claude, w: 110, h: 32 },
    ],
  },
];

// One 示意图 per timeline year. Source is 540×680 (aspect 0.794 portrait).
//
// Row spacing budget (bodyTop deltas): 2023→2024 = 342px, 2024→2025 = 360px,
// 2025→2026 = 413px. Each row also loses 24px to its caption above the image.
// Tightest row is 2023 at 342 - 24 = 318px. Pick image height = 280 so every
// row has ≥36px of breathing room; width = round(280 × 540/680) = 222.
// Captions are positioned at (phone.top - 24) so they never collide with the
// phone above them either (gap ≥ 36px proven above).
const PHONE_W = 222;
const PHONE_H = 280;
const PHONE_LEFT = 1060;
const explorationVisuals = [
  { src: phoneShots[0], style: { left: PHONE_LEFT, top: 378, width: PHONE_W, height: PHONE_H }, className: "" },
  { src: phoneShots[1], style: { left: PHONE_LEFT, top: 718, width: PHONE_W, height: PHONE_H }, className: "" },
  { src: phoneShots[2], style: { left: PHONE_LEFT, top: 1080, width: PHONE_W, height: PHONE_H }, className: "" },
  { src: phoneShots[3], style: { left: PHONE_LEFT, top: 1492, width: PHONE_W, height: PHONE_H }, className: "" },
];

// 3×3 grid of vegetable crate renders
const businessIconLayouts = (() => {
  const startLeft = 820;
  const startTop = 2835;
  const size = 170;
  const gap = 20;
  const out: Array<{ left: number; top: number; width: number; height: number }> = [];
  for (let row = 0; row < 3; row += 1) {
    for (let col = 0; col < 3; col += 1) {
      out.push({
        left: startLeft + col * (size + gap),
        top: startTop + row * (size + gap),
        width: size,
        height: size,
      });
    }
  }
  return out;
})();

function CanvasImage({
  src,
  style,
  className = "",
}: {
  src: string;
  style: CSSProperties;
  className?: string;
}) {
  return (
    <img
      src={src}
      alt=""
      loading="lazy"
      decoding="async"
      className={`absolute block object-cover ${className}`}
      style={style}
    />
  );
}

const CANVAS_W = 1600;
const CANVAS_H = 4679;
const SCALE_FLOOR = 0.38;

function useCanvasScale() {
  const [scale, setScale] = useState(1);
  useLayoutEffect(() => {
    const compute = () => {
      const vw = Math.max(window.innerWidth || 1, 1);
      setScale(Math.max(SCALE_FLOOR, Math.min(1, vw / CANVAS_W)));
    };
    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, []);
  return scale;
}

export default function AiCasePage() {
  const scale = useCanvasScale();
  const [hoveredPhone, setHoveredPhone] = useState<number | null>(null);

  const shellStyle: CSSProperties = {
    width: "100%",
    overflowX: "auto",
    overflowY: "hidden",
    background: CANVAS,
  };
  const bodyStyle: CSSProperties = {
    width: `${CANVAS_W * scale}px`,
    height: `${CANVAS_H * scale}px`,
    marginInline: "auto",
    overflow: "hidden",
    position: "relative",
  };
  const canvasStyle: CSSProperties = {
    width: CANVAS_W,
    height: CANVAS_H,
    transform: `scale(${scale})`,
    transformOrigin: "top left",
    background: CANVAS,
    color: INK_700,
    position: "relative",
  };

  return (
    <div style={{ background: CANVAS }}>
      {/* Hover-preview overlay: lives outside the transformed canvas so the
          full-res image isn't also squeezed by the canvas scale. */}
      {hoveredPhone !== null && (
        <div
          className="pointer-events-none fixed inset-0 z-[80] flex items-center justify-center bg-[rgba(16,17,20,0.55)] backdrop-blur-sm"
          aria-hidden="true"
        >
          <img
            src={phoneShots[hoveredPhone]}
            alt=""
            className="max-h-[88vh] max-w-[88vw] rounded-[6px] shadow-[0_24px_80px_rgba(16,17,20,0.35)]"
          />
        </div>
      )}

      {/* Sticky top nav — matches CaseViewer for consistent cross-case UX */}
      <header className="sticky top-0 z-[70] border-b border-[var(--line)] bg-[var(--surface)]/85 backdrop-blur-md">
        <div className="case-canvas flex items-center justify-between py-3 text-[11.2px] uppercase tracking-[0.32em] text-[var(--ink-600)]">
          <a href="/#works" className="transition-opacity hover:opacity-70">
            ← Back to Works
          </a>
          <span className="font-[var(--font-mono)] tracking-[0.2em]">AI · CASE</span>
        </div>
      </header>

    <div className="pb-8" style={shellStyle}>
      <div style={bodyStyle}>
      <div className="font-serif" style={canvasStyle}>
        <p
          className="absolute left-[74px] top-[170px] text-[50px] font-medium leading-[64px]"
          style={{ color: INK_900 }}
        >
          从视觉探索到全栈工作流
        </p>
        <p
          className="absolute left-[74px] top-[246px] text-[20px] leading-[normal]"
          style={{ color: INK_600 }}
        >
          2023 – 2026 · 拥抱变革，我与 AI 协同进化的 1000+ 天
        </p>
        <p
          className="absolute left-[1279px] top-[202px] text-[13px] opacity-60"
          style={{ color: INK_600 }}
        >
          *此页为设计类AI的探索，不完全
        </p>

        <div
          className="absolute left-[351px] top-[354px] h-[1475px] border-l border-dashed"
          style={{ borderColor: INK_200 }}
        />

        {timelineCopy.map((item) => (
          <div key={item.year}>
            <div
              className="absolute h-px w-[63px] border-t border-dashed"
              style={{ left: 356, top: item.connectorTop, borderColor: INK_200 }}
            />
            <div
              className="absolute h-[16px] w-[16px] rounded-full"
              style={{ left: 343, top: item.dotTop, background: INK_900 }}
            />
            <p
              className="absolute text-[22px] font-medium leading-[32px]"
              style={{ ...item.yearStyle, color: INK_900, width: 220 }}
            >
              {item.year}
            </p>
            <div className="absolute w-[420px]" style={{ left: 442, top: item.bodyTop }}>
              <p className="mb-2 text-[22px] font-semibold leading-[30px]" style={{ color: INK_900 }}>
                {item.subtitle}
              </p>
              <div
                className="mb-4 inline-flex items-center rounded-[20px] px-3 py-1 text-[14px] font-medium"
                style={{ background: item.pill.bg, color: item.pill.color }}
              >
                {item.pill.text}
              </div>
              <ul className="list-none space-y-1 p-0">
                {item.bullets.map((b) => (
                  <li key={b} className="text-[16px] leading-[1.55]" style={{ color: INK_700 }}>
                    · {b}
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex items-center gap-5">
                {item.logos.map((lg) => (
                  <img
                    key={lg.src}
                    src={lg.src}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    style={{ width: lg.w, height: lg.h, objectFit: "contain" }}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}

        {explorationVisuals.map((visual, i) => (
          <img
            key={`${visual.src}-${visual.style.left}-${visual.style.top}`}
            src={visual.src}
            alt=""
            loading="lazy"
            decoding="async"
            onMouseEnter={() => setHoveredPhone(i)}
            onMouseLeave={() => setHoveredPhone((prev) => (prev === i ? null : prev))}
            className="absolute block cursor-zoom-in transition-transform duration-200 hover:scale-[1.03]"
            style={{ ...visual.style, objectFit: "contain" }}
          />
        ))}

        {/* Captions sit above each 示意图 (phone image), aligned to its left edge. */}
        <p className="absolute left-[1060px] top-[354px] text-[12px]" style={{ color: INK_600 }}>
          用AI探索自媒体
        </p>
        <p className="absolute left-[1060px] top-[694px] text-[12px]" style={{ color: INK_600 }}>
          方案探索
        </p>
        <p className="absolute left-[1060px] top-[1056px] text-[12px]" style={{ color: INK_600 }}>
          用生成的设计规范、变量让AI自己搭建页面
        </p>
        <p className="absolute left-[1060px] top-[1468px] text-[12px]" style={{ color: INK_600 }}>
          用Vibe Coding解决自己日常的需求的工具搭建ing...
        </p>

        <p
          className="absolute left-[74px] top-[2014px] text-[50px] font-medium leading-[72px]"
          style={{ color: INK_900 }}
        >
          当前工作中
        </p>
        <p
          className="absolute left-[86px] top-[2207px] text-[60px] font-bold leading-[85px] tracking-[3px]"
          style={{ color: INK_900 }}
        >
          AI 赋能与设计工程化
        </p>
        <p
          className="absolute left-[778px] top-[2207px] text-[40px] font-bold leading-[56px]"
          style={{ color: INK_900 }}
        >
          对外：AIGC如何帮助我们业务？
        </p>
        <p
          className="absolute left-[778px] top-[2305px] text-[40px] font-bold leading-[56px]"
          style={{ color: INK_900 }}
        >
          对内：AI是怎么帮助团队内部协作提效的？
        </p>

        {[
          { label: "探索精神", left: 86 },
          { label: "团队协作", left: 238 },
          { label: "赋能业务", left: 390 },
          { label: "推动能力", left: 542 },
        ].map((chip) => (
          <div
            key={chip.label}
            className="absolute top-[2317px] flex h-[37px] w-[144px] items-center justify-center rounded-[4px] text-[20px] font-medium text-white"
            style={{ left: chip.left, background: INK_900 }}
          >
            {chip.label}
          </div>
        ))}

        <p
          className="absolute left-[74px] top-[2521px] w-[1316px] text-[22px] leading-[normal]"
          style={{ color: INK_600 }}
        >
          “验证场景：蔬东坡 SaaS 智能分拣系统（当前在职实战）
          <br />
          在复杂业务中，我主导并跑通了这套 AI 资产标准化体系，现已成为团队日常交付的基础设施，始终保持对 AI 前沿技术的探索与实践...”
        </p>

        <p
          className="absolute left-[74px] top-[2706px] text-[40px] font-bold leading-[56px]"
          style={{ color: INK_900 }}
        >
          对外（业务侧）：AIGC如何帮助我们业务？
        </p>
        <p
          className="absolute left-[74px] top-[2836px] text-[32px] font-bold leading-[56px]"
          style={{ color: INK_900 }}
        >
          传统商品实拍图背景杂乱、光线不一
        </p>
        <p
          className="absolute left-[74px] top-[3168px] text-[32px] font-bold leading-[56px]"
          style={{ color: INK_900 }}
        >
          视觉资产交付
        </p>

        <p className="absolute left-[78px] top-[2901px] text-[15px] font-semibold text-[#f53f3f]">
          痛点：
        </p>
        <p
          className="absolute left-[128px] top-[2901px] text-[15px]"
          style={{ color: INK_600 }}
        >
          可读性较差，增加一线员工认知负荷，对于需要高效完成单次作业的场景不太友好
        </p>

        <div className="absolute left-[78px] top-[2939px] h-[199px] w-[546px] rounded-[10px] bg-[#1d2129] shadow-[0_8px_24px_rgba(16,17,20,0.12)]">
          <div className="flex h-[41px] items-center gap-2 rounded-t-[10px] bg-[#2d3138] px-4">
            <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
            <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
            <span className="h-3 w-3 rounded-full bg-[#28c840]" />
          </div>
          <p className="absolute left-[32px] top-[54px] font-[var(--font-mono)] text-[16px] text-[#52c41a]">
            /imagine prompt:
          </p>
          <p className="absolute left-[32px] top-[86px] w-[484px] font-[var(--font-mono)] text-[15px] leading-[1.5] text-[#e5e6eb]">
            A 3D icon, a square translucent frosted glass storage crate filled with fresh{" "}
            <span className="text-[#1890ff]">[green round cabbages]</span>, clear leaf texture, C4D render,
            Octane render, soft diffused lighting, isometric view, minimalism, rounded edges, fresh color palette,
            white background, high quality, no noise.
          </p>
        </div>

        <CanvasImage
          src={businessAssets.arrow}
          style={{ left: 689, top: 3056.18, width: 67, height: 51.75 }}
        />

        {businessIconLayouts.map((layout, index) => (
          <img
            key={`${layout.left}-${layout.top}`}
            src={businessAssets.icons[index]}
            alt=""
            loading="lazy"
            decoding="async"
            className="absolute block"
            style={{ ...layout, objectFit: "contain" }}
          />
        ))}

        <p className="absolute left-[73px] top-[3233px] text-[14px]" style={{ color: INK_600 }}>
          通过AI批量生成+自动化脚本命名，实现 1000+ SKU 零耗时接入
        </p>
        <p
          className="absolute left-[1144px] top-[3389px] text-[18px] tracking-[0.2px] opacity-60"
          style={{ color: INK_600 }}
        >
          建设标准化视觉资产库，容器化封装保证视觉整齐度
        </p>

        <div className="absolute left-[73px] top-[3273px] text-[14px]" style={{ color: INK_900 }}>
          <p className="font-medium">数据映射</p>
          <div className="mt-2 flex gap-14">
            <div
              className="rounded-[8px] px-3 py-2 text-[12px] text-white"
              style={{ background: INK_900 }}
            >
              <p className="text-[13px] text-[#52c41a]">土豆</p>
              <p>ID: sku_10086</p>
              <p style={{ color: "#8aa8ff" }}>.webp</p>
            </div>
            <div
              className="rounded-[8px] bg-white px-3 py-2 text-center text-[12px]"
              style={{ border: `1px solid ${INK_200}` }}
            >
              <p style={{ color: INK_400 }}>PNG</p>
              <p className="text-[#f53f3f]">800 KB</p>
            </div>
            <div
              className="rounded-[8px] bg-white px-3 py-2 text-center text-[12px]"
              style={{ border: `1px solid ${INK_200}` }}
            >
              <p className="text-[#52c41a]">WebP</p>
              <p className="text-[#52c41a]">45 KB</p>
            </div>
            <div
              className="rounded-[8px] bg-white px-4 py-2 text-[12px]"
              style={{ color: INK_600, border: `1px solid ${INK_200}` }}
            >
              <p>Top 200 → AI 专属 3D 图</p>
              <p>长尾 SKU → 默认品类图兜底</p>
            </div>
          </div>
        </div>

        <div className="absolute left-[94px] top-[3585px]" style={{ color: INK_900 }}>
          <p className="text-[40px] font-bold leading-[56px]">对内（研发侧）：</p>
          <p className="text-[40px] font-bold leading-[56px]">AI是怎么帮助团队内部协作提效的？</p>
        </div>

        <p
          className="absolute left-[99px] top-[3748px] text-[32px] font-bold leading-[56px]"
          style={{ color: INK_900 }}
        >
          Before
        </p>
        <p className="absolute left-[103px] top-[3814px] text-[15px] font-semibold text-[#f53f3f]">
          痛点：
        </p>
        <p
          className="absolute left-[145px] top-[3814px] text-[15px]"
          style={{ color: INK_600 }}
        >
          切图多、沟通杂，新页面联调耗时耗力等
        </p>
        <p
          className="absolute left-[99px] top-[3864px] text-[32px] font-bold leading-[56px]"
          style={{ color: INK_900 }}
        >
          Now
        </p>

        <div className="absolute left-[99px] top-[3938px] w-[420px]" style={{ color: INK_900 }}>
          <p className="text-[18px] font-medium">✅ 消除 “像素级走查” 沟通成本</p>
          <p className="mt-2 text-[15px] leading-[1.55]" style={{ color: INK_600 }}>
            面对 B 端复杂的动态反馈，Figma 难以实现真实交互，Demo 让前端开发不靠脑补
          </p>
          <p className="mt-6 text-[18px] font-medium">✅ 降低前端理解设计的成本</p>
          <p className="mt-2 text-[15px] leading-[1.55]" style={{ color: INK_600 }}>
            “一张静态图 + 批注” 的低效沟通，对于特殊数据状态切换，通过 Demo 将联调时间缩短 20%
          </p>
          <p className="mt-6 text-[18px] font-medium">✅ 重塑产研沟通语言</p>
          <p className="mt-2 text-[15px] leading-[1.55]" style={{ color: INK_600 }}>
            上传 HTML 到 GitHub 上，方便上下游去看产品方案，并且可基于现有方案来做优化 / 迭代
          </p>
        </div>

        <CanvasImage
          src={internalAssets.figmaIcon}
          style={{ left: 599, top: 3871, width: 60, height: 60 }}
        />
        <CanvasImage
          src={internalAssets.chromeIcon}
          style={{ left: 857, top: 3793, width: 65.43, height: 66.52 }}
          className="rounded-[16px]"
        />
        <CanvasImage
          src={internalAssets.githubIcon}
          style={{ left: 1122, top: 3718, width: 60, height: 60 }}
        />

        <div className="absolute left-[599px] top-[3955px] h-[237.74px] w-[324.19px] overflow-hidden rounded-[13px] shadow-[0_8px_24px_rgba(16,17,20,0.06)]">
          <CanvasImage
            src={internalAssets.designCard}
            style={{ left: 0, top: 0, width: 324.19, height: 237.74 }}
            className="rounded-[13px]"
          />
          <div className="absolute left-[1px] top-[2px] rounded-[8px] px-5 py-2 text-[14.9px] text-white" style={{ background: INK_600 }}>
            DESIGN
          </div>
          <CanvasImage
            src={internalAssets.designFooter}
            style={{ left: 0, top: 178.24, width: 323.32, height: 57.77 }}
          />
        </div>

        <div className="absolute left-[864px] top-[3884px] h-[229.01px] w-[324.19px] rounded-[12px] bg-[#1d2129] shadow-[0_8px_24px_rgba(16,17,20,0.12)]">
          <div className="absolute left-0 top-0 rounded-t-[12px] px-4 py-2 text-[14.87px] text-white" style={{ background: "#808a97" }}>
            HTML/CSS
          </div>
          <pre className="absolute left-[20px] top-[50px] whitespace-pre-wrap font-[var(--font-mono)] text-[17.85px] leading-[1.45] text-[#fa8c16]">
            {`/* 首页 */\n\nposition: relative;\nwidth: 1920px;\nheight: 1080px;\n\n...................`}
          </pre>
        </div>

        <div
          className="absolute left-[1122px] top-[3802px] h-[229.01px] w-[324.19px] overflow-hidden rounded-[12px] bg-black/60 shadow-[0_8px_24px_rgba(16,17,20,0.12)] backdrop-blur-[1px]"
          style={{ border: `1px solid ${INK_200}` }}
        >
          <CanvasImage
            src={internalAssets.githubPoster}
            style={{ left: 4, top: -70, width: 320.9, height: 302.73 }}
            className="opacity-60"
          />
          <div className="absolute bottom-[1px] left-[1px] h-[58px] w-[321px] bg-black/80" />
          <p className="absolute left-[101px] top-[49px] text-center text-[20.18px] leading-[normal] text-white">
            日常设计维护
            <br />
            {"&"}
            <br />
            开发产品自拿
          </p>
          <p className="absolute left-[123px] top-[183px] text-[24.22px] text-white">git部署</p>
        </div>

        <div className="absolute left-[951px] top-[4137px] text-[18px]" style={{ color: INK_900 }}>
          <p>Demo 展示：</p>
          <a
            href="https://figma-cursor-collab.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="underline decoration-1 underline-offset-[3px]"
            style={{ color: INK_700 }}
          >
            https://figma-cursor-collab.vercel.app
          </a>
        </div>

      </div>
      </div>
    </div>
    </div>
  );
}
