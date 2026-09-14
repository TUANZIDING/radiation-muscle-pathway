import {ui,getText} from './i18n.js';
import {views,getNodes,getEdges,navigation,sources,excluded,findNode,typeColors} from './data.js';
import {atlasSvg} from './diagram.js';
import {createTimeline} from './timeline.js';

const $=id=>document.getElementById(id);
const esc=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const unique=values=>[...new Set(values)];
const viewIds=Object.keys(views);
let lang='zh',filter='all',mode='overview',viewId=location.hash.slice(1)||'overview',selectedNode=null,selectedEdge=null,selectedNav=null,timeline,currentState={stage:0,elapsed:0,total:0,status:'idle',local:0,reduced:false};
if(!views[viewId])viewId='overview';
const contextKey=edge=>edge.level==='A'?'direct':edge.level==='B'?'reference':edge.level==='C'?'inference':'navLevel';
const gradeText=edge=>edge.level==='A'?(lang==='zh'?'A级':'A level'):edge.level==='B'?(lang==='zh'?'B级':'B level'):edge.level==='C'?(lang==='zh'?'C级':'C level'):(lang==='zh'?'N级':'N level');
const clock=ms=>{const seconds=Math.max(0,Math.round(ms/1000));return `${String(Math.floor(seconds/60)).padStart(2,'0')}:${String(seconds%60).padStart(2,'0')}`;};
const labelFor=(view,id)=>{const node=findNode(view,id);return node?getText(node.label,lang):id;};
function sourceCard(id){
  const source=sources[id];if(!source)return `<article class="reference-card"><strong>${esc(id)}</strong><p>${lang==='zh'?'来源记录待补':'Source record pending'}</p></article>`;
  const title=esc(getText(source.title,lang)),depth=esc(getText(source.depth,lang)||'');
  const pubmed=source.pmid?`<a href="https://pubmed.ncbi.nlm.nih.gov/${encodeURIComponent(source.pmid)}/" target="_blank" rel="noreferrer">PMID ${esc(source.pmid)} ↗</a>`:'';
  const doi=source.doi?`<a href="https://doi.org/${encodeURIComponent(source.doi)}" target="_blank" rel="noreferrer">DOI ↗</a>`:'';
  return `<article class="reference-card">${pubmed} ${doi}<p>${title}</p><small>${esc(source.journal||'Project evidence registry')} · ${depth}</small><small>${esc(getText(source.model,lang)||'')}</small></article>`;
}
function layerLabel(id){return id==='all'?ui[lang].all:ui[lang][id]||id;}
function renderBreadcrumbs(){
  const current=getText(views[viewId].title,lang);
  $('breadcrumbs').innerHTML=`<button class="crumb ${viewId==='overview'?'active':''}" data-view-id="overview">${esc(getText(views.overview.title,lang))}</button>${viewId!=='overview'?`<span>›</span><span class="crumb current">${esc(current)}</span>`:''}`;
  document.querySelectorAll('#breadcrumbs [data-view-id]').forEach(button=>button.onclick=()=>setView(button.dataset.viewId));
}
function renderViewList(){
  $('viewList').innerHTML=viewIds.map(id=>{const view=views[id];const active=id===viewId;return `<button class="view-button ${active?'active':''}" data-view-id="${id}"><span class="view-dot ${view.kind}"></span><span><strong>${esc(getText(view.title,lang))}</strong><small>${esc(id==='overview'?(lang==='zh'?'母图':'mother map'):(lang==='zh'?'专题子图':'subgraph'))}</small></span><b>↗</b></button>`;}).join('');
  document.querySelectorAll('#viewList [data-view-id]').forEach(button=>button.onclick=()=>setView(button.dataset.viewId));
}
function renderLayers(){
  const layers=[['all','all'],['direct','direct'],['reference','reference'],['inference','inference']];
  $('layers').innerHTML=layers.map(([id,label])=>`<button class="layer-button ${filter===id?'active':''}" data-layer="${id}"><i class="line-${id}"></i><span>${esc(layerLabel(label))}</span></button>`).join('');
  document.querySelectorAll('[data-layer]').forEach(button=>button.onclick=()=>{filter=button.dataset.layer;applyVisualState();renderLayers();});
}
function renderStages(){
  const stages=views[viewId].stages;
  $('stageList').innerHTML=stages.map((stage,index)=>`<button class="stage-button" data-stage-index="${index}"><span class="num">${String(index+1).padStart(2,'0')}</span><strong>${esc(getText(stage.title,lang))}</strong></button>`).join('');
  $('stageTrack').innerHTML=stages.map((stage,index)=>`<button data-stage-index="${index}" aria-label="${esc(getText(stage.title,lang))}"></button>`).join('');
  document.querySelectorAll('[data-stage-index]').forEach(button=>button.onclick=()=>timeline.go(Number(button.dataset.stageIndex)));
}
function renderRelated(){
  $('relatedViews').innerHTML=viewIds.filter(id=>id!==viewId).map(id=>{const v=views[id],shared=getNodes(id).filter(n=>n.shared).length;return `<button class="related-card" data-view-id="${id}"><span class="related-index">${id==='overview'?'00':id==='dna-redox'?'02':'01'}</span><span><strong>${esc(getText(v.title,lang))}</strong><small>${esc(getText(v.summary,lang))}</small></span><b>↗</b></button>`;}).join('');
  document.querySelectorAll('#relatedViews [data-view-id]').forEach(button=>button.onclick=()=>setView(button.dataset.viewId));
}
function renderSourceDialog(){
  $('sourceCards').innerHTML=Object.keys(sources).map(sourceCard).join('');
  $('excludedRelations').innerHTML=excluded.map(item=>`<article class="excluded-card"><strong>${esc(getText(item.relation,lang))}</strong><p>${esc(getText(item.reason,lang))}</p></article>`).join('');
}
function navForNode(id){return navigation.find(item=>item.view===viewId&&item.source===id&&item.targetView!==viewId);}
function sharedLocations(node){
  if(!node?.shared)return [];
  return viewIds.flatMap(id=>getNodes(id).filter(item=>item.shared===node.shared).map(item=>({view:id,node:item})));
}
function resetInspector(){
  $('inspector').hidden=true;$('inspectorEmpty').hidden=false;$('inspectorEmpty').textContent=ui[lang].empty;$('selectionId').textContent='—';selectedNode=null;selectedEdge=null;selectedNav=null;
}
function renderShared(node){
  const block=document.querySelector('.shared-block'),locations=sharedLocations(node);
  if(!locations.length){block.hidden=true;return;}
  block.hidden=false;$('sharedLocations').innerHTML=locations.map(location=>`<button class="shared-location" data-view-id="${location.view}" data-focus-node="${location.node.id}"><span>${esc(getText(views[location.view].title,lang))}</span><small>${esc(getText(location.node.label,lang))}</small></button>`).join('');
  document.querySelectorAll('[data-focus-node]').forEach(button=>button.onclick=()=>setView(button.dataset.viewId,button.dataset.focusNode));
}
function setTopicLink(node){
  const link=$('topicLink'),nav=navForNode(node?.id),target=nav?.targetView||node?.topic;
  if(!target||target===viewId){link.hidden=true;link.onclick=null;return;}
  link.hidden=false;link.textContent=target==='overview'?ui[lang].back:ui[lang].topic;link.onclick=()=>setView(target,nav?.targetNode||getNodes(target)[0]?.id);
}
function renderInspectorNode(id){
  const node=findNode(viewId,id);if(!node)return;
  const related=getEdges(viewId).filter(edge=>edge.source===id||edge.target===id);
  selectedNode=id;selectedEdge=null;selectedNav=null;$('inspectorEmpty').hidden=true;$('inspector').hidden=false;$('selectionId').textContent=lang==='zh'?'节点':'NODE';$('gradeBadge').textContent=`${related.length} ${lang==='zh'?'条关系':'relations'}`;$('contextBadge').textContent=lang==='zh'?'共享节点':'shared node';$('evidenceTitle').textContent=getText(node.label,lang);$('evidenceSub').textContent=getText(node.sub,lang);$('relation').textContent=related.map(edge=>`${edge.id} · ${getText(edge.label,lang)}`).join('\n')||getText(views[viewId].summary,lang);$('study').textContent=lang==='zh'?'节点汇集不同模型；请逐条点击相连箭头。':'The node aggregates models; select connected edges one by one.';$('dose').textContent=lang==='zh'?'不同研究的剂量不合并。':'Doses from different studies are not pooled.';$('timepoint').textContent=lang==='zh'?'不同研究的时间点不合并。':'Time points from different studies are not pooled.';$('method').textContent=lang==='zh'?'节点本身不是一个独立因果实验。':'A node is not an independent causal experiment.';$('functional').textContent=lang==='zh'?'具体功能读出显示在相连箭头中。':'Functional readouts are shown on connected edges.';$('limits').textContent=lang==='zh'?'共享节点和专题入口用于导航；导航线不是生物学因果证据。':'Shared nodes and module links are navigation; navigation lines are not biological causality.';$('references').innerHTML=unique(related.flatMap(edge=>edge.refs||[])).map(sourceCard).join('')||`<p class="muted-note">${lang==='zh'?'请点击相连箭头查看逐箭头证据。':'Select a connected edge for arrow-level evidence.'}</p>`;setTopicLink(node);renderShared(node);applyVisualState();
}
function renderInspectorEdge(id){
  const edge=getEdges(viewId).find(item=>item.id===id);if(!edge)return;
  selectedEdge=id;selectedNode=null;selectedNav=null;$('inspectorEmpty').hidden=true;$('inspector').hidden=false;$('selectionId').textContent=edge.id;$('gradeBadge').textContent=gradeText(edge);$('contextBadge').textContent=ui[lang][contextKey(edge)];$('evidenceTitle').textContent=`${labelFor(viewId,edge.source)} ${edge.inhibit?'⊣':'→'} ${labelFor(viewId,edge.target)}`;$('evidenceSub').textContent=getText(edge.label,lang);$('relation').textContent=getText(edge.label,lang);$('study').textContent=getText(edge.model,lang);$('dose').textContent=getText(edge.dose,lang);$('timepoint').textContent=getText(edge.time,lang);$('method').textContent=getText(edge.method,lang);$('functional').textContent=getText(edge.functional,lang);$('limits').textContent=getText(edge.limits,lang);$('references').innerHTML=unique(edge.refs||[]).map(sourceCard).join('')||`<p class="muted-note">${lang==='zh'?'本条关系暂无来源卡片。':'No source card is attached to this relation.'}</p>`;$('topicLink').hidden=true;document.querySelector('.shared-block').hidden=true;applyVisualState();
}
function inspectNode(id){timeline.pause();renderInspectorNode(id);}
function inspectEdge(id){timeline.pause();renderInspectorEdge(id);}
function inspectNav(id){const nav=navigation.find(item=>item.id===id);if(!nav)return;selectedNav=id;timeline.pause();setView(nav.targetView,nav.targetNode);}
function bindDiagram(){
  document.querySelectorAll('#atlas [data-node-id]').forEach(node=>{node.onclick=()=>inspectNode(node.dataset.nodeId);node.onkeydown=event=>{if(event.key==='Enter'||event.key===' '){event.preventDefault();inspectNode(node.dataset.nodeId);}};});
  document.querySelectorAll('#atlas [data-edge-id]').forEach(edge=>{edge.onclick=()=>inspectEdge(edge.dataset.edgeId);edge.onkeydown=event=>{if(event.key==='Enter'||event.key===' '){event.preventDefault();inspectEdge(edge.dataset.edgeId);}};});
  document.querySelectorAll('#atlas [data-nav-id]').forEach(nav=>{nav.onclick=()=>inspectNav(nav.dataset.navId);nav.onkeydown=event=>{if(event.key==='Enter'||event.key===' '){event.preventDefault();inspectNav(nav.dataset.navId);}};});
}
function contextVisible(edge){return filter==='all'||contextKey(edge)===filter;}
function applyVisualState(){
  document.body.classList.toggle('network-mode',mode==='network');document.body.classList.toggle('reduced-motion',currentState.reduced);
  const edges=getEdges(viewId),stage=currentState.stage;
  document.querySelectorAll('#atlas .atlas-edge').forEach(element=>{const edge=edges.find(item=>item.id===element.dataset.edgeId);if(!edge)return;element.classList.toggle('hidden-filter',!contextVisible(edge));element.classList.toggle('active-stage',edge.stage===stage);element.classList.toggle('past-stage',edge.stage<stage);element.classList.toggle('future-stage',edge.stage>stage);element.classList.toggle('selected',selectedEdge===edge.id);});
  const visibleRelated=new Set(edges.filter(edge=>contextVisible(edge)&&edge.stage<=stage).flatMap(edge=>[edge.source,edge.target]));
  document.querySelectorAll('#atlas .atlas-node').forEach(element=>{const nodeId=element.dataset.nodeId;element.classList.toggle('stage-related',visibleRelated.has(nodeId)||selectedNode===nodeId);element.classList.toggle('selected',selectedNode===nodeId);});
  document.querySelectorAll('#atlas .navigation-edge').forEach(element=>element.classList.toggle('selected',selectedNav===element.dataset.navId));
}
function renderState(state){
  currentState=state;const stages=views[viewId].stages,stage=stages[state.stage]||stages[0];
  $('stageTitle').textContent=getText(stage.title,lang);$('stageSummary').textContent=getText(stage.summary,lang);$('stageCount').textContent=`${String(state.stage+1).padStart(2,'0')} / ${String(stages.length).padStart(2,'0')}`;$('clock').textContent=`${clock(state.elapsed)} / ${clock(state.total)}`;$('scrub').max=state.total;$('scrub').value=state.elapsed;
  const playing=state.status==='playing';$('play').innerHTML=`${playing?'Ⅱ':'▶'} <span>${playing?esc(ui[lang].pause):esc(ui[lang].play)}</span>`;$('playTop').innerHTML=`${playing?'Ⅱ':'▶'} <span>${playing?esc(ui[lang].pause):esc(ui[lang].playTop)}</span>`;$('prev').disabled=state.stage===0;$('next').disabled=state.stage===stages.length-1;$('reduced').checked=state.reduced;
  document.querySelectorAll('[data-stage-index]').forEach(button=>{const index=Number(button.dataset.stageIndex);button.classList.toggle('active',index===state.stage);button.classList.toggle('past',index<state.stage);});
  applyVisualState();
}
function renderDiagram(){ $('atlas').innerHTML=atlasSvg(viewId,lang,mode);bindDiagram(); }
function renderAll(){
  document.documentElement.lang=lang==='zh'?'zh-CN':'en';document.title=ui[lang].pageTitle;document.body.classList.toggle('lang-en',lang==='en');document.querySelectorAll('[data-ui]').forEach(element=>{const key=element.dataset.ui;if(ui[lang][key])element.textContent=ui[lang][key];});$('language').textContent=ui[lang].language;$('prev').setAttribute('aria-label',ui[lang].prev);$('next').setAttribute('aria-label',ui[lang].next);$('scrub').setAttribute('aria-label',ui[lang].progress);$('closeSources').setAttribute('aria-label',ui[lang].close);renderBreadcrumbs();renderViewList();renderLayers();renderStages();renderRelated();renderSourceDialog();renderDiagram();if(selectedEdge)renderInspectorEdge(selectedEdge);else if(selectedNode)renderInspectorNode(selectedNode);else resetInspector();renderState(currentState);
}
function setView(next,focus){
  if(!views[next])next='overview';if(viewId===next){if(focus)inspectNode(focus);return;}
  if(timeline)timeline.destroy();viewId=next;history.replaceState(null,'',`#${viewId}`);selectedNode=null;selectedEdge=null;selectedNav=null;currentState={stage:0,elapsed:0,total:0,status:'idle',local:0,reduced:Boolean($('reduced')?.checked)};timeline=createTimeline(views[viewId].stages,renderState);renderAll();if(focus)setTimeout(()=>inspectNode(focus),0);
}
function localize(){renderAll();}
timeline=createTimeline(views[viewId].stages,renderState);
$('play').onclick=()=>currentState.status==='playing'?timeline.pause():timeline.play();$('playTop').onclick=()=>$('play').click();$('replay').onclick=()=>timeline.replay();$('prev').onclick=()=>timeline.go(currentState.stage-1);$('next').onclick=()=>timeline.go(currentState.stage+1);$('scrub').oninput=event=>timeline.seek(event.target.value);$('speed').onchange=event=>timeline.rate(event.target.value);$('reduced').onchange=event=>timeline.reduced(event.target.checked);$('overview').onclick=()=>{mode='overview';$('overview').classList.add('active');$('network').classList.remove('active');renderDiagram();renderState(currentState);};$('network').onclick=()=>{mode='network';$('network').classList.add('active');$('overview').classList.remove('active');renderDiagram();renderState(currentState);};$('language').onclick=()=>{lang=lang==='zh'?'en':'zh';localize();};$('sourcesBtn').onclick=()=>$('sourceDialog').showModal();$('closeSources').onclick=()=>$('sourceDialog').close();$('sourceDialog').onclick=event=>{if(event.target===$('sourceDialog'))$('sourceDialog').close();};window.addEventListener('hashchange',()=>{const next=location.hash.slice(1)||'overview';if(next!==viewId)setView(next);});
renderAll();
window.atlasV04={play:()=>timeline.play(),pause:()=>timeline.pause(),replay:()=>timeline.replay(),seek:value=>timeline.seek(value),go:index=>timeline.go(index),selectNode:inspectNode,selectEdge:inspectEdge,navigate:(view,focus)=>setView(view,focus),setLanguage:next=>{lang=next==='en'?'en':'zh';localize();},setFilter:next=>{filter=next;renderLayers();applyVisualState();},getState:()=>({...currentState,lang,filter,mode,viewId,selectedNode,selectedEdge,selectedNav,views:viewIds})};
