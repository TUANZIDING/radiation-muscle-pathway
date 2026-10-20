// Verifies the v0.6 interactive molecular pathway page against the audited registry.
import { readFileSync, writeFileSync } from 'node:fs';
import { chromium } from 'playwright';
const reg = JSON.parse(readFileSync(new URL('../data/atlas-v0.5.json', import.meta.url)));
const html = readFileSync(new URL('../docs/pathway-v0.6.html', import.meta.url), 'utf8');
const checks = []; const ok = (name, cond) => { checks.push({ name, pass: !!cond }); if (!cond) console.error('FAIL', name); };
const data = JSON.parse(html.match(/const DATA=(\{.*?\});\n/s)[1]);
const regIds = reg.edges.filter(e => e.view !== 'overview' && e.grade !== 'N').map(e => e.id).sort();
const pageIds = data.edges.flatMap(g => g.items.map(i => i.id)).sort();
ok('every module evidence edge appears exactly once', JSON.stringify(regIds) === JSON.stringify(pageIds));
for (const g of data.edges) for (const i of g.items) {
  const r = reg.edges.find(e => e.id === i.id);
  ok(`${i.id} grade unchanged`, r.grade === i.grade);
}
const scaf = new Set(data.nodes.filter(n => n.status === 'scaffold').map(n => n.id));
ok('scaffold nodes carry no edges', data.edges.every(g => !scaf.has(g.source) && !scaf.has(g.target)));
ok('excluded A08/A10 absent', !pageIds.includes('A08') && !pageIds.includes('A10'));
ok('excluded relations X01–X08 carried', ['X01','X02','X03','X04','X05','X06','X07','X08'].every(x => data.excluded.some(e => e.id === x)));
ok('docs/index.html is the v0.6 page', readFileSync(new URL('../docs/index.html', import.meta.url), 'utf8') === html);
const exe = process.env.CHROMIUM_PATH || undefined;
const browser = await chromium.launch(exe ? { executablePath: exe } : {});
for (const [w, h] of [[1680, 1000], [390, 844], [844, 390]]) {
  const page = await browser.newPage({ viewport: { width: w, height: h } });
  const errs = []; page.on('pageerror', e => errs.push(e.message));
  await page.goto(new URL('../docs/pathway-v0.6.html', import.meta.url).href); await page.waitForTimeout(500);
  ok(`${w}x${h} renders all nodes`, await page.locator('.node').count() === data.nodes.length);
  ok(`${w}x${h} renders all edges`, await page.locator('.edge').count() === data.edges.length);
  ok(`${w}x${h} no horizontal overflow`, await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1));
  // real mouse clicks (not synthetic events): node, then edge badge
  await page.locator('.node[data-node="P53"] .body').click();
  const ntxt = await page.locator('#inspector').innerText();
  ok(`${w}x${h} real click on node opens evidence with PubMed link`, ntxt.includes('p53') && await page.locator('#inspector a[href*="pubmed"]').count() > 0);
  await page.locator('.edge[data-edge="ev-srm>ev-collagen"] .edge-badge').click();
  const txt = await page.locator('#inspector').innerText();
  ok(`${w}x${h} real click on edge shows E04 evidence, boundary and PubMed link`, txt.includes('E04') && txt.includes('肿瘤') && txt.includes('PMID 40541182'));
  await page.click('#fLang'); await page.waitForTimeout(200);
  ok(`${w}x${h} English toggle`, (await page.locator('header b').innerText()).startsWith('Radiation'));
  const box = await page.locator('#svg').boundingBox(); await page.mouse.click(box.x + 8, box.y + 8);
  ok(`${w}x${h} background click clears selection`, (await page.locator('#inspector .empty').count()) === 1);
  await page.click('#fA'); await page.waitForTimeout(200);
  ok(`${w}x${h} A-only filter dims non-A edges`, await page.locator('.edge.dim').count() === data.edges.filter(g => g.grade !== 'A').length);
  ok(`${w}x${h} no page errors`, errs.length === 0);
  await page.close();
}
await browser.close();
writeFileSync(new URL('../docs/v0.6/validation.json', import.meta.url), JSON.stringify({ version: 'v0.6', checks }, null, 2));
const failed = checks.filter(c => !c.pass);
if (failed.length) { console.error(`${failed.length} checks failed`); process.exit(1); }
console.log(`v0.6 pathway verification passed: ${checks.length} checks.`);
