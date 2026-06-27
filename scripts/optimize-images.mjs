// Compress & convert media-production photos to web-optimized WebP.
// Usage: drop the original photos into images/production/raw/ then run:
//   npm install   (first time only)
//   npm run optimize
//
// Reads every jpg/jpeg/png/webp in images/production/raw (sorted by name),
// auto-orients, resizes to fit within MAX_W x MAX_H, and writes
// images/production/prod-1.webp, prod-2.webp, ... (order = filename order).

import { readdir, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT    = path.resolve(__dirname, '..');
const RAW_DIR = path.join(ROOT, 'images', 'production', 'raw');
const OUT_DIR = path.join(ROOT, 'images', 'production');

const MAX_W = 720;     // enough for a ~360px slide at 2x
const MAX_H = 1280;    // portrait-friendly cap
const QUALITY = 72;    // visually clean, small files

const kb = b => (b / 1024).toFixed(0) + ' KB';

const run = async () => {
  const entries = (await readdir(RAW_DIR))
    .filter(f => /\.(jpe?g|png|webp)$/i.test(f))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

  if (!entries.length) {
    console.error('No source images found in images/production/raw/');
    console.error('Drop the photos there (name them 1.jpg, 2.jpg, ... to control order) and re-run.');
    process.exit(1);
  }

  let totalIn = 0, totalOut = 0;
  for (let i = 0; i < entries.length; i++) {
    const src = path.join(RAW_DIR, entries[i]);
    const out = path.join(OUT_DIR, `prod-${i + 1}.webp`);
    const inSize = (await stat(src)).size;
    await sharp(src)
      .rotate()
      .resize({ width: MAX_W, height: MAX_H, fit: 'inside', withoutEnlargement: true })
      .webp({ quality: QUALITY })
      .toFile(out);
    const outSize = (await stat(out)).size;
    totalIn += inSize; totalOut += outSize;
    console.log(`${entries[i].padEnd(28)} ${kb(inSize).padStart(8)}  →  prod-${i + 1}.webp ${kb(outSize).padStart(8)}`);
  }
  console.log('─'.repeat(60));
  console.log(`Total: ${kb(totalIn)} → ${kb(totalOut)}  (${entries.length} images)`);
};

run().catch(err => { console.error(err); process.exit(1); });
