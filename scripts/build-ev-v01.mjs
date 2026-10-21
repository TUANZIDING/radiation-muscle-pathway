// Build the standalone EV-intervention pathway map from data/ev-intervention-v0.1.json -> docs/ev-intervention-v0.1.html
import { readFileSync, writeFileSync } from 'node:fs';
const src = JSON.parse(readFileSync(new URL('../data/ev-intervention-v0.1.json', import.meta.url)));
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
const DATA = { version: src.version, generated: src.generated, title: src.title, lanes: src.lanes, cols: src.cols, rows: src.rows, scaffoldTop: src.scaffoldTop, nodes: src.nodes, edges, sources };
const tpl = readFileSync(new URL('./pathway-template-ev.html', import.meta.url), 'utf8');
const html = tpl.replace('/*__DATA__*/null', JSON.stringify(DATA).replace(/</g, '\\u003c'));
writeFileSync(new URL('../docs/ev-intervention-v0.1.html', import.meta.url), html);
console.log(`EV map: ${DATA.nodes.length} nodes, ${edges.length} drawn edges / ${edges.reduce((a,g)=>a+g.items.length,0)} relations, ${Object.keys(sources).length} sources`);
