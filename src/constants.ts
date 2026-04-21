export const PERSONAL_INFO = {
  name: "Abbie",
  role: "UI/UX 设计师",
  experience: "5年经验",
  email: "linabbie@163.com",
  phone: "18576406631",
  wechat: "Abbie0-5",
  summary:
    "具备5年 B端 SaaS、支付系统及小程序增长场景经验。熟练运用 Figma + AI 工作流，擅长 AIGC 视觉资产生产与复杂场景设计。致力于通过清晰的界面表达和规范化设计，推动高质量方案落地。",
  portfolioPdfName: "个人网站作品集",
  portfolioPdfHref: "/#works",
  demoLabel: "Figma*AI demo html",
  demoHref: "https://figma-cursor-collab.vercel.app/",
};

export type ProjectMediaKind = "collage" | "stack" | "phone";
export type ProjectTitleVariant = "wide" | "compact";
export type ProjectDetailKind = "ai" | "pdf";

export interface Project {
  id: string;
  sequence: string;
  detailSlug: string;
  detailHref: string;
  detailKind: ProjectDetailKind;
  title: string;
  titleLines: string[];
  category: string;
  description: string;
  detailSummary: string;
  resourceHref?: string;
  resourceLabel?: string;
  resourceExternal?: boolean;
  coverImage?: string;
  viewerHeight?: number;
  tags: string[];
  titleVariant: ProjectTitleVariant;
  mediaKind: ProjectMediaKind;
  images: string[];
  icons?: string[];
  casePages?: string[];
}

function buildCasePages(slug: string, count: number) {
  return Array.from(
    { length: count },
    (_, index) => `/case-studies/${slug}/page-${String(index + 1).padStart(2, "0")}.webp`
  );
}

export const PROJECTS: Project[] = [
  {
    id: "ai-exploration",
    sequence: "00",
    detailSlug: "ai",
    detailHref: "/?case=ai",
    detailKind: "ai",
    title: "对于AI的持续探索...",
    titleLines: ["对于AI的", "持续探索..."],
    category: "AI",
    description:
      "从 2023 到 2026 持续对 AI 的关注、探索与实践，围绕设计、原型和代码协作不断验证新的工作流与表达方式。",
    detailSummary:
      "把 AI 从灵感工具逐步推进成设计工作流伙伴，持续验证从图像生成、原型生成到本地 Agent 协作的真实落地方式。",
    resourceHref: PERSONAL_INFO.demoHref,
    resourceLabel: "打开外部 Demo",
    resourceExternal: true,
    coverImage: "/case-studies/ai-cover.webp",
    tags: ["生成式AI", "Vibe Coding"],
    titleVariant: "wide",
    mediaKind: "collage",
    images: ["/case-assets/home-works/ai-preview.png"],
  },
  {
    id: "dongpo-sorting",
    sequence: "01",
    detailSlug: "sorting",
    detailHref: "/?case=sorting",
    detailKind: "pdf",
    title: "蔬东坡智能分拣系统",
    titleLines: ["蔬东坡", "智能分拣系统"],
    category: "B端 SaaS / 体验设计",
    description:
      "围绕生鲜智能分拣 SaaS 核心作业场景，优化触屏交互、信息层级与状态反馈，提升一线操作效率。并将 AI 应用于视觉资产生产与设计交付协作。",
    detailSummary:
      "面向生鲜现场作业链路，重做分拣任务、异常反馈与硬件协同信息表达，兼顾一线效率与系统配置能力。",
    resourceHref: "/zpj/%E6%99%BA%E8%83%BD%E5%88%86%E6%8B%A3%E7%B3%BB%E7%BB%9F.pdf",
    resourceLabel: "打开原始案例 PDF",
    coverImage: "/case-studies/sorting-cover.webp",
    viewerHeight: 4200,
    tags: ["SaaS", "B端", "交互设计"],
    titleVariant: "compact",
    mediaKind: "stack",
    casePages: buildCasePages("sorting", 12),
    images: ["/case-assets/home-works/sorting-preview.webp"],
  },
  {
    id: "wechat-pay-hk",
    sequence: "02",
    detailSlug: "wechatpay",
    detailHref: "/?case=wechatpay",
    detailKind: "pdf",
    title: "WeChat Pay HK 体验优化",
    titleLines: ["WeChat Pay HK", "体验优化"],
    category: "金融科技 / UX 优化",
    description:
      "聚焦香港本地用户的支付体验优化，围绕核心链路、本地化习惯与增长路径进行设计调整，在提升操作流畅度的同时增强产品的安全感与信任感。",
    detailSummary:
      "围绕本地缴费、绑卡与增长链路，兼顾金融产品信任感、流程效率和香港用户的使用语境做系统化优化。",
    resourceHref: "/zpj/WeChat%20Pay%20HK.pdf",
    resourceLabel: "打开原始案例 PDF",
    coverImage: "/case-studies/wechatpay-cover.webp",
    viewerHeight: 5200,
    tags: ["UI/UX", "金融科技", "流程优化"],
    titleVariant: "compact",
    mediaKind: "phone",
    casePages: buildCasePages("wechatpay", 21),
    images: ["/case-assets/home-works/wechatpay-preview.webp"],
  },
  {
    id: "chow-tai-fook",
    sequence: "03",
    detailSlug: "chowtaifook",
    detailHref: "/?case=chowtaifook",
    detailKind: "pdf",
    title: "周大福官方小程序改版",
    titleLines: ["周大福", "官方小程序改版"],
    category: "电商 / 体验升级",
    description:
      "针对高客单价珠宝类商品决策成本高的特点，优化品牌入口与详情页信息重构，在保持品牌调性的同时降低用户决策疑虑，提升下单转化率。",
    detailSummary:
      "从品牌集合页到详情与购物车链路，重构高决策成本珠宝商品的信息路径，在品牌质感和转化效率之间找到平衡。",
    resourceHref: "/zpj/chowtaifook.pdf",
    resourceLabel: "打开原始案例 PDF",
    coverImage: "/case-studies/chowtaifook-cover.webp",
    viewerHeight: 6400,
    tags: ["电商", "改版设计", "品牌视觉"],
    titleVariant: "wide",
    mediaKind: "phone",
    casePages: buildCasePages("chowtaifook", 14),
    images: ["/case-assets/home-works/chowtaifook-preview.webp"],
  },
];

