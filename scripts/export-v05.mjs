// Export the v0.5 atlas registry into tool-neutral formats.
// Outputs:
//   data/atlas-v0.5.json          unified registry (views, nodes, edges with structured dose, sources, navigation, exclusions)
//   exports/evidence-table-v0.5.csv  one row per evidence edge
//   exports/atlas-v0.5.sbgn       SBGN-ML Activity Flow map (one <map> per view)
// Run: node scripts/export-v05.mjs   (no network access needed)
import {mkdirSync,writeFileSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
import {views,viewNodes,viewEdges,navigation,sources,excluded,externalIds} from '../atlas/src/data.js';
import {doseProfile,ALPHA_BETA,RT_EQD2_LIMIT} from '../atlas/src/dose.js';

const root=fileURLToPath(new URL('..',import.meta.url));
const txt=v=>v==null?'':typeof v==='string'?v:{zh:v.zh??'',en:v.en??''};
const nodeOut=(view,n)=>({id:n.id,view,type:n.type,status:n.status||'evidence',label:txt(n.label),sub:txt(n.sub),shared:n.shared||null,topic:n.topic||null,ids:externalIds[n.id]||{},layout:{x:n.x,y:n.y,w:n.w,h:n.h}});
const edgeOut=(view,e)=>{const dose=doseProfile(e.id);return {id:e.id,view,source:e.source,target:e.target,sign:e.inhibit?'-':'+',grade:e.level,kind:e.kind,stage:e.stage,label:txt(e.label),refs:e.refs||[],model:txt(e.model),doseText:txt(e.dose),dose:{regimens:dose.regimens,classes:dose.classes},time:txt(e.time),method:txt(e.method),functional:txt(e.functional),limitation:txt(e.limits)};};

const registry={
  schema:'atlas-schema-v0.5.json',
  version:'0.5.0',
  generated:'build-time export; regenerate with node scripts/export-v05.mjs',
  doseModel:{type:'linear-quadratic EQD2',alphaBeta:ALPHA_BETA,rtRelevantMaxEqd2:RT_EQD2_LIMIT,caveat:'LQ conversion is unreliable for single fractions above ~10 Gy; values are teaching aids, not dosimetry.'},
  gradeDefinitions:{A:'measurement or functional readout in a direct radiation muscle/cell model',B:'conditional support from general injury, canonical pathways or other tissues',C:'inference, abstract-level evidence or candidate intervention',N:'navigation only, never biological evidence'},
  views:Object.values(views).map(v=>({id:v.id,kind:v.kind,scaffold:Boolean(v.scaffold),title:txt(v.title),summary:txt(v.summary),stages:v.stages.map(s=>({id:s.id,title:txt(s.title),summary:txt(s.summary)}))})),
  nodes:Object.entries(viewNodes).flatMap(([view,ns])=>ns.map(n=>nodeOut(view,n))),
  edges:Object.entries(viewEdges).flatMap(([view,es])=>es.map(e=>edgeOut(view,e))),
  sources:Object.entries(sources).map(([id,s])=>({id,pmid:s.pmid||null,doi:s.doi||null,url:s.url||null,journal:s.journal||null,title:txt(s.title),reviewDepth:txt(s.depth),model:txt(s.model)})),
  navigation:navigation.map(n=>({...n,label:txt(n.label),grade:'N'})),
  excluded:excluded.map(x=>({id:x.id,relation:txt(x.relation),reason:txt(x.reason)}))
};
mkdirSync(root+'data',{recursive:true});mkdirSync(root+'exports',{recursive:true});
writeFileSync(root+'data/atlas-v0.5.json',JSON.stringify(registry,null,2)+'\n');

// CSV
const csvCell=v=>{const s=String(v??'');return /[",\n]/.test(s)?`"${s.replace(/"/g,'""')}"`:s;};
const header=['edge_id','view','source','target','sign','grade','kind','label_en','label_zh','refs','pmids','model_en','dose_text_en','regimens','eqd2_gy','dose_classes','time_en','method_en','functional_en','limitation_en','limitation_zh'];
const rows=registry.edges.map(e=>{
  const pmids=e.refs.map(r=>sources[r]?.pmid).filter(Boolean).join(';');
  const reg=e.dose.regimens.map(r=>`${r.setting}:${r.gyPerFraction??'?'}Gy${r.fractions?`x${r.fractions}`:''}`).join(';');
  const eq=e.dose.regimens.map(r=>r.eqd2).filter(v=>v!=null).join(';');
  return [e.id,e.view,e.source,e.target,e.sign,e.grade,e.kind,e.label.en,e.label.zh,e.refs.join(';'),pmids,e.model.en,typeof e.doseText==='string'?e.doseText:e.doseText.en,reg,eq,e.dose.classes.join(';'),e.time.en,e.method.en,e.functional.en,e.limitation.en,e.limitation.zh].map(csvCell).join(',');
});
writeFileSync(root+'exports/evidence-table-v0.5.csv','\ufeff'+[header.join(','),...rows].join('\n')+'\n');

// SBGN-ML Activity Flow. Activity Flow is chosen over Process Description because the atlas records
// influences between activities (A increases / associates with B) rather than biochemical reactions with
// explicit reactants, products and stoichiometry, which most edges cannot support.
const x=s=>String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
const glyphClass=n=>n.status==='scaffold'?'biological activity':['outcome','event'].includes(n.type)?'phenotype':'biological activity';
const arcClass=e=>e.sign==='-'?'negative influence':e.kind==='inference'||e.kind==='candidate'||e.kind==='reference'||e.kind==='partial'?'unknown influence':'positive influence';
const maps=registry.views.map(v=>{
  const ns=registry.nodes.filter(n=>n.view===v.id),es=registry.edges.filter(e=>e.view===v.id);
  const glyphs=ns.map(n=>`    <glyph id="${x(v.id+'__'+n.id)}" class="${glyphClass(n)}"><label text="${x(n.label.en)}"/><bbox x="${n.layout.x}" y="${n.layout.y}" w="${n.layout.w}" h="${n.layout.h}"/><notes><html:body xmlns:html="http://www.w3.org/1999/xhtml">status=${x(n.status)}; ids=${x(JSON.stringify(n.ids))}</html:body></notes></glyph>`).join('\n');
  const arcs=es.map(e=>`    <arc id="${x(v.id+'__'+e.id)}" class="${arcClass(e)}" source="${x(v.id+'__'+e.source)}" target="${x(v.id+'__'+e.target)}"><notes><html:body xmlns:html="http://www.w3.org/1999/xhtml">grade=${e.grade}; kind=${x(e.kind)}; refs=${x(e.refs.join(';'))}</html:body></notes><start x="0" y="0"/><end x="0" y="0"/></arc>`).join('\n');
  return `  <map id="${x(v.id)}" language="activity flow">\n${glyphs}\n${arcs}\n  </map>`;
}).join('\n');
writeFileSync(root+'exports/atlas-v0.5.sbgn',`<?xml version="1.0" encoding="UTF-8"?>\n<!-- Generated by scripts/export-v05.mjs. Evidence grades live in arc notes; C-level and reference edges are exported as unknown influence. -->\n<sbgn xmlns="http://sbgn.org/libsbgn/0.3">\n${maps}\n</sbgn>\n`);

console.log(`Exported ${registry.nodes.length} nodes, ${registry.edges.length} edges, ${registry.sources.length} sources across ${registry.views.length} views.`);
