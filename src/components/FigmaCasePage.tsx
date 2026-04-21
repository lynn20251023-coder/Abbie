import type { Project } from "@/src/constants";
import ChowTaiFookCasePage from "./figma-case-pages/ChowTaiFookCasePage";
import SortingCasePage from "./figma-case-pages/SortingCasePage";
import WechatPayCasePage from "./figma-case-pages/WechatPayCasePage";

interface FigmaCasePageProps {
  project: Project;
}

export default function FigmaCasePage({ project }: FigmaCasePageProps) {
  switch (project.detailSlug) {
    case "sorting":
      return <SortingCasePage />;
    case "wechatpay":
      return <WechatPayCasePage />;
    case "chowtaifook":
      return <ChowTaiFookCasePage />;
    default:
      return null;
  }
}
