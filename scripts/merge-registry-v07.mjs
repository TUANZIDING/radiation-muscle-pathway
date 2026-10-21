// Merge the audited v0.5 registry with the v0.7 systematic-screen additions -> data/atlas-v0.7.json.
// The v0.5 registry is never edited; additions only append nodes, edges, sources and one view.
import { readFileSync, writeFileSync } from 'node:fs';
const base = JSON.parse(readFileSync(new URL('../data/atlas-v0.5.json', import.meta.url)));
const add = JSON.parse(readFileSync(new URL('../data/additions-v0.7.json', import.meta.url)));
const ids = a => new Set(a.map(x => x.id));
for (const k of ['nodes', 'edges', 'sources']) {
  const have = ids(base[k]);
  for (const x of add[k]) if (have.has(x.id)) throw new Error(`duplicate ${k} id ${x.id}`);
}
const nodeIds = ids([...base.nodes, ...add.nodes]);
const srcIds = ids([...base.sources, ...add.sources]);
for (const e of add.edges) {
  if (!nodeIds.has(e.source) || !nodeIds.has(e.target)) throw new Error(`edge ${e.id} endpoint missing`);
  for (const r of e.refs) if (!srcIds.has(r)) throw new Error(`edge ${e.id} ref ${r} missing`);
}
const out = { ...base, version: 'v0.7', generated: add.generated, screen: add.screen,
  views: [...base.views, add.view], nodes: [...base.nodes, ...add.nodes], edges: [...base.edges, ...add.edges], sources: [...base.sources, ...add.sources] };
writeFileSync(new URL('../data/atlas-v0.7.json', import.meta.url), JSON.stringify(out, null, 1));
console.log(`atlas v0.7: +${add.nodes.length} nodes, +${add.edges.length} edges, +${add.sources.length} sources`);
