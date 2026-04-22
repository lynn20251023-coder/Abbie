import { PROJECTS } from "@/src/constants";
import ProjectCard from "./ProjectCard";
import SectionMarker from "./SectionMarker";

export default function Works() {
  return (
    <section id="works" className="scroll-mt-24 py-20 text-[var(--ink-900)] md:py-28">
      <div className="container-editorial">
        <SectionMarker label="WORKS" labelCn="作品" trail="2020 — 2026">
          我做过的项目覆盖金融科技、SaaS 系统和电商零售。下面是其中三个我比较投入的。
        </SectionMarker>

        {/* Vertical stack of three B-to-B product case studies.
            AI practice lives above in <AiManifesto /> — it's practice, not a project. */}
        <div className="mt-14 flex flex-col gap-6 md:mt-16">
          {PROJECTS.filter((p) => p.detailSlug !== "ai").map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
