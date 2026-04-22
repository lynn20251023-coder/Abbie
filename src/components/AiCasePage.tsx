import { useEffect, type CSSProperties } from "react";

/**
 * AiCasePage — faithful port of Abbie's original 1600×4679 AI case layout.
 *
 * The live deployed site (https://abbie-portfolio-v2.vercel.app/?case=ai) uses
 * absolute positioning on a fixed 1600px canvas and horizontal-scrolls on
 * mobile via overflow-x-auto on the outer wrapper. This matches that 1:1.
 *
 * The only change from the original: dead Figma MCP asset URLs are swapped
 * for local /case-assets/ai/*.webp files. Asset mapping was done by
 * inspecting each uploaded file and matching it to the slot in the original
 * that has visually identical content.
 */

const AI = "/case-assets/ai";

// Asset map — the original had dead figma.com/api/mcp/asset/<uuid> URLs.
// These local files are the re-uploaded screenshots; mapping by visual content.
const explorationAssets = {
  // 2023 era: 小红书 account bars (inside the composed screenshot below)
  // and Midjourney exploration — we only have screen-04 which composes all of
  // these in one image, so place it at the combined footprint.
  mediaCollage: `${AI}/screen-04.webp`,
  // 2024 era: payment/jewelry flow assets not re-uploaded — fall back to
  // composed screen-04 (which includes 2024-era Midjourney/SD exploration).
  // 2025 era: design-sheet + generated-page screenshots.
  designSheet: `${AI}/screen-05.webp`,
  generatedPage: `${AI}/screen-06.webp`,
  // 2026 era: Vibe Coding screenshot.
  vibeCoding: `${AI}/screen-07.webp`,
};

// 3D business icons for the 对外 cube grid.
const businessIcons = [
  `${AI}/cube-01.webp`, `${AI}/cube-02.webp`, `${AI}/cube-03.webp`, `${AI}/cube-04.webp`,
  `${AI}/cube-05.webp`, `${AI}/cube-06.webp`, `${AI}/cube-07.webp`, `${AI}/cube-08.webp`,
  `${AI}/cube-09.webp`, `${AI}/cube-10.webp`, `${AI}/cube-11.webp`, `${AI}/cube-12.webp`,
  `${AI}/cube-13.webp`, `${AI}/cube-14.webp`,
];

// 对内 assets
const internalAssets = {
  figmaIcon: `${AI}/logo-figma.webp`,
  githubIcon: `${AI}/logo-github.webp`,
  designCard: `${AI}/screen-01.webp`,   // DESIGN card showing 智能分拣管理系统 Notion screenshot
  htmlCssCard: `${AI}/screen-02.webp`,  // HTML/CSS code screenshot (optional; original draws inline)
  githubPoster: `${AI}/screen-03.webp`, // git部署 poster
};

