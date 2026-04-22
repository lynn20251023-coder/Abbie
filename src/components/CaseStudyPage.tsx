import { useEffect } from "react";
import type { Project } from "@/src/constants";
import AiCasePage from "./AiCasePage";
import FigmaCasePage from "./FigmaCasePage";
import SiteFooter from "./SiteFooter";

interface CaseStudyPageProps {
  project: Project;
}

const BASE_TITLE = "Abbie · UI/UX Designer · Portfolio";

export default function CaseStudyPage({ project }: CaseStudyPageProps) {
  // Dynamic document.title so the browser tab reflects the active case.
  // Restored to the base title on unmount (returning to home page).
  useEffect(() => {
    const previous = document.title;
    document.title = `${project.title} — ${BASE_TITLE}`;
    return () => {
      document.title = previous;
    };
  }, [project.title]);

  return (
    <main className="min-h-screen bg-[var(--canvas)] text-[var(--ink-900)]">
      {project.detailSlug === "ai" ? <AiCasePage /> : <FigmaCasePage project={project} />}
      <SiteFooter />
    </main>
  );
}
