import { motion } from "motion/react";
import { PERSONAL_INFO } from "@/src/constants";

const contactRows = [
  { icon: "📮", label: "邮箱", value: PERSONAL_INFO.email, href: `mailto:${PERSONAL_INFO.email}` },
  { icon: "☎️", label: "电话", value: PERSONAL_INFO.phone, href: `tel:${PERSONAL_INFO.phone}` },
  { icon: "💬", label: "微信", value: PERSONAL_INFO.wechat },
  {
    icon: "👩‍💻",
    label: "在线作品集",
    value: PERSONAL_INFO.portfolioPdfName,
    href: PERSONAL_INFO.portfolioPdfHref,
  },
  {
    icon: "🖥️",
    label: "Demo演示",
    value: PERSONAL_INFO.demoLabel,
    href: PERSONAL_INFO.demoHref,
    underline: true,
    external: true,
  },
];

const footerLinks = [
  { label: "作品展示", href: "#works" },
  { label: "工作经历", href: "#experience" },
  { label: "专业技能", href: "#skills" },
  { label: "联系我", href: "#contact" },
];

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 bg-[var(--ink-900)] py-24 text-white md:py-[128px]">
      <div className="container-editorial">
        <div className="grid gap-16 lg:grid-cols-[612px_612px] lg:justify-between lg:gap-[56px]">
          <div>
            <h2 className="display-italic text-[84px] leading-[0.82] tracking-[-0.08em] text-white md:text-[128.16px] md:leading-[105px] md:tracking-[-10.25px]">
              TALK
            </h2>
            <p className="mt-[9px] font-serif text-[32px] leading-[0.95] tracking-[-0.03em] text-white/28 md:text-[48.06px] md:leading-[39px] md:tracking-[-1.44px]">
              期待合作
            </p>

            <div className="mt-[58px] space-y-[34px]">
              {contactRows.map((row) => (
                <div key={row.label}>
                  <ContactRow {...row} />
                </div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.64, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-[22px] lg:pt-[203px]"
          >
            <p className="font-serif text-[18px] leading-[31.5px] text-white/60">
              &ldquo;我热衷于探索 AI 技术如何重塑 UI/UX 设计，致力于将前沿技术转化为直观、高效的用户体验。&rdquo;
            </p>
            <p className="font-serif text-[18px] leading-[31.5px] text-white/60">
              目前正在寻求新的机会和有趣的合作。如果您对 AI 赋能设计或复杂系统体验升级感兴趣，随时欢迎与我联系！
            </p>
          </motion.div>
        </div>

        <footer className="mt-24 flex flex-col gap-8 border-t border-white/12 pt-10 lg:mt-[110px] lg:flex-row lg:items-end lg:justify-between lg:pt-[36px]">
          <div>
            <div className="brand-word text-[20px] leading-[24px] text-white">ABBIE.</div>
            <div className="mt-3 font-[var(--font-mono)] text-[10px] uppercase tracking-[4px] text-white/40">
              © 2026 Portfolio. All Rights Reserved.
            </div>
          </div>

          <div className="flex flex-wrap gap-[28px] font-[var(--font-mono)] text-[10px] uppercase tracking-[4px] text-white/40 lg:gap-[40px]">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="transition-colors duration-200 ease-editorial hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
        </footer>
      </div>
    </section>
  );
}

function ContactRow({
  icon,
  label,
  value,
  href,
  underline = false,
  external = false,
}: {
  icon: string;
  label: string;
  value: string;
  href?: string;
  underline?: boolean;
  external?: boolean;
}) {
  const inner = (
    <div className="grid grid-cols-[28px_1fr] gap-4">
      <span className="pt-[10px] text-[24px] leading-none text-white/55">{icon}</span>
      <div>
        <p className="mb-[6px] font-serif text-[11px] uppercase leading-[13.2px] tracking-[2.42px] text-white/40">
          {label}
        </p>
        <p
          className={[
            "font-serif text-[24px] font-semibold leading-[28.8px] tracking-[-0.72px] text-white",
            underline ? "underline decoration-current underline-offset-4" : "",
          ].join(" ")}
        >
          {value}
        </p>
      </div>
    </div>
  );

  if (!href) {
    return <div className="transition-opacity duration-200 ease-editorial hover:opacity-75">{inner}</div>;
  }

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="block transition-opacity duration-200 ease-editorial hover:opacity-65"
    >
      {inner}
    </a>
  );
}
