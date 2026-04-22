# Phase 2 — Vibe Coding Showcase

Phase 1 fixed the foundation (broken Sorting page, 108MB → 25MB assets, responsive
shell, design tokens, new `CaseViewer`). Phase 2 is where the portfolio becomes a
real demonstration of vibe-coded design engineering.

## Goal

Shift the portfolio's "wow" from "look at these Figma designs" to "look at how the
site *presents* these designs." The case content stays as high-fidelity Figma
exports; the shell around them is where the coding capability shows up.

## Components to build

### 1. Annotated Case (highest-value single feature)
Overlay coded annotations on top of Figma page images. Text is real DOM (selectable,
translatable, SEO'd); anchor points are coordinate-positioned over the image.

```tsx
<AnnotatedPage src="/case-studies/wechatpay/page-05.webp">
  <Hotspot x={430} y={820} label="01">
    <Note>
      Local Form 抽象替代传统弹窗 validation — 用户本地化习惯优先。
    </Note>
  </Hotspot>
</AnnotatedPage>
```

Requirements:
- Hotspot dot pulses with the case's signature color
- Click/hover to reveal Note panel
- Notes laid out so they don't clip on narrow viewports (auto-flip to below when
  near right edge)
- Keyboard: Tab through hotspots, Enter to expand, Esc to collapse

Abbie only needs to write 3–5 annotations per case.

### 2. FLIP morph transition — Works grid → Case
When clicking a work card on the home page, the card **morphs** into the case
viewer header (shared element transition via Framer Motion `layoutId`).

### 3. Signature color bleed
Each case has a signature color (already defined in `tokens.css`):
- AI → ink
- Sorting → `#3f8a6f`
- ChowTaiFook → `#a8733a`
- WeChatPay → `#07c160`

Extend so the accent color drives scroll indicators, hover states, and hotspot
color when that case is active. `CaseViewer` already consumes `--case-accent`;
wire the home page Works grid to preview each case's signature as a thin strip.

### 4. Vibe Coding "about this build" strip
Bottom-of-page module explaining *how* the site itself was built:
- Real git commit count (read at build time, baked into a constant)
- Tools used: Figma · Claude Code · Vite · Framer Motion
- Line count per session or similar self-referential detail

Positions the whole site as the capstone portfolio entry.

### 5. Migrate WechatPay + ChowTaiFook to CaseViewer
Both currently use the legacy 1600px absolute-positioned pages (now proportionally
scaled, so mobile works). Once AnnotatedPage is ready, replace the absolute-
positioned pages with CaseViewer + AnnotatedPage for full responsiveness.

## Non-goals for Phase 2
- Real router (keep `?case=xxx` for now)
- Per-section code-drawn Figma replication (AnnotatedPage is enough to signal
  engineering depth without the 10-hours-per-case cost)
- CMS / content editor UI

## Sequencing
1. AnnotatedPage + Hotspot + Note (~1 day)
2. Migrate one case (start with Sorting — already on CaseViewer, cleanest to iterate on)
3. FLIP morph transition
4. Signature color bleed across Works grid
5. "About this build" strip
6. Migrate WechatPay + ChowTaiFook
