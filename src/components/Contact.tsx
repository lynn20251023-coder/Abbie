import { motion } from "motion/react";
import { PERSONAL_INFO } from "@/src/constants";
import SectionMarker from "./SectionMarker";
import SiteFooter from "./SiteFooter";

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

/**
 * Contact — final section, end of the document.
 *
 * Previously housed in a dark ink-900 band paired with AboutThisBuild as
 * a "magazine back cover" closing. With AboutThisBuild removed and the
 * page palette unified, the dark treatment felt like an arbitrary genre
 * shift. Back to the canvas palette. The "end of page" signal comes from
 * large display type, generous whitespace, and a thin rule above the
 * footer instead of a color block.
 */
export default function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 py-20 text-[var(--ink-900)] md:py-28"
    >
      <div className="container-editorial">
        <SectionMarker label="TALK" labelCn="期待合作">
          想聊聊？如果你对 AI 赋能设计、或者复杂系统体验升级感兴趣——
        </SectionMarker>

        <div className="mt-12 grid gap-12 md:mt-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-start lg:gap-16">
          <div className="space-y-8">
            {contactRows.map((row) => (
              <ContactRow key={row.label} {...row} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.64, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-5"
          >
            <p className="font-serif text-[17px] leading-[1.75] text-[var(--ink-600)] md:text-[18px]">
              &ldquo;我热衷于探索 AI 技术如何重塑 UI/UX 设计，想把前沿技术转化为直观、高效的用户体验。&rdquo;
            </p>
            <p className="font-serif text-[17px] leading-[1.75] text-[var(--ink-600)] md:text-[18px]">
              我目前在寻找新的机会和有趣的合作——随时欢迎联系。
            </p>
          </motion.div>
        </div>

      </div>
      <div className="mt-24 lg:mt-[96px]">
        <SiteFooter />
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
      <span className="pt-[10px] text-[22px] leading-none text-[var(--ink-400)]">{icon}</span>
      <div>
        <p className="mb-[6px] font-[var(--font-mono)] text-[10px] uppercase leading-[12px] tracking-[0.28em] text-[var(--ink-400)]">
          {label}
        </p>
        <p
          className={[
            "font-serif text-[22px] font-semibold leading-[1.3] tracking-[-0.02em] text-[var(--ink-900)]",
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
