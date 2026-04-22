import { useEffect, useMemo, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import AnnotatedImage, { type Hotspot } from "./AnnotatedImage";

interface CaseMeta {
  label: string;
  value: string;
}

export interface CasePage {
  src: string;
  /** Optional coded annotations rendered over the image. */
  hotspots?: Hotspot[];
}

export interface CaseSibling {
  title: string;
  category: string;
  href: string;
  accentVar: string;
  coverImage?: string;
  /** First image of the target case — prefetched on hover for near-instant next navigation. */
  prefetchHint?: string;
}

interface CaseViewerProps {
  title: string;
  subtitle?: string;
  meta?: CaseMeta[];
  /** Each page: either just a URL string, or { src, hotspots } with annotations. */
  pages: Array<string | CasePage>;
  accentVar?: string;
  backHref?: string;
  footerExtra?: ReactNode;
  /** Neighbors in the case order, shown as Prev / Next at the bottom. */
  prev?: CaseSibling;
  next?: CaseSibling;
}

function normalizePage(page: string | CasePage): CasePage {
  return typeof page === "string" ? { src: page } : page;
}

/**
 * CaseViewer — responsive, interactive shell for displaying a case study as a
 * vertical sequence of high-fidelity pages. Replaces the legacy 1600px absolute
 * StackedCasePage with:
 *   - fluid responsive width (srcset-less images scale to viewport)
 *   - per-case signature accent color (drives scroll progress + hover)
 *   - reading progress bar pinned to top
 *   - keyboard nav: Esc → back, ↑↓←→ → jump between pages
 *   - click-to-zoom lightbox for any page
 *   - IntersectionObserver-driven page indicator "03 / 14"
 */
export default function CaseViewer({
  title,
  subtitle,
  meta,
  pages,
  accentVar = "--case-accent",
  backHref = "/#works",
  footerExtra,
  prev,
  next,
}: CaseViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const pageRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const normalizedPages = useMemo(() => pages.map(normalizePage), [pages]);

  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 28, restDelta: 0.001 });

  const accentStyle = useMemo<CSSProperties>(
    () => ({ ["--case-accent" as keyof CSSProperties]: `var(${accentVar})` } as CSSProperties),
    [accentVar],
  );

  // Track which page is in view for the indicator
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = pageRefs.current.findIndex((ref) => ref === entry.target);
            if (idx >= 0) setActiveIndex(idx);
          }
        });
      },
      { threshold: 0.55 },
    );
    pageRefs.current.forEach((ref) => ref && observer.observe(ref));
    return () => observer.disconnect();
  }, [pages.length]);

  // Keyboard shortcuts (no visible hints — kept because they're standard browse UX)
  useEffect(() => {
    if (lightboxIndex !== null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        window.location.href = backHref;
      } else if (e.key === "ArrowDown" || e.key === "ArrowRight") {
        e.preventDefault();
        pageRefs.current[Math.min(activeIndex + 1, pages.length - 1)]?.scrollIntoView({ behavior: "smooth" });
      } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        e.preventDefault();
        pageRefs.current[Math.max(activeIndex - 1, 0)]?.scrollIntoView({ behavior: "smooth" });
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeIndex, pages.length, backHref, lightboxIndex]);

  // Lightbox keyboard
  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxIndex(null);
      else if (e.key === "ArrowRight") setLightboxIndex((i) => (i === null ? i : Math.min(i + 1, pages.length - 1)));
      else if (e.key === "ArrowLeft") setLightboxIndex((i) => (i === null ? i : Math.max(i - 1, 0)));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxIndex, pages.length]);

  return (
    <div ref={containerRef} className="relative bg-[var(--canvas)] text-[var(--ink-900)]" style={accentStyle}>
      {/* Scroll progress */}
      <motion.div
        aria-hidden
        className="viewer-progress fixed left-0 right-0 top-0 z-[80] h-[2px] origin-left"
        style={{ scaleX }}
      />

      {/* Sticky top nav — unified across all case pages */}
      <header className="sticky top-0 z-[70] border-b border-[var(--line)] bg-[var(--surface)]/85 backdrop-blur-md">
        <div className="case-canvas flex items-center justify-between py-3 text-[11.2px] uppercase tracking-[0.32em] text-[var(--ink-600)]">
          <a href={backHref} className="transition-opacity hover:opacity-70">
            ← Back to Works
          </a>
          <span className="font-[var(--font-mono)] tracking-[0.2em]">
            {String(activeIndex + 1).padStart(2, "0")} / {String(pages.length).padStart(2, "0")}
          </span>
        </div>
      </header>

      {/* Title block */}
      <section className="case-canvas pb-10 pt-14 md:pb-14 md:pt-20">
          <p className="mono-detail accent-text mb-4">Case Study</p>
          <h1 className="font-serif text-[var(--fs-h1)] leading-[0.96] tracking-[-0.04em] text-[var(--ink-900)]">
            {title}
          </h1>
          {subtitle ? (
            <p className="mt-5 max-w-[720px] font-serif text-[var(--fs-lead)] leading-[1.45] text-[var(--ink-600)]">
              {subtitle}
            </p>
          ) : null}
          {meta && meta.length > 0 ? (
            <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-[var(--line)] pt-8 md:grid-cols-4">
              {meta.map((item) => (
                <div key={item.label}>
                  <dt className="mono-detail text-[var(--ink-300)]">{item.label}</dt>
                  <dd className="mt-2 font-serif text-[15px] leading-[1.35] text-[var(--ink-900)]">{item.value}</dd>
                </div>
              ))}
            </dl>
          ) : null}
        </section>

      {/* Pages */}
      <div className="pb-24">
        {normalizedPages.map((page, index) => (
          <motion.figure
            key={page.src}
            ref={(el) => {
              pageRefs.current[index] = el;
            }}
            className="case-canvas py-3 md:py-4"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <AnnotatedImage
              src={page.src}
              alt={`${title} — page ${index + 1}`}
              hotspots={page.hotspots}
              loading={index < 2 ? "eager" : "lazy"}
              onImageClick={() => setLightboxIndex(index)}
            />
          </motion.figure>
        ))}
      </div>

      {/* Siblings navigation (next / prev case) */}
      {(prev || next) && (
        <nav className="border-t border-[var(--line)] bg-[var(--surface)]">
          <div className="case-canvas grid gap-0 md:grid-cols-2">
            {prev ? <SiblingLink side="prev" sibling={prev} /> : <div className="hidden md:block" />}
            {next ? <SiblingLink side="next" sibling={next} /> : <div className="hidden md:block" />}
          </div>
        </nav>
      )}

      {footerExtra ? (
        <footer className="border-t border-[var(--line)] bg-[var(--canvas)]">
          <div className="case-canvas py-10">{footerExtra}</div>
        </footer>
      ) : null}

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[90] flex items-center justify-center bg-[rgba(16,17,20,0.92)] p-6 backdrop-blur-sm"
          onClick={() => setLightboxIndex(null)}
        >
          <button
            type="button"
            aria-label="Close"
            onClick={() => setLightboxIndex(null)}
            className="absolute right-6 top-6 font-[var(--font-mono)] text-[11px] uppercase tracking-[0.28em] text-white/70 transition-opacity hover:text-white"
          >
            Close · Esc
          </button>
          <span className="absolute left-6 top-6 font-[var(--font-mono)] text-[11px] uppercase tracking-[0.28em] text-white/70">
            {String(lightboxIndex + 1).padStart(2, "0")} / {String(pages.length).padStart(2, "0")}
          </span>
          <img
            src={normalizedPages[lightboxIndex].src}
            alt={`${title} — page ${lightboxIndex + 1}`}
            className="max-h-[92vh] max-w-[92vw] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}

/**
 * Sibling case link — a tall strip that fills with the target case's signature
 * color on hover, so the transition to the next case feels like stepping into
 * its identity before you click.
 */
function prefetchResource(url: string) {
  if (typeof document === "undefined") return;
  // Avoid duplicates — if a link with this href already exists, bail.
  const existing = document.head.querySelector(`link[rel="prefetch"][href="${CSS.escape(url)}"]`);
  if (existing) return;
  const link = document.createElement("link");
  link.rel = "prefetch";
  link.as = "image";
  link.href = url;
  document.head.appendChild(link);
}

function SiblingLink({ side, sibling }: { side: "prev" | "next"; sibling: CaseSibling }) {
  const isNext = side === "next";
  const targetAccent = { ["--sibling-accent" as string]: `var(${sibling.accentVar})` } as CSSProperties;

  const onIntent = () => {
    if (sibling.prefetchHint) prefetchResource(sibling.prefetchHint);
    if (sibling.coverImage) prefetchResource(sibling.coverImage);
  };

  return (
    <a
      href={sibling.href}
      onMouseEnter={onIntent}
      onFocus={onIntent}
      onTouchStart={onIntent}
      className={`group relative flex flex-col justify-between overflow-hidden px-6 py-10 text-[var(--ink-900)] transition-colors duration-[var(--dur-base)] ease-[var(--ease-editorial)] md:px-10 md:py-14 ${
        isNext ? "md:text-right md:border-l md:border-[var(--line)]" : ""
      }`}
      style={targetAccent}
    >
      {/* Sliding color fill */}
      <span
        aria-hidden
        className={`absolute inset-0 -z-0 scale-x-0 transition-transform duration-[var(--dur-slow)] ease-[var(--ease-editorial)] group-hover:scale-x-100 ${
          isNext ? "origin-right" : "origin-left"
        }`}
        style={{ background: "var(--sibling-accent)" }}
      />
      {/* Text layers */}
      <div className={`relative flex items-center gap-3 text-[10px] font-[var(--font-mono)] uppercase tracking-[0.32em] text-[var(--ink-300)] group-hover:text-white/70 transition-colors ${isNext ? "md:justify-end" : ""}`}>
        {!isNext && <span>← Previous Case</span>}
        {isNext && <span>Next Case →</span>}
      </div>
      <div className="relative mt-6">
        <h3 className="font-serif text-[32px] leading-[1.05] tracking-[-0.03em] text-[var(--ink-900)] transition-colors group-hover:text-white md:text-[44px]">
          {sibling.title}
        </h3>
        <p className="mt-3 font-[var(--font-mono)] text-[11px] uppercase tracking-[0.28em] text-[var(--ink-600)] transition-colors group-hover:text-white/80">
          {sibling.category}
        </p>
      </div>
    </a>
  );
}
