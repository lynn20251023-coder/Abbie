import type { CSSProperties, ReactNode } from "react";
import { CasePageShell, RemoteImage } from "./CasePageScaffold";

const assets = {
  activityHero: "/case-assets/wechatpay/activityHero.webp",
  carrierLogo1: "/case-assets/wechatpay/carrierLogo1.webp",
  carrierLogo2: "/case-assets/wechatpay/carrierLogo2.webp",
  carrierLogo3: "/case-assets/wechatpay/carrierLogo3.webp",
  carrierWord1: "/case-assets/wechatpay/carrierWord1.png",
  carrierWord2: "/case-assets/wechatpay/carrierWord2.png",
  demandArrow: "/case-assets/wechatpay/demandArrow.svg",
  demandDashedLeft: "/case-assets/wechatpay/demandDashedLeft.svg",
  demandDashedRight: "/case-assets/wechatpay/demandDashedRight.svg",
  demandDotLeft: "/case-assets/wechatpay/demandDotLeft.svg",
  demandDotRight: "/case-assets/wechatpay/demandDotRight.svg",
  demandRing: "/case-assets/wechatpay/demandRing.svg",
  demandRingFill: "/case-assets/wechatpay/demandRingFill.svg",
  efficiencyCard1: "/case-assets/wechatpay/efficiencyCard1.webp",
  efficiencyCard2: "/case-assets/wechatpay/efficiencyCard2.webp",
  efficiencyCard3: "/case-assets/wechatpay/efficiencyCard3.webp",
  efficiencyCard4: "/case-assets/wechatpay/efficiencyCard4.webp",
  efficiencyCard5: "/case-assets/wechatpay/efficiencyCard5.webp",
  efficiencyCard6: "/case-assets/wechatpay/efficiencyCard6.webp",
  efficiencyCard7: "/case-assets/wechatpay/efficiencyCard7.webp",
  efficiencyPhone: "/case-assets/wechatpay/efficiencyPhone.webp",
  efficiencyPhoneWide: "/case-assets/wechatpay/efficiencyPhoneWide.webp",
  footerCodex: "/case-assets/wechatpay/footerCodex.png",
  footerFigma: "/case-assets/wechatpay/footerFigma.png",
  footerGithub: "/case-assets/wechatpay/footerGithub.svg",
  footerLeftLogo: "/case-assets/wechatpay/footerLeftLogo.svg",
  footerLeftMask: "/case-assets/wechatpay/footerLeftMask.svg",
  footerLeftPreview: "/case-assets/wechatpay/footerLeftPreview.webp",
  footerRightCodexV2: "/case-assets/wechatpay/footerRightCodex-v2.png",
  footerRightFigmaV2: "/case-assets/wechatpay/footerRightFigma-v2.png",
  footerRightGithubV2: "/case-assets/wechatpay/footerRightGithub-v2.png",
  footerRightPreviewAV2: "/case-assets/wechatpay/footerRightPreviewA-v2.webp",
  footerRightPreviewBV2: "/case-assets/wechatpay/footerRightPreviewB-v2.webp",
  frameworkConnector: "/case-assets/wechatpay/frameworkConnector.svg",
  frameworkLine: "/case-assets/wechatpay/frameworkLine.svg",
  group28597: "/case-assets/wechatpay/group28597.webp",
  group28598: "/case-assets/wechatpay/group28598.webp",
  group28602: "/case-assets/wechatpay/group28602.webp",
  fullBleed19: "/case-assets/wechatpay/fullBleed19.webp",
  fullBleed53: "/case-assets/wechatpay/fullBleed53.webp",
  fullBleed54: "/case-assets/wechatpay/fullBleed54.webp",
  fullBleedResearch: "/case-assets/wechatpay/fullBleedResearch.webp",
  heroPhone: "/case-assets/wechatpay/heroPhone.webp",
  hkbnLogo: "/case-assets/wechatpay/hkbnLogo.webp",
  insightBackground: "/case-assets/wechatpay/insightBackground.webp",
  ipBanner: "/case-assets/wechatpay/ipBanner.webp",
  ipDot: "/case-assets/wechatpay/ipDot.svg",
  ipGlow: "/case-assets/wechatpay/ipGlow.svg",
  ipOutline: "/case-assets/wechatpay/ipOutline.svg",
  ipSmallDot: "/case-assets/wechatpay/ipSmallDot.svg",
  localCircle: "/case-assets/wechatpay/localCircle.svg",
  localFormIcon: "/case-assets/wechatpay/localFormIcon.svg",
  localPlus: "/case-assets/wechatpay/localPlus.svg",
  localizationPhone: "/case-assets/wechatpay/localizationPhone.webp",
  perceptionBullet: "/case-assets/wechatpay/perceptionBullet.svg",
  perceptionGuide: "/case-assets/wechatpay/perceptionGuide.svg",
  perceptionPhone1: "/case-assets/wechatpay/perceptionPhone1.webp",
  perceptionPhone2: "/case-assets/wechatpay/perceptionPhone2.webp",
  problemImage1: "/case-assets/wechatpay/problemImage1.webp",
  problemImage2: "/case-assets/wechatpay/problemImage2.webp",
  problemImage3: "/case-assets/wechatpay/problemImage3.webp",
  problemImage4: "/case-assets/wechatpay/problemImage4.webp",
  processArrowLong: "/case-assets/wechatpay/processArrowLong.svg",
  processArrowShort: "/case-assets/wechatpay/processArrowShort.svg",
  processBackdrop: "/case-assets/wechatpay/processBackdrop.webp",
  processCircleA: "/case-assets/wechatpay/processCircleA.svg",
  processCircleCenter: "/case-assets/wechatpay/processCircleCenter.svg",
  processCircleOuter: "/case-assets/wechatpay/processCircleOuter.svg",
  processLabelArrow: "/case-assets/wechatpay/processLabelArrow.svg",
  processMetricArrow: "/case-assets/wechatpay/processMetricArrow.svg",
  processPhone1: "/case-assets/wechatpay/processPhone1.webp",
  processPhone2: "/case-assets/wechatpay/processPhone2.webp",
  processPhone3: "/case-assets/wechatpay/processPhone3.webp",
  processPlusExact: "/case-assets/wechatpay/processPlusExact.svg",
  processTrendDown: "/case-assets/wechatpay/processTrendDown.svg",
  processTrendUp: "/case-assets/wechatpay/processTrendUp.svg",
  section7: "/case-assets/wechatpay/section7.webp",
  section15: "/case-assets/wechatpay/section15.webp",
  strategyArrowLong: "/case-assets/wechatpay/strategyArrowLong.svg",
  strategyArrowShort: "/case-assets/wechatpay/strategyArrowShort.svg",
  strategyCircle: "/case-assets/wechatpay/strategyCircle.svg",
} as const;

