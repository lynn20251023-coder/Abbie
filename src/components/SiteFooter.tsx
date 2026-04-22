const footerLinks = [
  { label: "作品展示", href: "/#works" },
  { label: "工作经历", href: "/#experience" },
  { label: "专业技能", href: "/#skills" },
  { label: "联系我", href: "/#contact" },
];

/**
 * SiteFooter — shared ABBIE. wordmark + copyright line + nav.
 *
 * Used by the home page (appended inside <Contact />) and by every case
 * sub-page (via CaseStudyPage). Links use absolute `/#anchor` so they work
 * both on the home page (same-page scroll) and on case pages (navigate home
 * + scroll to anchor).
 */
export default function SiteFooter() {
  return (
    <footer className="border-t border-[var(--line)] bg-[var(--canvas)]">
      <div className="container-editorial flex flex-col gap-8 py-10 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <div className="brand-word text-[20px] leading-[24px] text-[var(--ink-900)]">
            ABBIE.
          </div>
          <div className="mt-3 font-[var(--font-mono)] text-[10px] uppercase tracking-[0.32em] text-[var(--ink-300)]">
            © 2026 Portfolio · Designed in Figma · Coded with Claude
          </div>
        </div>

        <div className="flex flex-wrap gap-7 font-[var(--font-mono)] text-[10px] uppercase tracking-[0.32em] text-[var(--ink-400)] lg:gap-10">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="transition-colors duration-200 ease-editorial hover:text-[var(--ink-900)]"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
