// Build a self-contained interactive molecular pathway map from data/atlas-v0.5.json.
// Every node, edge, grade, dose and reference comes from the audited registry; nothing is invented here.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';

const reg = JSON.parse(readFileSync(new URL('../data/atlas-v0.5.json', import.meta.url)));

// Same biological entity drawn in several modules -> one node on the unified map.
const MERGE = {
  radiation: 'RAD', 'dna-radiation': 'RAD', 've-radiation': 'RAD', 'im-radiation': 'RAD', 'sn-radiation': 'RAD', 'ev-radiation': 'RAD',
  ros: 'ROS', 'dna-ros': 'ROS',
  'dna-p53': 'P53', 'sn-p53': 'P53',
  'dna-p21': 'P21', 'sn-p21': 'P21',
  fap: 'FAP', 'sn-fap': 'FAP', 'im-fap': 'FAP',
  macrophage: 'MAC', 'im-macrophage': 'MAC',
  muscFunction: 'MUSCF', 'dna-function': 'MUSCF',
};
const canon = id => MERGE[id] || id;

// Grid position (column, row) on the unified map. Columns: radiation -> molecular damage -> checkpoint/signal -> cell state -> paracrine/EV -> tissue outcome.
const POS = {
  RAD: [0, 5.2],
  'dna-atr': [2, 0], 'dna-chk1': [3, 0],
  'dna-dsb': [1, 1], 'dna-atm': [2, 1], 'dna-chk2': [3, 1],
  'dna-repair': [2, 2], P53: [3, 2.1], P21: [4, 1.5], 'dna-apoptosis': [4, 2.7],
  ROS: [1, 3.1], 'dna-nrf2': [2, 3.2], no: [1, 4.1],
  musc: [2, 4.6], wnt7a: [3, 3.9], MUSCF: [4, 4.2], reserve: [3, 5.0],
  notchWnt: [5, 3.5], growth: [6, 3.3], myogenesis: [6, 4.6], normalFap: [5, 5.2],
  'dna-mito': [1, 5.4], 'dna-autophagy': [1, 6.4],
  secretome: [4, 6.0], FAP: [3, 6.6], ecm: [5, 6.6], fibrosis: [6, 6.6],
  MAC: [2, 7.6], psmad: [4, 7.4], clearance: [5, 7.7], sb: [6, 7.7], sfn: [6, 8.7], 'ev-fstl1': [4, 8.6],
  've-ev': [2, 9.6], 've-angio': [3, 9.6], 've-perfusion': [2, 10.6],
  'ev-radev': [2, 11.6], 'ev-function': [3, 11.6], 'ev-srm': [4, 10.6], 'ev-collagen': [6, 10.6],
  // scaffold strip (evidence pending)
  've-capillary': [1, 12.75], 've-endo-sen': [2, 12.75], 've-rt-dose': [3, 12.75], 'im-recruit': [4, 12.75], 'im-polar': [5, 12.75],
  'im-causal': [1, 13.65], 'sn-sasp': [2, 13.65], 'sn-senolytic': [3, 13.65], 'ev-targets': [4, 13.65], 'ev-neonatal': [5, 13.65],
};

const LANES = [
  { id: 'dna', r0: -0.5, r1: 3.6, zh: 'DNA损伤 · 检查点 · 氧化应激', en: 'DNA damage · checkpoints · redox' },
  { id: 'musc', r0: 3.6, r1: 5.9, zh: 'MuSC · 成肌再生', en: 'MuSC · myogenic regeneration' },
  { id: 'fap', r0: 5.9, r1: 9.1, zh: 'FAP · TGF-β · ECM · 免疫', en: 'FAP · TGF-β · ECM · immune' },
  { id: 'ev', r0: 9.1, r1: 12.35, zh: '血管/内皮 · 细胞外囊泡', en: 'Vessel / endothelium · extracellular vesicles' },
  { id: 'scaffold', r0: 12.35, r1: 14.4, zh: '证据待补骨架（不连证据边）', en: 'Evidence-pending scaffold (no evidence edges)' },
];
const COLS = [
  { zh: '辐射事件', en: 'Radiation' }, { zh: '分子损伤', en: 'Molecular damage' }, { zh: '感受器/信号', en: 'Sensors / signals' },
  { zh: '检查点/细胞状态', en: 'Checkpoint / cell state' }, { zh: '细胞反应/分泌', en: 'Cell response / secretion' },
  { zh: '旁分泌/修复程序', en: 'Paracrine / repair programs' }, { zh: '组织结局', en: 'Tissue outcome' },
];

