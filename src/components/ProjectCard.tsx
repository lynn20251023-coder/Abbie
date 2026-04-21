import { motion } from "motion/react";
import type { CSSProperties } from "react";
import type { Project } from "@/src/constants";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const SIGNATURE_VAR_BY_SLUG: Record<string, string> = {
  ai: "--case-ai",
  sorting: "--case-sorting",
  wechatpay: "--case-wechatpay",
  chowtaifook: "--case-chowtaifook",
};

/**
 * ProjectCard — full-width editorial landscape tile.
 *
 * Rewritten from the original 1600px-grid card (absolute-positioned media
 * pinned at left:262px) into a proper responsive two-column grid:
 *   [content left · media right] on md+,  stacked on mobile.
 * The media no longer overflows or gets clipped at different card widths.
 *
 * Stacks vertically in the parent Works grid, one card per row.
 */
export default function ProjectCard({ project, index }: ProjectCardProps) {
  const signatureVar = SIGNATURE_VAR_BY_SLUG[project.detailSlug] ?? "--case-ai";
  const accentStyle = { ["--case-accent" as string]: `var(${signatureVar})` } as CSSProperties;

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
      style={accentStyle}
      className="group relative overflow-hidden bg-[var(--surface)] transition-[background-color,box-shadow] duration-700 ease-editorial hover:shadow-[0_28px_68px_rgba(16,17,20,0.06)]"
    >
      {/* Signature color strip at top — slides in on hover */}
      <span
        aria-hidden
        className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 transition-transform duration-[var(--dur-slow)] ease-[var(--ease-editorial)] group-hover:scale-x-100"
        style={{ background: "var(--case-accent)" }}
      />

      <div className="grid gap-8 p-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] md:items-center md:gap-16 md:p-14 lg:gap-20 lg:p-[72px]">
        {/* Content column */}
        <div className="flex flex-col">
          <div className="flex items-center gap-4 text-[var(--ink-300)]">
            <span className="mono-detail">{project.sequence}</span>
            <span className="h-px w-7 bg-[var(--line)]" />
            <span className="font-serif text-[10px] uppercase tracking-[0.35em]">
              {project.category}
            </span>
          </div>

          <h3
            className="font-serif font-semibold text-[var(--ink-900)] mt-10"
            style={{
              fontSize: "clamp(36px, 4.6vw, 56px)",
              lineHeight: "1.05",
              letterSpacing: "-0.04em",
            }}
          >
            {project.titleLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h3>

          <p className="mt-6 max-w-[460px] font-serif text-[16px] leading-[1.75] text-[var(--ink-600)] md:text-[17px]">
            {project.description}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="font-serif text-[10px] uppercase tracking-[0.28em] text-[var(--ink-400)]"
              >
                {tag}
              </span>
            ))}
          </div>

          <a
            href={project.detailHref}
            className="mono-detail mt-10 inline-flex items-center gap-3 border-b border-[var(--ink-900)]/20 pb-2 self-start text-[var(--ink-900)] transition-[border-color,color] duration-[var(--dur-base)] ease-[var(--ease-editorial)] hover:border-[var(--case-accent)] hover:text-[var(--case-accent)]"
          >
            <span>View Case Study</span>
            <span aria-hidden className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>

        {/* Media column — responsive, aspect-ratio-driven, no absolute positioning */}
        <div className="relative overflow-hidden bg-[var(--canvas)] aspect-[4/3] md:aspect-[5/4]">
          <img
            src={project.images[0]}
            alt={project.title}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-[var(--dur-slow)] ease-[var(--ease-editorial)] group-hover:scale-[1.02]"
          />
        </div>
      </div>
    </motion.article>
  );
}
