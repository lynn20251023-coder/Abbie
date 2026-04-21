import type { Project } from "@/src/constants";
import AiCasePage from "./AiCasePage";
import FigmaCasePage from "./FigmaCasePage";

interface CaseStudyPageProps {
  project: Project;
}

export default function CaseStudyPage({ project }: CaseStudyPageProps) {
  return (
    <main className="min-h-screen bg-white text-[#101114]">
      {project.detailSlug === "ai" ? <AiCasePage /> : <FigmaCasePage project={project} />}
    </main>
  );
}
