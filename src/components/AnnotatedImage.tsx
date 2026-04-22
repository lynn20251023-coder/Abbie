import { useState, useRef, useEffect, type ReactNode, type KeyboardEvent as ReactKeyboardEvent } from "react";
import { AnimatePresence, motion } from "motion/react";

export interface Hotspot {
  /** Stable identifier, used for keyboard navigation + deep-link. */
  id: string;
  /** Position as 0–100 percentages of the underlying image — scales with responsive layouts. */
  x: number;
  y: number;
  /** Short label shown inside the dot (e.g. "01") and as preview on hover. */
  label: string;
  /** Heading of the note panel. */
  title: string;
  /** Body copy of the note panel. Real DOM text — selectable, searchable, translatable. */
  body: ReactNode;
}

interface AnnotatedImageProps {
  src: string;
  alt: string;
  hotspots?: Hotspot[];
  loading?: "eager" | "lazy";
  className?: string;
  onImageClick?: () => void;
}

/**
 * Wraps a case-study page image with an overlay of coordinate-positioned
 * annotations (<Hotspot>). The hotspots are kept as real, selectable DOM —
 * the image stays pure Figma output. This is the Phase 2 showcase surface:
 * Abbie's design work underneath, design-engineering commentary on top.
 *
 * Hotspot x/y are percentages (0–100), so the overlay remains correct under
 * responsive scaling regardless of intrinsic image dimensions.
 */
export default function AnnotatedImage({
  src,
  alt,
  hotspots = [],
  loading = "lazy",
  className = "",
  onImageClick,
}: AnnotatedImageProps) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close the active note when clicking outside any hotspot.
  useEffect(() => {
    if (!activeId) return;
    const onDocClick = (e: MouseEvent) => {
      if (!(e.target instanceof Node)) return;
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setActiveId(null);
      }
    };
    const onKey = (e: globalThis.KeyboardEvent) => {
      if (e.key === "Escape") setActiveId(null);
    };
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [activeId]);

  const handleHotspotKeyDown = (e: ReactKeyboardEvent<HTMLButtonElement>, id: string) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setActiveId((curr) => (curr === id ? null : id));
    }
  };

  const hasHotspots = hotspots.length > 0;

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <button
        type="button"
        onClick={onImageClick}
        className="group block w-full overflow-hidden rounded-[2px] bg-[var(--surface)] shadow-[0_1px_0_0_var(--line)] transition-all duration-[var(--dur-base)] ease-[var(--ease-editorial)] hover:shadow-[0_24px_60px_-24px_rgba(16,17,20,0.18)]"
        aria-label={onImageClick ? `Zoom: ${alt}` : alt}
      >
        <img
          src={src}
          alt={alt}
          loading={loading}
          decoding="async"
          className="block h-auto w-full transition-transform duration-[var(--dur-slow)] ease-[var(--ease-editorial)] group-hover:scale-[1.004]"
        />
      </button>

      {hasHotspots && (
        <div className="pointer-events-none absolute inset-0">
          {hotspots.map((hotspot) => (
            <HotspotPin
              key={hotspot.id}
              hotspot={hotspot}
              isActive={activeId === hotspot.id}
              onToggle={() => setActiveId((curr) => (curr === hotspot.id ? null : hotspot.id))}
              onKeyDown={(e) => handleHotspotKeyDown(e, hotspot.id)}
              containerRef={containerRef}
            />
          ))}
        </div>
      )}
    </div>
  );
}

interface HotspotPinProps {
  hotspot: Hotspot;
  isActive: boolean;
  onToggle: () => void;
  onKeyDown: (e: ReactKeyboardEvent<HTMLButtonElement>) => void;
  containerRef: React.RefObject<HTMLDivElement | null>;
}

function HotspotPin({ hotspot, isActive, onToggle, onKeyDown, containerRef }: HotspotPinProps) {
  // Decide whether the note opens to the right or left based on x position.
  // If the pin is past the 60% mark horizontally, the note flips to the left.
  const flipHorizontally = hotspot.x > 60;
  // Similar vertical flip near the bottom.
  const flipVertically = hotspot.y > 78;

  return (
    <div
      className="pointer-events-auto absolute"
      style={{
        left: `${hotspot.x}%`,
        top: `${hotspot.y}%`,
        transform: "translate(-50%, -50%)",
      }}
    >
      <button
        type="button"
        onClick={onToggle}
        onKeyDown={onKeyDown}
        className="group relative flex h-7 w-7 items-center justify-center rounded-full text-[10px] font-[var(--font-mono)] font-semibold uppercase tracking-[0.1em] text-white shadow-[0_4px_12px_-2px_rgba(16,17,20,0.4)] transition-transform duration-[var(--dur-quick)] ease-[var(--ease-editorial)] hover:scale-110 focus-visible:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
        style={{
          background: "var(--case-accent)",
        }}
        aria-expanded={isActive}
        aria-label={`Annotation ${hotspot.label}: ${hotspot.title}`}
      >
        {/* Pulsing ring — signals "clickable" before hover */}
        <span
          aria-hidden
          className="absolute inset-0 rounded-full opacity-60"
          style={{
            background: "var(--case-accent)",
            animation: "hotspot-pulse 2.2s cubic-bezier(0.22, 1, 0.36, 1) infinite",
          }}
        />
        <span className="relative">{hotspot.label}</span>
      </button>

      <AnimatePresence>
        {isActive && (
          <motion.aside
            role="dialog"
            aria-label={hotspot.title}
            initial={{ opacity: 0, y: flipVertically ? 4 : -4, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: flipVertically ? 4 : -4, scale: 0.98 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="absolute z-10 w-[min(320px,72vw)] rounded-[3px] border border-[var(--line)] bg-[var(--surface)] p-4 shadow-[0_16px_40px_-16px_rgba(16,17,20,0.28)]"
            style={{
              left: flipHorizontally ? "auto" : "calc(100% + 12px)",
              right: flipHorizontally ? "calc(100% + 12px)" : "auto",
              top: flipVertically ? "auto" : 0,
              bottom: flipVertically ? 0 : "auto",
            }}
          >
            <div className="mb-2 flex items-center gap-2 text-[10px] font-[var(--font-mono)] uppercase tracking-[0.28em] text-[var(--ink-300)]">
              <span
                aria-hidden
                className="inline-block h-1.5 w-1.5 rounded-full"
                style={{ background: "var(--case-accent)" }}
              />
              Annotation · {hotspot.label}
            </div>
            <h4 className="font-serif text-[17px] leading-[1.35] text-[var(--ink-900)]">
              {hotspot.title}
            </h4>
            <div className="mt-2 font-serif text-[14px] leading-[1.55] text-[var(--ink-600)]">
              {hotspot.body}
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </div>
  );
}
