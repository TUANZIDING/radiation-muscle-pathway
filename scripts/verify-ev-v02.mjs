// Verify docs/ev-intervention-v0.2.html with real Playwright clicks; writes docs/ev-v0.2/validation-v02.json
// Run from repo root: CHROMIUM_PATH=/usr/bin/chromium node scripts/verify-ev-v02.mjs
import { chromium } from 'playwright';
import { readFileSync, writeFileSync } from 'node:fs';
const url = new URL('../docs/ev-intervention-v0.2.html', import.meta.url).href;
const studies = JSON.parse(readFileSync(new URL('../docs/ev-v0.2/ev-studies-v02.json', import.meta.url)));
const data = JSON.parse(readFileSync(new URL('../data/ev-intervention-v0.2.json', import.meta.url)));
const checks = [];
const ok = (name, pass, detail = '') => { checks.push({ name, pass: !!pass, detail }); console.log(`${pass ? 'PASS' : 'FAIL'}  ${name}${detail ? '  — ' + detail : ''}`); };
const html = readFileSync(new URL('../docs/ev-intervention-v0.2.html', import.meta.url), 'utf8');
ok('stable alias docs/ev-intervention.html equals v0.2', readFileSync(new URL('../docs/ev-intervention.html', import.meta.url), 'utf8') === html);
const cnt = g => studies.filter(s => s.grade === g).length;
ok('study table counts', studies.length === 141 && cnt('A') === 2 && cnt('B') === 120 && cnt('C') === 19, `${studies.length} A${cnt('A')} B${cnt('B')} C${cnt('C')}`);
ok('32754983 included, not excluded', studies.some(s => s.pmid === '32754983') && !readFileSync(new URL('../docs/ev-v0.2/ev-excluded-v02.csv', import.meta.url), 'utf8').includes('32754983'));