const navItems = [
  { label: "首页", href: "#home" },
  { label: "項目背景", href: "#background" },
  { label: "用户洞察", href: "#insight" },
  { label: "信息重塑", href: "#framework" },
  { label: "现存问题", href: "#problems" },
  { label: "设计优化", href: "#process" },
  { label: "感知埋点", href: "#perception" },
  { label: "活动转化", href: "#activity" },
] as const;

const metaItems = [
  { label: "Timeline", value: "2022.04 - 2023.05", left: 220 },
  { label: "Role", value: "UI/UX 设计师", left: 516 },
  { label: "Tools", value: "Figma", left: 812 },
  { label: "Industry", value: "FinTech / Payment", left: 1108 },
] as const;

const goalCards = [
  { left: 76, title: "用户目标", body: "直观获取相关信息提高内容获取效率引导决策" },
  { left: 569, title: "产品目标", body: "提高用户高效获取信息的能力增加市场覆盖率" },
  { left: 1062, title: "设计目标", body: "提高产品体验完善各流程痛点提升产品转化率" },
] as const;

const issueCards = [
  { left: 75, number: "1", title: "信息层级不明确", body: "商户LOGO漏出不明显，主次功能未做明显区分..." },
  { left: 569, number: "2", title: "功能理解成本高", body: "没有固定的查看账单以及记录功能，查找困难..." },
  { left: 1063, number: "3", title: "结构雷同", body: "「账单页」新增费种视觉过重显得繁冗..." },
];

const footerCards = [
  {
    href: "/?case=chowtaifook",
    overlayText: "周大福官方小程序",
    borderWidth: 2,
  },
  {
    href: "/?case=sorting",
    overlayText: "蔬东坡智能分拣系统",
    borderWidth: 1,
  },
] as const;

function Img({
  alt,
  src,
  style,
  className = "",
}: {
  alt: string;
  src: string;
  style?: CSSProperties;
  className?: string;
}) {
  return <RemoteImage alt={alt} src={src} style={style} className={className} />;
}

function AbsoluteText({
  children,
  className = "",
  style,
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <p className={`absolute ${className}`} style={style}>
      {children}
    </p>
  );
}

function Heading({
  id,
  title,
  subtitle,
  left,
  top,
  width,
  titleColor = "#101114",
  subtitleColor = "rgba(0,0,0,0.3)",
  titleLetterSpacing = "-6px",
}: {
  id?: string;
  title: string;
  subtitle: string;
  left: number;
  top: number;
  width: number;
  titleColor?: string;
  subtitleColor?: string;
  titleLetterSpacing?: string;
}) {
  return (
    <>
      {id ? <div id={id} className="absolute" style={{ left: 0, top: top - 40 }} /> : null}
      <AbsoluteText
        className="font-tencent"
        style={{
          left,
          top,
          width,
          fontSize: 56,
          lineHeight: "84px",
          fontWeight: 700,
          letterSpacing: titleLetterSpacing,
          color: titleColor,
        }}
      >
        {title}
      </AbsoluteText>
      <AbsoluteText
        className="font-noto-sc"
        style={{
          left,
          top: top + 84,
          width,
          fontSize: 44,
          lineHeight: "63px",
          fontWeight: 400,
          letterSpacing: "-1.44px",
          color: subtitleColor,
        }}
      >
        {subtitle}
      </AbsoluteText>
    </>
  );
}