const nodes = new Map();
for (const n of reg.nodes) {
  if (n.view === 'overview') continue;
  const id = canon(n.id);
  const pos = POS[id];
  if (!pos) throw new Error(`no position for ${id}`);
  if (!nodes.has(id)) {
    nodes.set(id, { id, type: n.type, status: n.status, label: n.label, sub: n.sub, ids: n.ids || {}, externalIds: n.externalIds || {}, views: [n.view], members: [n.id], c: pos[0], r: pos[1] });
  } else {
    const m = nodes.get(id);
    m.views.includes(n.view) || m.views.push(n.view);
    m.members.push(n.id);
    Object.assign(m.externalIds, n.externalIds || {});
  }
}
// Canonical labels for merged nodes keep the most informative module label.
const LABEL = {
  RAD: { zh: '电离辐射', en: 'Ionizing radiation' },
  P21: { zh: 'p21 / Cdkn1a', en: 'p21 / Cdkn1a' },
  FAP: { zh: 'FAP 衰老样/促纤维化', en: 'Senescence-like / fibrotic FAP' },
  MAC: { zh: '巨噬细胞 TGF-β1', en: 'Macrophage TGF-β1' },
  MUSCF: { zh: 'MuSC 储备/扩增/分化 ↓', en: 'MuSC pool / expansion / differentiation ↓' },
};
for (const [id, l] of Object.entries(LABEL)) if (nodes.has(id)) nodes.get(id).label = l;

const edgeMap = new Map();
for (const e of reg.edges) {
  if (e.view === 'overview' || e.grade === 'N') continue;
  const s = canon(e.source), t = canon(e.target);
  if (!nodes.has(s) || !nodes.has(t)) throw new Error(`edge ${e.id} endpoint missing`);
  if (nodes.get(s).status === 'scaffold' || nodes.get(t).status === 'scaffold') throw new Error(`edge ${e.id} touches scaffold`);
  const key = `${s}>${t}`;
  const rec = { id: e.id, grade: e.grade, kind: e.kind, sign: e.sign, label: e.label, refs: e.refs, model: e.model, doseText: e.doseText, dose: e.dose, time: e.time, method: e.method, functional: e.functional, limitation: e.limitation, view: e.view };
  if (!edgeMap.has(key)) edgeMap.set(key, { key, source: s, target: t, items: [rec] });
  else edgeMap.get(key).items.push(rec);
}
const RANK = { A: 0, B: 1, C: 2 };
const edges = [...edgeMap.values()].map(g => {
  g.items.sort((a, b) => RANK[a.grade] - RANK[b.grade]);
  g.grade = g.items[0].grade; // strongest grade among merged identical relations; each item keeps its own grade
  g.inhibit = g.items.some(i => i.sign === '-');
  g.ids = g.items.map(i => i.id);
  return g;
});

const usedRefs = new Set(edges.flatMap(g => g.items.flatMap(i => i.refs)));
const sources = Object.fromEntries(reg.sources.filter(s => usedRefs.has(s.id)).map(s => [s.id, s]));
const views = Object.fromEntries(reg.views.map(v => [v.id, v.title]));

const DATA = {
  version: 'v0.6', registry: reg.version, generated: reg.generated, doseModel: reg.doseModel, gradeDefinitions: reg.gradeDefinitions,
  lanes: LANES, cols: COLS, nodes: [...nodes.values()], edges, sources, views, excluded: reg.excluded,
};

const template = readFileSync(new URL('./pathway-template-v06.html', import.meta.url), 'utf8');
const html = template.replace('/*__DATA__*/null', JSON.stringify(DATA).replace(/</g, '\\u003c'));
mkdirSync(new URL('../docs/', import.meta.url), { recursive: true });
writeFileSync(new URL('../docs/pathway-v0.6.html', import.meta.url), html);
writeFileSync(new URL('../docs/index.html', import.meta.url), html);
console.log(`pathway v0.6: ${DATA.nodes.length} nodes (${DATA.nodes.filter(n => n.status === 'scaffold').length} scaffold), ${edges.length} drawn edges covering ${edges.reduce((a, g) => a + g.items.length, 0)} evidence relations, ${Object.keys(sources).length} sources`);
