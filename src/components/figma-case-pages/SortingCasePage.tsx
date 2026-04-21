import type { CSSProperties, ReactNode } from "react";
import { CasePageShell, RemoteImage } from "./CasePageScaffold";

const assets = {
  heroBackdrop: "https://www.figma.com/api/mcp/asset/c6c65b0e-958f-46ed-8962-3e9e866b07fb",
  heroMonitor: "https://www.figma.com/api/mcp/asset/5400276b-2414-4c07-a16e-54eb2721ce85",
  heroHand: "https://www.figma.com/api/mcp/asset/245b025d-f28f-47fb-9d8d-66b9f780f2f9",
  heroHighlight: "https://www.figma.com/api/mcp/asset/716b0e50-b435-4506-9c2d-257e2959a56f",
  heroDivider: "https://www.figma.com/api/mcp/asset/0974b448-cd4c-4139-ad0b-422b3143f19c",
  unionArrow: "https://www.figma.com/api/mcp/asset/5f4c6f23-f5ee-4735-9893-5b2066ff8bdf",

  cubeCarrot: "https://www.figma.com/api/mcp/asset/c7605625-345d-43c7-b6b0-5b7fddda0c4a",
  cubePotato: "https://www.figma.com/api/mcp/asset/b5406fb6-8d8c-429b-b179-762007c62eca",
  cubeOnion: "https://www.figma.com/api/mcp/asset/03c0c0a2-503f-4773-947d-307caa187c7f",
  cubeCabbage: "https://www.figma.com/api/mcp/asset/daa4ba97-7413-4895-a2d4-f359401c1a62",
  cubeTomato: "https://www.figma.com/api/mcp/asset/0fc092bb-f028-411a-92eb-8b861590e14a",
  cubeCucumber: "https://www.figma.com/api/mcp/asset/2f5619b5-edb1-45fb-913c-f94d0bdd20bb",
  cubeBokchoy: "https://www.figma.com/api/mcp/asset/8528c03b-c910-4589-abfe-03a7f72ef659",
  cubeBabyCabbage: "https://www.figma.com/api/mcp/asset/de52845c-6ade-4a78-9502-54dce32095ec",
  cubeChoySum: "https://www.figma.com/api/mcp/asset/5f05930c-3dcc-4103-b552-5f9be0c2cb1b",
  cubeWaterSpinach: "https://www.figma.com/api/mcp/asset/aa0f29fa-ee6e-4243-93c6-e881beb46926",
  cubeChrysanthemum: "https://www.figma.com/api/mcp/asset/b13fca6e-bdd3-421d-9691-4764b80ab8cd",

  workflowGitPanel: "https://www.figma.com/api/mcp/asset/7d38157c-31d7-410a-b120-0ad5d6bce7e6",
  workflowDesignPanel: "https://www.figma.com/api/mcp/asset/1b2aec25-642a-4157-b571-4df575eaffdb",
  workflowDesignFooter: "https://www.figma.com/api/mcp/asset/4bba6ea5-6619-419e-bd9d-70b4dc47b322",
  workflowPurpleBadge: "/workflow/codex-color.png",
  workflowFigmaIcon: "https://www.figma.com/api/mcp/asset/bbea26cc-4e32-4299-8d4b-5bd6c04919a7",
  workflowCodeLabel: "https://www.figma.com/api/mcp/asset/651e71d9-b918-4523-9ac5-796292d33a58",
  workflowGitMask: "https://www.figma.com/api/mcp/asset/c4b13cce-0e20-4df5-901a-6bfc9e01a665",
  workflowGitBar: "https://www.figma.com/api/mcp/asset/1882d20e-63c4-407d-82fc-c75da9a210e4",
  workflowGitHubIcon: "https://www.figma.com/api/mcp/asset/68de4a22-3bc3-4636-869d-742c4514ff3f",

  dashboardBoard: "https://www.figma.com/api/mcp/asset/330f61e1-d62f-4b8d-a987-8693d7b729d6",
  dashboardMask: "https://www.figma.com/api/mcp/asset/d3d1d77b-9f7c-4b33-9c07-4e676dd21ef8",
  dashboardLeftLine: "https://www.figma.com/api/mcp/asset/2ead63bc-77cc-43b9-87a1-2f00744a6f2d",
  dashboardPriorityLine: "https://www.figma.com/api/mcp/asset/ce357484-8d17-465b-bf72-23a81dd3905c",
  dashboardStatusLine: "https://www.figma.com/api/mcp/asset/b255b4dd-b380-4001-baaf-39e8f7fb7e6f",

  listLeftBoard: "https://www.figma.com/api/mcp/asset/f56e6b37-36f8-4190-a635-008f6a695b38",
  listRightBoard: "https://www.figma.com/api/mcp/asset/25ed4894-1a07-456e-9031-1c8527c63102",
  listMask: "https://www.figma.com/api/mcp/asset/5fdd0430-1903-4e87-a9c5-55712d0996c0",

  configPreviewBoard: "https://www.figma.com/api/mcp/asset/1f0e2ddd-efc7-40e6-83c2-5b1cb996592c",
  configHardwareBoard: "https://www.figma.com/api/mcp/asset/94ed9a24-a309-4a56-ade0-3f308e64a3c5",
  configMask: "https://www.figma.com/api/mcp/asset/5c381653-44e7-405f-92c8-69718f205fca",
  configShortLine: "https://www.figma.com/api/mcp/asset/016b586c-d69d-4872-b3c4-6acc6fb6c539",
  configLongLine: "https://www.figma.com/api/mcp/asset/76cec182-41f3-491c-a8b4-9ca68008ab44",

  footerLeftPreview: "https://www.figma.com/api/mcp/asset/f84e8db0-4211-4860-a12e-84080f581f7d",
  footerRightPhones: "https://www.figma.com/api/mcp/asset/3874ba65-5b5f-451c-b0d8-33424804e54c",
  footerRightLogo: "https://www.figma.com/api/mcp/asset/33d3215b-25f6-4b92-ae0b-c5a9f2269d25",
} as const;

const metaItems = [
  { label: "Timeline", value: "2023.11 - 2026.04", left: 210 },
  { label: "Role", value: "UI设计师", left: 506 },
  { label: "Tools", value: "Figma", left: 802 },
  {
    label: "Industry",
    value: "Fresh Produce Sorting System",
    left: 1098,
  },
] as const;

const topNav = [
  { label: "AI 赋能与设计工程化", href: "#overview" },
  { label: "首页-智能分拣任务看板", href: "#dashboard" },
  { label: "场景化列表：防错与效率的平衡", href: "#list" },
  { label: "配置中台与工具闭环", href: "#config" },
  { label: "价值闭环与未来演进", href: "#value" },
] as const;