function FooterCard({
  href,
  left,
  overlayText,
  borderWidth,
  children,
}: {
  href: string;
  left: number;
  overlayText: string;
  borderWidth: number;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      className="absolute block overflow-hidden rounded-[16px] transition-opacity hover:opacity-95"
      style={{ left, top: 15841, width: 715, height: 402 }}
    >
      <div
        className="absolute inset-0 rounded-[16px] bg-white"
        style={{ border: `${borderWidth}px solid rgba(0,0,0,0.1)` }}
      />
      <div className="absolute inset-0 overflow-hidden rounded-[16px]">{children}</div>
      <div className="absolute bottom-0 left-0 h-16 w-full rounded-b-[16px] bg-black/50" />
      <AbsoluteText
        className="font-noto-sc text-white"
        style={{
          left: 32,
          top: 356,
          width: 179,
          height: 29,
          overflow: "hidden",
          whiteSpace: "nowrap",
          fontSize: 18,
          lineHeight: "29px",
          fontWeight: 600,
        }}
      >
        {overlayText}
      </AbsoluteText>
      <AbsoluteText
        className="font-ibm-mono text-white"
        style={{
          right: 31,
          top: 362,
          fontSize: 11.2,
          lineHeight: "18px",
          letterSpacing: "3.584px",
          textTransform: "uppercase",
          fontWeight: 500,
        }}
      >
        View 👉
      </AbsoluteText>
    </a>
  );
}