const b = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH || undefined });
const errs = [];
const page = await b.newPage({ viewport: { width: 1440, height: 900 } });
page.on('pageerror', e => errs.push(String(e)));
page.on('console', m => { if (m.type() === 'error') errs.push(m.text()); });
await page.goto(url); await page.waitForTimeout(600);
const hdr = await page.locator('#hdrStats').textContent();
ok('header stats derived from data', hdr.includes('141') && hdr.includes('A 2 / B 120 / C 19'), hdr);
ok('map stats line present', (await page.locator('.map-stats').textContent()).includes('141'));
ok('node count', await page.locator('.node').count() === data.nodes.length, String(data.nodes.length));
// real clicks on nodes
async function clickNode(id, expect) {
  await page.locator(`.node[data-node="${id}"]`).click();
  const txt = await page.locator('#inspector').textContent();
  const pass = expect.every(e => txt.includes(e));
  ok(`click node ${id} → inspector shows ${expect.join(', ')}`, pass, pass ? '' : txt.slice(0, 160));
}
await clickNode('mir206', ['PMID 32754983', 'antagomiR']);
await clickNode('esExo', ['PMID 33316945', '多柔比星']);
await clickNode('mpcEV', ['PMID 40835994']);
await clickNode('youngEV', ['PMID 37507448', 'DOI 10.1186/s13287-026-05215-x']);
const doiHref = await page.locator('#inspector a[data-ref="D_scrt05215"]').getAttribute('href');
ok('DOI-only source links to doi.org', doiHref === 'https://doi.org/10.1186/s13287-026-05215-x', doiHref);
// edge click
await page.locator('.edge[data-edge="skpEV>mito"] path.hit').click({ force: true });
ok('click edge skpEV>mito shows both WoS/gap items', (await page.locator('#inspector').textContent()).includes('10.1016/j.cej.2025.163325'));
// A filter (clear the selection first with a real click on empty canvas)
await page.locator('#svg').click({ position: { x: 6, y: 6 } });
ok('click on empty canvas clears selection', (await page.locator('#inspector .empty').count()) === 1);
await page.locator('#fA').click();
const visA = await page.locator('.edge:not(.dim)').count();
const expA = new Set(data.edges.filter(e => e.grade === 'A').map(e => `${e.source}>${e.target}`)).size;
ok('A filter shows only grade-A edges', visA === expA && await page.locator('#fA.on').count() === 1, `${visA} visible / ${expA} expected`);
await page.locator('#fLax').click();
ok('All filter restores edges', await page.locator('.edge:not(.dim)').count() === new Set(data.edges.map(e => `${e.source}>${e.target}`)).size);
// language toggle
await page.locator('#fLang').click();
ok('EN toggle', (await page.locator('#hdrStats').textContent()).includes('141 studies'));
await page.locator('#fLang').click();
// geometry: no overlapping nodes, no edge through a non-endpoint node, no badge on a node, no text overflow
const geo = await page.evaluate(() => {
  const NWv = 192, NHv = 72, out = { nodeOverlap: [], edgeThroughNode: [], badgeOnNode: [], textOverflow: [] };
  const rects = DATA.nodes.map(n => ({ id: n.id, x: 150 + n.c * 232, y: 120 + n.r * 112 }));
  for (let i = 0; i < rects.length; i++) for (let j = i + 1; j < rects.length; j++) { const a = rects[i], c = rects[j]; if (a.x < c.x + NWv + 4 && c.x < a.x + NWv + 4 && a.y < c.y + NHv + 4 && c.y < a.y + NHv + 4) out.nodeOverlap.push(a.id + '/' + c.id); }
  document.querySelectorAll('.edge').forEach(g => {
    const [s, t] = g.dataset.edge.split('>'); const w = g.querySelector('path.wire'); const L = w.getTotalLength();
    for (let k = 1; k < 100; k++) { const pt = w.getPointAtLength(L * k / 100); const hit = rects.find(n => n.id !== s && n.id !== t && pt.x > n.x - 3 && pt.x < n.x + NWv + 3 && pt.y > n.y - 3 && pt.y < n.y + NHv + 3); if (hit) { out.edgeThroughNode.push(g.dataset.edge + ' x ' + hit.id); break; } }
    const bg = g.querySelector('.edge-badge'); const m = bg.getAttribute('transform').match(/translate\(([-\d.]+),([-\d.]+)\)/); const bx = +m[1], by = +m[2], bw = +bg.querySelector('rect').getAttribute('width');
    rects.forEach(n => { if (bx + bw / 2 > n.x && bx - bw / 2 < n.x + NWv && by + 10 > n.y && by - 10 < n.y + NHv) out.badgeOnNode.push(g.dataset.edge + ' on ' + n.id); });
  });
  document.querySelectorAll('.node').forEach(g => { g.querySelectorAll('.tt').forEach(t => { if (t.getComputedTextLength() > NWv - 36) out.textOverflow.push(g.dataset.node); }); const st = g.querySelector('.st'); if (st && st.getComputedTextLength() > NWv - 20) out.textOverflow.push(g.dataset.node + ' sub'); });
  return out;
});
for (const [k, v] of Object.entries(geo)) ok(`layout: ${k} = 0`, v.length === 0, v.slice(0, 5).join('; '));
ok('desktop no horizontal overflow', await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth));
ok('no page errors (desktop)', errs.length === 0, errs.join(' | '));
// mobile 390
const m = await b.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
const merrs = []; m.on('pageerror', e => merrs.push(String(e)));
await m.goto(url); await m.waitForTimeout(600);
ok('390px no horizontal overflow', await m.evaluate(() => document.documentElement.scrollWidth <= innerWidth && document.body.scrollWidth <= innerWidth));
await m.locator('.node[data-node="mpcEV"]').click();
ok('390px real click on node opens inspector', (await m.locator('#inspector').textContent()).includes('40835994'));
ok('no page errors (mobile)', merrs.length === 0, merrs.join(' | '));
await b.close();
const failed = checks.filter(c => !c.pass).length;
writeFileSync(new URL('../docs/ev-v0.2/validation-v02.json', import.meta.url), JSON.stringify({ version: 'ev-v0.2', generated: new Date().toISOString().slice(0, 10), passed: checks.length - failed, failed, pageErrors: errs.concat(merrs), checks }, null, 2));
console.log(`${checks.length - failed}/${checks.length} checks passed`);
process.exit(failed ? 1 : 0);
