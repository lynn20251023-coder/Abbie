import type { CSSProperties } from "react";
import { CasePageShell } from "./CasePageScaffold";

const navItems = [
  { label: "首页", href: "#home" },
  { label: "改版背景", href: "#background" },
  { label: "设计目标", href: "#goals" },
  { label: "首页优化", href: "#home-optimization" },
  { label: "品牌入口", href: "#brand-entry" },
  { label: "品牌集合页", href: "#brand-collection" },
  { label: "购物车", href: "#cart" },
  { label: "活动视觉", href: "#visual" },
] as const;

const slices = [
  {
    id: "home",
    src: "/case-assets/zhoudafu/group-28620.png",
    alt: "周大福小程序改版首页介绍与项目信息",
    left: 128,
    top: 111,
    width: 1390,
    height: 984.5,
  },
  {
    id: "background",
    src: "/case-assets/zhoudafu/group-28621.png",
    alt: "周大福小程序改版背景与当前问题",
    left: 75,
    top: 1254,
    width: 1453,
    height: 821,
  },
  {
    id: "analysis",
    src: "/case-assets/zhoudafu/section-23.png",
    alt: "商城购物主力分析",
    left: 0,
    top: 2196,
    width: 1600,
    height: 900,
  },
  {
    id: "goals",
    src: "/case-assets/zhoudafu/group-28622.png",
    alt: "周大福小程序改版设计目标",
    left: 76,
    top: 3179,
    width: 1444,
    height: 783,
  },
  {
    id: "home-optimization",
    src: "/case-assets/zhoudafu/group-28623.png",
    alt: "周大福小程序首页优化策略",
    left: 76,
    top: 4116,
    width: 1512,
    height: 828,
  },
  {
    id: "home-display",
    src: "/case-assets/zhoudafu/group-28606.png",
    alt: "周大福小程序首页展示",
    left: 90,
    top: 5038,
    width: 1478,
    height: 1006,
  },
  {
    id: "brand-entry",
    src: "/case-assets/zhoudafu/group-28624.png",
    alt: "周大福小程序旗下品牌入口",
    left: 67,
    top: 6171,
    width: 1535.5,
    height: 929,
  },
  {
    id: "home-brand-entry",
    src: "/case-assets/zhoudafu/group-28608.png",
    alt: "周大福小程序首页品牌入口方案",
    left: 62,
    top: 7019,
    width: 1423.5,
    height: 949,
  },
  {
    id: "brand-collection",
    src: "/case-assets/zhoudafu/group-28609.png",
    alt: "周大福小程序品牌集合页",
    left: 62,
    top: 8118,
    width: 1479,
    height: 1032,
  },
  {
    id: "cart",
    src: "/case-assets/zhoudafu/group-28610.png",
    alt: "周大福小程序我的购物车",
    left: 62,
    top: 9162,
    width: 1483.5,
    height: 1043,
  },
  {
    id: "visual",
    src: "/case-assets/zhoudafu/section-56.png",
    alt: "周大福女王节主推产品视觉",
    left: 0,
    top: 10264,
    width: 1600,
    height: 2208,
  },
] as const;

function Anchor({ id, top }: { id: string; top: number }) {
  return <div id={id} className="absolute left-0 h-px w-px" style={{ top }} />;
}

function SliceImage({
  src,
  alt,
  left,
  top,
  width,
  height,
  style,
}: {
  src: string;
  alt: string;
  left: number;
  top: number;
  width: number;
  height: number;
  style?: CSSProperties;
}) {
  return (
    <img
      src={src}
      alt={alt}
      className="absolute block select-none"
      draggable={false}
      style={{
        left,
        top,
        width,
        height,
        maxWidth: "none",
        ...style,
      }}
    />
  );
}

function FooterProjectCard({
  left,
  image,
  href,
  alt,
}: {
  left: number;
  image: string;
  href: string;
  alt: string;
}) {
  return (
    <a
      href={href}
      className="absolute block overflow-hidden rounded-[16px] transition-opacity hover:opacity-95"
      style={{
        left,
        top: 12542,
        width: 715,
        height: 402,
      }}
    >
      <img
        src={image}
        alt={alt}
        className="absolute inset-0 h-full w-full object-cover"
        draggable={false}
      />
    </a>
  );
}

export default function ChowTaiFookCasePage() {
  return (
    <CasePageShell background="#FFFFFF">
      <div className="relative h-[13141px] w-[1600px] overflow-hidden bg-white text-[#111111]">
        <header className="absolute left-[128px] top-8 z-20 flex h-[19px] w-[1344px] items-center justify-between">
          <a
            href="/#works"
            className="font-noto-sc text-[11.2px] leading-[18px] tracking-[3.584px] text-[#647067] uppercase transition-opacity hover:opacity-70"
          >
            ← Back To Works
          </a>
          <nav className="flex h-[19px] items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-noto-sc text-[11.2px] leading-[18px] tracking-[3.584px] text-[#647067] uppercase transition-opacity hover:opacity-70"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </header>

        {slices.map((slice) => (
          <div key={slice.src}>
            <Anchor id={slice.id} top={slice.top} />
            <SliceImage {...slice} />
          </div>
        ))}

        <FooterProjectCard
          left={69}
          href="/?case=wechatpay"
          image="/case-assets/zhoudafu/footer-wechatpay.png"
          alt="WeChat Pay HK"
        />
        <FooterProjectCard
          left={816}
          href="/?case=sorting"
          image="/case-assets/zhoudafu/footer-sorting.png"
          alt="蔬东坡智能分拣系统"
        />

        <footer className="absolute left-0 top-[13014px] h-[127px] w-[1600px] bg-white px-80 pt-7">
          <div className="flex h-[57px] w-[960px] items-start justify-between border-t border-[rgba(144,91,64,0.16)] pt-6">
            <p className="font-['Space_Grotesk'] text-[32px] font-bold leading-8 tracking-[-1.28px] text-[#905B40]">
              ABBIE.
            </p>
            <a
              href="/#works"
              className="mono-detail text-[11.2px] font-semibold leading-[18px] tracking-[3.584px] text-[#905B40] uppercase transition-opacity hover:opacity-70"
            >
              Back To Works 👉
            </a>
          </div>
        </footer>
      </div>
    </CasePageShell>
  );
}
