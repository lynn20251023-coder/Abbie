#!/usr/bin/env node
/**
 * One-shot image optimization script for Abbie's Portfolio.
 *
 * Walks public/ looking for JPG/PNG assets above a size threshold and
 * emits .webp siblings at quality 82. Leaves originals on disk so
 * references keep working if anything still imports them; callers
 * should update code to point at .webp.
 *
 * Usage:
 *   node scripts/convert-to-webp.mjs [--threshold=400] [--quality=82] [--dry]
 */
import { readdir, stat, writeFile } from "node:fs/promises";
import { join, relative, extname } from "node:path";
import sharp from "sharp";

const ROOT = new URL("../public", import.meta.url).pathname;
const args = Object.fromEntries(
  process.argv.slice(2).map((a) => {
    const [k, v] = a.replace(/^--/, "").split("=");
    return [k, v ?? true];
  }),
);
const threshold = Number(args.threshold ?? 400) * 1024; // bytes
const quality = Number(args.quality ?? 82);
const dry = Boolean(args.dry);

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const p = join(dir, entry.name);
    if (entry.isDirectory()) files.push(...(await walk(p)));
    else files.push(p);
  }
  return files;
}

const all = await walk(ROOT);
const targets = [];
for (const f of all) {
  const ext = extname(f).toLowerCase();
  if (![".jpg", ".jpeg", ".png"].includes(ext)) continue;
  const s = await stat(f);
  if (s.size < threshold) continue;
  targets.push({ path: f, size: s.size });
}
targets.sort((a, b) => b.size - a.size);

let savedBytes = 0;
let convertedCount = 0;
const manifest = [];

for (const { path, size } of targets) {
  const webpPath = path.replace(/\.(jpe?g|png)$/i, ".webp");
  if (dry) {
    console.log(`[dry] ${relative(ROOT, path)} (${(size / 1024).toFixed(0)}KB)`);
    continue;
  }
  try {
    const img = sharp(path);
    const meta = await img.metadata();
    // For very wide source images (>2400px), cap at 2400 for web delivery.
    const resize = meta.width && meta.width > 2400 ? { width: 2400 } : undefined;
    let pipeline = sharp(path);
    if (resize) pipeline = pipeline.resize(resize);
    const buf = await pipeline.webp({ quality }).toBuffer();
    await writeFile(webpPath, buf);
    const ratio = (1 - buf.length / size) * 100;
    savedBytes += size - buf.length;
    convertedCount++;
    manifest.push({
      from: relative(ROOT, path),
      to: relative(ROOT, webpPath),
      before: size,
      after: buf.length,
      ratio: Number(ratio.toFixed(1)),
    });
    console.log(
      `  ✔ ${relative(ROOT, path)}  ${(size / 1024).toFixed(0)}KB → ${(buf.length / 1024).toFixed(0)}KB  (-${ratio.toFixed(1)}%)`,
    );
  } catch (err) {
    console.warn(`  ✘ ${relative(ROOT, path)}: ${err.message}`);
  }
}

if (!dry) {
  await writeFile(
    new URL("../scripts/webp-manifest.json", import.meta.url),
    JSON.stringify({ generatedAt: new Date().toISOString(), quality, threshold, manifest }, null, 2),
  );
}
console.log(
  `\nConverted ${convertedCount} files, saved ${(savedBytes / 1024 / 1024).toFixed(2)} MB.${dry ? " (dry run)" : ""}`,
);
