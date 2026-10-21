// Build the standalone EV-intervention pathway map v0.2
// data/ev-intervention-v0.2.json + docs/ev-v0.2/ev-studies-v02.json -> docs/ev-intervention-v0.2.html (+ stable alias docs/ev-intervention.html)
import { readFileSync, writeFileSync } from 'node:fs';
const src = JSON.parse(readFileSync(new URL('../data/ev-intervention-v0.2.json', import.meta.url)));
const studies = JSON.parse(readFileSync(new URL('../docs/ev-v0.2/ev-studies-v02.json', import.meta.url)));
// group edges by source>target
const RANK = { A: 0, B: 1, C: 2 };
const m = new Map();
for (const e of src.edges) {
  const key = `${e.source}>${e.target}`;
  const rec = { id: e.id, grade: e.grade, kind: e.kind, sign: e.sign, label: e.label, refs: e.refs, model: e.model, doseText: e.doseText, dose: e.dose, time: e.time, method: e.method, functional: e.functional, limitation: e.limitation };
  if (!m.has(key)) m.set(key, { key, source: e.source, target: e.target, items: [rec] });
  else m.get(key).items.push(rec);
}
const edges = [...m.values()].map(g => {
  g.items.sort((a, b) => RANK[a.grade] - RANK[b.grade]);
  g.grade = g.items[0].grade; g.inhibit = g.items.some(i => i.sign === '-'); g.ids = g.items.map(i => i.id); return g;
});
const sources = Object.fromEntries(src.sources.map(s => [s.id, s]));
// sanity: every node is linked, every ref has a source card, every edge endpoint exists
const ids = new Set(src.nodes.map(n => n.id));
for (const e of src.edges) {
  if (!ids.has(e.source) || !ids.has(e.target)) throw new Error(`dangling edge ${e.id}`);
  for (const r of e.refs) if (!sources[r]) throw new Error(`missing source ${r} on ${e.id}`);
}
const linked = new Set(src.edges.flatMap(e => [e.source, e.target]));
const orphans = src.nodes.filter(n => !linked.has(n.id)).map(n => n.id);
if (orphans.length) throw new Error(`orphan nodes: ${orphans}`);
// hero stats are derived from the data, never typed by hand
const count = g => studies.filter(s => s.grade === g).length;
const stats = { included: studies.length, A: count('A'), B: count('B'), C: count('C'), sources: Object.keys(sources).length, nodes: src.nodes.length, relations: src.edges.length, drawn: edges.length };
const versionLabel = src.version.replace(/^ev-/, '');
const DATA = { version: src.version, versionLabel, generated: src.generated, title: src.title, changelog: src.changelog, stats, lanes: src.lanes, cols: src.cols, rows: src.rows, scaffoldTop: src.scaffoldTop, nodes: src.nodes, edges, sources };
const tpl = readFileSync(new URL('./pathway-template-ev-v02.html', import.meta.url), 'utf8');
const html = tpl.replace('/*__DATA__*/null', JSON.stringify(DATA).replace(/</g, '\\u003c'));
writeFileSync(new URL('../docs/ev-intervention-v0.2.html', import.meta.url), html);
writeFileSync(new URL('../docs/ev-intervention.html', import.meta.url), html);
console.log(`EV map ${versionLabel}: ${JSON.stringify(stats)}`);