const timelineCopy = [
  {
    year: "2023 爆发年",
    yearStyle: { left: 187, top: 390 },
    connectorTop: 408.5,
    dotTop: 400,
    bodyTop: 390,
    body: (
      <>
        <p className="mb-0 text-[18px] leading-[normal]">
          <span className="text-[#333]">·生成式的鼻祖：</span>
          <span className="text-[#999]">
            Midjourney的诞生，虽然当时它对于人物等一致性控制性还相对较差，但是在审美上Mid一直都不错，当时出于很想"征服"它，一直在探索并且思考它能为我做什么产出，当时用于工作还比较吃力，但是他在做自媒体来说是一把好手吧，至少我做出来了并且批量化+得到了很多的收益。
          </span>
        </p>
        <p className="text-[18px] leading-[normal]">
          <span className="text-[#333]">·Stable Diffusion：</span>
          <span className="text-[#999]">从"A girlXXX"开始追踪SD，探索怎么炼丹...</span>
        </p>
      </>
    ),
  },
  {
    year: "2024 控制年",
    yearStyle: { left: 187, top: 732 },
    connectorTop: 749,
    dotTop: 757,
    bodyTop: 732,
    body: (
      <>
        <p className="mb-0 text-[18px] leading-[normal] text-[#333]">从"惊艳"转向"可控、可编辑、可接入工作流"</p>
        <p className="mb-0 text-[18px] leading-[normal]">
          <span className="text-[#333]">·Figma AI：</span>
          <span className="text-[#999]">把 AI 放进视觉搜索、资源搜索、文案填充、快速原型、UI 首稿生成真实设计动作里...</span>
        </p>
        <p className="mb-0 text-[18px] leading-[normal]">
          <span className="text-[#333]">·SD和Mid</span>
          <span className="text-[#999]">
            也变得越来越可控，局部的控制、6根手指的问题等等都慢慢得到优化，虽然成本比较高，但是SD已经可以做一些商业的运营设计了，电商方向最为明显。
          </span>
        </p>
        <p className="mb-0 text-[18px] leading-[normal] text-[#999]">·视频方向的 Runway 也开始崭露头角</p>
        <p className="mb-0 text-[18px] leading-[normal] text-[#999]">·DomoAI 在扩展视频质量、尺寸等还不错</p>
        <p className="text-[18px] leading-[normal]">
          <span className="text-[#333]">·GPT-4o 图像生成</span>
          <span className="text-[#999]">对文字渲染、图像输入理解、对话式多轮编辑更强了</span>
        </p>
      </>
    ),
  },
  {
    year: "2025 多模态融合年",
    yearStyle: { left: 115, top: 1092 },
    connectorTop: 1110,
    dotTop: 1118,
    bodyTop: 1092,
    body: (
      <>
        <p className="mb-0 text-[18px] leading-[normal] text-[#333]">
          AI 开始不只是"生成资产"，而是逐渐能理解上下文、连续修改、做原型，甚至碰到代码
        </p>
        <p className="mb-0 text-[18px] leading-[normal]">
          <span className="text-[#333]">·Figma Make：</span>
          <span className="text-[#999]">prompt-to-app，从静态稿直接走向可交互原型</span>
        </p>
        <p className="mb-0 text-[18px] leading-[normal]">
          <span className="text-[#333]">·Gemini：</span>
          <span className="text-[#999]">Nanobanana、veo3 从静态到动态都在业内有了质的飞跃</span>
        </p>
        <p className="mb-0 text-[18px] leading-[normal]">
          <span className="text-[#333]">·国内的AI也越来越强，即梦、LibLibAI...</span>
          <span className="text-[#999]">在设计工作流慢慢普及，国内的AI更懂中国市场且性价比较高</span>
        </p>
        <p className="mb-0 text-[18px] leading-[normal]">
          <span className="text-[#333]">·本地Agent（Claude、Codex..）</span>
          <span className="text-[#999]">开始协助UIUX设计工作</span>
        </p>
        <p className="text-[18px] leading-[normal]">
          <span className="text-[#333]">·Lovable、Lovart、Galileo AI、UX Pilot...</span>
          <span className="text-[#999]">对话式设计开始兴起，帮助设计师探索更多的可能</span>
        </p>
      </>
    ),
  },
  {
    year: "2026 设计工作流好伙伴",
    yearStyle: { left: 67, top: 1505 },
    connectorTop: 1522,
    dotTop: 1530,
    bodyTop: 1505,
    body: (
      <>
        <p className="mb-0 text-[18px] leading-[normal] text-[#333]">
          AI 已经能帮 UI 设计师做首稿、搜相似界面、填真实文案、快速出原型、把静态稿变交互稿，甚至往代码和原型走
        </p>
        <p className="mb-0 text-[18px] leading-[normal]">
          <span className="text-[#333]">·Figma Make、sitich、UX Pilot、Vercel v0、Dovetail...</span>
          <span className="text-[#999]">协助设计师探索方向、出方案</span>
        </p>
        <p className="mb-0 text-[18px] leading-[normal]">
          <span className="text-[#333]">·Figma、Paper、Pencil...</span>
          <span className="text-[#999]">可以接入 MCP 让本地Agent协同，让设计到交付效率都得以提升</span>
        </p>
        <p className="mb-0 text-[18px] leading-[normal]">
          <span className="text-[#333]">·通过本地Agent还有 Skill</span>
          <span className="text-[#999]"> 已经能帮助我们生成设计规范...</span>
        </p>
        <p className="text-[18px] leading-[normal] text-[#333]">·还有很多待续...</p>
      </>
    ),
  },
];

