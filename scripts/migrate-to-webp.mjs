#!/usr/bin/env node
/**
 * After convert-to-webp.mjs, this rewrites all .jpg/.png references in source
 * files to point at the .webp siblings (only for assets that were actually
 * converted, recorded in scripts/webp-manifest.json), then removes the old
 * JPG/PNG originals via git rm.
 */
import { readFile, writeFile, readdir } from "node:fs/promises";
import { join, extname } from "node:path";
import { execSync } from "node:child_process";

const manifest = JSON.parse(
  await readFile(new URL("./webp-manifest.json", import.meta.url), "utf8"),
);

const map = new Map();
for (const entry of manifest.manifest) {
  // `entry.from` is relative to public/, so the in-code path starts with '/'.
  const fromPath = "/" + entry.from;
  const toPath = "/" + entry.to;
  map.set(fromPath, toPath);
  // Also handle URL-encoded variants (e.g., spaces → %20).
  const enc = fromPath.split("/").map(encodeURIComponent).join("/").replace(/%2F/g, "/");
  if (enc !== fromPath) map.set(enc, toPath.split("/").map(encodeURIComponent).join("/").replace(/%2F/g, "/"));
}

async function walk(dir, acc = []) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.name === "node_modules" || entry.name.startsWith(".")) continue;
    const p = join(dir, entry.name);
    if (entry.isDirectory()) await walk(p, acc);
    else if ([".ts", ".tsx", ".css", ".html"].includes(extname(entry.name))) acc.push(p);
  }
  return acc;
}

const ROOT = new URL("../", import.meta.url).pathname;
const sourceFiles = await walk(ROOT);

let filesEdited = 0;
let replacementsMade = 0;
for (const file of sourceFiles) {
  let src = await readFile(file, "utf8");
  let changed = false;
  for (const [from, to] of map) {
    if (src.includes(from)) {
      const pattern = new RegExp(from.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g");
      const next = src.replace(pattern, to);
      if (next !== src) {
        const count = (src.match(pattern) || []).length;
        replacementsMade += count;
        src = next;
        changed = true;
      }
    }
  }
  if (changed) {
    await writeFile(file, src);
    filesEdited++;
    console.log(`  ✎ ${file.replace(ROOT, "")}`);
  }
}

console.log(`\nRewrote ${replacementsMade} references across ${filesEdited} files.`);

// Remove the converted originals via git rm so the patch is clean.
console.log("\nRemoving converted originals from git + filesystem...");
let removed = 0;
for (const entry of manifest.manifest) {
  try {
    execSync(`git rm "public/${entry.from}"`, { cwd: ROOT, stdio: "pipe" });
    removed++;
  } catch {
    // file may not be tracked; try plain rm
    try {
      execSync(`rm -f "public/${entry.from}"`, { cwd: ROOT, stdio: "pipe" });
    } catch {}
  }
}
console.log(`Removed ${removed} original JPG/PNG files.`);