const cubeItems = [
  { src: assets.cubeCarrot, left: 793, top: 2053, width: 166, height: 166 },
  { src: assets.cubePotato, left: 985, top: 2053, width: 166, height: 166 },
  { src: assets.cubeOnion, left: 1176, top: 2054, width: 164, height: 164 },
  { src: assets.cubeChrysanthemum, left: 1370, top: 2059, width: 154, height: 154 },
  { src: assets.cubeChrysanthemum, left: 1562, top: 2059, width: 154, height: 154 },
  { src: assets.cubeCabbage, left: 802, top: 2227, width: 149, height: 149 },
  { src: assets.cubeTomato, left: 991, top: 2225, width: 154, height: 154 },
  { src: assets.cubeCucumber, left: 1169, top: 2213, width: 177, height: 177 },
  { src: assets.cubeWaterSpinach, left: 1371, top: 2224, width: 155, height: 155 },
  { src: assets.cubeWaterSpinach, left: 1563, top: 2224, width: 155, height: 155 },
  { src: assets.cubeBokchoy, left: 793, top: 2399, width: 166, height: 166 },
  { src: assets.cubeBabyCabbage, left: 991, top: 2405, width: 154, height: 154 },
  { src: assets.cubeChoySum, left: 1180, top: 2404, width: 155, height: 155 },
  { src: assets.cubeBokchoy, left: 1362, top: 2400, width: 164, height: 164 },
  { src: assets.cubeBokchoy, left: 1554, top: 2400, width: 164, height: 164 },
] as const;

const pillItems = [
  { label: "探索精神", left: 86 },
  { label: "团队协作", left: 238 },
  { label: "赋能业务", left: 390 },
  { label: "推动能力", left: 542 },
] as const;

const valueCards = [
  {
    left: 122,
    color: "#E6F7FF",
    accent: "#1890FF",
    badge: "⚡️ 分拣效率",
    value: "40%",
    suffix: "提升",
    copy: "单次作业耗时从 60s 降至 35s",
  },
  {
    left: 575,
    color: "#FFF7E6",
    accent: "#FA8C16",
    badge: "👥 人力成本",
    value: "-2",
    suffix: "人/库区",
    copy: "软硬件协同减少人工复核，单站人力成本优化",
  },
  {
    left: 1028,
    color: "#F6FFED",
    accent: "#52C41A",
    badge: "📊 数据质量",
    value: "100%",
    suffix: "",
    copy: "非标品流转数据实时上云，零误差",
  },
] as const;

function Img({
  alt,
  src,
  style,
  className = "",
}: {
  alt: string;
  src: string;
  style?: CSSProperties;
  className?: string;
}) {
  return (
    <RemoteImage
      alt={alt}
      src={src}
      style={style}
      className={className}
    />
  );
}

function AbsoluteText({
  children,
  className = "",
  style,
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <p className={`absolute ${className}`} style={style}>
      {children}
    </p>
  );
}

function SectionTitle({
  id,
  title,
  subtitle,
  titleLeft,
  titleTop,
  subtitleLeft,
  subtitleTop,
  subtitleSize = 28,
}: {
  id?: string;
  title: string;
  subtitle: string;
  titleLeft: number;
  titleTop: number;
  subtitleLeft: number;
  subtitleTop: number;
  subtitleSize?: number;
}) {
  return (
    <>
      {id ? <div id={id} className="absolute" style={{ left: 0, top: titleTop - 48 }} /> : null}
      <AbsoluteText
        className="font-tencent"
        style={{
          left: titleLeft,
          top: titleTop,
          fontSize: 40,
          lineHeight: "56px",
          fontWeight: 700,
          color: "#1E293B",
        }}
      >
        {title}
      </AbsoluteText>
      <AbsoluteText
        className="font-noto-sc"
        style={{
          left: subtitleLeft,
          top: subtitleTop,
          fontSize: subtitleSize,
          lineHeight: subtitleSize === 24 ? "42px" : "40px",
          fontWeight: 400,
          color: "#999999",
        }}
      >
        {subtitle}
      </AbsoluteText>
    </>
  );
}

function QuoteMarks({
  openLeft,
  openTop,
  closeLeft,
  closeTop,
}: {
  openLeft: number;
  openTop: number;
  closeLeft: number;
  closeTop: number;
}) {
  return (
    <>
      <AbsoluteText
        style={{
          left: openLeft,
          top: openTop,
          fontFamily: '"PingFang SC","Noto Serif SC",serif',
          fontSize: 100,
          lineHeight: "140px",
          fontWeight: 600,
          color: "#E6F7FF",
        }}
      >
        “
      </AbsoluteText>
      <AbsoluteText
        style={{
          left: closeLeft,
          top: closeTop,
          fontFamily: '"PingFang SC","Noto Serif SC",serif',
          fontSize: 100,
          lineHeight: "140px",
          fontWeight: 600,
          color: "#E6F7FF",
        }}
      >
        ”
      </AbsoluteText>
    </>
  );
}

function VerticalGuide({
  left,
  top,
  height,
  color = "#1777FF",
  opacity = 0.5,
}: {
  left: number;
  top: number;
  height: number;
  color?: string;
  opacity?: number;
}) {
  return (
    <div
      className="absolute"
      style={{ left, top, width: 8, height, opacity }}
    >
      <div
        className="absolute left-[3px] top-0 border-l-[1.5px] border-dashed"
        style={{ height: height - 8, borderColor: color }}
      />
      <div
        className="absolute bottom-0 left-0 h-2 w-2 rounded-full border-2 bg-white"
        style={{ borderColor: color }}
      />
    </div>
  );
}