export default function WechatPayCasePage() {
  return (
    <CasePageShell background="#FFFFFF">
      <div className="relative h-[16440px] w-[1600px] bg-white">
        <div id="home" className="absolute left-0 top-0" />

        <a
          href="/#works"
          className="absolute font-noto-sc text-[#647067] transition-opacity hover:opacity-70"
          style={{
            left: 128,
            top: 32,
            fontSize: 11.2,
            lineHeight: "18px",
            letterSpacing: "3.584px",
            textTransform: "uppercase",
            fontWeight: 400,
          }}
        >
          ← Back To Works
        </a>

        <div className="absolute flex items-center gap-6" style={{ left: 886, top: 32 }}>
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-noto-sc text-[#647067] transition-opacity hover:opacity-70"
              style={{
                fontSize: 11.2,
                lineHeight: "18px",
                letterSpacing: "3.584px",
                textTransform: "uppercase",
                fontWeight: 400,
              }}
            >
              {item.label}
            </a>
          ))}
        </div>

        <Img
          alt="WeChat Pay HK 主视觉"
          src={assets.heroPhone}
          className="absolute object-contain"
          style={{ left: 520, top: 74, width: 980, height: 1010 }}
        />

        <div className="absolute" style={{ left: 128, top: 300, width: 573 }}>
          <AbsoluteText
            className="font-ibm-mono text-[#91A096]"
            style={{
              left: 0,
              top: 0,
              width: 573,
              fontSize: 10.88,
              lineHeight: "18px",
              letterSpacing: "3.6992px",
              textTransform: "uppercase",
              fontWeight: 400,
            }}
          >
            WeChat pay-Hk
          </AbsoluteText>
          <AbsoluteText
            className="font-tencent text-black"
            style={{
              left: 0,
              top: 34,
              width: 573,
              fontSize: 68,
              lineHeight: "84px",
              fontWeight: 700,
            }}
          >
            香港-电讯缴费体验
            <br />
            流程优化
          </AbsoluteText>
          <AbsoluteText
            className="font-noto-sc text-[#647067]"
            style={{
              left: 0,
              top: 266,
              width: 544,
              fontSize: 18,
              lineHeight: "29px",
              fontWeight: 400,
            }}
          >
            “WeChat Pay HK是建立在微信社交基础上的支付型产品，以账单缴费为切入点，接入各大主流账单，并结合端内场景交叉转化，打造“便利缴费”的用户心智。不同的生命周期发现用户使用痛点...”
          </AbsoluteText>
        </div>

        <div
          className="absolute border-y border-solid"
          style={{
            left: 220,
            top: 996,
            width: 1160,
            height: 99,
            borderColor: "rgba(7,193,96,0.16)",
          }}
        >
          {metaItems.map((item) => (
            <div
              key={item.label}
              className="absolute"
              style={{ left: item.left - 220, top: 25, width: 272 }}
            >
              <AbsoluteText
                style={{
                  left: 0,
                  top: -0.5,
                  fontFamily: '"JetBrains Mono","IBM Plex Mono",monospace',
                  fontSize: 10.88,
                  lineHeight: "18px",
                  letterSpacing: "3.6992px",
                  textTransform: "uppercase",
                  color: "#91A096",
                }}
              >
                {item.label}
              </AbsoluteText>
              <AbsoluteText
                className="font-noto-sc text-[#111111]"
                style={{
                  left: 0,
                  top: 27,
                  width: 272,
                  fontSize: 19.2,
                  lineHeight: "23px",
                  fontWeight: 700,
                  whiteSpace: "nowrap",
                }}
              >
                {item.value}
              </AbsoluteText>
            </div>
          ))}
        </div>

        <Heading
          id="background"
          title="項目背景"
          subtitle="Project background"
          left={76}
          top={1214}
          width={436}
          titleLetterSpacing="-10px"
        />

        {goalCards.map((card) => (
          <div
            key={card.title}
            className="absolute rounded-[16px] bg-[#07C160]"
            style={{ left: card.left, top: 1433, width: 462, height: 215 }}
          >
            <div
              className="absolute flex flex-col items-center text-center text-white"
              style={{ left: 125, top: 48, width: 212 }}
            >
              <p className="font-noto-sc text-[28px] font-semibold leading-[40px]">{card.title}</p>
              <p className="mt-[23px] font-noto-sc text-[20px] leading-[29px]">{card.body}</p>
            </div>
          </div>
        ))}

        <AbsoluteText
          className="font-noto-sc text-[#333333]"
          style={{ left: 75, top: 1736, width: 1450, fontSize: 34, lineHeight: "49px", fontWeight: 600 }}
        >
          发现问题
        </AbsoluteText>

        {issueCards.map((card) => (
          <div
            key={card.number}
            className="absolute rounded-[16px] border border-[rgba(0,0,0,0.1)] bg-white"
            style={{ left: card.left, top: 1816, width: 462, height: 287 }}
          >
            <div
              className="absolute flex h-12 w-12 items-center justify-center rounded-full bg-[#07C160] text-white"
              style={{ left: 32, top: 32 }}
            >
              <span
                style={{
                  fontFamily: '"PingFang SC","Noto Serif SC",sans-serif',
                  fontSize: 34,
                  lineHeight: "48px",
                  fontWeight: 600,
                }}
              >
                {card.number}
              </span>
            </div>
            <AbsoluteText
              className="font-noto-sc text-[#333333]"
              style={{ left: 32, top: 128, width: 396, fontSize: 28, lineHeight: "40px", fontWeight: 600 }}
            >
              {card.title}
            </AbsoluteText>
            <AbsoluteText
              className="font-noto-sc text-[#666666]"
              style={{ left: 32, top: 183, width: 396, fontSize: 24, lineHeight: "36px", fontWeight: 400 }}
            >
              {card.body}
            </AbsoluteText>
          </div>
        ))}

        <AbsoluteText
          className="font-noto-sc text-[#333333]"
          style={{ left: 75, top: 2191, width: 1450, fontSize: 34, lineHeight: "49px", fontWeight: 700 }}
        >
          目标拆解
        </AbsoluteText>

        <div
          className="absolute rounded-[16px] border border-[rgba(0,0,0,0.1)] bg-white"
          style={{ left: 75, top: 2271, width: 1450, height: 220 }}
        >
          <AbsoluteText
            className="font-noto-sc text-[#333333]"
            style={{ left: 119, top: 60, width: 557, fontSize: 28, lineHeight: "40px", fontWeight: 600 }}
          >
            全面分析用户使用流程
          </AbsoluteText>
          <AbsoluteText
            className="font-noto-sc text-[#666666]"
            style={{ left: 119, top: 123, width: 557, fontSize: 24, lineHeight: "36px", fontWeight: 400 }}
          >
            从宏观到围观的逻辑逐步分析，使体验形成闭环
          </AbsoluteText>
          <div className="absolute h-[140px] w-px bg-black/10" style={{ left: 715, top: 40 }} />
          <AbsoluteText
            className="font-noto-sc text-[#333333]"
            style={{ left: 798, top: 60, width: 557, fontSize: 28, lineHeight: "40px", fontWeight: 600 }}
          >
            清晰展示商户、缴费相关内容
          </AbsoluteText>
          <AbsoluteText
            className="font-noto-sc text-[#666666]"
            style={{ left: 798, top: 123, width: 557, fontSize: 24, lineHeight: "36px", fontWeight: 400 }}
          >
            多维度展示内容，选取合理的可视化方案
          </AbsoluteText>
        </div>

        <div id="market" className="absolute left-0 top-[2611px]" />
        <Img alt="市场与用户诉求" src={assets.group28597} className="absolute object-contain" style={{ left: 141, top: 2611, width: 1319, height: 1059 }} />

        <section className="absolute left-0 top-[3803px] h-[900px] w-[1600px] overflow-hidden" id="insight">
          <Img alt="用户洞察" src={assets.section7} className="absolute object-cover" style={{ left: 0, top: 0, width: 1600, height: 900 }} />
        </section>

        <Heading id="framework" title="设计优化-信息框架重塑" subtitle="Reshaping the information framework" left={90} top={4803} width={852} />

        <Img alt="信息框架重塑" src={assets.group28598} className="absolute object-contain" style={{ left: 184, top: 5055, width: 1232, height: 608 }} />

        <Heading id="problems" title="现存问题-设计优化" subtitle="Existing problems" left={78} top={5849} width={525} />

        <div className="absolute" style={{ left: 425, top: 6050, width: 1102, height: 652 }}>
          <div className="absolute inset-0 rounded-[16px] border border-black/10 bg-white" />
          <div className="absolute bg-[#07C160]" style={{ left: 61, top: 81, width: 3, height: 16 }} />
          <div className="absolute bg-[#07C160]" style={{ left: 61, top: 88, width: 730, height: 3 }} />
          <div className="absolute bg-[#07C160]" style={{ left: 791, top: 81, width: 3, height: 16 }} />
          <div className="absolute bg-[#07C160]" style={{ left: 812, top: 81, width: 3, height: 16 }} />
          <div className="absolute bg-[#07C160]" style={{ left: 812, top: 88, width: 229, height: 3 }} />
          <div className="absolute bg-[#07C160]" style={{ left: 1039, top: 81, width: 3, height: 16 }} />
          <AbsoluteText className="font-noto-sc text-[#07C160]" style={{ left: 370, top: 35, fontSize: 28, lineHeight: "40px", fontWeight: 500 }}>
            账单缴费
          </AbsoluteText>
          <AbsoluteText className="font-noto-sc text-[#07C160]" style={{ left: 857, top: 35, fontSize: 28, lineHeight: "40px", fontWeight: 500 }}>
            储值卡增值
          </AbsoluteText>
          <Img alt="问题界面1" src={assets.problemImage1} className="absolute rounded-[6px] border border-[#F2F2F2] object-cover" style={{ left: 60, top: 113, width: 229.02, height: 497.82 }} />
          <Img alt="问题界面2" src={assets.problemImage2} className="absolute rounded-[6px] border border-[#F2F2F2] object-cover" style={{ left: 310.48, top: 113, width: 229.02, height: 496.45 }} />
          <Img alt="问题界面3" src={assets.problemImage3} className="absolute rounded-[6px] border border-[#F2F2F2] object-cover" style={{ left: 562, top: 113, width: 229.02, height: 497.82 }} />
          <Img alt="问题界面4" src={assets.problemImage4} className="absolute rounded-[6px] border border-[#F2F2F2] object-cover" style={{ left: 813, top: 113, width: 229.02, height: 497.82 }} />
          <AbsoluteText className="font-noto-sc text-[#666666]" style={{ left: 503, top: 668, fontSize: 24, lineHeight: "34px", fontWeight: 400 }}>
            BEFORE
          </AbsoluteText>
        </div>

        <AbsoluteText className="font-noto-sc text-[#333333]" style={{ left: 78, top: 6115, width: 284, fontSize: 24, lineHeight: "34px", fontWeight: 600 }}>
          现存问题
        </AbsoluteText>
        <AbsoluteText className="font-noto-sc text-[#666666]" style={{ left: 78, top: 6165, width: 284, fontSize: 20, lineHeight: "29px", fontWeight: 400 }}>
          多卡用户需要在「账单缴费」与『储值卡增值』 之间切换且现入口太深，不便查找
        </AbsoluteText>
        <AbsoluteText className="font-noto-sc text-[#333333]" style={{ left: 78, top: 6313, fontSize: 24, lineHeight: "34px", fontWeight: 600 }}>
          设计策略
        </AbsoluteText>
        <Img alt="策略圆圈1" src={assets.strategyCircle} className="absolute" style={{ left: 89, top: 6371, width: 140, height: 140 }} />
        <Img alt="策略圆圈2" src={assets.strategyCircle} className="absolute" style={{ left: 214, top: 6371, width: 140, height: 140 }} />
        <AbsoluteText className="font-noto-sc text-center text-[#07C160]" style={{ left: 139, top: 6413, width: 40, fontSize: 20, lineHeight: "29px", fontWeight: 600 }}>
          账单
          <br />
          缴费
        </AbsoluteText>
        <AbsoluteText className="font-noto-sc text-center text-[#07C160]" style={{ left: 254, top: 6413, width: 60, fontSize: 20, lineHeight: "29px", fontWeight: 600 }}>
          储值卡
          <br />
          增值
        </AbsoluteText>
        <Img alt="策略箭头1" src={assets.strategyArrowShort} className="absolute" style={{ left: 683, top: 6339, width: 80, height: 18 }} />
        <Img alt="策略箭头2" src={assets.strategyArrowLong} className="absolute" style={{ left: 626, top: 6500, width: 391, height: 18 }} />
        <AbsoluteText className="font-noto-sc text-[#07C160]" style={{ left: 70, top: 6527, width: 284, fontSize: 24, lineHeight: "34px", fontWeight: 500, textAlign: "center" }}>
          新增账户页
        </AbsoluteText>
        <AbsoluteText className="font-noto-sc text-[#666666]" style={{ left: 78, top: 6577, width: 284, fontSize: 20, lineHeight: "29px", fontWeight: 400 }}>
          将储值卡账户也是为账户的一种，提供个人账户概念。解决入口太深同时减少用户交互步骤
        </AbsoluteText>

        <Heading id="process" title="设计优化-流程" subtitle="Process" left={78} top={6857} width={324} />

        <div className="absolute" style={{ left: 53, top: 6857, width: 1547, height: 903 }}>
          <div className="absolute bg-[linear-gradient(89.72deg,#07C160_0.24%,rgba(7,193,96,0)_116.92%)]" style={{ left: 456, top: 294, width: 1091, height: 481 }} />
          <Img alt="流程底图" src={assets.processBackdrop} className="absolute object-contain" style={{ left: 485, top: 175, width: 366, height: 688 }} />
          <Img alt="流程手机1" src={assets.processPhone1} className="absolute object-contain" style={{ left: 516, top: 198, width: 314.56, height: 655.23 }} />
          <Img alt="流程手机2" src={assets.processPhone2} className="absolute object-contain" style={{ left: 862, top: 198, width: 314.56, height: 655.23 }} />
          <Img alt="流程手机3" src={assets.processPhone3} className="absolute object-contain" style={{ left: 1208, top: 198, width: 314.56, height: 655.23 }} />
          <Img alt="流程箭头短" src={assets.processArrowShort} className="absolute" style={{ left: 797, top: 439, width: 128, height: 18 }} />
          <Img alt="流程箭头长" src={assets.processArrowLong} className="absolute" style={{ left: 797, top: 601, width: 474, height: 18 }} />
          <Img alt="流程圈1" src={assets.processCircleA} className="absolute" style={{ left: 27, top: 270, width: 142, height: 142 }} />
          <Img alt="流程圈2" src={assets.processCircleA} className="absolute" style={{ left: 239, top: 270, width: 142, height: 142 }} />
          <Img alt="流程圈3" src={assets.processCircleCenter} className="absolute" style={{ left: 145, top: 577, width: 129, height: 129 }} />
          <Img alt="流程圈4" src={assets.processCircleOuter} className="absolute" style={{ left: 131, top: 562, width: 158, height: 158 }} />
          <Img alt="流程标签箭头1" src={assets.processLabelArrow} className="absolute" style={{ left: 93, top: 407, width: 10, height: 29.98 }} />
          <Img alt="流程标签箭头2" src={assets.processLabelArrow} className="absolute" style={{ left: 303, top: 407, width: 10, height: 29.98 }} />
          <div className="absolute flex items-center justify-center" style={{ left: 57, top: 858, width: 38, height: 10 }}>
            <Img alt="流程指标箭头" src={assets.processMetricArrow} className="object-contain" style={{ width: 10, height: 38, transform: "rotate(-90deg)" }} />
          </div>
          <Img alt="流程加号" src={assets.processPlusExact} className="absolute" style={{ left: 196, top: 335, width: 18, height: 18 }} />
          <div className="absolute flex items-center justify-center" style={{ left: 196.5, top: 515, width: 27.03, height: 35 }}>
            <Img alt="流程上升箭头" src={assets.processTrendUp} className="object-contain" style={{ width: 35, height: 27.03, transform: "rotate(90deg)" }} />
          </div>
          <div className="absolute flex items-center justify-center" style={{ left: 193, top: 834, width: 27.03, height: 35 }}>
            <Img alt="流程下降箭头" src={assets.processTrendDown} className="object-contain" style={{ width: 35, height: 27.03, transform: "rotate(-90deg)" }} />
          </div>
          <AbsoluteText className="font-noto-sc text-[#07C160]" style={{ left: 57, top: 327, fontSize: 20, lineHeight: "29px", fontWeight: 600 }}>
            交互布局
          </AbsoluteText>
          <AbsoluteText className="font-noto-sc text-[#07C160]" style={{ left: 270, top: 327, fontSize: 20, lineHeight: "29px", fontWeight: 600 }}>
            详情优化
          </AbsoluteText>
          <AbsoluteText className="font-noto-sc text-center text-[18px] leading-[26px] text-[rgba(102,102,102,0.8)]" style={{ left: 0, top: 445, width: 198, fontWeight: 400 }}>
            信息重构，对标行为目标
            <br />
            卡片模块，聚焦用户信息
          </AbsoluteText>
          <AbsoluteText className="font-noto-sc text-center text-[18px] leading-[26px] text-[rgba(102,102,102,0.8)]" style={{ left: 213, top: 445, width: 198, fontWeight: 400 }}>
            优化信息层级，确保
            <br />
            视觉优先级与第一感知
          </AbsoluteText>
          <AbsoluteText className="font-noto-sc text-center text-white" style={{ left: 167, top: 613, width: 86, fontSize: 20, lineHeight: "29px", fontWeight: 600 }}>
            提升
            <br />
            使用效率
          </AbsoluteText>
          <AbsoluteText className="font-noto-sc text-center text-black" style={{ left: 2, top: 763, width: 371, fontSize: 32, lineHeight: "46px", fontWeight: 600 }}>
            用户绑卡数（6个月均值）
          </AbsoluteText>
          <AbsoluteText className="font-noto-sc text-black" style={{ left: 0, top: 843, fontSize: 24, lineHeight: "34px", fontWeight: 600 }}>
            1.09
          </AbsoluteText>
          <AbsoluteText className="font-noto-sc text-black" style={{ left: 99, top: 822, fontSize: 44, lineHeight: "63px", fontWeight: 600 }}>
            1.18
          </AbsoluteText>
          <AbsoluteText className="font-noto-sc text-[#666666]" style={{ left: 976, top: 869, fontSize: 24, lineHeight: "34px", fontWeight: 400 }}>
            AFTER
          </AbsoluteText>
        </div>

        <Heading id="perception" title="设计优化-感知埋点" subtitle="Perception of the buried point" left={101} top={7915} width={666} />

        <Img alt="感知埋点手机1" src={assets.perceptionPhone1} className="absolute object-contain" style={{ left: 135, top: 8173, width: 394, height: 701 }} />
        <Img alt="感知埋点手机2" src={assets.perceptionPhone2} className="absolute object-contain" style={{ left: 556, top: 8173, width: 394, height: 701 }} />
        <AbsoluteText className="font-noto-sc text-[#333333]" style={{ left: 1046, top: 8233, fontSize: 24, lineHeight: "34px", fontWeight: 600 }}>
          现存问题
        </AbsoluteText>
        <AbsoluteText className="font-noto-sc text-[#666666]" style={{ left: 1046, top: 8283, width: 426, fontSize: 20, lineHeight: "29px", fontWeight: 400 }}>
          在许多场景都有部署优惠信息，有一定的流量，但不够精准
        </AbsoluteText>
        <AbsoluteText className="font-noto-sc text-[#333333]" style={{ left: 1046, top: 8387, fontSize: 24, lineHeight: "34px", fontWeight: 600 }}>
          设计策略
        </AbsoluteText>
        <AbsoluteText
          style={{
            left: 1046,
            top: 8437,
            fontFamily: '"PingFang SC",sans-serif',
            fontSize: 44,
            lineHeight: "64px",
            letterSpacing: "0.65em",
            fontWeight: 600,
            color: "#07C160",
          }}
        >
          B=MAP
        </AbsoluteText>
        <AbsoluteText
          style={{
            left: 1046,
            top: 8501,
            fontFamily: '"PingFang SC",sans-serif',
            fontSize: 20,
            lineHeight: "28px",
            fontWeight: 400,
            color: "#666666",
          }}
        >
          行为
        </AbsoluteText>
        <AbsoluteText
          style={{
            left: 1157,
            top: 8501,
            fontFamily: '"PingFang SC",sans-serif',
            fontSize: 20,
            lineHeight: "28px",
            fontWeight: 400,
            color: "#666666",
          }}
        >
          动机
        </AbsoluteText>
        <AbsoluteText
          style={{
            left: 1202,
            top: 8501,
            fontFamily: '"PingFang SC",sans-serif',
            fontSize: 20,
            lineHeight: "28px",
            fontWeight: 400,
            color: "#666666",
          }}
        >
          ·
        </AbsoluteText>
        <AbsoluteText
          style={{
            left: 1219,
            top: 8501,
            fontFamily: '"PingFang SC",sans-serif',
            fontSize: 20,
            lineHeight: "28px",
            fontWeight: 400,
            color: "#666666",
          }}
        >
          能力
        </AbsoluteText>
        <AbsoluteText
          style={{
            left: 1264,
            top: 8501,
            fontFamily: '"PingFang SC",sans-serif',
            fontSize: 20,
            lineHeight: "28px",
            fontWeight: 400,
            color: "#666666",
          }}
        >
          ·
        </AbsoluteText>
        <AbsoluteText
          style={{
            left: 1282,
            top: 8501,
            fontFamily: '"PingFang SC",sans-serif',
            fontSize: 20,
            lineHeight: "28px",
            fontWeight: 400,
            color: "#666666",
          }}
        >
          提示
        </AbsoluteText>
        <Img alt="感知埋点引导线" src={assets.perceptionGuide} className="absolute" style={{ left: 788, top: 8399, width: 229, height: 12 }} />
        <AbsoluteText className="font-noto-sc text-[#666666]" style={{ left: 1044, top: 8553, width: 422, fontSize: 20, lineHeight: "29px", fontWeight: 400 }}>
          通过优化运营商列表中的优惠露出方式，提升用户对利益点识别效率，支持新增账户与后续转化
        </AbsoluteText>
        <Img alt="项目符号1" src={assets.perceptionBullet} className="absolute" style={{ left: 1046, top: 8646, width: 12, height: 12 }} />
        <AbsoluteText className="font-noto-sc text-[#666666]" style={{ left: 1074, top: 8633, fontSize: 20, lineHeight: "36px", fontWeight: 400 }}>
          降低操作门槛
        </AbsoluteText>
        <Img alt="项目符号2" src={assets.perceptionBullet} className="absolute" style={{ left: 1046, top: 8690, width: 12, height: 12 }} />
        <AbsoluteText className="font-noto-sc text-[#666666]" style={{ left: 1074, top: 8677, fontSize: 20, lineHeight: "36px", fontWeight: 400 }}>
          提高优惠感知，突出利益点
        </AbsoluteText>

        <Img alt="本地化设计强化运营商" src={assets.group28602} className="absolute object-contain" style={{ left: 105, top: 9018, width: 1398, height: 521 }} />

        <Img alt="调研全屏图" src={assets.fullBleedResearch} className="absolute left-0 top-[9539px] h-[900px] w-[1600px] object-cover" />
        <div id="activity" className="absolute left-0 top-[10383px]" />

        <AbsoluteText className="font-tencent text-black" style={{ left: 120, top: 10723, width: 680, fontSize: 68, lineHeight: "84px", fontWeight: 700 }}>
          活动页到绑卡动作转化
        </AbsoluteText>
        <AbsoluteText
          className="font-noto-sc text-[#647067]"
          style={{ left: 120, top: 10871, width: 659, fontSize: 18, lineHeight: "29px", fontWeight: 400 }}
        >
          “拓展金融产品销售新渠道，通过银行上新与联合运营联动，拉动绑卡量、用卡交易增长。 WeChat Pay 成为香港范围支持绑定虚拟银行、实体银行最多的电子钱包，为用户提供更专业细致的便利体验，共同促进互联网金融价值升级”
        </AbsoluteText>
        <Img alt="活动转化主视觉" src={assets.activityHero} className="absolute object-contain" style={{ left: 613, top: 10479, width: 847, height: 873 }} />

        <section className="absolute left-0 top-[11271px] h-[900px] w-[1600px] overflow-hidden">
          <Img alt="提效专题能效" src={assets.section15} className="absolute object-cover" style={{ left: 0, top: 0, width: 1600, height: 900 }} />
        </section>

        <section className="absolute left-0 top-[12171px] h-[900px] w-[1600px] bg-white">
          <Img alt="IP 横幅" src={assets.ipBanner} className="absolute object-cover" style={{ left: 457, top: 179, width: 1143, height: 583 }} />
          <div className="absolute bg-white" style={{ left: 487, top: 184, width: 305, height: 72 }} />
          <div className="absolute bg-white" style={{ left: 487, top: 732, width: 240, height: 56 }} />
          <AbsoluteText className="font-tencent text-black" style={{ left: 138, top: 185, fontSize: 66.22, lineHeight: "99px", fontWeight: 700 }}>
            WeChat Pay hk-IP
          </AbsoluteText>
          <AbsoluteText className="font-tencent text-[#333333]" style={{ left: 138, top: 384, fontSize: 44, lineHeight: "66px", fontWeight: 700 }}>
            項目背景
          </AbsoluteText>
          <AbsoluteText className="font-tencent text-[#999999]" style={{ left: 138, top: 454, fontSize: 28, lineHeight: "40px", fontWeight: 400 }}>
            Project background
          </AbsoluteText>
          <AbsoluteText className="font-[PingFang_SC] text-[#666666]" style={{ left: 138, top: 526, width: 508, fontSize: 24, lineHeight: "36px", fontWeight: 400 }}>
            为提高香港钱包品牌亲和力及本地化，打造独特的品牌印象，进而明确打造核心IP形象。IP的建立不但能完善用户对品牌的感知，对设计品质/效率/一致性上也得以提高...
          </AbsoluteText>
          <Img alt="IP 柔光" src={assets.ipGlow} className="absolute" style={{ left: -53, top: -129, width: 292, height: 292 }} />
          <Img alt="IP 圆点" src={assets.ipDot} className="absolute" style={{ left: 675, top: 179, width: 79, height: 79 }} />
          <Img alt="IP 描边" src={assets.ipOutline} className="absolute" style={{ left: -299, top: 705, width: 513, height: 513 }} />
          <Img alt="IP 小圆点" src={assets.ipSmallDot} className="absolute" style={{ left: 108, top: 756, width: 30, height: 30 }} />
        </section>

        <Img alt="品牌海报 1" src={assets.fullBleed54} className="absolute left-0 top-[13071px] h-[900px] w-[1600px] object-cover" />
        <Img alt="品牌海报 2" src={assets.fullBleed53} className="absolute left-0 top-[13971px] h-[900px] w-[1600px] object-cover" />
        <Img alt="品牌海报 3" src={assets.fullBleed19} className="absolute left-0 top-[14871px] h-[900px] w-[1600px] object-cover" />

        <FooterCard
          href={footerCards[0].href}
          left={69}
          overlayText={footerCards[0].overlayText}
          borderWidth={footerCards[0].borderWidth}
        >
          <div
            className="absolute overflow-hidden"
            style={{
              left: 311,
              top: 13,
              width: 341,
              height: 367,
              maskImage: `url(${assets.footerLeftMask})`,
              maskPosition: "-311px -13px",
              maskRepeat: "no-repeat",
              maskSize: "715px 402px",
              WebkitMaskImage: `url(${assets.footerLeftMask})`,
              WebkitMaskPosition: "-311px -13px",
              WebkitMaskRepeat: "no-repeat",
              WebkitMaskSize: "715px 402px",
            }}
          >
            <Img
              alt="周大福预览手机"
              src={assets.footerLeftPreview}
              className="absolute max-w-none"
              style={{ left: "-21.01%", top: "-28.61%", width: "140.09%", height: "148.36%" }}
            />
          </div>
          <Img alt="周大福标识" src={assets.footerLeftLogo} className="absolute object-contain" style={{ left: 117, top: 150, width: 133, height: 56.53 }} />
        </FooterCard>

        <FooterCard
          href={footerCards[1].href}
          left={816}
          overlayText={footerCards[1].overlayText}
          borderWidth={footerCards[1].borderWidth}
        >
          <div className="absolute left-[36px] top-[143px] h-[288px] w-[512px] overflow-hidden rounded-[8px] border border-[#E2E8F0]">
            <Img alt="分拣系统预览A" src={assets.footerRightPreviewBV2} className="h-full w-full object-cover" />
          </div>
          <div className="absolute left-[164px] top-[111px] h-[288px] w-[512px] overflow-hidden rounded-[8px] border border-[#E2E8F0]">
            <Img alt="分拣系统预览B" src={assets.footerRightPreviewAV2} className="h-full w-full object-cover" />
          </div>
          <AbsoluteText className="font-tencent text-black" style={{ left: 210, top: 17, fontSize: 32.89, lineHeight: "49px", fontWeight: 700 }}>
            蔬东坡智能分拣系统
          </AbsoluteText>
          <Img alt="Codex 图标" src={assets.footerRightCodexV2} className="absolute object-contain" style={{ left: 324, top: 74, width: 18.26, height: 18.57 }} />
          <Img alt="Figma 图标" src={assets.footerRightFigmaV2} className="absolute object-contain" style={{ left: 302, top: 74, width: 18.95, height: 18.95 }} />
          <Img alt="Github 图标" src={assets.footerRightGithubV2} className="absolute object-contain" style={{ left: 347, top: 73, width: 18.95, height: 18.95 }} />
        </FooterCard>

        <footer className="absolute left-0 top-[16313px] h-[127px] w-[1600px] bg-white">
          <div
            className="absolute left-[320px] top-[28px] h-[57px] w-[960px] border-t"
            style={{ borderColor: "rgba(7,193,96,0.16)" }}
          >
            <p
              className="absolute left-0 top-[24px]"
              style={{
                fontFamily: '"Space Grotesk",sans-serif',
                fontSize: 32,
                lineHeight: "32px",
                fontWeight: 700,
                letterSpacing: "-1.28px",
                color: "#647067",
              }}
            >
              ABBIE.
            </p>
            <a
              href="/#works"
              className="absolute font-ibm-mono text-[#647067] transition-opacity hover:opacity-70"
              style={{
                right: 0,
                top: 31.5,
                fontSize: 11.2,
                lineHeight: "18px",
                letterSpacing: "3.584px",
                textTransform: "uppercase",
                fontWeight: 600,
              }}
            >
              Back To Works 👉
            </a>
          </div>
        </footer>
      </div>
    </CasePageShell>
  );
}
