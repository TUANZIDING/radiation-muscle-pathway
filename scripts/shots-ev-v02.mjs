// Render README/gallery screenshots from the real docs/ev-intervention-v0.2.html (light theme, DPR 2)
// Run from repo root: CHROMIUM_PATH=/usr/bin/chromium node scripts/shots-ev-v02.mjs  (then pngquant the PNGs)
import { chromium } from 'playwright';
const url = new URL('../docs/ev-intervention-v0.2.html', import.meta.url).href;
const out = f => new URL(`../docs/ev-v0.2/${f}`, import.meta.url).pathname;
const b = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH || undefined });
const setView = (p, k, tx, ty) => p.evaluate(([k, tx, ty]) => { S.k = k; S.tx = tx; S.ty = ty; applyTransform(); }, [k, tx, ty]);
const geom = p => p.evaluate(() => ({ W, H, PADY, RH, lanes: DATA.lanes }));
const noHint = p => p.addStyleTag({ content: '.hint{display:none!important}' });

// 1) full map (poster mode: header + whole map, no side panel)
{
  const p = await b.newPage({ viewport: { width: 900, height: 1000 }, deviceScaleFactor: 2 });
  await p.goto(url + '?poster'); await p.waitForTimeout(400);
  const g = await geom(p);
  const w = 900, k = (w - 24) / g.W, h = Math.ceil(64 + (g.H - g.PADY + 8) * k + 4 + 16);
  await p.setViewportSize({ width: w, height: h }); await p.waitForTimeout(200);
  await setView(p, k, 12, 4); await p.waitForTimeout(300);
  await p.screenshot({ path: out('hero-ev-v0.2.png') });
  await p.close();
}
// 2) desktop with a node selected: radiation lane readable, inspector filled
{
  const p = await b.newPage({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 2 });
  await p.goto(url); await p.waitForTimeout(400);
  await noHint(p); await setView(p, 0.64, -6, -8); await p.waitForTimeout(200);
  await p.locator('.node[data-node="mpcEV"]').click(); await p.waitForTimeout(400);
  await p.screenshot({ path: out('inspector-ev-v0.2.png') });
  await p.close();
}
// 3) mobile 390 px with a node selected
{
  const p = await b.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
  await p.goto(url); await p.waitForTimeout(500);
  await p.locator('.node[data-node="mpcEV"]').click(); await p.waitForTimeout(400);
  await p.screenshot({ path: out('mobile-ev-v0.2.png') });
  await p.close();
}
// 4) one mechanism lane up close: TGF-β/SMAD · FAP lane with the new FAP-EV miR-206 chain
{
  const p = await b.newPage({ viewport: { width: 1500, height: 900 }, deviceScaleFactor: 2 });
  await p.goto(url + '?poster'); await p.waitForTimeout(400);
  const g = await geom(p); const L = g.lanes.find(l => l.id === 'fibro');
  const k = 0.86, top = g.PADY + L.r0 * g.RH - 24 - 5, bot = g.PADY + L.r1 * g.RH - 32 + 5;
  const vw = Math.ceil((g.W - 40) * k), vh = Math.ceil((bot - top) * k);
  await p.setViewportSize({ width: vw, height: vh + 64 }); await p.waitForTimeout(200);
  await setView(p, k, -20 * k, -top * k); await p.waitForTimeout(300);
  await p.screenshot({ path: out('lane-ev-v0.2.png'), clip: { x: 0, y: 64, width: vw, height: vh } });
  await p.close();
}
await b.close();
console.log('shots written to docs/ev-v0.2/');
