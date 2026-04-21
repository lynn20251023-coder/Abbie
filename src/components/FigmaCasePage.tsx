import type { Project } from "@/src/constants";
import CaseViewer, { type CasePage } from "./CaseViewer";
import type { Hotspot } from "./AnnotatedImage";

interface FigmaCasePageProps {
  project: Project;
}

/**
 * Per-case annotation manifests. Each hotspot is positioned by x/y percentage
 * of the underlying page image, so it scales correctly under responsive
 * layouts. Titles and bodies are real, selectable DOM — the image underneath
 * stays pure Figma output.
 *
 * Abbie: tune x/y (0–100) and rewrite body copy per page. The number of
 * hotspots per case is deliberately small (3–5) — annotations are meant to
 * surface the *design decisions* worth explaining, not document every pixel.
 */
type HotspotMap = Record<number, Hotspot[]>;

const SORTING_ANNOTATIONS: HotspotMap = {
  2: [
    {
      id: "s2-01",
      x: 22,
      y: 28,
      label: "01",
      title: "视觉层级由操作频率决定",
      body: "一线分拣场景信息密度高，把最高频的决策动作放在拇指自然活动区内，用色强度而非尺寸暗示优先级。",
    },
    {
      id: "s2-02",
      x: 72,
      y: 62,
      label: "02",
      title: "3D 图标的 AIGC 管线",
      body: "蔬菜立方体用即梦生成，同一 prompt template + 光照参数确保 10+ SKU 视觉一致性。AI 作为素材生产线，不是灵感工具。",
    },
  ],
  6: [
    {
      id: "s6-01",
      x: 30,
      y: 40,
      label: "03",
      title: "防错先于效率",
      body: "选择态 + 二次确认，避免触屏手湿、戴手套时的误操作。在生鲜现场，错分一箱 = 亏损一箱。",
    },
    {
      id: "s6-02",
      x: 74,
      y: 72,
      label: "04",
      title: "密度与呼吸的平衡",
      body: "单屏信息量对应一次任务的完整决策链路，多滚一次就多一次认知负担。间距基于真实手持设备尺寸压测。",
    },
  ],
  10: [
    {
      id: "s10-01",
      x: 52,
      y: 44,
      label: "05",
      title: "配置与使用分离",
      body: "运维人员配置一次，一线操作永远不触碰设置层——这是 B 端 SaaS 的信任底线，也是这次改版最核心的架构调整。",
    },
  ],
};

const WECHATPAY_ANNOTATIONS: HotspotMap = {
  3: [
    {
      id: "w3-01",
      x: 28,
      y: 32,
      label: "01",
      title: "HK 本地化 ≠ 翻译",
      body: "缴费场景里本地用户习惯「合约期 / 宽带套餐」等语境，而非翻译后的大陆式名词。做 UI 之前先统一术语词表，避免设计稿里中英混搭。",
    },
    {
      id: "w3-02",
      x: 70,
      y: 58,
      label: "02",
      title: "信任感先于转化",
      body: "金融产品的 primary action 颜色和位置都更保守——对香港用户而言，可见的「取消」「返回」比漂亮的「继续」更能建立首次使用信任。",
    },
  ],
  8: [
    {
      id: "w8-01",
      x: 38,
      y: 45,
      label: "03",
      title: "效率卡片的信息梯度",
      body: "每张卡片左上高价值数据、右下场景图示，视线沿 Z 字扫读一次即可掌握 7 种增长场景的核心指标。",
    },
  ],
  14: [
    {
      id: "w14-01",
      x: 50,
      y: 50,
      label: "04",
      title: "组件沉淀 · 30+ 金融模块",
      body: "把绑卡、验证、金额输入、失败态这些反复出现的模块抽成设计规范，跨 iOS/Android/小程序保持一致，2 年内支持了 HK 钱包 3 轮大版本迭代。",
    },
  ],
};

const CHOWTAIFOOK_ANNOTATIONS: HotspotMap = {
  3: [
    {
      id: "c3-01",
      x: 32,
      y: 38,
      label: "01",
      title: "高客单价场景的决策成本",
      body: "珠宝类客单价 5,000+，用户决策周期长。首页改版重点不是促转化，而是建立「可信浏览」：让用户愿意反复回来看，而不是一次性压单。",
    },
  ],
  6: [
    {
      id: "c6-01",
      x: 40,
      y: 50,
      label: "02",
      title: "品牌入口的质感复用",
      body: "集合页复用官方品牌色 + 官方字体，让「周大福 / 周大福 HUHK / T MARK」等子品牌在用户感知里保持同一个宇宙，避免小程序视觉与品牌官网断层。",
    },
  ],
  11: [
    {
      id: "c11-01",
      x: 54,
      y: 48,
      label: "03",
      title: "购物车的克制",
      body: "高客单价购物车不适合「促销轰炸」，保留清晰的规格、重量、证书信息即可。转化率的突破点不在于再加一个红色按钮，而在让用户相信「下单后能兑现」。",
    },
  ],
};

function buildPages(casePages: string[] | undefined, annotations: HotspotMap): CasePage[] {
  return (casePages ?? []).map((src, i) => {
    const pageNum = i + 1;
    const hotspots = annotations[pageNum];
    return hotspots ? { src, hotspots } : { src };
  });
}

/**
 * All three Figma cases now route through CaseViewer for a unified experience:
 * responsive width, signature-color scroll progress, keyboard nav, Lightbox,
 * and per-page AnnotatedImage overlays.
 *
 * The AI case keeps its own dedicated AiCasePage (code-rendered timeline).
 */
export default function FigmaCasePage({ project }: FigmaCasePageProps) {
  switch (project.detailSlug) {
    case "sorting":
      return (
        <CaseViewer
          title={project.title}
          subtitle={project.detailSummary}
          meta={[
            { label: "Timeline", value: "2023.11 — 2026.04" },
            { label: "Role", value: "UI/UX 设计师" },
            { label: "Tools", value: "Figma · AIGC" },
            { label: "Industry", value: "Fresh Produce SaaS" },
          ]}
          pages={buildPages(project.casePages, SORTING_ANNOTATIONS)}
          accentVar="--case-sorting"
        />
      );
    case "wechatpay":
      return (
        <CaseViewer
          title={project.title}
          subtitle={project.detailSummary}
          meta={[
            { label: "Timeline", value: "2022.04 — 2023.05" },
            { label: "Role", value: "UI/UX 设计师" },
            { label: "Tools", value: "Figma · Design System" },
            { label: "Industry", value: "Fintech · Payments" },
          ]}
          pages={buildPages(project.casePages, WECHATPAY_ANNOTATIONS)}
          accentVar="--case-wechatpay"
        />
      );
    case "chowtaifook":
      return (
        <CaseViewer
          title={project.title}
          subtitle={project.detailSummary}
          meta={[
            { label: "Timeline", value: "2020.11 — 2022.04" },
            { label: "Role", value: "UI 设计师" },
            { label: "Tools", value: "Figma · Sketch" },
            { label: "Industry", value: "Jewelry · E-commerce" },
          ]}
          pages={buildPages(project.casePages, CHOWTAIFOOK_ANNOTATIONS)}
          accentVar="--case-chowtaifook"
        />
      );
    default:
      return null;
  }
}
