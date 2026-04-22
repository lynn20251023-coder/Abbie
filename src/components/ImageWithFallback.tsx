import { useState, type CSSProperties } from "react";

interface ImageWithFallbackProps {
  src: string;
  alt?: string;
  caption?: string;
  className?: string;
  style?: CSSProperties;
}

/**
 * ImageWithFallback — gracefully handles 404s and dead image URLs.
 *
 * Many of the images on AiCasePage referenced figma.com/api/mcp/asset/*
 * URLs that expire when the Figma MCP session ends. Rather than leave
 * broken browser chrome in the page, this wrapper swaps a failed load
 * for a clean bordered placeholder with the alt text (or a dash) shown
 * small. When Abbie re-exports the originals and swaps the src, the
 * fallback disappears on its own.
 */
export default function ImageWithFallback({
  src,
  alt = "",
  caption,
  className = "",
  style,
}: ImageWithFallbackProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt || caption}
        className={`flex items-center justify-center bg-[var(--canvas)] border border-dashed border-[var(--line)] ${className}`}
        style={style}
      >
        <div className="p-4 text-center">
          <p className="font-[var(--font-mono)] text-[9px] uppercase tracking-[0.28em] text-[var(--ink-300)]">
            image
          </p>
          {caption ? (
            <p className="mt-2 max-w-[180px] font-serif text-[12px] leading-[1.5] text-[var(--ink-400)]">
              {caption}
            </p>
          ) : null}
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
      className={className}
      style={style}
    />
  );
}