// Media visuals for the timeline — positioned to land beside each era's body.
// Since we don't have the original granular assets (accountBars, darkCards,
// jewelryFlow, etc.), we use the composite screen-04 for 2023+2024 and the
// individual screenshots we do have for 2025 and 2026.
const explorationVisuals = [
  {
    src: explorationAssets.mediaCollage,
    style: { left: 960, top: 442, width: 480, height: 600 },
    className: "rounded-[6px] border border-black/10",
  },
  {
    src: explorationAssets.designSheet,
    style: { left: 960, top: 1155, width: 260, height: 290 },
    className: "rounded-[4px] border border-black/10",
  },
  {
    src: explorationAssets.generatedPage,
    style: { left: 1230, top: 1155, width: 260, height: 290 },
    className: "rounded-[4px] border border-black/10",
  },
  {
    src: explorationAssets.vibeCoding,
    style: { left: 960, top: 1519, width: 483, height: 298 },
    className: "rounded-[4px] border border-black/10",
  },
];

const businessIconLayouts = [
  { left: 808, top: 2849, width: 137, height: 145 },
  { left: 997, top: 2849, width: 143, height: 145 },
  { left: 1176, top: 2839, width: 164, height: 164 },
  { left: 1370, top: 2844, width: 154, height: 154 },
  { left: 802, top: 3012, width: 149, height: 149 },
  { left: 991, top: 3010, width: 154, height: 154 },
  { left: 1169, top: 2998, width: 177, height: 177 },
  { left: 1371, top: 3009, width: 155, height: 155 },
  { left: 793, top: 3184, width: 166, height: 166 },
  { left: 991, top: 3190, width: 154, height: 154 },
  { left: 1180, top: 3189, width: 155, height: 155 },
  { left: 1362, top: 3185, width: 164, height: 164 },
  { left: 1554, top: 3185, width: 164, height: 164 },
  { left: 1563, top: 3009, width: 155, height: 155 },
];

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
      className={`absolute block object-cover ${className}`}
      style={style}
    />
  );
}

