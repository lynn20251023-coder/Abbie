import { motion } from "motion/react";
import type { Project } from "@/src/constants";

interface ProjectCardProps {
  project: Project;
  index: number;
}

interface CardLayout {
  cardHeight: string;
  contentWidth: string;
  titleWidth: string;
  descriptionWidth: string;
  bodyHeight: string;
  mediaFrame: string;
  mediaImage: string;
}

const CARD_LAYOUTS: Record<string, CardLayout> = {
  "ai-exploration": {
    cardHeight: "min-h-[568px]",
    contentWidth: "max-w-[374px]",
    titleWidth: "max-w-[374px]",
    descriptionWidth: "max-w-[230px]",
    bodyHeight: "min-h-[414px]",
    mediaFrame:
      "max-md:h-[260px] md:absolute md:left-[261px] md:top-[160px] md:h-[260px] md:w-[281px]",
    mediaImage: "left-0 top-0 h-full w-full",
  },
  "dongpo-sorting": {
    cardHeight: "min-h-[568px]",
    contentWidth: "max-w-[320px]",
    titleWidth: "max-w-[320px]",
    descriptionWidth: "max-w-[230px]",
    bodyHeight: "min-h-[417px]",
    mediaFrame:
      "max-md:h-[260px] md:absolute md:left-[262px] md:top-[160px] md:h-[260px] md:w-[281px]",
    mediaImage: "left-0 top-0 h-full w-full",
  },
  "wechat-pay-hk": {
    cardHeight: "min-h-[568px]",
    contentWidth: "max-w-[374px]",
    titleWidth: "max-w-[374px]",
    descriptionWidth: "max-w-[230px]",
    bodyHeight: "min-h-[414px]",
    mediaFrame:
      "max-md:h-[260px] md:absolute md:left-[262px] md:top-[160px] md:h-[260px] md:w-[281px]",
    mediaImage: "left-0 top-0 h-full w-full",
  },
  "chow-tai-fook": {
    cardHeight: "min-h-[568px]",
    contentWidth: "max-w-[374px]",
    titleWidth: "max-w-[374px]",
    descriptionWidth: "max-w-[230px]",
    bodyHeight: "min-h-[414px]",
    mediaFrame:
      "max-md:h-[260px] md:absolute md:left-[262px] md:top-[160px] md:h-[260px] md:w-[281px]",
    mediaImage: "left-0 top-0 h-full w-full",
  },
};

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const layout = CARD_LAYOUTS[project.id] ?? {
    cardHeight: "min-h-[520px] md:min-h-[494px]",
    contentWidth: "max-w-[300px]",
    titleWidth:
      project.titleVariant === "wide" ? "max-w-[320px]" : "max-w-[296px]",
    descriptionWidth: "max-w-[272px]",
    bodyHeight: "min-h-[396px] md:min-h-[402px]",
    mediaFrame:
      "max-md:h-[286px] md:absolute md:bottom-[20px] md:right-[12px] md:h-[250px] md:w-[330px]",
    mediaImage:
      "left-1/2 top-1/2 w-[372px] -translate-x-1/2 -translate-y-1/2 md:left-[-38px] md:top-[-8px] md:w-[424px] md:translate-x-0 md:translate-y-0",
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.22 }}
      transition={{
        duration: 0.78,
        ease: [0.19, 1, 0.22, 1],
        delay: index * 0.08,
      }}
      className="group relative overflow-hidden bg-white transition-[background-color,box-shadow] duration-700 ease-editorial hover:z-[1] hover:bg-[#fcfcfd] hover:shadow-[0_28px_68px_rgba(16,17,20,0.06)]"
    >
      <div className={`${layout.cardHeight} px-8 pb-8 pt-8 md:px-[48px] md:pb-[54px] md:pt-[48px]`}>
        <div className="flex items-center gap-[16px] text-[#9fa3ae]">
          <span className="mono-detail text-[10px] leading-[12px]">
            {project.sequence}
          </span>
          <span className="h-px w-7 bg-[#dfe1e6]" />
          <span className="font-serif text-[10px] uppercase leading-[12px] tracking-[0.35em]">
            {project.category}
          </span>
        </div>

        <div className={`relative mt-[40px] ${layout.bodyHeight}`}>
          <div className={`flex ${layout.bodyHeight} flex-col ${layout.contentWidth}`}>
            <h3
              className={`font-serif text-[48px] font-semibold leading-[1.05] tracking-[-0.06em] text-[#101114] md:text-[56px] md:leading-[65px] md:tracking-[-3.2px] ${layout.titleWidth}`}
            >
              {project.titleLines.map((line) => (
                <span key={line} className="block md:whitespace-nowrap">
                  {line}
                </span>
              ))}
            </h3>

            <p
              className={`mt-[24px] font-serif text-[17px] leading-[30.6px] text-[#757984] md:text-[17px] md:leading-[30px] ${layout.descriptionWidth}`}
            >
              {project.description}
            </p>

            <div className="mt-auto pt-[30px]">
              <div className="flex flex-wrap gap-[24px]">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-serif text-[10px] uppercase leading-[12px] tracking-[1.8px] text-[#8f949e]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={project.detailHref}
                className="mono-detail mt-[22px] inline-flex items-center gap-[13px] text-[#101114] transition-transform duration-300 ease-editorial group-hover:translate-x-[3px]"
              >
                View Case Study <span>↗</span>
              </a>
            </div>
          </div>

          <div
            className={[
              "pointer-events-none relative overflow-hidden max-md:mt-10",
              layout.mediaFrame,
            ].join(" ")}
          >
            <ProjectMedia project={project} imageClass={layout.mediaImage} />
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function ProjectMedia({
  project,
  imageClass,
}: {
  project: Project;
  imageClass: string;
}) {
  return (
    <img
      src={project.images[0]}
      alt={project.title}
      loading="lazy"
      decoding="async"
      className={`absolute max-w-none object-contain ${imageClass}`}
    />
  );
}
