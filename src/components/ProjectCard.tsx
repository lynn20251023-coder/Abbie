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
      className="group relative overflow-hidden rounded-[3px] border border-[var(--line)] bg-[var(--surface)] shadow-[0_1px_2px_rgba(16,17,20,0.03),0_6px_18px_-10px_rgba(16,17,20,0.06)] transition-[background-color,box-shadow,border-color,transform] duration-700 ease-editorial hover:-translate-y-[2px] hover:border-[var(--ink-200)] hover:shadow-[0_2px_4px_rgba(16,17,20,0.04),0_24px_48px_-20px_rgba(16,17,20,0.1)]"
    >
      {/* Signature color strip at top — slides in on hover */}
      <span
        aria-hidden
        className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 transition-transform duration-[var(--dur-slow)] ease-[var(--ease-editorial)] group-hover:scale-x-100"
        style={{ background: "var(--case-accent)" }}
      />

      <div className="grid gap-6 p-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] md:items-center md:gap-10 md:p-10 lg:gap-14 lg:p-14">
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
            className="font-serif font-semibold text-[var(--ink-900)] mt-6"
            style={{
              fontSize: "clamp(28px, 3.4vw, 42px)",
              lineHeight: "1.08",
              letterSpacing: "-0.035em",
            }}
          >
            {project.titleLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h3>

          <p className="mt-5 max-w-[460px] font-serif text-[15px] leading-[1.7] text-[var(--ink-600)] md:text-[16px]">
            {project.description}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2">
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
            className="mono-detail mt-8 inline-flex items-center gap-3 border-b border-[var(--ink-900)]/20 pb-2 self-start text-[var(--ink-900)] transition-[border-color,color] duration-[var(--dur-base)] ease-[var(--ease-editorial)] hover:border-[var(--case-accent)] hover:text-[var(--case-accent)]"
          >
            <span>View Case Study</span>
            <span aria-hidden className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>

        {/* Media column — responsive, aspect-ratio-driven, no absolute positioning */}
        <div className="relative overflow-hidden rounded-[2px] bg-[var(--canvas)] aspect-[4/3] md:aspect-[16/10]">
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
