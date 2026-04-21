import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

interface Tone {
  accent: string;
  accentDeep: string;
  accentSoft: string;
  border: string;
  ink: string;
  muted: string;
}

interface ShellProps {
  children: ReactNode;
  background?: string;
}

interface TopBarProps {
  tone: Tone;
  items: Array<{ label: string; href: string }>;
}

interface MetaProps {
  tone: Tone;
  items: Array<{ label: string; value: string }>;
}

interface SectionTitleProps {
  title: string;
  subtitle: string;
  align?: "left" | "center";
  className?: string;
}

interface QuoteBlockProps {
  tone: Tone;
  children: ReactNode;
  className?: string;
}

interface FooterCardProps {
  title: string;
  image: string;
  href: string;
}

interface FooterCardsProps {
  tone: Tone;
  cards: FooterCardProps[];
}

interface RemoteImageProps {
  src: string;
  alt: string;
  className?: string;
  style?: CSSProperties;
}

export type { Tone };

/**
 * Proportionally scales the fixed 1600px canvas to fit narrower viewports.
 * Measures the inner content height so the outer container shrinks with the
 * scale factor and no horizontal scroll is required.
 *
 * TODO(phase2): Replace with a fully fluid Section component model.
 * See PHASE2-PLAN.md for the migration strategy.
 */
function useProportionalScale(ref: { current: HTMLDivElement | null }) {
  const [scale, setScale] = useState(1);
  const [innerHeight, setInnerHeight] = useState<number | null>(null);

  useEffect(() => {
    const update = () => {
      const vw = window.innerWidth;
      setScale(Math.min(1, vw / 1600));
    };
    update();
    window.addEventListener("resize", update);

    let observer: ResizeObserver | null = null;
    if (ref.current && typeof ResizeObserver !== "undefined") {
      observer = new ResizeObserver((entries) => {
        for (const entry of entries) setInnerHeight(entry.contentRect.height);
      });
      observer.observe(ref.current);
    }
    return () => {
      window.removeEventListener("resize", update);
      observer?.disconnect();
    };
  }, [ref]);

  return { scale, innerHeight };
}

export function CasePageShell({ children, background = "#f5f5f2" }: ShellProps) {
  const innerRef = useRef<HTMLDivElement>(null);
  const { scale, innerHeight } = useProportionalScale(innerRef);
  const outerHeight = innerHeight !== null ? innerHeight * scale : undefined;

  return (
    <div className="case-legacy-shell overflow-hidden" style={{ background, height: outerHeight }}>
      <div
        ref={innerRef}
        className="mx-auto w-[1600px] max-w-none overflow-hidden bg-white text-[#111]"
        style={{
          transform: `scale(${scale})`,
          transformOrigin: "top left",
          marginLeft: scale < 1 ? `calc((100vw - 1600px * ${scale}) / 2)` : "auto",
        }}
      >
        {children}
      </div>
    </div>
  );
}

export function CaseTopBar({ tone, items }: TopBarProps) {
  return (
    <header className="flex items-center justify-between px-[128px] pt-8 text-[11.2px] uppercase tracking-[0.32em] text-[#647067]">
      <a href="/#works" className="transition-opacity hover:opacity-70">
        ← Back To Works
      </a>
      <nav className="flex items-center gap-6">
        {items.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="transition-colors hover:opacity-80"
            style={{ color: tone.ink }}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

export function CaseMeta({ tone, items }: MetaProps) {
  return (
    <section
      className="mx-auto mt-6 grid w-[1160px] grid-cols-4 border-y py-6"
      style={{ borderColor: tone.border }}
    >
      {items.map((item) => (
        <div key={item.label} className="space-y-2">
          <p className="mono-detail text-[#91a096]">{item.label}</p>
          <p className="text-[19.2px] font-bold tracking-[-0.01em]" style={{ color: tone.ink }}>
            {item.value}
          </p>
        </div>
      ))}
    </section>
  );
}

export function SectionTitle({
  title,
  subtitle,
  align = "left",
  className = "",
}: SectionTitleProps) {
  const alignment = align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <div className={`flex flex-col ${alignment} ${className}`}>
      <h2 className="text-[56px] font-bold tracking-[-0.08em] text-[#101114]">{title}</h2>
      <p className="mt-1 text-[44px] tracking-[-0.06em] text-black/25">{subtitle}</p>
    </div>
  );
}

export function QuoteBlock({ tone, children, className = "" }: QuoteBlockProps) {
  return (
    <div className={`relative px-14 py-6 text-[24px] leading-[1.6] text-[#666] ${className}`}>
      <span
        className="absolute left-0 top-0 text-[100px] leading-none"
        style={{ color: tone.accentSoft }}
      >
        “
      </span>
      <div>{children}</div>
      <span
        className="absolute bottom-[-22px] right-0 text-[100px] leading-none"
        style={{ color: tone.accentSoft }}
      >
        ”
      </span>
    </div>
  );
}

export function FooterCards({ tone, cards }: FooterCardsProps) {
  return (
    <section className="px-[69px] pb-10 pt-16">
      <div className="grid grid-cols-2 gap-8">
        {cards.map((card) => (
          <a
            key={card.href}
            href={card.href}
            className="overflow-hidden rounded-[18px] border transition-transform duration-300 ease-editorial hover:-translate-y-1"
            style={{ borderColor: "#e8e8e4" }}
          >
            <div className="relative h-[402px] overflow-hidden bg-[#f4f4f0]">
              <img
                src={card.image}
                alt={card.title}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex items-center justify-between bg-[#7b7875] px-8 py-5 text-white">
              <p className="text-[18px] font-semibold">{card.title}</p>
              <span className="mono-detail text-white">view</span>
            </div>
          </a>
        ))}
      </div>

      <footer
        className="mt-10 flex items-center justify-between border-t px-0 pt-6"
        style={{ borderColor: tone.border }}
      >
        <p className="text-[32px] font-bold tracking-[-0.08em]" style={{ color: tone.accentDeep }}>
          ABBIE.
        </p>
        <a
          href="/#works"
          className="mono-detail transition-opacity hover:opacity-70"
          style={{ color: tone.accentDeep }}
        >
          back to works
        </a>
      </footer>
    </section>
  );
}

export function RemoteImage({ src, alt, className = "", style }: RemoteImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      decoding="async"
      referrerPolicy="no-referrer"
      className={className}
      style={style}
    />
  );
}