export default function SortingCasePage() {
  return (
    <CasePageShell background="#FFFFFF" canvasHeight={8095}>
      <div className="relative h-[8095px] w-[1600px] bg-white">
        <a
          href="/#works"
          className="absolute font-noto-sc text-[#647067] transition-opacity hover:opacity-70"
          style={{
            left: 128,
            top: 32,
            fontSize: 11.2,
            lineHeight: "18px",
            letterSpacing: "3.584px",
            textTransform: "uppercase",
            fontWeight: 400,
          }}
        >
          ← Back To Works
        </a>

        <div
          className="absolute flex items-center gap-6"
          style={{ left: 619, top: 32 }}
        >
          {topNav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-noto-sc text-[#647067] transition-opacity hover:opacity-70"
              style={{
                fontSize: 11.2,
                lineHeight: "18px",
                letterSpacing: "3.584px",
                textTransform: "uppercase",
                fontWeight: 400,
              }}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div
          className="absolute overflow-hidden"
          style={{ left: 332, top: 94, width: 1469, height: 839.239 }}
        >
          <div
            className="absolute overflow-hidden opacity-30"
            style={{ left: 0, top: 0, width: 1428.032, height: 827.966 }}
          >
            <Img
              alt="分拣系统背景"
              src={assets.heroBackdrop}
              className="absolute max-w-none"
              style={{ left: "-0.61%", top: "1.19%", width: "100.61%", height: "97.61%" }}
            />
          </div>
          <div
            className="absolute overflow-hidden"
            style={{ left: 267.605, top: 5.451, width: 1164.428, height: 811.198 }}
          >
            <Img
              alt="分拣系统主屏"
              src={assets.heroMonitor}
              className="absolute max-w-none"
              style={{ left: "-24.01%", top: "-0.06%", width: "123.98%", height: "100.11%" }}
            />
          </div>
          <div
            className="absolute overflow-hidden"
            style={{ left: 240.908, top: 0.317, width: 1228.092, height: 838.922 }}
          >
            <Img
              alt="手势交互主视觉"
              src={assets.heroHand}
              className="absolute max-w-none"
              style={{
                left: "-21.4%",
                top: "-0.01%",
                width: "121.4%",
                height: "99.97%",
                filter:
                  "brightness(1.08) contrast(1.14) saturate(1.06) sepia(0.08) hue-rotate(-8deg)",
              }}
            />
          </div>
          <Img
            alt="主视觉高光"
            src={assets.heroHighlight}
            className="absolute"
            style={{ left: 469.299, top: 91.058, width: 18.011, height: 31.02 }}
          />
          <Img
            alt="主视觉高光分隔"
            src={assets.heroDivider}
            className="absolute"
            style={{ left: 482.307, top: 91.95, width: 5.288, height: 31.162 }}
          />
        </div>

        <div className="absolute" style={{ left: 128, top: 332, width: 612 }}>
          <AbsoluteText
            className="font-ibm-mono"
            style={{
              left: 0,
              top: 0,
              width: 612,
              fontSize: 10.88,
              lineHeight: "18px",
              letterSpacing: "3.6992px",
              textTransform: "uppercase",
              color: "#91A096",
              fontWeight: 400,
            }}
          >
            SHUDONGPO
          </AbsoluteText>
          <AbsoluteText
            className="font-tencent"
            style={{
              left: 0,
              top: 34,
              width: 612,
              fontSize: 68,
              lineHeight: "84px",
              fontWeight: 700,
              color: "#000000",
            }}
          >
            蔬东坡智能分拣系统
          </AbsoluteText>
        <div
          className="absolute font-noto-sc text-[#647067]"
          style={{
            left: 0,
            top: 182,
            width: 544,
            fontSize: 18,
            lineHeight: "29px",
            fontWeight: 400,
          }}
        >
          “围绕生鲜智能分拣 SaaS 核心作业场景，优化触屏交互、信息层级与状态反馈，提升一线操作效率；
          并将 AI 应用于视觉资产生产与设计交付协作，提升识别准确率与协作效率”
          </div>
        </div>

        <div
          className="absolute border-y border-[rgba(144,91,64,0.16)]"
          style={{ left: 210, top: 996, width: 1180, height: 99 }}
        >
          {metaItems.map((item) => (
            <div
              key={item.label}
              className="absolute"
              style={{
                left: item.left - 210,
                top: 25,
                width: item.label === "Industry" ? 292 : 272,
              }}
            >
              <p
                className="font-mono text-[#91A096]"
                style={{
                  fontSize: 10.88,
                  lineHeight: "18px",
                  letterSpacing: "3.6992px",
                  textTransform: "uppercase",
                  fontWeight: 400,
                }}
              >
                {item.label}
              </p>
              <p
                className="font-noto-sc text-[#111111]"
                style={{
                  marginTop: 10,
                  fontSize: 19.2,
                  lineHeight: "23.04px",
                  fontWeight: 700,
                  whiteSpace: item.label === "Industry" ? "nowrap" : "normal",
                }}
              >
                {item.value}
              </p>
            </div>
          ))}
        </div>

        <div id="overview" className="absolute" style={{ left: 0, top: 1240 }} />
        <AbsoluteText
          className="font-tencent"
          style={{
            left: 86,
            top: 1301,
            fontSize: 60,
            lineHeight: "90px",
            letterSpacing: "0.07em",
            fontWeight: 700,
            color: "#000000",
          }}
        >
          AI 赋能与设计工程化
        </AbsoluteText>
        <AbsoluteText
          className="font-tencent"
          style={{
            left: 778,
            top: 1301,
            fontSize: 40,
            lineHeight: "56px",
            fontWeight: 700,
            color: "#1E293B",
          }}
        >
          对外：AIGC如何帮助我们业务？
        </AbsoluteText>
        <AbsoluteText
          className="font-tencent"
          style={{
            left: 778,
            top: 1399,
            fontSize: 40,
            lineHeight: "56px",
            fontWeight: 700,
            color: "#1E293B",
          }}
        >
          对内：AI是怎么帮助团队内部协作提效的？
        </AbsoluteText>
        {pillItems.map((item) => (
          <div key={item.label}>
            <div
              className="absolute rounded-[4px] bg-[#1677FF]"
              style={{ left: item.left, top: 1411, width: 144, height: 37 }}
            />
            <AbsoluteText
              className="font-noto-sc text-white"
              style={{
                left: item.left + 32,
                top: 1415,
                fontSize: 20,
                lineHeight: "29px",
                fontWeight: 500,
              }}
            >
              {item.label}
            </AbsoluteText>
          </div>
        ))}
        <div
          className="absolute font-noto-sc text-black/60"
          style={{
            left: 74,
            top: 1615,
            width: 1463,
            fontSize: 22,
            lineHeight: "32px",
            fontWeight: 400,
          }}
        >
          <p>“验证场景：蔬东坡 SaaS 智能分拣系统（当前在职实战）</p>
          <p>在复杂业务中，我主导并跑通了这套 AI 资产标准化体系，现已成为团队日常交付的基础设施</p>
          <p>始终保持对 AI 前沿技术的探索与实践...”</p>
        </div>

        <div id="business" className="absolute" style={{ left: 0, top: 1860 }} />
        <SectionTitle
          title="对外（业务侧）：AIGC如何帮助我们业务？"
          subtitle=""
          titleLeft={74}
          titleTop={1921}
          subtitleLeft={0}
          subtitleTop={0}
        />
        <AbsoluteText
          className="font-tencent"
          style={{
            left: 74,
            top: 2051,
            fontSize: 32,
            lineHeight: "56px",
            fontWeight: 700,
            color: "#1E293B",
          }}
        >
          传统商品实拍图背景杂乱、光线不一
        </AbsoluteText>
        <AbsoluteText
          className="font-tencent"
          style={{
            left: 74,
            top: 2383,
            fontSize: 32,
            lineHeight: "56px",
            fontWeight: 700,
            color: "#1E293B",
          }}
        >
          视觉资产交付
        </AbsoluteText>

        <div
          className="absolute rounded-[8px] bg-[#1D2129]"
          style={{ left: 78, top: 2154, width: 546, height: 199 }}
        />
        <div
          className="absolute"
          style={{ left: 78, top: 2154, width: 546, height: 41 }}
        >
          <div className="h-full w-full bg-[#2C2F36]" />
        </div>
        <div className="absolute flex gap-2" style={{ left: 92, top: 2169 }}>
          <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
          <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
          <span className="h-3 w-3 rounded-full bg-[#28C840]" />
        </div>
        <AbsoluteText
          style={{
            left: 110,
            top: 2211,
            fontFamily: '"Inter",sans-serif',
            fontSize: 16,
            lineHeight: "19px",
            fontWeight: 400,
            color: "#52C41A",
          }}
        >
          /imagine prompt:
        </AbsoluteText>
        <div
          className="absolute"
          style={{
            left: 110,
            top: 2242,
            width: 484,
            fontFamily: '"Inter",sans-serif',
            fontSize: 16,
            lineHeight: "19px",
            fontWeight: 400,
            color: "#E5E6EB",
          }}
        >
          A 3D icon, a square translucent frosted glass storage crate filled
          with fresh <span style={{ color: "#1890FF" }}>[green round cabbages]</span>,
          clear leaf texture, C4D render, Octane render, soft diffused lighting,
          isometric view, minimalism, rounded edges, fresh color palette, white
          background, high quality, no noise.
        </div>
        <AbsoluteText
          className="font-noto-sc"
          style={{
            left: 78,
            top: 2115,
            fontSize: 14,
            lineHeight: "20px",
            fontWeight: 600,
            color: "#F53F3F",
          }}
        >
          痛点：
        </AbsoluteText>
        <AbsoluteText
          className="font-noto-sc"
          style={{
            left: 128,
            top: 2115,
            fontSize: 14,
            lineHeight: "20px",
            fontWeight: 400,
            color: "#666666",
          }}
        >
          可读性较差 增加一线员工认知负荷，对于需要高效完成单次作业的场景不太友好
        </AbsoluteText>
        <Img
          alt="流程箭头"
          src={assets.unionArrow}
          className="absolute"
          style={{ left: 689, top: 2271.18, width: 67.001, height: 51.75 }}
        />
        <AbsoluteText
          className="font-noto-sc"
          style={{
            left: 73,
            top: 2447,
            fontSize: 14,
            lineHeight: "20px",
            fontWeight: 400,
            color: "#666666",
          }}
        >
          通过AI批量生成+自动化脚本命名，实现 1000+ SKU 零耗时接入
        </AbsoluteText>
        <AbsoluteText
          className="font-noto-sc"
          style={{
            left: 1144,
            top: 2603,
            fontSize: 18,
            lineHeight: "32px",
            letterSpacing: "0.2px",
            fontWeight: 400,
            color: "#4E5969",
            opacity: 0.5,
          }}
        >
          建设标准化视觉资产库，容器化封装保证视觉整齐度
        </AbsoluteText>

        {cubeItems.map((item, index) => (
          <div key={`${item.left}-${item.top}-${index}`}>
            <Img
              alt={`蔬菜单体 ${index + 1}`}
              src={item.src}
              className="absolute object-cover drop-shadow-[0_4px_6px_rgba(0,0,0,0.08)]"
              style={{
                left: item.left,
                top: item.top,
                width: item.width,
                height: item.height,
              }}
            />
          </div>
        ))}

        <AbsoluteText
          className="font-noto-sc"
          style={{
            left: 73,
            top: 2487,
            fontSize: 14,
            lineHeight: "20px",
            fontWeight: 500,
            color: "#1D2129",
          }}
        >
          数据映射
        </AbsoluteText>
        <div
          className="absolute flex items-center rounded-[8px] border border-[#1D2129] bg-[#1D2129] px-3"
          style={{ left: 73, top: 2515, width: 176, height: 45 }}
        >
          <div className="font-noto-sc">
            <p className="text-[12px] leading-[17px] text-[#52C41A]">土豆</p>
            <p className="whitespace-nowrap text-[11px] leading-[16px] text-[#E5E6EB]">
              ID: sku_10086
            </p>
          </div>
          <div className="mx-2 h-px flex-1 bg-[#1890FF]" />
          <p className="font-noto-sc text-[12px] font-medium leading-[17px] text-[#1890FF]">
            .webp
          </p>
        </div>

        <AbsoluteText
          className="font-noto-sc"
          style={{
            left: 283,
            top: 2487,
            fontSize: 14,
            lineHeight: "20px",
            fontWeight: 500,
            color: "#1D2129",
          }}
        >
          性能压缩
        </AbsoluteText>
        <div
          className="absolute flex items-center gap-3"
          style={{ left: 283, top: 2515 }}
        >
          <div className="flex h-[45px] w-[60px] flex-col items-center justify-center rounded-[6px] border border-[#E5E6EB] bg-white">
            <span className="font-noto-sc text-[12px] font-medium leading-[17px] text-[#86909C]">PNG</span>
            <span className="font-noto-sc text-[10px] leading-[14px] text-[#F53F3F]">800 KB</span>
          </div>
          <div className="h-px w-5 bg-[#52C41A]" />
          <div className="flex h-[45px] w-[60px] flex-col items-center justify-center rounded-[6px] border border-[#B7EB8F] bg-[#F6FFED]">
            <span className="font-noto-sc text-[12px] font-medium leading-[17px] text-[#52C41A]">WebP</span>
            <span className="font-noto-sc text-[10px] leading-[14px] text-[#52C41A]">45 KB</span>
          </div>
        </div>

        <AbsoluteText
          className="font-noto-sc"
          style={{
            left: 493,
            top: 2487,
            fontSize: 14,
            lineHeight: "20px",
            fontWeight: 500,
            color: "#1D2129",
          }}
        >
          80/20 兜底
        </AbsoluteText>
        <div
          className="absolute flex flex-col items-center justify-center rounded-[8px] border border-[#E5E6EB] bg-white text-center"
          style={{ left: 493, top: 2515, width: 177, height: 48 }}
        >
          <p className="w-full font-noto-sc text-[11px] leading-[16px] text-[#1D2129]">
            Top 200
            <span className="text-[#86909C]"> → AI 专属 3D 图</span>
          </p>
          <p className="w-full font-noto-sc text-[11px] leading-[16px] text-[#1D2129]">
            长尾 SKU
            <span className="text-[#86909C]"> → 默认品类图兜底</span>
          </p>
        </div>

        <div id="workflow" className="absolute" style={{ left: 0, top: 2740 }} />
        <div
          className="absolute font-tencent text-[#1E293B]"
          style={{ left: 94, top: 2800, fontSize: 40, lineHeight: "56px", fontWeight: 700 }}
        >
          <p>对内（研发侧）：</p>
          <p>AI是怎么帮助团队内部协作提效的？</p>
        </div>
        <AbsoluteText
          className="font-tencent"
          style={{
            left: 99,
            top: 2963,
            fontSize: 32,
            lineHeight: "56px",
            fontWeight: 700,
            color: "#1E293B",
          }}
        >
          Before
        </AbsoluteText>
        <AbsoluteText
          className="font-noto-sc"
          style={{
            left: 103,
            top: 3027,
            fontSize: 14,
            lineHeight: "20px",
            fontWeight: 600,
            color: "#F53F3F",
          }}
        >
          痛点：
        </AbsoluteText>
        <AbsoluteText
          className="font-noto-sc"
          style={{
            left: 145,
            top: 3027,
            fontSize: 14,
            lineHeight: "20px",
            fontWeight: 400,
            color: "#666666",
          }}
        >
          切图多、沟通杂，新页面联调耗时耗力等
        </AbsoluteText>
        <AbsoluteText
          className="font-tencent"
          style={{
            left: 99,
            top: 3079,
            fontSize: 32,
            lineHeight: "56px",
            fontWeight: 700,
            color: "#1E293B",
          }}
        >
          Now
        </AbsoluteText>
        {[
          {
            title: "✅ 消除“像素级走查”沟通成本",
            body: "面对 B 端复杂的动态反馈，Figma 难以实现真实交互。 Demo，让前端开发不再靠脑补",
            top: 3151,
          },
          {
            title: "✅ 降低前端理解设计的成本",
            body: "“一张静态图+批注”的低效沟通。对于特殊数据状态切换，通过 Demo，将扯皮时间缩减 20%",
            top: 3252,
          },
          {
            title: "✅ 重塑产研沟通语言",
            body: "上传html到Github上，方便上下游去看产品方案，并且可基于现在的方案去做优化/迭代",
            top: 3353,
          },
        ].map((item, index) => (
          <div key={item.title}>
            <AbsoluteText
              className="font-noto-sc"
              style={{
                left: index === 2 ? 94 : 99,
                top: item.top,
                fontSize: 18,
                lineHeight: "26px",
                fontWeight: 500,
                color: "#1D2129",
              }}
            >
              {item.title}
            </AbsoluteText>
            <div
              className="absolute font-noto-sc text-[#666666]"
              style={{
                left: index === 2 ? 94 : 99,
                top: item.top + 37,
                width: 340,
                fontSize: 14,
                lineHeight: "20px",
                fontWeight: 300,
              }}
            >
              {item.body}
            </div>
          </div>
        ))}

        <div
          className="absolute rounded-[13px]"
          style={{ left: 599, top: 3170, width: 324.187, height: 237.737 }}
        >
          <Img
            alt="设计维护面板"
            src={assets.workflowDesignPanel}
            className="h-full w-full rounded-[13px]"
          />
          <Img
            alt="Design 标签"
            src={assets.workflowCodeLabel}
            className="absolute"
            style={{ left: 1.009, top: 2.443, width: 102.61, height: 32.716 }}
          />
          <AbsoluteText
            className="font-noto-sc text-white"
            style={{
              left: 23.016,
              top: 8.392,
              fontSize: 14.871,
              lineHeight: "21px",
              fontWeight: 400,
            }}
          >
            DESIGN
          </AbsoluteText>
          <div
            className="absolute overflow-hidden"
            style={{ left: 0, top: 178.238, width: 323.323, height: 57.767 }}
          >
            <Img
              alt="设计维护底栏"
              src={assets.workflowDesignFooter}
              className="absolute max-w-none"
              style={{ left: "-0.8%", top: "-317.94%", width: "102.14%", height: "425.43%" }}
            />
          </div>
        </div>
        <Img
          alt="Figma 图标"
          src={assets.workflowFigmaIcon}
          className="absolute"
          style={{ left: 587, top: 3074, width: 84, height: 84 }}
        />
        <Img
          alt="Codex 工具图标"
          src={assets.workflowPurpleBadge}
          className="absolute rounded-[18px]"
          style={{ left: 854, top: 3005, width: 72, height: 72 }}
        />

        <div
          className="absolute rounded-[11.897px] bg-[#1D2129]"
          style={{ left: 864, top: 3099, width: 324.187, height: 229.012 }}
        />
        <Img
          alt="HTML CSS 标签"
          src={assets.workflowCodeLabel}
          className="absolute"
          style={{ left: 864, top: 3099, width: 102.61, height: 32.716 }}
        />
        <AbsoluteText
          className="font-noto-sc text-white"
          style={{
            left: 875.896,
            top: 3104.95,
            fontSize: 14.871,
            lineHeight: "21px",
            fontWeight: 400,
          }}
        >
          HTML/CSS
        </AbsoluteText>
        <div
          className="absolute text-[#FA8C16]"
          style={{
            left: 884.82,
            top: 3139.152,
            width: 242.397,
            fontFamily: '"Inter",sans-serif',
            fontSize: 17.845,
            lineHeight: "22px",
            fontWeight: 400,
          }}
        >
          <p>{`/* 首页 */`}</p>
          <p>position: relative;</p>
          <p>width: 1920px;</p>
          <p>height: 1080px;</p>
          <p>...................</p>
        </div>

        <Img
          alt="GitHub 图标"
          src={assets.workflowGitHubIcon}
          className="absolute"
          style={{ left: 1118, top: 2929, width: 68, height: 68 }}
        />
        <div
          className="absolute rounded-[11.897px] bg-[#1D2129]"
          style={{ left: 1122, top: 3017, width: 324.187, height: 229.012 }}
        />
        <div
          className="absolute overflow-hidden rounded-[11.897px]"
          style={{ left: 1122.693, top: 3017, width: 324.187, height: 229.012 }}
        >
          <div
            className="absolute overflow-hidden"
            style={{ left: 3.294, top: -69.895, width: 320.895, height: 302.73 }}
          >
            <Img
              alt="Git 部署面板"
              src={assets.workflowGitPanel}
              className="absolute max-w-none"
              style={{ left: "-21.01%", top: "12.79%", width: "132.29%", height: "82.12%" }}
            />
          </div>
        </div>
        <div
          className="absolute rounded-[11.897px] border border-[#E6E6E6] bg-black/60 backdrop-blur-[1.009px]"
          style={{ left: 1122, top: 3017, width: 324.187, height: 229.012 }}
        />
        <div
          className="absolute text-center text-white"
          style={{
            left: 1223,
            top: 3064.541,
            width: 122,
            fontFamily: '"Noto Serif SC",serif',
            fontSize: 20.182,
            lineHeight: "29px",
            fontWeight: 500,
          }}
        >
          <p>日常设计维护</p>
          <p>{`&`}</p>
          <p>开发产品自拿</p>
        </div>
        <Img
          alt="git 部署底栏"
          src={assets.workflowGitBar}
          className="absolute"
          style={{ left: 1123.5, top: 3186.615, width: 321, height: 58 }}
        />
        <AbsoluteText
          className="font-noto-sc text-white"
          style={{
            left: 1245.188,
            top: 3198.399,
            fontSize: 24.218,
            lineHeight: "35px",
            fontWeight: 500,
          }}
        >
          git部署
        </AbsoluteText>

        <div
          className="absolute text-black"
          style={{
            left: 951,
            top: 3352,
            width: 511,
            fontFamily: '"Noto Serif SC",serif',
            fontSize: 18,
            lineHeight: "26px",
            fontWeight: 400,
          }}
        >
          <p>Demo 展示：</p>
          <a
            href="https://figma-cursor-collab.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4"
          >
            https://figma-cursor-collab.vercel.app
          </a>
        </div>

        <SectionTitle
          id="dashboard"
          title="首页-智能分拣任务看板"
          subtitle="Immersive Touchscreen Dashboard & Task Hub"
          titleLeft={74}
          titleTop={3613}
          subtitleLeft={74}
          subtitleTop={3669}
        />
        <QuoteMarks openLeft={828} openTop={3594} closeLeft={1459} closeTop={3645} />
        <div
          className="absolute font-noto-sc text-[#4E5969]"
          style={{
            left: 916,
            top: 3641,
            width: 533,
            fontSize: 18,
            lineHeight: "32px",
            letterSpacing: "0.2px",
            fontWeight: 400,
          }}
        >
          作为分拣员的“第一战场”，工作台通过高饱和视觉引导与容错交互，承载 90% 的高频作业流
        </div>
        <div
          className="absolute overflow-hidden rounded-[14.77px] border-[2.769px] border-[#E2E8F0]"
          style={{ left: 298.001, top: 3778.23, width: 1000.889, height: 563 }}
        >
          <Img
            alt="首页任务看板"
            src={assets.dashboardBoard}
            className="h-full w-full rounded-[14.77px]"
          />
        </div>
        <AbsoluteText
          className="font-noto-sc text-right text-[#666666]"
          style={{
            left: 49,
            top: 3942,
            width: 216,
            fontSize: 18,
            lineHeight: "26px",
            fontWeight: 400,
          }}
        >
          利用拟物化 3D 资产替代纯文字标题，帮助分拣员在疲劳状态下快速识别业务类型
        </AbsoluteText>
        <AbsoluteText
          className="font-noto-sc text-right text-[#1777FF]"
          style={{
            left: 185,
            top: 3906,
            fontSize: 20,
            lineHeight: "29px",
            fontWeight: 500,
          }}
        >
          认知降负
        </AbsoluteText>
        <Img
          alt="认知降负引导线"
          src={assets.dashboardLeftLine}
          className="absolute"
          style={{ left: 270, top: 3915, width: 56, height: 8 }}
        />
        <AbsoluteText
          className="font-noto-sc text-right text-[#1777FF]"
          style={{
            left: 145,
            top: 4218,
            width: 120,
            fontSize: 20,
            lineHeight: "29px",
            fontWeight: 500,
          }}
        >
          全宽触控热区
        </AbsoluteText>
        <Img
          alt="全宽触控热区引导线"
          src={assets.dashboardLeftLine}
          className="absolute"
          style={{ left: 270, top: 4227, width: 56, height: 8 }}
        />
        <AbsoluteText
          className="font-noto-sc text-right text-[#666666]"
          style={{
            left: 50,
            top: 4254,
            width: 215,
            fontSize: 18,
            lineHeight: "26px",
            fontWeight: 400,
          }}
        >
          按钮贯穿卡片宽度，降低手指移动距离与瞄准难度，提升盲操作效率
        </AbsoluteText>

        <AbsoluteText
          className="font-noto-sc text-[#1777FF]"
          style={{
            left: 1332,
            top: 3966,
            fontSize: 20,
            lineHeight: "29px",
            fontWeight: 500,
          }}
        >
          任务优先级
        </AbsoluteText>
        <Img
          alt="任务优先级引导线"
          src={assets.dashboardPriorityLine}
          className="absolute"
          style={{ left: 936, top: 3975, width: 391, height: 8 }}
        />
        <AbsoluteText
          className="font-noto-sc text-[#666666]"
          style={{
            left: 1332,
            top: 4002,
            width: 219,
            fontSize: 18,
            lineHeight: "26px",
            fontWeight: 400,
          }}
        >
          独立的高亮通知栏，确保急单不被常规任务流淹没
        </AbsoluteText>
        <AbsoluteText
          className="font-noto-sc text-[#1777FF]"
          style={{
            left: 1332,
            top: 4156,
            fontSize: 20,
            lineHeight: "29px",
            fontWeight: 500,
          }}
        >
          系统状态可见性
        </AbsoluteText>
        <Img
          alt="系统状态可见性引导线"
          src={assets.dashboardStatusLine}
          className="absolute"
          style={{ left: 1107, top: 4165, width: 220, height: 8 }}
        />
        <AbsoluteText
          className="font-noto-sc text-[#666666]"
          style={{
            left: 1332,
            top: 4192,
            width: 219,
            fontSize: 18,
            lineHeight: "26px",
            fontWeight: 400,
          }}
        >
          将电子秤、打印机连接状态前置显示，异常时红字报警，避免作业中断
        </AbsoluteText>

        <SectionTitle
          id="list"
          title="场景化列表：防错与效率的平衡"
          subtitle="Scenario-Based List Design: Prevention vs. Efficiency"
          titleLeft={74}
          titleTop={4541}
          subtitleLeft={74}
          subtitleTop={4597}
          subtitleSize={24}
        />
        <QuoteMarks openLeft={833} openTop={4522} closeLeft={1464} closeTop={4573} />
        <div
          className="absolute font-noto-sc text-[#4E5969]"
          style={{
            left: 921,
            top: 4569,
            width: 533,
            fontSize: 18,
            lineHeight: "32px",
            letterSpacing: "0.2px",
            fontWeight: 400,
          }}
        >
          <p>同样的列表，不同的策略</p>
          <p>非标品重在避免“拿错”，标品重在避免“看漏”</p>
        </div>

        <div
          className="absolute rounded-[12.33px] border-[2.312px] border-[#E2E8F0]"
          style={{ left: 70, top: 4735.19, width: 835.556, height: 470 }}
        >
          <Img
            alt="视觉防错列表"
            src={assets.listLeftBoard}
            className="h-full w-full rounded-[12.33px]"
          />
        </div>
        <div
          className="absolute rounded-[12.33px] border-[2.312px] border-[#E2E8F0]"
          style={{ left: 966.94, top: 4735.19, width: 835.556, height: 470 }}
        >
          <Img
            alt="决策提效列表"
            src={assets.listRightBoard}
            className="h-full w-full rounded-[12.33px]"
          />
        </div>
        <div
          className="absolute rounded-[16px] bg-[rgba(0,102,204,0.06)]"
          style={{ left: 70, top: 4679, width: 32, height: 32 }}
        />
        <AbsoluteText
          style={{
            left: 76.518,
            top: 4686.109,
            fontFamily: '"Inter",sans-serif',
            fontSize: 18.963,
            lineHeight: "23px",
          }}
        >
          🛡️
        </AbsoluteText>
        <AbsoluteText
          className="font-noto-sc text-[#1D2129]"
          style={{
            left: 110,
            top: 4681,
            fontSize: 20,
            lineHeight: "29px",
            fontWeight: 500,
          }}
        >
          视觉防错
        </AbsoluteText>
        <div
          className="absolute rounded-[16px] bg-[#FFF8E6]"
          style={{ left: 967, top: 4679, width: 32, height: 32 }}
        />
        <AbsoluteText
          style={{
            left: 973.518,
            top: 4686.109,
            fontFamily: '"Inter",sans-serif',
            fontSize: 18.963,
            lineHeight: "23px",
          }}
        >
          ⚡️
        </AbsoluteText>
        <AbsoluteText
          className="font-noto-sc text-[#1D2129]"
          style={{
            left: 1007,
            top: 4681,
            fontSize: 20,
            lineHeight: "29px",
            fontWeight: 500,
          }}
        >
          决策提效
        </AbsoluteText>

        {[
          {
            left: 70,
            pain: "凌晨疲劳作业，文字列表易导致“看错行、拿错货”",
            solution: "利用 3D 图像构建 “视觉锚点”，将阅读理解转为图形直觉匹配",
          },
          {
            left: 967,
            pain: "任务堆积，需快速判断“剩余工作量”与“物流去向”",
            solution: "弱化图标，放大 “双色数据” 与 “物流字段”，提升关键信息扫视率",
          },
        ].map((card) => (
          <div
            key={card.left}
            className="absolute rounded-[8px] bg-[#F7F8FA]"
            style={{ left: card.left, top: 5229, width: 836, height: 96 }}
          >
            <p
              className="absolute font-noto-sc text-[#86909C]"
              style={{ left: 24, top: 24, fontSize: 14, lineHeight: "20px", fontWeight: 500 }}
            >
              PAIN POINT (痛点)
            </p>
            <p
              className="absolute font-noto-sc text-[#666666]"
              style={{ left: 162, top: 24, fontSize: 14, lineHeight: "20px", fontWeight: 400 }}
            >
              {card.pain}
            </p>
            <p
              className="absolute font-noto-sc text-[#1890FF]"
              style={{ left: 24, top: 54, fontSize: 14, lineHeight: "20px", fontWeight: 500 }}
            >
              SOLUTION (策略)
            </p>
            <p
              className="absolute font-noto-sc text-[#1D2129]"
              style={{ left: 162, top: 54, fontSize: 14, lineHeight: "20px", fontWeight: 400 }}
            >
              {card.solution}
            </p>
          </div>
        ))}

        <SectionTitle
          id="config"
          title="配置中台与工具闭环"
          subtitle="System Configuration & Tools"
          titleLeft={77}
          titleTop={5500}
          subtitleLeft={77}
          subtitleTop={5556}
        />
        <div
          className="absolute rounded-[16px] border border-[#E2E8F0]"
          style={{ left: 64, top: 5703, width: 838, height: 764.675 }}
        >
          <Img
            alt="硬件聚合配置页面"
            src={assets.configHardwareBoard}
            className="h-full w-full rounded-[16px]"
          />
        </div>
        <div
          className="absolute rounded-[12.33px] border-[2.312px] border-[#E2E8F0]"
          style={{ left: 934.94, top: 5703.19, width: 835.556, height: 470 }}
        >
          <Img
            alt="WYSIWYG 标签设计器"
            src={assets.configPreviewBoard}
            className="h-full w-full rounded-[12.33px]"
          />
        </div>

        <div
          className="absolute rounded-[16px] bg-[#E6F7FF]"
          style={{ left: 68, top: 5647, width: 32, height: 32 }}
        />
        <AbsoluteText
          style={{
            left: 74.518,
            top: 5654.109,
            fontFamily: '"Inter",sans-serif',
            fontSize: 18.963,
            lineHeight: "23px",
          }}
        >
          🧩
        </AbsoluteText>
        <AbsoluteText
          className="font-noto-sc text-[#1D2129]"
          style={{
            left: 108,
            top: 5649,
            fontSize: 20,
            lineHeight: "29px",
            fontWeight: 500,
          }}
        >
          硬件聚合
        </AbsoluteText>

        <div
          className="absolute rounded-[16px] bg-[#FFF8E6]"
          style={{ left: 935, top: 5647, width: 32, height: 32 }}
        />
        <AbsoluteText
          style={{
            left: 941.518,
            top: 5654.109,
            fontFamily: '"Inter",sans-serif',
            fontSize: 18.963,
            lineHeight: "23px",
          }}
        >
          👁️
        </AbsoluteText>
        <AbsoluteText
          className="font-noto-sc text-[#1D2129]"
          style={{
            left: 975,
            top: 5649,
            fontSize: 20,
            lineHeight: "29px",
            fontWeight: 500,
          }}
        >
          所见即所得
        </AbsoluteText>

        <AbsoluteText
          className="font-noto-sc text-right text-[#1777FF]"
          style={{
            left: 648,
            top: 5611,
            width: 100,
            fontSize: 20,
            lineHeight: "29px",
            fontWeight: 500,
          }}
        >
          单页垂直流
        </AbsoluteText>
        <AbsoluteText
          className="font-noto-sc text-right text-[#666666]"
          style={{
            left: 626,
            top: 5647,
            width: 146,
            fontSize: 18,
            lineHeight: "26px",
            fontWeight: 400,
          }}
        >
          消除 4 次页面跳转
        </AbsoluteText>
        <VerticalGuide left={693} top={5676} height={56} />

        <AbsoluteText
          className="font-noto-sc text-right text-[#1777FF]"
          style={{
            left: 1108,
            top: 5541,
            width: 180,
            fontSize: 20,
            lineHeight: "29px",
            fontWeight: 500,
          }}
        >
          Real-time Preview
        </AbsoluteText>
        <AbsoluteText
          className="font-noto-sc text-right text-[#666666]"
          style={{
            left: 1110,
            top: 5577,
            width: 180,
            fontSize: 18,
            lineHeight: "26px",
            fontWeight: 400,
          }}
        >
          左侧实时渲染打印效果
        </AbsoluteText>
        <VerticalGuide left={1196} top={5613} height={160} />

        <AbsoluteText
          className="font-noto-sc text-right text-[#1777FF]"
          style={{
            left: 1464,
            top: 5602,
            width: 100,
            fontSize: 20,
            lineHeight: "29px",
            fontWeight: 500,
          }}
        >
          变量胶囊化
        </AbsoluteText>
        <AbsoluteText
          className="font-noto-sc text-right text-[#666666]"
          style={{
            left: 1386,
            top: 5638,
            width: 180,
            fontSize: 18,
            lineHeight: "26px",
            fontWeight: 400,
          }}
        >
          低代码方式配置数据源
        </AbsoluteText>
        <VerticalGuide left={1555} top={5669} height={160} />

        <AbsoluteText
          className="font-noto-sc text-[#1D2129]"
          style={{
            left: 926,
            top: 6339,
            fontSize: 20,
            lineHeight: "29px",
            fontWeight: 600,
          }}
        >
          硬件聚合配置中心
        </AbsoluteText>
        <AbsoluteText
          className="font-noto-sc text-[#666666]"
          style={{
            left: 926,
            top: 6375,
            width: 306,
            fontSize: 18,
            lineHeight: "26px",
            fontWeight: 400,
          }}
        >
          打印机、电子秤、显示参数一站式管理
        </AbsoluteText>
        <AbsoluteText
          className="font-noto-sc text-right text-[#1D2129]"
          style={{
            left: 1369,
            top: 6197,
            width: 210,
            fontSize: 20,
            lineHeight: "29px",
            fontWeight: 600,
          }}
        >
          WYSIWYG 标签设计器
        </AbsoluteText>
        <AbsoluteText
          className="font-noto-sc text-right text-[#666666]"
          style={{
            left: 1165,
            top: 6233,
            width: 414,
            fontSize: 18,
            lineHeight: "26px",
            fontWeight: 400,
          }}
        >
          所见即所得的低代码编辑能力，满足个性化打印需求
        </AbsoluteText>

        <SectionTitle
          id="value"
          title="价值闭环与未来演进"
          subtitle="Value Loop & Future Evolution"
          titleLeft={70}
          titleTop={6597}
          subtitleLeft={70}
          subtitleTop={6653}
        />
        <AbsoluteText
          className="font-noto-sc text-[#1E293B]"
          style={{
            left: 122,
            top: 6731,
            fontSize: 20,
            lineHeight: "28px",
            fontWeight: 600,
          }}
        >
          📈 商业价值交付
        </AbsoluteText>

        {valueCards.map((card) => (
          <div
            key={card.left}
            className="absolute rounded-[16px] border border-[#E2E8F0]"
            style={{ left: card.left, top: 6783, width: 429, height: 176, background: card.color }}
          >
            <p
              className="absolute font-noto-sc"
              style={{
                left: 24,
                top: 22,
                fontSize: 20,
                lineHeight: "28px",
                fontWeight: 600,
                color: card.accent,
              }}
            >
              {card.badge}
            </p>
            <p
              style={{
                position: "absolute",
                left: 24,
                top: 62,
                fontFamily: '"DIN Alternate","Arial Narrow",sans-serif',
                fontSize: 48,
                lineHeight: "56px",
                fontWeight: 700,
                color: card.accent,
              }}
            >
              {card.value}
            </p>
            {card.suffix ? (
              <p
                className="absolute font-noto-sc text-[#64748B]"
                style={{ left: card.left === 122 ? 112 : 83, top: 88, fontSize: 18, lineHeight: "24px", fontWeight: 400 }}
              >
                {card.suffix}
              </p>
            ) : null}
            <p
              className="absolute font-noto-sc text-[#4E5969]"
              style={{
                left: 24,
                top: 122,
                width: card.left === 1028 ? 273 : card.left === 575 ? 364 : 237,
                fontSize: 18,
                lineHeight: "32px",
                letterSpacing: "0.2px",
                fontWeight: 400,
              }}
            >
              {card.copy}
            </p>
          </div>
        ))}

        <AbsoluteText
          className="font-noto-sc text-[#1E293B]"
          style={{
            left: 122,
            top: 6991,
            fontSize: 20,
            lineHeight: "28px",
            fontWeight: 600,
          }}
        >
          💡设计沉淀
        </AbsoluteText>
        {[
          {
            left: 122,
            iconLeft: 146,
            emoji: "🛡️",
            title: "场景驱动的决策韧性",
            body: "在凌晨高压环境下，“确定性反馈”比“视觉精美”更具生命力。通过数字化，实现了 0.5s 的瞬时决策",
          },
          {
            left: 802,
            iconLeft: 826,
            emoji: "📘",
            title: "SaaS 方法论沉淀",
            body: "从任务拆解、硬件协同到异常闭环，设计输出的不只是界面，更是一套可复制的现场执行协议与配置能力",
          },
        ].map((card) => (
          <div
            key={card.left}
            className="absolute rounded-[16px] border border-[#E2E8F0] bg-white/80"
            style={{ left: card.left, top: 7043, width: 656, height: 148 }}
          >
            <div
              className="absolute rounded-[27px] bg-[rgba(0,102,204,0.06)]"
              style={{ left: 24, top: 24, width: 54, height: 54 }}
            />
            <AbsoluteText
              style={{
                left: 35,
                top: 36,
                fontFamily: '"Inter",sans-serif',
                fontSize: 32,
                lineHeight: "39px",
              }}
            >
              {card.emoji}
            </AbsoluteText>
            <AbsoluteText
              className="font-noto-sc text-[#1E293B]"
              style={{
                left: 96,
                top: 24,
                fontSize: 20,
                lineHeight: "28px",
                fontWeight: 600,
              }}
            >
              {card.title}
            </AbsoluteText>
            <div
              className="absolute font-noto-sc text-[#4E5969]"
              style={{
                left: 96,
                top: 60,
                width: 533,
                fontSize: 18,
                lineHeight: "32px",
                letterSpacing: "0.2px",
                fontWeight: 400,
              }}
            >
              {card.body}
            </div>
          </div>
        ))}

        <div
          className="absolute rounded-[16px] bg-[linear-gradient(90deg,#F0F5FF_52.88%,#FFFFFF_100%)]"
          style={{ left: 122, top: 7219, width: 1336, height: 148 }}
        />
        <AbsoluteText
          className="font-noto-sc text-[#1890FF]"
          style={{
            left: 260,
            top: 7261,
            fontSize: 16,
            lineHeight: "23px",
            fontWeight: 600,
          }}
        >
          FUTURE ROADMAP
        </AbsoluteText>
        <AbsoluteText
          className="font-noto-sc text-[#1D2129]"
          style={{
            left: 260,
            top: 7291,
            fontSize: 24,
            lineHeight: "34px",
            fontWeight: 600,
          }}
        >
          AI Vision 2.0：触手可及的“无感物流”
        </AbsoluteText>
        <div
          className="absolute flex items-center"
          style={{ left: 760, top: 7273, height: 40 }}
        >
          {[
            { label: "📸 摄像头识别", width: 140, invert: false },
            { label: "⚖️ 自动修正重量", width: 140, invert: false },
            { label: "✨ Zero UI 自动出标", width: 160, invert: true },
          ].map((step, index) => (
            <div key={step.label} className="flex items-center">
              <div
                className={`flex h-10 items-center justify-center rounded-[16px] border text-center ${
                  step.invert
                    ? "border-[#1890FF] bg-[#1890FF] text-white"
                    : "border-[#1890FF] bg-white text-[#1890FF]"
                }`}
                style={{
                  width: step.width,
                  fontFamily: '"Noto Serif SC",serif',
                  fontSize: 12,
                  lineHeight: "17px",
                  fontWeight: 600,
                }}
              >
                {step.label}
              </div>
              {index < 2 ? <div className="h-px w-10 bg-[#1890FF]" /> : null}
            </div>
          ))}
        </div>

        <div
          className="absolute overflow-hidden rounded-[16px] border-2 border-[rgba(0,0,0,0.1)] bg-white"
          style={{ left: 71, top: 7496, width: 715, height: 402 }}
        >
          <Img
            alt="WeChat Pay HK 预览"
            src={assets.footerLeftPreview}
            className="absolute max-w-none"
            style={{ left: -234, top: -88, width: 952, height: 535 }}
          />
          <div className="absolute bottom-0 left-0 h-16 w-full bg-black/50" />
          <AbsoluteText
            className="font-noto-sc text-white"
            style={{
              left: 32,
              top: 356,
              fontSize: 18,
              lineHeight: "29px",
              fontWeight: 600,
            }}
          >
            WeChat Pay HK
          </AbsoluteText>
          <a
            href="/?case=wechatpay"
            className="absolute font-ibm-mono text-white transition-opacity hover:opacity-70"
            style={{
              left: 620,
              top: 361,
              fontSize: 11.2,
              lineHeight: "18px",
              letterSpacing: "3.584px",
              textTransform: "uppercase",
              fontWeight: 500,
            }}
          >
            View 👉
          </a>
        </div>

        <div
          className="absolute overflow-hidden rounded-[16px] border-2 border-[rgba(0,0,0,0.1)] bg-white"
          style={{ left: 818, top: 7496, width: 715, height: 402 }}
        >
          <Img
            alt="周大福 logo"
            src={assets.footerRightLogo}
            className="absolute"
            style={{ left: 117, top: 150, width: 133, height: 56.525 }}
          />
          <Img
            alt="周大福 手机预览"
            src={assets.footerRightPhones}
            className="absolute"
            style={{ left: 311, top: 13, width: 341, height: 367 }}
          />
          <div className="absolute bottom-0 left-0 h-16 w-full bg-black/50" />
          <AbsoluteText
            className="font-noto-sc text-white"
            style={{
              left: 32,
              top: 356,
              fontSize: 18,
              lineHeight: "29px",
              fontWeight: 600,
            }}
          >
            周大福官方小程序
          </AbsoluteText>
          <a
            href="/?case=chowtaifook"
            className="absolute font-ibm-mono text-white transition-opacity hover:opacity-70"
            style={{
              left: 620,
              top: 361,
              fontSize: 11.2,
              lineHeight: "18px",
              letterSpacing: "3.584px",
              textTransform: "uppercase",
              fontWeight: 500,
            }}
          >
            View 👉
          </a>
        </div>

        <div
          className="absolute bg-white"
          style={{ left: 2, top: 7968, width: 1600, height: 127 }}
        >
          <div
            className="absolute border-t border-[rgba(24,144,255,0.16)]"
            style={{ left: 320, top: 28, width: 960, height: 57 }}
          >
            <p
              className="absolute font-brand text-[#1890FF]"
              style={{
                left: 0,
                top: 25.5,
                fontSize: 32,
                lineHeight: "32px",
                letterSpacing: "-1.28px",
                fontWeight: 700,
              }}
            >
              ABBIE.
            </p>
            <a
              href="/#works"
              className="absolute font-ibm-mono text-[#1890FF] transition-opacity hover:opacity-70"
              style={{
                right: 0,
                top: 31.5,
                fontSize: 11.2,
                lineHeight: "18px",
                letterSpacing: "3.584px",
                textTransform: "uppercase",
                fontWeight: 600,
              }}
            >
              Back To Works 👉
            </a>
          </div>
        </div>
      </div>
    </CasePageShell>
  );
}