export const EXPERIENCE = [
  {
    company: "汇付信息科技（深圳）有限公司",
    role: "UI/UX 设计师",
    period: "2023.06 — 至今",
    description:
      "负责生鲜智能分拣 SaaS 系统核心场景体验设计。搭建设计侧 AI 工作流，输出标准化 3D 视觉资产，提升设计协作效率与业务识别准确率。",
  },
  {
    company: "腾讯科技（WeChat Pay HK 项目组）",
    role: "UI/UX 设计师",
    period: "2022.04 — 2023.05",
    description:
      "主导电讯缴费与绑卡链路优化。参与香港钱包全站设计规范维护，适配多语种逻辑，沉淀 30+ 金融核心组件，确保跨团队视觉一致性。",
  },
  {
    company: "周大福在线传媒有限公司",
    role: "UI 设计师",
    period: "2020.11 — 2022.04",
    description:
      "负责官方小程序体验升级。平衡品牌与转化，通过优化详情页信息层级与品牌集合页设计，降低用户决策疑虑，提升下单转化率。",
  },
];

export const SKILLS = [
  { name: "AI 设计协作", tools: ["Figma + Codex", "AIGC 工作流"] },
  { name: "产品与界面设计", tools: ["Figma", "Photoshop", "Illustrator"] },
  { name: "动效与视觉表达", tools: ["After Effects", "Lottie"] },
  { name: "AI 应用实践", tools: ["Midjourney", "Gemini", "Claude"] },
];

export const AI_CASE_TIMELINE = [
  {
    year: "2023 爆发年",
    label: "AI Exploration / 01",
    title: "从“惊艳感”出发，建立自己的生成式试验场",
    description:
      "从 Midjourney 与 Stable Diffusion 开始，把 AI 当作一块高频实验田，持续测试审美、稳定性和批量化产出的边界。",
    highlights: [
      "持续试验人物一致性、风格控制和高质量图像产出。",
      "把 AI 生成能力用于内容创作与个人表达，验证真实传播反馈。",
      "开始记录哪些能力能真正迁移到设计工作流中。",
    ],
  },
  {
    year: "2024 控制年",
    label: "AI Workflow / 02",
    title: "从单次生成走向可控、可编辑、可接入工作流",
    description:
      "这一年关注点从“能不能生成”转向“能不能稳定地协助设计”。重点观察 Figma AI、Runway、DomoAI 与 GPT 图像能力的实际可用性。",
    highlights: [
      "把视觉搜索、资源搜索、文案填充和首稿生成纳入真实设计动作。",
      "开始评估 AI 在视频、图像编辑和多轮修改中的协作价值。",
      "建立更明确的判断标准：效率提升、可控性和可复用性。",
    ],
  },
  {
    year: "2025 多模态融合年",
    label: "Multimodal / 03",
    title: "AI 开始理解上下文，进入原型与产品表达层",
    description:
      "多模态能力成熟以后，AI 不再只是生成资产，而是逐渐参与原型、交互想法和产品表达方式的构建。",
    highlights: [
      "关注 Figma Make、Gemini、Nanobanana、veo3 等更强的上下文理解能力。",
      "验证 AI 从静态素材走向动态演示、原型和交互表达的可行性。",
      "开始尝试让对话式设计工具参与早期方向探索。",
    ],
  },
  {
    year: "2026 设计工作流好伙伴",
    label: "Agent Collaboration / 04",
    title: "把 AI 正式纳入 UI 设计协作链路",
    description:
      "AI 被视作每天都会调用的设计助手，承担资料检索、结构整理、文案生成、原型构思到代码协作的一部分工作。",
    highlights: [
      "把本地 Agent 与 Figma 协作纳入真实 UI/UX 设计实践。",
      "尝试 prompt-to-app、UI 生成、代码协作与局部实现联动。",
      "把 AI 从灵感工具升级为可重复调用的工作流节点。",
    ],
  },
];
