import {atlasSvg} from './diagram.js';
import {edges} from './pathway-data.js';

const layerFor=e=>e.kind==='reference'?'reference':(['inference','candidate','partial'].includes(e.kind)?'inference':'direct');
export function createScene(host,{onNode,onEdge}){
 let lang='zh',selected=null,edgeSelected=null,lastArgs={stage:0};
 function bind(){
  host.querySelectorAll('[data-node-id]').forEach(el=>{const run=()=>onNode(el.dataset.nodeId);el.onclick=run;el.onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();run();}};});
  host.querySelectorAll('[data-edge-id]').forEach(el=>{const run=()=>onEdge(el.dataset.edgeId);el.onclick=run;el.onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();run();}};});
 }
 function language(next){lang=next;host.innerHTML=atlasSvg(lang);bind();}
 function render({stage=0,local=0,filter='all',mode='overview',reduced=false,selectedNode=null,selectedEdge=null}){
  lastArgs={stage,local,filter,mode,reduced,selectedNode,selectedEdge};
  selected=selectedNode;edgeSelected=selectedEdge;host.classList.toggle('network-mode',mode==='network');host.classList.toggle('reduced-motion',reduced);host.style.setProperty('--stage-progress',String(local));
  const svg=host.querySelector('svg');if(svg){const mobile=host.clientWidth<=640,boxes=[[0,135,660,430],[125,45,650,430],[360,245,650,390],[550,155,660,440],[745,70,575,520],[360,0,960,710]];svg.setAttribute('viewBox',mobile?boxes[stage].join(' '):'0 0 1320 720');}
  const allowed=new Set();
  host.querySelectorAll('[data-edge-id]').forEach(el=>{const e=edges.find(x=>x.id===el.dataset.edgeId),layer=layerFor(e),visible=filter==='all'||filter===layer,active=e.stage===stage,past=e.stage<stage;el.style.display=visible?'':'none';el.classList.toggle('active-stage',active);el.classList.toggle('past-stage',past);el.classList.toggle('future-stage',e.stage>stage);el.classList.toggle('selected',edgeSelected===e.id);if(visible&&(active||past)){allowed.add(e.source);allowed.add(e.target);}});
  host.querySelectorAll('[data-node-id]').forEach(el=>{const id=el.dataset.nodeId;el.classList.toggle('selected',selected===id);el.classList.toggle('stage-related',allowed.has(id));el.classList.toggle('psmad-late',id==='psmad'&&stage>=4);});
 }
 new ResizeObserver(()=>render(lastArgs)).observe(host);language(lang);return {language,render,stats:()=>({nodes:host.querySelectorAll('[data-node-id]').length,edges:host.querySelectorAll('[data-edge-id]').length,language:lang})};
}
