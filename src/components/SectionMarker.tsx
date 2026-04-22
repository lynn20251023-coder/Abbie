import { motion } from "motion/react";
import type { ReactNode } from "react";

interface SectionMarkerProps {
  /** Short uppercase English label, e.g. "WORKS". */
  label: string;
  /** Optional Chinese label shown after the English, e.g. "作品". */
  labelCn?: string;
  /** Optional trailing detail after the labels, e.g. "2020—2026". */
  trail?: string;
  /** First-person connector sentence below the marker. Keep it short. */
  children?: ReactNode;
}

/**
 * SectionMarker — the replacement for the uniform "display-italic 巨字标题 +
 * 衬线中文副标题" block that used to open every home-page section.
 *
 * Five repeats of that pattern made the page feel like a catalog of
 * chapters instead of a personal site. This component is intentionally
 * quiet: a single mono marker line + an optional one-sentence serif
 * connector in first-person voice.
 *
 * ABBIE in the hero remains the only big typographic gesture on the
 * home page. Everything else uses this marker.
 */
export default function SectionMarker({
  label,
  labelCn,
  trail,
  children,
}: SectionMarkerProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
    >
      <p className="mono-detail text-[var(--ink-400)]">
        — {label}
        {labelCn ? <span className="ml-3 normal-case tracking-[0.2em]">· {labelCn}</span> : null}
        {trail ? <span className="ml-3 text-[var(--ink-300)]">· {trail}</span> : null}
      </p>
      {children ? (
        <p className="mt-4 max-w-[640px] font-serif text-[17px] leading-[1.7] text-[var(--ink-900)] md:text-[18px]">
          {children}
        </p>
      ) : null}
    </motion.div>
  );
}
