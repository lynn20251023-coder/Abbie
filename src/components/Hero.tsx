import { PERSONAL_INFO } from "@/src/constants";

export default function Hero() {
  return (
    <section id="top" className="overflow-hidden bg-[#050505] text-white">
      <div className="relative mx-auto min-h-[760px] w-full max-w-[1602px] bg-[#050505] px-6 pb-20 pt-32 md:h-[898px] md:px-0 md:pb-0 md:pt-0">
        <div className="pointer-events-none absolute -bottom-4 left-1/2 select-none display-italic text-[clamp(190px,46vw,544px)] leading-[0.76] tracking-[-0.08em] text-white/[0.05] max-md:-translate-x-1/2 md:left-[576px] md:top-[588.5px] md:text-[544.68px] md:leading-[413.96px] md:tracking-[-43.57px]">
          UIUX
        </div>

        <div className="relative z-10 w-full max-w-[780px] md:absolute md:left-[88px] md:top-[308px]">
          <p className="font-[var(--font-mono)] text-[12px] leading-[12px] tracking-[0.42em] text-[#646771]">
            {PERSONAL_INFO.role} / {PERSONAL_INFO.experience}
          </p>

          <div className="mt-10 w-full md:mt-[52px] md:w-[780px]">
            <h1 className="display-italic text-[clamp(72px,22vw,155px)] leading-[0.84] tracking-[-0.08em] text-white md:text-[155px] md:leading-[128.16px] md:tracking-[-11px]">
              ABBIE
            </h1>
            <div className="display-outline mt-3 text-[clamp(62px,18vw,160px)] leading-[0.86] tracking-[-0.05em] md:mt-[16px] md:text-[160px] md:leading-[128px] md:tracking-[-6px]">
              PORTFOLIO
            </div>
          </div>
        </div>

        <div className="relative z-10 mt-16 w-full max-w-[520px] md:absolute md:left-[1034px] md:top-[438.5px] md:mt-0 md:w-[480px]">
          <p className="break-words font-serif text-[18px] leading-[32px] text-[#a1a1aa] [overflow-wrap:anywhere] md:text-[20px] md:leading-[34.4px]">“{PERSONAL_INFO.summary}”</p>

          <div className="mt-[48px] w-[217px] border-t border-white/8 pt-[18px]">
            <p className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.32em] text-[#71717a]">
              Scroll to explore
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
