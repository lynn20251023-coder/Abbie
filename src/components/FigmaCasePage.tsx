import type { Project } from "@/src/constants";
import CaseViewer, { type CasePage } from "./CaseViewer";
import ChowTaiFookCasePage from "./figma-case-pages/ChowTaiFookCasePage";
import WechatPayCasePage from "./figma-case-pages/WechatPayCasePage";

interface FigmaCasePageProps {
  project: Project;
}

/**
 * Sample annotations demonstrating the AnnotatedImage pattern.
 * Each hotspot is positioned by x/y percentage of the underlying image,
 * so it scales correctly under any responsive layout. Titles + bodies are
 * real, selectable DOM — the image stays pure Figma output underneath.
 *
 * Abbie: tune the x/y (0-100) and the body copy per page.
 */
const sortingPages = (casePages: string[]): CasePage[] =>
  casePages.map((src, i) => {
    const pageNum = i + 1;
    switch (pageNum) {
      case 2:
        return {
          src,
          hotspots: [
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
        };
      case 6:
        return {
          src,
          hotspots: [
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
        };
      case 10:
        return {
          src,
          hotspots: [
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
      default:
        return { src };
    }
  });

/**
 * Routes each case to its renderer:
 *   - sorting     → CaseViewer with AnnotatedImage hotspots (Phase 2 drop 1).
 *   - wechatpay   → legacy Figma-style pixel-positioned page. Kept as-is;
 *                   the outer shell already supports horizontal scroll on mobile.
 *   - chowtaifook → same legacy pattern.
 *
 * Wechat/ChowTaiFook will migrate to CaseViewer in Phase 2 drop 2.
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
          pages={sortingPages(project.casePages ?? [])}
          accentVar="--case-sorting"
        />
      );
    case "wechatpay":
      return <WechatPayCasePage />;
    case "chowtaifook":
      return <ChowTaiFookCasePage />;
    default:
      return null;
  }
}