export default function AiCasePage() {
  // Keyboard: Esc → home
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") window.location.href = "/#works";
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="overflow-x-auto bg-white pb-16 pt-16 md:pt-20">
      <div className="relative mx-auto h-[4679px] w-[1600px] max-w-none bg-white font-serif text-[#333]">
        <a
          href="/#works"
          className="absolute left-[128px] top-[32px] text-[16px] tracking-[0.2em] text-[#333] transition-opacity hover:opacity-70"
        >
          ← Back To Works
        </a>

        <p className="absolute left-[74px] top-[180px] text-[50px] font-medium leading-[72px] text-[#333]">
          个人对于AI的持续探索
        </p>
        <p className="absolute left-[1299px] top-[202px] text-[12px] text-[#333] opacity-50">
          *此页为设计类AI的探索，不完全
        </p>

        <div className="absolute left-[351px] top-[354px] h-[1475px] border-l border-dashed border-[#bfbfbf]" />

        {timelineCopy.map((item) => (
          <div key={item.year}>
            <div
              className="absolute h-px w-[63px] border-t border-dashed border-[#bfbfbf]"
              style={{ left: 356, top: item.connectorTop }}
            />
            <div
              className="absolute h-[16px] w-[16px] rounded-full bg-[#333]"
              style={{ left: 343, top: item.dotTop }}
            />
            <p
              className="absolute text-[24px] font-medium leading-[34px] text-[#333]"
              style={item.yearStyle}
            >
              {item.year}
            </p>
            <div
              className="absolute w-[420px] text-[#666]"
              style={{ left: 442, top: item.bodyTop }}
            >
              {item.body}
            </div>
          </div>
        ))}

        {explorationVisuals.map((visual) => (
          <CanvasImage
            key={`${visual.src}-${visual.style.left}-${visual.style.top}`}
            src={visual.src}
            style={visual.style}
            className={visual.className}
          />
        ))}

        <p className="absolute left-[960px] top-[394px] text-[10px] text-[#666]">用AI探索自媒体</p>
        <p className="absolute left-[960px] top-[753px] text-[10px] text-[#666]">方案探索</p>
        <p className="absolute left-[961px] top-[1115px] text-[10px] text-[#666]">
          用生成的设计规范、变量让AI自己搭建页面
        </p>
        <p className="absolute left-[961px] top-[1477px] text-[10px] text-[#666]">
          用Vibe Coding解决自己日常的需求的工具搭建ing...
        </p>

        <p className="absolute left-[74px] top-[2014px] text-[50px] font-medium leading-[72px] text-[#333]">
          当前工作中
        </p>
        <p className="absolute left-[86px] top-[2207px] text-[60px] font-bold leading-[85px] tracking-[3px] text-black">
          AI 赋能与设计工程化
        </p>
        <p className="absolute left-[778px] top-[2207px] text-[40px] font-bold leading-[56px] text-[#1e293b]">
          对外：AIGC如何帮助我们业务？
        </p>
        <p className="absolute left-[778px] top-[2305px] text-[40px] font-bold leading-[56px] text-[#1e293b]">
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
            className="absolute top-[2317px] flex h-[37px] w-[144px] items-center justify-center rounded-[4px] bg-[#1677ff] text-[20px] font-medium text-white"
            style={{ left: chip.left }}
          >
            {chip.label}
          </div>
        ))}

        <p className="absolute left-[74px] top-[2521px] w-[1316px] text-[22px] leading-[normal] text-black opacity-60">
          "验证场景：蔬东坡 SaaS 智能分拣系统（当前在职实战）
          <br />
          在复杂业务中，我主导并跑通了这套 AI 资产标准化体系，现已成为团队日常交付的基础设施，始终保持对 AI 前沿技术的探索与实践..."
        </p>

        <p className="absolute left-[74px] top-[2706px] text-[40px] font-bold leading-[56px] text-[#1e293b]">
          对外（业务侧）：AIGC如何帮助我们业务？
        </p>
        <p className="absolute left-[74px] top-[2836px] text-[32px] font-bold leading-[56px] text-[#1e293b]">
          传统商品实拍图背景杂乱、光线不一
        </p>
        <p className="absolute left-[74px] top-[3168px] text-[32px] font-bold leading-[56px] text-[#1e293b]">
          视觉资产交付
        </p>

        <p className="absolute left-[78px] top-[2901px] text-[14px] font-semibold text-[#f53f3f]">痛点：</p>
        <p className="absolute left-[128px] top-[2901px] text-[14px] text-[#666]">
          可读性较差，增加一线员工认知负荷，对于需要高效完成单次作业的场景不太友好
        </p>

        <div className="absolute left-[78px] top-[2939px] h-[199px] w-[546px] rounded-[8px] bg-[#1d2129]">
          <div className="flex h-[41px] items-center gap-2 rounded-t-[8px] bg-[#2d3138] px-4">
            <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
            <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
            <span className="h-3 w-3 rounded-full bg-[#28c840]" />
          </div>
          <p className="absolute left-[32px] top-[54px] font-[var(--font-ui)] text-[16px] text-[#52c41a]">
            /imagine prompt:
          </p>
          <p className="absolute left-[32px] top-[86px] w-[484px] font-[var(--font-ui)] text-[16px] leading-[normal] text-[#e5e6eb]">
            A 3D icon, a square translucent frosted glass storage crate filled with fresh{" "}
            <span className="text-[#1890ff]">[green round cabbages]</span>, clear leaf texture, C4D render,
            Octane render, soft diffused lighting, isometric view, minimalism, rounded edges, fresh color palette,
            white background, high quality, no noise.
          </p>
        </div>

        {/* Arrow — drawn as inline SVG since the original used a Figma asset */}
        <svg
          className="absolute"
          style={{ left: 689, top: 3056, width: 67, height: 52 }}
          viewBox="0 0 67 52"
          fill="none"
          aria-hidden
        >
          <path
            d="M2 26 L60 26 M45 10 L60 26 L45 42"
            stroke="#86909c"
            strokeWidth="1.8"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        {businessIconLayouts.map((layout, index) => (
          <CanvasImage
            key={`${layout.left}-${layout.top}`}
            src={businessIcons[index % businessIcons.length]}
            style={layout}
            className="shadow-[0_4px_6px_rgba(0,0,0,0.08)]"
          />
        ))}

        <p className="absolute left-[73px] top-[3233px] text-[14px] text-[#666]">
          通过AI批量生成+自动化脚本命名，实现 1000+ SKU 零耗时接入
        </p>
        <p className="absolute left-[1144px] top-[3389px] text-[18px] tracking-[0.2px] text-[#4e5969] opacity-50">
          建设标准化视觉资产库，容器化封装保证视觉整齐度
        </p>

        <div className="absolute left-[73px] top-[3273px] text-[14px] text-[#1d2129]">
          <p className="font-medium">数据映射</p>
          <div className="mt-2 flex gap-14">
            <div className="rounded-[8px] border border-[#12203a] bg-[#12203a] px-3 py-2 text-[11px] text-white">
              <p className="text-[12px] text-[#52c41a]">土豆</p>
              <p>ID: sku_10086</p>
              <p className="text-[#1890ff]">.webp</p>
            </div>
            <div className="rounded-[8px] border border-[#ffd8bf] bg-white px-3 py-2 text-center text-[11px]">
              <p className="text-[#86909c]">PNG</p>
              <p className="text-[#f53f3f]">800 KB</p>
            </div>
            <div className="rounded-[8px] border border-[#b7eb8f] bg-white px-3 py-2 text-center text-[11px]">
              <p className="text-[#52c41a]">WebP</p>
              <p className="text-[#52c41a]">45 KB</p>
            </div>
            <div className="rounded-[8px] border border-[#e5e6eb] bg-white px-4 py-2 text-[11px] text-[#86909c]">
              <p>Top 200 → AI 专属 3D 图</p>
              <p>长尾 SKU → 默认品类图兜底</p>
            </div>
          </div>
        </div>

        <div className="absolute left-[94px] top-[3585px] text-[#1e293b]">
          <p className="text-[40px] font-bold leading-[56px]">对内（研发侧）：</p>
          <p className="text-[40px] font-bold leading-[56px]">AI是怎么帮助团队内部协作提效的？</p>
        </div>

        <p className="absolute left-[99px] top-[3748px] text-[32px] font-bold leading-[56px] text-[#1e293b]">
          Before
        </p>
        <p className="absolute left-[103px] top-[3814px] text-[14px] font-semibold text-[#f53f3f]">痛点：</p>
        <p className="absolute left-[145px] top-[3814px] text-[14px] text-[#666]">
          切图多、沟通杂，新页面联调耗时耗力等
        </p>
        <p className="absolute left-[99px] top-[3864px] text-[32px] font-bold leading-[56px] text-[#1e293b]">
          Now
        </p>

        <div className="absolute left-[99px] top-[3938px] w-[340px] text-[#1d2129]">
          <p className="text-[18px] font-medium">✅ 消除"像素级走查"误差</p>
          <p className="mt-2 text-[14px] leading-[normal] text-[#666]">
            Padding、圆角与色彩等通过 AI 直接转化为 HTML/CSS 样式，实现 100% 视觉还原
          </p>
          <p className="mt-6 text-[18px] font-medium">✅ 释放前端还原生产力</p>
          <p className="mt-2 text-[14px] leading-[normal] text-[#666]">
            为开发提供开箱即用，使其专注业务接口逻辑，联调时间缩短约 20%
          </p>
          <p className="mt-6 text-[18px] font-medium">✅ 重塑产研沟通语言</p>
          <p className="mt-2 text-[14px] leading-[normal] text-[#666]">
            从"抛设计图"升级为"交付可运行代码片段"，用开发者的语言进行无缝跨职能协作
          </p>
        </div>

        {/* 3 tool icons row: Figma / Browser / GitHub */}
        <CanvasImage
          src={internalAssets.figmaIcon}
          style={{ left: 599, top: 3871, width: 60, height: 60 }}
          className="!object-contain"
        />
        <div
          className="absolute overflow-hidden rounded-[16px] border border-[#e5e6eb] bg-white shadow-[0_4px_12px_rgba(0,0,0,0.06)]"
          style={{ left: 857, top: 3793, width: 66, height: 66 }}
        >
          <div className="flex items-center gap-[3px] bg-[#f2f3f5] px-2 py-[6px]">
            <span className="inline-block h-[6px] w-[6px] rounded-full bg-[#ff5f57]" />
            <span className="inline-block h-[6px] w-[6px] rounded-full bg-[#febc2e]" />
            <span className="inline-block h-[6px] w-[6px] rounded-full bg-[#28c840]" />
          </div>
          <div className="mx-2 mt-2 h-[2px] rounded bg-[#e5e6eb]" />
          <div className="mx-2 mt-[6px] h-[2px] w-[36px] rounded bg-[#e5e6eb]" />
          <div className="mx-2 mt-[6px] h-[2px] w-[28px] rounded bg-[#e5e6eb]" />
        </div>
        <CanvasImage
          src={internalAssets.githubIcon}
          style={{ left: 1122, top: 3718, width: 60, height: 60 }}
          className="!object-contain"
        />

        {/* DESIGN card (rendered screenshot) */}
        <CanvasImage
          src={internalAssets.designCard}
          style={{ left: 599, top: 3955, width: 324.19, height: 237.74 }}
          className="rounded-[13px] border border-[#e5e6eb]"
        />

        {/* HTML/CSS card — original draws inline text; we keep that for clarity */}
        <div className="absolute left-[864px] top-[3884px] h-[229.01px] w-[324.19px] rounded-[12px] bg-[#1d2129]">
          <div className="absolute left-0 top-0 rounded-t-[12px] bg-[#808a97] px-4 py-2 text-[14.87px] text-white">
            HTML/CSS
          </div>
          <pre className="absolute left-[20px] top-[50px] whitespace-pre-wrap font-[var(--font-ui)] text-[17.85px] leading-[normal] text-[#fa8c16]">
            {`/* 首页 */\n\nposition: relative;\nwidth: 1920px;\nheight: 1080px;\n\n...................`}
          </pre>
        </div>

        {/* GitHub git部署 poster */}
        <CanvasImage
          src={internalAssets.githubPoster}
          style={{ left: 1122, top: 3802, width: 324.19, height: 229.01 }}
          className="rounded-[12px] border border-[#e6e6e6]"
        />

        <div className="absolute left-[951px] top-[4137px] text-[18px] text-black">
          <p>Demo 展示：</p>
          <a
            href="https://figma-cursor-collab.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            https://figma-cursor-collab.vercel.app
          </a>
        </div>

        <div className="absolute left-[320px] top-[4552px] h-px w-[960px] bg-[#e5e5e5]" />
        <p className="absolute left-[320px] top-[4580px] font-[var(--font-brand)] text-[32px] font-bold tracking-[-0.07em] text-[#59675d]">
          ABBIE.
        </p>
        <a
          href="/#works"
          className="absolute left-[1124px] top-[4586px] text-[19px] tracking-[0.34em] text-[#7a6947]"
        >
          BACK TO WORKS 👉
        </a>
      </div>
    </div>
  );
}
