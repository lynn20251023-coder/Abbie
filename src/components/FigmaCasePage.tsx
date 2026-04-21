import type { Project } from "@/src/constants";
import CaseViewer from "./CaseViewer";
import ChowTaiFookCasePage from "./figma-case-pages/ChowTaiFookCasePage";
import WechatPayCasePage from "./figma-case-pages/WechatPayCasePage";

interface FigmaCasePageProps {
  project: Project;
}

/**
 * Routes each case to its renderer:
 *   - sorting     → CaseViewer (responsive, page-indexed, replaced the
 *                   previously-broken Figma MCP pixel-positioned version).
 *   - wechatpay   → legacy Figma-style pixel-positioned page. Kept as-is;
 *                   the outer shell already supports horizontal scroll on mobile.
 *   - chowtaifook → same legacy pattern.
 *
 * Wechat/ChowTaiFook will migrate to CaseViewer in Phase 2 once responsive
 * annotations are introduced (see PHASE2-PLAN.md).
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
          pages={project.casePages ?? []}
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
