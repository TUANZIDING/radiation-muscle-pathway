import {getNodes,getEdges,navigation,typeColors,views} from './data.js';
import {getText} from './i18n.js';

const esc=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const levelColor={A:'#258b83',B:'#858d8b',C:'#8b72a8',N:'#287e8a'};
const nodeMap=view=>Object.fromEntries(getNodes(view).map(n=>[n.id,n]));
const center=n=>({x:n.x+n.w/2,y:n.y+n.h/2});
function edgePath(e,view){
  const map=nodeMap(view),a=map[e.source],b=map[e.target];
  if(!a||!b)return {d:'',mx:0,my:0};
  const ac=center(a),bc=center(b),dx=bc.x-ac.x,dy=bc.y-ac.y;let x1=ac.x,y1=ac.y,x2=bc.x,y2=bc.y;
  if(Math.abs(dx)>=Math.abs(dy)){x1+=Math.sign(dx)*a.w*.48;x2-=Math.sign(dx)*b.w*.48;const bend=Math.max(42,Math.abs(dx)*.42);return {d:`M${x1},${y1} C${x1+Math.sign(dx)*bend},${y1} ${x2-Math.sign(dx)*bend},${y2} ${x2},${y2}`,mx:(x1+x2)/2,my:(y1+y2)/2-8};}
  y1+=Math.sign(dy)*a.h*.48;y2-=Math.sign(dy)*b.h*.48;const bend=Math.max(42,Math.abs(dy)*.42);return {d:`M${x1},${y1} C${x1},${y1+Math.sign(dy)*bend} ${x2},${y2-Math.sign(dy)*bend} ${x2},${y2}`,mx:(x1+x2)/2+8,my:(y1+y2)/2};
}
function navPath(nav,view){
  const n=nodeMap(view)[nav.source];if(!n)return {d:'',mx:0,my:0};
  const c=center(n),right=c.x<820,tx=right?Math.min(1285,n.x+n.w+190):Math.max(36,n.x-170),ty=Math.max(34,Math.min(680,c.y+(nav.id.includes('OV')?0:nav.id.includes('DNA')?72:-72)));
  const sx=right?n.x+n.w:n.x;const sy=c.y;const bend=Math.max(50,Math.abs(tx-sx)*.38);
  return {d:`M${sx},${sy} C${right?sx+bend:sx-bend},${sy} ${right?tx-bend:tx+bend},${ty} ${tx},${ty}`,mx:(sx+tx)/2,my:(sy+ty)/2-8,tx,ty};
}
function nodeMarkup(n,lang){
  const label=getText(n.label,lang),sub=getText(n.sub,lang),color=typeColors[n.type]||'#667876';
  return `<g class="atlas-node node-${esc(n.type)}" data-node-id="${esc(n.id)}" tabindex="0" role="button" aria-label="${esc(label)}"><rect class="node-body" x="${n.x}" y="${n.y}" width="${n.w}" height="${n.h}" rx="17" fill="#fff"/><rect class="node-accent" x="${n.x}" y="${n.y}" width="6" height="${n.h}" rx="3" fill="${color}"/><circle cx="${n.x+22}" cy="${n.y+21}" r="7" fill="${color}" opacity=".16"/><circle cx="${n.x+22}" cy="${n.y+21}" r="3.2" fill="${color}"/><text x="${n.x+n.w/2+5}" y="${n.y+31}" text-anchor="middle" class="node-title" fill="${color}">${esc(label)}</text><text x="${n.x+n.w/2+5}" y="${n.y+53}" text-anchor="middle" class="node-sub">${esc(sub)}</text>${n.topic?`<text class="node-topic" x="${n.x+n.w-16}" y="${n.y+19}" text-anchor="middle">↗</text>`:''}</g>`;
}
function edgeMarkup(e,lang,view){
  const p=edgePath(e,view);if(!p.d)return '';
  const label=getText(e.label,lang),klass=`level-${e.level} kind-${e.kind||'observed'}`;
  return `<g class="atlas-edge ${klass}" data-edge-id="${esc(e.id)}" data-stage="${e.stage}" role="button" tabindex="0" aria-label="${esc(e.id+' '+label)}"><path class="edge-hit" d="${p.d}"/><path class="edge-line" d="${p.d}" marker-end="url(#${e.inhibit?'bar':'arrow'}-${e.level})"/><circle class="edge-pulse" r="6"><animateMotion dur="2.2s" repeatCount="indefinite" path="${p.d}"/></circle><g class="edge-badge" transform="translate(${p.mx} ${p.my})"><rect x="-24" y="-11" width="48" height="22" rx="10"/><text text-anchor="middle" y="4">${esc(e.id)}</text></g></g>`;
}
function navigationMarkup(nav,lang,view){
  const p=navPath(nav,view);if(!p.d)return '';
  return `<g class="navigation-edge" data-nav-id="${esc(nav.id)}" tabindex="0" role="button" aria-label="${esc(getText(nav.label,lang))}"><path class="edge-hit" d="${p.d}"/><path class="edge-line" d="${p.d}" marker-end="url(#arrow-N)"/><g class="nav-badge" transform="translate(${p.mx} ${p.my})"><rect x="-66" y="-13" width="132" height="26" rx="13"/><text text-anchor="middle" y="4">N · ${esc(lang==='zh'?'机制导航':'navigation')}</text></g></g>`;
}
function background(view,lang,mode){
  const overview=view==='overview',dna=view==='dna-redox';
  const label=overview?(lang==='zh'?'机制总览 · 母图':'MECHANISM OVERVIEW · MOTHER MAP'):dna?(lang==='zh'?'细胞核 / 线粒体响应':'NUCLEUS / MITOCHONDRIAL RESPONSE'):(lang==='zh'?'肌肉微环境 · MuSC–FAP–ECM':'MUSCLE NICHE · MuSC–FAP–ECM');
  if(mode==='network')return `<rect width="1320" height="720" rx="28" fill="#fafbf8"/><text x="38" y="43" class="zone-label">${esc(label)} · NETWORK</text><path d="M38 64H1282" stroke="#dae4de"/>`;
  if(overview)return `<rect width="1320" height="720" rx="28" fill="#f4f7f3"/><text x="38" y="43" class="zone-label">${esc(label)}</text><g class="overview-zones"><rect x="28" y="68" width="402" height="586" rx="26" fill="#eef4f0"/><rect x="455" y="68" width="520" height="586" rx="26" fill="#f7f4ee"/><rect x="1000" y="68" width="292" height="586" rx="26" fill="#f4eef1"/><text x="52" y="98" class="zone-label">${esc(lang==='zh'?'触发与细胞反应':'TRIGGER & CELL RESPONSE')}</text><text x="480" y="98" class="zone-label">${esc(lang==='zh'?'生态位通讯':'NICHE COMMUNICATION')}</text><text x="1025" y="98" class="zone-label">${esc(lang==='zh'?'组织结局与窗口':'TISSUE OUTCOME & WINDOWS')}</text></g>`;
  if(dna)return `<rect width="1320" height="720" rx="28" fill="#f6f8f5"/><text x="38" y="43" class="zone-label">${esc(label)}</text><g class="dna-zones"><rect x="208" y="72" width="704" height="330" rx="26" fill="#eef3f0"/><rect x="208" y="425" width="718" height="207" rx="26" fill="#f7f0e9"/><rect x="940" y="72" width="370" height="330" rx="26" fill="#f1edf4"/><rect x="940" y="425" width="370" height="207" rx="26" fill="#eef3f5"/><text x="232" y="101" class="zone-label">${esc(lang==='zh'?'DNA损伤反应':'DNA DAMAGE RESPONSE')}</text><text x="232" y="454" class="zone-label">${esc(lang==='zh'?'氧化应激 / 线粒体':'REDOX / MITOCHONDRIA')}</text><text x="965" y="101" class="zone-label">${esc(lang==='zh'?'检查点输出':'CHECKPOINT OUTPUT')}</text><text x="965" y="454" class="zone-label">${esc(lang==='zh'?'功能结局 / 候选':'FUNCTION / CANDIDATE')}</text></g>`;
  return `<rect width="1320" height="720" rx="28" fill="#f4f7f3"/><text x="38" y="43" class="zone-label">${esc(label)}</text><g class="tissue-context"><rect x="205" y="78" width="1080" height="132" rx="66" fill="#e8b0a2" opacity=".64"/><path d="M205 116H1285M205 153H1285M205 190H1285" stroke="#b9675d" stroke-width="4" stroke-dasharray="13 8" opacity=".32"/><path d="M205 218H1285" stroke="#d4ab8e" stroke-width="7" stroke-dasharray="13 8" opacity=".65"/><text x="1180" y="236" class="anatomy-label">${esc(lang==='zh'?'基底膜':'basal lamina')}</text><path d="M300 498C485 460 720 555 890 510S1120 510 1285 525" fill="none" stroke="#96b9b0" stroke-width="18" opacity=".2"/><text x="38" y="690" class="zone-label">${esc(lang==='zh'?'间质 / 微环境':'INTERSTITIUM / NICHE')}</text></g>`;
}
export function atlasSvg(view='overview',lang='zh',mode='overview'){
  const markerDefs=['A','B','C','N'].map(level=>`<marker id="arrow-${level}" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10Z" fill="${levelColor[level]}"/></marker><marker id="bar-${level}" viewBox="0 0 12 14" refX="8" refY="7" markerWidth="8" markerHeight="9" orient="auto"><path d="M8 0V14" stroke="${levelColor[level]}" stroke-width="2.5"/></marker>`).join('');
  const navs=navigation.filter(n=>n.view===view),edges=getEdges(view),nodes=getNodes(view),title=getText(views[view].title,lang);
  return `<svg id="atlasSvg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1320 720" role="img" aria-label="${esc(title)}"><defs>${markerDefs}</defs>${background(view,lang,mode)}<g class="edges">${edges.map(e=>edgeMarkup(e,lang,view)).join('')}</g><g class="nodes">${nodes.map(n=>nodeMarkup(n,lang)).join('')}</g><g class="navigation-edges">${navs.map(n=>navigationMarkup(n,lang,view)).join('')}</g></svg>`;
}
