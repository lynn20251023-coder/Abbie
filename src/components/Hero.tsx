import { PERSONAL_INFO } from "@/src/constants";

export default function Hero() {
  return (
    <section id="top" className="overflow-x-auto overflow-y-hidden bg-[#050505] text-white">
      <div className="relative mx-auto h-[898px] w-[1602px] max-w-none bg-[#050505]">
        <div className="pointer-events-none absolute left-[576px] top-[588.5px] select-none display-italic text-[544.68px] leading-[413.96px] tracking-[-43.57px] text-white/[0.05]">
          UIUX
        </div>

        <div className="absolute left-[88px] top-[308px] w-[780px]">
          <p className="font-[var(--font-mono)] text-[12px] leading-[12px] tracking-[0.42em] text-[#646771]">
            {PERSONAL_INFO.role} / {PERSONAL_INFO.experience}
          </p>

          <div className="mt-[52px] w-[780px]">
            <h1 className="display-italic text-[155px] leading-[128.16px] tracking-[-11px] text-white">
              ABBIE
            </h1>
            <div className="display-outline mt-[16px] text-[160px] leading-[128px] tracking-[-6px]">
              PORTFOLIO
            </div>
          </div>
        </div>

        <div className="absolute left-[1034px] top-[438.5px] w-[480px]">
          <p className="font-serif text-[20px] leading-[34.4px] text-[#a1a1aa]">“{PERSONAL_INFO.summary}”</p>

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
